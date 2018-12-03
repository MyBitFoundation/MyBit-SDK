"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var ProposalAction = exports.ProposalAction = 
{
  "contractName": "ProposalAction",
  "abi": [
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
      "inputs": [
        {
          "name": "_user",
          "type": "address"
        }
      ],
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
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\n\nimport \"../interfaces/VotingInterface.sol\";\n\ninterface ProposalAction {\n  function withdraw() external returns (bool);\n  function withdraw(address _user) external returns (bool);\n}\n\ncontract RawCall{\n  address private contractAddress;\n  bytes private functionParams;\n\n  function execute(address _contract, bytes4 _methodID, bytes _params, bytes32 _proposalID, address _votingInterface)\n  external\n  payable\n  returns (bool){\n    VotingInterface votingProcess = VotingInterface(_votingInterface);\n    require(votingProcess.result(_proposalID));\n\n    return(_contract.call.gas(200000).value(msg.value)(_methodID, _params));\n  }\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ownership/RawCall.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ownership/RawCall.sol",
    "exportedSymbols": {
      "ProposalAction": [
        21808
      ],
      "RawCall": [
        21856
      ]
    },
    "id": 21857,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 21794,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:78"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/VotingInterface.sol",
        "file": "../interfaces/VotingInterface.sol",
        "id": 21795,
        "nodeType": "ImportDirective",
        "scope": 21857,
        "sourceUnit": 17181,
        "src": "26:43:78",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 21808,
        "linearizedBaseContracts": [
          21808
        ],
        "name": "ProposalAction",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 21800,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 21796,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "117:2:78"
            },
            "payable": false,
            "returnParameters": {
              "id": 21799,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21798,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 21800,
                  "src": "138:4:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 21797,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "138:4:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "137:6:78"
            },
            "scope": 21808,
            "src": "100:44:78",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 21807,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 21803,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21802,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 21807,
                  "src": "165:13:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 21801,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "165:7:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "164:15:78"
            },
            "payable": false,
            "returnParameters": {
              "id": 21806,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21805,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 21807,
                  "src": "198:4:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 21804,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "198:4:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "197:6:78"
            },
            "scope": 21808,
            "src": "147:57:78",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 21857,
        "src": "71:135:78"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 21856,
        "linearizedBaseContracts": [
          21856
        ],
        "name": "RawCall",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 21810,
            "name": "contractAddress",
            "nodeType": "VariableDeclaration",
            "scope": 21856,
            "src": "228:31:78",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 21809,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "228:7:78",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 21812,
            "name": "functionParams",
            "nodeType": "VariableDeclaration",
            "scope": 21856,
            "src": "263:28:78",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes_storage",
              "typeString": "bytes"
            },
            "typeName": {
              "id": 21811,
              "name": "bytes",
              "nodeType": "ElementaryTypeName",
              "src": "263:5:78",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes_storage_ptr",
                "typeString": "bytes"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 21854,
              "nodeType": "Block",
              "src": "449:202:78",
              "statements": [
                {
                  "assignments": [
                    21828
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 21828,
                      "name": "votingProcess",
                      "nodeType": "VariableDeclaration",
                      "scope": 21855,
                      "src": "455:29:78",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_VotingInterface_$17180",
                        "typeString": "contract VotingInterface"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 21827,
                        "name": "VotingInterface",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 17180,
                        "src": "455:15:78",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VotingInterface_$17180",
                          "typeString": "contract VotingInterface"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 21832,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 21830,
                        "name": "_votingInterface",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21822,
                        "src": "503:16:78",
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
                      "id": 21829,
                      "name": "VotingInterface",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17180,
                      "src": "487:15:78",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_VotingInterface_$17180_$",
                        "typeString": "type(contract VotingInterface)"
                      }
                    },
                    "id": 21831,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "487:33:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_VotingInterface_$17180",
                      "typeString": "contract VotingInterface"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "455:65:78"
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
                            "id": 21836,
                            "name": "_proposalID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21820,
                            "src": "555:11:78",
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
                            "id": 21834,
                            "name": "votingProcess",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21828,
                            "src": "534:13:78",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VotingInterface_$17180",
                              "typeString": "contract VotingInterface"
                            }
                          },
                          "id": 21835,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "result",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 17172,
                          "src": "534:20:78",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 21837,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "534:33:78",
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
                      "id": 21833,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        27911,
                        27912
                      ],
                      "referencedDeclaration": 27911,
                      "src": "526:7:78",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 21838,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "526:42:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 21839,
                  "nodeType": "ExpressionStatement",
                  "src": "526:42:78"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 21849,
                            "name": "_methodID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21816,
                            "src": "626:9:78",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 21850,
                            "name": "_params",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21818,
                            "src": "637:7:78",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_calldata_ptr",
                              "typeString": "bytes calldata"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            },
                            {
                              "typeIdentifier": "t_bytes_calldata_ptr",
                              "typeString": "bytes calldata"
                            }
                          ],
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 21846,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27908,
                                "src": "615:3:78",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 21847,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "value",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "615:9:78",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "hexValue": "323030303030",
                                  "id": 21843,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "601:6:78",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_200000_by_1",
                                    "typeString": "int_const 200000"
                                  },
                                  "value": "200000"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_200000_by_1",
                                    "typeString": "int_const 200000"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 21840,
                                    "name": "_contract",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 21814,
                                    "src": "582:9:78",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "id": 21841,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "call",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "582:14:78",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_barecall_payable$__$returns$_t_bool_$",
                                    "typeString": "function () payable returns (bool)"
                                  }
                                },
                                "id": 21842,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "gas",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "582:18:78",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_setgas_nonpayable$_t_uint256_$returns$_t_function_barecall_payable$__$returns$_t_bool_$gas_$",
                                  "typeString": "function (uint256) returns (function () payable returns (bool))"
                                }
                              },
                              "id": 21844,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "582:26:78",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_barecall_payable$__$returns$_t_bool_$gas",
                                "typeString": "function () payable returns (bool)"
                              }
                            },
                            "id": 21845,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "582:32:78",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_setvalue_nonpayable$_t_uint256_$returns$_t_function_barecall_payable$__$returns$_t_bool_$gasvalue_$gas",
                              "typeString": "function (uint256) returns (function () payable returns (bool))"
                            }
                          },
                          "id": 21848,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "582:43:78",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_barecall_payable$__$returns$_t_bool_$gasvalue",
                            "typeString": "function () payable returns (bool)"
                          }
                        },
                        "id": 21851,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "582:63:78",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "id": 21852,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "581:65:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 21826,
                  "id": 21853,
                  "nodeType": "Return",
                  "src": "575:71:78"
                }
              ]
            },
            "documentation": null,
            "id": 21855,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "execute",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 21823,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21814,
                  "name": "_contract",
                  "nodeType": "VariableDeclaration",
                  "scope": 21855,
                  "src": "313:17:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 21813,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "313:7:78",
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
                  "id": 21816,
                  "name": "_methodID",
                  "nodeType": "VariableDeclaration",
                  "scope": 21855,
                  "src": "332:16:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 21815,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "332:6:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 21818,
                  "name": "_params",
                  "nodeType": "VariableDeclaration",
                  "scope": 21855,
                  "src": "350:13:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 21817,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "350:5:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 21820,
                  "name": "_proposalID",
                  "nodeType": "VariableDeclaration",
                  "scope": 21855,
                  "src": "365:19:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 21819,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "365:7:78",
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
                  "id": 21822,
                  "name": "_votingInterface",
                  "nodeType": "VariableDeclaration",
                  "scope": 21855,
                  "src": "386:24:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 21821,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "386:7:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "312:99:78"
            },
            "payable": true,
            "returnParameters": {
              "id": 21826,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21825,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 21855,
                  "src": "444:4:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 21824,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "444:4:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "443:6:78"
            },
            "scope": 21856,
            "src": "296:355:78",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 21857,
        "src": "208:445:78"
      }
    ],
    "src": "0:654:78"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ownership/RawCall.sol",
    "exportedSymbols": {
      "ProposalAction": [
        21808
      ],
      "RawCall": [
        21856
      ]
    },
    "id": 21857,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 21794,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:78"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/VotingInterface.sol",
        "file": "../interfaces/VotingInterface.sol",
        "id": 21795,
        "nodeType": "ImportDirective",
        "scope": 21857,
        "sourceUnit": 17181,
        "src": "26:43:78",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 21808,
        "linearizedBaseContracts": [
          21808
        ],
        "name": "ProposalAction",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 21800,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 21796,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "117:2:78"
            },
            "payable": false,
            "returnParameters": {
              "id": 21799,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21798,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 21800,
                  "src": "138:4:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 21797,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "138:4:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "137:6:78"
            },
            "scope": 21808,
            "src": "100:44:78",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 21807,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 21803,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21802,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 21807,
                  "src": "165:13:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 21801,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "165:7:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "164:15:78"
            },
            "payable": false,
            "returnParameters": {
              "id": 21806,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21805,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 21807,
                  "src": "198:4:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 21804,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "198:4:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "197:6:78"
            },
            "scope": 21808,
            "src": "147:57:78",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 21857,
        "src": "71:135:78"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 21856,
        "linearizedBaseContracts": [
          21856
        ],
        "name": "RawCall",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 21810,
            "name": "contractAddress",
            "nodeType": "VariableDeclaration",
            "scope": 21856,
            "src": "228:31:78",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 21809,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "228:7:78",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 21812,
            "name": "functionParams",
            "nodeType": "VariableDeclaration",
            "scope": 21856,
            "src": "263:28:78",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes_storage",
              "typeString": "bytes"
            },
            "typeName": {
              "id": 21811,
              "name": "bytes",
              "nodeType": "ElementaryTypeName",
              "src": "263:5:78",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes_storage_ptr",
                "typeString": "bytes"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 21854,
              "nodeType": "Block",
              "src": "449:202:78",
              "statements": [
                {
                  "assignments": [
                    21828
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 21828,
                      "name": "votingProcess",
                      "nodeType": "VariableDeclaration",
                      "scope": 21855,
                      "src": "455:29:78",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_VotingInterface_$17180",
                        "typeString": "contract VotingInterface"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 21827,
                        "name": "VotingInterface",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 17180,
                        "src": "455:15:78",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VotingInterface_$17180",
                          "typeString": "contract VotingInterface"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 21832,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 21830,
                        "name": "_votingInterface",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21822,
                        "src": "503:16:78",
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
                      "id": 21829,
                      "name": "VotingInterface",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17180,
                      "src": "487:15:78",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_VotingInterface_$17180_$",
                        "typeString": "type(contract VotingInterface)"
                      }
                    },
                    "id": 21831,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "487:33:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_VotingInterface_$17180",
                      "typeString": "contract VotingInterface"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "455:65:78"
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
                            "id": 21836,
                            "name": "_proposalID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21820,
                            "src": "555:11:78",
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
                            "id": 21834,
                            "name": "votingProcess",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21828,
                            "src": "534:13:78",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VotingInterface_$17180",
                              "typeString": "contract VotingInterface"
                            }
                          },
                          "id": 21835,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "result",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 17172,
                          "src": "534:20:78",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 21837,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "534:33:78",
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
                      "id": 21833,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        27911,
                        27912
                      ],
                      "referencedDeclaration": 27911,
                      "src": "526:7:78",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 21838,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "526:42:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 21839,
                  "nodeType": "ExpressionStatement",
                  "src": "526:42:78"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 21849,
                            "name": "_methodID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21816,
                            "src": "626:9:78",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 21850,
                            "name": "_params",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21818,
                            "src": "637:7:78",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_calldata_ptr",
                              "typeString": "bytes calldata"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            },
                            {
                              "typeIdentifier": "t_bytes_calldata_ptr",
                              "typeString": "bytes calldata"
                            }
                          ],
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 21846,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27908,
                                "src": "615:3:78",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 21847,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "value",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "615:9:78",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "hexValue": "323030303030",
                                  "id": 21843,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "601:6:78",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_200000_by_1",
                                    "typeString": "int_const 200000"
                                  },
                                  "value": "200000"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_200000_by_1",
                                    "typeString": "int_const 200000"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 21840,
                                    "name": "_contract",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 21814,
                                    "src": "582:9:78",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "id": 21841,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "call",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "582:14:78",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_barecall_payable$__$returns$_t_bool_$",
                                    "typeString": "function () payable returns (bool)"
                                  }
                                },
                                "id": 21842,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "gas",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "582:18:78",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_setgas_nonpayable$_t_uint256_$returns$_t_function_barecall_payable$__$returns$_t_bool_$gas_$",
                                  "typeString": "function (uint256) returns (function () payable returns (bool))"
                                }
                              },
                              "id": 21844,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "582:26:78",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_barecall_payable$__$returns$_t_bool_$gas",
                                "typeString": "function () payable returns (bool)"
                              }
                            },
                            "id": 21845,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "582:32:78",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_setvalue_nonpayable$_t_uint256_$returns$_t_function_barecall_payable$__$returns$_t_bool_$gasvalue_$gas",
                              "typeString": "function (uint256) returns (function () payable returns (bool))"
                            }
                          },
                          "id": 21848,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "582:43:78",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_barecall_payable$__$returns$_t_bool_$gasvalue",
                            "typeString": "function () payable returns (bool)"
                          }
                        },
                        "id": 21851,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "582:63:78",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "id": 21852,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "581:65:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 21826,
                  "id": 21853,
                  "nodeType": "Return",
                  "src": "575:71:78"
                }
              ]
            },
            "documentation": null,
            "id": 21855,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "execute",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 21823,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21814,
                  "name": "_contract",
                  "nodeType": "VariableDeclaration",
                  "scope": 21855,
                  "src": "313:17:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 21813,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "313:7:78",
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
                  "id": 21816,
                  "name": "_methodID",
                  "nodeType": "VariableDeclaration",
                  "scope": 21855,
                  "src": "332:16:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 21815,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "332:6:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 21818,
                  "name": "_params",
                  "nodeType": "VariableDeclaration",
                  "scope": 21855,
                  "src": "350:13:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 21817,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "350:5:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 21820,
                  "name": "_proposalID",
                  "nodeType": "VariableDeclaration",
                  "scope": 21855,
                  "src": "365:19:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 21819,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "365:7:78",
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
                  "id": 21822,
                  "name": "_votingInterface",
                  "nodeType": "VariableDeclaration",
                  "scope": 21855,
                  "src": "386:24:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 21821,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "386:7:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "312:99:78"
            },
            "payable": true,
            "returnParameters": {
              "id": 21826,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21825,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 21855,
                  "src": "444:4:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 21824,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "444:4:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "443:6:78"
            },
            "scope": 21856,
            "src": "296:355:78",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 21857,
        "src": "208:445:78"
      }
    ],
    "src": "0:654:78"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-12-03T18:35:12.221Z"
}