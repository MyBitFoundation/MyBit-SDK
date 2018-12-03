"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var IBancorConverterFactory = exports.IBancorConverterFactory = 
{
  "contractName": "IBancorConverterFactory",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_token",
          "type": "address"
        },
        {
          "name": "_registry",
          "type": "address"
        },
        {
          "name": "_maxConversionFee",
          "type": "uint32"
        },
        {
          "name": "_connectorToken",
          "type": "address"
        },
        {
          "name": "_connectorWeight",
          "type": "uint32"
        }
      ],
      "name": "createConverter",
      "outputs": [
        {
          "name": "",
          "type": "address"
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
  "source": "pragma solidity ^0.4.24;\nimport '../../token/interfaces/IERC20Token.sol';\nimport '../../token/interfaces/ISmartToken.sol';\nimport '../../utility/interfaces/IContractRegistry.sol';\n\n/*\n    Bancor Converter Factory interface\n*/\ncontract IBancorConverterFactory {\n    function createConverter(\n        ISmartToken _token,\n        IContractRegistry _registry,\n        uint32 _maxConversionFee,\n        IERC20Token _connectorToken,\n        uint32 _connectorWeight\n    )\n    public returns (address);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/converter/interfaces/IBancorConverterFactory.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/converter/interfaces/IBancorConverterFactory.sol",
    "exportedSymbols": {
      "IBancorConverterFactory": [
        7663
      ]
    },
    "id": 7664,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 7644,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:16"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/IERC20Token.sol",
        "file": "../../token/interfaces/IERC20Token.sol",
        "id": 7645,
        "nodeType": "ImportDirective",
        "scope": 7664,
        "sourceUnit": 8902,
        "src": "25:48:16",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/ISmartToken.sol",
        "file": "../../token/interfaces/ISmartToken.sol",
        "id": 7646,
        "nodeType": "ImportDirective",
        "scope": 7664,
        "sourceUnit": 8954,
        "src": "74:48:16",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/IContractRegistry.sol",
        "file": "../../utility/interfaces/IContractRegistry.sol",
        "id": 7647,
        "nodeType": "ImportDirective",
        "scope": 7664,
        "sourceUnit": 9871,
        "src": "123:56:16",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 7663,
        "linearizedBaseContracts": [
          7663
        ],
        "name": "IBancorConverterFactory",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 7662,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "createConverter",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7658,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7649,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 7662,
                  "src": "299:18:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ISmartToken_$8953",
                    "typeString": "contract ISmartToken"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 7648,
                    "name": "ISmartToken",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 8953,
                    "src": "299:11:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ISmartToken_$8953",
                      "typeString": "contract ISmartToken"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7651,
                  "name": "_registry",
                  "nodeType": "VariableDeclaration",
                  "scope": 7662,
                  "src": "327:27:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IContractRegistry_$9870",
                    "typeString": "contract IContractRegistry"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 7650,
                    "name": "IContractRegistry",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9870,
                    "src": "327:17:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IContractRegistry_$9870",
                      "typeString": "contract IContractRegistry"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7653,
                  "name": "_maxConversionFee",
                  "nodeType": "VariableDeclaration",
                  "scope": 7662,
                  "src": "364:24:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 7652,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "364:6:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7655,
                  "name": "_connectorToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 7662,
                  "src": "398:27:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20Token_$8901",
                    "typeString": "contract IERC20Token"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 7654,
                    "name": "IERC20Token",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 8901,
                    "src": "398:11:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20Token_$8901",
                      "typeString": "contract IERC20Token"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7657,
                  "name": "_connectorWeight",
                  "nodeType": "VariableDeclaration",
                  "scope": 7662,
                  "src": "435:23:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 7656,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "435:6:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "289:175:16"
            },
            "payable": false,
            "returnParameters": {
              "id": 7661,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7660,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7662,
                  "src": "485:7:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7659,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "485:7:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "484:9:16"
            },
            "scope": 7663,
            "src": "265:229:16",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 7664,
        "src": "226:270:16"
      }
    ],
    "src": "0:497:16"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/converter/interfaces/IBancorConverterFactory.sol",
    "exportedSymbols": {
      "IBancorConverterFactory": [
        7663
      ]
    },
    "id": 7664,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 7644,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:16"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/IERC20Token.sol",
        "file": "../../token/interfaces/IERC20Token.sol",
        "id": 7645,
        "nodeType": "ImportDirective",
        "scope": 7664,
        "sourceUnit": 8902,
        "src": "25:48:16",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/ISmartToken.sol",
        "file": "../../token/interfaces/ISmartToken.sol",
        "id": 7646,
        "nodeType": "ImportDirective",
        "scope": 7664,
        "sourceUnit": 8954,
        "src": "74:48:16",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/IContractRegistry.sol",
        "file": "../../utility/interfaces/IContractRegistry.sol",
        "id": 7647,
        "nodeType": "ImportDirective",
        "scope": 7664,
        "sourceUnit": 9871,
        "src": "123:56:16",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 7663,
        "linearizedBaseContracts": [
          7663
        ],
        "name": "IBancorConverterFactory",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 7662,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "createConverter",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7658,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7649,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 7662,
                  "src": "299:18:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ISmartToken_$8953",
                    "typeString": "contract ISmartToken"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 7648,
                    "name": "ISmartToken",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 8953,
                    "src": "299:11:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ISmartToken_$8953",
                      "typeString": "contract ISmartToken"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7651,
                  "name": "_registry",
                  "nodeType": "VariableDeclaration",
                  "scope": 7662,
                  "src": "327:27:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IContractRegistry_$9870",
                    "typeString": "contract IContractRegistry"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 7650,
                    "name": "IContractRegistry",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9870,
                    "src": "327:17:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IContractRegistry_$9870",
                      "typeString": "contract IContractRegistry"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7653,
                  "name": "_maxConversionFee",
                  "nodeType": "VariableDeclaration",
                  "scope": 7662,
                  "src": "364:24:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 7652,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "364:6:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7655,
                  "name": "_connectorToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 7662,
                  "src": "398:27:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20Token_$8901",
                    "typeString": "contract IERC20Token"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 7654,
                    "name": "IERC20Token",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 8901,
                    "src": "398:11:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20Token_$8901",
                      "typeString": "contract IERC20Token"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7657,
                  "name": "_connectorWeight",
                  "nodeType": "VariableDeclaration",
                  "scope": 7662,
                  "src": "435:23:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 7656,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "435:6:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "289:175:16"
            },
            "payable": false,
            "returnParameters": {
              "id": 7661,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7660,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7662,
                  "src": "485:7:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7659,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "485:7:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "484:9:16"
            },
            "scope": 7663,
            "src": "265:229:16",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 7664,
        "src": "226:270:16"
      }
    ],
    "src": "0:497:16"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-12-03T18:35:11.903Z"
}