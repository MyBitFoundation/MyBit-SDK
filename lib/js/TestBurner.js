"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var TestBurner = exports.TestBurner = 
{
  "contractName": "TestBurner",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "burner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "database",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "amountBurnt",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_database",
          "type": "address"
        },
        {
          "name": "_burner",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "burnTokensManualFee",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "burnTokens",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getMethodID",
      "outputs": [
        {
          "name": "",
          "type": "bytes4"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5060405160408061063383398101604052805160209091015160008054600160a060020a03928316600160a060020a031991821617909155600180549290931691161790556105cf806100646000396000f3006080604052600436106100775763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166308003f78811461007c57806327810b6e146100935780635935914b146100d157806366369c40146100e9578063713b563f146101305780639b51d0a914610145575b600080fd5b34801561008857600080fd5b5061009161016c565b005b34801561009f57600080fd5b506100a861040d565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b3480156100dd57600080fd5b50610091600435610429565b3480156100f557600080fd5b506100fe6104de565b604080517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff199092168252519081900360200190f35b34801561013c57600080fd5b506100a8610581565b34801561015157600080fd5b5061015a61059d565b60408051918252519081900360200190f35b60008060405160200180807f6275726e546f6b656e7328290000000000000000000000000000000000000000815250600c0190506040516020818303038152906040526040518082805190602001908083835b602083106101de5780518252601f1990920191602091820191016101bf565b51815160209384036101000a6000190180199092169116179052604080519290940182900382206001547bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19821684840152306c0100000000000000000000000002602485015285518085036018018152603890940195869052835191995073ffffffffffffffffffffffffffffffffffffffff16965063a855d4ce9550919392508291908401908083835b602083106102a55780518252601f199092019160209182019101610286565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff88167c01000000000000000000000000000000000000000000000000000000000283526004830152925160248083019650939450929083900301905081600087803b15801561031f57600080fd5b505af1158015610333573d6000803e3d6000fd5b505050506040513d602081101561034957600080fd5b505160008054604080517f9dc29fac00000000000000000000000000000000000000000000000000000000815233600482015260248101859052905193945073ffffffffffffffffffffffffffffffffffffffff90911692639dc29fac92604480840193602093929083900390910190829087803b1580156103ca57600080fd5b505af11580156103de573d6000803e3d6000fd5b505050506040513d60208110156103f457600080fd5b5051151561040157600080fd5b60028054909101905550565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60008054604080517f9dc29fac00000000000000000000000000000000000000000000000000000000815233600482015260248101859052905173ffffffffffffffffffffffffffffffffffffffff90921692639dc29fac926044808401936020939083900390910190829087803b1580156104a457600080fd5b505af11580156104b8573d6000803e3d6000fd5b505050506040513d60208110156104ce57600080fd5b505115156104db57600080fd5b50565b600060405160200180807f6275726e546f6b656e7328290000000000000000000000000000000000000000815250600c0190506040516020818303038152906040526040518082805190602001908083835b6020831061054f5780518252601f199092019160209182019101610530565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020905090565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b600254815600a165627a7a72305820e956d40011924f9534a614df99ec05506218600baa7c2a4792f3d5125de0f31a0029",
  "deployedBytecode": "0x6080604052600436106100775763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166308003f78811461007c57806327810b6e146100935780635935914b146100d157806366369c40146100e9578063713b563f146101305780639b51d0a914610145575b600080fd5b34801561008857600080fd5b5061009161016c565b005b34801561009f57600080fd5b506100a861040d565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b3480156100dd57600080fd5b50610091600435610429565b3480156100f557600080fd5b506100fe6104de565b604080517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff199092168252519081900360200190f35b34801561013c57600080fd5b506100a8610581565b34801561015157600080fd5b5061015a61059d565b60408051918252519081900360200190f35b60008060405160200180807f6275726e546f6b656e7328290000000000000000000000000000000000000000815250600c0190506040516020818303038152906040526040518082805190602001908083835b602083106101de5780518252601f1990920191602091820191016101bf565b51815160209384036101000a6000190180199092169116179052604080519290940182900382206001547bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19821684840152306c0100000000000000000000000002602485015285518085036018018152603890940195869052835191995073ffffffffffffffffffffffffffffffffffffffff16965063a855d4ce9550919392508291908401908083835b602083106102a55780518252601f199092019160209182019101610286565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff88167c01000000000000000000000000000000000000000000000000000000000283526004830152925160248083019650939450929083900301905081600087803b15801561031f57600080fd5b505af1158015610333573d6000803e3d6000fd5b505050506040513d602081101561034957600080fd5b505160008054604080517f9dc29fac00000000000000000000000000000000000000000000000000000000815233600482015260248101859052905193945073ffffffffffffffffffffffffffffffffffffffff90911692639dc29fac92604480840193602093929083900390910190829087803b1580156103ca57600080fd5b505af11580156103de573d6000803e3d6000fd5b505050506040513d60208110156103f457600080fd5b5051151561040157600080fd5b60028054909101905550565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60008054604080517f9dc29fac00000000000000000000000000000000000000000000000000000000815233600482015260248101859052905173ffffffffffffffffffffffffffffffffffffffff90921692639dc29fac926044808401936020939083900390910190829087803b1580156104a457600080fd5b505af11580156104b8573d6000803e3d6000fd5b505050506040513d60208110156104ce57600080fd5b505115156104db57600080fd5b50565b600060405160200180807f6275726e546f6b656e7328290000000000000000000000000000000000000000815250600c0190506040516020818303038152906040526040518082805190602001908083835b6020831061054f5780518252601f199092019160209182019101610530565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020905090565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b600254815600a165627a7a72305820e956d40011924f9534a614df99ec05506218600baa7c2a4792f3d5125de0f31a0029",
  "sourceMap": "98:831:87:-;;;209:133;8:9:-1;5:2;;;30:1;27;20:12;5:2;209:133:87;;;;;;;;;;;;;;;;;;;272:6;:29;;-1:-1:-1;;;;;272:29:87;;;-1:-1:-1;;;;;;272:29:87;;;;;;;;307:30;;;;;;;;;;;98:831;;;;;;",
  "deployedSourceMap": "98:831:87:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;495:298;;8:9:-1;5:2;;;30:1;27;20:12;5:2;495:298:87;;;;;;123:25;;8:9:-1;5:2;;;30:1;27;20:12;5:2;123:25:87;;;;;;;;;;;;;;;;;;;;;;;346:106;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;346:106:87;;;;;797:129;;8:9:-1;5:2;;;30:1;27;20:12;5:2;797:129:87;;;;;;;;-1:-1:-1;;797:129:87;;;;;;;;;;;;;;152:24;;8:9:-1;5:2;;;30:1;27;20:12;5:2;152:24:87;;;;181:23;;8:9:-1;5:2;;;30:1;27;20:12;5:2;181:23:87;;;;;;;;;;;;;;;;;;;;495:298;534:15;609:17;569:32;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;569:32:87;;;559:43;;;;;;;;;;;;;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;365:33;;559:43:87;;;;;;;;;;;;274:1:-1;629:8:87;-1:-1:-1;;660:41:87;;;;;;695:4;660:41;;;;;;;;26:21:-1;;;22:32;;6:49;;660:41:87;;;;;;;;650:52;;559:43;;-1:-1:-1;629:8:87;;;-1:-1:-1;629:20:87;;-1:-1:-1;660:41:87;;;-1:-1:-1;660:41:87;;650:52;;;;;660:41;650:52;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;365:33;;650:52:87;;;;;;;;;;;;629:74;;;;;;;;;;;;;;;;;;-1:-1:-1;263:2;;-1:-1;629:74:87;;;;;;;-1:-1:-1;629:74:87;-1:-1:-1;629:74:87;;;;5:2:-1;;;;30:1;27;20:12;5:2;629:74:87;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;629:74:87;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;629:74:87;717:6;;;:37;;;;;;729:10;717:37;;;;;;;;;;;;629:74;;-1:-1:-1;717:6:87;;;;;:11;;:37;;;;;629:74;;717:37;;;;;;;;;;;:6;:37;;;5:2:-1;;;;30:1;27;20:12;5:2;717:37:87;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;717:37:87;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;717:37:87;709:46;;;;;;;;761:11;:27;;;;;;;-1:-1:-1;495:298:87:o;123:25::-;;;;;;:::o;346:106::-;414:6;;;:32;;;;;;426:10;414:32;;;;;;;;;;;;:6;;;;;:11;;:32;;;;;;;;;;;;;;;;;:6;:32;;;5:2:-1;;;;30:1;27;20:12;5:2;414:32:87;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;414:32:87;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;414:32:87;406:41;;;;;;;;346:106;:::o;797:129::-;849:6;887:32;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;887:32:87;;;877:43;;;;;;;;;;;;;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;877:43:87;;;;;;;;;;;;;;;;863:58;;797:129;:::o;152:24::-;;;;;;:::o;181:23::-;;;;:::o",
  "source": "pragma solidity ^0.4.24;\n\nimport '../access/ERC20Burner.sol';\nimport '../database/Database.sol';\n\ncontract TestBurner {\n\n  ERC20Burner public burner;\n  Database public database;\n\n  uint public amountBurnt;\n\n  constructor(address _database, address _burner)\n  public {\n    burner = ERC20Burner(_burner);\n    database = Database(_database);\n  }\n\n  function burnTokensManualFee(uint _amount)\n  external {\n    require(burner.burn(msg.sender, _amount));\n  }\n\n  // Must set fee in ERC20Burner first\n  function burnTokens()\n  external {\n    bytes4 methodID = bytes4(keccak256(abi.encodePacked(\"burnTokens()\")));\n    uint amountToBurn = database.uintStorage(keccak256(abi.encodePacked(methodID, address(this))));\n    require(burner.burn(msg.sender, amountToBurn));\n    amountBurnt += amountToBurn;\n  }\n\n  function getMethodID()\n  external\n  pure\n  returns (bytes4) {\n    return bytes4(keccak256(abi.encodePacked(\"burnTokens()\")));\n  }\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/TestBurner.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/TestBurner.sol",
    "exportedSymbols": {
      "TestBurner": [
        25624
      ]
    },
    "id": 25625,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 25522,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:87"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/access/ERC20Burner.sol",
        "file": "../access/ERC20Burner.sol",
        "id": 25523,
        "nodeType": "ImportDirective",
        "scope": 25625,
        "sourceUnit": 739,
        "src": "26:35:87",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/Database.sol",
        "file": "../database/Database.sol",
        "id": 25524,
        "nodeType": "ImportDirective",
        "scope": 25625,
        "sourceUnit": 14441,
        "src": "62:34:87",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 25624,
        "linearizedBaseContracts": [
          25624
        ],
        "name": "TestBurner",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 25526,
            "name": "burner",
            "nodeType": "VariableDeclaration",
            "scope": 25624,
            "src": "123:25:87",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_ERC20Burner_$738",
              "typeString": "contract ERC20Burner"
            },
            "typeName": {
              "contractScope": null,
              "id": 25525,
              "name": "ERC20Burner",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 738,
              "src": "123:11:87",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Burner_$738",
                "typeString": "contract ERC20Burner"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 25528,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 25624,
            "src": "152:24:87",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Database_$14440",
              "typeString": "contract Database"
            },
            "typeName": {
              "contractScope": null,
              "id": 25527,
              "name": "Database",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 14440,
              "src": "152:8:87",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Database_$14440",
                "typeString": "contract Database"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 25530,
            "name": "amountBurnt",
            "nodeType": "VariableDeclaration",
            "scope": 25624,
            "src": "181:23:87",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 25529,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "181:4:87",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 25549,
              "nodeType": "Block",
              "src": "266:76:87",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 25541,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 25537,
                      "name": "burner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25526,
                      "src": "272:6:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ERC20Burner_$738",
                        "typeString": "contract ERC20Burner"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 25539,
                          "name": "_burner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25534,
                          "src": "293:7:87",
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
                        "id": 25538,
                        "name": "ERC20Burner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 738,
                        "src": "281:11:87",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC20Burner_$738_$",
                          "typeString": "type(contract ERC20Burner)"
                        }
                      },
                      "id": 25540,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "281:20:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ERC20Burner_$738",
                        "typeString": "contract ERC20Burner"
                      }
                    },
                    "src": "272:29:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20Burner_$738",
                      "typeString": "contract ERC20Burner"
                    }
                  },
                  "id": 25542,
                  "nodeType": "ExpressionStatement",
                  "src": "272:29:87"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 25547,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 25543,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25528,
                      "src": "307:8:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$14440",
                        "typeString": "contract Database"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 25545,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25532,
                          "src": "327:9:87",
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
                        "id": 25544,
                        "name": "Database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14440,
                        "src": "318:8:87",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Database_$14440_$",
                          "typeString": "type(contract Database)"
                        }
                      },
                      "id": 25546,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "318:19:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$14440",
                        "typeString": "contract Database"
                      }
                    },
                    "src": "307:30:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Database_$14440",
                      "typeString": "contract Database"
                    }
                  },
                  "id": 25548,
                  "nodeType": "ExpressionStatement",
                  "src": "307:30:87"
                }
              ]
            },
            "documentation": null,
            "id": 25550,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25535,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25532,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 25550,
                  "src": "221:17:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 25531,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "221:7:87",
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
                  "id": 25534,
                  "name": "_burner",
                  "nodeType": "VariableDeclaration",
                  "scope": 25550,
                  "src": "240:15:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 25533,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "240:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "220:36:87"
            },
            "payable": false,
            "returnParameters": {
              "id": 25536,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "266:0:87"
            },
            "scope": 25624,
            "src": "209:133:87",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 25564,
              "nodeType": "Block",
              "src": "400:52:87",
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
                              "id": 25558,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28038,
                              "src": "426:3:87",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 25559,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "426:10:87",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 25560,
                            "name": "_amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25552,
                            "src": "438:7:87",
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
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 25556,
                            "name": "burner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25526,
                            "src": "414:6:87",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20Burner_$738",
                              "typeString": "contract ERC20Burner"
                            }
                          },
                          "id": 25557,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "burn",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 569,
                          "src": "414:11:87",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) external returns (bool)"
                          }
                        },
                        "id": 25561,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "414:32:87",
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
                      "id": 25555,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "406:7:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 25562,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "406:41:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 25563,
                  "nodeType": "ExpressionStatement",
                  "src": "406:41:87"
                }
              ]
            },
            "documentation": null,
            "id": 25565,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burnTokensManualFee",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25553,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25552,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 25565,
                  "src": "375:12:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25551,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "375:4:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "374:14:87"
            },
            "payable": false,
            "returnParameters": {
              "id": 25554,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "400:0:87"
            },
            "scope": 25624,
            "src": "346:106:87",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 25607,
              "nodeType": "Block",
              "src": "528:265:87",
              "statements": [
                {
                  "assignments": [
                    25569
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 25569,
                      "name": "methodID",
                      "nodeType": "VariableDeclaration",
                      "scope": 25608,
                      "src": "534:15:87",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      },
                      "typeName": {
                        "id": 25568,
                        "name": "bytes4",
                        "nodeType": "ElementaryTypeName",
                        "src": "534:6:87",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 25578,
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
                                "hexValue": "6275726e546f6b656e732829",
                                "id": 25574,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "586:14:87",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_08003f7861c5d20078fcb3ff1f93e6a12e488ade80ad671025265fc141ca4542",
                                  "typeString": "literal_string \"burnTokens()\""
                                },
                                "value": "burnTokens()"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_08003f7861c5d20078fcb3ff1f93e6a12e488ade80ad671025265fc141ca4542",
                                  "typeString": "literal_string \"burnTokens()\""
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 25572,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28025,
                                "src": "569:3:87",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 25573,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "569:16:87",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 25575,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "569:32:87",
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
                          "id": 25571,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28032,
                          "src": "559:9:87",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 25576,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "559:43:87",
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
                      "id": 25570,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "552:6:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes4_$",
                        "typeString": "type(bytes4)"
                      },
                      "typeName": "bytes4"
                    },
                    "id": 25577,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "552:51:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "534:69:87"
                },
                {
                  "assignments": [
                    25580
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 25580,
                      "name": "amountToBurn",
                      "nodeType": "VariableDeclaration",
                      "scope": 25608,
                      "src": "609:17:87",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 25579,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "609:4:87",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 25593,
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
                                "id": 25586,
                                "name": "methodID",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 25569,
                                "src": "677:8:87",
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
                                    "id": 25588,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 28291,
                                    "src": "695:4:87",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_TestBurner_$25624",
                                      "typeString": "contract TestBurner"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_TestBurner_$25624",
                                      "typeString": "contract TestBurner"
                                    }
                                  ],
                                  "id": 25587,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "687:7:87",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": "address"
                                },
                                "id": 25589,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "687:13:87",
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
                                "id": 25584,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28025,
                                "src": "660:3:87",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 25585,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "660:16:87",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 25590,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "660:41:87",
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
                          "id": 25583,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28032,
                          "src": "650:9:87",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 25591,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "650:52:87",
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
                        "id": 25581,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25528,
                        "src": "629:8:87",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$14440",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 25582,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "uintStorage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 14061,
                      "src": "629:20:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_uint256_$",
                        "typeString": "function (bytes32) view external returns (uint256)"
                      }
                    },
                    "id": 25592,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "629:74:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "609:94:87"
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
                            "expression": {
                              "argumentTypes": null,
                              "id": 25597,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28038,
                              "src": "729:3:87",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 25598,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "729:10:87",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 25599,
                            "name": "amountToBurn",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25580,
                            "src": "741:12:87",
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
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 25595,
                            "name": "burner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25526,
                            "src": "717:6:87",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20Burner_$738",
                              "typeString": "contract ERC20Burner"
                            }
                          },
                          "id": 25596,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "burn",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 569,
                          "src": "717:11:87",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) external returns (bool)"
                          }
                        },
                        "id": 25600,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "717:37:87",
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
                      "id": 25594,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "709:7:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 25601,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "709:46:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 25602,
                  "nodeType": "ExpressionStatement",
                  "src": "709:46:87"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 25605,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 25603,
                      "name": "amountBurnt",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25530,
                      "src": "761:11:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 25604,
                      "name": "amountToBurn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25580,
                      "src": "776:12:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "761:27:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 25606,
                  "nodeType": "ExpressionStatement",
                  "src": "761:27:87"
                }
              ]
            },
            "documentation": null,
            "id": 25608,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burnTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25566,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "514:2:87"
            },
            "payable": false,
            "returnParameters": {
              "id": 25567,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "528:0:87"
            },
            "scope": 25624,
            "src": "495:298:87",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 25622,
              "nodeType": "Block",
              "src": "857:69:87",
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
                                "hexValue": "6275726e546f6b656e732829",
                                "id": 25617,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "904:14:87",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_08003f7861c5d20078fcb3ff1f93e6a12e488ade80ad671025265fc141ca4542",
                                  "typeString": "literal_string \"burnTokens()\""
                                },
                                "value": "burnTokens()"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_08003f7861c5d20078fcb3ff1f93e6a12e488ade80ad671025265fc141ca4542",
                                  "typeString": "literal_string \"burnTokens()\""
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 25615,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28025,
                                "src": "887:3:87",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 25616,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "887:16:87",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 25618,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "887:32:87",
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
                          "id": 25614,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28032,
                          "src": "877:9:87",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 25619,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "877:43:87",
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
                      "id": 25613,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "870:6:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes4_$",
                        "typeString": "type(bytes4)"
                      },
                      "typeName": "bytes4"
                    },
                    "id": 25620,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "870:51:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "functionReturnParameters": 25612,
                  "id": 25621,
                  "nodeType": "Return",
                  "src": "863:58:87"
                }
              ]
            },
            "documentation": null,
            "id": 25623,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getMethodID",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25609,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "817:2:87"
            },
            "payable": false,
            "returnParameters": {
              "id": 25612,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25611,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 25623,
                  "src": "849:6:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 25610,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "849:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "848:8:87"
            },
            "scope": 25624,
            "src": "797:129:87",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 25625,
        "src": "98:831:87"
      }
    ],
    "src": "0:930:87"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/TestBurner.sol",
    "exportedSymbols": {
      "TestBurner": [
        25624
      ]
    },
    "id": 25625,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 25522,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:87"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/access/ERC20Burner.sol",
        "file": "../access/ERC20Burner.sol",
        "id": 25523,
        "nodeType": "ImportDirective",
        "scope": 25625,
        "sourceUnit": 739,
        "src": "26:35:87",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/Database.sol",
        "file": "../database/Database.sol",
        "id": 25524,
        "nodeType": "ImportDirective",
        "scope": 25625,
        "sourceUnit": 14441,
        "src": "62:34:87",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 25624,
        "linearizedBaseContracts": [
          25624
        ],
        "name": "TestBurner",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 25526,
            "name": "burner",
            "nodeType": "VariableDeclaration",
            "scope": 25624,
            "src": "123:25:87",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_ERC20Burner_$738",
              "typeString": "contract ERC20Burner"
            },
            "typeName": {
              "contractScope": null,
              "id": 25525,
              "name": "ERC20Burner",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 738,
              "src": "123:11:87",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Burner_$738",
                "typeString": "contract ERC20Burner"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 25528,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 25624,
            "src": "152:24:87",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Database_$14440",
              "typeString": "contract Database"
            },
            "typeName": {
              "contractScope": null,
              "id": 25527,
              "name": "Database",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 14440,
              "src": "152:8:87",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Database_$14440",
                "typeString": "contract Database"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 25530,
            "name": "amountBurnt",
            "nodeType": "VariableDeclaration",
            "scope": 25624,
            "src": "181:23:87",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 25529,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "181:4:87",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 25549,
              "nodeType": "Block",
              "src": "266:76:87",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 25541,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 25537,
                      "name": "burner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25526,
                      "src": "272:6:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ERC20Burner_$738",
                        "typeString": "contract ERC20Burner"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 25539,
                          "name": "_burner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25534,
                          "src": "293:7:87",
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
                        "id": 25538,
                        "name": "ERC20Burner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 738,
                        "src": "281:11:87",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC20Burner_$738_$",
                          "typeString": "type(contract ERC20Burner)"
                        }
                      },
                      "id": 25540,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "281:20:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ERC20Burner_$738",
                        "typeString": "contract ERC20Burner"
                      }
                    },
                    "src": "272:29:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20Burner_$738",
                      "typeString": "contract ERC20Burner"
                    }
                  },
                  "id": 25542,
                  "nodeType": "ExpressionStatement",
                  "src": "272:29:87"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 25547,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 25543,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25528,
                      "src": "307:8:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$14440",
                        "typeString": "contract Database"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 25545,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25532,
                          "src": "327:9:87",
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
                        "id": 25544,
                        "name": "Database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14440,
                        "src": "318:8:87",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Database_$14440_$",
                          "typeString": "type(contract Database)"
                        }
                      },
                      "id": 25546,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "318:19:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$14440",
                        "typeString": "contract Database"
                      }
                    },
                    "src": "307:30:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Database_$14440",
                      "typeString": "contract Database"
                    }
                  },
                  "id": 25548,
                  "nodeType": "ExpressionStatement",
                  "src": "307:30:87"
                }
              ]
            },
            "documentation": null,
            "id": 25550,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25535,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25532,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 25550,
                  "src": "221:17:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 25531,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "221:7:87",
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
                  "id": 25534,
                  "name": "_burner",
                  "nodeType": "VariableDeclaration",
                  "scope": 25550,
                  "src": "240:15:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 25533,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "240:7:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "220:36:87"
            },
            "payable": false,
            "returnParameters": {
              "id": 25536,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "266:0:87"
            },
            "scope": 25624,
            "src": "209:133:87",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 25564,
              "nodeType": "Block",
              "src": "400:52:87",
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
                              "id": 25558,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28038,
                              "src": "426:3:87",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 25559,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "426:10:87",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 25560,
                            "name": "_amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25552,
                            "src": "438:7:87",
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
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 25556,
                            "name": "burner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25526,
                            "src": "414:6:87",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20Burner_$738",
                              "typeString": "contract ERC20Burner"
                            }
                          },
                          "id": 25557,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "burn",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 569,
                          "src": "414:11:87",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) external returns (bool)"
                          }
                        },
                        "id": 25561,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "414:32:87",
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
                      "id": 25555,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "406:7:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 25562,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "406:41:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 25563,
                  "nodeType": "ExpressionStatement",
                  "src": "406:41:87"
                }
              ]
            },
            "documentation": null,
            "id": 25565,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burnTokensManualFee",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25553,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25552,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 25565,
                  "src": "375:12:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25551,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "375:4:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "374:14:87"
            },
            "payable": false,
            "returnParameters": {
              "id": 25554,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "400:0:87"
            },
            "scope": 25624,
            "src": "346:106:87",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 25607,
              "nodeType": "Block",
              "src": "528:265:87",
              "statements": [
                {
                  "assignments": [
                    25569
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 25569,
                      "name": "methodID",
                      "nodeType": "VariableDeclaration",
                      "scope": 25608,
                      "src": "534:15:87",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      },
                      "typeName": {
                        "id": 25568,
                        "name": "bytes4",
                        "nodeType": "ElementaryTypeName",
                        "src": "534:6:87",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 25578,
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
                                "hexValue": "6275726e546f6b656e732829",
                                "id": 25574,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "586:14:87",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_08003f7861c5d20078fcb3ff1f93e6a12e488ade80ad671025265fc141ca4542",
                                  "typeString": "literal_string \"burnTokens()\""
                                },
                                "value": "burnTokens()"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_08003f7861c5d20078fcb3ff1f93e6a12e488ade80ad671025265fc141ca4542",
                                  "typeString": "literal_string \"burnTokens()\""
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 25572,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28025,
                                "src": "569:3:87",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 25573,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "569:16:87",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 25575,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "569:32:87",
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
                          "id": 25571,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28032,
                          "src": "559:9:87",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 25576,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "559:43:87",
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
                      "id": 25570,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "552:6:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes4_$",
                        "typeString": "type(bytes4)"
                      },
                      "typeName": "bytes4"
                    },
                    "id": 25577,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "552:51:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "534:69:87"
                },
                {
                  "assignments": [
                    25580
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 25580,
                      "name": "amountToBurn",
                      "nodeType": "VariableDeclaration",
                      "scope": 25608,
                      "src": "609:17:87",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 25579,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "609:4:87",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 25593,
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
                                "id": 25586,
                                "name": "methodID",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 25569,
                                "src": "677:8:87",
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
                                    "id": 25588,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 28291,
                                    "src": "695:4:87",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_TestBurner_$25624",
                                      "typeString": "contract TestBurner"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_TestBurner_$25624",
                                      "typeString": "contract TestBurner"
                                    }
                                  ],
                                  "id": 25587,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "687:7:87",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": "address"
                                },
                                "id": 25589,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "687:13:87",
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
                                "id": 25584,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28025,
                                "src": "660:3:87",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 25585,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "660:16:87",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 25590,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "660:41:87",
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
                          "id": 25583,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28032,
                          "src": "650:9:87",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 25591,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "650:52:87",
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
                        "id": 25581,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25528,
                        "src": "629:8:87",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$14440",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 25582,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "uintStorage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 14061,
                      "src": "629:20:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_uint256_$",
                        "typeString": "function (bytes32) view external returns (uint256)"
                      }
                    },
                    "id": 25592,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "629:74:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "609:94:87"
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
                            "expression": {
                              "argumentTypes": null,
                              "id": 25597,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28038,
                              "src": "729:3:87",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 25598,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "729:10:87",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 25599,
                            "name": "amountToBurn",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25580,
                            "src": "741:12:87",
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
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 25595,
                            "name": "burner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25526,
                            "src": "717:6:87",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20Burner_$738",
                              "typeString": "contract ERC20Burner"
                            }
                          },
                          "id": 25596,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "burn",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 569,
                          "src": "717:11:87",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) external returns (bool)"
                          }
                        },
                        "id": 25600,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "717:37:87",
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
                      "id": 25594,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "709:7:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 25601,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "709:46:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 25602,
                  "nodeType": "ExpressionStatement",
                  "src": "709:46:87"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 25605,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 25603,
                      "name": "amountBurnt",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25530,
                      "src": "761:11:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 25604,
                      "name": "amountToBurn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25580,
                      "src": "776:12:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "761:27:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 25606,
                  "nodeType": "ExpressionStatement",
                  "src": "761:27:87"
                }
              ]
            },
            "documentation": null,
            "id": 25608,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burnTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25566,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "514:2:87"
            },
            "payable": false,
            "returnParameters": {
              "id": 25567,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "528:0:87"
            },
            "scope": 25624,
            "src": "495:298:87",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 25622,
              "nodeType": "Block",
              "src": "857:69:87",
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
                                "hexValue": "6275726e546f6b656e732829",
                                "id": 25617,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "904:14:87",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_08003f7861c5d20078fcb3ff1f93e6a12e488ade80ad671025265fc141ca4542",
                                  "typeString": "literal_string \"burnTokens()\""
                                },
                                "value": "burnTokens()"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_08003f7861c5d20078fcb3ff1f93e6a12e488ade80ad671025265fc141ca4542",
                                  "typeString": "literal_string \"burnTokens()\""
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 25615,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28025,
                                "src": "887:3:87",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 25616,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "887:16:87",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 25618,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "887:32:87",
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
                          "id": 25614,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28032,
                          "src": "877:9:87",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 25619,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "877:43:87",
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
                      "id": 25613,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "870:6:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes4_$",
                        "typeString": "type(bytes4)"
                      },
                      "typeName": "bytes4"
                    },
                    "id": 25620,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "870:51:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "functionReturnParameters": 25612,
                  "id": 25621,
                  "nodeType": "Return",
                  "src": "863:58:87"
                }
              ]
            },
            "documentation": null,
            "id": 25623,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getMethodID",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25609,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "817:2:87"
            },
            "payable": false,
            "returnParameters": {
              "id": 25612,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25611,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 25623,
                  "src": "849:6:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 25610,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "849:6:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "848:8:87"
            },
            "scope": 25624,
            "src": "797:129:87",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 25625,
        "src": "98:831:87"
      }
    ],
    "src": "0:930:87"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-12-06T01:19:16.916Z"
}