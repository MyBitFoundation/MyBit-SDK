"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var Consensus = exports.Consensus = 
{
  "contractName": "Consensus",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "proposalID",
          "type": "bytes32"
        }
      ],
      "name": "hasConsensus",
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
  "source": "pragma solidity ^0.4.24;\n\nimport '../database/API.sol';\n\ninterface Token { function totalSupply() external view returns (uint); }\ninterface Consensus { function hasConsensus(bytes32 proposalID) external view returns (bool); }\n\ncontract ConsensusTest {\n\n  API public api;\n\n  constructor(address _api)\n  public {\n    api = API(_api);\n  }\n\n  function checkConsensus(address user, address token, uint tokens)\n  public\n  view\n  returns (bool){\n    bytes32 parameterHash = keccak256(abi.encodePacked(user, token, tokens));\n    address governanceContract = api.assetGovernance(token);\n    bytes32 proposalID = keccak256(abi.encodePacked(token, governanceContract, msg.sig, parameterHash));\n    require(Consensus(governanceContract).hasConsensus(proposalID));\n    return true;\n  }\n\n\n  function consensusTestParameterHash(address user, address _token, uint _tokens)\n  public\n  pure\n  returns (bytes32){\n    return keccak256(abi.encodePacked(user, _token, _tokens));\n  }\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/ConsensusTest.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/ConsensusTest.sol",
    "exportedSymbols": {
      "Consensus": [
        30166
      ],
      "ConsensusTest": [
        30256
      ],
      "Token": [
        30158
      ]
    },
    "id": 30257,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 30151,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:88"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/API.sol",
        "file": "../database/API.sol",
        "id": 30152,
        "nodeType": "ImportDirective",
        "scope": 30257,
        "sourceUnit": 5789,
        "src": "26:29:88",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 30158,
        "linearizedBaseContracts": [
          30158
        ],
        "name": "Token",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 30157,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 30153,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "95:2:88"
            },
            "payable": false,
            "returnParameters": {
              "id": 30156,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30155,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 30157,
                  "src": "121:4:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 30154,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "121:4:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "120:6:88"
            },
            "scope": 30158,
            "src": "75:52:88",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 30257,
        "src": "57:72:88"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 30166,
        "linearizedBaseContracts": [
          30166
        ],
        "name": "Consensus",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 30165,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "hasConsensus",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 30161,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30160,
                  "name": "proposalID",
                  "nodeType": "VariableDeclaration",
                  "scope": 30165,
                  "src": "174:18:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 30159,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "174:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "173:20:88"
            },
            "payable": false,
            "returnParameters": {
              "id": 30164,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30163,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 30165,
                  "src": "217:4:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 30162,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "217:4:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "216:6:88"
            },
            "scope": 30166,
            "src": "152:71:88",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 30257,
        "src": "130:95:88"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 30256,
        "linearizedBaseContracts": [
          30256
        ],
        "name": "ConsensusTest",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 30168,
            "name": "api",
            "nodeType": "VariableDeclaration",
            "scope": 30256,
            "src": "255:14:88",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_API_$5788",
              "typeString": "contract API"
            },
            "typeName": {
              "contractScope": null,
              "id": 30167,
              "name": "API",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5788,
              "src": "255:3:88",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_API_$5788",
                "typeString": "contract API"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 30179,
              "nodeType": "Block",
              "src": "309:26:88",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 30177,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 30173,
                      "name": "api",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 30168,
                      "src": "315:3:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_API_$5788",
                        "typeString": "contract API"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 30175,
                          "name": "_api",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 30170,
                          "src": "325:4:88",
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
                        "id": 30174,
                        "name": "API",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5788,
                        "src": "321:3:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_API_$5788_$",
                          "typeString": "type(contract API)"
                        }
                      },
                      "id": 30176,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "321:9:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_API_$5788",
                        "typeString": "contract API"
                      }
                    },
                    "src": "315:15:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_API_$5788",
                      "typeString": "contract API"
                    }
                  },
                  "id": 30178,
                  "nodeType": "ExpressionStatement",
                  "src": "315:15:88"
                }
              ]
            },
            "documentation": null,
            "id": 30180,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 30171,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30170,
                  "name": "_api",
                  "nodeType": "VariableDeclaration",
                  "scope": 30180,
                  "src": "286:12:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30169,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "286:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "285:14:88"
            },
            "payable": false,
            "returnParameters": {
              "id": 30172,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "309:0:88"
            },
            "scope": 30256,
            "src": "274:61:88",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 30233,
              "nodeType": "Block",
              "src": "437:335:88",
              "statements": [
                {
                  "assignments": [
                    30192
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 30192,
                      "name": "parameterHash",
                      "nodeType": "VariableDeclaration",
                      "scope": 30234,
                      "src": "443:21:88",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 30191,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "443:7:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 30201,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 30196,
                            "name": "user",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30182,
                            "src": "494:4:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 30197,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30184,
                            "src": "500:5:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 30198,
                            "name": "tokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30186,
                            "src": "507:6:88",
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
                            "id": 30194,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34910,
                            "src": "477:3:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 30195,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "477:16:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 30199,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "477:37:88",
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
                      "id": 30193,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34917,
                      "src": "467:9:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 30200,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "467:48:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "443:72:88"
                },
                {
                  "assignments": [
                    30203
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 30203,
                      "name": "governanceContract",
                      "nodeType": "VariableDeclaration",
                      "scope": 30234,
                      "src": "521:26:88",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 30202,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "521:7:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 30208,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 30206,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30184,
                        "src": "570:5:88",
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
                      "expression": {
                        "argumentTypes": null,
                        "id": 30204,
                        "name": "api",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30168,
                        "src": "550:3:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_API_$5788",
                          "typeString": "contract API"
                        }
                      },
                      "id": 30205,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "assetGovernance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4671,
                      "src": "550:19:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_address_$",
                        "typeString": "function (address) view external returns (address)"
                      }
                    },
                    "id": 30207,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "550:26:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "521:55:88"
                },
                {
                  "assignments": [
                    30210
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 30210,
                      "name": "proposalID",
                      "nodeType": "VariableDeclaration",
                      "scope": 30234,
                      "src": "582:18:88",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 30209,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "582:7:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 30221,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 30214,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30184,
                            "src": "630:5:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 30215,
                            "name": "governanceContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30203,
                            "src": "637:18:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 30216,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34923,
                              "src": "657:3:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 30217,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sig",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "657:7:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 30218,
                            "name": "parameterHash",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30192,
                            "src": "666:13:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
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
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 30212,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34910,
                            "src": "613:3:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 30213,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "613:16:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 30219,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "613:67:88",
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
                      "id": 30211,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34917,
                      "src": "603:9:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 30220,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "603:78:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "582:99:88"
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
                            "id": 30227,
                            "name": "proposalID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30210,
                            "src": "738:10:88",
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
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 30224,
                                "name": "governanceContract",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 30203,
                                "src": "705:18:88",
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
                              "id": 30223,
                              "name": "Consensus",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 30166,
                              "src": "695:9:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_Consensus_$30166_$",
                                "typeString": "type(contract Consensus)"
                              }
                            },
                            "id": 30225,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "695:29:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Consensus_$30166",
                              "typeString": "contract Consensus"
                            }
                          },
                          "id": 30226,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "hasConsensus",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 30165,
                          "src": "695:42:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 30228,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "695:54:88",
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
                      "id": 30222,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "687:7:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 30229,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "687:63:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 30230,
                  "nodeType": "ExpressionStatement",
                  "src": "687:63:88"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 30231,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "763:4:88",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 30190,
                  "id": 30232,
                  "nodeType": "Return",
                  "src": "756:11:88"
                }
              ]
            },
            "documentation": null,
            "id": 30234,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "checkConsensus",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 30187,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30182,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 30234,
                  "src": "363:12:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30181,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "363:7:88",
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
                  "id": 30184,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 30234,
                  "src": "377:13:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30183,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "377:7:88",
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
                  "id": 30186,
                  "name": "tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 30234,
                  "src": "392:11:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 30185,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "392:4:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "362:42:88"
            },
            "payable": false,
            "returnParameters": {
              "id": 30190,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30189,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 30234,
                  "src": "432:4:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 30188,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "432:4:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "431:6:88"
            },
            "scope": 30256,
            "src": "339:433:88",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 30254,
              "nodeType": "Block",
              "src": "892:68:88",
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
                            "id": 30248,
                            "name": "user",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30236,
                            "src": "932:4:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 30249,
                            "name": "_token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30238,
                            "src": "938:6:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 30250,
                            "name": "_tokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30240,
                            "src": "946:7:88",
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
                            "id": 30246,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34910,
                            "src": "915:3:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 30247,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "915:16:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 30251,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "915:39:88",
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
                      "id": 30245,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34917,
                      "src": "905:9:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 30252,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "905:50:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 30244,
                  "id": 30253,
                  "nodeType": "Return",
                  "src": "898:57:88"
                }
              ]
            },
            "documentation": null,
            "id": 30255,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "consensusTestParameterHash",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 30241,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30236,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 30255,
                  "src": "813:12:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30235,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "813:7:88",
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
                  "id": 30238,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 30255,
                  "src": "827:14:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30237,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "827:7:88",
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
                  "id": 30240,
                  "name": "_tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 30255,
                  "src": "843:12:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 30239,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "843:4:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "812:44:88"
            },
            "payable": false,
            "returnParameters": {
              "id": 30244,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30243,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 30255,
                  "src": "884:7:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 30242,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "884:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "883:9:88"
            },
            "scope": 30256,
            "src": "777:183:88",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 30257,
        "src": "227:736:88"
      }
    ],
    "src": "0:964:88"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/ConsensusTest.sol",
    "exportedSymbols": {
      "Consensus": [
        30166
      ],
      "ConsensusTest": [
        30256
      ],
      "Token": [
        30158
      ]
    },
    "id": 30257,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 30151,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:88"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/API.sol",
        "file": "../database/API.sol",
        "id": 30152,
        "nodeType": "ImportDirective",
        "scope": 30257,
        "sourceUnit": 5789,
        "src": "26:29:88",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 30158,
        "linearizedBaseContracts": [
          30158
        ],
        "name": "Token",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 30157,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 30153,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "95:2:88"
            },
            "payable": false,
            "returnParameters": {
              "id": 30156,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30155,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 30157,
                  "src": "121:4:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 30154,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "121:4:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "120:6:88"
            },
            "scope": 30158,
            "src": "75:52:88",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 30257,
        "src": "57:72:88"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 30166,
        "linearizedBaseContracts": [
          30166
        ],
        "name": "Consensus",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 30165,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "hasConsensus",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 30161,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30160,
                  "name": "proposalID",
                  "nodeType": "VariableDeclaration",
                  "scope": 30165,
                  "src": "174:18:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 30159,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "174:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "173:20:88"
            },
            "payable": false,
            "returnParameters": {
              "id": 30164,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30163,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 30165,
                  "src": "217:4:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 30162,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "217:4:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "216:6:88"
            },
            "scope": 30166,
            "src": "152:71:88",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 30257,
        "src": "130:95:88"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 30256,
        "linearizedBaseContracts": [
          30256
        ],
        "name": "ConsensusTest",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 30168,
            "name": "api",
            "nodeType": "VariableDeclaration",
            "scope": 30256,
            "src": "255:14:88",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_API_$5788",
              "typeString": "contract API"
            },
            "typeName": {
              "contractScope": null,
              "id": 30167,
              "name": "API",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5788,
              "src": "255:3:88",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_API_$5788",
                "typeString": "contract API"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 30179,
              "nodeType": "Block",
              "src": "309:26:88",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 30177,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 30173,
                      "name": "api",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 30168,
                      "src": "315:3:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_API_$5788",
                        "typeString": "contract API"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 30175,
                          "name": "_api",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 30170,
                          "src": "325:4:88",
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
                        "id": 30174,
                        "name": "API",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5788,
                        "src": "321:3:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_API_$5788_$",
                          "typeString": "type(contract API)"
                        }
                      },
                      "id": 30176,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "321:9:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_API_$5788",
                        "typeString": "contract API"
                      }
                    },
                    "src": "315:15:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_API_$5788",
                      "typeString": "contract API"
                    }
                  },
                  "id": 30178,
                  "nodeType": "ExpressionStatement",
                  "src": "315:15:88"
                }
              ]
            },
            "documentation": null,
            "id": 30180,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 30171,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30170,
                  "name": "_api",
                  "nodeType": "VariableDeclaration",
                  "scope": 30180,
                  "src": "286:12:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30169,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "286:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "285:14:88"
            },
            "payable": false,
            "returnParameters": {
              "id": 30172,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "309:0:88"
            },
            "scope": 30256,
            "src": "274:61:88",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 30233,
              "nodeType": "Block",
              "src": "437:335:88",
              "statements": [
                {
                  "assignments": [
                    30192
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 30192,
                      "name": "parameterHash",
                      "nodeType": "VariableDeclaration",
                      "scope": 30234,
                      "src": "443:21:88",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 30191,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "443:7:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 30201,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 30196,
                            "name": "user",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30182,
                            "src": "494:4:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 30197,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30184,
                            "src": "500:5:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 30198,
                            "name": "tokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30186,
                            "src": "507:6:88",
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
                            "id": 30194,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34910,
                            "src": "477:3:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 30195,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "477:16:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 30199,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "477:37:88",
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
                      "id": 30193,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34917,
                      "src": "467:9:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 30200,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "467:48:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "443:72:88"
                },
                {
                  "assignments": [
                    30203
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 30203,
                      "name": "governanceContract",
                      "nodeType": "VariableDeclaration",
                      "scope": 30234,
                      "src": "521:26:88",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 30202,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "521:7:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 30208,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 30206,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30184,
                        "src": "570:5:88",
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
                      "expression": {
                        "argumentTypes": null,
                        "id": 30204,
                        "name": "api",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30168,
                        "src": "550:3:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_API_$5788",
                          "typeString": "contract API"
                        }
                      },
                      "id": 30205,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "assetGovernance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4671,
                      "src": "550:19:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_address_$",
                        "typeString": "function (address) view external returns (address)"
                      }
                    },
                    "id": 30207,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "550:26:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "521:55:88"
                },
                {
                  "assignments": [
                    30210
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 30210,
                      "name": "proposalID",
                      "nodeType": "VariableDeclaration",
                      "scope": 30234,
                      "src": "582:18:88",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 30209,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "582:7:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 30221,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 30214,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30184,
                            "src": "630:5:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 30215,
                            "name": "governanceContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30203,
                            "src": "637:18:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 30216,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34923,
                              "src": "657:3:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 30217,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sig",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "657:7:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 30218,
                            "name": "parameterHash",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30192,
                            "src": "666:13:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
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
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 30212,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34910,
                            "src": "613:3:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 30213,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "613:16:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 30219,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "613:67:88",
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
                      "id": 30211,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34917,
                      "src": "603:9:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 30220,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "603:78:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "582:99:88"
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
                            "id": 30227,
                            "name": "proposalID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30210,
                            "src": "738:10:88",
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
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 30224,
                                "name": "governanceContract",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 30203,
                                "src": "705:18:88",
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
                              "id": 30223,
                              "name": "Consensus",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 30166,
                              "src": "695:9:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_Consensus_$30166_$",
                                "typeString": "type(contract Consensus)"
                              }
                            },
                            "id": 30225,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "695:29:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Consensus_$30166",
                              "typeString": "contract Consensus"
                            }
                          },
                          "id": 30226,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "hasConsensus",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 30165,
                          "src": "695:42:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 30228,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "695:54:88",
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
                      "id": 30222,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "687:7:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 30229,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "687:63:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 30230,
                  "nodeType": "ExpressionStatement",
                  "src": "687:63:88"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 30231,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "763:4:88",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 30190,
                  "id": 30232,
                  "nodeType": "Return",
                  "src": "756:11:88"
                }
              ]
            },
            "documentation": null,
            "id": 30234,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "checkConsensus",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 30187,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30182,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 30234,
                  "src": "363:12:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30181,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "363:7:88",
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
                  "id": 30184,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 30234,
                  "src": "377:13:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30183,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "377:7:88",
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
                  "id": 30186,
                  "name": "tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 30234,
                  "src": "392:11:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 30185,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "392:4:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "362:42:88"
            },
            "payable": false,
            "returnParameters": {
              "id": 30190,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30189,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 30234,
                  "src": "432:4:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 30188,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "432:4:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "431:6:88"
            },
            "scope": 30256,
            "src": "339:433:88",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 30254,
              "nodeType": "Block",
              "src": "892:68:88",
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
                            "id": 30248,
                            "name": "user",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30236,
                            "src": "932:4:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 30249,
                            "name": "_token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30238,
                            "src": "938:6:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 30250,
                            "name": "_tokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30240,
                            "src": "946:7:88",
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
                            "id": 30246,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34910,
                            "src": "915:3:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 30247,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "915:16:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 30251,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "915:39:88",
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
                      "id": 30245,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34917,
                      "src": "905:9:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 30252,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "905:50:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 30244,
                  "id": 30253,
                  "nodeType": "Return",
                  "src": "898:57:88"
                }
              ]
            },
            "documentation": null,
            "id": 30255,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "consensusTestParameterHash",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 30241,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30236,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 30255,
                  "src": "813:12:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30235,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "813:7:88",
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
                  "id": 30238,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 30255,
                  "src": "827:14:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30237,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "827:7:88",
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
                  "id": 30240,
                  "name": "_tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 30255,
                  "src": "843:12:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 30239,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "843:4:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "812:44:88"
            },
            "payable": false,
            "returnParameters": {
              "id": 30244,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30243,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 30255,
                  "src": "884:7:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 30242,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "884:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "883:9:88"
            },
            "scope": 30256,
            "src": "777:183:88",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 30257,
        "src": "227:736:88"
      }
    ],
    "src": "0:964:88"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-03-14T21:46:28.834Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}