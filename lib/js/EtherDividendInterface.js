"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var EtherDividendInterface = exports.EtherDividendInterface = 
{
  "contractName": "EtherDividendInterface",
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
      "inputs": [],
      "name": "issueDividends",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
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
  "source": "pragma solidity ^0.4.24;\n\ninterface EtherDividendInterface{\n  // @dev Function to mint tokens\n  // @param _to The address that will receive the minted tokens.\n  // @param _amount The amount of tokens to mint.\n  function mint(address _to, uint256 _amount) external returns (bool);\n\n  // @dev Function to stop minting new tokens.\n  function finishMinting() external returns (bool);\n\n  function issueDividends() external payable;\n\n  // @dev Total number of tokens in existence\n  function totalSupply() external view returns (uint256);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/EtherDividendInterface.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/EtherDividendInterface.sol",
    "exportedSymbols": {
      "EtherDividendInterface": [
        17124
      ]
    },
    "id": 17125,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 17101,
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
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 17124,
        "linearizedBaseContracts": [
          17124
        ],
        "name": "EtherDividendInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 17110,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17106,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17103,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 17110,
                  "src": "225:11:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17102,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "225:7:64",
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
                  "id": 17105,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 17110,
                  "src": "238:15:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17104,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "238:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "224:30:64"
            },
            "payable": false,
            "returnParameters": {
              "id": 17109,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17108,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17110,
                  "src": "273:4:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17107,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "273:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "272:6:64"
            },
            "scope": 17124,
            "src": "211:68:64",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 17115,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "finishMinting",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17111,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "352:2:64"
            },
            "payable": false,
            "returnParameters": {
              "id": 17114,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17113,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17115,
                  "src": "373:4:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17112,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "373:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "372:6:64"
            },
            "scope": 17124,
            "src": "330:49:64",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 17118,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "issueDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17116,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "406:2:64"
            },
            "payable": true,
            "returnParameters": {
              "id": 17117,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "425:0:64"
            },
            "scope": 17124,
            "src": "383:43:64",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 17123,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17119,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "496:2:64"
            },
            "payable": false,
            "returnParameters": {
              "id": 17122,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17121,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17123,
                  "src": "522:7:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17120,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "522:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "521:9:64"
            },
            "scope": 17124,
            "src": "476:55:64",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 17125,
        "src": "26:507:64"
      }
    ],
    "src": "0:534:64"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/EtherDividendInterface.sol",
    "exportedSymbols": {
      "EtherDividendInterface": [
        17124
      ]
    },
    "id": 17125,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 17101,
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
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 17124,
        "linearizedBaseContracts": [
          17124
        ],
        "name": "EtherDividendInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 17110,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17106,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17103,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 17110,
                  "src": "225:11:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17102,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "225:7:64",
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
                  "id": 17105,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 17110,
                  "src": "238:15:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17104,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "238:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "224:30:64"
            },
            "payable": false,
            "returnParameters": {
              "id": 17109,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17108,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17110,
                  "src": "273:4:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17107,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "273:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "272:6:64"
            },
            "scope": 17124,
            "src": "211:68:64",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 17115,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "finishMinting",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17111,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "352:2:64"
            },
            "payable": false,
            "returnParameters": {
              "id": 17114,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17113,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17115,
                  "src": "373:4:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17112,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "373:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "372:6:64"
            },
            "scope": 17124,
            "src": "330:49:64",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 17118,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "issueDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17116,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "406:2:64"
            },
            "payable": true,
            "returnParameters": {
              "id": 17117,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "425:0:64"
            },
            "scope": 17124,
            "src": "383:43:64",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 17123,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17119,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "496:2:64"
            },
            "payable": false,
            "returnParameters": {
              "id": 17122,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17121,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17123,
                  "src": "522:7:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17120,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "522:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "521:9:64"
            },
            "scope": 17124,
            "src": "476:55:64",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 17125,
        "src": "26:507:64"
      }
    ],
    "src": "0:534:64"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-12-06T01:19:16.718Z"
}