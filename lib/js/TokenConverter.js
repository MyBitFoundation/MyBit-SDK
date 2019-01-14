"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var TokenConverter = exports.TokenConverter = 
{
  "contractName": "TokenConverter",
  "abi": [
    {
      "inputs": [
        {
          "name": "_token",
          "type": "address"
        },
        {
          "name": "_bancorNetwork",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_token",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        },
        {
          "name": "_minimumReturn",
          "type": "uint256"
        }
      ],
      "name": "convertTokenToMyBit",
      "outputs": [],
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
          "name": "_newPath",
          "type": "address[]"
        }
      ],
      "name": "addPath",
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
  "bytecode": "0x608060405234801561001057600080fd5b5060405160408061083483398101604052805160209091015160008054600160a060020a03938416600160a060020a03199182161790915560038054821633179055600180549390921692169190911790556107c3806100716000396000f30060806040526004361061004b5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631f0a3da68114610050578063b1b20d271461006c575b600080fd5b61006a600160a060020a03600435166024356044356100e3565b005b34801561007857600080fd5b506040805160206004602480358281013584810280870186019097528086526100cf968435600160a060020a0316963696604495919490910192918291850190849080828437509497506106a49650505050505050565b604080519115158252519081900360200190f35b60008034151561023257600154604080517f23b872dd000000000000000000000000000000000000000000000000000000008152336004820152600160a060020a039283166024820152604481018790529051879450918416916323b872dd916064808201926020929091908290030181600087803b15801561016557600080fd5b505af1158015610179573d6000803e3d6000fd5b505050506040513d602081101561018f57600080fd5b5050600154604080517f095ea7b3000000000000000000000000000000000000000000000000000000008152600160a060020a0392831660048201526024810187905290519184169163095ea7b3916044808201926020929091908290030181600087803b15801561020057600080fd5b505af1158015610214573d6000803e3d6000fd5b505050506040513d602081101561022a57600080fd5b506102429050565b34841461023e57600080fd5b8491505b600154600160a060020a038381166000908152600260205260409081902090517ff3898a970000000000000000000000000000000000000000000000000000000081526024810188905260448101879052606060048201908152825460648301819052939094169363f3898a97938992899291829160840190869080156102f257602002820191906000526020600020905b8154600160a060020a031681526001909101906020018083116102d4575b5050945050505050602060405180830381600087803b15801561031457600080fd5b505af1158015610328573d6000803e3d6000fd5b505050506040513d602081101561033e57600080fd5b50519050828110156103b157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f5472616e73616374696f6e206661696c65642e00000000000000000000000000604482015290519081900360640190fd5b60008054604080517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290518493600160a060020a03909316926370a0823192602480820193602093909283900390910190829087803b15801561041b57600080fd5b505af115801561042f573d6000803e3d6000fd5b505050506040513d602081101561044557600080fd5b5051146104d957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5472616e73616374696f6e206661696c6564207769746820646966666572656e60448201527f742072657475726e207468616e20657870656374656400000000000000000000606482015290519081900360840190fd5b60008054604080517fa9059cbb000000000000000000000000000000000000000000000000000000008152336004820152602481018590529051600160a060020a039092169263a9059cbb926044808401936020939083900390910190829087803b15801561054757600080fd5b505af115801561055b573d6000803e3d6000fd5b505050506040513d602081101561057157600080fd5b5050604080517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529051600160a060020a0384169163a9059cbb91339184916370a08231916024808201926020929091908290030181600087803b1580156105df57600080fd5b505af11580156105f3573d6000803e3d6000fd5b505050506040513d602081101561060957600080fd5b5051604080517c010000000000000000000000000000000000000000000000000000000063ffffffff8616028152600160a060020a03909316600484015260248301919091525160448083019260209291908290030181600087803b15801561067157600080fd5b505af1158015610685573d6000803e3d6000fd5b505050506040513d602081101561069b57600080fd5b50505050505050565b600354600090600160a060020a031633146106be57600080fd5b600160a060020a038316600090815260026020908152604090912083516106e7928501906106f1565b5060019392505050565b828054828255906000526020600020908101928215610753579160200282015b82811115610753578251825473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909116178255602090920191600190910190610711565b5061075f929150610763565b5090565b61079491905b8082111561075f57805473ffffffffffffffffffffffffffffffffffffffff19168155600101610769565b905600a165627a7a72305820ffc3068a5d0254edd74a6f6b632d4f07e68fbd04e219aed39189fa3f8418de700029",
  "deployedBytecode": "0x60806040526004361061004b5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631f0a3da68114610050578063b1b20d271461006c575b600080fd5b61006a600160a060020a03600435166024356044356100e3565b005b34801561007857600080fd5b506040805160206004602480358281013584810280870186019097528086526100cf968435600160a060020a0316963696604495919490910192918291850190849080828437509497506106a49650505050505050565b604080519115158252519081900360200190f35b60008034151561023257600154604080517f23b872dd000000000000000000000000000000000000000000000000000000008152336004820152600160a060020a039283166024820152604481018790529051879450918416916323b872dd916064808201926020929091908290030181600087803b15801561016557600080fd5b505af1158015610179573d6000803e3d6000fd5b505050506040513d602081101561018f57600080fd5b5050600154604080517f095ea7b3000000000000000000000000000000000000000000000000000000008152600160a060020a0392831660048201526024810187905290519184169163095ea7b3916044808201926020929091908290030181600087803b15801561020057600080fd5b505af1158015610214573d6000803e3d6000fd5b505050506040513d602081101561022a57600080fd5b506102429050565b34841461023e57600080fd5b8491505b600154600160a060020a038381166000908152600260205260409081902090517ff3898a970000000000000000000000000000000000000000000000000000000081526024810188905260448101879052606060048201908152825460648301819052939094169363f3898a97938992899291829160840190869080156102f257602002820191906000526020600020905b8154600160a060020a031681526001909101906020018083116102d4575b5050945050505050602060405180830381600087803b15801561031457600080fd5b505af1158015610328573d6000803e3d6000fd5b505050506040513d602081101561033e57600080fd5b50519050828110156103b157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f5472616e73616374696f6e206661696c65642e00000000000000000000000000604482015290519081900360640190fd5b60008054604080517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290518493600160a060020a03909316926370a0823192602480820193602093909283900390910190829087803b15801561041b57600080fd5b505af115801561042f573d6000803e3d6000fd5b505050506040513d602081101561044557600080fd5b5051146104d957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5472616e73616374696f6e206661696c6564207769746820646966666572656e60448201527f742072657475726e207468616e20657870656374656400000000000000000000606482015290519081900360840190fd5b60008054604080517fa9059cbb000000000000000000000000000000000000000000000000000000008152336004820152602481018590529051600160a060020a039092169263a9059cbb926044808401936020939083900390910190829087803b15801561054757600080fd5b505af115801561055b573d6000803e3d6000fd5b505050506040513d602081101561057157600080fd5b5050604080517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529051600160a060020a0384169163a9059cbb91339184916370a08231916024808201926020929091908290030181600087803b1580156105df57600080fd5b505af11580156105f3573d6000803e3d6000fd5b505050506040513d602081101561060957600080fd5b5051604080517c010000000000000000000000000000000000000000000000000000000063ffffffff8616028152600160a060020a03909316600484015260248301919091525160448083019260209291908290030181600087803b15801561067157600080fd5b505af1158015610685573d6000803e3d6000fd5b505050506040513d602081101561069b57600080fd5b50505050505050565b600354600090600160a060020a031633146106be57600080fd5b600160a060020a038316600090815260026020908152604090912083516106e7928501906106f1565b5060019392505050565b828054828255906000526020600020908101928215610753579160200282015b82811115610753578251825473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909116178255602090920191600190910190610711565b5061075f929150610763565b5090565b61079491905b8082111561075f57805473ffffffffffffffffffffffffffffffffffffffff19168155600101610769565b905600a165627a7a72305820ffc3068a5d0254edd74a6f6b632d4f07e68fbd04e219aed39189fa3f8418de700029",
  "sourceMap": "454:2064:56:-;;;729:210;8:9:-1;5:2;;;30:1;27;20:12;5:2;729:210:56;;;;;;;;;;;;;;;;;;;849:10;:19;;-1:-1:-1;;;;;849:19:56;;;-1:-1:-1;;;;;;849:19:56;;;;;;;876:5;:18;;;;884:10;876:18;;;849:19;902:30;;;;;;;;;;;;;;454:2064;;;;;;",
  "deployedSourceMap": "454:2064:56:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;1222:966;;-1:-1:-1;;;;;1222:966:56;;;;;;;;;;;2194:155;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2194:155:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2194:155:56;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;2194:155:56;;-1:-1:-1;2194:155:56;;-1:-1:-1;;;;;;;2194:155:56;;;;;;;;;;;;;;;;;;;1222:966;1335:17;;1364:9;:14;1360:365;;;1549:13;;1518:54;;;;;;1537:10;1518:54;;;;-1:-1:-1;;;;;1549:13:56;;;1518:54;;;;;;;;;;;;1499:6;;-1:-1:-1;1518:18:56;;;;;;:54;;;;;;;;;;;;;;;1549:13;1518:18;:54;;;5:2:-1;;;;30:1;27;20:12;5:2;1518:54:56;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1518:54:56;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;1598:13:56;;1584:37;;;;;;-1:-1:-1;;;;;1598:13:56;;;1584:37;;;;;;;;;;;;:13;;;;;;:37;;;;;1518:54;;1584:37;;;;;;;;1598:13;1584;:37;;;5:2:-1;;;;30:1;27;20:12;5:2;1584:37:56;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1584:37:56;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1360:365:56;;-1:-1:-1;1360:365:56;;1667:9;1656:20;;1648:29;;;;;;1709:6;1689:27;;1360:365;1769:13;;-1:-1:-1;;;;;1803:20:56;;;1769:13;1803:20;;;:4;:20;;;;;;;1754:122;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1769:13;;;;;1754:37;;1835:7;;1854:14;;1754:122;;;;;;1803:20;;1754:122;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1754:122:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1754:122:56;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1754:122:56;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1754:122:56;;-1:-1:-1;1893:32:56;;;;1884:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1966:10;;;:26;;;;;;1987:4;1966:26;;;;;;1996:14;;-1:-1:-1;;;;;1966:10:56;;;;:20;;:26;;;;;;;;;;;;;;;;;;:10;:26;;;5:2:-1;;;;30:1;27;20:12;5:2;1966:26:56;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1966:26:56;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1966:26:56;:44;1957:112;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2077:10;;;:47;;;;;;2097:10;2077:47;;;;;;;;;;;;-1:-1:-1;;;;;2077:10:56;;;;:19;;:47;;;;;;;;;;;;;;;;;:10;:47;;;5:2:-1;;;;30:1;27;20:12;5:2;2077:47:56;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2077:47:56;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;2159:21:56;;;;;;2175:4;2159:21;;;;;;-1:-1:-1;;;;;2132:14:56;;;;;2147:10;;2132:14;;2159:15;;:21;;;;;2077:47;;2159:21;;;;;;;;-1:-1:-1;2132:14:56;2159:21;;;5:2:-1;;;;30:1;27;20:12;5:2;2159:21:56;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2159:21:56;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;2159:21:56;2132:49;;;;;;;;;;-1:-1:-1;;;;;2132:49:56;;;;;;;;;;;;;;;;;;;;2159:21;;2132:49;;;;;;;-1:-1:-1;2132:49:56;;;;5:2:-1;;;;30:1;27;20:12;5:2;2132:49:56;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2132:49:56;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;;;1222:966:56:o;2194:155::-;2479:5;;2288:4;;-1:-1:-1;;;;;2479:5:56;2488:10;2479:19;2471:28;;;;;;-1:-1:-1;;;;;2301:11:56;;;;;;:4;:11;;;;;;;;:22;;;;;;;;:::i;:::-;-1:-1:-1;2338:4:56;;2194:155;-1:-1:-1;;;2194:155:56:o;454:2064::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;454:2064:56;-1:-1:-1;;;;;454:2064:56;;;;;;;;;;;-1:-1:-1;454:2064:56;;;;;;;-1:-1:-1;454:2064:56;;;-1:-1:-1;454:2064:56;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;-1:-1:-1;;454:2064:56;;;;;;;;;:::o",
  "source": "pragma solidity ^0.4.24;\n\nimport \"../bancor/IBancorNetwork.sol\";\nimport \"../bancor/token/EtherToken.sol\";\nimport \"../bancor/token/interfaces/IERC20Token.sol\";\nimport \"../bancor/token/interfaces/ISmartToken.sol\";\nimport \"../bancor/token/interfaces/IEtherToken.sol\";\nimport \"../bancor/token/SmartToken.sol\";\nimport \"../interfaces/DBInterface.sol\";\n\n\n///@title A contract for converting any token into MYB (using Bancor's API)\n///@author Vlad Silviu Farcas\ncontract TokenConverter {\n    //DBInterface private database;\n    IERC20Token private myBitToken;\n    IBancorNetwork private bancorNetwork;\n    mapping(address => IERC20Token[]) private path;\n\n    address owner;\n\n    ///@notice initialise addresses needed for conversion\n    constructor(IERC20Token _token, IBancorNetwork _bancorNetwork) public{\n      //database = DBInterface(_database);\n      myBitToken = _token;\n      owner = msg.sender;\n      bancorNetwork = _bancorNetwork;\n    }\n\n    ///@notice convert some tokens\n    ///@param _token the contract of the token that is about to be converted\n    ///@param _amount the amount of _token that is about to be converted\n    ///@param _minimumReturn the minimum return of MyBit token that is about to be received\n    function convertTokenToMyBit(address _token, uint _amount, uint _minimumReturn)\n    external\n    payable {\n      IERC20Token token;\n      if (msg.value == 0){\n          // require(bancorNetwork.etherTokens(_token) == true, \"Token not supported\");\n          token = ISmartToken(_token);\n          token.transferFrom(msg.sender, bancorNetwork, _amount);\n          token.approve(bancorNetwork, _amount);\n      } else {\n          require(_amount == msg.value);\n          token = IEtherToken(_token);\n      }\n      uint convertedValue = IBancorNetwork(bancorNetwork).convert(\n          path[address(token)],\n          _amount,\n          _minimumReturn\n      );\n      require (convertedValue >= _minimumReturn, \"Transaction failed.\");\n      require (myBitToken.balanceOf(this) == convertedValue, \"Transaction failed with different return than expected\");\n      myBitToken.transfer(msg.sender, convertedValue);\n      token.transfer(msg.sender, token.balanceOf(this));\n    }\n\n    function addPath(address token, IERC20Token[] _newPath)\n    public\n    onlyOwner\n    returns (bool){\n      path[token] = _newPath;\n      return true;\n    }\n\n    modifier onlyOwner {\n      //require(database.boolStorage(keccak256(abi.encodePacked(\"owner\", msg.sender))));\n      require(owner == msg.sender);\n      _;\n    }\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ecosystem/TokenConverter.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ecosystem/TokenConverter.sol",
    "exportedSymbols": {
      "TokenConverter": [
        16605
      ]
    },
    "id": 16606,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 16427,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:56"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/IBancorNetwork.sol",
        "file": "../bancor/IBancorNetwork.sol",
        "id": 16428,
        "nodeType": "ImportDirective",
        "scope": 16606,
        "sourceUnit": 2351,
        "src": "26:38:56",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/EtherToken.sol",
        "file": "../bancor/token/EtherToken.sol",
        "id": 16429,
        "nodeType": "ImportDirective",
        "scope": 16606,
        "sourceUnit": 8498,
        "src": "65:40:56",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/IERC20Token.sol",
        "file": "../bancor/token/interfaces/IERC20Token.sol",
        "id": 16430,
        "nodeType": "ImportDirective",
        "scope": 16606,
        "sourceUnit": 8902,
        "src": "106:52:56",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/ISmartToken.sol",
        "file": "../bancor/token/interfaces/ISmartToken.sol",
        "id": 16431,
        "nodeType": "ImportDirective",
        "scope": 16606,
        "sourceUnit": 8954,
        "src": "159:52:56",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/IEtherToken.sol",
        "file": "../bancor/token/interfaces/IEtherToken.sol",
        "id": 16432,
        "nodeType": "ImportDirective",
        "scope": 16606,
        "sourceUnit": 8926,
        "src": "212:52:56",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/SmartToken.sol",
        "file": "../bancor/token/SmartToken.sol",
        "id": 16433,
        "nodeType": "ImportDirective",
        "scope": 16606,
        "sourceUnit": 8712,
        "src": "265:40:56",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/DBInterface.sol",
        "file": "../interfaces/DBInterface.sol",
        "id": 16434,
        "nodeType": "ImportDirective",
        "scope": 16606,
        "sourceUnit": 16877,
        "src": "306:39:56",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title A contract for converting any token into MYB (using Bancor's API)\n@author Vlad Silviu Farcas",
        "fullyImplemented": true,
        "id": 16605,
        "linearizedBaseContracts": [
          16605
        ],
        "name": "TokenConverter",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 16436,
            "name": "myBitToken",
            "nodeType": "VariableDeclaration",
            "scope": 16605,
            "src": "520:30:56",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IERC20Token_$8901",
              "typeString": "contract IERC20Token"
            },
            "typeName": {
              "contractScope": null,
              "id": 16435,
              "name": "IERC20Token",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8901,
              "src": "520:11:56",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC20Token_$8901",
                "typeString": "contract IERC20Token"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 16438,
            "name": "bancorNetwork",
            "nodeType": "VariableDeclaration",
            "scope": 16605,
            "src": "556:36:56",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IBancorNetwork_$2350",
              "typeString": "contract IBancorNetwork"
            },
            "typeName": {
              "contractScope": null,
              "id": 16437,
              "name": "IBancorNetwork",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2350,
              "src": "556:14:56",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IBancorNetwork_$2350",
                "typeString": "contract IBancorNetwork"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 16443,
            "name": "path",
            "nodeType": "VariableDeclaration",
            "scope": 16605,
            "src": "598:46:56",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_contract$_IERC20Token_$8901_$dyn_storage_$",
              "typeString": "mapping(address => contract IERC20Token[])"
            },
            "typeName": {
              "id": 16442,
              "keyType": {
                "id": 16439,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "606:7:56",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "598:33:56",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_contract$_IERC20Token_$8901_$dyn_storage_$",
                "typeString": "mapping(address => contract IERC20Token[])"
              },
              "valueType": {
                "baseType": {
                  "contractScope": null,
                  "id": 16440,
                  "name": "IERC20Token",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 8901,
                  "src": "617:11:56",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20Token_$8901",
                    "typeString": "contract IERC20Token"
                  }
                },
                "id": 16441,
                "length": null,
                "nodeType": "ArrayTypeName",
                "src": "617:13:56",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_contract$_IERC20Token_$8901_$dyn_storage_ptr",
                  "typeString": "contract IERC20Token[]"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 16445,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "scope": 16605,
            "src": "651:13:56",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 16444,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "651:7:56",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 16465,
              "nodeType": "Block",
              "src": "798:141:56",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 16454,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 16452,
                      "name": "myBitToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16436,
                      "src": "849:10:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20Token_$8901",
                        "typeString": "contract IERC20Token"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 16453,
                      "name": "_token",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16447,
                      "src": "862:6:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20Token_$8901",
                        "typeString": "contract IERC20Token"
                      }
                    },
                    "src": "849:19:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20Token_$8901",
                      "typeString": "contract IERC20Token"
                    }
                  },
                  "id": 16455,
                  "nodeType": "ExpressionStatement",
                  "src": "849:19:56"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 16459,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 16456,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16445,
                      "src": "876:5:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 16457,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28038,
                        "src": "884:3:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 16458,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "884:10:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "876:18:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 16460,
                  "nodeType": "ExpressionStatement",
                  "src": "876:18:56"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 16463,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 16461,
                      "name": "bancorNetwork",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16438,
                      "src": "902:13:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IBancorNetwork_$2350",
                        "typeString": "contract IBancorNetwork"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 16462,
                      "name": "_bancorNetwork",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16449,
                      "src": "918:14:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IBancorNetwork_$2350",
                        "typeString": "contract IBancorNetwork"
                      }
                    },
                    "src": "902:30:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IBancorNetwork_$2350",
                      "typeString": "contract IBancorNetwork"
                    }
                  },
                  "id": 16464,
                  "nodeType": "ExpressionStatement",
                  "src": "902:30:56"
                }
              ]
            },
            "documentation": "@notice initialise addresses needed for conversion",
            "id": 16466,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16450,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16447,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 16466,
                  "src": "741:18:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20Token_$8901",
                    "typeString": "contract IERC20Token"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 16446,
                    "name": "IERC20Token",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 8901,
                    "src": "741:11:56",
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
                  "id": 16449,
                  "name": "_bancorNetwork",
                  "nodeType": "VariableDeclaration",
                  "scope": 16466,
                  "src": "761:29:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IBancorNetwork_$2350",
                    "typeString": "contract IBancorNetwork"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 16448,
                    "name": "IBancorNetwork",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 2350,
                    "src": "761:14:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IBancorNetwork_$2350",
                      "typeString": "contract IBancorNetwork"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "740:51:56"
            },
            "payable": false,
            "returnParameters": {
              "id": 16451,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "798:0:56"
            },
            "scope": 16605,
            "src": "729:210:56",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 16571,
              "nodeType": "Block",
              "src": "1327:861:56",
              "statements": [
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 16476,
                      "name": "token",
                      "nodeType": "VariableDeclaration",
                      "scope": 16572,
                      "src": "1335:17:56",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20Token_$8901",
                        "typeString": "contract IERC20Token"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 16475,
                        "name": "IERC20Token",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 8901,
                        "src": "1335:11:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20Token_$8901",
                          "typeString": "contract IERC20Token"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 16477,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1335:17:56"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 16481,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 16478,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28038,
                        "src": "1364:3:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 16479,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1364:9:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 16480,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1377:1:56",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1364:14:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 16518,
                    "nodeType": "Block",
                    "src": "1636:89:56",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 16509,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 16506,
                                "name": "_amount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 16470,
                                "src": "1656:7:56",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 16507,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 28038,
                                  "src": "1667:3:56",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 16508,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "value",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "1667:9:56",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "1656:20:56",
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
                            "id": 16505,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              28041,
                              28042
                            ],
                            "referencedDeclaration": 28041,
                            "src": "1648:7:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                              "typeString": "function (bool) pure"
                            }
                          },
                          "id": 16510,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1648:29:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 16511,
                        "nodeType": "ExpressionStatement",
                        "src": "1648:29:56"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 16516,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 16512,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16476,
                            "src": "1689:5:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20Token_$8901",
                              "typeString": "contract IERC20Token"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 16514,
                                "name": "_token",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 16468,
                                "src": "1709:6:56",
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
                              "id": 16513,
                              "name": "IEtherToken",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8925,
                              "src": "1697:11:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IEtherToken_$8925_$",
                                "typeString": "type(contract IEtherToken)"
                              }
                            },
                            "id": 16515,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1697:19:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IEtherToken_$8925",
                              "typeString": "contract IEtherToken"
                            }
                          },
                          "src": "1689:27:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20Token_$8901",
                            "typeString": "contract IERC20Token"
                          }
                        },
                        "id": 16517,
                        "nodeType": "ExpressionStatement",
                        "src": "1689:27:56"
                      }
                    ]
                  },
                  "id": 16519,
                  "nodeType": "IfStatement",
                  "src": "1360:365:56",
                  "trueBody": {
                    "id": 16504,
                    "nodeType": "Block",
                    "src": "1379:251:56",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 16486,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 16482,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16476,
                            "src": "1479:5:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20Token_$8901",
                              "typeString": "contract IERC20Token"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 16484,
                                "name": "_token",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 16468,
                                "src": "1499:6:56",
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
                              "id": 16483,
                              "name": "ISmartToken",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8953,
                              "src": "1487:11:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_ISmartToken_$8953_$",
                                "typeString": "type(contract ISmartToken)"
                              }
                            },
                            "id": 16485,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1487:19:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ISmartToken_$8953",
                              "typeString": "contract ISmartToken"
                            }
                          },
                          "src": "1479:27:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20Token_$8901",
                            "typeString": "contract IERC20Token"
                          }
                        },
                        "id": 16487,
                        "nodeType": "ExpressionStatement",
                        "src": "1479:27:56"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 16491,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28038,
                                "src": "1537:3:56",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 16492,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1537:10:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 16493,
                              "name": "bancorNetwork",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 16438,
                              "src": "1549:13:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IBancorNetwork_$2350",
                                "typeString": "contract IBancorNetwork"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 16494,
                              "name": "_amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 16470,
                              "src": "1564:7:56",
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
                                "typeIdentifier": "t_contract$_IBancorNetwork_$2350",
                                "typeString": "contract IBancorNetwork"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 16488,
                              "name": "token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 16476,
                              "src": "1518:5:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20Token_$8901",
                                "typeString": "contract IERC20Token"
                              }
                            },
                            "id": 16490,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "transferFrom",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8891,
                            "src": "1518:18:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                              "typeString": "function (address,address,uint256) external returns (bool)"
                            }
                          },
                          "id": 16495,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1518:54:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 16496,
                        "nodeType": "ExpressionStatement",
                        "src": "1518:54:56"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 16500,
                              "name": "bancorNetwork",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 16438,
                              "src": "1598:13:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IBancorNetwork_$2350",
                                "typeString": "contract IBancorNetwork"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 16501,
                              "name": "_amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 16470,
                              "src": "1613:7:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_IBancorNetwork_$2350",
                                "typeString": "contract IBancorNetwork"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 16497,
                              "name": "token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 16476,
                              "src": "1584:5:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20Token_$8901",
                                "typeString": "contract IERC20Token"
                              }
                            },
                            "id": 16499,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "approve",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8900,
                            "src": "1584:13:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                              "typeString": "function (address,uint256) external returns (bool)"
                            }
                          },
                          "id": 16502,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1584:37:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 16503,
                        "nodeType": "ExpressionStatement",
                        "src": "1584:37:56"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    16521
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 16521,
                      "name": "convertedValue",
                      "nodeType": "VariableDeclaration",
                      "scope": 16572,
                      "src": "1732:19:56",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 16520,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1732:4:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 16534,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 16526,
                          "name": "path",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 16443,
                          "src": "1803:4:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_contract$_IERC20Token_$8901_$dyn_storage_$",
                            "typeString": "mapping(address => contract IERC20Token[] storage ref)"
                          }
                        },
                        "id": 16530,
                        "indexExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 16528,
                              "name": "token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 16476,
                              "src": "1816:5:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20Token_$8901",
                                "typeString": "contract IERC20Token"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_IERC20Token_$8901",
                                "typeString": "contract IERC20Token"
                              }
                            ],
                            "id": 16527,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1808:7:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 16529,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1808:14:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1803:20:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_contract$_IERC20Token_$8901_$dyn_storage",
                          "typeString": "contract IERC20Token[] storage ref"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 16531,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16470,
                        "src": "1835:7:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 16532,
                        "name": "_minimumReturn",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16472,
                        "src": "1854:14:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_array$_t_contract$_IERC20Token_$8901_$dyn_storage",
                          "typeString": "contract IERC20Token[] storage ref"
                        },
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
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 16523,
                            "name": "bancorNetwork",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16438,
                            "src": "1769:13:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IBancorNetwork_$2350",
                              "typeString": "contract IBancorNetwork"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IBancorNetwork_$2350",
                              "typeString": "contract IBancorNetwork"
                            }
                          ],
                          "id": 16522,
                          "name": "IBancorNetwork",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2350,
                          "src": "1754:14:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IBancorNetwork_$2350_$",
                            "typeString": "type(contract IBancorNetwork)"
                          }
                        },
                        "id": 16524,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1754:29:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IBancorNetwork_$2350",
                          "typeString": "contract IBancorNetwork"
                        }
                      },
                      "id": 16525,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "convert",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2289,
                      "src": "1754:37:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_payable$_t_array$_t_contract$_IERC20Token_$8901_$dyn_memory_ptr_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (contract IERC20Token[] memory,uint256,uint256) payable external returns (uint256)"
                      }
                    },
                    "id": 16533,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1754:122:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1732:144:56"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 16538,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 16536,
                          "name": "convertedValue",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 16521,
                          "src": "1893:14:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 16537,
                          "name": "_minimumReturn",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 16472,
                          "src": "1911:14:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1893:32:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "5472616e73616374696f6e206661696c65642e",
                        "id": 16539,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1927:21:56",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_0df21c1444bed3105ecc1c180b20dafa486ac9f53345f3bae26e00c5e7407402",
                          "typeString": "literal_string \"Transaction failed.\""
                        },
                        "value": "Transaction failed."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_0df21c1444bed3105ecc1c180b20dafa486ac9f53345f3bae26e00c5e7407402",
                          "typeString": "literal_string \"Transaction failed.\""
                        }
                      ],
                      "id": 16535,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28042,
                      "src": "1884:7:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 16540,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1884:65:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16541,
                  "nodeType": "ExpressionStatement",
                  "src": "1884:65:56"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 16548,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 16545,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28215,
                              "src": "1987:4:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_TokenConverter_$16605",
                                "typeString": "contract TokenConverter"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_TokenConverter_$16605",
                                "typeString": "contract TokenConverter"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 16543,
                              "name": "myBitToken",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 16436,
                              "src": "1966:10:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20Token_$8901",
                                "typeString": "contract IERC20Token"
                              }
                            },
                            "id": 16544,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "balanceOf",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8857,
                            "src": "1966:20:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address) pure external returns (uint256)"
                            }
                          },
                          "id": 16546,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1966:26:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 16547,
                          "name": "convertedValue",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 16521,
                          "src": "1996:14:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1966:44:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "5472616e73616374696f6e206661696c6564207769746820646966666572656e742072657475726e207468616e206578706563746564",
                        "id": 16549,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2012:56:56",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_f3a3ea629e30aea7a506f3ecfd17dde4101bc5f1d8cd547496eaa25bd08b5618",
                          "typeString": "literal_string \"Transaction failed with different return than expected\""
                        },
                        "value": "Transaction failed with different return than expected"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_f3a3ea629e30aea7a506f3ecfd17dde4101bc5f1d8cd547496eaa25bd08b5618",
                          "typeString": "literal_string \"Transaction failed with different return than expected\""
                        }
                      ],
                      "id": 16542,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28042,
                      "src": "1957:7:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 16550,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1957:112:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16551,
                  "nodeType": "ExpressionStatement",
                  "src": "1957:112:56"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 16555,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28038,
                          "src": "2097:3:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 16556,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2097:10:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 16557,
                        "name": "convertedValue",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16521,
                        "src": "2109:14:56",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 16552,
                        "name": "myBitToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16436,
                        "src": "2077:10:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20Token_$8901",
                          "typeString": "contract IERC20Token"
                        }
                      },
                      "id": 16554,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8880,
                      "src": "2077:19:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 16558,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2077:47:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 16559,
                  "nodeType": "ExpressionStatement",
                  "src": "2077:47:56"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 16563,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28038,
                          "src": "2147:3:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 16564,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2147:10:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 16567,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28215,
                            "src": "2175:4:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_TokenConverter_$16605",
                              "typeString": "contract TokenConverter"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_TokenConverter_$16605",
                              "typeString": "contract TokenConverter"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 16565,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16476,
                            "src": "2159:5:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20Token_$8901",
                              "typeString": "contract IERC20Token"
                            }
                          },
                          "id": 16566,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "balanceOf",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8857,
                          "src": "2159:15:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_uint256_$",
                            "typeString": "function (address) pure external returns (uint256)"
                          }
                        },
                        "id": 16568,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2159:21:56",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 16560,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16476,
                        "src": "2132:5:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20Token_$8901",
                          "typeString": "contract IERC20Token"
                        }
                      },
                      "id": 16562,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8880,
                      "src": "2132:14:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 16569,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2132:49:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 16570,
                  "nodeType": "ExpressionStatement",
                  "src": "2132:49:56"
                }
              ]
            },
            "documentation": "@notice convert some tokens\n@param _token the contract of the token that is about to be converted\n@param _amount the amount of _token that is about to be converted\n@param _minimumReturn the minimum return of MyBit token that is about to be received",
            "id": 16572,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "convertTokenToMyBit",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16473,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16468,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 16572,
                  "src": "1251:14:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16467,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1251:7:56",
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
                  "id": 16470,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16572,
                  "src": "1267:12:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16469,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1267:4:56",
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
                  "id": 16472,
                  "name": "_minimumReturn",
                  "nodeType": "VariableDeclaration",
                  "scope": 16572,
                  "src": "1281:19:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16471,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1281:4:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1250:51:56"
            },
            "payable": true,
            "returnParameters": {
              "id": 16474,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1327:0:56"
            },
            "scope": 16605,
            "src": "1222:966:56",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 16592,
              "nodeType": "Block",
              "src": "2293:56:56",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 16588,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 16584,
                        "name": "path",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16443,
                        "src": "2301:4:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_contract$_IERC20Token_$8901_$dyn_storage_$",
                          "typeString": "mapping(address => contract IERC20Token[] storage ref)"
                        }
                      },
                      "id": 16586,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 16585,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16574,
                        "src": "2306:5:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2301:11:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_contract$_IERC20Token_$8901_$dyn_storage",
                        "typeString": "contract IERC20Token[] storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 16587,
                      "name": "_newPath",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16577,
                      "src": "2315:8:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_contract$_IERC20Token_$8901_$dyn_memory_ptr",
                        "typeString": "contract IERC20Token[] memory"
                      }
                    },
                    "src": "2301:22:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_IERC20Token_$8901_$dyn_storage",
                      "typeString": "contract IERC20Token[] storage ref"
                    }
                  },
                  "id": 16589,
                  "nodeType": "ExpressionStatement",
                  "src": "2301:22:56"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 16590,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2338:4:56",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 16583,
                  "id": 16591,
                  "nodeType": "Return",
                  "src": "2331:11:56"
                }
              ]
            },
            "documentation": null,
            "id": 16593,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 16580,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 16579,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 16604,
                  "src": "2265:9:56",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2265:9:56"
              }
            ],
            "name": "addPath",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16578,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16574,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 16593,
                  "src": "2211:13:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16573,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2211:7:56",
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
                  "id": 16577,
                  "name": "_newPath",
                  "nodeType": "VariableDeclaration",
                  "scope": 16593,
                  "src": "2226:22:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_contract$_IERC20Token_$8901_$dyn_memory_ptr",
                    "typeString": "contract IERC20Token[]"
                  },
                  "typeName": {
                    "baseType": {
                      "contractScope": null,
                      "id": 16575,
                      "name": "IERC20Token",
                      "nodeType": "UserDefinedTypeName",
                      "referencedDeclaration": 8901,
                      "src": "2226:11:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20Token_$8901",
                        "typeString": "contract IERC20Token"
                      }
                    },
                    "id": 16576,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "2226:13:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_IERC20Token_$8901_$dyn_storage_ptr",
                      "typeString": "contract IERC20Token[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2210:39:56"
            },
            "payable": false,
            "returnParameters": {
              "id": 16583,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16582,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16593,
                  "src": "2288:4:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16581,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2288:4:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2287:6:56"
            },
            "scope": 16605,
            "src": "2194:155:56",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 16603,
              "nodeType": "Block",
              "src": "2374:141:56",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 16599,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 16596,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 16445,
                          "src": "2479:5:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 16597,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28038,
                            "src": "2488:3:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 16598,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2488:10:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "2479:19:56",
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
                      "id": 16595,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "2471:7:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 16600,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2471:28:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16601,
                  "nodeType": "ExpressionStatement",
                  "src": "2471:28:56"
                },
                {
                  "id": 16602,
                  "nodeType": "PlaceholderStatement",
                  "src": "2507:1:56"
                }
              ]
            },
            "documentation": null,
            "id": 16604,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 16594,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2374:0:56"
            },
            "src": "2355:160:56",
            "visibility": "internal"
          }
        ],
        "scope": 16606,
        "src": "454:2064:56"
      }
    ],
    "src": "0:2519:56"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ecosystem/TokenConverter.sol",
    "exportedSymbols": {
      "TokenConverter": [
        16605
      ]
    },
    "id": 16606,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 16427,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:56"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/IBancorNetwork.sol",
        "file": "../bancor/IBancorNetwork.sol",
        "id": 16428,
        "nodeType": "ImportDirective",
        "scope": 16606,
        "sourceUnit": 2351,
        "src": "26:38:56",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/EtherToken.sol",
        "file": "../bancor/token/EtherToken.sol",
        "id": 16429,
        "nodeType": "ImportDirective",
        "scope": 16606,
        "sourceUnit": 8498,
        "src": "65:40:56",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/IERC20Token.sol",
        "file": "../bancor/token/interfaces/IERC20Token.sol",
        "id": 16430,
        "nodeType": "ImportDirective",
        "scope": 16606,
        "sourceUnit": 8902,
        "src": "106:52:56",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/ISmartToken.sol",
        "file": "../bancor/token/interfaces/ISmartToken.sol",
        "id": 16431,
        "nodeType": "ImportDirective",
        "scope": 16606,
        "sourceUnit": 8954,
        "src": "159:52:56",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/IEtherToken.sol",
        "file": "../bancor/token/interfaces/IEtherToken.sol",
        "id": 16432,
        "nodeType": "ImportDirective",
        "scope": 16606,
        "sourceUnit": 8926,
        "src": "212:52:56",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/SmartToken.sol",
        "file": "../bancor/token/SmartToken.sol",
        "id": 16433,
        "nodeType": "ImportDirective",
        "scope": 16606,
        "sourceUnit": 8712,
        "src": "265:40:56",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/DBInterface.sol",
        "file": "../interfaces/DBInterface.sol",
        "id": 16434,
        "nodeType": "ImportDirective",
        "scope": 16606,
        "sourceUnit": 16877,
        "src": "306:39:56",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title A contract for converting any token into MYB (using Bancor's API)\n@author Vlad Silviu Farcas",
        "fullyImplemented": true,
        "id": 16605,
        "linearizedBaseContracts": [
          16605
        ],
        "name": "TokenConverter",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 16436,
            "name": "myBitToken",
            "nodeType": "VariableDeclaration",
            "scope": 16605,
            "src": "520:30:56",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IERC20Token_$8901",
              "typeString": "contract IERC20Token"
            },
            "typeName": {
              "contractScope": null,
              "id": 16435,
              "name": "IERC20Token",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8901,
              "src": "520:11:56",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC20Token_$8901",
                "typeString": "contract IERC20Token"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 16438,
            "name": "bancorNetwork",
            "nodeType": "VariableDeclaration",
            "scope": 16605,
            "src": "556:36:56",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IBancorNetwork_$2350",
              "typeString": "contract IBancorNetwork"
            },
            "typeName": {
              "contractScope": null,
              "id": 16437,
              "name": "IBancorNetwork",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2350,
              "src": "556:14:56",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IBancorNetwork_$2350",
                "typeString": "contract IBancorNetwork"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 16443,
            "name": "path",
            "nodeType": "VariableDeclaration",
            "scope": 16605,
            "src": "598:46:56",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_contract$_IERC20Token_$8901_$dyn_storage_$",
              "typeString": "mapping(address => contract IERC20Token[])"
            },
            "typeName": {
              "id": 16442,
              "keyType": {
                "id": 16439,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "606:7:56",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "598:33:56",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_contract$_IERC20Token_$8901_$dyn_storage_$",
                "typeString": "mapping(address => contract IERC20Token[])"
              },
              "valueType": {
                "baseType": {
                  "contractScope": null,
                  "id": 16440,
                  "name": "IERC20Token",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 8901,
                  "src": "617:11:56",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20Token_$8901",
                    "typeString": "contract IERC20Token"
                  }
                },
                "id": 16441,
                "length": null,
                "nodeType": "ArrayTypeName",
                "src": "617:13:56",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_contract$_IERC20Token_$8901_$dyn_storage_ptr",
                  "typeString": "contract IERC20Token[]"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 16445,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "scope": 16605,
            "src": "651:13:56",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 16444,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "651:7:56",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 16465,
              "nodeType": "Block",
              "src": "798:141:56",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 16454,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 16452,
                      "name": "myBitToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16436,
                      "src": "849:10:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20Token_$8901",
                        "typeString": "contract IERC20Token"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 16453,
                      "name": "_token",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16447,
                      "src": "862:6:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20Token_$8901",
                        "typeString": "contract IERC20Token"
                      }
                    },
                    "src": "849:19:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20Token_$8901",
                      "typeString": "contract IERC20Token"
                    }
                  },
                  "id": 16455,
                  "nodeType": "ExpressionStatement",
                  "src": "849:19:56"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 16459,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 16456,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16445,
                      "src": "876:5:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 16457,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28038,
                        "src": "884:3:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 16458,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "884:10:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "876:18:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 16460,
                  "nodeType": "ExpressionStatement",
                  "src": "876:18:56"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 16463,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 16461,
                      "name": "bancorNetwork",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16438,
                      "src": "902:13:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IBancorNetwork_$2350",
                        "typeString": "contract IBancorNetwork"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 16462,
                      "name": "_bancorNetwork",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16449,
                      "src": "918:14:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IBancorNetwork_$2350",
                        "typeString": "contract IBancorNetwork"
                      }
                    },
                    "src": "902:30:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IBancorNetwork_$2350",
                      "typeString": "contract IBancorNetwork"
                    }
                  },
                  "id": 16464,
                  "nodeType": "ExpressionStatement",
                  "src": "902:30:56"
                }
              ]
            },
            "documentation": "@notice initialise addresses needed for conversion",
            "id": 16466,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16450,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16447,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 16466,
                  "src": "741:18:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20Token_$8901",
                    "typeString": "contract IERC20Token"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 16446,
                    "name": "IERC20Token",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 8901,
                    "src": "741:11:56",
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
                  "id": 16449,
                  "name": "_bancorNetwork",
                  "nodeType": "VariableDeclaration",
                  "scope": 16466,
                  "src": "761:29:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IBancorNetwork_$2350",
                    "typeString": "contract IBancorNetwork"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 16448,
                    "name": "IBancorNetwork",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 2350,
                    "src": "761:14:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IBancorNetwork_$2350",
                      "typeString": "contract IBancorNetwork"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "740:51:56"
            },
            "payable": false,
            "returnParameters": {
              "id": 16451,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "798:0:56"
            },
            "scope": 16605,
            "src": "729:210:56",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 16571,
              "nodeType": "Block",
              "src": "1327:861:56",
              "statements": [
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 16476,
                      "name": "token",
                      "nodeType": "VariableDeclaration",
                      "scope": 16572,
                      "src": "1335:17:56",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20Token_$8901",
                        "typeString": "contract IERC20Token"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 16475,
                        "name": "IERC20Token",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 8901,
                        "src": "1335:11:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20Token_$8901",
                          "typeString": "contract IERC20Token"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 16477,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1335:17:56"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 16481,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 16478,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28038,
                        "src": "1364:3:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 16479,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1364:9:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 16480,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1377:1:56",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1364:14:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 16518,
                    "nodeType": "Block",
                    "src": "1636:89:56",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 16509,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 16506,
                                "name": "_amount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 16470,
                                "src": "1656:7:56",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 16507,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 28038,
                                  "src": "1667:3:56",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 16508,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "value",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "1667:9:56",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "1656:20:56",
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
                            "id": 16505,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              28041,
                              28042
                            ],
                            "referencedDeclaration": 28041,
                            "src": "1648:7:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                              "typeString": "function (bool) pure"
                            }
                          },
                          "id": 16510,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1648:29:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 16511,
                        "nodeType": "ExpressionStatement",
                        "src": "1648:29:56"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 16516,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 16512,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16476,
                            "src": "1689:5:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20Token_$8901",
                              "typeString": "contract IERC20Token"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 16514,
                                "name": "_token",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 16468,
                                "src": "1709:6:56",
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
                              "id": 16513,
                              "name": "IEtherToken",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8925,
                              "src": "1697:11:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IEtherToken_$8925_$",
                                "typeString": "type(contract IEtherToken)"
                              }
                            },
                            "id": 16515,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1697:19:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IEtherToken_$8925",
                              "typeString": "contract IEtherToken"
                            }
                          },
                          "src": "1689:27:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20Token_$8901",
                            "typeString": "contract IERC20Token"
                          }
                        },
                        "id": 16517,
                        "nodeType": "ExpressionStatement",
                        "src": "1689:27:56"
                      }
                    ]
                  },
                  "id": 16519,
                  "nodeType": "IfStatement",
                  "src": "1360:365:56",
                  "trueBody": {
                    "id": 16504,
                    "nodeType": "Block",
                    "src": "1379:251:56",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 16486,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 16482,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16476,
                            "src": "1479:5:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20Token_$8901",
                              "typeString": "contract IERC20Token"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 16484,
                                "name": "_token",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 16468,
                                "src": "1499:6:56",
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
                              "id": 16483,
                              "name": "ISmartToken",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8953,
                              "src": "1487:11:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_ISmartToken_$8953_$",
                                "typeString": "type(contract ISmartToken)"
                              }
                            },
                            "id": 16485,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1487:19:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ISmartToken_$8953",
                              "typeString": "contract ISmartToken"
                            }
                          },
                          "src": "1479:27:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20Token_$8901",
                            "typeString": "contract IERC20Token"
                          }
                        },
                        "id": 16487,
                        "nodeType": "ExpressionStatement",
                        "src": "1479:27:56"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 16491,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28038,
                                "src": "1537:3:56",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 16492,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1537:10:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 16493,
                              "name": "bancorNetwork",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 16438,
                              "src": "1549:13:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IBancorNetwork_$2350",
                                "typeString": "contract IBancorNetwork"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 16494,
                              "name": "_amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 16470,
                              "src": "1564:7:56",
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
                                "typeIdentifier": "t_contract$_IBancorNetwork_$2350",
                                "typeString": "contract IBancorNetwork"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 16488,
                              "name": "token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 16476,
                              "src": "1518:5:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20Token_$8901",
                                "typeString": "contract IERC20Token"
                              }
                            },
                            "id": 16490,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "transferFrom",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8891,
                            "src": "1518:18:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                              "typeString": "function (address,address,uint256) external returns (bool)"
                            }
                          },
                          "id": 16495,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1518:54:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 16496,
                        "nodeType": "ExpressionStatement",
                        "src": "1518:54:56"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 16500,
                              "name": "bancorNetwork",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 16438,
                              "src": "1598:13:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IBancorNetwork_$2350",
                                "typeString": "contract IBancorNetwork"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 16501,
                              "name": "_amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 16470,
                              "src": "1613:7:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_IBancorNetwork_$2350",
                                "typeString": "contract IBancorNetwork"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 16497,
                              "name": "token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 16476,
                              "src": "1584:5:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20Token_$8901",
                                "typeString": "contract IERC20Token"
                              }
                            },
                            "id": 16499,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "approve",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8900,
                            "src": "1584:13:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                              "typeString": "function (address,uint256) external returns (bool)"
                            }
                          },
                          "id": 16502,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1584:37:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 16503,
                        "nodeType": "ExpressionStatement",
                        "src": "1584:37:56"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    16521
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 16521,
                      "name": "convertedValue",
                      "nodeType": "VariableDeclaration",
                      "scope": 16572,
                      "src": "1732:19:56",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 16520,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1732:4:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 16534,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 16526,
                          "name": "path",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 16443,
                          "src": "1803:4:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_contract$_IERC20Token_$8901_$dyn_storage_$",
                            "typeString": "mapping(address => contract IERC20Token[] storage ref)"
                          }
                        },
                        "id": 16530,
                        "indexExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 16528,
                              "name": "token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 16476,
                              "src": "1816:5:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20Token_$8901",
                                "typeString": "contract IERC20Token"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_IERC20Token_$8901",
                                "typeString": "contract IERC20Token"
                              }
                            ],
                            "id": 16527,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1808:7:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 16529,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1808:14:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1803:20:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_contract$_IERC20Token_$8901_$dyn_storage",
                          "typeString": "contract IERC20Token[] storage ref"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 16531,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16470,
                        "src": "1835:7:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 16532,
                        "name": "_minimumReturn",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16472,
                        "src": "1854:14:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_array$_t_contract$_IERC20Token_$8901_$dyn_storage",
                          "typeString": "contract IERC20Token[] storage ref"
                        },
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
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 16523,
                            "name": "bancorNetwork",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16438,
                            "src": "1769:13:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IBancorNetwork_$2350",
                              "typeString": "contract IBancorNetwork"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IBancorNetwork_$2350",
                              "typeString": "contract IBancorNetwork"
                            }
                          ],
                          "id": 16522,
                          "name": "IBancorNetwork",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2350,
                          "src": "1754:14:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IBancorNetwork_$2350_$",
                            "typeString": "type(contract IBancorNetwork)"
                          }
                        },
                        "id": 16524,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1754:29:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IBancorNetwork_$2350",
                          "typeString": "contract IBancorNetwork"
                        }
                      },
                      "id": 16525,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "convert",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2289,
                      "src": "1754:37:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_payable$_t_array$_t_contract$_IERC20Token_$8901_$dyn_memory_ptr_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (contract IERC20Token[] memory,uint256,uint256) payable external returns (uint256)"
                      }
                    },
                    "id": 16533,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1754:122:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1732:144:56"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 16538,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 16536,
                          "name": "convertedValue",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 16521,
                          "src": "1893:14:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 16537,
                          "name": "_minimumReturn",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 16472,
                          "src": "1911:14:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1893:32:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "5472616e73616374696f6e206661696c65642e",
                        "id": 16539,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1927:21:56",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_0df21c1444bed3105ecc1c180b20dafa486ac9f53345f3bae26e00c5e7407402",
                          "typeString": "literal_string \"Transaction failed.\""
                        },
                        "value": "Transaction failed."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_0df21c1444bed3105ecc1c180b20dafa486ac9f53345f3bae26e00c5e7407402",
                          "typeString": "literal_string \"Transaction failed.\""
                        }
                      ],
                      "id": 16535,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28042,
                      "src": "1884:7:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 16540,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1884:65:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16541,
                  "nodeType": "ExpressionStatement",
                  "src": "1884:65:56"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 16548,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 16545,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28215,
                              "src": "1987:4:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_TokenConverter_$16605",
                                "typeString": "contract TokenConverter"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_TokenConverter_$16605",
                                "typeString": "contract TokenConverter"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 16543,
                              "name": "myBitToken",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 16436,
                              "src": "1966:10:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20Token_$8901",
                                "typeString": "contract IERC20Token"
                              }
                            },
                            "id": 16544,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "balanceOf",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8857,
                            "src": "1966:20:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address) pure external returns (uint256)"
                            }
                          },
                          "id": 16546,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1966:26:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 16547,
                          "name": "convertedValue",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 16521,
                          "src": "1996:14:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1966:44:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "5472616e73616374696f6e206661696c6564207769746820646966666572656e742072657475726e207468616e206578706563746564",
                        "id": 16549,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2012:56:56",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_f3a3ea629e30aea7a506f3ecfd17dde4101bc5f1d8cd547496eaa25bd08b5618",
                          "typeString": "literal_string \"Transaction failed with different return than expected\""
                        },
                        "value": "Transaction failed with different return than expected"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_f3a3ea629e30aea7a506f3ecfd17dde4101bc5f1d8cd547496eaa25bd08b5618",
                          "typeString": "literal_string \"Transaction failed with different return than expected\""
                        }
                      ],
                      "id": 16542,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28042,
                      "src": "1957:7:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 16550,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1957:112:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16551,
                  "nodeType": "ExpressionStatement",
                  "src": "1957:112:56"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 16555,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28038,
                          "src": "2097:3:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 16556,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2097:10:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 16557,
                        "name": "convertedValue",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16521,
                        "src": "2109:14:56",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 16552,
                        "name": "myBitToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16436,
                        "src": "2077:10:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20Token_$8901",
                          "typeString": "contract IERC20Token"
                        }
                      },
                      "id": 16554,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8880,
                      "src": "2077:19:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 16558,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2077:47:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 16559,
                  "nodeType": "ExpressionStatement",
                  "src": "2077:47:56"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 16563,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28038,
                          "src": "2147:3:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 16564,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2147:10:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 16567,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28215,
                            "src": "2175:4:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_TokenConverter_$16605",
                              "typeString": "contract TokenConverter"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_TokenConverter_$16605",
                              "typeString": "contract TokenConverter"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 16565,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16476,
                            "src": "2159:5:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20Token_$8901",
                              "typeString": "contract IERC20Token"
                            }
                          },
                          "id": 16566,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "balanceOf",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8857,
                          "src": "2159:15:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_uint256_$",
                            "typeString": "function (address) pure external returns (uint256)"
                          }
                        },
                        "id": 16568,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2159:21:56",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 16560,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16476,
                        "src": "2132:5:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20Token_$8901",
                          "typeString": "contract IERC20Token"
                        }
                      },
                      "id": 16562,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8880,
                      "src": "2132:14:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 16569,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2132:49:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 16570,
                  "nodeType": "ExpressionStatement",
                  "src": "2132:49:56"
                }
              ]
            },
            "documentation": "@notice convert some tokens\n@param _token the contract of the token that is about to be converted\n@param _amount the amount of _token that is about to be converted\n@param _minimumReturn the minimum return of MyBit token that is about to be received",
            "id": 16572,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "convertTokenToMyBit",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16473,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16468,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 16572,
                  "src": "1251:14:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16467,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1251:7:56",
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
                  "id": 16470,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16572,
                  "src": "1267:12:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16469,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1267:4:56",
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
                  "id": 16472,
                  "name": "_minimumReturn",
                  "nodeType": "VariableDeclaration",
                  "scope": 16572,
                  "src": "1281:19:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16471,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1281:4:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1250:51:56"
            },
            "payable": true,
            "returnParameters": {
              "id": 16474,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1327:0:56"
            },
            "scope": 16605,
            "src": "1222:966:56",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 16592,
              "nodeType": "Block",
              "src": "2293:56:56",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 16588,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 16584,
                        "name": "path",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16443,
                        "src": "2301:4:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_contract$_IERC20Token_$8901_$dyn_storage_$",
                          "typeString": "mapping(address => contract IERC20Token[] storage ref)"
                        }
                      },
                      "id": 16586,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 16585,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16574,
                        "src": "2306:5:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2301:11:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_contract$_IERC20Token_$8901_$dyn_storage",
                        "typeString": "contract IERC20Token[] storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 16587,
                      "name": "_newPath",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16577,
                      "src": "2315:8:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_contract$_IERC20Token_$8901_$dyn_memory_ptr",
                        "typeString": "contract IERC20Token[] memory"
                      }
                    },
                    "src": "2301:22:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_IERC20Token_$8901_$dyn_storage",
                      "typeString": "contract IERC20Token[] storage ref"
                    }
                  },
                  "id": 16589,
                  "nodeType": "ExpressionStatement",
                  "src": "2301:22:56"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 16590,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2338:4:56",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 16583,
                  "id": 16591,
                  "nodeType": "Return",
                  "src": "2331:11:56"
                }
              ]
            },
            "documentation": null,
            "id": 16593,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 16580,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 16579,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 16604,
                  "src": "2265:9:56",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2265:9:56"
              }
            ],
            "name": "addPath",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16578,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16574,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 16593,
                  "src": "2211:13:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16573,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2211:7:56",
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
                  "id": 16577,
                  "name": "_newPath",
                  "nodeType": "VariableDeclaration",
                  "scope": 16593,
                  "src": "2226:22:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_contract$_IERC20Token_$8901_$dyn_memory_ptr",
                    "typeString": "contract IERC20Token[]"
                  },
                  "typeName": {
                    "baseType": {
                      "contractScope": null,
                      "id": 16575,
                      "name": "IERC20Token",
                      "nodeType": "UserDefinedTypeName",
                      "referencedDeclaration": 8901,
                      "src": "2226:11:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20Token_$8901",
                        "typeString": "contract IERC20Token"
                      }
                    },
                    "id": 16576,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "2226:13:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_IERC20Token_$8901_$dyn_storage_ptr",
                      "typeString": "contract IERC20Token[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2210:39:56"
            },
            "payable": false,
            "returnParameters": {
              "id": 16583,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16582,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16593,
                  "src": "2288:4:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16581,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2288:4:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2287:6:56"
            },
            "scope": 16605,
            "src": "2194:155:56",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 16603,
              "nodeType": "Block",
              "src": "2374:141:56",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 16599,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 16596,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 16445,
                          "src": "2479:5:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 16597,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28038,
                            "src": "2488:3:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 16598,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2488:10:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "2479:19:56",
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
                      "id": 16595,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "2471:7:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 16600,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2471:28:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16601,
                  "nodeType": "ExpressionStatement",
                  "src": "2471:28:56"
                },
                {
                  "id": 16602,
                  "nodeType": "PlaceholderStatement",
                  "src": "2507:1:56"
                }
              ]
            },
            "documentation": null,
            "id": 16604,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 16594,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2374:0:56"
            },
            "src": "2355:160:56",
            "visibility": "internal"
          }
        ],
        "scope": 16606,
        "src": "454:2064:56"
      }
    ],
    "src": "0:2519:56"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-12-06T01:19:16.700Z"
}