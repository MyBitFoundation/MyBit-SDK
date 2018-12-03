"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var TestUtils = exports.TestUtils = 
{
  "contractName": "TestUtils",
  "abi": [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_x",
          "type": "uint256"
        },
        {
          "name": "_y",
          "type": "uint256"
        }
      ],
      "name": "testSafeAdd",
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
          "name": "_x",
          "type": "uint256"
        },
        {
          "name": "_y",
          "type": "uint256"
        }
      ],
      "name": "testSafeSub",
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
          "name": "_x",
          "type": "uint256"
        },
        {
          "name": "_y",
          "type": "uint256"
        }
      ],
      "name": "testSafeMul",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5061015a806100206000396000f3006080604052600436106100565763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416639ee6ff70811461005b578063de47864c14610088578063ec0da330146100a3575b600080fd5b34801561006757600080fd5b506100766004356024356100be565b60408051918252519081900360200190f35b34801561009457600080fd5b506100766004356024356100d1565b3480156100af57600080fd5b506100766004356024356100dd565b60006100ca83836100e9565b9392505050565b60006100ca838361010d565b60006100ca838361011c565b6000828202831580610105575082848281151561010257fe5b04145b15156100ca57fe5b6000828201838110156100ca57fe5b60008183101561012857fe5b509003905600a165627a7a723058209c66d1b9fc00333702289ab54c3e59b8ff28f552baf37a711d12cdd0315cab5c0029",
  "deployedBytecode": "0x6080604052600436106100565763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416639ee6ff70811461005b578063de47864c14610088578063ec0da330146100a3575b600080fd5b34801561006757600080fd5b506100766004356024356100be565b60408051918252519081900360200190f35b34801561009457600080fd5b506100766004356024356100d1565b3480156100af57600080fd5b506100766004356024356100dd565b60006100ca83836100e9565b9392505050565b60006100ca838361010d565b60006100ca838361011c565b6000828202831580610105575082848281151561010257fe5b04145b15156100ca57fe5b6000828201838110156100ca57fe5b60008183101561012857fe5b509003905600a165627a7a723058209c66d1b9fc00333702289ab54c3e59b8ff28f552baf37a711d12cdd0315cab5c0029",
  "sourceMap": "122:442:23:-;;;156:28;8:9:-1;5:2;;;30:1;27;20:12;5:2;156:28:23;122:442;;;;;;",
  "deployedSourceMap": "122:442:23:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;442:120;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;442:120:23;;;;;;;;;;;;;;;;;;;;;;;190;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;190:120:23;;;;;;;316;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;316:120:23;;;;;;;442;508:7;534:21;548:2;552;534:13;:21::i;:::-;527:28;442:120;-1:-1:-1;;;442:120:23:o;190:::-;256:7;282:21;296:2;300;282:13;:21::i;316:120::-;382:7;408:21;422:2;426;408:13;:21::i;1569:168:37:-;1633:7;1664;;;1688;;;:23;;;1709:2;1703;1699:1;:6;;;;;;;;:12;1688:23;1681:31;;;;;870:152;934:7;965;;;989;;;;982:15;;;1239:130;1303:7;1329:8;;;;1322:16;;;;-1:-1:-1;1355:7:37;;;1239:130::o",
  "source": "pragma solidity ^0.4.24;\nimport '../utility/Utils.sol';\n\n/*\n    Utils test helper that exposes the safe math functions\n*/\ncontract TestUtils is Utils {\n    constructor() public {\n    }\n\n    function testSafeAdd(uint256 _x, uint256 _y) public pure returns (uint256) {\n        return super.safeAdd(_x, _y);\n    }\n\n    function testSafeSub(uint256 _x, uint256 _y) public pure returns (uint256) {\n        return super.safeSub(_x, _y);\n    }\n\n    function testSafeMul(uint256 _x, uint256 _y) public pure returns (uint256) {\n        return super.safeMul(_x, _y);\n    }\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/helpers/TestUtils.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/helpers/TestUtils.sol",
    "exportedSymbols": {
      "TestUtils": [
        7966
      ]
    },
    "id": 7967,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 7910,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:23"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/Utils.sol",
        "file": "../utility/Utils.sol",
        "id": 7911,
        "nodeType": "ImportDirective",
        "scope": 7967,
        "sourceUnit": 9682,
        "src": "25:30:23",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 7912,
              "name": "Utils",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9681,
              "src": "144:5:23",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Utils_$9681",
                "typeString": "contract Utils"
              }
            },
            "id": 7913,
            "nodeType": "InheritanceSpecifier",
            "src": "144:5:23"
          }
        ],
        "contractDependencies": [
          9681
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 7966,
        "linearizedBaseContracts": [
          7966,
          9681
        ],
        "name": "TestUtils",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 7916,
              "nodeType": "Block",
              "src": "177:7:23",
              "statements": []
            },
            "documentation": null,
            "id": 7917,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7914,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "167:2:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 7915,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "177:0:23"
            },
            "scope": 7966,
            "src": "156:28:23",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7932,
              "nodeType": "Block",
              "src": "265:45:23",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7928,
                        "name": "_x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7919,
                        "src": "296:2:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7929,
                        "name": "_y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7921,
                        "src": "300:2:23",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 7926,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28014,
                        "src": "282:5:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_TestUtils_$7966",
                          "typeString": "contract super TestUtils"
                        }
                      },
                      "id": 7927,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "safeAdd",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9630,
                      "src": "282:13:23",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 7930,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "282:21:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 7925,
                  "id": 7931,
                  "nodeType": "Return",
                  "src": "275:28:23"
                }
              ]
            },
            "documentation": null,
            "id": 7933,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "testSafeAdd",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7922,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7919,
                  "name": "_x",
                  "nodeType": "VariableDeclaration",
                  "scope": 7933,
                  "src": "211:10:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7918,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "211:7:23",
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
                  "id": 7921,
                  "name": "_y",
                  "nodeType": "VariableDeclaration",
                  "scope": 7933,
                  "src": "223:10:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7920,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "223:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "210:24:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 7925,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7924,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7933,
                  "src": "256:7:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7923,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "256:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "255:9:23"
            },
            "scope": 7966,
            "src": "190:120:23",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7948,
              "nodeType": "Block",
              "src": "391:45:23",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7944,
                        "name": "_x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7935,
                        "src": "422:2:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7945,
                        "name": "_y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7937,
                        "src": "426:2:23",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 7942,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28014,
                        "src": "408:5:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_TestUtils_$7966",
                          "typeString": "contract super TestUtils"
                        }
                      },
                      "id": 7943,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "safeSub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9650,
                      "src": "408:13:23",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 7946,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "408:21:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 7941,
                  "id": 7947,
                  "nodeType": "Return",
                  "src": "401:28:23"
                }
              ]
            },
            "documentation": null,
            "id": 7949,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "testSafeSub",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7938,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7935,
                  "name": "_x",
                  "nodeType": "VariableDeclaration",
                  "scope": 7949,
                  "src": "337:10:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7934,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "337:7:23",
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
                  "id": 7937,
                  "name": "_y",
                  "nodeType": "VariableDeclaration",
                  "scope": 7949,
                  "src": "349:10:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7936,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "349:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "336:24:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 7941,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7940,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7949,
                  "src": "382:7:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7939,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "382:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "381:9:23"
            },
            "scope": 7966,
            "src": "316:120:23",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7964,
              "nodeType": "Block",
              "src": "517:45:23",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7960,
                        "name": "_x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7951,
                        "src": "548:2:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7961,
                        "name": "_y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7953,
                        "src": "552:2:23",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 7958,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28014,
                        "src": "534:5:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_TestUtils_$7966",
                          "typeString": "contract super TestUtils"
                        }
                      },
                      "id": 7959,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "safeMul",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9680,
                      "src": "534:13:23",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 7962,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "534:21:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 7957,
                  "id": 7963,
                  "nodeType": "Return",
                  "src": "527:28:23"
                }
              ]
            },
            "documentation": null,
            "id": 7965,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "testSafeMul",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7954,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7951,
                  "name": "_x",
                  "nodeType": "VariableDeclaration",
                  "scope": 7965,
                  "src": "463:10:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7950,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "463:7:23",
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
                  "id": 7953,
                  "name": "_y",
                  "nodeType": "VariableDeclaration",
                  "scope": 7965,
                  "src": "475:10:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7952,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "475:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "462:24:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 7957,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7956,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7965,
                  "src": "508:7:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7955,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "508:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "507:9:23"
            },
            "scope": 7966,
            "src": "442:120:23",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 7967,
        "src": "122:442:23"
      }
    ],
    "src": "0:565:23"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/helpers/TestUtils.sol",
    "exportedSymbols": {
      "TestUtils": [
        7966
      ]
    },
    "id": 7967,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 7910,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:23"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/Utils.sol",
        "file": "../utility/Utils.sol",
        "id": 7911,
        "nodeType": "ImportDirective",
        "scope": 7967,
        "sourceUnit": 9682,
        "src": "25:30:23",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 7912,
              "name": "Utils",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9681,
              "src": "144:5:23",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Utils_$9681",
                "typeString": "contract Utils"
              }
            },
            "id": 7913,
            "nodeType": "InheritanceSpecifier",
            "src": "144:5:23"
          }
        ],
        "contractDependencies": [
          9681
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 7966,
        "linearizedBaseContracts": [
          7966,
          9681
        ],
        "name": "TestUtils",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 7916,
              "nodeType": "Block",
              "src": "177:7:23",
              "statements": []
            },
            "documentation": null,
            "id": 7917,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7914,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "167:2:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 7915,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "177:0:23"
            },
            "scope": 7966,
            "src": "156:28:23",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7932,
              "nodeType": "Block",
              "src": "265:45:23",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7928,
                        "name": "_x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7919,
                        "src": "296:2:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7929,
                        "name": "_y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7921,
                        "src": "300:2:23",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 7926,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28014,
                        "src": "282:5:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_TestUtils_$7966",
                          "typeString": "contract super TestUtils"
                        }
                      },
                      "id": 7927,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "safeAdd",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9630,
                      "src": "282:13:23",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 7930,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "282:21:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 7925,
                  "id": 7931,
                  "nodeType": "Return",
                  "src": "275:28:23"
                }
              ]
            },
            "documentation": null,
            "id": 7933,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "testSafeAdd",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7922,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7919,
                  "name": "_x",
                  "nodeType": "VariableDeclaration",
                  "scope": 7933,
                  "src": "211:10:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7918,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "211:7:23",
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
                  "id": 7921,
                  "name": "_y",
                  "nodeType": "VariableDeclaration",
                  "scope": 7933,
                  "src": "223:10:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7920,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "223:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "210:24:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 7925,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7924,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7933,
                  "src": "256:7:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7923,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "256:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "255:9:23"
            },
            "scope": 7966,
            "src": "190:120:23",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7948,
              "nodeType": "Block",
              "src": "391:45:23",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7944,
                        "name": "_x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7935,
                        "src": "422:2:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7945,
                        "name": "_y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7937,
                        "src": "426:2:23",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 7942,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28014,
                        "src": "408:5:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_TestUtils_$7966",
                          "typeString": "contract super TestUtils"
                        }
                      },
                      "id": 7943,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "safeSub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9650,
                      "src": "408:13:23",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 7946,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "408:21:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 7941,
                  "id": 7947,
                  "nodeType": "Return",
                  "src": "401:28:23"
                }
              ]
            },
            "documentation": null,
            "id": 7949,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "testSafeSub",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7938,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7935,
                  "name": "_x",
                  "nodeType": "VariableDeclaration",
                  "scope": 7949,
                  "src": "337:10:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7934,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "337:7:23",
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
                  "id": 7937,
                  "name": "_y",
                  "nodeType": "VariableDeclaration",
                  "scope": 7949,
                  "src": "349:10:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7936,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "349:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "336:24:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 7941,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7940,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7949,
                  "src": "382:7:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7939,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "382:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "381:9:23"
            },
            "scope": 7966,
            "src": "316:120:23",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7964,
              "nodeType": "Block",
              "src": "517:45:23",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7960,
                        "name": "_x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7951,
                        "src": "548:2:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7961,
                        "name": "_y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7953,
                        "src": "552:2:23",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 7958,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28014,
                        "src": "534:5:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_TestUtils_$7966",
                          "typeString": "contract super TestUtils"
                        }
                      },
                      "id": 7959,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "safeMul",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9680,
                      "src": "534:13:23",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 7962,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "534:21:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 7957,
                  "id": 7963,
                  "nodeType": "Return",
                  "src": "527:28:23"
                }
              ]
            },
            "documentation": null,
            "id": 7965,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "testSafeMul",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7954,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7951,
                  "name": "_x",
                  "nodeType": "VariableDeclaration",
                  "scope": 7965,
                  "src": "463:10:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7950,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "463:7:23",
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
                  "id": 7953,
                  "name": "_y",
                  "nodeType": "VariableDeclaration",
                  "scope": 7965,
                  "src": "475:10:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7952,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "475:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "462:24:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 7957,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7956,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7965,
                  "src": "508:7:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7955,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "508:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "507:9:23"
            },
            "scope": 7966,
            "src": "442:120:23",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 7967,
        "src": "122:442:23"
      }
    ],
    "src": "0:565:23"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-12-03T18:35:11.933Z"
}