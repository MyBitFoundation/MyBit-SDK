"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var BurnableERC20 = exports.BurnableERC20 = 
{
  "contractName": "BurnableERC20",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "LogBurn",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenOwner",
          "type": "address"
        },
        {
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "remaining",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_tokenHolder",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "burnFrom",
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
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "burn",
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
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_who",
          "type": "address"
        }
      ],
      "name": "balanceOf",
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
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
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
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
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
  "source": "pragma solidity ^0.4.24;\n\n// @title An interface to interact with Burnable ERC20 tokens \ninterface BurnableERC20 { \n\n  function allowance(address tokenOwner, address spender) external view returns (uint remaining);\n  \n  function burnFrom(address _tokenHolder, uint _amount) external returns (bool success); \n\n  function burn(uint _amount) external returns (bool success); \n  \n  function totalSupply() external view returns (uint256);\n\n  function balanceOf(address _who) external view returns (uint256);\n\n  function transfer(address _to, uint256 _value) external returns (bool);\n\n  function approve(address _spender, uint256 _value) external returns (bool);\n\n  function transferFrom(address _from, address _to, uint256 _value) external returns (bool);\n\n  event Transfer(address indexed from, address indexed to, uint256 value);\n\n  event Approval(address indexed owner, address indexed spender, uint256 value);\n\n  event LogBurn(address indexed _spender, uint256 _value); \n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/BurnableERC20.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/BurnableERC20.sol",
    "exportedSymbols": {
      "BurnableERC20": [
        16735
      ]
    },
    "id": 16736,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 16646,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:59"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 16735,
        "linearizedBaseContracts": [
          16735
        ],
        "name": "BurnableERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 16655,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16651,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16648,
                  "name": "tokenOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 16655,
                  "src": "138:18:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16647,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "138:7:59",
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
                  "id": 16650,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 16655,
                  "src": "158:15:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16649,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "158:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "137:37:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16654,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16653,
                  "name": "remaining",
                  "nodeType": "VariableDeclaration",
                  "scope": 16655,
                  "src": "198:14:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16652,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "198:4:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "197:16:59"
            },
            "scope": 16735,
            "src": "119:95:59",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16664,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burnFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16660,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16657,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 16664,
                  "src": "238:20:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16656,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "238:7:59",
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
                  "id": 16659,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16664,
                  "src": "260:12:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16658,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "260:4:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "237:36:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16663,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16662,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 16664,
                  "src": "292:12:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16661,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "292:4:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "291:14:59"
            },
            "scope": 16735,
            "src": "220:86:59",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16671,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16667,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16666,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16671,
                  "src": "325:12:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16665,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "325:4:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "324:14:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16670,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16669,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 16671,
                  "src": "357:12:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16668,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "357:4:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "356:14:59"
            },
            "scope": 16735,
            "src": "311:60:59",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16676,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16672,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "398:2:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16675,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16674,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16676,
                  "src": "424:7:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16673,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "424:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "423:9:59"
            },
            "scope": 16735,
            "src": "378:55:59",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16683,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16679,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16678,
                  "name": "_who",
                  "nodeType": "VariableDeclaration",
                  "scope": 16683,
                  "src": "456:12:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16677,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "456:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "455:14:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16682,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16681,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16683,
                  "src": "493:7:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16680,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "493:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "492:9:59"
            },
            "scope": 16735,
            "src": "437:65:59",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16692,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16688,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16685,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 16692,
                  "src": "524:11:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16684,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "524:7:59",
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
                  "id": 16687,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 16692,
                  "src": "537:14:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16686,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "537:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "523:29:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16691,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16690,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16692,
                  "src": "571:4:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16689,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "571:4:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "570:6:59"
            },
            "scope": 16735,
            "src": "506:71:59",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16701,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16697,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16694,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 16701,
                  "src": "598:16:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16693,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "598:7:59",
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
                  "id": 16696,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 16701,
                  "src": "616:14:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16695,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "616:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "597:34:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16700,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16699,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16701,
                  "src": "650:4:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16698,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "650:4:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "649:6:59"
            },
            "scope": 16735,
            "src": "581:75:59",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16712,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16708,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16703,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 16712,
                  "src": "682:13:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16702,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "682:7:59",
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
                  "id": 16705,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 16712,
                  "src": "697:11:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16704,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "697:7:59",
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
                  "id": 16707,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 16712,
                  "src": "710:14:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16706,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "710:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "681:44:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16711,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16710,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16712,
                  "src": "744:4:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16709,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "744:4:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "743:6:59"
            },
            "scope": 16735,
            "src": "660:90:59",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 16720,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 16719,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16714,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 16720,
                  "src": "769:20:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16713,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "769:7:59",
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
                  "id": 16716,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 16720,
                  "src": "791:18:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16715,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "791:7:59",
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
                  "id": 16718,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 16720,
                  "src": "811:13:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16717,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "811:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "768:57:59"
            },
            "src": "754:72:59"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 16728,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 16727,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16722,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 16728,
                  "src": "845:21:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16721,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "845:7:59",
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
                  "id": 16724,
                  "indexed": true,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 16728,
                  "src": "868:23:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16723,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "868:7:59",
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
                  "id": 16726,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 16728,
                  "src": "893:13:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16725,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "893:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "844:63:59"
            },
            "src": "830:78:59"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 16734,
            "name": "LogBurn",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 16733,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16730,
                  "indexed": true,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 16734,
                  "src": "926:24:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16729,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "926:7:59",
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
                  "id": 16732,
                  "indexed": false,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 16734,
                  "src": "952:14:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16731,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "952:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "925:42:59"
            },
            "src": "912:56:59"
          }
        ],
        "scope": 16736,
        "src": "89:882:59"
      }
    ],
    "src": "0:972:59"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/BurnableERC20.sol",
    "exportedSymbols": {
      "BurnableERC20": [
        16735
      ]
    },
    "id": 16736,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 16646,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:59"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 16735,
        "linearizedBaseContracts": [
          16735
        ],
        "name": "BurnableERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 16655,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16651,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16648,
                  "name": "tokenOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 16655,
                  "src": "138:18:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16647,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "138:7:59",
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
                  "id": 16650,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 16655,
                  "src": "158:15:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16649,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "158:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "137:37:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16654,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16653,
                  "name": "remaining",
                  "nodeType": "VariableDeclaration",
                  "scope": 16655,
                  "src": "198:14:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16652,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "198:4:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "197:16:59"
            },
            "scope": 16735,
            "src": "119:95:59",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16664,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burnFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16660,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16657,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 16664,
                  "src": "238:20:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16656,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "238:7:59",
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
                  "id": 16659,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16664,
                  "src": "260:12:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16658,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "260:4:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "237:36:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16663,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16662,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 16664,
                  "src": "292:12:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16661,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "292:4:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "291:14:59"
            },
            "scope": 16735,
            "src": "220:86:59",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16671,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16667,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16666,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16671,
                  "src": "325:12:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16665,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "325:4:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "324:14:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16670,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16669,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 16671,
                  "src": "357:12:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16668,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "357:4:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "356:14:59"
            },
            "scope": 16735,
            "src": "311:60:59",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16676,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16672,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "398:2:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16675,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16674,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16676,
                  "src": "424:7:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16673,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "424:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "423:9:59"
            },
            "scope": 16735,
            "src": "378:55:59",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16683,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16679,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16678,
                  "name": "_who",
                  "nodeType": "VariableDeclaration",
                  "scope": 16683,
                  "src": "456:12:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16677,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "456:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "455:14:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16682,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16681,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16683,
                  "src": "493:7:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16680,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "493:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "492:9:59"
            },
            "scope": 16735,
            "src": "437:65:59",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16692,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16688,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16685,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 16692,
                  "src": "524:11:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16684,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "524:7:59",
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
                  "id": 16687,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 16692,
                  "src": "537:14:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16686,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "537:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "523:29:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16691,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16690,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16692,
                  "src": "571:4:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16689,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "571:4:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "570:6:59"
            },
            "scope": 16735,
            "src": "506:71:59",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16701,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16697,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16694,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 16701,
                  "src": "598:16:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16693,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "598:7:59",
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
                  "id": 16696,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 16701,
                  "src": "616:14:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16695,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "616:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "597:34:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16700,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16699,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16701,
                  "src": "650:4:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16698,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "650:4:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "649:6:59"
            },
            "scope": 16735,
            "src": "581:75:59",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16712,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16708,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16703,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 16712,
                  "src": "682:13:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16702,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "682:7:59",
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
                  "id": 16705,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 16712,
                  "src": "697:11:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16704,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "697:7:59",
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
                  "id": 16707,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 16712,
                  "src": "710:14:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16706,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "710:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "681:44:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16711,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16710,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16712,
                  "src": "744:4:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16709,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "744:4:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "743:6:59"
            },
            "scope": 16735,
            "src": "660:90:59",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 16720,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 16719,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16714,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 16720,
                  "src": "769:20:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16713,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "769:7:59",
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
                  "id": 16716,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 16720,
                  "src": "791:18:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16715,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "791:7:59",
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
                  "id": 16718,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 16720,
                  "src": "811:13:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16717,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "811:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "768:57:59"
            },
            "src": "754:72:59"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 16728,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 16727,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16722,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 16728,
                  "src": "845:21:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16721,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "845:7:59",
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
                  "id": 16724,
                  "indexed": true,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 16728,
                  "src": "868:23:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16723,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "868:7:59",
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
                  "id": 16726,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 16728,
                  "src": "893:13:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16725,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "893:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "844:63:59"
            },
            "src": "830:78:59"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 16734,
            "name": "LogBurn",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 16733,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16730,
                  "indexed": true,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 16734,
                  "src": "926:24:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16729,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "926:7:59",
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
                  "id": 16732,
                  "indexed": false,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 16734,
                  "src": "952:14:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16731,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "952:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "925:42:59"
            },
            "src": "912:56:59"
          }
        ],
        "scope": 16736,
        "src": "89:882:59"
      }
    ],
    "src": "0:972:59"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-12-06T01:19:16.702Z"
}