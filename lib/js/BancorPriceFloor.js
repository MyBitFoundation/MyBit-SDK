"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var BancorPriceFloor = exports.BancorPriceFloor = 
{
  "contractName": "BancorPriceFloor",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "TOKEN_PRICE_D",
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
      "name": "TOKEN_PRICE_N",
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
      "name": "version",
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
      "constant": false,
      "inputs": [
        {
          "name": "_token",
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
      "name": "withdrawTokens",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "acceptOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
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
      "inputs": [],
      "name": "newOwner",
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
      "constant": false,
      "inputs": [
        {
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "token",
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
      "inputs": [
        {
          "name": "_token",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_prevOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "OwnerUpdate",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "sell",
      "outputs": [
        {
          "name": "amount",
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
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "withdraw",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x60c0604052600360808190527f302e31000000000000000000000000000000000000000000000000000000000060a090815261003e91600291906100ab565b5034801561004b57600080fd5b506040516020806108a6833981016040525160008054600160a060020a0319163317905580600160a060020a038116151561008557600080fd5b5060038054600160a060020a031916600160a060020a0392909216919091179055610146565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100ec57805160ff1916838001178555610119565b82800160010185558215610119579182015b828111156101195782518255916020019190600101906100fe565b50610125929150610129565b5090565b61014391905b80821115610125576000815560010161012f565b90565b610751806101556000396000f3006080604052600436106100ae5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630d2806ad81146100b05780632e1a7d4d146100d757806345710074146100ef57806345cfad3e1461010457806354fd4d50146101195780635e35359e146101a357806379ba5097146101cd5780638da5cb5b146101e2578063d4ee1d9014610213578063f2fde38b14610228578063fc0c546a14610249575b005b3480156100bc57600080fd5b506100c561025e565b60408051918252519081900360200190f35b3480156100e357600080fd5b506100ae600435610263565b3480156100fb57600080fd5b506100c56102ab565b34801561011057600080fd5b506100c5610442565b34801561012557600080fd5b5061012e610447565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610168578181015183820152602001610150565b50505050905090810190601f1680156101955780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101af57600080fd5b506100ae600160a060020a03600435811690602435166044356104d2565b3480156101d957600080fd5b506100ae6105e4565b3480156101ee57600080fd5b506101f761066c565b60408051600160a060020a039092168252519081900360200190f35b34801561021f57600080fd5b506101f761067b565b34801561023457600080fd5b506100ae600160a060020a036004351661068a565b34801561025557600080fd5b506101f76106eb565b606481565b600054600160a060020a0316331461027a57600080fd5b604051339082156108fc029083906000818181858888f193505050501580156102a7573d6000803e3d6000fd5b5050565b600354604080517fdd62ed3e000000000000000000000000000000000000000000000000000000008152336004820152306024820152905160009283928392600160a060020a039092169163dd62ed3e9160448082019260209290919082900301818787803b15801561031d57600080fd5b505af1158015610331573d6000803e3d6000fd5b505050506040513d602081101561034757600080fd5b5051600354604080517f23b872dd000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018490529051929450600160a060020a03909116916323b872dd916064808201926020929091908290030181600087803b1580156103bf57600080fd5b505af11580156103d3573d6000803e3d6000fd5b505050506040513d60208110156103e957600080fd5b505115156103f357fe5b60646104008360016106fa565b81151561040957fe5b6040519190049150339082156108fc029083906000818181858888f1935050505015801561043b573d6000803e3d6000fd5b5092915050565b600181565b6002805460408051602060018416156101000260001901909316849004601f810184900484028201840190925281815292918301828280156104ca5780601f1061049f576101008083540402835291602001916104ca565b820191906000526020600020905b8154815290600101906020018083116104ad57829003601f168201915b505050505081565b600054600160a060020a031633146104e957600080fd5b82600160a060020a03811615156104ff57600080fd5b82600160a060020a038116151561051557600080fd5b83600160a060020a03811630141561052c57600080fd5b85600160a060020a031663a9059cbb86866040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050602060405180830381600087803b1580156105a857600080fd5b505af11580156105bc573d6000803e3d6000fd5b505050506040513d60208110156105d257600080fd5b505115156105dc57fe5b505050505050565b600154600160a060020a031633146105fb57600080fd5b60015460008054604051600160a060020a0393841693909116917f343765429aea5a34b3ff6a3785a98a5abb2597aca87bfbb58632c173d585373a91a3600180546000805473ffffffffffffffffffffffffffffffffffffffff19908116600160a060020a03841617909155169055565b600054600160a060020a031681565b600154600160a060020a031681565b600054600160a060020a031633146106a157600080fd5b600054600160a060020a03828116911614156106bc57600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600354600160a060020a031681565b6000828202831580610716575082848281151561071357fe5b04145b151561071e57fe5b93925050505600a165627a7a723058204032b8e3dbd4f758e44ff70aa9e91802ad7cc463a81b686b40af7ec6db7479c90029",
  "deployedBytecode": "0x6080604052600436106100ae5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630d2806ad81146100b05780632e1a7d4d146100d757806345710074146100ef57806345cfad3e1461010457806354fd4d50146101195780635e35359e146101a357806379ba5097146101cd5780638da5cb5b146101e2578063d4ee1d9014610213578063f2fde38b14610228578063fc0c546a14610249575b005b3480156100bc57600080fd5b506100c561025e565b60408051918252519081900360200190f35b3480156100e357600080fd5b506100ae600435610263565b3480156100fb57600080fd5b506100c56102ab565b34801561011057600080fd5b506100c5610442565b34801561012557600080fd5b5061012e610447565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610168578181015183820152602001610150565b50505050905090810190601f1680156101955780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101af57600080fd5b506100ae600160a060020a03600435811690602435166044356104d2565b3480156101d957600080fd5b506100ae6105e4565b3480156101ee57600080fd5b506101f761066c565b60408051600160a060020a039092168252519081900360200190f35b34801561021f57600080fd5b506101f761067b565b34801561023457600080fd5b506100ae600160a060020a036004351661068a565b34801561025557600080fd5b506101f76106eb565b606481565b600054600160a060020a0316331461027a57600080fd5b604051339082156108fc029083906000818181858888f193505050501580156102a7573d6000803e3d6000fd5b5050565b600354604080517fdd62ed3e000000000000000000000000000000000000000000000000000000008152336004820152306024820152905160009283928392600160a060020a039092169163dd62ed3e9160448082019260209290919082900301818787803b15801561031d57600080fd5b505af1158015610331573d6000803e3d6000fd5b505050506040513d602081101561034757600080fd5b5051600354604080517f23b872dd000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018490529051929450600160a060020a03909116916323b872dd916064808201926020929091908290030181600087803b1580156103bf57600080fd5b505af11580156103d3573d6000803e3d6000fd5b505050506040513d60208110156103e957600080fd5b505115156103f357fe5b60646104008360016106fa565b81151561040957fe5b6040519190049150339082156108fc029083906000818181858888f1935050505015801561043b573d6000803e3d6000fd5b5092915050565b600181565b6002805460408051602060018416156101000260001901909316849004601f810184900484028201840190925281815292918301828280156104ca5780601f1061049f576101008083540402835291602001916104ca565b820191906000526020600020905b8154815290600101906020018083116104ad57829003601f168201915b505050505081565b600054600160a060020a031633146104e957600080fd5b82600160a060020a03811615156104ff57600080fd5b82600160a060020a038116151561051557600080fd5b83600160a060020a03811630141561052c57600080fd5b85600160a060020a031663a9059cbb86866040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050602060405180830381600087803b1580156105a857600080fd5b505af11580156105bc573d6000803e3d6000fd5b505050506040513d60208110156105d257600080fd5b505115156105dc57fe5b505050505050565b600154600160a060020a031633146105fb57600080fd5b60015460008054604051600160a060020a0393841693909116917f343765429aea5a34b3ff6a3785a98a5abb2597aca87bfbb58632c173d585373a91a3600180546000805473ffffffffffffffffffffffffffffffffffffffff19908116600160a060020a03841617909155169055565b600054600160a060020a031681565b600154600160a060020a031681565b600054600160a060020a031633146106a157600080fd5b600054600160a060020a03828116911614156106bc57600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600354600160a060020a031681565b6000828202831580610716575082848281151561071357fe5b04145b151561071e57fe5b93925050505600a165627a7a723058204032b8e3dbd4f758e44ff70aa9e91802ad7cc463a81b686b40af7ec6db7479c90029",
  "sourceMap": "611:29:24:-;374:1553;611:29;;374:1553;611:29;;;;;;;;;;;;;;:::i;:::-;;825:111;8:9:-1;5:2;;;30:1;27;20:12;5:2;825:111:24;;;;;;;;;;;;;361:5:35;:18;;-1:-1:-1;;;;;;361:18:35;369:10;361:18;;;825:111:24;-1:-1:-1;;;;;432:22:37;;;;424:31;;;;;;-1:-1:-1;915:5:24;:14;;-1:-1:-1;;;;;;915:14:24;-1:-1:-1;;;;;915:14:24;;;;;;;;;;374:1553;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;374:1553:24;;;-1:-1:-1;374:1553:24;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "374:1553:24:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;518:43;;8:9:-1;5:2;;;30:1;27;20:12;5:2;518:43:24;;;;;;;;;;;;;;;;;;;;1713:116;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1713:116:24;;;;;1103:493;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1103:493:24;;;;428:41;;8:9:-1;5:2;;;30:1;27;20:12;5:2;428:41:24;;;;611:29;;8:9:-1;5:2;;;30:1;27;20:12;5:2;611:29:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;611:29:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;899:241:36;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;899:241:36;-1:-1:-1;;;;;899:241:36;;;;;;;;;;;;963:182:35;;8:9:-1;5:2;;;30:1;27;20:12;5:2;963:182:35;;;;155:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;155:20:35;;;;;;;;-1:-1:-1;;;;;155:20:35;;;;;;;;;;;;;;181:23;;8:9:-1;5:2;;;30:1;27;20:12;5:2;181:23:35;;;;740:137;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;740:137:35;-1:-1:-1;;;;;740:137:35;;;;;646:24:24;;8:9:-1;5:2;;;30:1;27;20:12;5:2;646:24:24;;;;518:43;558:3;518:43;:::o;1713:116::-;485:5:35;;-1:-1:-1;;;;;485:5:35;471:10;:19;463:28;;;;;;1775::24;;:10;;:28;;;;;1795:7;;1775:28;;;;1795:7;1775:10;:28;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1775:28:24;1713:116;:::o;1103:493::-;1181:5;;:33;;;;;;1197:10;1181:33;;;;1209:4;1181:33;;;;;;1135:14;;;;;;-1:-1:-1;;;;;1181:5:24;;;;:15;;:33;;;;;;;;;;;;;;;1135:14;1181:5;:33;;;5:2:-1;;;;30:1;27;20:12;5:2;1181:33:24;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1181:33:24;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1181:33:24;1264:5;;:47;;;;;;1283:10;1264:47;;;;1295:4;1264:47;;;;;;;;;;;;1181:33;;-1:-1:-1;;;;;;1264:5:24;;;;:18;;:47;;;;;1181:33;;1264:47;;;;;;;;:5;;:47;;;5:2:-1;;;;30:1;27;20:12;5:2;1264:47:24;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1264:47:24;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1264:47:24;1257:55;;;;;;558:3;1398:33;1406:9;468:1;1398:7;:33::i;:::-;:49;;;;;;;1494:31;;1398:49;;;;-1:-1:-1;1494:10:24;;:31;;;;;1398:49;;1494:31;;;;1398:49;1494:10;:31;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;-1:-1;1579:10:24;1103:493;-1:-1:-1;;1103:493:24:o;428:41::-;468:1;428:41;:::o;611:29::-;;;;;;;;;;;;;;-1:-1:-1;;611:29:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;899:241:36:-;485:5:35;;-1:-1:-1;;;;;485:5:35;471:10;:19;463:28;;;;;;1027:6:36;-1:-1:-1;;;;;432:22:37;;;;424:31;;;;;;1056:3:36;-1:-1:-1;;;;;432:22:37;;;;424:31;;;;;;1077:3:36;-1:-1:-1;;;;;605:25:37;;625:4;605:25;;597:34;;;;;;1103:6:36;-1:-1:-1;;;;;1103:15:36;;1119:3;1124:7;1103:29;;;;;;;;;;;;;-1:-1:-1;;;;;1103:29:36;-1:-1:-1;;;;;1103:29:36;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1103:29:36;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1103:29:36;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1103:29:36;1096:37;;;;;;465:1:37;;501::35;899:241:36;;;:::o;963:182:35:-;1029:8;;-1:-1:-1;;;;;1029:8:35;1015:10;:22;1007:31;;;;;;1072:8;;;1065:5;;1053:28;;-1:-1:-1;;;;;1072:8:35;;;;1065:5;;;;1053:28;;;1099:8;;;;1091:16;;-1:-1:-1;;1091:16:35;;;-1:-1:-1;;;;;1099:8:35;;1091:16;;;;1117:21;;;963:182::o;155:20::-;;;-1:-1:-1;;;;;155:20:35;;:::o;181:23::-;;;-1:-1:-1;;;;;181:23:35;;:::o;740:137::-;485:5;;-1:-1:-1;;;;;485:5:35;471:10;:19;463:28;;;;;;834:5;;-1:-1:-1;;;;;821:18:35;;;834:5;;821:18;;813:27;;;;;;850:8;:20;;-1:-1:-1;;850:20:35;-1:-1:-1;;;;;850:20:35;;;;;;;;;;740:137::o;646:24:24:-;;;-1:-1:-1;;;;;646:24:24;;:::o;1569:168:37:-;1633:7;1664;;;1688;;;:23;;;1709:2;1703;1699:1;:6;;;;;;;;:12;1688:23;1681:31;;;;;;1729:1;1569:168;-1:-1:-1;;;1569:168:37:o",
  "source": "pragma solidity ^0.4.24;\nimport '../utility/TokenHolder.sol';\nimport '../utility/Owned.sol';\nimport '../utility/Utils.sol';\nimport '../token/interfaces/ISmartToken.sol';\n\n/*\n    BancorPriceFloor v0.1\n\n    The bancor price floor contract is a simple contract that allows selling smart tokens for a constant ETH price\n\n    'Owned' is specified here for readability reasons\n*/\ncontract BancorPriceFloor is Owned, TokenHolder {\n    uint256 public constant TOKEN_PRICE_N = 1;      // crowdsale price in wei (numerator)\n    uint256 public constant TOKEN_PRICE_D = 100;    // crowdsale price in wei (denominator)\n\n    string public version = '0.1';\n    ISmartToken public token; // smart token the contract allows selling\n\n    /**\n        @dev constructor\n\n        @param _token   smart token the contract allows selling\n    */\n    constructor(ISmartToken _token)\n        public\n        validAddress(_token)\n    {\n        token = _token;\n    }\n\n    /**\n        @dev sells the smart token for ETH\n        note that the function will sell the full allowance amount\n\n        @return ETH sent in return\n    */\n    function sell() public returns (uint256 amount) {\n        uint256 allowance = token.allowance(msg.sender, this); // get the full allowance amount\n        assert(token.transferFrom(msg.sender, this, allowance)); // transfer all tokens from the sender to the contract\n        uint256 etherValue = safeMul(allowance, TOKEN_PRICE_N) / TOKEN_PRICE_D; // calculate ETH value of the tokens\n        msg.sender.transfer(etherValue); // send the ETH amount to the seller\n        return etherValue;\n    }\n\n    /**\n        @dev withdraws ETH from the contract\n\n        @param _amount  amount of ETH to withdraw\n    */\n    function withdraw(uint256 _amount) public ownerOnly {\n        msg.sender.transfer(_amount); // send the amount\n    }\n\n    /**\n        @dev deposits ETH in the contract\n    */\n    function() public payable {\n    }\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/legacy/BancorPriceFloor.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/legacy/BancorPriceFloor.sol",
    "exportedSymbols": {
      "BancorPriceFloor": [
        8065
      ]
    },
    "id": 8066,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 7968,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:24"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/TokenHolder.sol",
        "file": "../utility/TokenHolder.sol",
        "id": 7969,
        "nodeType": "ImportDirective",
        "scope": 8066,
        "sourceUnit": 9561,
        "src": "25:36:24",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/Owned.sol",
        "file": "../utility/Owned.sol",
        "id": 7970,
        "nodeType": "ImportDirective",
        "scope": 8066,
        "sourceUnit": 9515,
        "src": "62:30:24",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/Utils.sol",
        "file": "../utility/Utils.sol",
        "id": 7971,
        "nodeType": "ImportDirective",
        "scope": 8066,
        "sourceUnit": 9682,
        "src": "93:30:24",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/ISmartToken.sol",
        "file": "../token/interfaces/ISmartToken.sol",
        "id": 7972,
        "nodeType": "ImportDirective",
        "scope": 8066,
        "sourceUnit": 8954,
        "src": "124:45:24",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 7973,
              "name": "Owned",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9514,
              "src": "403:5:24",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Owned_$9514",
                "typeString": "contract Owned"
              }
            },
            "id": 7974,
            "nodeType": "InheritanceSpecifier",
            "src": "403:5:24"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 7975,
              "name": "TokenHolder",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9560,
              "src": "410:11:24",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_TokenHolder_$9560",
                "typeString": "contract TokenHolder"
              }
            },
            "id": 7976,
            "nodeType": "InheritanceSpecifier",
            "src": "410:11:24"
          }
        ],
        "contractDependencies": [
          9514,
          9560,
          9681,
          9887,
          9903
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 8065,
        "linearizedBaseContracts": [
          8065,
          9560,
          9681,
          9514,
          9903,
          9887
        ],
        "name": "BancorPriceFloor",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 7979,
            "name": "TOKEN_PRICE_N",
            "nodeType": "VariableDeclaration",
            "scope": 8065,
            "src": "428:41:24",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 7977,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "428:7:24",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "31",
              "id": 7978,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "468:1:24",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1_by_1",
                "typeString": "int_const 1"
              },
              "value": "1"
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 7982,
            "name": "TOKEN_PRICE_D",
            "nodeType": "VariableDeclaration",
            "scope": 8065,
            "src": "518:43:24",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 7980,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "518:7:24",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "313030",
              "id": 7981,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "558:3:24",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_100_by_1",
                "typeString": "int_const 100"
              },
              "value": "100"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 7985,
            "name": "version",
            "nodeType": "VariableDeclaration",
            "scope": 8065,
            "src": "611:29:24",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 7983,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "611:6:24",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "302e31",
              "id": 7984,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "635:5:24",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_8cd160c72d102a6747abd189ac21d4a1f802e3fcc1bb8fc78cc4d558df0c7c21",
                "typeString": "literal_string \"0.1\""
              },
              "value": "0.1"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 7987,
            "name": "token",
            "nodeType": "VariableDeclaration",
            "scope": 8065,
            "src": "646:24:24",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_ISmartToken_$8953",
              "typeString": "contract ISmartToken"
            },
            "typeName": {
              "contractScope": null,
              "id": 7986,
              "name": "ISmartToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8953,
              "src": "646:11:24",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ISmartToken_$8953",
                "typeString": "contract ISmartToken"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7999,
              "nodeType": "Block",
              "src": "905:31:24",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7997,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 7995,
                      "name": "token",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7987,
                      "src": "915:5:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ISmartToken_$8953",
                        "typeString": "contract ISmartToken"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 7996,
                      "name": "_token",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7989,
                      "src": "923:6:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ISmartToken_$8953",
                        "typeString": "contract ISmartToken"
                      }
                    },
                    "src": "915:14:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ISmartToken_$8953",
                      "typeString": "contract ISmartToken"
                    }
                  },
                  "id": 7998,
                  "nodeType": "ExpressionStatement",
                  "src": "915:14:24"
                }
              ]
            },
            "documentation": "@dev constructor\n@param _token   smart token the contract allows selling",
            "id": 8000,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 7992,
                    "name": "_token",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7989,
                    "src": "893:6:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ISmartToken_$8953",
                      "typeString": "contract ISmartToken"
                    }
                  }
                ],
                "id": 7993,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 7991,
                  "name": "validAddress",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9592,
                  "src": "880:12:24",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "880:20:24"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7990,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7989,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 8000,
                  "src": "837:18:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ISmartToken_$8953",
                    "typeString": "contract ISmartToken"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 7988,
                    "name": "ISmartToken",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 8953,
                    "src": "837:11:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ISmartToken_$8953",
                      "typeString": "contract ISmartToken"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "836:20:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 7994,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "905:0:24"
            },
            "scope": 8065,
            "src": "825:111:24",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8043,
              "nodeType": "Block",
              "src": "1151:445:24",
              "statements": [
                {
                  "assignments": [
                    8006
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 8006,
                      "name": "allowance",
                      "nodeType": "VariableDeclaration",
                      "scope": 8044,
                      "src": "1161:17:24",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 8005,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1161:7:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 8013,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 8009,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27908,
                          "src": "1197:3:24",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 8010,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1197:10:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 8011,
                        "name": "this",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28015,
                        "src": "1209:4:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_BancorPriceFloor_$8065",
                          "typeString": "contract BancorPriceFloor"
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
                          "typeIdentifier": "t_contract$_BancorPriceFloor_$8065",
                          "typeString": "contract BancorPriceFloor"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 8007,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7987,
                        "src": "1181:5:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ISmartToken_$8953",
                          "typeString": "contract ISmartToken"
                        }
                      },
                      "id": 8008,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "allowance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8871,
                      "src": "1181:15:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_pure$_t_address_$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address,address) pure external returns (uint256)"
                      }
                    },
                    "id": 8012,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1181:33:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1161:53:24"
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
                            "expression": {
                              "argumentTypes": null,
                              "id": 8017,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 27908,
                              "src": "1283:3:24",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 8018,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1283:10:24",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 8019,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28015,
                            "src": "1295:4:24",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_BancorPriceFloor_$8065",
                              "typeString": "contract BancorPriceFloor"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 8020,
                            "name": "allowance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8006,
                            "src": "1301:9:24",
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
                              "typeIdentifier": "t_contract$_BancorPriceFloor_$8065",
                              "typeString": "contract BancorPriceFloor"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 8015,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7987,
                            "src": "1264:5:24",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ISmartToken_$8953",
                              "typeString": "contract ISmartToken"
                            }
                          },
                          "id": 8016,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transferFrom",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8891,
                          "src": "1264:18:24",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,address,uint256) external returns (bool)"
                          }
                        },
                        "id": 8021,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1264:47:24",
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
                      "id": 8014,
                      "name": "assert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27897,
                      "src": "1257:6:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_assert_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 8022,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1257:55:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 8023,
                  "nodeType": "ExpressionStatement",
                  "src": "1257:55:24"
                },
                {
                  "assignments": [
                    8025
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 8025,
                      "name": "etherValue",
                      "nodeType": "VariableDeclaration",
                      "scope": 8044,
                      "src": "1377:18:24",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 8024,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1377:7:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 8032,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 8031,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 8027,
                          "name": "allowance",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8006,
                          "src": "1406:9:24",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 8028,
                          "name": "TOKEN_PRICE_N",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7979,
                          "src": "1417:13:24",
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
                        "id": 8026,
                        "name": "safeMul",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9680,
                        "src": "1398:7:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 8029,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1398:33:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 8030,
                      "name": "TOKEN_PRICE_D",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7982,
                      "src": "1434:13:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1398:49:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1377:70:24"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 8038,
                        "name": "etherValue",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8025,
                        "src": "1514:10:24",
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
                        "expression": {
                          "argumentTypes": null,
                          "id": 8033,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27908,
                          "src": "1494:3:24",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 8036,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1494:10:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 8037,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1494:19:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 8039,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1494:31:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 8040,
                  "nodeType": "ExpressionStatement",
                  "src": "1494:31:24"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 8041,
                    "name": "etherValue",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 8025,
                    "src": "1579:10:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 8004,
                  "id": 8042,
                  "nodeType": "Return",
                  "src": "1572:17:24"
                }
              ]
            },
            "documentation": "@dev sells the smart token for ETH\nnote that the function will sell the full allowance amount\n@return ETH sent in return",
            "id": 8044,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "sell",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8001,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1116:2:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 8004,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8003,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8044,
                  "src": "1135:14:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8002,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1135:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1134:16:24"
            },
            "scope": 8065,
            "src": "1103:493:24",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8059,
              "nodeType": "Block",
              "src": "1765:64:24",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 8056,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8046,
                        "src": "1795:7:24",
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
                        "expression": {
                          "argumentTypes": null,
                          "id": 8051,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27908,
                          "src": "1775:3:24",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 8054,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1775:10:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 8055,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1775:19:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 8057,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1775:28:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 8058,
                  "nodeType": "ExpressionStatement",
                  "src": "1775:28:24"
                }
              ]
            },
            "documentation": "@dev withdraws ETH from the contract\n@param _amount  amount of ETH to withdraw",
            "id": 8060,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 8049,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 8048,
                  "name": "ownerOnly",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9469,
                  "src": "1755:9:24",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1755:9:24"
              }
            ],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8047,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8046,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8060,
                  "src": "1731:15:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8045,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1731:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1730:17:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 8050,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1765:0:24"
            },
            "scope": 8065,
            "src": "1713:116:24",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8063,
              "nodeType": "Block",
              "src": "1918:7:24",
              "statements": []
            },
            "documentation": "@dev deposits ETH in the contract",
            "id": 8064,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8061,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1900:2:24"
            },
            "payable": true,
            "returnParameters": {
              "id": 8062,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1918:0:24"
            },
            "scope": 8065,
            "src": "1892:33:24",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 8066,
        "src": "374:1553:24"
      }
    ],
    "src": "0:1928:24"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/legacy/BancorPriceFloor.sol",
    "exportedSymbols": {
      "BancorPriceFloor": [
        8065
      ]
    },
    "id": 8066,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 7968,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:24"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/TokenHolder.sol",
        "file": "../utility/TokenHolder.sol",
        "id": 7969,
        "nodeType": "ImportDirective",
        "scope": 8066,
        "sourceUnit": 9561,
        "src": "25:36:24",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/Owned.sol",
        "file": "../utility/Owned.sol",
        "id": 7970,
        "nodeType": "ImportDirective",
        "scope": 8066,
        "sourceUnit": 9515,
        "src": "62:30:24",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/Utils.sol",
        "file": "../utility/Utils.sol",
        "id": 7971,
        "nodeType": "ImportDirective",
        "scope": 8066,
        "sourceUnit": 9682,
        "src": "93:30:24",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/ISmartToken.sol",
        "file": "../token/interfaces/ISmartToken.sol",
        "id": 7972,
        "nodeType": "ImportDirective",
        "scope": 8066,
        "sourceUnit": 8954,
        "src": "124:45:24",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 7973,
              "name": "Owned",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9514,
              "src": "403:5:24",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Owned_$9514",
                "typeString": "contract Owned"
              }
            },
            "id": 7974,
            "nodeType": "InheritanceSpecifier",
            "src": "403:5:24"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 7975,
              "name": "TokenHolder",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9560,
              "src": "410:11:24",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_TokenHolder_$9560",
                "typeString": "contract TokenHolder"
              }
            },
            "id": 7976,
            "nodeType": "InheritanceSpecifier",
            "src": "410:11:24"
          }
        ],
        "contractDependencies": [
          9514,
          9560,
          9681,
          9887,
          9903
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 8065,
        "linearizedBaseContracts": [
          8065,
          9560,
          9681,
          9514,
          9903,
          9887
        ],
        "name": "BancorPriceFloor",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 7979,
            "name": "TOKEN_PRICE_N",
            "nodeType": "VariableDeclaration",
            "scope": 8065,
            "src": "428:41:24",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 7977,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "428:7:24",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "31",
              "id": 7978,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "468:1:24",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1_by_1",
                "typeString": "int_const 1"
              },
              "value": "1"
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 7982,
            "name": "TOKEN_PRICE_D",
            "nodeType": "VariableDeclaration",
            "scope": 8065,
            "src": "518:43:24",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 7980,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "518:7:24",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "313030",
              "id": 7981,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "558:3:24",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_100_by_1",
                "typeString": "int_const 100"
              },
              "value": "100"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 7985,
            "name": "version",
            "nodeType": "VariableDeclaration",
            "scope": 8065,
            "src": "611:29:24",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 7983,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "611:6:24",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "302e31",
              "id": 7984,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "635:5:24",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_8cd160c72d102a6747abd189ac21d4a1f802e3fcc1bb8fc78cc4d558df0c7c21",
                "typeString": "literal_string \"0.1\""
              },
              "value": "0.1"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 7987,
            "name": "token",
            "nodeType": "VariableDeclaration",
            "scope": 8065,
            "src": "646:24:24",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_ISmartToken_$8953",
              "typeString": "contract ISmartToken"
            },
            "typeName": {
              "contractScope": null,
              "id": 7986,
              "name": "ISmartToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8953,
              "src": "646:11:24",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ISmartToken_$8953",
                "typeString": "contract ISmartToken"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7999,
              "nodeType": "Block",
              "src": "905:31:24",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7997,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 7995,
                      "name": "token",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7987,
                      "src": "915:5:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ISmartToken_$8953",
                        "typeString": "contract ISmartToken"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 7996,
                      "name": "_token",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7989,
                      "src": "923:6:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ISmartToken_$8953",
                        "typeString": "contract ISmartToken"
                      }
                    },
                    "src": "915:14:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ISmartToken_$8953",
                      "typeString": "contract ISmartToken"
                    }
                  },
                  "id": 7998,
                  "nodeType": "ExpressionStatement",
                  "src": "915:14:24"
                }
              ]
            },
            "documentation": "@dev constructor\n@param _token   smart token the contract allows selling",
            "id": 8000,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 7992,
                    "name": "_token",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7989,
                    "src": "893:6:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ISmartToken_$8953",
                      "typeString": "contract ISmartToken"
                    }
                  }
                ],
                "id": 7993,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 7991,
                  "name": "validAddress",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9592,
                  "src": "880:12:24",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "880:20:24"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7990,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7989,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 8000,
                  "src": "837:18:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ISmartToken_$8953",
                    "typeString": "contract ISmartToken"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 7988,
                    "name": "ISmartToken",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 8953,
                    "src": "837:11:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ISmartToken_$8953",
                      "typeString": "contract ISmartToken"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "836:20:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 7994,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "905:0:24"
            },
            "scope": 8065,
            "src": "825:111:24",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8043,
              "nodeType": "Block",
              "src": "1151:445:24",
              "statements": [
                {
                  "assignments": [
                    8006
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 8006,
                      "name": "allowance",
                      "nodeType": "VariableDeclaration",
                      "scope": 8044,
                      "src": "1161:17:24",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 8005,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1161:7:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 8013,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 8009,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27908,
                          "src": "1197:3:24",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 8010,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1197:10:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 8011,
                        "name": "this",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28015,
                        "src": "1209:4:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_BancorPriceFloor_$8065",
                          "typeString": "contract BancorPriceFloor"
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
                          "typeIdentifier": "t_contract$_BancorPriceFloor_$8065",
                          "typeString": "contract BancorPriceFloor"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 8007,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7987,
                        "src": "1181:5:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ISmartToken_$8953",
                          "typeString": "contract ISmartToken"
                        }
                      },
                      "id": 8008,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "allowance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8871,
                      "src": "1181:15:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_pure$_t_address_$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address,address) pure external returns (uint256)"
                      }
                    },
                    "id": 8012,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1181:33:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1161:53:24"
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
                            "expression": {
                              "argumentTypes": null,
                              "id": 8017,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 27908,
                              "src": "1283:3:24",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 8018,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1283:10:24",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 8019,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28015,
                            "src": "1295:4:24",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_BancorPriceFloor_$8065",
                              "typeString": "contract BancorPriceFloor"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 8020,
                            "name": "allowance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8006,
                            "src": "1301:9:24",
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
                              "typeIdentifier": "t_contract$_BancorPriceFloor_$8065",
                              "typeString": "contract BancorPriceFloor"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 8015,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7987,
                            "src": "1264:5:24",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ISmartToken_$8953",
                              "typeString": "contract ISmartToken"
                            }
                          },
                          "id": 8016,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transferFrom",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8891,
                          "src": "1264:18:24",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,address,uint256) external returns (bool)"
                          }
                        },
                        "id": 8021,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1264:47:24",
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
                      "id": 8014,
                      "name": "assert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27897,
                      "src": "1257:6:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_assert_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 8022,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1257:55:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 8023,
                  "nodeType": "ExpressionStatement",
                  "src": "1257:55:24"
                },
                {
                  "assignments": [
                    8025
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 8025,
                      "name": "etherValue",
                      "nodeType": "VariableDeclaration",
                      "scope": 8044,
                      "src": "1377:18:24",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 8024,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1377:7:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 8032,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 8031,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 8027,
                          "name": "allowance",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8006,
                          "src": "1406:9:24",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 8028,
                          "name": "TOKEN_PRICE_N",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7979,
                          "src": "1417:13:24",
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
                        "id": 8026,
                        "name": "safeMul",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9680,
                        "src": "1398:7:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 8029,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1398:33:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 8030,
                      "name": "TOKEN_PRICE_D",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7982,
                      "src": "1434:13:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1398:49:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1377:70:24"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 8038,
                        "name": "etherValue",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8025,
                        "src": "1514:10:24",
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
                        "expression": {
                          "argumentTypes": null,
                          "id": 8033,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27908,
                          "src": "1494:3:24",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 8036,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1494:10:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 8037,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1494:19:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 8039,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1494:31:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 8040,
                  "nodeType": "ExpressionStatement",
                  "src": "1494:31:24"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 8041,
                    "name": "etherValue",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 8025,
                    "src": "1579:10:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 8004,
                  "id": 8042,
                  "nodeType": "Return",
                  "src": "1572:17:24"
                }
              ]
            },
            "documentation": "@dev sells the smart token for ETH\nnote that the function will sell the full allowance amount\n@return ETH sent in return",
            "id": 8044,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "sell",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8001,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1116:2:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 8004,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8003,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8044,
                  "src": "1135:14:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8002,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1135:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1134:16:24"
            },
            "scope": 8065,
            "src": "1103:493:24",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8059,
              "nodeType": "Block",
              "src": "1765:64:24",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 8056,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8046,
                        "src": "1795:7:24",
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
                        "expression": {
                          "argumentTypes": null,
                          "id": 8051,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27908,
                          "src": "1775:3:24",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 8054,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1775:10:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 8055,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1775:19:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 8057,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1775:28:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 8058,
                  "nodeType": "ExpressionStatement",
                  "src": "1775:28:24"
                }
              ]
            },
            "documentation": "@dev withdraws ETH from the contract\n@param _amount  amount of ETH to withdraw",
            "id": 8060,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 8049,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 8048,
                  "name": "ownerOnly",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9469,
                  "src": "1755:9:24",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1755:9:24"
              }
            ],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8047,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8046,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8060,
                  "src": "1731:15:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8045,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1731:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1730:17:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 8050,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1765:0:24"
            },
            "scope": 8065,
            "src": "1713:116:24",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8063,
              "nodeType": "Block",
              "src": "1918:7:24",
              "statements": []
            },
            "documentation": "@dev deposits ETH in the contract",
            "id": 8064,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8061,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1900:2:24"
            },
            "payable": true,
            "returnParameters": {
              "id": 8062,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1918:0:24"
            },
            "scope": 8065,
            "src": "1892:33:24",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 8066,
        "src": "374:1553:24"
      }
    ],
    "src": "0:1928:24"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-12-03T18:35:11.934Z"
}