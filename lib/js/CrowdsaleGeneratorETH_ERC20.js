"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var CrowdsaleGeneratorETH_ERC20 = exports.CrowdsaleGeneratorETH_ERC20 = 
{
  "contractName": "CrowdsaleGeneratorETH_ERC20",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\n\nimport \"../math/SafeMath.sol\";\nimport \"../interfaces/DBInterface.sol\";\nimport \"../database/Events.sol\";\nimport \"../tokens/erc20/DividendToken.sol\";\n\ninterface CrowdsaleGeneratorETH_ERC20 {\n  function transferFrom(address _from, address _to, uint256 _value) external returns (bool);\n}\ninterface CrowdsaleGeneratorETH_ERC20Burner {\n  function burn(address _tokenHolder, uint _amount, address _burnToken) payable external returns (bool);\n}\n\n// @title A crowdsale generator contract\n// @author Kyle Dewhurst, MyBit Foundation\n// @notice AssetManagers can initiate a crowdsale that accepts Ether as payment here\ncontract CrowdsaleGeneratorETH {\n  using SafeMath for uint256;\n\n  DBInterface public database;\n  Events public events;\n  CrowdsaleGeneratorETH_ERC20Burner public burner;\n\n  uint constant scalingFactor = 1e32;   // Used to avoid rounding errors\n\n  // @notice This contract\n  // @param: The address for the database contract used by this platform\n  constructor(address _database, address _events)\n  public{\n      database = DBInterface(_database);\n      events = Events(_events);\n      burner = CrowdsaleGeneratorETH_ERC20Burner(database.addressStorage(keccak256(abi.encodePacked(\"contract\", \"ERC20Burner\"))));\n  }\n\n  // @notice AssetManagers can initiate a crowdfund for a new asset here\n  // @dev the crowdsaleETH contract is granted rights to mint asset-tokens as it receives funding\n  // @param (string) _assetURI = The location where information about the asset can be found\n  // @param (bytes32) _operatorID = The ID of the operator who is to create and install this asset\n  // @param (uint) _fundingLength = The number of seconds this crowdsale is to go on for until it fails\n  // @param (uint) _amountToRaise = The amount of WEI required to raise for the crowdsale to be a success\n  // @param (uint) _assetManagerPerc = The percentage of the total revenue which is to go to the AssetManager if asset is a success\n  function createAssetOrderETH(string _assetURI, address _assetManager, bytes32 _operatorID, uint _fundingLength, uint _startTime, uint _amountToRaise, uint _assetManagerPerc, uint _escrow, address _burnToken)\n  external\n  payable\n  // burnRequired\n  returns (bool) {\n    if(_burnToken == address(0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)){\n      require(burner.burn.value(msg.value)(msg.sender, database.uintStorage(keccak256(abi.encodePacked(msg.sig, address(this)))), _burnToken));\n    } else {\n      require(burner.burn(msg.sender, database.uintStorage(keccak256(abi.encodePacked(msg.sig, address(this)))), _burnToken));\n    }\n    require(msg.sender == _assetManager || database.boolStorage(keccak256(abi.encodePacked(\"approval\", _assetManager, msg.sender, address(this), msg.sig))), \"User not approved\");\n    require(_amountToRaise > 0, \"Crowdsale goal is zero\");\n    require(_assetManagerPerc < 100, \"Manager percent need to be less than 100\");\n    require(database.boolStorage(keccak256(abi.encodePacked(\"operator.acceptsEther\", _operatorID))), \"Operator does not accept Ether\");\n    require(database.addressStorage(keccak256(abi.encodePacked(\"operator\", _operatorID))) != address(0), \"Operator does not exist\");\n    require(!database.boolStorage(keccak256(abi.encodePacked(\"asset.uri\", _assetURI))), \"Asset URI is not unique\"); //Check that asset URI is unique\n    uint startTime;\n    if(_startTime < now){\n      startTime = now;\n    } else {\n      startTime = _startTime;\n    }\n    address assetAddress = address(new DividendToken(_assetURI, database.addressStorage(keccak256(abi.encodePacked(\"contract\", \"CrowdsaleETH\")))));   // Gives this contract all new asset tokens\n    database.setUint(keccak256(abi.encodePacked(\"crowdsale.start\", assetAddress)), startTime);\n    database.setUint(keccak256(abi.encodePacked(\"crowdsale.deadline\", assetAddress)), startTime.add(_fundingLength));\n    database.setUint(keccak256(abi.encodePacked(\"asset.managerFee\", assetAddress)), _amountToRaise.mul(uint(100).mul(scalingFactor).div(uint(100).sub(_assetManagerPerc)).sub(scalingFactor)).div(scalingFactor));\n    database.setUint(keccak256(abi.encodePacked(\"crowdsale.goal\", assetAddress)), _amountToRaise);\n    database.setAddress(keccak256(abi.encodePacked(\"asset.manager\", assetAddress)), _assetManager);\n    database.setAddress(keccak256(abi.encodePacked(\"asset.operator\", assetAddress)), database.addressStorage(keccak256(abi.encodePacked(\"operator\", _operatorID))));\n    database.setBool(keccak256(abi.encodePacked(\"asset.uri\", _assetURI)), true); //Set to ensure a unique asset URI\n    //If escrow, lock\n    if(_escrow > 0){ require(lockEscrowInternal(_assetManager, assetAddress, _escrow));}\n    events.asset('Asset funding started', _assetURI, assetAddress, _assetManager);\n    return true;\n  }\n\n  // @notice platform owners can destroy contract here\n  function destroy()\n  onlyOwner\n  external {\n    events.transaction('CrowdsaleGeneratorETH destroyed', address(this), msg.sender, address(this).balance, '');\n    selfdestruct(msg.sender);\n  }\n\n  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n  //                                            Internal/ Private Functions\n  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n\n\n  function lockEscrowInternal(address _assetManager, address _assetAddress, uint _amount)\n  private\n  returns (bool) {\n    bytes32 assetManagerEscrowID = keccak256(abi.encodePacked(_assetAddress, _assetManager));\n    address platformToken = database.addressStorage(keccak256(abi.encodePacked(\"platform.token\")));\n    require(CrowdsaleGeneratorETH_ERC20(platformToken).transferFrom(_assetManager, database.addressStorage(keccak256(abi.encodePacked(\"contract\", \"AssetManagerEscrow\"))), _amount));\n    database.setUint(keccak256(abi.encodePacked(\"asset.escrow\", assetManagerEscrowID)), _amount);\n    database.setAddress(keccak256(abi.encodePacked(\"asset.manager\", _assetAddress)), _assetManager);\n    events.escrow('Escrow locked', _assetAddress, assetManagerEscrowID, _assetManager, _amount);\n    return true;\n  }\n\n  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n  //                                            Modifiers\n  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n\n\n  // // @notice reverts if asset manager is unable to burn pp\n  // modifier burnRequired {\n  //   //emit LogSig(msg.sig);\n  //   require(burner.burn(msg.sender, database.uintStorage(keccak256(abi.encodePacked(msg.sig, address(this))))));\n  //   _;\n  // }\n\n  // @notice Sender must be a registered owner\n  modifier onlyOwner {\n    require(database.boolStorage(keccak256(abi.encodePacked(\"owner\", msg.sender))), \"Not owner\");\n    _;\n  }\n\n  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n  //                                            Events\n  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n\n  //event LogAssetFundingStarted(bytes32 indexed _assetID, address indexed _assetManager, string _assetURI, address indexed _tokenAddress);\n  //event LogSig(bytes4 _sig);\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/crowdsale/CrowdsaleGeneratorETH.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/crowdsale/CrowdsaleGeneratorETH.sol",
    "exportedSymbols": {
      "CrowdsaleGeneratorETH": [
        4507
      ],
      "CrowdsaleGeneratorETH_ERC20": [
        3957
      ],
      "CrowdsaleGeneratorETH_ERC20Burner": [
        3969
      ]
    },
    "id": 4508,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3941,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:15"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../math/SafeMath.sol",
        "id": 3942,
        "nodeType": "ImportDirective",
        "scope": 4508,
        "sourceUnit": 22711,
        "src": "26:30:15",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/DBInterface.sol",
        "file": "../interfaces/DBInterface.sol",
        "id": 3943,
        "nodeType": "ImportDirective",
        "scope": 4508,
        "sourceUnit": 9333,
        "src": "57:39:15",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/Events.sol",
        "file": "../database/Events.sol",
        "id": 3944,
        "nodeType": "ImportDirective",
        "scope": 4508,
        "sourceUnit": 7234,
        "src": "97:32:15",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc20/DividendToken.sol",
        "file": "../tokens/erc20/DividendToken.sol",
        "id": 3945,
        "nodeType": "ImportDirective",
        "scope": 4508,
        "sourceUnit": 32032,
        "src": "130:43:15",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 3957,
        "linearizedBaseContracts": [
          3957
        ],
        "name": "CrowdsaleGeneratorETH_ERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 3956,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3952,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3947,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3956,
                  "src": "239:13:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3946,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "239:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3949,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3956,
                  "src": "254:11:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3948,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "254:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3951,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 3956,
                  "src": "267:14:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3950,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "267:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "238:44:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 3955,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3954,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3956,
                  "src": "301:4:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3953,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "301:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "300:6:15"
            },
            "scope": 3957,
            "src": "217:90:15",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 4508,
        "src": "175:134:15"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 3969,
        "linearizedBaseContracts": [
          3969
        ],
        "name": "CrowdsaleGeneratorETH_ERC20Burner",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 3968,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3964,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3959,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 3968,
                  "src": "372:20:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3958,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "372:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3961,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 3968,
                  "src": "394:12:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3960,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "394:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3963,
                  "name": "_burnToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 3968,
                  "src": "408:18:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3962,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "408:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "371:56:15"
            },
            "payable": true,
            "returnParameters": {
              "id": 3967,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3966,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3968,
                  "src": "454:4:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3965,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "454:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "453:6:15"
            },
            "scope": 3969,
            "src": "358:102:15",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 4508,
        "src": "310:152:15"
      },
      {
        "baseContracts": [],
        "contractDependencies": [
          32031
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 4507,
        "linearizedBaseContracts": [
          4507
        ],
        "name": "CrowdsaleGeneratorETH",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 3972,
            "libraryName": {
              "contractScope": null,
              "id": 3970,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 22710,
              "src": "674:8:15",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$22710",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "668:27:15",
            "typeName": {
              "id": 3971,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "687:7:15",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 3974,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 4507,
            "src": "699:27:15",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_DBInterface_$9332",
              "typeString": "contract DBInterface"
            },
            "typeName": {
              "contractScope": null,
              "id": 3973,
              "name": "DBInterface",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9332,
              "src": "699:11:15",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DBInterface_$9332",
                "typeString": "contract DBInterface"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 3976,
            "name": "events",
            "nodeType": "VariableDeclaration",
            "scope": 4507,
            "src": "730:20:15",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Events_$7233",
              "typeString": "contract Events"
            },
            "typeName": {
              "contractScope": null,
              "id": 3975,
              "name": "Events",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 7233,
              "src": "730:6:15",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Events_$7233",
                "typeString": "contract Events"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 3978,
            "name": "burner",
            "nodeType": "VariableDeclaration",
            "scope": 4507,
            "src": "754:47:15",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_CrowdsaleGeneratorETH_ERC20Burner_$3969",
              "typeString": "contract CrowdsaleGeneratorETH_ERC20Burner"
            },
            "typeName": {
              "contractScope": null,
              "id": 3977,
              "name": "CrowdsaleGeneratorETH_ERC20Burner",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3969,
              "src": "754:33:15",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_CrowdsaleGeneratorETH_ERC20Burner_$3969",
                "typeString": "contract CrowdsaleGeneratorETH_ERC20Burner"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 3981,
            "name": "scalingFactor",
            "nodeType": "VariableDeclaration",
            "scope": 4507,
            "src": "806:34:15",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 3979,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "806:4:15",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "31653332",
              "id": 3980,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "836:4:15",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_100000000000000000000000000000000_by_1",
                "typeString": "int_const 1000...(25 digits omitted)...0000"
              },
              "value": "1e32"
            },
            "visibility": "internal"
          },
          {
            "body": {
              "id": 4015,
              "nodeType": "Block",
              "src": "1036:209:15",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3992,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 3988,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3974,
                      "src": "1044:8:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DBInterface_$9332",
                        "typeString": "contract DBInterface"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 3990,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3983,
                          "src": "1067:9:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 3989,
                        "name": "DBInterface",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9332,
                        "src": "1055:11:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_DBInterface_$9332_$",
                          "typeString": "type(contract DBInterface)"
                        }
                      },
                      "id": 3991,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1055:22:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DBInterface_$9332",
                        "typeString": "contract DBInterface"
                      }
                    },
                    "src": "1044:33:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DBInterface_$9332",
                      "typeString": "contract DBInterface"
                    }
                  },
                  "id": 3993,
                  "nodeType": "ExpressionStatement",
                  "src": "1044:33:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3998,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 3994,
                      "name": "events",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3976,
                      "src": "1085:6:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Events_$7233",
                        "typeString": "contract Events"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 3996,
                          "name": "_events",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3985,
                          "src": "1101:7:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 3995,
                        "name": "Events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7233,
                        "src": "1094:6:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Events_$7233_$",
                          "typeString": "type(contract Events)"
                        }
                      },
                      "id": 3997,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1094:15:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Events_$7233",
                        "typeString": "contract Events"
                      }
                    },
                    "src": "1085:24:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Events_$7233",
                      "typeString": "contract Events"
                    }
                  },
                  "id": 3999,
                  "nodeType": "ExpressionStatement",
                  "src": "1085:24:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 4013,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 4000,
                      "name": "burner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3978,
                      "src": "1117:6:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_CrowdsaleGeneratorETH_ERC20Burner_$3969",
                        "typeString": "contract CrowdsaleGeneratorETH_ERC20Burner"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "hexValue": "636f6e7472616374",
                                      "id": 4007,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "1211:10:15",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_7f6dd79f0020bee2024a097aaa5d32ab7ca31126fa375538de047e7475fa8572",
                                        "typeString": "literal_string \"contract\""
                                      },
                                      "value": "contract"
                                    },
                                    {
                                      "argumentTypes": null,
                                      "hexValue": "45524332304275726e6572",
                                      "id": 4008,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "1223:13:15",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_f37afd47a8830fba7bf478e7ab45c08d6fa0898c2af8eaad557650286ff2635b",
                                        "typeString": "literal_string \"ERC20Burner\""
                                      },
                                      "value": "ERC20Burner"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_stringliteral_7f6dd79f0020bee2024a097aaa5d32ab7ca31126fa375538de047e7475fa8572",
                                        "typeString": "literal_string \"contract\""
                                      },
                                      {
                                        "typeIdentifier": "t_stringliteral_f37afd47a8830fba7bf478e7ab45c08d6fa0898c2af8eaad557650286ff2635b",
                                        "typeString": "literal_string \"ERC20Burner\""
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 4005,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 34910,
                                      "src": "1194:3:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 4006,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "1194:16:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 4009,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "1194:43:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                ],
                                "id": 4004,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 34917,
                                "src": "1184:9:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                  "typeString": "function () pure returns (bytes32)"
                                }
                              },
                              "id": 4010,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1184:54:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 4002,
                              "name": "database",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3974,
                              "src": "1160:8:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DBInterface_$9332",
                                "typeString": "contract DBInterface"
                              }
                            },
                            "id": 4003,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "addressStorage",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9303,
                            "src": "1160:23:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                              "typeString": "function (bytes32) view external returns (address)"
                            }
                          },
                          "id": 4011,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1160:79:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 4001,
                        "name": "CrowdsaleGeneratorETH_ERC20Burner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3969,
                        "src": "1126:33:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_CrowdsaleGeneratorETH_ERC20Burner_$3969_$",
                          "typeString": "type(contract CrowdsaleGeneratorETH_ERC20Burner)"
                        }
                      },
                      "id": 4012,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1126:114:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_CrowdsaleGeneratorETH_ERC20Burner_$3969",
                        "typeString": "contract CrowdsaleGeneratorETH_ERC20Burner"
                      }
                    },
                    "src": "1117:123:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_CrowdsaleGeneratorETH_ERC20Burner_$3969",
                      "typeString": "contract CrowdsaleGeneratorETH_ERC20Burner"
                    }
                  },
                  "id": 4014,
                  "nodeType": "ExpressionStatement",
                  "src": "1117:123:15"
                }
              ]
            },
            "documentation": null,
            "id": 4016,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3986,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3983,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 4016,
                  "src": "992:17:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3982,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "992:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3985,
                  "name": "_events",
                  "nodeType": "VariableDeclaration",
                  "scope": 4016,
                  "src": "1011:15:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3984,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1011:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "991:36:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 3987,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1036:0:15"
            },
            "scope": 4507,
            "src": "980:265:15",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 4367,
              "nodeType": "Block",
              "src": "2218:2535:15",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 4043,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 4039,
                      "name": "_burnToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4034,
                      "src": "2227:10:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "307845656565654565656545654565654565456545656545454565656565456565656565656545456545",
                          "id": 4041,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2249:42:15",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "value": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 4040,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2241:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 4042,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2241:51:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2227:65:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 4093,
                    "nodeType": "Block",
                    "src": "2450:134:15",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 4074,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 34923,
                                    "src": "2478:3:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 4075,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "sender",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "2478:10:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "arguments": [
                                        {
                                          "argumentTypes": null,
                                          "arguments": [
                                            {
                                              "argumentTypes": null,
                                              "expression": {
                                                "argumentTypes": null,
                                                "id": 4081,
                                                "name": "msg",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34923,
                                                "src": "2538:3:15",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_magic_message",
                                                  "typeString": "msg"
                                                }
                                              },
                                              "id": 4082,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "memberName": "sig",
                                              "nodeType": "MemberAccess",
                                              "referencedDeclaration": null,
                                              "src": "2538:7:15",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_bytes4",
                                                "typeString": "bytes4"
                                              }
                                            },
                                            {
                                              "argumentTypes": null,
                                              "arguments": [
                                                {
                                                  "argumentTypes": null,
                                                  "id": 4084,
                                                  "name": "this",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 35020,
                                                  "src": "2555:4:15",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_CrowdsaleGeneratorETH_$4507",
                                                    "typeString": "contract CrowdsaleGeneratorETH"
                                                  }
                                                }
                                              ],
                                              "expression": {
                                                "argumentTypes": [
                                                  {
                                                    "typeIdentifier": "t_contract$_CrowdsaleGeneratorETH_$4507",
                                                    "typeString": "contract CrowdsaleGeneratorETH"
                                                  }
                                                ],
                                                "id": 4083,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "2547:7:15",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_type$_t_address_$",
                                                  "typeString": "type(address)"
                                                },
                                                "typeName": "address"
                                              },
                                              "id": 4085,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "kind": "typeConversion",
                                              "lValueRequested": false,
                                              "names": [],
                                              "nodeType": "FunctionCall",
                                              "src": "2547:13:15",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                              }
                                            }
                                          ],
                                          "expression": {
                                            "argumentTypes": [
                                              {
                                                "typeIdentifier": "t_bytes4",
                                                "typeString": "bytes4"
                                              },
                                              {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                              }
                                            ],
                                            "expression": {
                                              "argumentTypes": null,
                                              "id": 4079,
                                              "name": "abi",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 34910,
                                              "src": "2521:3:15",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_magic_abi",
                                                "typeString": "abi"
                                              }
                                            },
                                            "id": 4080,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "memberName": "encodePacked",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "2521:16:15",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                              "typeString": "function () pure returns (bytes memory)"
                                            }
                                          },
                                          "id": 4086,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "kind": "functionCall",
                                          "lValueRequested": false,
                                          "names": [],
                                          "nodeType": "FunctionCall",
                                          "src": "2521:40:15",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                          }
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                          }
                                        ],
                                        "id": 4078,
                                        "name": "keccak256",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 34917,
                                        "src": "2511:9:15",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                          "typeString": "function () pure returns (bytes32)"
                                        }
                                      },
                                      "id": 4087,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "2511:51:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 4076,
                                      "name": "database",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 3974,
                                      "src": "2490:8:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_DBInterface_$9332",
                                        "typeString": "contract DBInterface"
                                      }
                                    },
                                    "id": 4077,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "uintStorage",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 9289,
                                    "src": "2490:20:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_uint256_$",
                                      "typeString": "function (bytes32) view external returns (uint256)"
                                    }
                                  },
                                  "id": 4088,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2490:73:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "id": 4089,
                                  "name": "_burnToken",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4034,
                                  "src": "2565:10:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 4072,
                                  "name": "burner",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3978,
                                  "src": "2466:6:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_CrowdsaleGeneratorETH_ERC20Burner_$3969",
                                    "typeString": "contract CrowdsaleGeneratorETH_ERC20Burner"
                                  }
                                },
                                "id": 4073,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "burn",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 3968,
                                "src": "2466:11:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_external_payable$_t_address_$_t_uint256_$_t_address_$returns$_t_bool_$",
                                  "typeString": "function (address,uint256,address) payable external returns (bool)"
                                }
                              },
                              "id": 4090,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2466:110:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            ],
                            "id": 4071,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              34926,
                              34927
                            ],
                            "referencedDeclaration": 34926,
                            "src": "2458:7:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                              "typeString": "function (bool) pure"
                            }
                          },
                          "id": 4091,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2458:119:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 4092,
                        "nodeType": "ExpressionStatement",
                        "src": "2458:119:15"
                      }
                    ]
                  },
                  "id": 4094,
                  "nodeType": "IfStatement",
                  "src": "2224:360:15",
                  "trueBody": {
                    "id": 4070,
                    "nodeType": "Block",
                    "src": "2293:151:15",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 4051,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 34923,
                                    "src": "2338:3:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 4052,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "sender",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "2338:10:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "arguments": [
                                        {
                                          "argumentTypes": null,
                                          "arguments": [
                                            {
                                              "argumentTypes": null,
                                              "expression": {
                                                "argumentTypes": null,
                                                "id": 4058,
                                                "name": "msg",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34923,
                                                "src": "2398:3:15",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_magic_message",
                                                  "typeString": "msg"
                                                }
                                              },
                                              "id": 4059,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "memberName": "sig",
                                              "nodeType": "MemberAccess",
                                              "referencedDeclaration": null,
                                              "src": "2398:7:15",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_bytes4",
                                                "typeString": "bytes4"
                                              }
                                            },
                                            {
                                              "argumentTypes": null,
                                              "arguments": [
                                                {
                                                  "argumentTypes": null,
                                                  "id": 4061,
                                                  "name": "this",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 35020,
                                                  "src": "2415:4:15",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_CrowdsaleGeneratorETH_$4507",
                                                    "typeString": "contract CrowdsaleGeneratorETH"
                                                  }
                                                }
                                              ],
                                              "expression": {
                                                "argumentTypes": [
                                                  {
                                                    "typeIdentifier": "t_contract$_CrowdsaleGeneratorETH_$4507",
                                                    "typeString": "contract CrowdsaleGeneratorETH"
                                                  }
                                                ],
                                                "id": 4060,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "2407:7:15",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_type$_t_address_$",
                                                  "typeString": "type(address)"
                                                },
                                                "typeName": "address"
                                              },
                                              "id": 4062,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "kind": "typeConversion",
                                              "lValueRequested": false,
                                              "names": [],
                                              "nodeType": "FunctionCall",
                                              "src": "2407:13:15",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                              }
                                            }
                                          ],
                                          "expression": {
                                            "argumentTypes": [
                                              {
                                                "typeIdentifier": "t_bytes4",
                                                "typeString": "bytes4"
                                              },
                                              {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                              }
                                            ],
                                            "expression": {
                                              "argumentTypes": null,
                                              "id": 4056,
                                              "name": "abi",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 34910,
                                              "src": "2381:3:15",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_magic_abi",
                                                "typeString": "abi"
                                              }
                                            },
                                            "id": 4057,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "memberName": "encodePacked",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "2381:16:15",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                              "typeString": "function () pure returns (bytes memory)"
                                            }
                                          },
                                          "id": 4063,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "kind": "functionCall",
                                          "lValueRequested": false,
                                          "names": [],
                                          "nodeType": "FunctionCall",
                                          "src": "2381:40:15",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                          }
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                          }
                                        ],
                                        "id": 4055,
                                        "name": "keccak256",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 34917,
                                        "src": "2371:9:15",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                          "typeString": "function () pure returns (bytes32)"
                                        }
                                      },
                                      "id": 4064,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "2371:51:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 4053,
                                      "name": "database",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 3974,
                                      "src": "2350:8:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_DBInterface_$9332",
                                        "typeString": "contract DBInterface"
                                      }
                                    },
                                    "id": 4054,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "uintStorage",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 9289,
                                    "src": "2350:20:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_uint256_$",
                                      "typeString": "function (bytes32) view external returns (uint256)"
                                    }
                                  },
                                  "id": 4065,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2350:73:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "id": 4066,
                                  "name": "_burnToken",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4034,
                                  "src": "2425:10:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 4048,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 34923,
                                      "src": "2327:3:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 4049,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "value",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "2327:9:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 4045,
                                      "name": "burner",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 3978,
                                      "src": "2309:6:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_CrowdsaleGeneratorETH_ERC20Burner_$3969",
                                        "typeString": "contract CrowdsaleGeneratorETH_ERC20Burner"
                                      }
                                    },
                                    "id": 4046,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "burn",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 3968,
                                    "src": "2309:11:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_external_payable$_t_address_$_t_uint256_$_t_address_$returns$_t_bool_$",
                                      "typeString": "function (address,uint256,address) payable external returns (bool)"
                                    }
                                  },
                                  "id": 4047,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "value",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "2309:17:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_setvalue_nonpayable$_t_uint256_$returns$_t_function_external_payable$_t_address_$_t_uint256_$_t_address_$returns$_t_bool_$value_$",
                                    "typeString": "function (uint256) returns (function (address,uint256,address) payable external returns (bool))"
                                  }
                                },
                                "id": 4050,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2309:28:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_external_payable$_t_address_$_t_uint256_$_t_address_$returns$_t_bool_$value",
                                  "typeString": "function (address,uint256,address) payable external returns (bool)"
                                }
                              },
                              "id": 4067,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2309:127:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            ],
                            "id": 4044,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              34926,
                              34927
                            ],
                            "referencedDeclaration": 34926,
                            "src": "2301:7:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                              "typeString": "function (bool) pure"
                            }
                          },
                          "id": 4068,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2301:136:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 4069,
                        "nodeType": "ExpressionStatement",
                        "src": "2301:136:15"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 4117,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 4099,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 4096,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34923,
                              "src": "2597:3:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 4097,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2597:10:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 4098,
                            "name": "_assetManager",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4020,
                            "src": "2611:13:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "2597:27:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "||",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "hexValue": "617070726f76616c",
                                      "id": 4105,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "2676:10:15",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_f1dd521ebebaf5ba3d6127465ff9c4a71139a515dba59a79359c5c15f6766594",
                                        "typeString": "literal_string \"approval\""
                                      },
                                      "value": "approval"
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 4106,
                                      "name": "_assetManager",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 4020,
                                      "src": "2688:13:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 4107,
                                        "name": "msg",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 34923,
                                        "src": "2703:3:15",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_message",
                                          "typeString": "msg"
                                        }
                                      },
                                      "id": 4108,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "sender",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "2703:10:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "arguments": [
                                        {
                                          "argumentTypes": null,
                                          "id": 4110,
                                          "name": "this",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 35020,
                                          "src": "2723:4:15",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_CrowdsaleGeneratorETH_$4507",
                                            "typeString": "contract CrowdsaleGeneratorETH"
                                          }
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_contract$_CrowdsaleGeneratorETH_$4507",
                                            "typeString": "contract CrowdsaleGeneratorETH"
                                          }
                                        ],
                                        "id": 4109,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "nodeType": "ElementaryTypeNameExpression",
                                        "src": "2715:7:15",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_address_$",
                                          "typeString": "type(address)"
                                        },
                                        "typeName": "address"
                                      },
                                      "id": 4111,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "typeConversion",
                                      "lValueRequested": false,
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "2715:13:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 4112,
                                        "name": "msg",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 34923,
                                        "src": "2730:3:15",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_message",
                                          "typeString": "msg"
                                        }
                                      },
                                      "id": 4113,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "sig",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "2730:7:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes4",
                                        "typeString": "bytes4"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_stringliteral_f1dd521ebebaf5ba3d6127465ff9c4a71139a515dba59a79359c5c15f6766594",
                                        "typeString": "literal_string \"approval\""
                                      },
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      },
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      },
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      },
                                      {
                                        "typeIdentifier": "t_bytes4",
                                        "typeString": "bytes4"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 4103,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 34910,
                                      "src": "2659:3:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 4104,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "2659:16:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 4114,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2659:79:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                ],
                                "id": 4102,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 34917,
                                "src": "2649:9:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                  "typeString": "function () pure returns (bytes32)"
                                }
                              },
                              "id": 4115,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2649:90:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 4100,
                              "name": "database",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3974,
                              "src": "2628:8:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DBInterface_$9332",
                                "typeString": "contract DBInterface"
                              }
                            },
                            "id": 4101,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "boolStorage",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9324,
                            "src": "2628:20:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                              "typeString": "function (bytes32) view external returns (bool)"
                            }
                          },
                          "id": 4116,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2628:112:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "2597:143:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "55736572206e6f7420617070726f766564",
                        "id": 4118,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2742:19:15",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_ed2f2fab5396dfeed9b474c41cea0ea1a9b61e1563de3f6ca8beae276160c8c4",
                          "typeString": "literal_string \"User not approved\""
                        },
                        "value": "User not approved"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_ed2f2fab5396dfeed9b474c41cea0ea1a9b61e1563de3f6ca8beae276160c8c4",
                          "typeString": "literal_string \"User not approved\""
                        }
                      ],
                      "id": 4095,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34927,
                      "src": "2589:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 4119,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2589:173:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4120,
                  "nodeType": "ExpressionStatement",
                  "src": "2589:173:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 4124,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 4122,
                          "name": "_amountToRaise",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4028,
                          "src": "2776:14:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 4123,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2793:1:15",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "2776:18:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "43726f776473616c6520676f616c206973207a65726f",
                        "id": 4125,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2796:24:15",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c7b7209f946d85b4fd2e655be33c145a9859cdcbd2a952365882cc43bb76f510",
                          "typeString": "literal_string \"Crowdsale goal is zero\""
                        },
                        "value": "Crowdsale goal is zero"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c7b7209f946d85b4fd2e655be33c145a9859cdcbd2a952365882cc43bb76f510",
                          "typeString": "literal_string \"Crowdsale goal is zero\""
                        }
                      ],
                      "id": 4121,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34927,
                      "src": "2768:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 4126,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2768:53:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4127,
                  "nodeType": "ExpressionStatement",
                  "src": "2768:53:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 4131,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 4129,
                          "name": "_assetManagerPerc",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4030,
                          "src": "2835:17:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "313030",
                          "id": 4130,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2855:3:15",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_100_by_1",
                            "typeString": "int_const 100"
                          },
                          "value": "100"
                        },
                        "src": "2835:23:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4d616e616765722070657263656e74206e65656420746f206265206c657373207468616e20313030",
                        "id": 4132,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2860:42:15",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c574bf17b7f1df922df60b30a3b2c1a2fa3f613fdd848013c089111fa5eb6303",
                          "typeString": "literal_string \"Manager percent need to be less than 100\""
                        },
                        "value": "Manager percent need to be less than 100"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c574bf17b7f1df922df60b30a3b2c1a2fa3f613fdd848013c089111fa5eb6303",
                          "typeString": "literal_string \"Manager percent need to be less than 100\""
                        }
                      ],
                      "id": 4128,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34927,
                      "src": "2827:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 4133,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2827:76:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4134,
                  "nodeType": "ExpressionStatement",
                  "src": "2827:76:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "6f70657261746f722e616363657074734574686572",
                                    "id": 4141,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "2965:23:15",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_54580b1e6ba749d2c64f391cfdaf27cde5a34ee6cae35a531dca8e91c313d37f",
                                      "typeString": "literal_string \"operator.acceptsEther\""
                                    },
                                    "value": "operator.acceptsEther"
                                  },
                                  {
                                    "argumentTypes": null,
                                    "id": 4142,
                                    "name": "_operatorID",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 4022,
                                    "src": "2990:11:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_stringliteral_54580b1e6ba749d2c64f391cfdaf27cde5a34ee6cae35a531dca8e91c313d37f",
                                      "typeString": "literal_string \"operator.acceptsEther\""
                                    },
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 4139,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 34910,
                                    "src": "2948:3:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 4140,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "2948:16:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 4143,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2948:54:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "id": 4138,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34917,
                              "src": "2938:9:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                "typeString": "function () pure returns (bytes32)"
                              }
                            },
                            "id": 4144,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2938:65:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 4136,
                            "name": "database",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3974,
                            "src": "2917:8:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_DBInterface_$9332",
                              "typeString": "contract DBInterface"
                            }
                          },
                          "id": 4137,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "boolStorage",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 9324,
                          "src": "2917:20:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 4145,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2917:87:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4f70657261746f7220646f6573206e6f7420616363657074204574686572",
                        "id": 4146,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3006:32:15",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_f30b9557d6dd249c3581170c784a962848724e148bd8279733eec359ff392114",
                          "typeString": "literal_string \"Operator does not accept Ether\""
                        },
                        "value": "Operator does not accept Ether"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_f30b9557d6dd249c3581170c784a962848724e148bd8279733eec359ff392114",
                          "typeString": "literal_string \"Operator does not accept Ether\""
                        }
                      ],
                      "id": 4135,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34927,
                      "src": "2909:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 4147,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2909:130:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4148,
                  "nodeType": "ExpressionStatement",
                  "src": "2909:130:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 4163,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "hexValue": "6f70657261746f72",
                                      "id": 4155,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "3104:10:15",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_46a52cf33029de9f84853745a87af28464c80bf0346df1b32e205fc73319f622",
                                        "typeString": "literal_string \"operator\""
                                      },
                                      "value": "operator"
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 4156,
                                      "name": "_operatorID",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 4022,
                                      "src": "3116:11:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_stringliteral_46a52cf33029de9f84853745a87af28464c80bf0346df1b32e205fc73319f622",
                                        "typeString": "literal_string \"operator\""
                                      },
                                      {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 4153,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 34910,
                                      "src": "3087:3:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 4154,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "3087:16:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 4157,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "3087:41:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                ],
                                "id": 4152,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 34917,
                                "src": "3077:9:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                  "typeString": "function () pure returns (bytes32)"
                                }
                              },
                              "id": 4158,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3077:52:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 4150,
                              "name": "database",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3974,
                              "src": "3053:8:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DBInterface_$9332",
                                "typeString": "contract DBInterface"
                              }
                            },
                            "id": 4151,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "addressStorage",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9303,
                            "src": "3053:23:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                              "typeString": "function (bytes32) view external returns (address)"
                            }
                          },
                          "id": 4159,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3053:77:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 4161,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3142:1:15",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 4160,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "3134:7:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 4162,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3134:10:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "3053:91:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4f70657261746f7220646f6573206e6f74206578697374",
                        "id": 4164,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3146:25:15",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_b3b6f6c6263ad174fdf61ad64f7e0c407ad8f2f4a30b0f6feecaa8054eac61db",
                          "typeString": "literal_string \"Operator does not exist\""
                        },
                        "value": "Operator does not exist"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_b3b6f6c6263ad174fdf61ad64f7e0c407ad8f2f4a30b0f6feecaa8054eac61db",
                          "typeString": "literal_string \"Operator does not exist\""
                        }
                      ],
                      "id": 4149,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34927,
                      "src": "3045:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 4165,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3045:127:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4166,
                  "nodeType": "ExpressionStatement",
                  "src": "3045:127:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 4178,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "3186:74:15",
                        "subExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "hexValue": "61737365742e757269",
                                      "id": 4173,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "3235:11:15",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_56e2ecab6cd7c038037b89a88f2668ad26f2dd770e8327b6fa39bf1ad4212b79",
                                        "typeString": "literal_string \"asset.uri\""
                                      },
                                      "value": "asset.uri"
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 4174,
                                      "name": "_assetURI",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 4018,
                                      "src": "3248:9:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_string_calldata_ptr",
                                        "typeString": "string calldata"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_stringliteral_56e2ecab6cd7c038037b89a88f2668ad26f2dd770e8327b6fa39bf1ad4212b79",
                                        "typeString": "literal_string \"asset.uri\""
                                      },
                                      {
                                        "typeIdentifier": "t_string_calldata_ptr",
                                        "typeString": "string calldata"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 4171,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 34910,
                                      "src": "3218:3:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 4172,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "3218:16:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 4175,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "3218:40:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                ],
                                "id": 4170,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 34917,
                                "src": "3208:9:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                  "typeString": "function () pure returns (bytes32)"
                                }
                              },
                              "id": 4176,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3208:51:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 4168,
                              "name": "database",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3974,
                              "src": "3187:8:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DBInterface_$9332",
                                "typeString": "contract DBInterface"
                              }
                            },
                            "id": 4169,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "boolStorage",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9324,
                            "src": "3187:20:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                              "typeString": "function (bytes32) view external returns (bool)"
                            }
                          },
                          "id": 4177,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3187:73:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "417373657420555249206973206e6f7420756e69717565",
                        "id": 4179,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3262:25:15",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_6152b445a1716178c7c98fd7927317c8603dab00216f4d9cd5aa31b4a570c30f",
                          "typeString": "literal_string \"Asset URI is not unique\""
                        },
                        "value": "Asset URI is not unique"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_6152b445a1716178c7c98fd7927317c8603dab00216f4d9cd5aa31b4a570c30f",
                          "typeString": "literal_string \"Asset URI is not unique\""
                        }
                      ],
                      "id": 4167,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34927,
                      "src": "3178:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 4180,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3178:110:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4181,
                  "nodeType": "ExpressionStatement",
                  "src": "3178:110:15"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 4183,
                      "name": "startTime",
                      "nodeType": "VariableDeclaration",
                      "scope": 4368,
                      "src": "3327:14:15",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 4182,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3327:4:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 4184,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3327:14:15"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 4187,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 4185,
                      "name": "_startTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4026,
                      "src": "3350:10:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 4186,
                      "name": "now",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34925,
                      "src": "3363:3:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3350:16:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 4197,
                    "nodeType": "Block",
                    "src": "3403:37:15",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 4195,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 4193,
                            "name": "startTime",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4183,
                            "src": "3411:9:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 4194,
                            "name": "_startTime",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4026,
                            "src": "3423:10:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3411:22:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 4196,
                        "nodeType": "ExpressionStatement",
                        "src": "3411:22:15"
                      }
                    ]
                  },
                  "id": 4198,
                  "nodeType": "IfStatement",
                  "src": "3347:93:15",
                  "trueBody": {
                    "id": 4192,
                    "nodeType": "Block",
                    "src": "3367:30:15",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 4190,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 4188,
                            "name": "startTime",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4183,
                            "src": "3375:9:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 4189,
                            "name": "now",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34925,
                            "src": "3387:3:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3375:15:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 4191,
                        "nodeType": "ExpressionStatement",
                        "src": "3375:15:15"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    4200
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 4200,
                      "name": "assetAddress",
                      "nodeType": "VariableDeclaration",
                      "scope": 4368,
                      "src": "3445:20:15",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 4199,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "3445:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 4217,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 4204,
                            "name": "_assetURI",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4018,
                            "src": "3494:9:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_calldata_ptr",
                              "typeString": "string calldata"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "hexValue": "636f6e7472616374",
                                        "id": 4210,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "string",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "3556:10:15",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_stringliteral_7f6dd79f0020bee2024a097aaa5d32ab7ca31126fa375538de047e7475fa8572",
                                          "typeString": "literal_string \"contract\""
                                        },
                                        "value": "contract"
                                      },
                                      {
                                        "argumentTypes": null,
                                        "hexValue": "43726f776473616c65455448",
                                        "id": 4211,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "string",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "3568:14:15",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_stringliteral_da4f3e8cbb8668202aa505f950184ea6af0f62b86c317c39091234a512fd946b",
                                          "typeString": "literal_string \"CrowdsaleETH\""
                                        },
                                        "value": "CrowdsaleETH"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_stringliteral_7f6dd79f0020bee2024a097aaa5d32ab7ca31126fa375538de047e7475fa8572",
                                          "typeString": "literal_string \"contract\""
                                        },
                                        {
                                          "typeIdentifier": "t_stringliteral_da4f3e8cbb8668202aa505f950184ea6af0f62b86c317c39091234a512fd946b",
                                          "typeString": "literal_string \"CrowdsaleETH\""
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 4208,
                                        "name": "abi",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 34910,
                                        "src": "3539:3:15",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_abi",
                                          "typeString": "abi"
                                        }
                                      },
                                      "id": 4209,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "memberName": "encodePacked",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "3539:16:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                        "typeString": "function () pure returns (bytes memory)"
                                      }
                                    },
                                    "id": 4212,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "3539:44:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  ],
                                  "id": 4207,
                                  "name": "keccak256",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 34917,
                                  "src": "3529:9:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                    "typeString": "function () pure returns (bytes32)"
                                  }
                                },
                                "id": 4213,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3529:55:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 4205,
                                "name": "database",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 3974,
                                "src": "3505:8:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_DBInterface_$9332",
                                  "typeString": "contract DBInterface"
                                }
                              },
                              "id": 4206,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "addressStorage",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 9303,
                              "src": "3505:23:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                                "typeString": "function (bytes32) view external returns (address)"
                              }
                            },
                            "id": 4214,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3505:80:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_calldata_ptr",
                              "typeString": "string calldata"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 4203,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "NewExpression",
                          "src": "3476:17:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_creation_nonpayable$_t_string_memory_ptr_$_t_address_$returns$_t_contract$_DividendToken_$32031_$",
                            "typeString": "function (string memory,address) returns (contract DividendToken)"
                          },
                          "typeName": {
                            "contractScope": null,
                            "id": 4202,
                            "name": "DividendToken",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 32031,
                            "src": "3480:13:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_DividendToken_$32031",
                              "typeString": "contract DividendToken"
                            }
                          }
                        },
                        "id": 4215,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3476:110:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DividendToken_$32031",
                          "typeString": "contract DividendToken"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_DividendToken_$32031",
                          "typeString": "contract DividendToken"
                        }
                      ],
                      "id": 4201,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "3468:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": "address"
                    },
                    "id": 4216,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3468:119:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3445:142:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "63726f776473616c652e7374617274",
                                "id": 4224,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3683:17:15",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_1f60ac00b77a0109f8df6c5adee6dbd5eb34aede6439c0e3c2a90432d9ac0436",
                                  "typeString": "literal_string \"crowdsale.start\""
                                },
                                "value": "crowdsale.start"
                              },
                              {
                                "argumentTypes": null,
                                "id": 4225,
                                "name": "assetAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4200,
                                "src": "3702:12:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_1f60ac00b77a0109f8df6c5adee6dbd5eb34aede6439c0e3c2a90432d9ac0436",
                                  "typeString": "literal_string \"crowdsale.start\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 4222,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 34910,
                                "src": "3666:3:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 4223,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "3666:16:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 4226,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3666:49:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 4221,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34917,
                          "src": "3656:9:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 4227,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3656:60:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 4228,
                        "name": "startTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4183,
                        "src": "3718:9:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 4218,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3974,
                        "src": "3639:8:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DBInterface_$9332",
                          "typeString": "contract DBInterface"
                        }
                      },
                      "id": 4220,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9212,
                      "src": "3639:16:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_uint256_$returns$__$",
                        "typeString": "function (bytes32,uint256) external"
                      }
                    },
                    "id": 4229,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3639:89:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4230,
                  "nodeType": "ExpressionStatement",
                  "src": "3639:89:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "63726f776473616c652e646561646c696e65",
                                "id": 4237,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3778:20:15",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_c5e60127e04b658a1e76a44b60aa4343ed732c83881e29ad6808d263771afcb1",
                                  "typeString": "literal_string \"crowdsale.deadline\""
                                },
                                "value": "crowdsale.deadline"
                              },
                              {
                                "argumentTypes": null,
                                "id": 4238,
                                "name": "assetAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4200,
                                "src": "3800:12:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_c5e60127e04b658a1e76a44b60aa4343ed732c83881e29ad6808d263771afcb1",
                                  "typeString": "literal_string \"crowdsale.deadline\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 4235,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 34910,
                                "src": "3761:3:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 4236,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "3761:16:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 4239,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3761:52:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 4234,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34917,
                          "src": "3751:9:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 4240,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3751:63:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 4243,
                            "name": "_fundingLength",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4024,
                            "src": "3830:14:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 4241,
                            "name": "startTime",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4183,
                            "src": "3816:9:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 4242,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "add",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 22691,
                          "src": "3816:13:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 4244,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3816:29:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 4231,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3974,
                        "src": "3734:8:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DBInterface_$9332",
                          "typeString": "contract DBInterface"
                        }
                      },
                      "id": 4233,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9212,
                      "src": "3734:16:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_uint256_$returns$__$",
                        "typeString": "function (bytes32,uint256) external"
                      }
                    },
                    "id": 4245,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3734:112:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4246,
                  "nodeType": "ExpressionStatement",
                  "src": "3734:112:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "61737365742e6d616e61676572466565",
                                "id": 4253,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3896:18:15",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_0a4a83d415c855c53faa95933c5f8f9d6fcb5eeb285cedb5527063dac2ccbd3b",
                                  "typeString": "literal_string \"asset.managerFee\""
                                },
                                "value": "asset.managerFee"
                              },
                              {
                                "argumentTypes": null,
                                "id": 4254,
                                "name": "assetAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4200,
                                "src": "3916:12:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_0a4a83d415c855c53faa95933c5f8f9d6fcb5eeb285cedb5527063dac2ccbd3b",
                                  "typeString": "literal_string \"asset.managerFee\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 4251,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 34910,
                                "src": "3879:3:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 4252,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "3879:16:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 4255,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3879:50:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 4250,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34917,
                          "src": "3869:9:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 4256,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3869:61:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 4278,
                            "name": "scalingFactor",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3981,
                            "src": "4042:13:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 4274,
                                    "name": "scalingFactor",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3981,
                                    "src": "4022:13:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "arguments": [
                                          {
                                            "argumentTypes": null,
                                            "id": 4270,
                                            "name": "_assetManagerPerc",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 4030,
                                            "src": "3998:17:15",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          }
                                        ],
                                        "expression": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          ],
                                          "expression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                              {
                                                "argumentTypes": null,
                                                "hexValue": "313030",
                                                "id": 4267,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3989:3:15",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_rational_100_by_1",
                                                  "typeString": "int_const 100"
                                                },
                                                "value": "100"
                                              }
                                            ],
                                            "expression": {
                                              "argumentTypes": [
                                                {
                                                  "typeIdentifier": "t_rational_100_by_1",
                                                  "typeString": "int_const 100"
                                                }
                                              ],
                                              "id": 4266,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "nodeType": "ElementaryTypeNameExpression",
                                              "src": "3984:4:15",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_uint256_$",
                                                "typeString": "type(uint256)"
                                              },
                                              "typeName": "uint"
                                            },
                                            "id": 4268,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3984:9:15",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "id": 4269,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberName": "sub",
                                          "nodeType": "MemberAccess",
                                          "referencedDeclaration": 22667,
                                          "src": "3984:13:15",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                                          }
                                        },
                                        "id": 4271,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3984:32:15",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                          {
                                            "argumentTypes": null,
                                            "id": 4263,
                                            "name": "scalingFactor",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3981,
                                            "src": "3965:13:15",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          }
                                        ],
                                        "expression": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          ],
                                          "expression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                              {
                                                "argumentTypes": null,
                                                "hexValue": "313030",
                                                "id": 4260,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3956:3:15",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_rational_100_by_1",
                                                  "typeString": "int_const 100"
                                                },
                                                "value": "100"
                                              }
                                            ],
                                            "expression": {
                                              "argumentTypes": [
                                                {
                                                  "typeIdentifier": "t_rational_100_by_1",
                                                  "typeString": "int_const 100"
                                                }
                                              ],
                                              "id": 4259,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "nodeType": "ElementaryTypeNameExpression",
                                              "src": "3951:4:15",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_uint256_$",
                                                "typeString": "type(uint256)"
                                              },
                                              "typeName": "uint"
                                            },
                                            "id": 4261,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3951:9:15",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "id": 4262,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberName": "mul",
                                          "nodeType": "MemberAccess",
                                          "referencedDeclaration": 22633,
                                          "src": "3951:13:15",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                                          }
                                        },
                                        "id": 4264,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3951:28:15",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "id": 4265,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "div",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 22647,
                                      "src": "3951:32:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                      }
                                    },
                                    "id": 4272,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "3951:66:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 4273,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "sub",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 22667,
                                  "src": "3951:70:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 4275,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3951:85:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 4257,
                                "name": "_amountToRaise",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4028,
                                "src": "3932:14:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 4258,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "mul",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 22633,
                              "src": "3932:18:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 4276,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3932:105:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 4277,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "div",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 22647,
                          "src": "3932:109:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 4279,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3932:124:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 4247,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3974,
                        "src": "3852:8:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DBInterface_$9332",
                          "typeString": "contract DBInterface"
                        }
                      },
                      "id": 4249,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9212,
                      "src": "3852:16:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_uint256_$returns$__$",
                        "typeString": "function (bytes32,uint256) external"
                      }
                    },
                    "id": 4280,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3852:205:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4281,
                  "nodeType": "ExpressionStatement",
                  "src": "3852:205:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "63726f776473616c652e676f616c",
                                "id": 4288,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "4107:16:15",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_045c9598f5cff548bbf5830749370eab2aded0c210192a78c3be7c20556f2247",
                                  "typeString": "literal_string \"crowdsale.goal\""
                                },
                                "value": "crowdsale.goal"
                              },
                              {
                                "argumentTypes": null,
                                "id": 4289,
                                "name": "assetAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4200,
                                "src": "4125:12:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_045c9598f5cff548bbf5830749370eab2aded0c210192a78c3be7c20556f2247",
                                  "typeString": "literal_string \"crowdsale.goal\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 4286,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 34910,
                                "src": "4090:3:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 4287,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "4090:16:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 4290,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4090:48:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 4285,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34917,
                          "src": "4080:9:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 4291,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4080:59:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 4292,
                        "name": "_amountToRaise",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4028,
                        "src": "4141:14:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 4282,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3974,
                        "src": "4063:8:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DBInterface_$9332",
                          "typeString": "contract DBInterface"
                        }
                      },
                      "id": 4284,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9212,
                      "src": "4063:16:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_uint256_$returns$__$",
                        "typeString": "function (bytes32,uint256) external"
                      }
                    },
                    "id": 4293,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4063:93:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4294,
                  "nodeType": "ExpressionStatement",
                  "src": "4063:93:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "61737365742e6d616e61676572",
                                "id": 4301,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "4209:15:15",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_c2b25eef4340162b026d227f7a9ebe7bae98953eff48283607445f4b250b0cbc",
                                  "typeString": "literal_string \"asset.manager\""
                                },
                                "value": "asset.manager"
                              },
                              {
                                "argumentTypes": null,
                                "id": 4302,
                                "name": "assetAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4200,
                                "src": "4226:12:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_c2b25eef4340162b026d227f7a9ebe7bae98953eff48283607445f4b250b0cbc",
                                  "typeString": "literal_string \"asset.manager\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 4299,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 34910,
                                "src": "4192:3:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 4300,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "4192:16:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 4303,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4192:47:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 4298,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34917,
                          "src": "4182:9:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 4304,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4182:58:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 4305,
                        "name": "_assetManager",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4020,
                        "src": "4242:13:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 4295,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3974,
                        "src": "4162:8:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DBInterface_$9332",
                          "typeString": "contract DBInterface"
                        }
                      },
                      "id": 4297,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9205,
                      "src": "4162:19:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address) external"
                      }
                    },
                    "id": 4306,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4162:94:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4307,
                  "nodeType": "ExpressionStatement",
                  "src": "4162:94:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "61737365742e6f70657261746f72",
                                "id": 4314,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "4309:16:15",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_4716d66186f568e75f8d8be5f2ef98464c9608a0255abf6763d5a8b4badea669",
                                  "typeString": "literal_string \"asset.operator\""
                                },
                                "value": "asset.operator"
                              },
                              {
                                "argumentTypes": null,
                                "id": 4315,
                                "name": "assetAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4200,
                                "src": "4327:12:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_4716d66186f568e75f8d8be5f2ef98464c9608a0255abf6763d5a8b4badea669",
                                  "typeString": "literal_string \"asset.operator\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 4312,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 34910,
                                "src": "4292:3:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 4313,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "4292:16:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 4316,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4292:48:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 4311,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34917,
                          "src": "4282:9:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 4317,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4282:59:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "6f70657261746f72",
                                    "id": 4323,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "4394:10:15",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_46a52cf33029de9f84853745a87af28464c80bf0346df1b32e205fc73319f622",
                                      "typeString": "literal_string \"operator\""
                                    },
                                    "value": "operator"
                                  },
                                  {
                                    "argumentTypes": null,
                                    "id": 4324,
                                    "name": "_operatorID",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 4022,
                                    "src": "4406:11:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_stringliteral_46a52cf33029de9f84853745a87af28464c80bf0346df1b32e205fc73319f622",
                                      "typeString": "literal_string \"operator\""
                                    },
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 4321,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 34910,
                                    "src": "4377:3:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 4322,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "4377:16:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 4325,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "4377:41:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "id": 4320,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34917,
                              "src": "4367:9:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                "typeString": "function () pure returns (bytes32)"
                              }
                            },
                            "id": 4326,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4367:52:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 4318,
                            "name": "database",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3974,
                            "src": "4343:8:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_DBInterface_$9332",
                              "typeString": "contract DBInterface"
                            }
                          },
                          "id": 4319,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "addressStorage",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 9303,
                          "src": "4343:23:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                            "typeString": "function (bytes32) view external returns (address)"
                          }
                        },
                        "id": 4327,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4343:77:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 4308,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3974,
                        "src": "4262:8:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DBInterface_$9332",
                          "typeString": "contract DBInterface"
                        }
                      },
                      "id": 4310,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9205,
                      "src": "4262:19:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address) external"
                      }
                    },
                    "id": 4328,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4262:159:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4329,
                  "nodeType": "ExpressionStatement",
                  "src": "4262:159:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "61737365742e757269",
                                "id": 4336,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "4471:11:15",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_56e2ecab6cd7c038037b89a88f2668ad26f2dd770e8327b6fa39bf1ad4212b79",
                                  "typeString": "literal_string \"asset.uri\""
                                },
                                "value": "asset.uri"
                              },
                              {
                                "argumentTypes": null,
                                "id": 4337,
                                "name": "_assetURI",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4018,
                                "src": "4484:9:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_calldata_ptr",
                                  "typeString": "string calldata"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_56e2ecab6cd7c038037b89a88f2668ad26f2dd770e8327b6fa39bf1ad4212b79",
                                  "typeString": "literal_string \"asset.uri\""
                                },
                                {
                                  "typeIdentifier": "t_string_calldata_ptr",
                                  "typeString": "string calldata"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 4334,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 34910,
                                "src": "4454:3:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 4335,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "4454:16:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 4338,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4454:40:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 4333,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34917,
                          "src": "4444:9:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 4339,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4444:51:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 4340,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4497:4:15",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 4330,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3974,
                        "src": "4427:8:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DBInterface_$9332",
                          "typeString": "contract DBInterface"
                        }
                      },
                      "id": 4332,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setBool",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9240,
                      "src": "4427:16:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_bool_$returns$__$",
                        "typeString": "function (bytes32,bool) external"
                      }
                    },
                    "id": 4341,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4427:75:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4342,
                  "nodeType": "ExpressionStatement",
                  "src": "4427:75:15"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 4345,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 4343,
                      "name": "_escrow",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4032,
                      "src": "4568:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 4344,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4578:1:15",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "4568:11:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 4355,
                  "nodeType": "IfStatement",
                  "src": "4565:84:15",
                  "trueBody": {
                    "id": 4354,
                    "nodeType": "Block",
                    "src": "4580:69:15",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 4348,
                                  "name": "_assetManager",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4020,
                                  "src": "4609:13:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "id": 4349,
                                  "name": "assetAddress",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4200,
                                  "src": "4624:12:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "id": 4350,
                                  "name": "_escrow",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4032,
                                  "src": "4638:7:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "id": 4347,
                                "name": "lockEscrowInternal",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4487,
                                "src": "4590:18:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                                  "typeString": "function (address,address,uint256) returns (bool)"
                                }
                              },
                              "id": 4351,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4590:56:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            ],
                            "id": 4346,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              34926,
                              34927
                            ],
                            "referencedDeclaration": 34926,
                            "src": "4582:7:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                              "typeString": "function (bool) pure"
                            }
                          },
                          "id": 4352,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4582:65:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 4353,
                        "nodeType": "ExpressionStatement",
                        "src": "4582:65:15"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "41737365742066756e64696e672073746172746564",
                        "id": 4359,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4667:23:15",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_57b1a4b7d867ec826f081313cf1c45f11226d48e75ea40846b6f828d7f92167b",
                          "typeString": "literal_string \"Asset funding started\""
                        },
                        "value": "Asset funding started"
                      },
                      {
                        "argumentTypes": null,
                        "id": 4360,
                        "name": "_assetURI",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4018,
                        "src": "4692:9:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_calldata_ptr",
                          "typeString": "string calldata"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 4361,
                        "name": "assetAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4200,
                        "src": "4703:12:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 4362,
                        "name": "_assetManager",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4020,
                        "src": "4717:13:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_57b1a4b7d867ec826f081313cf1c45f11226d48e75ea40846b6f828d7f92167b",
                          "typeString": "literal_string \"Asset funding started\""
                        },
                        {
                          "typeIdentifier": "t_string_calldata_ptr",
                          "typeString": "string calldata"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 4356,
                        "name": "events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3976,
                        "src": "4654:6:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Events_$7233",
                          "typeString": "contract Events"
                        }
                      },
                      "id": 4358,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "asset",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6922,
                      "src": "4654:12:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (string memory,string memory,address,address) external"
                      }
                    },
                    "id": 4363,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4654:77:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4364,
                  "nodeType": "ExpressionStatement",
                  "src": "4654:77:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 4365,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "4744:4:15",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 4038,
                  "id": 4366,
                  "nodeType": "Return",
                  "src": "4737:11:15"
                }
              ]
            },
            "documentation": null,
            "id": 4368,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "createAssetOrderETH",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4035,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4018,
                  "name": "_assetURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 4368,
                  "src": "1983:16:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 4017,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1983:6:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4020,
                  "name": "_assetManager",
                  "nodeType": "VariableDeclaration",
                  "scope": 4368,
                  "src": "2001:21:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4019,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2001:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4022,
                  "name": "_operatorID",
                  "nodeType": "VariableDeclaration",
                  "scope": 4368,
                  "src": "2024:19:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 4021,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2024:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4024,
                  "name": "_fundingLength",
                  "nodeType": "VariableDeclaration",
                  "scope": 4368,
                  "src": "2045:19:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4023,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2045:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4026,
                  "name": "_startTime",
                  "nodeType": "VariableDeclaration",
                  "scope": 4368,
                  "src": "2066:15:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4025,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2066:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4028,
                  "name": "_amountToRaise",
                  "nodeType": "VariableDeclaration",
                  "scope": 4368,
                  "src": "2083:19:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4027,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2083:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4030,
                  "name": "_assetManagerPerc",
                  "nodeType": "VariableDeclaration",
                  "scope": 4368,
                  "src": "2104:22:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4029,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2104:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4032,
                  "name": "_escrow",
                  "nodeType": "VariableDeclaration",
                  "scope": 4368,
                  "src": "2128:12:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4031,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2128:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4034,
                  "name": "_burnToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 4368,
                  "src": "2142:18:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4033,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2142:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1982:179:15"
            },
            "payable": true,
            "returnParameters": {
              "id": 4038,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4037,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 4368,
                  "src": "2212:4:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 4036,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2212:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2211:6:15"
            },
            "scope": 4507,
            "src": "1954:2799:15",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 4394,
              "nodeType": "Block",
              "src": "4854:148:15",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "43726f776473616c6547656e657261746f724554482064657374726f796564",
                        "id": 4376,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4879:33:15",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_1635ff344894629bb8ad9f72a2a40fd81f7dd35d4d5becf9e46d9ad054b7409f",
                          "typeString": "literal_string \"CrowdsaleGeneratorETH destroyed\""
                        },
                        "value": "CrowdsaleGeneratorETH destroyed"
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 4378,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 35020,
                            "src": "4922:4:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_CrowdsaleGeneratorETH_$4507",
                              "typeString": "contract CrowdsaleGeneratorETH"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_CrowdsaleGeneratorETH_$4507",
                              "typeString": "contract CrowdsaleGeneratorETH"
                            }
                          ],
                          "id": 4377,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4914:7:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 4379,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4914:13:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 4380,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34923,
                          "src": "4929:3:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 4381,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4929:10:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 4383,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 35020,
                              "src": "4949:4:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_CrowdsaleGeneratorETH_$4507",
                                "typeString": "contract CrowdsaleGeneratorETH"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_CrowdsaleGeneratorETH_$4507",
                                "typeString": "contract CrowdsaleGeneratorETH"
                              }
                            ],
                            "id": 4382,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "4941:7:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 4384,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4941:13:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 4385,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4941:21:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 4386,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4964:2:15",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_1635ff344894629bb8ad9f72a2a40fd81f7dd35d4d5becf9e46d9ad054b7409f",
                          "typeString": "literal_string \"CrowdsaleGeneratorETH destroyed\""
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 4373,
                        "name": "events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3976,
                        "src": "4860:6:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Events_$7233",
                          "typeString": "contract Events"
                        }
                      },
                      "id": 4375,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transaction",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6838,
                      "src": "4860:18:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$_t_address_$_t_uint256_$_t_bytes32_$returns$__$",
                        "typeString": "function (string memory,address,address,uint256,bytes32) external"
                      }
                    },
                    "id": 4387,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4860:107:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4388,
                  "nodeType": "ExpressionStatement",
                  "src": "4860:107:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 4390,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34923,
                          "src": "4986:3:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 4391,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4986:10:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 4389,
                      "name": "selfdestruct",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34931,
                      "src": "4973:12:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_selfdestruct_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 4392,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4973:24:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4393,
                  "nodeType": "ExpressionStatement",
                  "src": "4973:24:15"
                }
              ]
            },
            "documentation": null,
            "id": 4395,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 4371,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 4370,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 4506,
                  "src": "4833:9:15",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "4833:9:15"
              }
            ],
            "name": "destroy",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4369,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4828:2:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 4372,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4854:0:15"
            },
            "scope": 4507,
            "src": "4812:190:15",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 4486,
              "nodeType": "Block",
              "src": "5433:694:15",
              "statements": [
                {
                  "assignments": [
                    4407
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 4407,
                      "name": "assetManagerEscrowID",
                      "nodeType": "VariableDeclaration",
                      "scope": 4487,
                      "src": "5439:28:15",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 4406,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "5439:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 4415,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 4411,
                            "name": "_assetAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4399,
                            "src": "5497:13:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 4412,
                            "name": "_assetManager",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4397,
                            "src": "5512:13:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 4409,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34910,
                            "src": "5480:3:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 4410,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "5480:16:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 4413,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5480:46:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 4408,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34917,
                      "src": "5470:9:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 4414,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5470:57:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5439:88:15"
                },
                {
                  "assignments": [
                    4417
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 4417,
                      "name": "platformToken",
                      "nodeType": "VariableDeclaration",
                      "scope": 4487,
                      "src": "5533:21:15",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 4416,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "5533:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 4427,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "706c6174666f726d2e746f6b656e",
                                "id": 4423,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5608:16:15",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_ffe019b1cc482e4fc0ddd12b5de074680e254c0f3d00b72ab6797fa9398e7188",
                                  "typeString": "literal_string \"platform.token\""
                                },
                                "value": "platform.token"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_ffe019b1cc482e4fc0ddd12b5de074680e254c0f3d00b72ab6797fa9398e7188",
                                  "typeString": "literal_string \"platform.token\""
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 4421,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 34910,
                                "src": "5591:3:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 4422,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "5591:16:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 4424,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5591:34:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 4420,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34917,
                          "src": "5581:9:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 4425,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5581:45:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 4418,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3974,
                        "src": "5557:8:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DBInterface_$9332",
                          "typeString": "contract DBInterface"
                        }
                      },
                      "id": 4419,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "addressStorage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9303,
                      "src": "5557:23:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                        "typeString": "function (bytes32) view external returns (address)"
                      }
                    },
                    "id": 4426,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5557:70:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5533:94:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 4433,
                            "name": "_assetManager",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4397,
                            "src": "5697:13:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "hexValue": "636f6e7472616374",
                                        "id": 4439,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "string",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "5763:10:15",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_stringliteral_7f6dd79f0020bee2024a097aaa5d32ab7ca31126fa375538de047e7475fa8572",
                                          "typeString": "literal_string \"contract\""
                                        },
                                        "value": "contract"
                                      },
                                      {
                                        "argumentTypes": null,
                                        "hexValue": "41737365744d616e61676572457363726f77",
                                        "id": 4440,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "string",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "5775:20:15",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_stringliteral_d79462b3899741dffcd01137964294c129c75dad90e5c4a785330c12a214c6ae",
                                          "typeString": "literal_string \"AssetManagerEscrow\""
                                        },
                                        "value": "AssetManagerEscrow"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_stringliteral_7f6dd79f0020bee2024a097aaa5d32ab7ca31126fa375538de047e7475fa8572",
                                          "typeString": "literal_string \"contract\""
                                        },
                                        {
                                          "typeIdentifier": "t_stringliteral_d79462b3899741dffcd01137964294c129c75dad90e5c4a785330c12a214c6ae",
                                          "typeString": "literal_string \"AssetManagerEscrow\""
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 4437,
                                        "name": "abi",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 34910,
                                        "src": "5746:3:15",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_abi",
                                          "typeString": "abi"
                                        }
                                      },
                                      "id": 4438,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "memberName": "encodePacked",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "5746:16:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                        "typeString": "function () pure returns (bytes memory)"
                                      }
                                    },
                                    "id": 4441,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "5746:50:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  ],
                                  "id": 4436,
                                  "name": "keccak256",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 34917,
                                  "src": "5736:9:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                    "typeString": "function () pure returns (bytes32)"
                                  }
                                },
                                "id": 4442,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "5736:61:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 4434,
                                "name": "database",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 3974,
                                "src": "5712:8:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_DBInterface_$9332",
                                  "typeString": "contract DBInterface"
                                }
                              },
                              "id": 4435,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "addressStorage",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 9303,
                              "src": "5712:23:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                                "typeString": "function (bytes32) view external returns (address)"
                              }
                            },
                            "id": 4443,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5712:86:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 4444,
                            "name": "_amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4401,
                            "src": "5800:7:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 4430,
                                "name": "platformToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4417,
                                "src": "5669:13:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "id": 4429,
                              "name": "CrowdsaleGeneratorETH_ERC20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3957,
                              "src": "5641:27:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_CrowdsaleGeneratorETH_ERC20_$3957_$",
                                "typeString": "type(contract CrowdsaleGeneratorETH_ERC20)"
                              }
                            },
                            "id": 4431,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5641:42:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_CrowdsaleGeneratorETH_ERC20_$3957",
                              "typeString": "contract CrowdsaleGeneratorETH_ERC20"
                            }
                          },
                          "id": 4432,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transferFrom",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 3956,
                          "src": "5641:55:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,address,uint256) external returns (bool)"
                          }
                        },
                        "id": 4445,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5641:167:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 4428,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "5633:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 4446,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5633:176:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4447,
                  "nodeType": "ExpressionStatement",
                  "src": "5633:176:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "61737365742e657363726f77",
                                "id": 4454,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5859:14:15",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_2ef75a2a67cb730b701329cff2940771024fe969695e2e881685d079ce6a9e74",
                                  "typeString": "literal_string \"asset.escrow\""
                                },
                                "value": "asset.escrow"
                              },
                              {
                                "argumentTypes": null,
                                "id": 4455,
                                "name": "assetManagerEscrowID",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4407,
                                "src": "5875:20:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_2ef75a2a67cb730b701329cff2940771024fe969695e2e881685d079ce6a9e74",
                                  "typeString": "literal_string \"asset.escrow\""
                                },
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 4452,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 34910,
                                "src": "5842:3:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 4453,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "5842:16:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 4456,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5842:54:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 4451,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34917,
                          "src": "5832:9:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 4457,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5832:65:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 4458,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4401,
                        "src": "5899:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 4448,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3974,
                        "src": "5815:8:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DBInterface_$9332",
                          "typeString": "contract DBInterface"
                        }
                      },
                      "id": 4450,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9212,
                      "src": "5815:16:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_uint256_$returns$__$",
                        "typeString": "function (bytes32,uint256) external"
                      }
                    },
                    "id": 4459,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5815:92:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4460,
                  "nodeType": "ExpressionStatement",
                  "src": "5815:92:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "61737365742e6d616e61676572",
                                "id": 4467,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5960:15:15",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_c2b25eef4340162b026d227f7a9ebe7bae98953eff48283607445f4b250b0cbc",
                                  "typeString": "literal_string \"asset.manager\""
                                },
                                "value": "asset.manager"
                              },
                              {
                                "argumentTypes": null,
                                "id": 4468,
                                "name": "_assetAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4399,
                                "src": "5977:13:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_c2b25eef4340162b026d227f7a9ebe7bae98953eff48283607445f4b250b0cbc",
                                  "typeString": "literal_string \"asset.manager\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 4465,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 34910,
                                "src": "5943:3:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 4466,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "5943:16:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 4469,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5943:48:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 4464,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34917,
                          "src": "5933:9:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 4470,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5933:59:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 4471,
                        "name": "_assetManager",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4397,
                        "src": "5994:13:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 4461,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3974,
                        "src": "5913:8:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DBInterface_$9332",
                          "typeString": "contract DBInterface"
                        }
                      },
                      "id": 4463,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9205,
                      "src": "5913:19:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address) external"
                      }
                    },
                    "id": 4472,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5913:95:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4473,
                  "nodeType": "ExpressionStatement",
                  "src": "5913:95:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "457363726f77206c6f636b6564",
                        "id": 4477,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6028:15:15",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_6a03bd635fb67b531824e2fdd17959769718e91a1e0981f4c6314c74412d0284",
                          "typeString": "literal_string \"Escrow locked\""
                        },
                        "value": "Escrow locked"
                      },
                      {
                        "argumentTypes": null,
                        "id": 4478,
                        "name": "_assetAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4399,
                        "src": "6045:13:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 4479,
                        "name": "assetManagerEscrowID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4407,
                        "src": "6060:20:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 4480,
                        "name": "_assetManager",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4397,
                        "src": "6082:13:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 4481,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4401,
                        "src": "6097:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_6a03bd635fb67b531824e2fdd17959769718e91a1e0981f4c6314c74412d0284",
                          "typeString": "literal_string \"Escrow locked\""
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 4474,
                        "name": "events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3976,
                        "src": "6014:6:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Events_$7233",
                          "typeString": "contract Events"
                        }
                      },
                      "id": 4476,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "escrow",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6954,
                      "src": "6014:13:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$_t_bytes32_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (string memory,address,bytes32,address,uint256) external"
                      }
                    },
                    "id": 4482,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6014:91:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4483,
                  "nodeType": "ExpressionStatement",
                  "src": "6014:91:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 4484,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "6118:4:15",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 4405,
                  "id": 4485,
                  "nodeType": "Return",
                  "src": "6111:11:15"
                }
              ]
            },
            "documentation": "///////////////////////////////////////////////////////////////////////////////////////////////////////////////",
            "id": 4487,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "lockEscrowInternal",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4402,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4397,
                  "name": "_assetManager",
                  "nodeType": "VariableDeclaration",
                  "scope": 4487,
                  "src": "5346:21:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4396,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5346:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4399,
                  "name": "_assetAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 4487,
                  "src": "5369:21:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4398,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5369:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4401,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 4487,
                  "src": "5392:12:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4400,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "5392:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5345:60:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 4405,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4404,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 4487,
                  "src": "5427:4:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 4403,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "5427:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5426:6:15"
            },
            "scope": 4507,
            "src": "5318:809:15",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 4505,
              "nodeType": "Block",
              "src": "6747:110:15",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "6f776e6572",
                                    "id": 4495,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "6809:7:15",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c0",
                                      "typeString": "literal_string \"owner\""
                                    },
                                    "value": "owner"
                                  },
                                  {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 4496,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 34923,
                                      "src": "6818:3:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 4497,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "6818:10:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_stringliteral_02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c0",
                                      "typeString": "literal_string \"owner\""
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 4493,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 34910,
                                    "src": "6792:3:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 4494,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "6792:16:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 4498,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "6792:37:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "id": 4492,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34917,
                              "src": "6782:9:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                "typeString": "function () pure returns (bytes32)"
                              }
                            },
                            "id": 4499,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "6782:48:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 4490,
                            "name": "database",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3974,
                            "src": "6761:8:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_DBInterface_$9332",
                              "typeString": "contract DBInterface"
                            }
                          },
                          "id": 4491,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "boolStorage",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 9324,
                          "src": "6761:20:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 4500,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6761:70:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4e6f74206f776e6572",
                        "id": 4501,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6833:11:15",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c266efca4f4ed37612271196433531dcbb4fca89a694d568d1e290e32feb1682",
                          "typeString": "literal_string \"Not owner\""
                        },
                        "value": "Not owner"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c266efca4f4ed37612271196433531dcbb4fca89a694d568d1e290e32feb1682",
                          "typeString": "literal_string \"Not owner\""
                        }
                      ],
                      "id": 4489,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34927,
                      "src": "6753:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 4502,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6753:92:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4503,
                  "nodeType": "ExpressionStatement",
                  "src": "6753:92:15"
                },
                {
                  "id": 4504,
                  "nodeType": "PlaceholderStatement",
                  "src": "6851:1:15"
                }
              ]
            },
            "documentation": "///////////////////////////////////////////////////////////////////////////////////////////////////////////////",
            "id": 4506,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 4488,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6747:0:15"
            },
            "src": "6728:129:15",
            "visibility": "internal"
          }
        ],
        "scope": 4508,
        "src": "633:6689:15"
      }
    ],
    "src": "0:7323:15"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/crowdsale/CrowdsaleGeneratorETH.sol",
    "exportedSymbols": {
      "CrowdsaleGeneratorETH": [
        4507
      ],
      "CrowdsaleGeneratorETH_ERC20": [
        3957
      ],
      "CrowdsaleGeneratorETH_ERC20Burner": [
        3969
      ]
    },
    "id": 4508,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3941,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:15"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../math/SafeMath.sol",
        "id": 3942,
        "nodeType": "ImportDirective",
        "scope": 4508,
        "sourceUnit": 22711,
        "src": "26:30:15",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/DBInterface.sol",
        "file": "../interfaces/DBInterface.sol",
        "id": 3943,
        "nodeType": "ImportDirective",
        "scope": 4508,
        "sourceUnit": 9333,
        "src": "57:39:15",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/Events.sol",
        "file": "../database/Events.sol",
        "id": 3944,
        "nodeType": "ImportDirective",
        "scope": 4508,
        "sourceUnit": 7234,
        "src": "97:32:15",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc20/DividendToken.sol",
        "file": "../tokens/erc20/DividendToken.sol",
        "id": 3945,
        "nodeType": "ImportDirective",
        "scope": 4508,
        "sourceUnit": 32032,
        "src": "130:43:15",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 3957,
        "linearizedBaseContracts": [
          3957
        ],
        "name": "CrowdsaleGeneratorETH_ERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 3956,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3952,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3947,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3956,
                  "src": "239:13:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3946,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "239:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3949,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3956,
                  "src": "254:11:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3948,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "254:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3951,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 3956,
                  "src": "267:14:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3950,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "267:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "238:44:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 3955,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3954,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3956,
                  "src": "301:4:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3953,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "301:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "300:6:15"
            },
            "scope": 3957,
            "src": "217:90:15",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 4508,
        "src": "175:134:15"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 3969,
        "linearizedBaseContracts": [
          3969
        ],
        "name": "CrowdsaleGeneratorETH_ERC20Burner",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 3968,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3964,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3959,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 3968,
                  "src": "372:20:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3958,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "372:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3961,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 3968,
                  "src": "394:12:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3960,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "394:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3963,
                  "name": "_burnToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 3968,
                  "src": "408:18:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3962,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "408:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "371:56:15"
            },
            "payable": true,
            "returnParameters": {
              "id": 3967,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3966,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3968,
                  "src": "454:4:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3965,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "454:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "453:6:15"
            },
            "scope": 3969,
            "src": "358:102:15",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 4508,
        "src": "310:152:15"
      },
      {
        "baseContracts": [],
        "contractDependencies": [
          32031
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 4507,
        "linearizedBaseContracts": [
          4507
        ],
        "name": "CrowdsaleGeneratorETH",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 3972,
            "libraryName": {
              "contractScope": null,
              "id": 3970,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 22710,
              "src": "674:8:15",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$22710",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "668:27:15",
            "typeName": {
              "id": 3971,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "687:7:15",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 3974,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 4507,
            "src": "699:27:15",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_DBInterface_$9332",
              "typeString": "contract DBInterface"
            },
            "typeName": {
              "contractScope": null,
              "id": 3973,
              "name": "DBInterface",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9332,
              "src": "699:11:15",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DBInterface_$9332",
                "typeString": "contract DBInterface"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 3976,
            "name": "events",
            "nodeType": "VariableDeclaration",
            "scope": 4507,
            "src": "730:20:15",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Events_$7233",
              "typeString": "contract Events"
            },
            "typeName": {
              "contractScope": null,
              "id": 3975,
              "name": "Events",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 7233,
              "src": "730:6:15",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Events_$7233",
                "typeString": "contract Events"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 3978,
            "name": "burner",
            "nodeType": "VariableDeclaration",
            "scope": 4507,
            "src": "754:47:15",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_CrowdsaleGeneratorETH_ERC20Burner_$3969",
              "typeString": "contract CrowdsaleGeneratorETH_ERC20Burner"
            },
            "typeName": {
              "contractScope": null,
              "id": 3977,
              "name": "CrowdsaleGeneratorETH_ERC20Burner",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3969,
              "src": "754:33:15",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_CrowdsaleGeneratorETH_ERC20Burner_$3969",
                "typeString": "contract CrowdsaleGeneratorETH_ERC20Burner"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 3981,
            "name": "scalingFactor",
            "nodeType": "VariableDeclaration",
            "scope": 4507,
            "src": "806:34:15",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 3979,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "806:4:15",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "31653332",
              "id": 3980,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "836:4:15",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_100000000000000000000000000000000_by_1",
                "typeString": "int_const 1000...(25 digits omitted)...0000"
              },
              "value": "1e32"
            },
            "visibility": "internal"
          },
          {
            "body": {
              "id": 4015,
              "nodeType": "Block",
              "src": "1036:209:15",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3992,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 3988,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3974,
                      "src": "1044:8:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DBInterface_$9332",
                        "typeString": "contract DBInterface"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 3990,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3983,
                          "src": "1067:9:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 3989,
                        "name": "DBInterface",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9332,
                        "src": "1055:11:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_DBInterface_$9332_$",
                          "typeString": "type(contract DBInterface)"
                        }
                      },
                      "id": 3991,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1055:22:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DBInterface_$9332",
                        "typeString": "contract DBInterface"
                      }
                    },
                    "src": "1044:33:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DBInterface_$9332",
                      "typeString": "contract DBInterface"
                    }
                  },
                  "id": 3993,
                  "nodeType": "ExpressionStatement",
                  "src": "1044:33:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3998,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 3994,
                      "name": "events",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3976,
                      "src": "1085:6:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Events_$7233",
                        "typeString": "contract Events"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 3996,
                          "name": "_events",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3985,
                          "src": "1101:7:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 3995,
                        "name": "Events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7233,
                        "src": "1094:6:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Events_$7233_$",
                          "typeString": "type(contract Events)"
                        }
                      },
                      "id": 3997,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1094:15:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Events_$7233",
                        "typeString": "contract Events"
                      }
                    },
                    "src": "1085:24:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Events_$7233",
                      "typeString": "contract Events"
                    }
                  },
                  "id": 3999,
                  "nodeType": "ExpressionStatement",
                  "src": "1085:24:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 4013,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 4000,
                      "name": "burner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3978,
                      "src": "1117:6:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_CrowdsaleGeneratorETH_ERC20Burner_$3969",
                        "typeString": "contract CrowdsaleGeneratorETH_ERC20Burner"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "hexValue": "636f6e7472616374",
                                      "id": 4007,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "1211:10:15",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_7f6dd79f0020bee2024a097aaa5d32ab7ca31126fa375538de047e7475fa8572",
                                        "typeString": "literal_string \"contract\""
                                      },
                                      "value": "contract"
                                    },
                                    {
                                      "argumentTypes": null,
                                      "hexValue": "45524332304275726e6572",
                                      "id": 4008,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "1223:13:15",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_f37afd47a8830fba7bf478e7ab45c08d6fa0898c2af8eaad557650286ff2635b",
                                        "typeString": "literal_string \"ERC20Burner\""
                                      },
                                      "value": "ERC20Burner"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_stringliteral_7f6dd79f0020bee2024a097aaa5d32ab7ca31126fa375538de047e7475fa8572",
                                        "typeString": "literal_string \"contract\""
                                      },
                                      {
                                        "typeIdentifier": "t_stringliteral_f37afd47a8830fba7bf478e7ab45c08d6fa0898c2af8eaad557650286ff2635b",
                                        "typeString": "literal_string \"ERC20Burner\""
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 4005,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 34910,
                                      "src": "1194:3:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 4006,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "1194:16:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 4009,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "1194:43:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                ],
                                "id": 4004,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 34917,
                                "src": "1184:9:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                  "typeString": "function () pure returns (bytes32)"
                                }
                              },
                              "id": 4010,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1184:54:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 4002,
                              "name": "database",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3974,
                              "src": "1160:8:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DBInterface_$9332",
                                "typeString": "contract DBInterface"
                              }
                            },
                            "id": 4003,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "addressStorage",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9303,
                            "src": "1160:23:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                              "typeString": "function (bytes32) view external returns (address)"
                            }
                          },
                          "id": 4011,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1160:79:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 4001,
                        "name": "CrowdsaleGeneratorETH_ERC20Burner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3969,
                        "src": "1126:33:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_CrowdsaleGeneratorETH_ERC20Burner_$3969_$",
                          "typeString": "type(contract CrowdsaleGeneratorETH_ERC20Burner)"
                        }
                      },
                      "id": 4012,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1126:114:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_CrowdsaleGeneratorETH_ERC20Burner_$3969",
                        "typeString": "contract CrowdsaleGeneratorETH_ERC20Burner"
                      }
                    },
                    "src": "1117:123:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_CrowdsaleGeneratorETH_ERC20Burner_$3969",
                      "typeString": "contract CrowdsaleGeneratorETH_ERC20Burner"
                    }
                  },
                  "id": 4014,
                  "nodeType": "ExpressionStatement",
                  "src": "1117:123:15"
                }
              ]
            },
            "documentation": null,
            "id": 4016,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3986,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3983,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 4016,
                  "src": "992:17:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3982,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "992:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3985,
                  "name": "_events",
                  "nodeType": "VariableDeclaration",
                  "scope": 4016,
                  "src": "1011:15:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3984,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1011:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "991:36:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 3987,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1036:0:15"
            },
            "scope": 4507,
            "src": "980:265:15",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 4367,
              "nodeType": "Block",
              "src": "2218:2535:15",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 4043,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 4039,
                      "name": "_burnToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4034,
                      "src": "2227:10:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "307845656565654565656545654565654565456545656545454565656565456565656565656545456545",
                          "id": 4041,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2249:42:15",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "value": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 4040,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2241:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 4042,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2241:51:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2227:65:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 4093,
                    "nodeType": "Block",
                    "src": "2450:134:15",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 4074,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 34923,
                                    "src": "2478:3:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 4075,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "sender",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "2478:10:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "arguments": [
                                        {
                                          "argumentTypes": null,
                                          "arguments": [
                                            {
                                              "argumentTypes": null,
                                              "expression": {
                                                "argumentTypes": null,
                                                "id": 4081,
                                                "name": "msg",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34923,
                                                "src": "2538:3:15",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_magic_message",
                                                  "typeString": "msg"
                                                }
                                              },
                                              "id": 4082,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "memberName": "sig",
                                              "nodeType": "MemberAccess",
                                              "referencedDeclaration": null,
                                              "src": "2538:7:15",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_bytes4",
                                                "typeString": "bytes4"
                                              }
                                            },
                                            {
                                              "argumentTypes": null,
                                              "arguments": [
                                                {
                                                  "argumentTypes": null,
                                                  "id": 4084,
                                                  "name": "this",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 35020,
                                                  "src": "2555:4:15",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_CrowdsaleGeneratorETH_$4507",
                                                    "typeString": "contract CrowdsaleGeneratorETH"
                                                  }
                                                }
                                              ],
                                              "expression": {
                                                "argumentTypes": [
                                                  {
                                                    "typeIdentifier": "t_contract$_CrowdsaleGeneratorETH_$4507",
                                                    "typeString": "contract CrowdsaleGeneratorETH"
                                                  }
                                                ],
                                                "id": 4083,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "2547:7:15",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_type$_t_address_$",
                                                  "typeString": "type(address)"
                                                },
                                                "typeName": "address"
                                              },
                                              "id": 4085,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "kind": "typeConversion",
                                              "lValueRequested": false,
                                              "names": [],
                                              "nodeType": "FunctionCall",
                                              "src": "2547:13:15",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                              }
                                            }
                                          ],
                                          "expression": {
                                            "argumentTypes": [
                                              {
                                                "typeIdentifier": "t_bytes4",
                                                "typeString": "bytes4"
                                              },
                                              {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                              }
                                            ],
                                            "expression": {
                                              "argumentTypes": null,
                                              "id": 4079,
                                              "name": "abi",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 34910,
                                              "src": "2521:3:15",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_magic_abi",
                                                "typeString": "abi"
                                              }
                                            },
                                            "id": 4080,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "memberName": "encodePacked",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "2521:16:15",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                              "typeString": "function () pure returns (bytes memory)"
                                            }
                                          },
                                          "id": 4086,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "kind": "functionCall",
                                          "lValueRequested": false,
                                          "names": [],
                                          "nodeType": "FunctionCall",
                                          "src": "2521:40:15",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                          }
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                          }
                                        ],
                                        "id": 4078,
                                        "name": "keccak256",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 34917,
                                        "src": "2511:9:15",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                          "typeString": "function () pure returns (bytes32)"
                                        }
                                      },
                                      "id": 4087,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "2511:51:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 4076,
                                      "name": "database",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 3974,
                                      "src": "2490:8:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_DBInterface_$9332",
                                        "typeString": "contract DBInterface"
                                      }
                                    },
                                    "id": 4077,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "uintStorage",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 9289,
                                    "src": "2490:20:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_uint256_$",
                                      "typeString": "function (bytes32) view external returns (uint256)"
                                    }
                                  },
                                  "id": 4088,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2490:73:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "id": 4089,
                                  "name": "_burnToken",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4034,
                                  "src": "2565:10:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 4072,
                                  "name": "burner",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3978,
                                  "src": "2466:6:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_CrowdsaleGeneratorETH_ERC20Burner_$3969",
                                    "typeString": "contract CrowdsaleGeneratorETH_ERC20Burner"
                                  }
                                },
                                "id": 4073,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "burn",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 3968,
                                "src": "2466:11:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_external_payable$_t_address_$_t_uint256_$_t_address_$returns$_t_bool_$",
                                  "typeString": "function (address,uint256,address) payable external returns (bool)"
                                }
                              },
                              "id": 4090,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2466:110:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            ],
                            "id": 4071,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              34926,
                              34927
                            ],
                            "referencedDeclaration": 34926,
                            "src": "2458:7:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                              "typeString": "function (bool) pure"
                            }
                          },
                          "id": 4091,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2458:119:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 4092,
                        "nodeType": "ExpressionStatement",
                        "src": "2458:119:15"
                      }
                    ]
                  },
                  "id": 4094,
                  "nodeType": "IfStatement",
                  "src": "2224:360:15",
                  "trueBody": {
                    "id": 4070,
                    "nodeType": "Block",
                    "src": "2293:151:15",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 4051,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 34923,
                                    "src": "2338:3:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 4052,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "sender",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "2338:10:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "arguments": [
                                        {
                                          "argumentTypes": null,
                                          "arguments": [
                                            {
                                              "argumentTypes": null,
                                              "expression": {
                                                "argumentTypes": null,
                                                "id": 4058,
                                                "name": "msg",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34923,
                                                "src": "2398:3:15",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_magic_message",
                                                  "typeString": "msg"
                                                }
                                              },
                                              "id": 4059,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "memberName": "sig",
                                              "nodeType": "MemberAccess",
                                              "referencedDeclaration": null,
                                              "src": "2398:7:15",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_bytes4",
                                                "typeString": "bytes4"
                                              }
                                            },
                                            {
                                              "argumentTypes": null,
                                              "arguments": [
                                                {
                                                  "argumentTypes": null,
                                                  "id": 4061,
                                                  "name": "this",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 35020,
                                                  "src": "2415:4:15",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_CrowdsaleGeneratorETH_$4507",
                                                    "typeString": "contract CrowdsaleGeneratorETH"
                                                  }
                                                }
                                              ],
                                              "expression": {
                                                "argumentTypes": [
                                                  {
                                                    "typeIdentifier": "t_contract$_CrowdsaleGeneratorETH_$4507",
                                                    "typeString": "contract CrowdsaleGeneratorETH"
                                                  }
                                                ],
                                                "id": 4060,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "2407:7:15",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_type$_t_address_$",
                                                  "typeString": "type(address)"
                                                },
                                                "typeName": "address"
                                              },
                                              "id": 4062,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "kind": "typeConversion",
                                              "lValueRequested": false,
                                              "names": [],
                                              "nodeType": "FunctionCall",
                                              "src": "2407:13:15",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                              }
                                            }
                                          ],
                                          "expression": {
                                            "argumentTypes": [
                                              {
                                                "typeIdentifier": "t_bytes4",
                                                "typeString": "bytes4"
                                              },
                                              {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                              }
                                            ],
                                            "expression": {
                                              "argumentTypes": null,
                                              "id": 4056,
                                              "name": "abi",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 34910,
                                              "src": "2381:3:15",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_magic_abi",
                                                "typeString": "abi"
                                              }
                                            },
                                            "id": 4057,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "memberName": "encodePacked",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "2381:16:15",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                              "typeString": "function () pure returns (bytes memory)"
                                            }
                                          },
                                          "id": 4063,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "kind": "functionCall",
                                          "lValueRequested": false,
                                          "names": [],
                                          "nodeType": "FunctionCall",
                                          "src": "2381:40:15",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                          }
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                          }
                                        ],
                                        "id": 4055,
                                        "name": "keccak256",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 34917,
                                        "src": "2371:9:15",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                          "typeString": "function () pure returns (bytes32)"
                                        }
                                      },
                                      "id": 4064,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "2371:51:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 4053,
                                      "name": "database",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 3974,
                                      "src": "2350:8:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_DBInterface_$9332",
                                        "typeString": "contract DBInterface"
                                      }
                                    },
                                    "id": 4054,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "uintStorage",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 9289,
                                    "src": "2350:20:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_uint256_$",
                                      "typeString": "function (bytes32) view external returns (uint256)"
                                    }
                                  },
                                  "id": 4065,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2350:73:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "id": 4066,
                                  "name": "_burnToken",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4034,
                                  "src": "2425:10:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 4048,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 34923,
                                      "src": "2327:3:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 4049,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "value",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "2327:9:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 4045,
                                      "name": "burner",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 3978,
                                      "src": "2309:6:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_CrowdsaleGeneratorETH_ERC20Burner_$3969",
                                        "typeString": "contract CrowdsaleGeneratorETH_ERC20Burner"
                                      }
                                    },
                                    "id": 4046,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "burn",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 3968,
                                    "src": "2309:11:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_external_payable$_t_address_$_t_uint256_$_t_address_$returns$_t_bool_$",
                                      "typeString": "function (address,uint256,address) payable external returns (bool)"
                                    }
                                  },
                                  "id": 4047,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "value",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "2309:17:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_setvalue_nonpayable$_t_uint256_$returns$_t_function_external_payable$_t_address_$_t_uint256_$_t_address_$returns$_t_bool_$value_$",
                                    "typeString": "function (uint256) returns (function (address,uint256,address) payable external returns (bool))"
                                  }
                                },
                                "id": 4050,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2309:28:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_external_payable$_t_address_$_t_uint256_$_t_address_$returns$_t_bool_$value",
                                  "typeString": "function (address,uint256,address) payable external returns (bool)"
                                }
                              },
                              "id": 4067,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2309:127:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            ],
                            "id": 4044,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              34926,
                              34927
                            ],
                            "referencedDeclaration": 34926,
                            "src": "2301:7:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                              "typeString": "function (bool) pure"
                            }
                          },
                          "id": 4068,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2301:136:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 4069,
                        "nodeType": "ExpressionStatement",
                        "src": "2301:136:15"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 4117,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 4099,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 4096,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34923,
                              "src": "2597:3:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 4097,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2597:10:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 4098,
                            "name": "_assetManager",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4020,
                            "src": "2611:13:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "2597:27:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "||",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "hexValue": "617070726f76616c",
                                      "id": 4105,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "2676:10:15",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_f1dd521ebebaf5ba3d6127465ff9c4a71139a515dba59a79359c5c15f6766594",
                                        "typeString": "literal_string \"approval\""
                                      },
                                      "value": "approval"
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 4106,
                                      "name": "_assetManager",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 4020,
                                      "src": "2688:13:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 4107,
                                        "name": "msg",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 34923,
                                        "src": "2703:3:15",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_message",
                                          "typeString": "msg"
                                        }
                                      },
                                      "id": 4108,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "sender",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "2703:10:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "arguments": [
                                        {
                                          "argumentTypes": null,
                                          "id": 4110,
                                          "name": "this",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 35020,
                                          "src": "2723:4:15",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_CrowdsaleGeneratorETH_$4507",
                                            "typeString": "contract CrowdsaleGeneratorETH"
                                          }
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_contract$_CrowdsaleGeneratorETH_$4507",
                                            "typeString": "contract CrowdsaleGeneratorETH"
                                          }
                                        ],
                                        "id": 4109,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "nodeType": "ElementaryTypeNameExpression",
                                        "src": "2715:7:15",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_address_$",
                                          "typeString": "type(address)"
                                        },
                                        "typeName": "address"
                                      },
                                      "id": 4111,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "typeConversion",
                                      "lValueRequested": false,
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "2715:13:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 4112,
                                        "name": "msg",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 34923,
                                        "src": "2730:3:15",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_message",
                                          "typeString": "msg"
                                        }
                                      },
                                      "id": 4113,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "sig",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "2730:7:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes4",
                                        "typeString": "bytes4"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_stringliteral_f1dd521ebebaf5ba3d6127465ff9c4a71139a515dba59a79359c5c15f6766594",
                                        "typeString": "literal_string \"approval\""
                                      },
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      },
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      },
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      },
                                      {
                                        "typeIdentifier": "t_bytes4",
                                        "typeString": "bytes4"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 4103,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 34910,
                                      "src": "2659:3:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 4104,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "2659:16:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 4114,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2659:79:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                ],
                                "id": 4102,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 34917,
                                "src": "2649:9:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                  "typeString": "function () pure returns (bytes32)"
                                }
                              },
                              "id": 4115,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2649:90:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 4100,
                              "name": "database",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3974,
                              "src": "2628:8:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DBInterface_$9332",
                                "typeString": "contract DBInterface"
                              }
                            },
                            "id": 4101,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "boolStorage",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9324,
                            "src": "2628:20:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                              "typeString": "function (bytes32) view external returns (bool)"
                            }
                          },
                          "id": 4116,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2628:112:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "2597:143:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "55736572206e6f7420617070726f766564",
                        "id": 4118,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2742:19:15",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_ed2f2fab5396dfeed9b474c41cea0ea1a9b61e1563de3f6ca8beae276160c8c4",
                          "typeString": "literal_string \"User not approved\""
                        },
                        "value": "User not approved"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_ed2f2fab5396dfeed9b474c41cea0ea1a9b61e1563de3f6ca8beae276160c8c4",
                          "typeString": "literal_string \"User not approved\""
                        }
                      ],
                      "id": 4095,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34927,
                      "src": "2589:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 4119,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2589:173:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4120,
                  "nodeType": "ExpressionStatement",
                  "src": "2589:173:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 4124,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 4122,
                          "name": "_amountToRaise",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4028,
                          "src": "2776:14:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 4123,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2793:1:15",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "2776:18:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "43726f776473616c6520676f616c206973207a65726f",
                        "id": 4125,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2796:24:15",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c7b7209f946d85b4fd2e655be33c145a9859cdcbd2a952365882cc43bb76f510",
                          "typeString": "literal_string \"Crowdsale goal is zero\""
                        },
                        "value": "Crowdsale goal is zero"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c7b7209f946d85b4fd2e655be33c145a9859cdcbd2a952365882cc43bb76f510",
                          "typeString": "literal_string \"Crowdsale goal is zero\""
                        }
                      ],
                      "id": 4121,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34927,
                      "src": "2768:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 4126,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2768:53:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4127,
                  "nodeType": "ExpressionStatement",
                  "src": "2768:53:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 4131,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 4129,
                          "name": "_assetManagerPerc",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4030,
                          "src": "2835:17:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "313030",
                          "id": 4130,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2855:3:15",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_100_by_1",
                            "typeString": "int_const 100"
                          },
                          "value": "100"
                        },
                        "src": "2835:23:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4d616e616765722070657263656e74206e65656420746f206265206c657373207468616e20313030",
                        "id": 4132,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2860:42:15",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c574bf17b7f1df922df60b30a3b2c1a2fa3f613fdd848013c089111fa5eb6303",
                          "typeString": "literal_string \"Manager percent need to be less than 100\""
                        },
                        "value": "Manager percent need to be less than 100"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c574bf17b7f1df922df60b30a3b2c1a2fa3f613fdd848013c089111fa5eb6303",
                          "typeString": "literal_string \"Manager percent need to be less than 100\""
                        }
                      ],
                      "id": 4128,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34927,
                      "src": "2827:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 4133,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2827:76:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4134,
                  "nodeType": "ExpressionStatement",
                  "src": "2827:76:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "6f70657261746f722e616363657074734574686572",
                                    "id": 4141,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "2965:23:15",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_54580b1e6ba749d2c64f391cfdaf27cde5a34ee6cae35a531dca8e91c313d37f",
                                      "typeString": "literal_string \"operator.acceptsEther\""
                                    },
                                    "value": "operator.acceptsEther"
                                  },
                                  {
                                    "argumentTypes": null,
                                    "id": 4142,
                                    "name": "_operatorID",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 4022,
                                    "src": "2990:11:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_stringliteral_54580b1e6ba749d2c64f391cfdaf27cde5a34ee6cae35a531dca8e91c313d37f",
                                      "typeString": "literal_string \"operator.acceptsEther\""
                                    },
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 4139,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 34910,
                                    "src": "2948:3:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 4140,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "2948:16:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 4143,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2948:54:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "id": 4138,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34917,
                              "src": "2938:9:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                "typeString": "function () pure returns (bytes32)"
                              }
                            },
                            "id": 4144,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2938:65:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 4136,
                            "name": "database",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3974,
                            "src": "2917:8:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_DBInterface_$9332",
                              "typeString": "contract DBInterface"
                            }
                          },
                          "id": 4137,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "boolStorage",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 9324,
                          "src": "2917:20:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 4145,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2917:87:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4f70657261746f7220646f6573206e6f7420616363657074204574686572",
                        "id": 4146,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3006:32:15",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_f30b9557d6dd249c3581170c784a962848724e148bd8279733eec359ff392114",
                          "typeString": "literal_string \"Operator does not accept Ether\""
                        },
                        "value": "Operator does not accept Ether"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_f30b9557d6dd249c3581170c784a962848724e148bd8279733eec359ff392114",
                          "typeString": "literal_string \"Operator does not accept Ether\""
                        }
                      ],
                      "id": 4135,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34927,
                      "src": "2909:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 4147,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2909:130:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4148,
                  "nodeType": "ExpressionStatement",
                  "src": "2909:130:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 4163,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "hexValue": "6f70657261746f72",
                                      "id": 4155,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "3104:10:15",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_46a52cf33029de9f84853745a87af28464c80bf0346df1b32e205fc73319f622",
                                        "typeString": "literal_string \"operator\""
                                      },
                                      "value": "operator"
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 4156,
                                      "name": "_operatorID",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 4022,
                                      "src": "3116:11:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_stringliteral_46a52cf33029de9f84853745a87af28464c80bf0346df1b32e205fc73319f622",
                                        "typeString": "literal_string \"operator\""
                                      },
                                      {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 4153,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 34910,
                                      "src": "3087:3:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 4154,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "3087:16:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 4157,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "3087:41:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                ],
                                "id": 4152,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 34917,
                                "src": "3077:9:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                  "typeString": "function () pure returns (bytes32)"
                                }
                              },
                              "id": 4158,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3077:52:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 4150,
                              "name": "database",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3974,
                              "src": "3053:8:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DBInterface_$9332",
                                "typeString": "contract DBInterface"
                              }
                            },
                            "id": 4151,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "addressStorage",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9303,
                            "src": "3053:23:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                              "typeString": "function (bytes32) view external returns (address)"
                            }
                          },
                          "id": 4159,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3053:77:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 4161,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3142:1:15",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 4160,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "3134:7:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 4162,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3134:10:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "3053:91:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4f70657261746f7220646f6573206e6f74206578697374",
                        "id": 4164,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3146:25:15",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_b3b6f6c6263ad174fdf61ad64f7e0c407ad8f2f4a30b0f6feecaa8054eac61db",
                          "typeString": "literal_string \"Operator does not exist\""
                        },
                        "value": "Operator does not exist"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_b3b6f6c6263ad174fdf61ad64f7e0c407ad8f2f4a30b0f6feecaa8054eac61db",
                          "typeString": "literal_string \"Operator does not exist\""
                        }
                      ],
                      "id": 4149,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34927,
                      "src": "3045:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 4165,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3045:127:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4166,
                  "nodeType": "ExpressionStatement",
                  "src": "3045:127:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 4178,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "3186:74:15",
                        "subExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "hexValue": "61737365742e757269",
                                      "id": 4173,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "3235:11:15",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_56e2ecab6cd7c038037b89a88f2668ad26f2dd770e8327b6fa39bf1ad4212b79",
                                        "typeString": "literal_string \"asset.uri\""
                                      },
                                      "value": "asset.uri"
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 4174,
                                      "name": "_assetURI",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 4018,
                                      "src": "3248:9:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_string_calldata_ptr",
                                        "typeString": "string calldata"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_stringliteral_56e2ecab6cd7c038037b89a88f2668ad26f2dd770e8327b6fa39bf1ad4212b79",
                                        "typeString": "literal_string \"asset.uri\""
                                      },
                                      {
                                        "typeIdentifier": "t_string_calldata_ptr",
                                        "typeString": "string calldata"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 4171,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 34910,
                                      "src": "3218:3:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 4172,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "3218:16:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 4175,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "3218:40:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                ],
                                "id": 4170,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 34917,
                                "src": "3208:9:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                  "typeString": "function () pure returns (bytes32)"
                                }
                              },
                              "id": 4176,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3208:51:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 4168,
                              "name": "database",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3974,
                              "src": "3187:8:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DBInterface_$9332",
                                "typeString": "contract DBInterface"
                              }
                            },
                            "id": 4169,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "boolStorage",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9324,
                            "src": "3187:20:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                              "typeString": "function (bytes32) view external returns (bool)"
                            }
                          },
                          "id": 4177,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3187:73:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "417373657420555249206973206e6f7420756e69717565",
                        "id": 4179,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3262:25:15",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_6152b445a1716178c7c98fd7927317c8603dab00216f4d9cd5aa31b4a570c30f",
                          "typeString": "literal_string \"Asset URI is not unique\""
                        },
                        "value": "Asset URI is not unique"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_6152b445a1716178c7c98fd7927317c8603dab00216f4d9cd5aa31b4a570c30f",
                          "typeString": "literal_string \"Asset URI is not unique\""
                        }
                      ],
                      "id": 4167,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34927,
                      "src": "3178:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 4180,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3178:110:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4181,
                  "nodeType": "ExpressionStatement",
                  "src": "3178:110:15"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 4183,
                      "name": "startTime",
                      "nodeType": "VariableDeclaration",
                      "scope": 4368,
                      "src": "3327:14:15",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 4182,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3327:4:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 4184,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3327:14:15"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 4187,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 4185,
                      "name": "_startTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4026,
                      "src": "3350:10:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 4186,
                      "name": "now",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34925,
                      "src": "3363:3:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3350:16:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 4197,
                    "nodeType": "Block",
                    "src": "3403:37:15",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 4195,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 4193,
                            "name": "startTime",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4183,
                            "src": "3411:9:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 4194,
                            "name": "_startTime",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4026,
                            "src": "3423:10:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3411:22:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 4196,
                        "nodeType": "ExpressionStatement",
                        "src": "3411:22:15"
                      }
                    ]
                  },
                  "id": 4198,
                  "nodeType": "IfStatement",
                  "src": "3347:93:15",
                  "trueBody": {
                    "id": 4192,
                    "nodeType": "Block",
                    "src": "3367:30:15",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 4190,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 4188,
                            "name": "startTime",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4183,
                            "src": "3375:9:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 4189,
                            "name": "now",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34925,
                            "src": "3387:3:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3375:15:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 4191,
                        "nodeType": "ExpressionStatement",
                        "src": "3375:15:15"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    4200
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 4200,
                      "name": "assetAddress",
                      "nodeType": "VariableDeclaration",
                      "scope": 4368,
                      "src": "3445:20:15",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 4199,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "3445:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 4217,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 4204,
                            "name": "_assetURI",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4018,
                            "src": "3494:9:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_calldata_ptr",
                              "typeString": "string calldata"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "hexValue": "636f6e7472616374",
                                        "id": 4210,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "string",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "3556:10:15",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_stringliteral_7f6dd79f0020bee2024a097aaa5d32ab7ca31126fa375538de047e7475fa8572",
                                          "typeString": "literal_string \"contract\""
                                        },
                                        "value": "contract"
                                      },
                                      {
                                        "argumentTypes": null,
                                        "hexValue": "43726f776473616c65455448",
                                        "id": 4211,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "string",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "3568:14:15",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_stringliteral_da4f3e8cbb8668202aa505f950184ea6af0f62b86c317c39091234a512fd946b",
                                          "typeString": "literal_string \"CrowdsaleETH\""
                                        },
                                        "value": "CrowdsaleETH"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_stringliteral_7f6dd79f0020bee2024a097aaa5d32ab7ca31126fa375538de047e7475fa8572",
                                          "typeString": "literal_string \"contract\""
                                        },
                                        {
                                          "typeIdentifier": "t_stringliteral_da4f3e8cbb8668202aa505f950184ea6af0f62b86c317c39091234a512fd946b",
                                          "typeString": "literal_string \"CrowdsaleETH\""
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 4208,
                                        "name": "abi",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 34910,
                                        "src": "3539:3:15",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_abi",
                                          "typeString": "abi"
                                        }
                                      },
                                      "id": 4209,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "memberName": "encodePacked",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "3539:16:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                        "typeString": "function () pure returns (bytes memory)"
                                      }
                                    },
                                    "id": 4212,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "3539:44:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  ],
                                  "id": 4207,
                                  "name": "keccak256",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 34917,
                                  "src": "3529:9:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                    "typeString": "function () pure returns (bytes32)"
                                  }
                                },
                                "id": 4213,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3529:55:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 4205,
                                "name": "database",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 3974,
                                "src": "3505:8:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_DBInterface_$9332",
                                  "typeString": "contract DBInterface"
                                }
                              },
                              "id": 4206,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "addressStorage",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 9303,
                              "src": "3505:23:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                                "typeString": "function (bytes32) view external returns (address)"
                              }
                            },
                            "id": 4214,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3505:80:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_calldata_ptr",
                              "typeString": "string calldata"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 4203,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "NewExpression",
                          "src": "3476:17:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_creation_nonpayable$_t_string_memory_ptr_$_t_address_$returns$_t_contract$_DividendToken_$32031_$",
                            "typeString": "function (string memory,address) returns (contract DividendToken)"
                          },
                          "typeName": {
                            "contractScope": null,
                            "id": 4202,
                            "name": "DividendToken",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 32031,
                            "src": "3480:13:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_DividendToken_$32031",
                              "typeString": "contract DividendToken"
                            }
                          }
                        },
                        "id": 4215,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3476:110:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DividendToken_$32031",
                          "typeString": "contract DividendToken"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_DividendToken_$32031",
                          "typeString": "contract DividendToken"
                        }
                      ],
                      "id": 4201,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "3468:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": "address"
                    },
                    "id": 4216,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3468:119:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3445:142:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "63726f776473616c652e7374617274",
                                "id": 4224,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3683:17:15",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_1f60ac00b77a0109f8df6c5adee6dbd5eb34aede6439c0e3c2a90432d9ac0436",
                                  "typeString": "literal_string \"crowdsale.start\""
                                },
                                "value": "crowdsale.start"
                              },
                              {
                                "argumentTypes": null,
                                "id": 4225,
                                "name": "assetAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4200,
                                "src": "3702:12:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_1f60ac00b77a0109f8df6c5adee6dbd5eb34aede6439c0e3c2a90432d9ac0436",
                                  "typeString": "literal_string \"crowdsale.start\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 4222,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 34910,
                                "src": "3666:3:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 4223,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "3666:16:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 4226,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3666:49:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 4221,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34917,
                          "src": "3656:9:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 4227,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3656:60:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 4228,
                        "name": "startTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4183,
                        "src": "3718:9:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 4218,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3974,
                        "src": "3639:8:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DBInterface_$9332",
                          "typeString": "contract DBInterface"
                        }
                      },
                      "id": 4220,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9212,
                      "src": "3639:16:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_uint256_$returns$__$",
                        "typeString": "function (bytes32,uint256) external"
                      }
                    },
                    "id": 4229,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3639:89:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4230,
                  "nodeType": "ExpressionStatement",
                  "src": "3639:89:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "63726f776473616c652e646561646c696e65",
                                "id": 4237,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3778:20:15",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_c5e60127e04b658a1e76a44b60aa4343ed732c83881e29ad6808d263771afcb1",
                                  "typeString": "literal_string \"crowdsale.deadline\""
                                },
                                "value": "crowdsale.deadline"
                              },
                              {
                                "argumentTypes": null,
                                "id": 4238,
                                "name": "assetAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4200,
                                "src": "3800:12:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_c5e60127e04b658a1e76a44b60aa4343ed732c83881e29ad6808d263771afcb1",
                                  "typeString": "literal_string \"crowdsale.deadline\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 4235,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 34910,
                                "src": "3761:3:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 4236,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "3761:16:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 4239,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3761:52:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 4234,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34917,
                          "src": "3751:9:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 4240,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3751:63:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 4243,
                            "name": "_fundingLength",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4024,
                            "src": "3830:14:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 4241,
                            "name": "startTime",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4183,
                            "src": "3816:9:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 4242,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "add",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 22691,
                          "src": "3816:13:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 4244,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3816:29:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 4231,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3974,
                        "src": "3734:8:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DBInterface_$9332",
                          "typeString": "contract DBInterface"
                        }
                      },
                      "id": 4233,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9212,
                      "src": "3734:16:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_uint256_$returns$__$",
                        "typeString": "function (bytes32,uint256) external"
                      }
                    },
                    "id": 4245,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3734:112:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4246,
                  "nodeType": "ExpressionStatement",
                  "src": "3734:112:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "61737365742e6d616e61676572466565",
                                "id": 4253,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3896:18:15",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_0a4a83d415c855c53faa95933c5f8f9d6fcb5eeb285cedb5527063dac2ccbd3b",
                                  "typeString": "literal_string \"asset.managerFee\""
                                },
                                "value": "asset.managerFee"
                              },
                              {
                                "argumentTypes": null,
                                "id": 4254,
                                "name": "assetAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4200,
                                "src": "3916:12:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_0a4a83d415c855c53faa95933c5f8f9d6fcb5eeb285cedb5527063dac2ccbd3b",
                                  "typeString": "literal_string \"asset.managerFee\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 4251,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 34910,
                                "src": "3879:3:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 4252,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "3879:16:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 4255,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3879:50:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 4250,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34917,
                          "src": "3869:9:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 4256,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3869:61:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 4278,
                            "name": "scalingFactor",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3981,
                            "src": "4042:13:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 4274,
                                    "name": "scalingFactor",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3981,
                                    "src": "4022:13:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "arguments": [
                                          {
                                            "argumentTypes": null,
                                            "id": 4270,
                                            "name": "_assetManagerPerc",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 4030,
                                            "src": "3998:17:15",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          }
                                        ],
                                        "expression": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          ],
                                          "expression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                              {
                                                "argumentTypes": null,
                                                "hexValue": "313030",
                                                "id": 4267,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3989:3:15",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_rational_100_by_1",
                                                  "typeString": "int_const 100"
                                                },
                                                "value": "100"
                                              }
                                            ],
                                            "expression": {
                                              "argumentTypes": [
                                                {
                                                  "typeIdentifier": "t_rational_100_by_1",
                                                  "typeString": "int_const 100"
                                                }
                                              ],
                                              "id": 4266,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "nodeType": "ElementaryTypeNameExpression",
                                              "src": "3984:4:15",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_uint256_$",
                                                "typeString": "type(uint256)"
                                              },
                                              "typeName": "uint"
                                            },
                                            "id": 4268,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3984:9:15",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "id": 4269,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberName": "sub",
                                          "nodeType": "MemberAccess",
                                          "referencedDeclaration": 22667,
                                          "src": "3984:13:15",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                                          }
                                        },
                                        "id": 4271,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3984:32:15",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                          {
                                            "argumentTypes": null,
                                            "id": 4263,
                                            "name": "scalingFactor",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3981,
                                            "src": "3965:13:15",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          }
                                        ],
                                        "expression": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          ],
                                          "expression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                              {
                                                "argumentTypes": null,
                                                "hexValue": "313030",
                                                "id": 4260,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3956:3:15",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_rational_100_by_1",
                                                  "typeString": "int_const 100"
                                                },
                                                "value": "100"
                                              }
                                            ],
                                            "expression": {
                                              "argumentTypes": [
                                                {
                                                  "typeIdentifier": "t_rational_100_by_1",
                                                  "typeString": "int_const 100"
                                                }
                                              ],
                                              "id": 4259,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "nodeType": "ElementaryTypeNameExpression",
                                              "src": "3951:4:15",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_uint256_$",
                                                "typeString": "type(uint256)"
                                              },
                                              "typeName": "uint"
                                            },
                                            "id": 4261,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3951:9:15",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "id": 4262,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberName": "mul",
                                          "nodeType": "MemberAccess",
                                          "referencedDeclaration": 22633,
                                          "src": "3951:13:15",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                                          }
                                        },
                                        "id": 4264,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3951:28:15",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "id": 4265,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "div",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 22647,
                                      "src": "3951:32:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                      }
                                    },
                                    "id": 4272,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "3951:66:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 4273,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "sub",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 22667,
                                  "src": "3951:70:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 4275,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3951:85:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 4257,
                                "name": "_amountToRaise",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4028,
                                "src": "3932:14:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 4258,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "mul",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 22633,
                              "src": "3932:18:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 4276,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3932:105:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 4277,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "div",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 22647,
                          "src": "3932:109:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 4279,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3932:124:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 4247,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3974,
                        "src": "3852:8:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DBInterface_$9332",
                          "typeString": "contract DBInterface"
                        }
                      },
                      "id": 4249,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9212,
                      "src": "3852:16:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_uint256_$returns$__$",
                        "typeString": "function (bytes32,uint256) external"
                      }
                    },
                    "id": 4280,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3852:205:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4281,
                  "nodeType": "ExpressionStatement",
                  "src": "3852:205:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "63726f776473616c652e676f616c",
                                "id": 4288,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "4107:16:15",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_045c9598f5cff548bbf5830749370eab2aded0c210192a78c3be7c20556f2247",
                                  "typeString": "literal_string \"crowdsale.goal\""
                                },
                                "value": "crowdsale.goal"
                              },
                              {
                                "argumentTypes": null,
                                "id": 4289,
                                "name": "assetAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4200,
                                "src": "4125:12:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_045c9598f5cff548bbf5830749370eab2aded0c210192a78c3be7c20556f2247",
                                  "typeString": "literal_string \"crowdsale.goal\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 4286,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 34910,
                                "src": "4090:3:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 4287,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "4090:16:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 4290,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4090:48:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 4285,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34917,
                          "src": "4080:9:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 4291,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4080:59:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 4292,
                        "name": "_amountToRaise",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4028,
                        "src": "4141:14:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 4282,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3974,
                        "src": "4063:8:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DBInterface_$9332",
                          "typeString": "contract DBInterface"
                        }
                      },
                      "id": 4284,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9212,
                      "src": "4063:16:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_uint256_$returns$__$",
                        "typeString": "function (bytes32,uint256) external"
                      }
                    },
                    "id": 4293,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4063:93:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4294,
                  "nodeType": "ExpressionStatement",
                  "src": "4063:93:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "61737365742e6d616e61676572",
                                "id": 4301,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "4209:15:15",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_c2b25eef4340162b026d227f7a9ebe7bae98953eff48283607445f4b250b0cbc",
                                  "typeString": "literal_string \"asset.manager\""
                                },
                                "value": "asset.manager"
                              },
                              {
                                "argumentTypes": null,
                                "id": 4302,
                                "name": "assetAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4200,
                                "src": "4226:12:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_c2b25eef4340162b026d227f7a9ebe7bae98953eff48283607445f4b250b0cbc",
                                  "typeString": "literal_string \"asset.manager\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 4299,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 34910,
                                "src": "4192:3:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 4300,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "4192:16:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 4303,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4192:47:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 4298,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34917,
                          "src": "4182:9:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 4304,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4182:58:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 4305,
                        "name": "_assetManager",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4020,
                        "src": "4242:13:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 4295,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3974,
                        "src": "4162:8:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DBInterface_$9332",
                          "typeString": "contract DBInterface"
                        }
                      },
                      "id": 4297,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9205,
                      "src": "4162:19:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address) external"
                      }
                    },
                    "id": 4306,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4162:94:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4307,
                  "nodeType": "ExpressionStatement",
                  "src": "4162:94:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "61737365742e6f70657261746f72",
                                "id": 4314,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "4309:16:15",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_4716d66186f568e75f8d8be5f2ef98464c9608a0255abf6763d5a8b4badea669",
                                  "typeString": "literal_string \"asset.operator\""
                                },
                                "value": "asset.operator"
                              },
                              {
                                "argumentTypes": null,
                                "id": 4315,
                                "name": "assetAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4200,
                                "src": "4327:12:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_4716d66186f568e75f8d8be5f2ef98464c9608a0255abf6763d5a8b4badea669",
                                  "typeString": "literal_string \"asset.operator\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 4312,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 34910,
                                "src": "4292:3:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 4313,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "4292:16:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 4316,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4292:48:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 4311,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34917,
                          "src": "4282:9:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 4317,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4282:59:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "6f70657261746f72",
                                    "id": 4323,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "4394:10:15",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_46a52cf33029de9f84853745a87af28464c80bf0346df1b32e205fc73319f622",
                                      "typeString": "literal_string \"operator\""
                                    },
                                    "value": "operator"
                                  },
                                  {
                                    "argumentTypes": null,
                                    "id": 4324,
                                    "name": "_operatorID",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 4022,
                                    "src": "4406:11:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_stringliteral_46a52cf33029de9f84853745a87af28464c80bf0346df1b32e205fc73319f622",
                                      "typeString": "literal_string \"operator\""
                                    },
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 4321,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 34910,
                                    "src": "4377:3:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 4322,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "4377:16:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 4325,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "4377:41:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "id": 4320,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34917,
                              "src": "4367:9:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                "typeString": "function () pure returns (bytes32)"
                              }
                            },
                            "id": 4326,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4367:52:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 4318,
                            "name": "database",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3974,
                            "src": "4343:8:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_DBInterface_$9332",
                              "typeString": "contract DBInterface"
                            }
                          },
                          "id": 4319,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "addressStorage",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 9303,
                          "src": "4343:23:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                            "typeString": "function (bytes32) view external returns (address)"
                          }
                        },
                        "id": 4327,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4343:77:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 4308,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3974,
                        "src": "4262:8:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DBInterface_$9332",
                          "typeString": "contract DBInterface"
                        }
                      },
                      "id": 4310,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9205,
                      "src": "4262:19:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address) external"
                      }
                    },
                    "id": 4328,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4262:159:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4329,
                  "nodeType": "ExpressionStatement",
                  "src": "4262:159:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "61737365742e757269",
                                "id": 4336,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "4471:11:15",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_56e2ecab6cd7c038037b89a88f2668ad26f2dd770e8327b6fa39bf1ad4212b79",
                                  "typeString": "literal_string \"asset.uri\""
                                },
                                "value": "asset.uri"
                              },
                              {
                                "argumentTypes": null,
                                "id": 4337,
                                "name": "_assetURI",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4018,
                                "src": "4484:9:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_calldata_ptr",
                                  "typeString": "string calldata"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_56e2ecab6cd7c038037b89a88f2668ad26f2dd770e8327b6fa39bf1ad4212b79",
                                  "typeString": "literal_string \"asset.uri\""
                                },
                                {
                                  "typeIdentifier": "t_string_calldata_ptr",
                                  "typeString": "string calldata"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 4334,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 34910,
                                "src": "4454:3:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 4335,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "4454:16:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 4338,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4454:40:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 4333,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34917,
                          "src": "4444:9:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 4339,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4444:51:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 4340,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4497:4:15",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 4330,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3974,
                        "src": "4427:8:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DBInterface_$9332",
                          "typeString": "contract DBInterface"
                        }
                      },
                      "id": 4332,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setBool",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9240,
                      "src": "4427:16:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_bool_$returns$__$",
                        "typeString": "function (bytes32,bool) external"
                      }
                    },
                    "id": 4341,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4427:75:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4342,
                  "nodeType": "ExpressionStatement",
                  "src": "4427:75:15"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 4345,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 4343,
                      "name": "_escrow",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4032,
                      "src": "4568:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 4344,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4578:1:15",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "4568:11:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 4355,
                  "nodeType": "IfStatement",
                  "src": "4565:84:15",
                  "trueBody": {
                    "id": 4354,
                    "nodeType": "Block",
                    "src": "4580:69:15",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 4348,
                                  "name": "_assetManager",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4020,
                                  "src": "4609:13:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "id": 4349,
                                  "name": "assetAddress",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4200,
                                  "src": "4624:12:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "id": 4350,
                                  "name": "_escrow",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4032,
                                  "src": "4638:7:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "id": 4347,
                                "name": "lockEscrowInternal",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4487,
                                "src": "4590:18:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                                  "typeString": "function (address,address,uint256) returns (bool)"
                                }
                              },
                              "id": 4351,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4590:56:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            ],
                            "id": 4346,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              34926,
                              34927
                            ],
                            "referencedDeclaration": 34926,
                            "src": "4582:7:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                              "typeString": "function (bool) pure"
                            }
                          },
                          "id": 4352,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4582:65:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 4353,
                        "nodeType": "ExpressionStatement",
                        "src": "4582:65:15"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "41737365742066756e64696e672073746172746564",
                        "id": 4359,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4667:23:15",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_57b1a4b7d867ec826f081313cf1c45f11226d48e75ea40846b6f828d7f92167b",
                          "typeString": "literal_string \"Asset funding started\""
                        },
                        "value": "Asset funding started"
                      },
                      {
                        "argumentTypes": null,
                        "id": 4360,
                        "name": "_assetURI",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4018,
                        "src": "4692:9:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_calldata_ptr",
                          "typeString": "string calldata"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 4361,
                        "name": "assetAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4200,
                        "src": "4703:12:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 4362,
                        "name": "_assetManager",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4020,
                        "src": "4717:13:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_57b1a4b7d867ec826f081313cf1c45f11226d48e75ea40846b6f828d7f92167b",
                          "typeString": "literal_string \"Asset funding started\""
                        },
                        {
                          "typeIdentifier": "t_string_calldata_ptr",
                          "typeString": "string calldata"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 4356,
                        "name": "events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3976,
                        "src": "4654:6:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Events_$7233",
                          "typeString": "contract Events"
                        }
                      },
                      "id": 4358,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "asset",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6922,
                      "src": "4654:12:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (string memory,string memory,address,address) external"
                      }
                    },
                    "id": 4363,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4654:77:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4364,
                  "nodeType": "ExpressionStatement",
                  "src": "4654:77:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 4365,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "4744:4:15",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 4038,
                  "id": 4366,
                  "nodeType": "Return",
                  "src": "4737:11:15"
                }
              ]
            },
            "documentation": null,
            "id": 4368,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "createAssetOrderETH",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4035,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4018,
                  "name": "_assetURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 4368,
                  "src": "1983:16:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 4017,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1983:6:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4020,
                  "name": "_assetManager",
                  "nodeType": "VariableDeclaration",
                  "scope": 4368,
                  "src": "2001:21:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4019,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2001:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4022,
                  "name": "_operatorID",
                  "nodeType": "VariableDeclaration",
                  "scope": 4368,
                  "src": "2024:19:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 4021,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2024:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4024,
                  "name": "_fundingLength",
                  "nodeType": "VariableDeclaration",
                  "scope": 4368,
                  "src": "2045:19:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4023,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2045:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4026,
                  "name": "_startTime",
                  "nodeType": "VariableDeclaration",
                  "scope": 4368,
                  "src": "2066:15:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4025,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2066:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4028,
                  "name": "_amountToRaise",
                  "nodeType": "VariableDeclaration",
                  "scope": 4368,
                  "src": "2083:19:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4027,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2083:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4030,
                  "name": "_assetManagerPerc",
                  "nodeType": "VariableDeclaration",
                  "scope": 4368,
                  "src": "2104:22:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4029,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2104:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4032,
                  "name": "_escrow",
                  "nodeType": "VariableDeclaration",
                  "scope": 4368,
                  "src": "2128:12:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4031,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2128:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4034,
                  "name": "_burnToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 4368,
                  "src": "2142:18:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4033,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2142:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1982:179:15"
            },
            "payable": true,
            "returnParameters": {
              "id": 4038,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4037,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 4368,
                  "src": "2212:4:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 4036,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2212:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2211:6:15"
            },
            "scope": 4507,
            "src": "1954:2799:15",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 4394,
              "nodeType": "Block",
              "src": "4854:148:15",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "43726f776473616c6547656e657261746f724554482064657374726f796564",
                        "id": 4376,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4879:33:15",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_1635ff344894629bb8ad9f72a2a40fd81f7dd35d4d5becf9e46d9ad054b7409f",
                          "typeString": "literal_string \"CrowdsaleGeneratorETH destroyed\""
                        },
                        "value": "CrowdsaleGeneratorETH destroyed"
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 4378,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 35020,
                            "src": "4922:4:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_CrowdsaleGeneratorETH_$4507",
                              "typeString": "contract CrowdsaleGeneratorETH"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_CrowdsaleGeneratorETH_$4507",
                              "typeString": "contract CrowdsaleGeneratorETH"
                            }
                          ],
                          "id": 4377,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4914:7:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 4379,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4914:13:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 4380,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34923,
                          "src": "4929:3:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 4381,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4929:10:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 4383,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 35020,
                              "src": "4949:4:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_CrowdsaleGeneratorETH_$4507",
                                "typeString": "contract CrowdsaleGeneratorETH"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_CrowdsaleGeneratorETH_$4507",
                                "typeString": "contract CrowdsaleGeneratorETH"
                              }
                            ],
                            "id": 4382,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "4941:7:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 4384,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4941:13:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 4385,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4941:21:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 4386,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4964:2:15",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_1635ff344894629bb8ad9f72a2a40fd81f7dd35d4d5becf9e46d9ad054b7409f",
                          "typeString": "literal_string \"CrowdsaleGeneratorETH destroyed\""
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 4373,
                        "name": "events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3976,
                        "src": "4860:6:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Events_$7233",
                          "typeString": "contract Events"
                        }
                      },
                      "id": 4375,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transaction",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6838,
                      "src": "4860:18:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$_t_address_$_t_uint256_$_t_bytes32_$returns$__$",
                        "typeString": "function (string memory,address,address,uint256,bytes32) external"
                      }
                    },
                    "id": 4387,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4860:107:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4388,
                  "nodeType": "ExpressionStatement",
                  "src": "4860:107:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 4390,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34923,
                          "src": "4986:3:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 4391,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4986:10:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 4389,
                      "name": "selfdestruct",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34931,
                      "src": "4973:12:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_selfdestruct_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 4392,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4973:24:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4393,
                  "nodeType": "ExpressionStatement",
                  "src": "4973:24:15"
                }
              ]
            },
            "documentation": null,
            "id": 4395,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 4371,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 4370,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 4506,
                  "src": "4833:9:15",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "4833:9:15"
              }
            ],
            "name": "destroy",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4369,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4828:2:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 4372,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4854:0:15"
            },
            "scope": 4507,
            "src": "4812:190:15",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 4486,
              "nodeType": "Block",
              "src": "5433:694:15",
              "statements": [
                {
                  "assignments": [
                    4407
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 4407,
                      "name": "assetManagerEscrowID",
                      "nodeType": "VariableDeclaration",
                      "scope": 4487,
                      "src": "5439:28:15",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 4406,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "5439:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 4415,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 4411,
                            "name": "_assetAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4399,
                            "src": "5497:13:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 4412,
                            "name": "_assetManager",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4397,
                            "src": "5512:13:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 4409,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34910,
                            "src": "5480:3:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 4410,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "5480:16:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 4413,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5480:46:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 4408,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34917,
                      "src": "5470:9:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 4414,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5470:57:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5439:88:15"
                },
                {
                  "assignments": [
                    4417
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 4417,
                      "name": "platformToken",
                      "nodeType": "VariableDeclaration",
                      "scope": 4487,
                      "src": "5533:21:15",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 4416,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "5533:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 4427,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "706c6174666f726d2e746f6b656e",
                                "id": 4423,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5608:16:15",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_ffe019b1cc482e4fc0ddd12b5de074680e254c0f3d00b72ab6797fa9398e7188",
                                  "typeString": "literal_string \"platform.token\""
                                },
                                "value": "platform.token"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_ffe019b1cc482e4fc0ddd12b5de074680e254c0f3d00b72ab6797fa9398e7188",
                                  "typeString": "literal_string \"platform.token\""
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 4421,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 34910,
                                "src": "5591:3:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 4422,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "5591:16:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 4424,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5591:34:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 4420,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34917,
                          "src": "5581:9:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 4425,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5581:45:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 4418,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3974,
                        "src": "5557:8:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DBInterface_$9332",
                          "typeString": "contract DBInterface"
                        }
                      },
                      "id": 4419,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "addressStorage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9303,
                      "src": "5557:23:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                        "typeString": "function (bytes32) view external returns (address)"
                      }
                    },
                    "id": 4426,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5557:70:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5533:94:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 4433,
                            "name": "_assetManager",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4397,
                            "src": "5697:13:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "hexValue": "636f6e7472616374",
                                        "id": 4439,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "string",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "5763:10:15",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_stringliteral_7f6dd79f0020bee2024a097aaa5d32ab7ca31126fa375538de047e7475fa8572",
                                          "typeString": "literal_string \"contract\""
                                        },
                                        "value": "contract"
                                      },
                                      {
                                        "argumentTypes": null,
                                        "hexValue": "41737365744d616e61676572457363726f77",
                                        "id": 4440,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "string",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "5775:20:15",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_stringliteral_d79462b3899741dffcd01137964294c129c75dad90e5c4a785330c12a214c6ae",
                                          "typeString": "literal_string \"AssetManagerEscrow\""
                                        },
                                        "value": "AssetManagerEscrow"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_stringliteral_7f6dd79f0020bee2024a097aaa5d32ab7ca31126fa375538de047e7475fa8572",
                                          "typeString": "literal_string \"contract\""
                                        },
                                        {
                                          "typeIdentifier": "t_stringliteral_d79462b3899741dffcd01137964294c129c75dad90e5c4a785330c12a214c6ae",
                                          "typeString": "literal_string \"AssetManagerEscrow\""
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 4437,
                                        "name": "abi",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 34910,
                                        "src": "5746:3:15",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_abi",
                                          "typeString": "abi"
                                        }
                                      },
                                      "id": 4438,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "memberName": "encodePacked",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "5746:16:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                        "typeString": "function () pure returns (bytes memory)"
                                      }
                                    },
                                    "id": 4441,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "5746:50:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  ],
                                  "id": 4436,
                                  "name": "keccak256",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 34917,
                                  "src": "5736:9:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                    "typeString": "function () pure returns (bytes32)"
                                  }
                                },
                                "id": 4442,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "5736:61:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 4434,
                                "name": "database",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 3974,
                                "src": "5712:8:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_DBInterface_$9332",
                                  "typeString": "contract DBInterface"
                                }
                              },
                              "id": 4435,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "addressStorage",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 9303,
                              "src": "5712:23:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                                "typeString": "function (bytes32) view external returns (address)"
                              }
                            },
                            "id": 4443,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5712:86:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 4444,
                            "name": "_amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4401,
                            "src": "5800:7:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 4430,
                                "name": "platformToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4417,
                                "src": "5669:13:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "id": 4429,
                              "name": "CrowdsaleGeneratorETH_ERC20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3957,
                              "src": "5641:27:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_CrowdsaleGeneratorETH_ERC20_$3957_$",
                                "typeString": "type(contract CrowdsaleGeneratorETH_ERC20)"
                              }
                            },
                            "id": 4431,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5641:42:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_CrowdsaleGeneratorETH_ERC20_$3957",
                              "typeString": "contract CrowdsaleGeneratorETH_ERC20"
                            }
                          },
                          "id": 4432,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transferFrom",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 3956,
                          "src": "5641:55:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,address,uint256) external returns (bool)"
                          }
                        },
                        "id": 4445,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5641:167:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 4428,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "5633:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 4446,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5633:176:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4447,
                  "nodeType": "ExpressionStatement",
                  "src": "5633:176:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "61737365742e657363726f77",
                                "id": 4454,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5859:14:15",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_2ef75a2a67cb730b701329cff2940771024fe969695e2e881685d079ce6a9e74",
                                  "typeString": "literal_string \"asset.escrow\""
                                },
                                "value": "asset.escrow"
                              },
                              {
                                "argumentTypes": null,
                                "id": 4455,
                                "name": "assetManagerEscrowID",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4407,
                                "src": "5875:20:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_2ef75a2a67cb730b701329cff2940771024fe969695e2e881685d079ce6a9e74",
                                  "typeString": "literal_string \"asset.escrow\""
                                },
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 4452,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 34910,
                                "src": "5842:3:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 4453,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "5842:16:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 4456,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5842:54:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 4451,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34917,
                          "src": "5832:9:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 4457,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5832:65:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 4458,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4401,
                        "src": "5899:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 4448,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3974,
                        "src": "5815:8:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DBInterface_$9332",
                          "typeString": "contract DBInterface"
                        }
                      },
                      "id": 4450,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9212,
                      "src": "5815:16:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_uint256_$returns$__$",
                        "typeString": "function (bytes32,uint256) external"
                      }
                    },
                    "id": 4459,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5815:92:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4460,
                  "nodeType": "ExpressionStatement",
                  "src": "5815:92:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "61737365742e6d616e61676572",
                                "id": 4467,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5960:15:15",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_c2b25eef4340162b026d227f7a9ebe7bae98953eff48283607445f4b250b0cbc",
                                  "typeString": "literal_string \"asset.manager\""
                                },
                                "value": "asset.manager"
                              },
                              {
                                "argumentTypes": null,
                                "id": 4468,
                                "name": "_assetAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4399,
                                "src": "5977:13:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_c2b25eef4340162b026d227f7a9ebe7bae98953eff48283607445f4b250b0cbc",
                                  "typeString": "literal_string \"asset.manager\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 4465,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 34910,
                                "src": "5943:3:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 4466,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "5943:16:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 4469,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5943:48:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 4464,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34917,
                          "src": "5933:9:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 4470,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5933:59:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 4471,
                        "name": "_assetManager",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4397,
                        "src": "5994:13:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 4461,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3974,
                        "src": "5913:8:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DBInterface_$9332",
                          "typeString": "contract DBInterface"
                        }
                      },
                      "id": 4463,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9205,
                      "src": "5913:19:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address) external"
                      }
                    },
                    "id": 4472,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5913:95:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4473,
                  "nodeType": "ExpressionStatement",
                  "src": "5913:95:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "457363726f77206c6f636b6564",
                        "id": 4477,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6028:15:15",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_6a03bd635fb67b531824e2fdd17959769718e91a1e0981f4c6314c74412d0284",
                          "typeString": "literal_string \"Escrow locked\""
                        },
                        "value": "Escrow locked"
                      },
                      {
                        "argumentTypes": null,
                        "id": 4478,
                        "name": "_assetAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4399,
                        "src": "6045:13:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 4479,
                        "name": "assetManagerEscrowID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4407,
                        "src": "6060:20:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 4480,
                        "name": "_assetManager",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4397,
                        "src": "6082:13:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 4481,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4401,
                        "src": "6097:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_6a03bd635fb67b531824e2fdd17959769718e91a1e0981f4c6314c74412d0284",
                          "typeString": "literal_string \"Escrow locked\""
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 4474,
                        "name": "events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3976,
                        "src": "6014:6:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Events_$7233",
                          "typeString": "contract Events"
                        }
                      },
                      "id": 4476,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "escrow",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6954,
                      "src": "6014:13:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$_t_bytes32_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (string memory,address,bytes32,address,uint256) external"
                      }
                    },
                    "id": 4482,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6014:91:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4483,
                  "nodeType": "ExpressionStatement",
                  "src": "6014:91:15"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 4484,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "6118:4:15",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 4405,
                  "id": 4485,
                  "nodeType": "Return",
                  "src": "6111:11:15"
                }
              ]
            },
            "documentation": "///////////////////////////////////////////////////////////////////////////////////////////////////////////////",
            "id": 4487,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "lockEscrowInternal",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4402,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4397,
                  "name": "_assetManager",
                  "nodeType": "VariableDeclaration",
                  "scope": 4487,
                  "src": "5346:21:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4396,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5346:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4399,
                  "name": "_assetAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 4487,
                  "src": "5369:21:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4398,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5369:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4401,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 4487,
                  "src": "5392:12:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4400,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "5392:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5345:60:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 4405,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4404,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 4487,
                  "src": "5427:4:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 4403,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "5427:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5426:6:15"
            },
            "scope": 4507,
            "src": "5318:809:15",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 4505,
              "nodeType": "Block",
              "src": "6747:110:15",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "6f776e6572",
                                    "id": 4495,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "6809:7:15",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c0",
                                      "typeString": "literal_string \"owner\""
                                    },
                                    "value": "owner"
                                  },
                                  {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 4496,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 34923,
                                      "src": "6818:3:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 4497,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "6818:10:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_stringliteral_02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c0",
                                      "typeString": "literal_string \"owner\""
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 4493,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 34910,
                                    "src": "6792:3:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 4494,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "6792:16:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 4498,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "6792:37:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "id": 4492,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34917,
                              "src": "6782:9:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                "typeString": "function () pure returns (bytes32)"
                              }
                            },
                            "id": 4499,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "6782:48:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 4490,
                            "name": "database",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3974,
                            "src": "6761:8:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_DBInterface_$9332",
                              "typeString": "contract DBInterface"
                            }
                          },
                          "id": 4491,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "boolStorage",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 9324,
                          "src": "6761:20:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 4500,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6761:70:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4e6f74206f776e6572",
                        "id": 4501,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6833:11:15",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c266efca4f4ed37612271196433531dcbb4fca89a694d568d1e290e32feb1682",
                          "typeString": "literal_string \"Not owner\""
                        },
                        "value": "Not owner"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c266efca4f4ed37612271196433531dcbb4fca89a694d568d1e290e32feb1682",
                          "typeString": "literal_string \"Not owner\""
                        }
                      ],
                      "id": 4489,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34927,
                      "src": "6753:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 4502,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6753:92:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4503,
                  "nodeType": "ExpressionStatement",
                  "src": "6753:92:15"
                },
                {
                  "id": 4504,
                  "nodeType": "PlaceholderStatement",
                  "src": "6851:1:15"
                }
              ]
            },
            "documentation": "///////////////////////////////////////////////////////////////////////////////////////////////////////////////",
            "id": 4506,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 4488,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6747:0:15"
            },
            "src": "6728:129:15",
            "visibility": "internal"
          }
        ],
        "scope": 4508,
        "src": "633:6689:15"
      }
    ],
    "src": "0:7323:15"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-03-14T21:46:28.533Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}