"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var DivToken = exports.DivToken = 
{
  "contractName": "DivToken",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_sender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_paymentAmount",
          "type": "uint256"
        }
      ],
      "name": "LogIncomeReceived",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_block",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "_address",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "LogIncomeCollected",
      "type": "event"
    },
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
      "name": "transfer",
      "outputs": [
        {
          "name": "success",
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
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "success",
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
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "success",
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
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "approveAndCall",
      "outputs": [
        {
          "name": "success",
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
      "name": "withdraw",
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
      "name": "collectOwedDividends",
      "outputs": [
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenHolder",
          "type": "address"
        },
        {
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
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
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "tokenSupply",
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
          "name": "_tokenHolder",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "tokenURI",
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
      "inputs": [],
      "name": "valuePerToken",
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
      "inputs": [],
      "name": "scalingFactor",
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
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "getAmountOwed",
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
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "getOwedDividends",
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
      "inputs": [],
      "name": "assetIncome",
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
      "inputs": [],
      "name": "getERC20",
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
  "source": "pragma solidity ^0.4.24;\n\n\n// @title ERC20 token contract with shared revenue distribution functionality.\n// @notice This token contract can receive payments in the fallback function and token owners receive their share when transferring tokens.\n// Credit goes to Nick Johnson for the dividend token https://medium.com/@weka/dividend-bearing-tokens-on-ethereum-42d01c710657\n// TODO: Suicide function\ninterface DivToken {\n\n    // @notice Transfer _amount tokens to address _to.\n    // @dev Sender must have enough tokens. Cannot send to 0x0.\n    // @param (address) _to = The address which will receive the tokens\n    // @param (uint) _amount = The amount of tokens to send\n    function transfer(address _to, uint _amount)\n    external\n    returns (bool success);\n\n    // @notice A 3rd party can transfer tokens if user approves them to do so\n    // @dev Transfer _amount of tokens if _from has allowed msg.sender to do so.\n    // @param (address) _from = The address who approved msg.sender to spend tokens\n    // @param (address) _to = The address who will receive the tokens\n    // @param (uint) _amount = The number of tokens to send\n    function transferFrom(address _from, address _to, uint _amount)\n    external\n    returns (bool success);\n\n    // @notice approves a 3rd party to transfer msg.sender's tokens on behalf of him/her\n    // @param (address) _spender = The address of who msg.sender approves to spend tokens on their behalf\n    // @param (uint) _amount = The upper limit of how many tokens can be spent\n    function approve(address _spender, uint _amount)\n    external\n    returns (bool success);\n\n\n    // @notice Token holder can notify a contract that it has been approved to spend _amount of tokens\n    // @param (address) _spender = The contract to call after approval is done\n    // @param (uint) _amount = Number of tokens to send\n    // @param (bytes) _data = Bytes data to send along with the contract call\n    function approveAndCall(address _spender, uint _amount, bytes _data)\n    external\n    returns (bool success);\n\n    function withdraw()\n    external\n    returns (bool);\n\n    // @notice Updates incomeClaimed, sends all wei to the token holder\n    function collectOwedDividends()\n    external\n    returns (uint _amount);\n\n\n    // @notice Returns amount of tokens _spender is allowed to transfer or burn\n    function allowance(address _tokenHolder, address _spender)\n    external\n    view\n    returns (uint);\n\n    // @notice Returns the number of tokens in circulation\n    function totalSupply()\n    external\n    view\n    returns (uint tokenSupply);\n\n    // @notice Returns the token balance of user\n    function balanceOf(address _tokenHolder)\n    external\n    view\n    returns (uint balance);\n\n    // @notice Returns the URI of this token\n    function tokenURI()\n    external\n    view\n    returns (string);\n\n    function valuePerToken()\n    external\n    view\n    returns (uint);\n\n    function scalingFactor()\n    external\n    view\n    returns (uint);\n\n    // @notice Calculates how much value _user holds\n    function getAmountOwed(address _user)\n    external\n    view\n    returns (uint);\n\n    // @notice Calculates how much wei user is owed. (points + incomeClaimed) / 10**32\n    function getOwedDividends(address _user)\n    external\n    view\n    returns (uint);\n\n    function assetIncome()\n    external\n    view\n    returns (uint);\n\n    function getERC20()\n    external\n    view\n    returns (address);\n\n    event LogIncomeReceived(address indexed _sender, uint _paymentAmount);\n    event LogIncomeCollected(uint _block, address _address, uint _amount);\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/DivToken.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/DivToken.sol",
    "exportedSymbols": {
      "DivToken": [
        17003
      ]
    },
    "id": 17004,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 16878,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:61"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 17003,
        "linearizedBaseContracts": [
          17003
        ],
        "name": "DivToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 16887,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16883,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16880,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 16887,
                  "src": "695:11:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16879,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "695:7:61",
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
                  "id": 16882,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16887,
                  "src": "708:12:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16881,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "708:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "694:27:61"
            },
            "payable": false,
            "returnParameters": {
              "id": 16886,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16885,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 16887,
                  "src": "748:12:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16884,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "748:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "747:14:61"
            },
            "scope": 17003,
            "src": "677:85:61",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16898,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16894,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16889,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 16898,
                  "src": "1163:13:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16888,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1163:7:61",
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
                  "id": 16891,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 16898,
                  "src": "1178:11:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16890,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1178:7:61",
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
                  "id": 16893,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16898,
                  "src": "1191:12:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16892,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1191:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1162:42:61"
            },
            "payable": false,
            "returnParameters": {
              "id": 16897,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16896,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 16898,
                  "src": "1231:12:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16895,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1231:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1230:14:61"
            },
            "scope": 17003,
            "src": "1141:104:61",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16907,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16903,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16900,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 16907,
                  "src": "1542:16:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16899,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1542:7:61",
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
                  "id": 16902,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16907,
                  "src": "1560:12:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16901,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1560:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1541:32:61"
            },
            "payable": false,
            "returnParameters": {
              "id": 16906,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16905,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 16907,
                  "src": "1600:12:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16904,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1600:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1599:14:61"
            },
            "scope": 17003,
            "src": "1525:89:61",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16918,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approveAndCall",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16914,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16909,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 16918,
                  "src": "1961:16:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16908,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1961:7:61",
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
                  "id": 16911,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16918,
                  "src": "1979:12:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16910,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1979:4:61",
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
                  "id": 16913,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 16918,
                  "src": "1993:11:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 16912,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1993:5:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1960:45:61"
            },
            "payable": false,
            "returnParameters": {
              "id": 16917,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16916,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 16918,
                  "src": "2032:12:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16915,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2032:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2031:14:61"
            },
            "scope": 17003,
            "src": "1937:109:61",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16923,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16919,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2069:2:61"
            },
            "payable": false,
            "returnParameters": {
              "id": 16922,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16921,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16923,
                  "src": "2098:4:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16920,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2098:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2097:6:61"
            },
            "scope": 17003,
            "src": "2052:52:61",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16928,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "collectOwedDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16924,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2211:2:61"
            },
            "payable": false,
            "returnParameters": {
              "id": 16927,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16926,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16928,
                  "src": "2240:12:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16925,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2240:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2239:14:61"
            },
            "scope": 17003,
            "src": "2182:72:61",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16937,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16933,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16930,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 16937,
                  "src": "2360:20:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16929,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2360:7:61",
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
                  "id": 16932,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 16937,
                  "src": "2382:16:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16931,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2382:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2359:40:61"
            },
            "payable": false,
            "returnParameters": {
              "id": 16936,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16935,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16937,
                  "src": "2435:4:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16934,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2435:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2434:6:61"
            },
            "scope": 17003,
            "src": "2341:100:61",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16942,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16938,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2526:2:61"
            },
            "payable": false,
            "returnParameters": {
              "id": 16941,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16940,
                  "name": "tokenSupply",
                  "nodeType": "VariableDeclaration",
                  "scope": 16942,
                  "src": "2564:16:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16939,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2564:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2563:18:61"
            },
            "scope": 17003,
            "src": "2506:76:61",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16949,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16945,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16944,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 16949,
                  "src": "2656:20:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16943,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2656:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2655:22:61"
            },
            "payable": false,
            "returnParameters": {
              "id": 16948,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16947,
                  "name": "balance",
                  "nodeType": "VariableDeclaration",
                  "scope": 16949,
                  "src": "2713:12:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16946,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2713:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2712:14:61"
            },
            "scope": 17003,
            "src": "2637:90:61",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16954,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenURI",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16950,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2795:2:61"
            },
            "payable": false,
            "returnParameters": {
              "id": 16953,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16952,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16954,
                  "src": "2833:6:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 16951,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2833:6:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2832:8:61"
            },
            "scope": 17003,
            "src": "2778:63:61",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16959,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "valuePerToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16955,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2869:2:61"
            },
            "payable": false,
            "returnParameters": {
              "id": 16958,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16957,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16959,
                  "src": "2907:4:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16956,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2907:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2906:6:61"
            },
            "scope": 17003,
            "src": "2847:66:61",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16964,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "scalingFactor",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16960,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2941:2:61"
            },
            "payable": false,
            "returnParameters": {
              "id": 16963,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16962,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16964,
                  "src": "2979:4:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16961,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2979:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2978:6:61"
            },
            "scope": 17003,
            "src": "2919:66:61",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16971,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAmountOwed",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16967,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16966,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 16971,
                  "src": "3067:13:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16965,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3067:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3066:15:61"
            },
            "payable": false,
            "returnParameters": {
              "id": 16970,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16969,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16971,
                  "src": "3117:4:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16968,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3117:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3116:6:61"
            },
            "scope": 17003,
            "src": "3044:79:61",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16978,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getOwedDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16974,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16973,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 16978,
                  "src": "3242:13:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16972,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3242:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3241:15:61"
            },
            "payable": false,
            "returnParameters": {
              "id": 16977,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16976,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16978,
                  "src": "3292:4:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16975,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3292:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3291:6:61"
            },
            "scope": 17003,
            "src": "3216:82:61",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16983,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "assetIncome",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16979,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3324:2:61"
            },
            "payable": false,
            "returnParameters": {
              "id": 16982,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16981,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16983,
                  "src": "3362:4:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16980,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3362:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3361:6:61"
            },
            "scope": 17003,
            "src": "3304:64:61",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16988,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getERC20",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16984,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3391:2:61"
            },
            "payable": false,
            "returnParameters": {
              "id": 16987,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16986,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16988,
                  "src": "3429:7:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16985,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3429:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3428:9:61"
            },
            "scope": 17003,
            "src": "3374:64:61",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 16994,
            "name": "LogIncomeReceived",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 16993,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16990,
                  "indexed": true,
                  "name": "_sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 16994,
                  "src": "3468:23:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16989,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3468:7:61",
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
                  "id": 16992,
                  "indexed": false,
                  "name": "_paymentAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16994,
                  "src": "3493:19:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16991,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3493:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3467:46:61"
            },
            "src": "3444:70:61"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 17002,
            "name": "LogIncomeCollected",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 17001,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16996,
                  "indexed": false,
                  "name": "_block",
                  "nodeType": "VariableDeclaration",
                  "scope": 17002,
                  "src": "3544:11:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16995,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3544:4:61",
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
                  "id": 16998,
                  "indexed": false,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 17002,
                  "src": "3557:16:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16997,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3557:7:61",
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
                  "id": 17000,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 17002,
                  "src": "3575:12:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16999,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3575:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3543:45:61"
            },
            "src": "3519:70:61"
          }
        ],
        "scope": 17004,
        "src": "400:3192:61"
      }
    ],
    "src": "0:3593:61"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/DivToken.sol",
    "exportedSymbols": {
      "DivToken": [
        17003
      ]
    },
    "id": 17004,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 16878,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:61"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 17003,
        "linearizedBaseContracts": [
          17003
        ],
        "name": "DivToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 16887,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16883,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16880,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 16887,
                  "src": "695:11:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16879,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "695:7:61",
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
                  "id": 16882,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16887,
                  "src": "708:12:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16881,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "708:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "694:27:61"
            },
            "payable": false,
            "returnParameters": {
              "id": 16886,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16885,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 16887,
                  "src": "748:12:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16884,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "748:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "747:14:61"
            },
            "scope": 17003,
            "src": "677:85:61",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16898,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16894,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16889,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 16898,
                  "src": "1163:13:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16888,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1163:7:61",
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
                  "id": 16891,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 16898,
                  "src": "1178:11:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16890,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1178:7:61",
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
                  "id": 16893,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16898,
                  "src": "1191:12:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16892,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1191:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1162:42:61"
            },
            "payable": false,
            "returnParameters": {
              "id": 16897,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16896,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 16898,
                  "src": "1231:12:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16895,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1231:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1230:14:61"
            },
            "scope": 17003,
            "src": "1141:104:61",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16907,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16903,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16900,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 16907,
                  "src": "1542:16:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16899,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1542:7:61",
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
                  "id": 16902,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16907,
                  "src": "1560:12:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16901,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1560:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1541:32:61"
            },
            "payable": false,
            "returnParameters": {
              "id": 16906,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16905,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 16907,
                  "src": "1600:12:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16904,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1600:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1599:14:61"
            },
            "scope": 17003,
            "src": "1525:89:61",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16918,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approveAndCall",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16914,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16909,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 16918,
                  "src": "1961:16:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16908,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1961:7:61",
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
                  "id": 16911,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16918,
                  "src": "1979:12:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16910,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1979:4:61",
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
                  "id": 16913,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 16918,
                  "src": "1993:11:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 16912,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1993:5:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1960:45:61"
            },
            "payable": false,
            "returnParameters": {
              "id": 16917,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16916,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 16918,
                  "src": "2032:12:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16915,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2032:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2031:14:61"
            },
            "scope": 17003,
            "src": "1937:109:61",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16923,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16919,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2069:2:61"
            },
            "payable": false,
            "returnParameters": {
              "id": 16922,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16921,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16923,
                  "src": "2098:4:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16920,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2098:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2097:6:61"
            },
            "scope": 17003,
            "src": "2052:52:61",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16928,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "collectOwedDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16924,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2211:2:61"
            },
            "payable": false,
            "returnParameters": {
              "id": 16927,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16926,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16928,
                  "src": "2240:12:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16925,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2240:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2239:14:61"
            },
            "scope": 17003,
            "src": "2182:72:61",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16937,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16933,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16930,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 16937,
                  "src": "2360:20:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16929,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2360:7:61",
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
                  "id": 16932,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 16937,
                  "src": "2382:16:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16931,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2382:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2359:40:61"
            },
            "payable": false,
            "returnParameters": {
              "id": 16936,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16935,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16937,
                  "src": "2435:4:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16934,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2435:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2434:6:61"
            },
            "scope": 17003,
            "src": "2341:100:61",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16942,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16938,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2526:2:61"
            },
            "payable": false,
            "returnParameters": {
              "id": 16941,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16940,
                  "name": "tokenSupply",
                  "nodeType": "VariableDeclaration",
                  "scope": 16942,
                  "src": "2564:16:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16939,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2564:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2563:18:61"
            },
            "scope": 17003,
            "src": "2506:76:61",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16949,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16945,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16944,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 16949,
                  "src": "2656:20:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16943,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2656:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2655:22:61"
            },
            "payable": false,
            "returnParameters": {
              "id": 16948,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16947,
                  "name": "balance",
                  "nodeType": "VariableDeclaration",
                  "scope": 16949,
                  "src": "2713:12:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16946,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2713:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2712:14:61"
            },
            "scope": 17003,
            "src": "2637:90:61",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16954,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenURI",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16950,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2795:2:61"
            },
            "payable": false,
            "returnParameters": {
              "id": 16953,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16952,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16954,
                  "src": "2833:6:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 16951,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2833:6:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2832:8:61"
            },
            "scope": 17003,
            "src": "2778:63:61",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16959,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "valuePerToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16955,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2869:2:61"
            },
            "payable": false,
            "returnParameters": {
              "id": 16958,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16957,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16959,
                  "src": "2907:4:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16956,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2907:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2906:6:61"
            },
            "scope": 17003,
            "src": "2847:66:61",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16964,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "scalingFactor",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16960,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2941:2:61"
            },
            "payable": false,
            "returnParameters": {
              "id": 16963,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16962,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16964,
                  "src": "2979:4:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16961,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2979:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2978:6:61"
            },
            "scope": 17003,
            "src": "2919:66:61",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16971,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAmountOwed",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16967,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16966,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 16971,
                  "src": "3067:13:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16965,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3067:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3066:15:61"
            },
            "payable": false,
            "returnParameters": {
              "id": 16970,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16969,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16971,
                  "src": "3117:4:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16968,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3117:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3116:6:61"
            },
            "scope": 17003,
            "src": "3044:79:61",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16978,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getOwedDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16974,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16973,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 16978,
                  "src": "3242:13:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16972,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3242:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3241:15:61"
            },
            "payable": false,
            "returnParameters": {
              "id": 16977,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16976,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16978,
                  "src": "3292:4:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16975,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3292:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3291:6:61"
            },
            "scope": 17003,
            "src": "3216:82:61",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16983,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "assetIncome",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16979,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3324:2:61"
            },
            "payable": false,
            "returnParameters": {
              "id": 16982,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16981,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16983,
                  "src": "3362:4:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16980,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3362:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3361:6:61"
            },
            "scope": 17003,
            "src": "3304:64:61",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16988,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getERC20",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16984,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3391:2:61"
            },
            "payable": false,
            "returnParameters": {
              "id": 16987,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16986,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16988,
                  "src": "3429:7:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16985,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3429:7:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3428:9:61"
            },
            "scope": 17003,
            "src": "3374:64:61",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 16994,
            "name": "LogIncomeReceived",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 16993,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16990,
                  "indexed": true,
                  "name": "_sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 16994,
                  "src": "3468:23:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16989,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3468:7:61",
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
                  "id": 16992,
                  "indexed": false,
                  "name": "_paymentAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16994,
                  "src": "3493:19:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16991,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3493:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3467:46:61"
            },
            "src": "3444:70:61"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 17002,
            "name": "LogIncomeCollected",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 17001,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16996,
                  "indexed": false,
                  "name": "_block",
                  "nodeType": "VariableDeclaration",
                  "scope": 17002,
                  "src": "3544:11:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16995,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3544:4:61",
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
                  "id": 16998,
                  "indexed": false,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 17002,
                  "src": "3557:16:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16997,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3557:7:61",
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
                  "id": 17000,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 17002,
                  "src": "3575:12:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16999,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3575:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3543:45:61"
            },
            "src": "3519:70:61"
          }
        ],
        "scope": 17004,
        "src": "400:3192:61"
      }
    ],
    "src": "0:3593:61"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-12-06T01:19:16.716Z"
}