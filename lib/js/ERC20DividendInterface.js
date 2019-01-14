"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var ERC20DividendInterface = exports.ERC20DividendInterface = 
{
  "contractName": "ERC20DividendInterface",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "finishMinting",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "issueDividends",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\n\ninterface ERC20DividendInterface{\n  // @dev Function to mint tokens\n  // @param _to The address that will receive the minted tokens.\n  // @param _amount The amount of tokens to mint.\n  function mint(address _to, uint256 _amount) external returns (bool);\n\n  // @dev Function to stop minting new tokens.\n  function finishMinting() external returns (bool);\n\n  function issueDividends(uint _amount) external;\n\n  // @dev Total number of tokens in existence\n  function totalSupply() external view returns (uint256);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20DividendInterface.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20DividendInterface.sol",
    "exportedSymbols": {
      "ERC20DividendInterface": [
        17099
      ]
    },
    "id": 17100,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 17074,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:63"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 17099,
        "linearizedBaseContracts": [
          17099
        ],
        "name": "ERC20DividendInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 17083,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17079,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17076,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 17083,
                  "src": "225:11:63",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17075,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "225:7:63",
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
                  "id": 17078,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 17083,
                  "src": "238:15:63",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17077,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "238:7:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "224:30:63"
            },
            "payable": false,
            "returnParameters": {
              "id": 17082,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17081,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17083,
                  "src": "273:4:63",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17080,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "273:4:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "272:6:63"
            },
            "scope": 17099,
            "src": "211:68:63",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 17088,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "finishMinting",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17084,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "352:2:63"
            },
            "payable": false,
            "returnParameters": {
              "id": 17087,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17086,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17088,
                  "src": "373:4:63",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17085,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "373:4:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "372:6:63"
            },
            "scope": 17099,
            "src": "330:49:63",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 17093,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "issueDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17091,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17090,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 17093,
                  "src": "407:12:63",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17089,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "407:4:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "406:14:63"
            },
            "payable": false,
            "returnParameters": {
              "id": 17092,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "429:0:63"
            },
            "scope": 17099,
            "src": "383:47:63",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 17098,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17094,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "500:2:63"
            },
            "payable": false,
            "returnParameters": {
              "id": 17097,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17096,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17098,
                  "src": "526:7:63",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17095,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "526:7:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "525:9:63"
            },
            "scope": 17099,
            "src": "480:55:63",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 17100,
        "src": "26:511:63"
      }
    ],
    "src": "0:538:63"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20DividendInterface.sol",
    "exportedSymbols": {
      "ERC20DividendInterface": [
        17099
      ]
    },
    "id": 17100,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 17074,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:63"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 17099,
        "linearizedBaseContracts": [
          17099
        ],
        "name": "ERC20DividendInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 17083,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17079,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17076,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 17083,
                  "src": "225:11:63",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17075,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "225:7:63",
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
                  "id": 17078,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 17083,
                  "src": "238:15:63",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17077,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "238:7:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "224:30:63"
            },
            "payable": false,
            "returnParameters": {
              "id": 17082,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17081,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17083,
                  "src": "273:4:63",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17080,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "273:4:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "272:6:63"
            },
            "scope": 17099,
            "src": "211:68:63",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 17088,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "finishMinting",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17084,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "352:2:63"
            },
            "payable": false,
            "returnParameters": {
              "id": 17087,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17086,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17088,
                  "src": "373:4:63",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17085,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "373:4:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "372:6:63"
            },
            "scope": 17099,
            "src": "330:49:63",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 17093,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "issueDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17091,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17090,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 17093,
                  "src": "407:12:63",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17089,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "407:4:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "406:14:63"
            },
            "payable": false,
            "returnParameters": {
              "id": 17092,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "429:0:63"
            },
            "scope": 17099,
            "src": "383:47:63",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 17098,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17094,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "500:2:63"
            },
            "payable": false,
            "returnParameters": {
              "id": 17097,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17096,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17098,
                  "src": "526:7:63",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17095,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "526:7:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "525:9:63"
            },
            "scope": 17099,
            "src": "480:55:63",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 17100,
        "src": "26:511:63"
      }
    ],
    "src": "0:538:63"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-12-06T01:19:16.717Z"
}