"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var IContractRegistry = exports.IContractRegistry = 
{
  "contractName": "IContractRegistry",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "_contractName",
          "type": "bytes32"
        }
      ],
      "name": "addressOf",
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
      "inputs": [
        {
          "name": "_contractName",
          "type": "bytes32"
        }
      ],
      "name": "getAddress",
      "outputs": [
        {
          "name": "",
          "type": "address"
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
  "source": "pragma solidity ^0.4.24;\n\n/*\n    Contract Registry interface\n*/\ncontract IContractRegistry {\n    function addressOf(bytes32 _contractName) public view returns (address);\n\n    // deprecated, backward compatibility\n    function getAddress(bytes32 _contractName) public view returns (address);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/IContractRegistry.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/IContractRegistry.sol",
    "exportedSymbols": {
      "IContractRegistry": [
        9870
      ]
    },
    "id": 9871,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9855,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:40"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 9870,
        "linearizedBaseContracts": [
          9870
        ],
        "name": "IContractRegistry",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 9862,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "addressOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9858,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9857,
                  "name": "_contractName",
                  "nodeType": "VariableDeclaration",
                  "scope": 9862,
                  "src": "116:21:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9856,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "116:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "115:23:40"
            },
            "payable": false,
            "returnParameters": {
              "id": 9861,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9860,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9862,
                  "src": "160:7:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9859,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "160:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "159:9:40"
            },
            "scope": 9870,
            "src": "97:72:40",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9869,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9865,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9864,
                  "name": "_contractName",
                  "nodeType": "VariableDeclaration",
                  "scope": 9869,
                  "src": "237:21:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9863,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "237:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "236:23:40"
            },
            "payable": false,
            "returnParameters": {
              "id": 9868,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9867,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9869,
                  "src": "281:7:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9866,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "281:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "280:9:40"
            },
            "scope": 9870,
            "src": "217:73:40",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 9871,
        "src": "64:228:40"
      }
    ],
    "src": "0:293:40"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/IContractRegistry.sol",
    "exportedSymbols": {
      "IContractRegistry": [
        9870
      ]
    },
    "id": 9871,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9855,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:40"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 9870,
        "linearizedBaseContracts": [
          9870
        ],
        "name": "IContractRegistry",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 9862,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "addressOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9858,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9857,
                  "name": "_contractName",
                  "nodeType": "VariableDeclaration",
                  "scope": 9862,
                  "src": "116:21:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9856,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "116:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "115:23:40"
            },
            "payable": false,
            "returnParameters": {
              "id": 9861,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9860,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9862,
                  "src": "160:7:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9859,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "160:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "159:9:40"
            },
            "scope": 9870,
            "src": "97:72:40",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9869,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9865,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9864,
                  "name": "_contractName",
                  "nodeType": "VariableDeclaration",
                  "scope": 9869,
                  "src": "237:21:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9863,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "237:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "236:23:40"
            },
            "payable": false,
            "returnParameters": {
              "id": 9868,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9867,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9869,
                  "src": "281:7:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9866,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "281:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "280:9:40"
            },
            "scope": 9870,
            "src": "217:73:40",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 9871,
        "src": "64:228:40"
      }
    ],
    "src": "0:293:40"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-12-03T18:35:11.980Z"
}