"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var SimpleNetworkInterface = exports.SimpleNetworkInterface = 
{
  "contractName": "SimpleNetworkInterface",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "src",
          "type": "address"
        },
        {
          "name": "srcAmount",
          "type": "uint256"
        },
        {
          "name": "dest",
          "type": "address"
        },
        {
          "name": "minConversionRate",
          "type": "uint256"
        }
      ],
      "name": "swapTokenToToken",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
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
          "name": "token",
          "type": "address"
        },
        {
          "name": "minConversionRate",
          "type": "uint256"
        }
      ],
      "name": "swapEtherToToken",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "token",
          "type": "address"
        },
        {
          "name": "srcAmount",
          "type": "uint256"
        },
        {
          "name": "minConversionRate",
          "type": "uint256"
        }
      ],
      "name": "swapTokenToEther",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
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
  "source": "pragma solidity ^0.4.24;\n\nimport \"../interfaces/ERC20.sol\";\n\n\n/// @title simple interface for Kyber Network\ninterface SimpleNetworkInterface {\n    function swapTokenToToken(ERC20 src, uint srcAmount, ERC20 dest, uint minConversionRate) external returns(uint);\n    function swapEtherToToken(ERC20 token, uint minConversionRate) external payable returns(uint);\n    function swapTokenToEther(ERC20 token, uint srcAmount, uint minConversionRate) external returns(uint);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/SimpleNetworkInterface.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/SimpleNetworkInterface.sol",
    "exportedSymbols": {
      "SimpleNetworkInterface": [
        20297
      ]
    },
    "id": 20298,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 20262,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:64"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20.sol",
        "file": "../interfaces/ERC20.sol",
        "id": 20263,
        "nodeType": "ImportDirective",
        "scope": 20298,
        "sourceUnit": 9534,
        "src": "26:33:64",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": "@title simple interface for Kyber Network",
        "fullyImplemented": false,
        "id": 20297,
        "linearizedBaseContracts": [
          20297
        ],
        "name": "SimpleNetworkInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 20276,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "swapTokenToToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 20272,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20265,
                  "name": "src",
                  "nodeType": "VariableDeclaration",
                  "scope": 20276,
                  "src": "173:9:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 20264,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "173:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20267,
                  "name": "srcAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 20276,
                  "src": "184:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20266,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "184:4:64",
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
                  "id": 20269,
                  "name": "dest",
                  "nodeType": "VariableDeclaration",
                  "scope": 20276,
                  "src": "200:10:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 20268,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "200:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20271,
                  "name": "minConversionRate",
                  "nodeType": "VariableDeclaration",
                  "scope": 20276,
                  "src": "212:22:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20270,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "212:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "172:63:64"
            },
            "payable": false,
            "returnParameters": {
              "id": 20275,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20274,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 20276,
                  "src": "253:4:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20273,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "253:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "252:6:64"
            },
            "scope": 20297,
            "src": "147:112:64",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 20285,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "swapEtherToToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 20281,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20278,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 20285,
                  "src": "290:11:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 20277,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "290:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20280,
                  "name": "minConversionRate",
                  "nodeType": "VariableDeclaration",
                  "scope": 20285,
                  "src": "303:22:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20279,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "303:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "289:37:64"
            },
            "payable": true,
            "returnParameters": {
              "id": 20284,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20283,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 20285,
                  "src": "352:4:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20282,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "352:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "351:6:64"
            },
            "scope": 20297,
            "src": "264:94:64",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 20296,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "swapTokenToEther",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 20292,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20287,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 20296,
                  "src": "389:11:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 20286,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "389:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20289,
                  "name": "srcAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 20296,
                  "src": "402:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20288,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "402:4:64",
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
                  "id": 20291,
                  "name": "minConversionRate",
                  "nodeType": "VariableDeclaration",
                  "scope": 20296,
                  "src": "418:22:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20290,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "418:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "388:53:64"
            },
            "payable": false,
            "returnParameters": {
              "id": 20295,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20294,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 20296,
                  "src": "459:4:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20293,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "459:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "458:6:64"
            },
            "scope": 20297,
            "src": "363:102:64",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 20298,
        "src": "108:359:64"
      }
    ],
    "src": "0:468:64"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/SimpleNetworkInterface.sol",
    "exportedSymbols": {
      "SimpleNetworkInterface": [
        20297
      ]
    },
    "id": 20298,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 20262,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:64"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20.sol",
        "file": "../interfaces/ERC20.sol",
        "id": 20263,
        "nodeType": "ImportDirective",
        "scope": 20298,
        "sourceUnit": 9534,
        "src": "26:33:64",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": "@title simple interface for Kyber Network",
        "fullyImplemented": false,
        "id": 20297,
        "linearizedBaseContracts": [
          20297
        ],
        "name": "SimpleNetworkInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 20276,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "swapTokenToToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 20272,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20265,
                  "name": "src",
                  "nodeType": "VariableDeclaration",
                  "scope": 20276,
                  "src": "173:9:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 20264,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "173:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20267,
                  "name": "srcAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 20276,
                  "src": "184:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20266,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "184:4:64",
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
                  "id": 20269,
                  "name": "dest",
                  "nodeType": "VariableDeclaration",
                  "scope": 20276,
                  "src": "200:10:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 20268,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "200:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20271,
                  "name": "minConversionRate",
                  "nodeType": "VariableDeclaration",
                  "scope": 20276,
                  "src": "212:22:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20270,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "212:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "172:63:64"
            },
            "payable": false,
            "returnParameters": {
              "id": 20275,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20274,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 20276,
                  "src": "253:4:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20273,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "253:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "252:6:64"
            },
            "scope": 20297,
            "src": "147:112:64",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 20285,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "swapEtherToToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 20281,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20278,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 20285,
                  "src": "290:11:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 20277,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "290:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20280,
                  "name": "minConversionRate",
                  "nodeType": "VariableDeclaration",
                  "scope": 20285,
                  "src": "303:22:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20279,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "303:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "289:37:64"
            },
            "payable": true,
            "returnParameters": {
              "id": 20284,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20283,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 20285,
                  "src": "352:4:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20282,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "352:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "351:6:64"
            },
            "scope": 20297,
            "src": "264:94:64",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 20296,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "swapTokenToEther",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 20292,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20287,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 20296,
                  "src": "389:11:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 20286,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "389:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20289,
                  "name": "srcAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 20296,
                  "src": "402:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20288,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "402:4:64",
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
                  "id": 20291,
                  "name": "minConversionRate",
                  "nodeType": "VariableDeclaration",
                  "scope": 20296,
                  "src": "418:22:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20290,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "418:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "388:53:64"
            },
            "payable": false,
            "returnParameters": {
              "id": 20295,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20294,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 20296,
                  "src": "459:4:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20293,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "459:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "458:6:64"
            },
            "scope": 20297,
            "src": "363:102:64",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 20298,
        "src": "108:359:64"
      }
    ],
    "src": "0:468:64"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-03-14T21:46:28.710Z",
  "devdoc": {
    "methods": {},
    "title": "simple interface for Kyber Network"
  },
  "userdoc": {
    "methods": {}
  }
}