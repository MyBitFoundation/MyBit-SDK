"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var SafeMathWrapper = exports.SafeMathWrapper = 
{
  "contractName": "SafeMathWrapper",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "a",
          "type": "uint256"
        },
        {
          "name": "b",
          "type": "uint256"
        }
      ],
      "name": "multiply",
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
          "name": "a",
          "type": "uint256"
        },
        {
          "name": "b",
          "type": "uint256"
        }
      ],
      "name": "divide",
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
          "name": "a",
          "type": "uint256"
        },
        {
          "name": "b",
          "type": "uint256"
        }
      ],
      "name": "subtract",
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
          "name": "a",
          "type": "uint256"
        },
        {
          "name": "b",
          "type": "uint256"
        }
      ],
      "name": "addto",
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
          "name": "a",
          "type": "uint256"
        },
        {
          "name": "b",
          "type": "uint256"
        }
      ],
      "name": "fraction",
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
  "bytecode": "0x608060405234801561001057600080fd5b50610219806100206000396000f30060806040526004361061006c5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630ec410f381146100715780630f1530e41461009e578063165c4a16146100b95780633ef5e445146100d4578063f88e9fbf146100ef575b600080fd5b34801561007d57600080fd5b5061008c60043560243561010a565b60408051918252519081900360200190f35b3480156100aa57600080fd5b5061008c600435602435610123565b3480156100c557600080fd5b5061008c600435602435610135565b3480156100e057600080fd5b5061008c600435602435610147565b3480156100fb57600080fd5b5061008c600435602435610159565b600061011c838363ffffffff61016b16565b9392505050565b600061011c838363ffffffff61018516565b600061011c838363ffffffff61019b16565b600061011c838363ffffffff6101c616565b600061011c838363ffffffff6101d816565b60008282018381101561017a57fe5b8091505b5092915050565b600061011c610194848461019b565b60646101d8565b6000808315156101ae576000915061017e565b508282028284828115156101be57fe5b041461017a57fe5b6000828211156101d257fe5b50900390565b600081838115156101e557fe5b0493925050505600a165627a7a723058203c5221807e54f87d567fdbec745833571151742c30dab056befcc32a3267c01b0029",
  "deployedBytecode": "0x60806040526004361061006c5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630ec410f381146100715780630f1530e41461009e578063165c4a16146100b95780633ef5e445146100d4578063f88e9fbf146100ef575b600080fd5b34801561007d57600080fd5b5061008c60043560243561010a565b60408051918252519081900360200190f35b3480156100aa57600080fd5b5061008c600435602435610123565b3480156100c557600080fd5b5061008c600435602435610135565b3480156100e057600080fd5b5061008c600435602435610147565b3480156100fb57600080fd5b5061008c600435602435610159565b600061011c838363ffffffff61016b16565b9392505050565b600061011c838363ffffffff61018516565b600061011c838363ffffffff61019b16565b600061011c838363ffffffff6101c616565b600061011c838363ffffffff6101d816565b60008282018381101561017a57fe5b8091505b5092915050565b600061011c610194848461019b565b60646101d8565b6000808315156101ae576000915061017e565b508282028284828115156101be57fe5b041461017a57fe5b6000828211156101d257fe5b50900390565b600081838115156101e557fe5b0493925050505600a165627a7a723058203c5221807e54f87d567fdbec745833571151742c30dab056befcc32a3267c01b0029",
  "sourceMap": "58:604:86:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;58:604:86;;;;;;;",
  "deployedSourceMap": "58:604:86:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;447:95;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;447:95:86;;;;;;;;;;;;;;;;;;;;;;;546:114;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;546:114:86;;;;;;;143:98;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;143:98:86;;;;;;;345;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;345:98:86;;;;;;;245:96;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;245:96:86;;;;;;;447:95;507:7;529:8;:1;535;529:8;:5;:8;:::i;:::-;522:15;447:95;-1:-1:-1;;;447:95:86:o;546:114::-;609:7;631:24;:1;653;631:24;:21;:24;:::i;143:98::-;206:7;228:8;:1;234;228:8;:5;:8;:::i;345:98::-;408:7;430:8;:1;436;430:8;:5;:8;:::i;245:96::-;306:7;328:8;:1;334;328:8;:5;:8;:::i;1101:129:70:-;1159:7;1186:5;;;1204:6;;;;1197:14;;;;1224:1;1217:8;;1101:129;;;;;;:::o;1273:158::-;1369:7;1391:35;1395:25;1399:7;1408:11;1395:3;:25::i;:::-;1422:3;1391;:35::i;311:173::-;369:7;;388:6;;384:35;;;411:1;404:8;;;;384:35;-1:-1:-1;436:5:70;;;440:1;436;:5;454;;;;;;;;:10;447:18;;;936:110;994:7;1016:6;;;;1009:14;;;;-1:-1:-1;1036:5:70;;;936:110::o;559:272::-;617:7;825:1;821;:5;;;;;;;;;559:272;-1:-1:-1;;;559:272:70:o",
  "source": "pragma solidity ^0.4.24;\n\nimport \"../math/SafeMath.sol\";\n\ncontract SafeMathWrapper {\n  using SafeMath for uint;\n  using SafeMath for bytes;\n\n  function multiply(uint256 a, uint256 b) external pure returns (uint256) {\n    return a.mul(b);\n  }\n\n  function divide(uint256 a, uint256 b) external pure returns (uint256) {\n    return a.div(b);\n  }\n\n  function subtract(uint256 a, uint256 b) external pure returns (uint256) {\n    return a.sub(b);\n  }\n\n  function addto(uint256 a, uint256 b) external pure returns (uint256) {\n    return a.add(b);\n  }\n\n  function fraction(uint256 a, uint256 b) external pure returns (uint256) {\n    return a.getFractionalAmount(b);\n  }\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/SafeMathWrapper.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/SafeMathWrapper.sol",
    "exportedSymbols": {
      "SafeMathWrapper": [
        25520
      ]
    },
    "id": 25521,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 25437,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:86"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../math/SafeMath.sol",
        "id": 25438,
        "nodeType": "ImportDirective",
        "scope": 25521,
        "sourceUnit": 17338,
        "src": "26:30:86",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 25520,
        "linearizedBaseContracts": [
          25520
        ],
        "name": "SafeMathWrapper",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 25441,
            "libraryName": {
              "contractScope": null,
              "id": 25439,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 17337,
              "src": "93:8:86",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$17337",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "87:24:86",
            "typeName": {
              "id": 25440,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "106:4:86",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 25444,
            "libraryName": {
              "contractScope": null,
              "id": 25442,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 17337,
              "src": "120:8:86",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$17337",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "114:25:86",
            "typeName": {
              "id": 25443,
              "name": "bytes",
              "nodeType": "ElementaryTypeName",
              "src": "133:5:86",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes_storage_ptr",
                "typeString": "bytes"
              }
            }
          },
          {
            "body": {
              "id": 25458,
              "nodeType": "Block",
              "src": "215:26:86",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 25455,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25448,
                        "src": "234:1:86",
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
                        "id": 25453,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25446,
                        "src": "228:1:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 25454,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "mul",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 17260,
                      "src": "228:5:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 25456,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "228:8:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 25452,
                  "id": 25457,
                  "nodeType": "Return",
                  "src": "221:15:86"
                }
              ]
            },
            "documentation": null,
            "id": 25459,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "multiply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25449,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25446,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 25459,
                  "src": "161:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25445,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "161:7:86",
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
                  "id": 25448,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 25459,
                  "src": "172:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25447,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "172:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "160:22:86"
            },
            "payable": false,
            "returnParameters": {
              "id": 25452,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25451,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 25459,
                  "src": "206:7:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25450,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "206:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "205:9:86"
            },
            "scope": 25520,
            "src": "143:98:86",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 25473,
              "nodeType": "Block",
              "src": "315:26:86",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 25470,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25463,
                        "src": "334:1:86",
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
                        "id": 25468,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25461,
                        "src": "328:1:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 25469,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "div",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 17274,
                      "src": "328:5:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 25471,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "328:8:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 25467,
                  "id": 25472,
                  "nodeType": "Return",
                  "src": "321:15:86"
                }
              ]
            },
            "documentation": null,
            "id": 25474,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "divide",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25464,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25461,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 25474,
                  "src": "261:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25460,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "261:7:86",
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
                  "id": 25463,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 25474,
                  "src": "272:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25462,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "272:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "260:22:86"
            },
            "payable": false,
            "returnParameters": {
              "id": 25467,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25466,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 25474,
                  "src": "306:7:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25465,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "306:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "305:9:86"
            },
            "scope": 25520,
            "src": "245:96:86",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 25488,
              "nodeType": "Block",
              "src": "417:26:86",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 25485,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25478,
                        "src": "436:1:86",
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
                        "id": 25483,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25476,
                        "src": "430:1:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 25484,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 17294,
                      "src": "430:5:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 25486,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "430:8:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 25482,
                  "id": 25487,
                  "nodeType": "Return",
                  "src": "423:15:86"
                }
              ]
            },
            "documentation": null,
            "id": 25489,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "subtract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25479,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25476,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 25489,
                  "src": "363:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25475,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "363:7:86",
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
                  "id": 25478,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 25489,
                  "src": "374:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25477,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "374:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "362:22:86"
            },
            "payable": false,
            "returnParameters": {
              "id": 25482,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25481,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 25489,
                  "src": "408:7:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25480,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "408:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "407:9:86"
            },
            "scope": 25520,
            "src": "345:98:86",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 25503,
              "nodeType": "Block",
              "src": "516:26:86",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 25500,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25493,
                        "src": "535:1:86",
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
                        "id": 25498,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25491,
                        "src": "529:1:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 25499,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 17318,
                      "src": "529:5:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 25501,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "529:8:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 25497,
                  "id": 25502,
                  "nodeType": "Return",
                  "src": "522:15:86"
                }
              ]
            },
            "documentation": null,
            "id": 25504,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "addto",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25494,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25491,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 25504,
                  "src": "462:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25490,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "462:7:86",
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
                  "id": 25493,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 25504,
                  "src": "473:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25492,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "473:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "461:22:86"
            },
            "payable": false,
            "returnParameters": {
              "id": 25497,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25496,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 25504,
                  "src": "507:7:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25495,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "507:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "506:9:86"
            },
            "scope": 25520,
            "src": "447:95:86",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 25518,
              "nodeType": "Block",
              "src": "618:42:86",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 25515,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25508,
                        "src": "653:1:86",
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
                        "id": 25513,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25506,
                        "src": "631:1:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 25514,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getFractionalAmount",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 17336,
                      "src": "631:21:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 25516,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "631:24:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 25512,
                  "id": 25517,
                  "nodeType": "Return",
                  "src": "624:31:86"
                }
              ]
            },
            "documentation": null,
            "id": 25519,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "fraction",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25509,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25506,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 25519,
                  "src": "564:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25505,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "564:7:86",
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
                  "id": 25508,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 25519,
                  "src": "575:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25507,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "575:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "563:22:86"
            },
            "payable": false,
            "returnParameters": {
              "id": 25512,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25511,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 25519,
                  "src": "609:7:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25510,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "609:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "608:9:86"
            },
            "scope": 25520,
            "src": "546:114:86",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 25521,
        "src": "58:604:86"
      }
    ],
    "src": "0:663:86"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/SafeMathWrapper.sol",
    "exportedSymbols": {
      "SafeMathWrapper": [
        25520
      ]
    },
    "id": 25521,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 25437,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:86"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../math/SafeMath.sol",
        "id": 25438,
        "nodeType": "ImportDirective",
        "scope": 25521,
        "sourceUnit": 17338,
        "src": "26:30:86",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 25520,
        "linearizedBaseContracts": [
          25520
        ],
        "name": "SafeMathWrapper",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 25441,
            "libraryName": {
              "contractScope": null,
              "id": 25439,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 17337,
              "src": "93:8:86",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$17337",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "87:24:86",
            "typeName": {
              "id": 25440,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "106:4:86",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 25444,
            "libraryName": {
              "contractScope": null,
              "id": 25442,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 17337,
              "src": "120:8:86",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$17337",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "114:25:86",
            "typeName": {
              "id": 25443,
              "name": "bytes",
              "nodeType": "ElementaryTypeName",
              "src": "133:5:86",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes_storage_ptr",
                "typeString": "bytes"
              }
            }
          },
          {
            "body": {
              "id": 25458,
              "nodeType": "Block",
              "src": "215:26:86",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 25455,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25448,
                        "src": "234:1:86",
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
                        "id": 25453,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25446,
                        "src": "228:1:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 25454,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "mul",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 17260,
                      "src": "228:5:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 25456,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "228:8:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 25452,
                  "id": 25457,
                  "nodeType": "Return",
                  "src": "221:15:86"
                }
              ]
            },
            "documentation": null,
            "id": 25459,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "multiply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25449,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25446,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 25459,
                  "src": "161:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25445,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "161:7:86",
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
                  "id": 25448,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 25459,
                  "src": "172:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25447,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "172:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "160:22:86"
            },
            "payable": false,
            "returnParameters": {
              "id": 25452,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25451,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 25459,
                  "src": "206:7:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25450,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "206:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "205:9:86"
            },
            "scope": 25520,
            "src": "143:98:86",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 25473,
              "nodeType": "Block",
              "src": "315:26:86",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 25470,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25463,
                        "src": "334:1:86",
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
                        "id": 25468,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25461,
                        "src": "328:1:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 25469,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "div",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 17274,
                      "src": "328:5:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 25471,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "328:8:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 25467,
                  "id": 25472,
                  "nodeType": "Return",
                  "src": "321:15:86"
                }
              ]
            },
            "documentation": null,
            "id": 25474,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "divide",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25464,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25461,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 25474,
                  "src": "261:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25460,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "261:7:86",
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
                  "id": 25463,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 25474,
                  "src": "272:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25462,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "272:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "260:22:86"
            },
            "payable": false,
            "returnParameters": {
              "id": 25467,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25466,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 25474,
                  "src": "306:7:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25465,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "306:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "305:9:86"
            },
            "scope": 25520,
            "src": "245:96:86",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 25488,
              "nodeType": "Block",
              "src": "417:26:86",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 25485,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25478,
                        "src": "436:1:86",
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
                        "id": 25483,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25476,
                        "src": "430:1:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 25484,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 17294,
                      "src": "430:5:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 25486,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "430:8:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 25482,
                  "id": 25487,
                  "nodeType": "Return",
                  "src": "423:15:86"
                }
              ]
            },
            "documentation": null,
            "id": 25489,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "subtract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25479,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25476,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 25489,
                  "src": "363:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25475,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "363:7:86",
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
                  "id": 25478,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 25489,
                  "src": "374:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25477,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "374:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "362:22:86"
            },
            "payable": false,
            "returnParameters": {
              "id": 25482,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25481,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 25489,
                  "src": "408:7:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25480,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "408:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "407:9:86"
            },
            "scope": 25520,
            "src": "345:98:86",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 25503,
              "nodeType": "Block",
              "src": "516:26:86",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 25500,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25493,
                        "src": "535:1:86",
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
                        "id": 25498,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25491,
                        "src": "529:1:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 25499,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 17318,
                      "src": "529:5:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 25501,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "529:8:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 25497,
                  "id": 25502,
                  "nodeType": "Return",
                  "src": "522:15:86"
                }
              ]
            },
            "documentation": null,
            "id": 25504,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "addto",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25494,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25491,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 25504,
                  "src": "462:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25490,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "462:7:86",
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
                  "id": 25493,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 25504,
                  "src": "473:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25492,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "473:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "461:22:86"
            },
            "payable": false,
            "returnParameters": {
              "id": 25497,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25496,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 25504,
                  "src": "507:7:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25495,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "507:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "506:9:86"
            },
            "scope": 25520,
            "src": "447:95:86",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 25518,
              "nodeType": "Block",
              "src": "618:42:86",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 25515,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25508,
                        "src": "653:1:86",
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
                        "id": 25513,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25506,
                        "src": "631:1:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 25514,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getFractionalAmount",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 17336,
                      "src": "631:21:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 25516,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "631:24:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 25512,
                  "id": 25517,
                  "nodeType": "Return",
                  "src": "624:31:86"
                }
              ]
            },
            "documentation": null,
            "id": 25519,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "fraction",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25509,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25506,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 25519,
                  "src": "564:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25505,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "564:7:86",
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
                  "id": 25508,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 25519,
                  "src": "575:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25507,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "575:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "563:22:86"
            },
            "payable": false,
            "returnParameters": {
              "id": 25512,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25511,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 25519,
                  "src": "609:7:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25510,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "609:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "608:9:86"
            },
            "scope": 25520,
            "src": "546:114:86",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 25521,
        "src": "58:604:86"
      }
    ],
    "src": "0:663:86"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-12-06T01:19:16.910Z"
}