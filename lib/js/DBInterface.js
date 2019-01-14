"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var DBInterface = exports.DBInterface = 
{
  "contractName": "DBInterface",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_contractManager",
          "type": "address"
        }
      ],
      "name": "setContractManager",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_key",
          "type": "bytes32"
        },
        {
          "name": "_value",
          "type": "address"
        }
      ],
      "name": "setAddress",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_key",
          "type": "bytes32"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "setUint",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_key",
          "type": "bytes32"
        },
        {
          "name": "_value",
          "type": "string"
        }
      ],
      "name": "setString",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_key",
          "type": "bytes32"
        },
        {
          "name": "_value",
          "type": "bytes"
        }
      ],
      "name": "setBytes",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_key",
          "type": "bytes32"
        },
        {
          "name": "_value",
          "type": "bytes32"
        }
      ],
      "name": "setBytes32",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_key",
          "type": "bytes32"
        },
        {
          "name": "_value",
          "type": "bool"
        }
      ],
      "name": "setBool",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_key",
          "type": "bytes32"
        },
        {
          "name": "_value",
          "type": "int256"
        }
      ],
      "name": "setInt",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_key",
          "type": "bytes32"
        }
      ],
      "name": "deleteAddress",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_key",
          "type": "bytes32"
        }
      ],
      "name": "deleteUint",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_key",
          "type": "bytes32"
        }
      ],
      "name": "deleteString",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_key",
          "type": "bytes32"
        }
      ],
      "name": "deleteBytes",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_key",
          "type": "bytes32"
        }
      ],
      "name": "deleteBytes32",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_key",
          "type": "bytes32"
        }
      ],
      "name": "deleteBool",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_key",
          "type": "bytes32"
        }
      ],
      "name": "deleteInt",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_key",
          "type": "bytes32"
        }
      ],
      "name": "uintStorage",
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
      "constant": true,
      "inputs": [
        {
          "name": "_key",
          "type": "bytes32"
        }
      ],
      "name": "stringStorage",
      "outputs": [
        {
          "name": "",
          "type": "string"
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
          "name": "_key",
          "type": "bytes32"
        }
      ],
      "name": "addressStorage",
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
          "name": "_key",
          "type": "bytes32"
        }
      ],
      "name": "bytesStorage",
      "outputs": [
        {
          "name": "",
          "type": "bytes"
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
          "name": "_key",
          "type": "bytes32"
        }
      ],
      "name": "bytes32Storage",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
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
          "name": "_key",
          "type": "bytes32"
        }
      ],
      "name": "boolStorage",
      "outputs": [
        {
          "name": "",
          "type": "bool"
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
          "name": "_key",
          "type": "bytes32"
        }
      ],
      "name": "intStorage",
      "outputs": [
        {
          "name": "",
          "type": "bool"
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
  "source": "pragma solidity ^0.4.24;\n\n// Database interface\ninterface DBInterface {\n\n  function setContractManager(address _contractManager)\n  external;\n\n    // --------------------Set Functions------------------------\n\n    function setAddress(bytes32 _key, address _value)\n    external;\n\n    function setUint(bytes32 _key, uint _value)\n    external;\n\n    function setString(bytes32 _key, string _value)\n    external;\n\n    function setBytes(bytes32 _key, bytes _value)\n    external;\n\n    function setBytes32(bytes32 _key, bytes32 _value)\n    external;\n\n    function setBool(bytes32 _key, bool _value)\n    external;\n\n    function setInt(bytes32 _key, int _value)\n    external;\n\n\n     // -------------- Deletion Functions ------------------\n\n    function deleteAddress(bytes32 _key)\n    external;\n\n    function deleteUint(bytes32 _key)\n    external;\n\n    function deleteString(bytes32 _key)\n    external;\n\n    function deleteBytes(bytes32 _key)\n    external;\n\n    function deleteBytes32(bytes32 _key)\n    external;\n\n    function deleteBool(bytes32 _key)\n    external;\n\n    function deleteInt(bytes32 _key)\n    external;\n\n    // ----------------Variable Getters---------------------\n\n    function uintStorage(bytes32 _key)\n    external\n    view\n    returns (uint);\n\n    function stringStorage(bytes32 _key)\n    external\n    view\n    returns (string);\n\n    function addressStorage(bytes32 _key)\n    external\n    view\n    returns (address);\n\n    function bytesStorage(bytes32 _key)\n    external\n    view\n    returns (bytes);\n\n    function bytes32Storage(bytes32 _key)\n    external\n    view\n    returns (bytes32);\n\n    function boolStorage(bytes32 _key)\n    external\n    view\n    returns (bool);\n\n    function intStorage(bytes32 _key)\n    external\n    view\n    returns (bool);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/DBInterface.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/DBInterface.sol",
    "exportedSymbols": {
      "DBInterface": [
        16876
      ]
    },
    "id": 16877,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 16737,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:60"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 16876,
        "linearizedBaseContracts": [
          16876
        ],
        "name": "DBInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 16742,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setContractManager",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16740,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16739,
                  "name": "_contractManager",
                  "nodeType": "VariableDeclaration",
                  "scope": 16742,
                  "src": "103:24:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16738,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "103:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "102:26:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16741,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "139:0:60"
            },
            "scope": 16876,
            "src": "75:65:60",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16749,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16747,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16744,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16749,
                  "src": "232:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16743,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "232:7:60",
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
                  "id": 16746,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 16749,
                  "src": "246:14:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16745,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "246:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "231:30:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16748,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "274:0:60"
            },
            "scope": 16876,
            "src": "212:63:60",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16756,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setUint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16754,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16751,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16756,
                  "src": "298:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16750,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "298:7:60",
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
                  "id": 16753,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 16756,
                  "src": "312:11:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16752,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "312:4:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "297:27:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16755,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "337:0:60"
            },
            "scope": 16876,
            "src": "281:57:60",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16763,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setString",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16761,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16758,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16763,
                  "src": "363:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16757,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "363:7:60",
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
                  "id": 16760,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 16763,
                  "src": "377:13:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 16759,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "377:6:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "362:29:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16762,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "404:0:60"
            },
            "scope": 16876,
            "src": "344:61:60",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16770,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setBytes",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16768,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16765,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16770,
                  "src": "429:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16764,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "429:7:60",
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
                  "id": 16767,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 16770,
                  "src": "443:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 16766,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "443:5:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "428:28:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16769,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "469:0:60"
            },
            "scope": 16876,
            "src": "411:59:60",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16777,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setBytes32",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16775,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16772,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16777,
                  "src": "496:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16771,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "496:7:60",
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
                  "id": 16774,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 16777,
                  "src": "510:14:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16773,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "510:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "495:30:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16776,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "538:0:60"
            },
            "scope": 16876,
            "src": "476:63:60",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16784,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setBool",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16782,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16779,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16784,
                  "src": "562:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16778,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "562:7:60",
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
                  "id": 16781,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 16784,
                  "src": "576:11:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16780,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "576:4:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "561:27:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16783,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "601:0:60"
            },
            "scope": 16876,
            "src": "545:57:60",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16791,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setInt",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16789,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16786,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16791,
                  "src": "624:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16785,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "624:7:60",
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
                  "id": 16788,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 16791,
                  "src": "638:10:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 16787,
                    "name": "int",
                    "nodeType": "ElementaryTypeName",
                    "src": "638:3:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "623:26:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16790,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "662:0:60"
            },
            "scope": 16876,
            "src": "608:55:60",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16796,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16794,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16793,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16796,
                  "src": "755:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16792,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "755:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "754:14:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16795,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "781:0:60"
            },
            "scope": 16876,
            "src": "732:50:60",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16801,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteUint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16799,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16798,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16801,
                  "src": "808:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16797,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "808:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "807:14:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16800,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "834:0:60"
            },
            "scope": 16876,
            "src": "788:47:60",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16806,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteString",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16804,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16803,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16806,
                  "src": "863:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16802,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "863:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "862:14:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16805,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "889:0:60"
            },
            "scope": 16876,
            "src": "841:49:60",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16811,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteBytes",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16809,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16808,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16811,
                  "src": "917:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16807,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "917:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "916:14:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16810,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "943:0:60"
            },
            "scope": 16876,
            "src": "896:48:60",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16816,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteBytes32",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16814,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16813,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16816,
                  "src": "973:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16812,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "973:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "972:14:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16815,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "999:0:60"
            },
            "scope": 16876,
            "src": "950:50:60",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16821,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteBool",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16819,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16818,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16821,
                  "src": "1026:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16817,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1026:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1025:14:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16820,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1052:0:60"
            },
            "scope": 16876,
            "src": "1006:47:60",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16826,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteInt",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16824,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16823,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16826,
                  "src": "1078:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16822,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1078:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1077:14:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16825,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1104:0:60"
            },
            "scope": 16876,
            "src": "1059:46:60",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16833,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "uintStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16829,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16828,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16833,
                  "src": "1194:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16827,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1194:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1193:14:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16832,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16831,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16833,
                  "src": "1243:4:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16830,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1243:4:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1242:6:60"
            },
            "scope": 16876,
            "src": "1173:76:60",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16840,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "stringStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16836,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16835,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16840,
                  "src": "1278:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16834,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1278:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1277:14:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16839,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16838,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16840,
                  "src": "1327:6:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 16837,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1327:6:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1326:8:60"
            },
            "scope": 16876,
            "src": "1255:80:60",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16847,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "addressStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16843,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16842,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16847,
                  "src": "1365:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16841,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1365:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1364:14:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16846,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16845,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16847,
                  "src": "1414:7:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16844,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1414:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1413:9:60"
            },
            "scope": 16876,
            "src": "1341:82:60",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16854,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "bytesStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16850,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16849,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16854,
                  "src": "1451:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16848,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1451:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1450:14:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16853,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16852,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16854,
                  "src": "1500:5:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 16851,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1500:5:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1499:7:60"
            },
            "scope": 16876,
            "src": "1429:78:60",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16861,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "bytes32Storage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16857,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16856,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16861,
                  "src": "1537:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16855,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1537:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1536:14:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16860,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16859,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16861,
                  "src": "1586:7:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16858,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1586:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1585:9:60"
            },
            "scope": 16876,
            "src": "1513:82:60",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16868,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "boolStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16864,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16863,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16868,
                  "src": "1622:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16862,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1622:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1621:14:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16867,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16866,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16868,
                  "src": "1671:4:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16865,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1671:4:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1670:6:60"
            },
            "scope": 16876,
            "src": "1601:76:60",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16875,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "intStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16871,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16870,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16875,
                  "src": "1703:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16869,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1703:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1702:14:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16874,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16873,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16875,
                  "src": "1752:4:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16872,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1752:4:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1751:6:60"
            },
            "scope": 16876,
            "src": "1683:75:60",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 16877,
        "src": "48:1712:60"
      }
    ],
    "src": "0:1761:60"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/DBInterface.sol",
    "exportedSymbols": {
      "DBInterface": [
        16876
      ]
    },
    "id": 16877,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 16737,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:60"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 16876,
        "linearizedBaseContracts": [
          16876
        ],
        "name": "DBInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 16742,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setContractManager",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16740,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16739,
                  "name": "_contractManager",
                  "nodeType": "VariableDeclaration",
                  "scope": 16742,
                  "src": "103:24:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16738,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "103:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "102:26:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16741,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "139:0:60"
            },
            "scope": 16876,
            "src": "75:65:60",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16749,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16747,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16744,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16749,
                  "src": "232:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16743,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "232:7:60",
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
                  "id": 16746,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 16749,
                  "src": "246:14:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16745,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "246:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "231:30:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16748,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "274:0:60"
            },
            "scope": 16876,
            "src": "212:63:60",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16756,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setUint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16754,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16751,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16756,
                  "src": "298:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16750,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "298:7:60",
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
                  "id": 16753,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 16756,
                  "src": "312:11:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16752,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "312:4:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "297:27:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16755,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "337:0:60"
            },
            "scope": 16876,
            "src": "281:57:60",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16763,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setString",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16761,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16758,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16763,
                  "src": "363:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16757,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "363:7:60",
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
                  "id": 16760,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 16763,
                  "src": "377:13:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 16759,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "377:6:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "362:29:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16762,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "404:0:60"
            },
            "scope": 16876,
            "src": "344:61:60",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16770,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setBytes",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16768,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16765,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16770,
                  "src": "429:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16764,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "429:7:60",
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
                  "id": 16767,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 16770,
                  "src": "443:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 16766,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "443:5:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "428:28:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16769,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "469:0:60"
            },
            "scope": 16876,
            "src": "411:59:60",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16777,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setBytes32",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16775,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16772,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16777,
                  "src": "496:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16771,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "496:7:60",
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
                  "id": 16774,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 16777,
                  "src": "510:14:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16773,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "510:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "495:30:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16776,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "538:0:60"
            },
            "scope": 16876,
            "src": "476:63:60",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16784,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setBool",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16782,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16779,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16784,
                  "src": "562:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16778,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "562:7:60",
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
                  "id": 16781,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 16784,
                  "src": "576:11:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16780,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "576:4:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "561:27:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16783,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "601:0:60"
            },
            "scope": 16876,
            "src": "545:57:60",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16791,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setInt",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16789,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16786,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16791,
                  "src": "624:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16785,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "624:7:60",
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
                  "id": 16788,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 16791,
                  "src": "638:10:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 16787,
                    "name": "int",
                    "nodeType": "ElementaryTypeName",
                    "src": "638:3:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "623:26:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16790,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "662:0:60"
            },
            "scope": 16876,
            "src": "608:55:60",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16796,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16794,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16793,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16796,
                  "src": "755:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16792,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "755:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "754:14:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16795,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "781:0:60"
            },
            "scope": 16876,
            "src": "732:50:60",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16801,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteUint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16799,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16798,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16801,
                  "src": "808:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16797,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "808:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "807:14:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16800,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "834:0:60"
            },
            "scope": 16876,
            "src": "788:47:60",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16806,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteString",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16804,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16803,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16806,
                  "src": "863:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16802,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "863:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "862:14:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16805,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "889:0:60"
            },
            "scope": 16876,
            "src": "841:49:60",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16811,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteBytes",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16809,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16808,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16811,
                  "src": "917:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16807,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "917:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "916:14:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16810,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "943:0:60"
            },
            "scope": 16876,
            "src": "896:48:60",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16816,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteBytes32",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16814,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16813,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16816,
                  "src": "973:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16812,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "973:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "972:14:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16815,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "999:0:60"
            },
            "scope": 16876,
            "src": "950:50:60",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16821,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteBool",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16819,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16818,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16821,
                  "src": "1026:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16817,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1026:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1025:14:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16820,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1052:0:60"
            },
            "scope": 16876,
            "src": "1006:47:60",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16826,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteInt",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16824,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16823,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16826,
                  "src": "1078:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16822,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1078:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1077:14:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16825,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1104:0:60"
            },
            "scope": 16876,
            "src": "1059:46:60",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16833,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "uintStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16829,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16828,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16833,
                  "src": "1194:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16827,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1194:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1193:14:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16832,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16831,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16833,
                  "src": "1243:4:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16830,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1243:4:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1242:6:60"
            },
            "scope": 16876,
            "src": "1173:76:60",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16840,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "stringStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16836,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16835,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16840,
                  "src": "1278:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16834,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1278:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1277:14:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16839,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16838,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16840,
                  "src": "1327:6:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 16837,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1327:6:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1326:8:60"
            },
            "scope": 16876,
            "src": "1255:80:60",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16847,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "addressStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16843,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16842,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16847,
                  "src": "1365:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16841,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1365:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1364:14:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16846,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16845,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16847,
                  "src": "1414:7:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16844,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1414:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1413:9:60"
            },
            "scope": 16876,
            "src": "1341:82:60",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16854,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "bytesStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16850,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16849,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16854,
                  "src": "1451:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16848,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1451:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1450:14:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16853,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16852,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16854,
                  "src": "1500:5:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 16851,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1500:5:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1499:7:60"
            },
            "scope": 16876,
            "src": "1429:78:60",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16861,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "bytes32Storage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16857,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16856,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16861,
                  "src": "1537:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16855,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1537:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1536:14:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16860,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16859,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16861,
                  "src": "1586:7:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16858,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1586:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1585:9:60"
            },
            "scope": 16876,
            "src": "1513:82:60",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16868,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "boolStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16864,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16863,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16868,
                  "src": "1622:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16862,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1622:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1621:14:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16867,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16866,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16868,
                  "src": "1671:4:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16865,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1671:4:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1670:6:60"
            },
            "scope": 16876,
            "src": "1601:76:60",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16875,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "intStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16871,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16870,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 16875,
                  "src": "1703:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 16869,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1703:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1702:14:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16874,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16873,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16875,
                  "src": "1752:4:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16872,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1752:4:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1751:6:60"
            },
            "scope": 16876,
            "src": "1683:75:60",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 16877,
        "src": "48:1712:60"
      }
    ],
    "src": "0:1761:60"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-12-06T01:19:16.709Z"
}