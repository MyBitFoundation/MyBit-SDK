"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var IBancorGasPriceLimit = exports.IBancorGasPriceLimit = 
{
  "contractName": "IBancorGasPriceLimit",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "gasPrice",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "validateGasPrice",
      "outputs": [],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\n\n/*\n    Bancor Gas Price Limit interface\n*/\ncontract IBancorGasPriceLimit {\n    function gasPrice() public pure returns (uint256) {}\n    function validateGasPrice(uint256) public view;\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/converter/interfaces/IBancorGasPriceLimit.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/converter/interfaces/IBancorGasPriceLimit.sol",
    "exportedSymbols": {
      "IBancorGasPriceLimit": [
        7730
      ]
    },
    "id": 7731,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 7718,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:19"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 7730,
        "linearizedBaseContracts": [
          7730
        ],
        "name": "IBancorGasPriceLimit",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 7723,
              "nodeType": "Block",
              "src": "155:2:19",
              "statements": []
            },
            "documentation": null,
            "id": 7724,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "gasPrice",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7719,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "122:2:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 7722,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7721,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7724,
                  "src": "146:7:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7720,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "146:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "145:9:19"
            },
            "scope": 7730,
            "src": "105:52:19",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 7729,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "validateGasPrice",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7727,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7726,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7729,
                  "src": "188:7:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7725,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "188:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "187:9:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 7728,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "208:0:19"
            },
            "scope": 7730,
            "src": "162:47:19",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 7731,
        "src": "69:142:19"
      }
    ],
    "src": "0:212:19"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/converter/interfaces/IBancorGasPriceLimit.sol",
    "exportedSymbols": {
      "IBancorGasPriceLimit": [
        7730
      ]
    },
    "id": 7731,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 7718,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:19"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 7730,
        "linearizedBaseContracts": [
          7730
        ],
        "name": "IBancorGasPriceLimit",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 7723,
              "nodeType": "Block",
              "src": "155:2:19",
              "statements": []
            },
            "documentation": null,
            "id": 7724,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "gasPrice",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7719,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "122:2:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 7722,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7721,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7724,
                  "src": "146:7:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7720,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "146:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "145:9:19"
            },
            "scope": 7730,
            "src": "105:52:19",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 7729,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "validateGasPrice",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7727,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7726,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7729,
                  "src": "188:7:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7725,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "188:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "187:9:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 7728,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "208:0:19"
            },
            "scope": 7730,
            "src": "162:47:19",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 7731,
        "src": "69:142:19"
      }
    ],
    "src": "0:212:19"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-12-03T18:35:11.904Z"
}