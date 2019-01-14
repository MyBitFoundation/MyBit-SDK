"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var ContractRegistry = exports.ContractRegistry = 
{
  "contractName": "ContractRegistry",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "BANCOR_CONVERTER_UPGRADER",
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
      "inputs": [],
      "name": "BNT_TOKEN",
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
      "inputs": [],
      "name": "CONTRACT_REGISTRY",
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
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "contractNames",
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
      "name": "BANCOR_CONVERTER_FACTORY",
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
      "inputs": [],
      "name": "BNT_CONVERTER",
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
      "inputs": [],
      "name": "BANCOR_FORMULA",
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
      "name": "CONTRACT_FEATURES",
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
      "name": "BANCOR_NETWORK",
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
      "inputs": [],
      "name": "BANCOR_GAS_PRICE_LIMIT",
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
      "inputs": [],
      "name": "BANCOR_X",
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
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_contractName",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "_contractAddress",
          "type": "address"
        }
      ],
      "name": "AddressUpdate",
      "type": "event"
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
      "constant": true,
      "inputs": [],
      "name": "itemCount",
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
          "name": "_contractName",
          "type": "bytes32"
        }
      ],
      "name": "addressOf",
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
          "name": "_contractName",
          "type": "bytes32"
        },
        {
          "name": "_contractAddress",
          "type": "address"
        }
      ],
      "name": "registerAddress",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_contractName",
          "type": "bytes32"
        }
      ],
      "name": "unregisterAddress",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_contractName",
          "type": "bytes32"
        }
      ],
      "name": "getAddress",
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
  "bytecode": "0x60806040523480156200001157600080fd5b5060008054600160a060020a03191633179055620000597f436f6e7472616374526567697374727900000000000000000000000000000000306401000000006200005f810204565b620002c2565b60008054600160a060020a031633146200007857600080fd5b81600160a060020a03811615156200008f57600080fd5b60008481526002602081905260409091208054600160a060020a031916600160a060020a038616178155015460ff1615156200013f57600084815260026020819052604090912001805460ff191660011790556003620000f88564010000000062000184810204565b8154600181018084556000938452602093849020835191946200012294919093019201906200021d565b506000858152600260205260409020600019820160019091015591505b60408051600160a060020a0385168152905185917ffc08d1253c81bcd5444fc7056ef1f5a5df4c9220b6fd70d7449267f1f0f29918919081900360200190a250505050565b6040805160208082528183019092526060918291600091808201610400803883390190505091505b60208110156200021657838160208110620001c357fe5b1a7f0100000000000000000000000000000000000000000000000000000000000000028282815181101515620001f557fe5b906020010190600160f860020a031916908160001a905350600101620001ac565b5092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200026057805160ff191683800117855562000290565b8280016001018555821562000290579182015b828111156200029057825182559160200191906001019062000273565b506200029e929150620002a2565b5090565b620002bf91905b808211156200029e5760008155600101620002a9565b90565b610bc480620002d26000396000f3006080604052600436106101115763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630c87355e81146101165780631d000b611461013d57806321f8a7211461015257806325f9bfef146101865780632bbd95301461019b5780633ca6bb92146101b55780635a46f06c1461024257806362614ae614610257578063662de3791461026c5780636bfb0d01146102905780636d7bd3fc146102a557806379ba5097146102ba57806383315b6e146102cf5780638da5cb5b146102e45780639232494e146102f95780639249993a1461030e578063bb34534c14610323578063c4a8598e1461033b578063d4ee1d9014610350578063f2fde38b14610365575b600080fd5b34801561012257600080fd5b5061012b610386565b60408051918252519081900360200190f35b34801561014957600080fd5b5061012b6103aa565b34801561015e57600080fd5b5061016a6004356103ce565b60408051600160a060020a039092168252519081900360200190f35b34801561019257600080fd5b5061012b6103df565b3480156101a757600080fd5b506101b3600435610403565b005b3480156101c157600080fd5b506101cd6004356105cb565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102075781810151838201526020016101ef565b50505050905090810190601f1680156102345780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561024e57600080fd5b5061012b610672565b34801561026357600080fd5b5061012b610696565b34801561027857600080fd5b506101b3600435600160a060020a03602435166106ba565b34801561029c57600080fd5b5061012b6107dc565b3480156102b157600080fd5b5061012b6107e3565b3480156102c657600080fd5b506101b3610807565b3480156102db57600080fd5b5061012b61088f565b3480156102f057600080fd5b5061016a6108b3565b34801561030557600080fd5b5061012b6108c2565b34801561031a57600080fd5b5061012b6108e6565b34801561032f57600080fd5b5061016a60043561090a565b34801561034757600080fd5b5061012b610925565b34801561035c57600080fd5b5061016a610949565b34801561037157600080fd5b506101b3600160a060020a0360043516610958565b7f42616e636f72436f6e766572746572557067726164657200000000000000000081565b7f424e54546f6b656e00000000000000000000000000000000000000000000000081565b60006103d98261090a565b92915050565b7f436f6e747261637452656769737472790000000000000000000000000000000081565b600080546060919081908190600160a060020a0316331461042357600080fd5b6000858152600260205260409020805473ffffffffffffffffffffffffffffffffffffffff19169055600354600110156105685760038054600019810190811061046957fe5b600091825260209182902001805460408051601f60026000196101006001871615020190941693909304928301859004850281018501909152818152928301828280156104f75780601f106104cc576101008083540402835291602001916104f7565b820191906000526020600020905b8154815290600101906020018083116104da57829003601f168201915b505050600088815260026020526040902060010154600380549498509096508793909250869150811061052657fe5b906000526020600020019080519060200190610543929190610a6d565b5061054d846109b9565b60008181526002602052604090206001810185905590925090505b600380549061057b906000198301610aeb565b50600085815260026020908152604080832060010183905580519283525187927ffc08d1253c81bcd5444fc7056ef1f5a5df4c9220b6fd70d7449267f1f0f2991892908290030190a25050505050565b60038054829081106105d957fe5b600091825260209182902001805460408051601f600260001961010060018716150201909416939093049283018590048502810185019091528181529350909183018282801561066a5780601f1061063f5761010080835404028352916020019161066a565b820191906000526020600020905b81548152906001019060200180831161064d57829003601f168201915b505050505081565b7f42616e636f72436f6e766572746572466163746f72790000000000000000000081565b7f424e54436f6e766572746572000000000000000000000000000000000000000081565b60008054600160a060020a031633146106d257600080fd5b81600160a060020a03811615156106e857600080fd5b6000848152600260208190526040909120805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a038616178155015460ff16151561079757600084815260026020819052604090912001805460ff191660011790556003610752856109c0565b81546001810180845560009384526020938490208351919461077a9491909301920190610a6d565b506000858152600260205260409020600019820160019091015591505b60408051600160a060020a0385168152905185917ffc08d1253c81bcd5444fc7056ef1f5a5df4c9220b6fd70d7449267f1f0f29918919081900360200190a250505050565b6003545b90565b7f42616e636f72466f726d756c610000000000000000000000000000000000000081565b600154600160a060020a0316331461081e57600080fd5b60015460008054604051600160a060020a0393841693909116917f343765429aea5a34b3ff6a3785a98a5abb2597aca87bfbb58632c173d585373a91a3600180546000805473ffffffffffffffffffffffffffffffffffffffff19908116600160a060020a03841617909155169055565b7f436f6e747261637446656174757265730000000000000000000000000000000081565b600054600160a060020a031681565b7f42616e636f724e6574776f726b0000000000000000000000000000000000000081565b7f42616e636f7247617350726963654c696d69740000000000000000000000000081565b600090815260026020526040902054600160a060020a031690565b7f42616e636f72580000000000000000000000000000000000000000000000000081565b600154600160a060020a031681565b600054600160a060020a0316331461096f57600080fd5b600054600160a060020a038281169116141561098a57600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b6020015190565b6040805160208082528183019092526060918291600091808201610400803883390190505091505b6020811015610a66578381602081106109fd57fe5b1a7f0100000000000000000000000000000000000000000000000000000000000000028282815181101515610a2e57fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506001016109e8565b5092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610aae57805160ff1916838001178555610adb565b82800160010185558215610adb579182015b82811115610adb578251825591602001919060010190610ac0565b50610ae7929150610b14565b5090565b815481835581811115610b0f57600083815260209020610b0f918101908301610b2e565b505050565b6107e091905b80821115610ae75760008155600101610b1a565b6107e091905b80821115610ae7576000610b488282610b51565b50600101610b34565b50805460018160011615610100020316600290046000825580601f10610b775750610b95565b601f016020900490600052602060002090810190610b959190610b14565b505600a165627a7a723058209f2e616d15079e5a439c821de5692fc6d6a97f0714e210172e2dd2348af5755c0029",
  "deployedBytecode": "0x6080604052600436106101115763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630c87355e81146101165780631d000b611461013d57806321f8a7211461015257806325f9bfef146101865780632bbd95301461019b5780633ca6bb92146101b55780635a46f06c1461024257806362614ae614610257578063662de3791461026c5780636bfb0d01146102905780636d7bd3fc146102a557806379ba5097146102ba57806383315b6e146102cf5780638da5cb5b146102e45780639232494e146102f95780639249993a1461030e578063bb34534c14610323578063c4a8598e1461033b578063d4ee1d9014610350578063f2fde38b14610365575b600080fd5b34801561012257600080fd5b5061012b610386565b60408051918252519081900360200190f35b34801561014957600080fd5b5061012b6103aa565b34801561015e57600080fd5b5061016a6004356103ce565b60408051600160a060020a039092168252519081900360200190f35b34801561019257600080fd5b5061012b6103df565b3480156101a757600080fd5b506101b3600435610403565b005b3480156101c157600080fd5b506101cd6004356105cb565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102075781810151838201526020016101ef565b50505050905090810190601f1680156102345780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561024e57600080fd5b5061012b610672565b34801561026357600080fd5b5061012b610696565b34801561027857600080fd5b506101b3600435600160a060020a03602435166106ba565b34801561029c57600080fd5b5061012b6107dc565b3480156102b157600080fd5b5061012b6107e3565b3480156102c657600080fd5b506101b3610807565b3480156102db57600080fd5b5061012b61088f565b3480156102f057600080fd5b5061016a6108b3565b34801561030557600080fd5b5061012b6108c2565b34801561031a57600080fd5b5061012b6108e6565b34801561032f57600080fd5b5061016a60043561090a565b34801561034757600080fd5b5061012b610925565b34801561035c57600080fd5b5061016a610949565b34801561037157600080fd5b506101b3600160a060020a0360043516610958565b7f42616e636f72436f6e766572746572557067726164657200000000000000000081565b7f424e54546f6b656e00000000000000000000000000000000000000000000000081565b60006103d98261090a565b92915050565b7f436f6e747261637452656769737472790000000000000000000000000000000081565b600080546060919081908190600160a060020a0316331461042357600080fd5b6000858152600260205260409020805473ffffffffffffffffffffffffffffffffffffffff19169055600354600110156105685760038054600019810190811061046957fe5b600091825260209182902001805460408051601f60026000196101006001871615020190941693909304928301859004850281018501909152818152928301828280156104f75780601f106104cc576101008083540402835291602001916104f7565b820191906000526020600020905b8154815290600101906020018083116104da57829003601f168201915b505050600088815260026020526040902060010154600380549498509096508793909250869150811061052657fe5b906000526020600020019080519060200190610543929190610a6d565b5061054d846109b9565b60008181526002602052604090206001810185905590925090505b600380549061057b906000198301610aeb565b50600085815260026020908152604080832060010183905580519283525187927ffc08d1253c81bcd5444fc7056ef1f5a5df4c9220b6fd70d7449267f1f0f2991892908290030190a25050505050565b60038054829081106105d957fe5b600091825260209182902001805460408051601f600260001961010060018716150201909416939093049283018590048502810185019091528181529350909183018282801561066a5780601f1061063f5761010080835404028352916020019161066a565b820191906000526020600020905b81548152906001019060200180831161064d57829003601f168201915b505050505081565b7f42616e636f72436f6e766572746572466163746f72790000000000000000000081565b7f424e54436f6e766572746572000000000000000000000000000000000000000081565b60008054600160a060020a031633146106d257600080fd5b81600160a060020a03811615156106e857600080fd5b6000848152600260208190526040909120805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a038616178155015460ff16151561079757600084815260026020819052604090912001805460ff191660011790556003610752856109c0565b81546001810180845560009384526020938490208351919461077a9491909301920190610a6d565b506000858152600260205260409020600019820160019091015591505b60408051600160a060020a0385168152905185917ffc08d1253c81bcd5444fc7056ef1f5a5df4c9220b6fd70d7449267f1f0f29918919081900360200190a250505050565b6003545b90565b7f42616e636f72466f726d756c610000000000000000000000000000000000000081565b600154600160a060020a0316331461081e57600080fd5b60015460008054604051600160a060020a0393841693909116917f343765429aea5a34b3ff6a3785a98a5abb2597aca87bfbb58632c173d585373a91a3600180546000805473ffffffffffffffffffffffffffffffffffffffff19908116600160a060020a03841617909155169055565b7f436f6e747261637446656174757265730000000000000000000000000000000081565b600054600160a060020a031681565b7f42616e636f724e6574776f726b0000000000000000000000000000000000000081565b7f42616e636f7247617350726963654c696d69740000000000000000000000000081565b600090815260026020526040902054600160a060020a031690565b7f42616e636f72580000000000000000000000000000000000000000000000000081565b600154600160a060020a031681565b600054600160a060020a0316331461096f57600080fd5b600054600160a060020a038281169116141561098a57600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b6020015190565b6040805160208082528183019092526060918291600091808201610400803883390190505091505b6020811015610a66578381602081106109fd57fe5b1a7f0100000000000000000000000000000000000000000000000000000000000000028282815181101515610a2e57fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506001016109e8565b5092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610aae57805160ff1916838001178555610adb565b82800160010185558215610adb579182015b82811115610adb578251825591602001919060010190610ac0565b50610ae7929150610b14565b5090565b815481835581811115610b0f57600083815260209020610b0f918101908301610b2e565b505050565b6107e091905b80821115610ae75760008155600101610b1a565b6107e091905b80821115610ae7576000610b488282610b51565b50600101610b34565b50805460018160011615610100020316600290046000825580601f10610b775750610b95565b601f016020900490600052602060002090810190610b959190610b14565b505600a165627a7a723058209f2e616d15079e5a439c821de5692fc6d6a97f0714e210172e2dd2348af5755c0029",
  "sourceMap": "584:4628:33:-;;;1310:99;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;361:5:35;:18;;-1:-1:-1;;;;;;361:18:35;369:10;361:18;;;1341:61:33;1357:29;1396:4;1341:15;;;;:61;:::i;:::-;584:4628;;2116:807;2634:9;485:5:35;;-1:-1:-1;;;;;485:5:35;471:10;:19;463:28;;;;;;2244:16:33;-1:-1:-1;;;;;432:22:37;;;;424:31;;;;;;2384:20:33;;;;:5;:20;;;;;;;;:55;;-1:-1:-1;;;;;;2384:55:33;-1:-1:-1;;;;;2384:55:33;;;;;2455:26;;;;2454:27;2450:360;;;2533:20;;;;:5;:20;;;;;;;;:26;:33;;-1:-1:-1;;2533:33:33;2562:4;2533:33;;;2646:13;2665:30;2539:13;2665:15;;;;:30;:::i;:::-;27:10:-1;;39:1;23:18;;45:23;;;-1:-1;2646:50:33;;;;;;;;;;23:18:-1;;2646:50:33;;;;;;;;;;:::i;:::-;-1:-1:-1;2761:20:33;;;;:5;:20;;;;;-1:-1:-1;;2794:5:33;;2798:1;2761:30;;;:38;2794:5;-1:-1:-1;2450:360:33;2870:46;;;-1:-1:-1;;;;;2870:46:33;;;;;;2884:13;;2870:46;;;;;;;;;;501:1:35;2116:807:33;;;:::o;4532:248::-;4638:13;;;4648:2;4638:13;;;;;;;;;4595:6;;;;4666:9;;4638:13;;;17:15:-1;;105:10;4638:13:33;88:34:-1;136:17;;-1:-1;4638:13:33;4613:38;;4661:78;4681:2;4677:1;:6;4661:78;;;4719:6;4726:1;4719:9;;;;;;;;;;4704;4714:1;4704:12;;;;;;;;;;;;;;:24;-1:-1:-1;;;;;4704:24:33;;;;;;;;-1:-1:-1;4685:3:33;;4661:78;;;-1:-1:-1;4763:9:33;4532:248;-1:-1:-1;;4532:248:33:o;584:4628::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;584:4628:33;;;-1:-1:-1;584:4628:33;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "584:4628:33:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;557:77:7;;8:9:-1;5:2;;;30:1;27;20:12;5:2;557:77:7;;;;;;;;;;;;;;;;;;;;764:46;;8:9:-1;5:2;;;30:1;27;20:12;5:2;764:46:7;;;;5089:121:33;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;5089:121:33;;;;;;;;;-1:-1:-1;;;;;5089:121:33;;;;;;;;;;;;;;268:62:7;;8:9:-1;5:2;;;30:1;27;20:12;5:2;268:62:7;;;;3056:1253:33;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;3056:1253:33;;;;;;;1014:29;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1014:29:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;1014:29:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;640:75:7;;8:9:-1;5:2;;;30:1;27;20:12;5:2;640:75:7;;;;816:54;;8:9:-1;5:2;;;30:1;27;20:12;5:2;816:54:7;;;;2116:807:33;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2116:807:33;;;-1:-1:-1;;;;;2116:807:33;;;;;1520:95;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1520:95:33;;;;419:56:7;;8:9:-1;5:2;;;30:1;27;20:12;5:2;419:56:7;;;;963:182:35;;8:9:-1;5:2;;;30:1;27;20:12;5:2;963:182:35;;;;200:62:7;;8:9:-1;5:2;;;30:1;27;20:12;5:2;200:62:7;;;;155:20:35;;8:9:-1;5:2;;;30:1;27;20:12;5:2;155:20:35;;;;357:56:7;;8:9:-1;5:2;;;30:1;27;20:12;5:2;357:56:7;;;;481:70;;8:9:-1;5:2;;;30:1;27;20:12;5:2;481:70:7;;;;1790:132:33;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1790:132:33;;;;;907:44:7;;8:9:-1;5:2;;;30:1;27;20:12;5:2;907:44:7;;;;181:23:35;;8:9:-1;5:2;;;30:1;27;20:12;5:2;181:23:35;;;;740:137;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;740:137:35;-1:-1:-1;;;;;740:137:35;;;;;557:77:7;;;:::o;764:46::-;;;:::o;5089:121:33:-;5153:7;5179:24;5189:13;5179:9;:24::i;:::-;5172:31;5089:121;-1:-1:-1;;5089:121:33:o;268:62:7:-;;;:::o;3056:1253:33:-;3683:23;485:5:35;;3591:36:33;;3683:23;;;;;-1:-1:-1;;;;;485:5:35;471:10;:19;463:28;;;;;;3290:1:33;3243:20;;;:5;:20;;;;;:49;;-1:-1:-1;;3243:49:33;;;3551:13;:20;3243:49;-1:-1:-1;3547:480:33;;;3630:13;3644:20;;-1:-1:-1;;3644:24:33;;;3630:39;;;;;;;;;;;;;;;;3591:78;;;;;;;-1:-1:-1;;3591:78:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3630:39;3591:78;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;3709:20:33;;;;:5;:20;;;;;:30;;;3754:13;:30;;3591:78;;-1:-1:-1;3709:30:33;;-1:-1:-1;3591:78:33;;3754:13;;-1:-1:-1;3709:30:33;;-1:-1:-1;3754:30:33;;;;;;;;;;;;;:55;;;;;;;;;;;;:::i;:::-;;3850:39;3866:22;3850:15;:39::i;:::-;3939:23;;;;:5;:23;;;;;3976:22;;;:40;;;3823:66;;-1:-1:-1;3939:23:33;-1:-1:-1;3547:480:33;4091:13;:22;;;;;-1:-1:-1;;4091:22:33;;;:::i;:::-;-1:-1:-1;4200:1:33;4167:20;;;:5;:20;;;;;;;;:30;;:34;;;4262:40;;;;;;4173:13;;4262:40;;;;;;;;;3056:1253;;;;;:::o;1014:29::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1014:29:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1014:29:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;640:75:7:-;;;:::o;816:54::-;;;:::o;2116:807:33:-;2634:9;485:5:35;;-1:-1:-1;;;;;485:5:35;471:10;:19;463:28;;;;;;2244:16:33;-1:-1:-1;;;;;432:22:37;;;;424:31;;;;;;2384:20:33;;;;:5;:20;;;;;;;;:55;;-1:-1:-1;;2384:55:33;-1:-1:-1;;;;;2384:55:33;;;;;2455:26;;;;2454:27;2450:360;;;2533:20;;;;:5;:20;;;;;;;;:26;:33;;-1:-1:-1;;2533:33:33;2562:4;2533:33;;;2646:13;2665:30;2539:13;2665:15;:30::i;:::-;27:10:-1;;39:1;23:18;;45:23;;;-1:-1;2646:50:33;;;;;;;;;;23:18:-1;;2646:50:33;;;;;;;;;;:::i;:::-;-1:-1:-1;2761:20:33;;;;:5;:20;;;;;-1:-1:-1;;2794:5:33;;2798:1;2761:30;;;:38;2794:5;-1:-1:-1;2450:360:33;2870:46;;;-1:-1:-1;;;;;2870:46:33;;;;;;2884:13;;2870:46;;;;;;;;;;501:1:35;2116:807:33;;;:::o;1520:95::-;1588:13;:20;1520:95;;:::o;419:56:7:-;;;:::o;963:182:35:-;1029:8;;-1:-1:-1;;;;;1029:8:35;1015:10;:22;1007:31;;;;;;1072:8;;;1065:5;;1053:28;;-1:-1:-1;;;;;1072:8:35;;;;1065:5;;;;1053:28;;;1099:8;;;;1091:16;;-1:-1:-1;;1091:16:35;;;-1:-1:-1;;;;;1099:8:35;;1091:16;;;;1117:21;;;963:182::o;200:62:7:-;;;:::o;155:20:35:-;;;-1:-1:-1;;;;;155:20:35;;:::o;357:56:7:-;;;:::o;481:70::-;;;:::o;1790:132:33:-;1853:7;1879:20;;;:5;:20;;;;;:36;-1:-1:-1;;;;;1879:36:33;;1790:132::o;907:44:7:-;;;:::o;181:23:35:-;;;-1:-1:-1;;;;;181:23:35;;:::o;740:137::-;485:5;;-1:-1:-1;;;;;485:5:35;471:10;:19;463:28;;;;;;834:5;;-1:-1:-1;;;;;821:18:35;;;834:5;;821:18;;813:27;;;;;;850:8;:20;;-1:-1:-1;;850:20:35;-1:-1:-1;;;;;850:20:35;;;;;;;;;;740:137::o;4834:207:33:-;4998:2;4986:15;4980:22;;4834:207::o;4532:248::-;4638:13;;;4648:2;4638:13;;;;;;;;;4595:6;;;;4666:9;;4638:13;;;17:15:-1;;105:10;4638:13:33;88:34:-1;136:17;;-1:-1;4638:13:33;4613:38;;4661:78;4681:2;4677:1;:6;4661:78;;;4719:6;4726:1;4719:9;;;;;;;;;;4704;4714:1;4704:12;;;;;;;;;;;;;;:24;;;;;;;;;;-1:-1:-1;4685:3:33;;4661:78;;;-1:-1:-1;4763:9:33;4532:248;-1:-1:-1;;4532:248:33:o;584:4628::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;584:4628:33;;;-1:-1:-1;584:4628:33;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::o",
  "source": "pragma solidity ^0.4.24;\nimport './Owned.sol';\nimport './Utils.sol';\nimport './interfaces/IContractRegistry.sol';\nimport '../ContractIds.sol';\n\n/**\n    Contract Registry\n\n    The contract registry keeps contract addresses by name.\n    The owner can update contract addresses so that a contract name always points to the latest version\n    of the given contract.\n    Other contracts can query the registry to get updated addresses instead of depending on specific\n    addresses.\n\n    Note that contract names are limited to 32 bytes UTF8 encoded ASCII strings to optimize gas costs\n*/\ncontract ContractRegistry is IContractRegistry, Owned, Utils, ContractIds {\n    struct RegistryItem {\n        address contractAddress;    // contract address\n        uint256 nameIndex;          // index of the item in the list of contract names\n        bool isSet;                 // used to tell if the mapping element is defined\n    }\n\n    mapping (bytes32 => RegistryItem) private items;    // name -> RegistryItem mapping\n    string[] public contractNames;                      // list of all registered contract names\n\n    // triggered when an address pointed to by a contract name is modified\n    event AddressUpdate(bytes32 indexed _contractName, address _contractAddress);\n\n    /**\n        @dev constructor\n    */\n    constructor() public {\n        registerAddress(ContractIds.CONTRACT_REGISTRY, address(this));\n    }\n\n    /**\n        @dev returns the number of items in the registry\n\n        @return number of items\n    */\n    function itemCount() public view returns (uint256) {\n        return contractNames.length;\n    }\n\n    /**\n        @dev returns the address associated with the given contract name\n\n        @param _contractName    contract name\n\n        @return contract address\n    */\n    function addressOf(bytes32 _contractName) public view returns (address) {\n        return items[_contractName].contractAddress;\n    }\n\n    /**\n        @dev registers a new address for the contract name in the registry\n\n        @param _contractName     contract name\n        @param _contractAddress  contract address\n    */\n    function registerAddress(bytes32 _contractName, address _contractAddress)\n        public\n        ownerOnly\n        validAddress(_contractAddress)\n    {\n        require(_contractName.length > 0); // validate input\n\n        // update the address in the registry\n        items[_contractName].contractAddress = _contractAddress;\n\n        if (!items[_contractName].isSet) {\n            // mark the item as set\n            items[_contractName].isSet = true;\n            // add the contract name to the name list\n            uint256 i = contractNames.push(bytes32ToString(_contractName));\n            // update the item's index in the list\n            items[_contractName].nameIndex = i - 1;\n        }\n\n        // dispatch the address update event\n        emit AddressUpdate(_contractName, _contractAddress);\n    }\n\n    /**\n        @dev removes an existing contract address from the registry\n\n        @param _contractName contract name\n    */\n    function unregisterAddress(bytes32 _contractName) public ownerOnly {\n        require(_contractName.length > 0); // validate input\n\n        // remove the address from the registry\n        items[_contractName].contractAddress = address(0);\n\n        // if there are multiple items in the registry, move the last element to the deleted element's position\n        // and modify last element's registryItem.nameIndex in the items collection to point to the right position in contractNames\n        if (contractNames.length > 1) {\n            string memory lastContractNameString = contractNames[contractNames.length - 1];\n            uint256 unregisterIndex = items[_contractName].nameIndex;\n\n            contractNames[unregisterIndex] = lastContractNameString;\n            bytes32 lastContractName = stringToBytes32(lastContractNameString);\n            RegistryItem storage registryItem = items[lastContractName];\n            registryItem.nameIndex = unregisterIndex;\n        }\n\n        // remove the last element from the name list\n        contractNames.length--;\n        // zero the deleted element's index\n        items[_contractName].nameIndex = 0;\n\n        // dispatch the address update event\n        emit AddressUpdate(_contractName, address(0));\n    }\n\n    /**\n        @dev utility, converts bytes32 to a string\n        note that the bytes32 argument is assumed to be UTF8 encoded ASCII string\n\n        @return string representation of the given bytes32 argument\n    */\n    function bytes32ToString(bytes32 _bytes) private pure returns (string) {\n        bytes memory byteArray = new bytes(32);\n        for (uint256 i; i < 32; i++) {\n            byteArray[i] = _bytes[i];\n        }\n\n        return string(byteArray);\n    }\n\n    // @dev utility, converts string to bytes32\n    function stringToBytes32(string memory _string) private pure returns (bytes32) {\n        bytes32 result;\n        assembly {\n            result := mload(add(_string,32))\n        }\n        return result;\n    }\n\n    // deprecated, backward compatibility\n    function getAddress(bytes32 _contractName) public view returns (address) {\n        return addressOf(_contractName);\n    }\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/ContractRegistry.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/ContractRegistry.sol",
    "exportedSymbols": {
      "ContractRegistry": [
        9338
      ]
    },
    "id": 9339,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9054,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:33"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/Owned.sol",
        "file": "./Owned.sol",
        "id": 9055,
        "nodeType": "ImportDirective",
        "scope": 9339,
        "sourceUnit": 9515,
        "src": "25:21:33",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/Utils.sol",
        "file": "./Utils.sol",
        "id": 9056,
        "nodeType": "ImportDirective",
        "scope": 9339,
        "sourceUnit": 9682,
        "src": "47:21:33",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/IContractRegistry.sol",
        "file": "./interfaces/IContractRegistry.sol",
        "id": 9057,
        "nodeType": "ImportDirective",
        "scope": 9339,
        "sourceUnit": 9871,
        "src": "69:44:33",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/ContractIds.sol",
        "file": "../ContractIds.sol",
        "id": 9058,
        "nodeType": "ImportDirective",
        "scope": 9339,
        "sourceUnit": 2267,
        "src": "114:28:33",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 9059,
              "name": "IContractRegistry",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9870,
              "src": "613:17:33",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IContractRegistry_$9870",
                "typeString": "contract IContractRegistry"
              }
            },
            "id": 9060,
            "nodeType": "InheritanceSpecifier",
            "src": "613:17:33"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 9061,
              "name": "Owned",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9514,
              "src": "632:5:33",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Owned_$9514",
                "typeString": "contract Owned"
              }
            },
            "id": 9062,
            "nodeType": "InheritanceSpecifier",
            "src": "632:5:33"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 9063,
              "name": "Utils",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9681,
              "src": "639:5:33",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Utils_$9681",
                "typeString": "contract Utils"
              }
            },
            "id": 9064,
            "nodeType": "InheritanceSpecifier",
            "src": "639:5:33"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 9065,
              "name": "ContractIds",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2266,
              "src": "646:11:33",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ContractIds_$2266",
                "typeString": "contract ContractIds"
              }
            },
            "id": 9066,
            "nodeType": "InheritanceSpecifier",
            "src": "646:11:33"
          }
        ],
        "contractDependencies": [
          2266,
          9514,
          9681,
          9870,
          9887
        ],
        "contractKind": "contract",
        "documentation": "Contract Registry\nThe contract registry keeps contract addresses by name.\nThe owner can update contract addresses so that a contract name always points to the latest version\nof the given contract.\nOther contracts can query the registry to get updated addresses instead of depending on specific\naddresses.\nNote that contract names are limited to 32 bytes UTF8 encoded ASCII strings to optimize gas costs",
        "fullyImplemented": true,
        "id": 9338,
        "linearizedBaseContracts": [
          9338,
          2266,
          9681,
          9514,
          9887,
          9870
        ],
        "name": "ContractRegistry",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "ContractRegistry.RegistryItem",
            "id": 9073,
            "members": [
              {
                "constant": false,
                "id": 9068,
                "name": "contractAddress",
                "nodeType": "VariableDeclaration",
                "scope": 9073,
                "src": "694:23:33",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 9067,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "694:7:33",
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
                "id": 9070,
                "name": "nameIndex",
                "nodeType": "VariableDeclaration",
                "scope": 9073,
                "src": "750:17:33",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 9069,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "750:7:33",
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
                "id": 9072,
                "name": "isSet",
                "nodeType": "VariableDeclaration",
                "scope": 9073,
                "src": "837:10:33",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 9071,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "837:4:33",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "RegistryItem",
            "nodeType": "StructDefinition",
            "scope": 9338,
            "src": "664:256:33",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 9077,
            "name": "items",
            "nodeType": "VariableDeclaration",
            "scope": 9338,
            "src": "926:47:33",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RegistryItem_$9073_storage_$",
              "typeString": "mapping(bytes32 => struct ContractRegistry.RegistryItem)"
            },
            "typeName": {
              "id": 9076,
              "keyType": {
                "id": 9074,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "935:7:33",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "926:33:33",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RegistryItem_$9073_storage_$",
                "typeString": "mapping(bytes32 => struct ContractRegistry.RegistryItem)"
              },
              "valueType": {
                "contractScope": null,
                "id": 9075,
                "name": "RegistryItem",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 9073,
                "src": "946:12:33",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_RegistryItem_$9073_storage_ptr",
                  "typeString": "struct ContractRegistry.RegistryItem"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 9080,
            "name": "contractNames",
            "nodeType": "VariableDeclaration",
            "scope": 9338,
            "src": "1014:29:33",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
              "typeString": "string[]"
            },
            "typeName": {
              "baseType": {
                "id": 9078,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "1014:6:33",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "id": 9079,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "1014:8:33",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                "typeString": "string[]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 9086,
            "name": "AddressUpdate",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 9085,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9082,
                  "indexed": true,
                  "name": "_contractName",
                  "nodeType": "VariableDeclaration",
                  "scope": 9086,
                  "src": "1207:29:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9081,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1207:7:33",
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
                  "id": 9084,
                  "indexed": false,
                  "name": "_contractAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 9086,
                  "src": "1238:24:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9083,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1238:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1206:57:33"
            },
            "src": "1187:77:33"
          },
          {
            "body": {
              "id": 9097,
              "nodeType": "Block",
              "src": "1331:78:33",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 9090,
                          "name": "ContractIds",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2266,
                          "src": "1357:11:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_ContractIds_$2266_$",
                            "typeString": "type(contract ContractIds)"
                          }
                        },
                        "id": 9091,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "CONTRACT_REGISTRY",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 2241,
                        "src": "1357:29:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 9093,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28153,
                            "src": "1396:4:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ContractRegistry_$9338",
                              "typeString": "contract ContractRegistry"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_ContractRegistry_$9338",
                              "typeString": "contract ContractRegistry"
                            }
                          ],
                          "id": 9092,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1388:7:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 9094,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1388:13:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 9089,
                      "name": "registerAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9184,
                      "src": "1341:15:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address)"
                      }
                    },
                    "id": 9095,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1341:61:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9096,
                  "nodeType": "ExpressionStatement",
                  "src": "1341:61:33"
                }
              ]
            },
            "documentation": "@dev constructor",
            "id": 9098,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9087,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1321:2:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9088,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1331:0:33"
            },
            "scope": 9338,
            "src": "1310:99:33",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9106,
              "nodeType": "Block",
              "src": "1571:44:33",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 9103,
                      "name": "contractNames",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9080,
                      "src": "1588:13:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                        "typeString": "string storage ref[] storage ref"
                      }
                    },
                    "id": 9104,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "1588:20:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 9102,
                  "id": 9105,
                  "nodeType": "Return",
                  "src": "1581:27:33"
                }
              ]
            },
            "documentation": "@dev returns the number of items in the registry\n@return number of items",
            "id": 9107,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "itemCount",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9099,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1538:2:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9102,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9101,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9107,
                  "src": "1562:7:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9100,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1562:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1561:9:33"
            },
            "scope": 9338,
            "src": "1520:95:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9119,
              "nodeType": "Block",
              "src": "1862:60:33",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 9114,
                        "name": "items",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9077,
                        "src": "1879:5:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RegistryItem_$9073_storage_$",
                          "typeString": "mapping(bytes32 => struct ContractRegistry.RegistryItem storage ref)"
                        }
                      },
                      "id": 9116,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 9115,
                        "name": "_contractName",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9109,
                        "src": "1885:13:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "1879:20:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_RegistryItem_$9073_storage",
                        "typeString": "struct ContractRegistry.RegistryItem storage ref"
                      }
                    },
                    "id": 9117,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "contractAddress",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 9068,
                    "src": "1879:36:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 9113,
                  "id": 9118,
                  "nodeType": "Return",
                  "src": "1872:43:33"
                }
              ]
            },
            "documentation": "@dev returns the address associated with the given contract name\n@param _contractName    contract name\n@return contract address",
            "id": 9120,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "addressOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9110,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9109,
                  "name": "_contractName",
                  "nodeType": "VariableDeclaration",
                  "scope": 9120,
                  "src": "1809:21:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9108,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1809:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1808:23:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9113,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9112,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9120,
                  "src": "1853:7:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9111,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1853:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1852:9:33"
            },
            "scope": 9338,
            "src": "1790:132:33",
            "stateMutability": "view",
            "superFunction": 9862,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9183,
              "nodeType": "Block",
              "src": "2266:657:33",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        },
                        "id": 9136,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 9133,
                            "name": "_contractName",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9122,
                            "src": "2284:13:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "id": 9134,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2284:20:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 9135,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2307:1:33",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "2284:24:33",
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
                      "id": 9132,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "2276:7:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 9137,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2276:33:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9138,
                  "nodeType": "ExpressionStatement",
                  "src": "2276:33:33"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9144,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 9139,
                          "name": "items",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9077,
                          "src": "2384:5:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RegistryItem_$9073_storage_$",
                            "typeString": "mapping(bytes32 => struct ContractRegistry.RegistryItem storage ref)"
                          }
                        },
                        "id": 9141,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 9140,
                          "name": "_contractName",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9122,
                          "src": "2390:13:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2384:20:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_RegistryItem_$9073_storage",
                          "typeString": "struct ContractRegistry.RegistryItem storage ref"
                        }
                      },
                      "id": 9142,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "contractAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9068,
                      "src": "2384:36:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 9143,
                      "name": "_contractAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9124,
                      "src": "2423:16:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2384:55:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 9145,
                  "nodeType": "ExpressionStatement",
                  "src": "2384:55:33"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 9150,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "2454:27:33",
                    "subExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 9146,
                          "name": "items",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9077,
                          "src": "2455:5:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RegistryItem_$9073_storage_$",
                            "typeString": "mapping(bytes32 => struct ContractRegistry.RegistryItem storage ref)"
                          }
                        },
                        "id": 9148,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 9147,
                          "name": "_contractName",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9122,
                          "src": "2461:13:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2455:20:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_RegistryItem_$9073_storage",
                          "typeString": "struct ContractRegistry.RegistryItem storage ref"
                        }
                      },
                      "id": 9149,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "isSet",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9072,
                      "src": "2455:26:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 9177,
                  "nodeType": "IfStatement",
                  "src": "2450:360:33",
                  "trueBody": {
                    "id": 9176,
                    "nodeType": "Block",
                    "src": "2483:327:33",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 9156,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 9151,
                                "name": "items",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9077,
                                "src": "2533:5:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RegistryItem_$9073_storage_$",
                                  "typeString": "mapping(bytes32 => struct ContractRegistry.RegistryItem storage ref)"
                                }
                              },
                              "id": 9153,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 9152,
                                "name": "_contractName",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9122,
                                "src": "2539:13:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2533:20:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_RegistryItem_$9073_storage",
                                "typeString": "struct ContractRegistry.RegistryItem storage ref"
                              }
                            },
                            "id": 9154,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberName": "isSet",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9072,
                            "src": "2533:26:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "hexValue": "74727565",
                            "id": 9155,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2562:4:33",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          "src": "2533:33:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 9157,
                        "nodeType": "ExpressionStatement",
                        "src": "2533:33:33"
                      },
                      {
                        "assignments": [
                          9159
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 9159,
                            "name": "i",
                            "nodeType": "VariableDeclaration",
                            "scope": 9184,
                            "src": "2634:9:33",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 9158,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "2634:7:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 9166,
                        "initialValue": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 9163,
                                  "name": "_contractName",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9122,
                                  "src": "2681:13:33",
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
                                "id": 9162,
                                "name": "bytes32ToString",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9311,
                                "src": "2665:15:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                                  "typeString": "function (bytes32) pure returns (string memory)"
                                }
                              },
                              "id": 9164,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2665:30:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 9160,
                              "name": "contractNames",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9080,
                              "src": "2646:13:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                                "typeString": "string storage ref[] storage ref"
                              }
                            },
                            "id": 9161,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "push",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2646:18:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_arraypush_nonpayable$_t_string_storage_$returns$_t_uint256_$",
                              "typeString": "function (string storage ref) returns (uint256)"
                            }
                          },
                          "id": 9165,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2646:50:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "2634:62:33"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 9174,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 9167,
                                "name": "items",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9077,
                                "src": "2761:5:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RegistryItem_$9073_storage_$",
                                  "typeString": "mapping(bytes32 => struct ContractRegistry.RegistryItem storage ref)"
                                }
                              },
                              "id": 9169,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 9168,
                                "name": "_contractName",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9122,
                                "src": "2767:13:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2761:20:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_RegistryItem_$9073_storage",
                                "typeString": "struct ContractRegistry.RegistryItem storage ref"
                              }
                            },
                            "id": 9170,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberName": "nameIndex",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9070,
                            "src": "2761:30:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 9173,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 9171,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9159,
                              "src": "2794:1:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "31",
                              "id": 9172,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2798:1:33",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                              },
                              "value": "1"
                            },
                            "src": "2794:5:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2761:38:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9175,
                        "nodeType": "ExpressionStatement",
                        "src": "2761:38:33"
                      }
                    ]
                  }
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 9179,
                        "name": "_contractName",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9122,
                        "src": "2884:13:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 9180,
                        "name": "_contractAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9124,
                        "src": "2899:16:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 9178,
                      "name": "AddressUpdate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9086,
                      "src": "2870:13:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address)"
                      }
                    },
                    "id": 9181,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2870:46:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9182,
                  "nodeType": "EmitStatement",
                  "src": "2865:51:33"
                }
              ]
            },
            "documentation": "@dev registers a new address for the contract name in the registry\n@param _contractName     contract name\n@param _contractAddress  contract address",
            "id": 9184,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 9127,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 9126,
                  "name": "ownerOnly",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9469,
                  "src": "2213:9:33",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2213:9:33"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 9129,
                    "name": "_contractAddress",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 9124,
                    "src": "2244:16:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 9130,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 9128,
                  "name": "validAddress",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9592,
                  "src": "2231:12:33",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2231:30:33"
              }
            ],
            "name": "registerAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9125,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9122,
                  "name": "_contractName",
                  "nodeType": "VariableDeclaration",
                  "scope": 9184,
                  "src": "2141:21:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9121,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2141:7:33",
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
                  "id": 9124,
                  "name": "_contractAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 9184,
                  "src": "2164:24:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9123,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2164:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2140:49:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9131,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2266:0:33"
            },
            "scope": 9338,
            "src": "2116:807:33",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9272,
              "nodeType": "Block",
              "src": "3123:1186:33",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        },
                        "id": 9195,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 9192,
                            "name": "_contractName",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9186,
                            "src": "3141:13:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "id": 9193,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3141:20:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 9194,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3164:1:33",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "3141:24:33",
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
                      "id": 9191,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "3133:7:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 9196,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3133:33:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9197,
                  "nodeType": "ExpressionStatement",
                  "src": "3133:33:33"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9205,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 9198,
                          "name": "items",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9077,
                          "src": "3243:5:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RegistryItem_$9073_storage_$",
                            "typeString": "mapping(bytes32 => struct ContractRegistry.RegistryItem storage ref)"
                          }
                        },
                        "id": 9200,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 9199,
                          "name": "_contractName",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9186,
                          "src": "3249:13:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3243:20:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_RegistryItem_$9073_storage",
                          "typeString": "struct ContractRegistry.RegistryItem storage ref"
                        }
                      },
                      "id": 9201,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "contractAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9068,
                      "src": "3243:36:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 9203,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3290:1:33",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 9202,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "3282:7:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 9204,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3282:10:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "3243:49:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 9206,
                  "nodeType": "ExpressionStatement",
                  "src": "3243:49:33"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 9210,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 9207,
                        "name": "contractNames",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9080,
                        "src": "3551:13:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                          "typeString": "string storage ref[] storage ref"
                        }
                      },
                      "id": 9208,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "3551:20:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 9209,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3574:1:33",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "3551:24:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 9252,
                  "nodeType": "IfStatement",
                  "src": "3547:480:33",
                  "trueBody": {
                    "id": 9251,
                    "nodeType": "Block",
                    "src": "3577:450:33",
                    "statements": [
                      {
                        "assignments": [
                          9212
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 9212,
                            "name": "lastContractNameString",
                            "nodeType": "VariableDeclaration",
                            "scope": 9273,
                            "src": "3591:36:33",
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string"
                            },
                            "typeName": {
                              "id": 9211,
                              "name": "string",
                              "nodeType": "ElementaryTypeName",
                              "src": "3591:6:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 9219,
                        "initialValue": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 9213,
                            "name": "contractNames",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9080,
                            "src": "3630:13:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                              "typeString": "string storage ref[] storage ref"
                            }
                          },
                          "id": 9218,
                          "indexExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 9217,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 9214,
                                "name": "contractNames",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9080,
                                "src": "3644:13:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                                  "typeString": "string storage ref[] storage ref"
                                }
                              },
                              "id": 9215,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "3644:20:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "31",
                              "id": 9216,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3667:1:33",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                              },
                              "value": "1"
                            },
                            "src": "3644:24:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3630:39:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "3591:78:33"
                      },
                      {
                        "assignments": [
                          9221
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 9221,
                            "name": "unregisterIndex",
                            "nodeType": "VariableDeclaration",
                            "scope": 9273,
                            "src": "3683:23:33",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 9220,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "3683:7:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 9226,
                        "initialValue": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 9222,
                              "name": "items",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9077,
                              "src": "3709:5:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RegistryItem_$9073_storage_$",
                                "typeString": "mapping(bytes32 => struct ContractRegistry.RegistryItem storage ref)"
                              }
                            },
                            "id": 9224,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 9223,
                              "name": "_contractName",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9186,
                              "src": "3715:13:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3709:20:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_RegistryItem_$9073_storage",
                              "typeString": "struct ContractRegistry.RegistryItem storage ref"
                            }
                          },
                          "id": 9225,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "nameIndex",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 9070,
                          "src": "3709:30:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "3683:56:33"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 9231,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 9227,
                              "name": "contractNames",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9080,
                              "src": "3754:13:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                                "typeString": "string storage ref[] storage ref"
                              }
                            },
                            "id": 9229,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 9228,
                              "name": "unregisterIndex",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9221,
                              "src": "3768:15:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "3754:30:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_storage",
                              "typeString": "string storage ref"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 9230,
                            "name": "lastContractNameString",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9212,
                            "src": "3787:22:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          "src": "3754:55:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "id": 9232,
                        "nodeType": "ExpressionStatement",
                        "src": "3754:55:33"
                      },
                      {
                        "assignments": [
                          9234
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 9234,
                            "name": "lastContractName",
                            "nodeType": "VariableDeclaration",
                            "scope": 9273,
                            "src": "3823:24:33",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            "typeName": {
                              "id": 9233,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "3823:7:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 9238,
                        "initialValue": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 9236,
                              "name": "lastContractNameString",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9212,
                              "src": "3866:22:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 9235,
                            "name": "stringToBytes32",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9325,
                            "src": "3850:15:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_bytes32_$",
                              "typeString": "function (string memory) pure returns (bytes32)"
                            }
                          },
                          "id": 9237,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3850:39:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "3823:66:33"
                      },
                      {
                        "assignments": [
                          9240
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 9240,
                            "name": "registryItem",
                            "nodeType": "VariableDeclaration",
                            "scope": 9273,
                            "src": "3903:33:33",
                            "stateVariable": false,
                            "storageLocation": "storage",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_RegistryItem_$9073_storage_ptr",
                              "typeString": "struct ContractRegistry.RegistryItem"
                            },
                            "typeName": {
                              "contractScope": null,
                              "id": 9239,
                              "name": "RegistryItem",
                              "nodeType": "UserDefinedTypeName",
                              "referencedDeclaration": 9073,
                              "src": "3903:12:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_RegistryItem_$9073_storage_ptr",
                                "typeString": "struct ContractRegistry.RegistryItem"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 9244,
                        "initialValue": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 9241,
                            "name": "items",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9077,
                            "src": "3939:5:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RegistryItem_$9073_storage_$",
                              "typeString": "mapping(bytes32 => struct ContractRegistry.RegistryItem storage ref)"
                            }
                          },
                          "id": 9243,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 9242,
                            "name": "lastContractName",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9234,
                            "src": "3945:16:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3939:23:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_RegistryItem_$9073_storage",
                            "typeString": "struct ContractRegistry.RegistryItem storage ref"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "3903:59:33"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 9249,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 9245,
                              "name": "registryItem",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9240,
                              "src": "3976:12:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_RegistryItem_$9073_storage_ptr",
                                "typeString": "struct ContractRegistry.RegistryItem storage pointer"
                              }
                            },
                            "id": 9247,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberName": "nameIndex",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9070,
                            "src": "3976:22:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 9248,
                            "name": "unregisterIndex",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9221,
                            "src": "4001:15:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3976:40:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9250,
                        "nodeType": "ExpressionStatement",
                        "src": "3976:40:33"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9256,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "--",
                    "prefix": false,
                    "src": "4091:22:33",
                    "subExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 9253,
                        "name": "contractNames",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9080,
                        "src": "4091:13:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                          "typeString": "string storage ref[] storage ref"
                        }
                      },
                      "id": 9255,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "4091:20:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9257,
                  "nodeType": "ExpressionStatement",
                  "src": "4091:22:33"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9263,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 9258,
                          "name": "items",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9077,
                          "src": "4167:5:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RegistryItem_$9073_storage_$",
                            "typeString": "mapping(bytes32 => struct ContractRegistry.RegistryItem storage ref)"
                          }
                        },
                        "id": 9260,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 9259,
                          "name": "_contractName",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9186,
                          "src": "4173:13:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "4167:20:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_RegistryItem_$9073_storage",
                          "typeString": "struct ContractRegistry.RegistryItem storage ref"
                        }
                      },
                      "id": 9261,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "nameIndex",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9070,
                      "src": "4167:30:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 9262,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4200:1:33",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "4167:34:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9264,
                  "nodeType": "ExpressionStatement",
                  "src": "4167:34:33"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 9266,
                        "name": "_contractName",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9186,
                        "src": "4276:13:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 9268,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "4299:1:33",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 9267,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4291:7:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 9269,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4291:10:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 9265,
                      "name": "AddressUpdate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9086,
                      "src": "4262:13:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address)"
                      }
                    },
                    "id": 9270,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4262:40:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9271,
                  "nodeType": "EmitStatement",
                  "src": "4257:45:33"
                }
              ]
            },
            "documentation": "@dev removes an existing contract address from the registry\n@param _contractName contract name",
            "id": 9273,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 9189,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 9188,
                  "name": "ownerOnly",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9469,
                  "src": "3113:9:33",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3113:9:33"
              }
            ],
            "name": "unregisterAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9187,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9186,
                  "name": "_contractName",
                  "nodeType": "VariableDeclaration",
                  "scope": 9273,
                  "src": "3083:21:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9185,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3083:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3082:23:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9190,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3123:0:33"
            },
            "scope": 9338,
            "src": "3056:1253:33",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9310,
              "nodeType": "Block",
              "src": "4603:177:33",
              "statements": [
                {
                  "assignments": [
                    9281
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 9281,
                      "name": "byteArray",
                      "nodeType": "VariableDeclaration",
                      "scope": 9311,
                      "src": "4613:22:33",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 9280,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "4613:5:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 9286,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "3332",
                        "id": 9284,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4648:2:33",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_32_by_1",
                          "typeString": "int_const 32"
                        },
                        "value": "32"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_32_by_1",
                          "typeString": "int_const 32"
                        }
                      ],
                      "id": 9283,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "4638:9:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_$",
                        "typeString": "function (uint256) pure returns (bytes memory)"
                      },
                      "typeName": {
                        "id": 9282,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "4642:5:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      }
                    },
                    "id": 9285,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4638:13:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4613:38:33"
                },
                {
                  "body": {
                    "id": 9304,
                    "nodeType": "Block",
                    "src": "4690:49:33",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 9302,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 9296,
                              "name": "byteArray",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9281,
                              "src": "4704:9:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            "id": 9298,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 9297,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9288,
                              "src": "4714:1:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "4704:12:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes1",
                              "typeString": "bytes1"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 9299,
                              "name": "_bytes",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9275,
                              "src": "4719:6:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "id": 9301,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 9300,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9288,
                              "src": "4726:1:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "4719:9:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes1",
                              "typeString": "bytes1"
                            }
                          },
                          "src": "4704:24:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes1",
                            "typeString": "bytes1"
                          }
                        },
                        "id": 9303,
                        "nodeType": "ExpressionStatement",
                        "src": "4704:24:33"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 9292,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 9290,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9288,
                      "src": "4677:1:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "3332",
                      "id": 9291,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4681:2:33",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_32_by_1",
                        "typeString": "int_const 32"
                      },
                      "value": "32"
                    },
                    "src": "4677:6:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 9305,
                  "initializationExpression": {
                    "assignments": [],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 9288,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 9311,
                        "src": "4666:9:33",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 9287,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "4666:7:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 9289,
                    "initialValue": null,
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4666:9:33"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 9294,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "4685:3:33",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 9293,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9288,
                        "src": "4685:1:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 9295,
                    "nodeType": "ExpressionStatement",
                    "src": "4685:3:33"
                  },
                  "nodeType": "ForStatement",
                  "src": "4661:78:33"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 9307,
                        "name": "byteArray",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9281,
                        "src": "4763:9:33",
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
                      "id": 9306,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "4756:6:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                        "typeString": "type(string storage pointer)"
                      },
                      "typeName": "string"
                    },
                    "id": 9308,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4756:17:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 9279,
                  "id": 9309,
                  "nodeType": "Return",
                  "src": "4749:24:33"
                }
              ]
            },
            "documentation": "@dev utility, converts bytes32 to a string\nnote that the bytes32 argument is assumed to be UTF8 encoded ASCII string\n@return string representation of the given bytes32 argument",
            "id": 9311,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "bytes32ToString",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9276,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9275,
                  "name": "_bytes",
                  "nodeType": "VariableDeclaration",
                  "scope": 9311,
                  "src": "4557:14:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9274,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4557:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4556:16:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9279,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9278,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9311,
                  "src": "4595:6:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 9277,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4595:6:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4594:8:33"
            },
            "scope": 9338,
            "src": "4532:248:33",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 9324,
              "nodeType": "Block",
              "src": "4913:128:33",
              "statements": [
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 9319,
                      "name": "result",
                      "nodeType": "VariableDeclaration",
                      "scope": 9325,
                      "src": "4923:14:33",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 9318,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "4923:7:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 9320,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4923:14:33"
                },
                {
                  "externalReferences": [
                    {
                      "result": {
                        "declaration": 9319,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "4970:6:33",
                        "valueSize": 1
                      }
                    },
                    {
                      "_string": {
                        "declaration": 9313,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "4990:7:33",
                        "valueSize": 1
                      }
                    }
                  ],
                  "id": 9321,
                  "nodeType": "InlineAssembly",
                  "operations": "{\n    result := mload(add(_string, 32))\n}",
                  "src": "4947:80:33"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9322,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 9319,
                    "src": "5028:6:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 9317,
                  "id": 9323,
                  "nodeType": "Return",
                  "src": "5021:13:33"
                }
              ]
            },
            "documentation": null,
            "id": 9325,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "stringToBytes32",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9314,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9313,
                  "name": "_string",
                  "nodeType": "VariableDeclaration",
                  "scope": 9325,
                  "src": "4859:21:33",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 9312,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4859:6:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4858:23:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9317,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9316,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9325,
                  "src": "4904:7:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9315,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4904:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4903:9:33"
            },
            "scope": 9338,
            "src": "4834:207:33",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 9336,
              "nodeType": "Block",
              "src": "5162:48:33",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 9333,
                        "name": "_contractName",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9327,
                        "src": "5189:13:33",
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
                      "id": 9332,
                      "name": "addressOf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        9120
                      ],
                      "referencedDeclaration": 9120,
                      "src": "5179:9:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_address_$",
                        "typeString": "function (bytes32) view returns (address)"
                      }
                    },
                    "id": 9334,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5179:24:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 9331,
                  "id": 9335,
                  "nodeType": "Return",
                  "src": "5172:31:33"
                }
              ]
            },
            "documentation": null,
            "id": 9337,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9328,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9327,
                  "name": "_contractName",
                  "nodeType": "VariableDeclaration",
                  "scope": 9337,
                  "src": "5109:21:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9326,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5109:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5108:23:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9331,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9330,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9337,
                  "src": "5153:7:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9329,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5153:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5152:9:33"
            },
            "scope": 9338,
            "src": "5089:121:33",
            "stateMutability": "view",
            "superFunction": 9869,
            "visibility": "public"
          }
        ],
        "scope": 9339,
        "src": "584:4628:33"
      }
    ],
    "src": "0:5213:33"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/ContractRegistry.sol",
    "exportedSymbols": {
      "ContractRegistry": [
        9338
      ]
    },
    "id": 9339,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9054,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:33"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/Owned.sol",
        "file": "./Owned.sol",
        "id": 9055,
        "nodeType": "ImportDirective",
        "scope": 9339,
        "sourceUnit": 9515,
        "src": "25:21:33",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/Utils.sol",
        "file": "./Utils.sol",
        "id": 9056,
        "nodeType": "ImportDirective",
        "scope": 9339,
        "sourceUnit": 9682,
        "src": "47:21:33",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/IContractRegistry.sol",
        "file": "./interfaces/IContractRegistry.sol",
        "id": 9057,
        "nodeType": "ImportDirective",
        "scope": 9339,
        "sourceUnit": 9871,
        "src": "69:44:33",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/ContractIds.sol",
        "file": "../ContractIds.sol",
        "id": 9058,
        "nodeType": "ImportDirective",
        "scope": 9339,
        "sourceUnit": 2267,
        "src": "114:28:33",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 9059,
              "name": "IContractRegistry",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9870,
              "src": "613:17:33",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IContractRegistry_$9870",
                "typeString": "contract IContractRegistry"
              }
            },
            "id": 9060,
            "nodeType": "InheritanceSpecifier",
            "src": "613:17:33"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 9061,
              "name": "Owned",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9514,
              "src": "632:5:33",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Owned_$9514",
                "typeString": "contract Owned"
              }
            },
            "id": 9062,
            "nodeType": "InheritanceSpecifier",
            "src": "632:5:33"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 9063,
              "name": "Utils",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9681,
              "src": "639:5:33",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Utils_$9681",
                "typeString": "contract Utils"
              }
            },
            "id": 9064,
            "nodeType": "InheritanceSpecifier",
            "src": "639:5:33"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 9065,
              "name": "ContractIds",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2266,
              "src": "646:11:33",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ContractIds_$2266",
                "typeString": "contract ContractIds"
              }
            },
            "id": 9066,
            "nodeType": "InheritanceSpecifier",
            "src": "646:11:33"
          }
        ],
        "contractDependencies": [
          2266,
          9514,
          9681,
          9870,
          9887
        ],
        "contractKind": "contract",
        "documentation": "Contract Registry\nThe contract registry keeps contract addresses by name.\nThe owner can update contract addresses so that a contract name always points to the latest version\nof the given contract.\nOther contracts can query the registry to get updated addresses instead of depending on specific\naddresses.\nNote that contract names are limited to 32 bytes UTF8 encoded ASCII strings to optimize gas costs",
        "fullyImplemented": true,
        "id": 9338,
        "linearizedBaseContracts": [
          9338,
          2266,
          9681,
          9514,
          9887,
          9870
        ],
        "name": "ContractRegistry",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "ContractRegistry.RegistryItem",
            "id": 9073,
            "members": [
              {
                "constant": false,
                "id": 9068,
                "name": "contractAddress",
                "nodeType": "VariableDeclaration",
                "scope": 9073,
                "src": "694:23:33",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 9067,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "694:7:33",
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
                "id": 9070,
                "name": "nameIndex",
                "nodeType": "VariableDeclaration",
                "scope": 9073,
                "src": "750:17:33",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 9069,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "750:7:33",
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
                "id": 9072,
                "name": "isSet",
                "nodeType": "VariableDeclaration",
                "scope": 9073,
                "src": "837:10:33",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 9071,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "837:4:33",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "RegistryItem",
            "nodeType": "StructDefinition",
            "scope": 9338,
            "src": "664:256:33",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 9077,
            "name": "items",
            "nodeType": "VariableDeclaration",
            "scope": 9338,
            "src": "926:47:33",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RegistryItem_$9073_storage_$",
              "typeString": "mapping(bytes32 => struct ContractRegistry.RegistryItem)"
            },
            "typeName": {
              "id": 9076,
              "keyType": {
                "id": 9074,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "935:7:33",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "926:33:33",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RegistryItem_$9073_storage_$",
                "typeString": "mapping(bytes32 => struct ContractRegistry.RegistryItem)"
              },
              "valueType": {
                "contractScope": null,
                "id": 9075,
                "name": "RegistryItem",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 9073,
                "src": "946:12:33",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_RegistryItem_$9073_storage_ptr",
                  "typeString": "struct ContractRegistry.RegistryItem"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 9080,
            "name": "contractNames",
            "nodeType": "VariableDeclaration",
            "scope": 9338,
            "src": "1014:29:33",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
              "typeString": "string[]"
            },
            "typeName": {
              "baseType": {
                "id": 9078,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "1014:6:33",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "id": 9079,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "1014:8:33",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                "typeString": "string[]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 9086,
            "name": "AddressUpdate",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 9085,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9082,
                  "indexed": true,
                  "name": "_contractName",
                  "nodeType": "VariableDeclaration",
                  "scope": 9086,
                  "src": "1207:29:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9081,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1207:7:33",
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
                  "id": 9084,
                  "indexed": false,
                  "name": "_contractAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 9086,
                  "src": "1238:24:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9083,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1238:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1206:57:33"
            },
            "src": "1187:77:33"
          },
          {
            "body": {
              "id": 9097,
              "nodeType": "Block",
              "src": "1331:78:33",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 9090,
                          "name": "ContractIds",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2266,
                          "src": "1357:11:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_ContractIds_$2266_$",
                            "typeString": "type(contract ContractIds)"
                          }
                        },
                        "id": 9091,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "CONTRACT_REGISTRY",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 2241,
                        "src": "1357:29:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 9093,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28153,
                            "src": "1396:4:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ContractRegistry_$9338",
                              "typeString": "contract ContractRegistry"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_ContractRegistry_$9338",
                              "typeString": "contract ContractRegistry"
                            }
                          ],
                          "id": 9092,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1388:7:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 9094,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1388:13:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 9089,
                      "name": "registerAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9184,
                      "src": "1341:15:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address)"
                      }
                    },
                    "id": 9095,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1341:61:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9096,
                  "nodeType": "ExpressionStatement",
                  "src": "1341:61:33"
                }
              ]
            },
            "documentation": "@dev constructor",
            "id": 9098,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9087,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1321:2:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9088,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1331:0:33"
            },
            "scope": 9338,
            "src": "1310:99:33",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9106,
              "nodeType": "Block",
              "src": "1571:44:33",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 9103,
                      "name": "contractNames",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9080,
                      "src": "1588:13:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                        "typeString": "string storage ref[] storage ref"
                      }
                    },
                    "id": 9104,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "1588:20:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 9102,
                  "id": 9105,
                  "nodeType": "Return",
                  "src": "1581:27:33"
                }
              ]
            },
            "documentation": "@dev returns the number of items in the registry\n@return number of items",
            "id": 9107,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "itemCount",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9099,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1538:2:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9102,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9101,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9107,
                  "src": "1562:7:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9100,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1562:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1561:9:33"
            },
            "scope": 9338,
            "src": "1520:95:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9119,
              "nodeType": "Block",
              "src": "1862:60:33",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 9114,
                        "name": "items",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9077,
                        "src": "1879:5:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RegistryItem_$9073_storage_$",
                          "typeString": "mapping(bytes32 => struct ContractRegistry.RegistryItem storage ref)"
                        }
                      },
                      "id": 9116,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 9115,
                        "name": "_contractName",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9109,
                        "src": "1885:13:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "1879:20:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_RegistryItem_$9073_storage",
                        "typeString": "struct ContractRegistry.RegistryItem storage ref"
                      }
                    },
                    "id": 9117,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "contractAddress",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 9068,
                    "src": "1879:36:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 9113,
                  "id": 9118,
                  "nodeType": "Return",
                  "src": "1872:43:33"
                }
              ]
            },
            "documentation": "@dev returns the address associated with the given contract name\n@param _contractName    contract name\n@return contract address",
            "id": 9120,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "addressOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9110,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9109,
                  "name": "_contractName",
                  "nodeType": "VariableDeclaration",
                  "scope": 9120,
                  "src": "1809:21:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9108,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1809:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1808:23:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9113,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9112,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9120,
                  "src": "1853:7:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9111,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1853:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1852:9:33"
            },
            "scope": 9338,
            "src": "1790:132:33",
            "stateMutability": "view",
            "superFunction": 9862,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9183,
              "nodeType": "Block",
              "src": "2266:657:33",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        },
                        "id": 9136,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 9133,
                            "name": "_contractName",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9122,
                            "src": "2284:13:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "id": 9134,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2284:20:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 9135,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2307:1:33",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "2284:24:33",
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
                      "id": 9132,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "2276:7:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 9137,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2276:33:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9138,
                  "nodeType": "ExpressionStatement",
                  "src": "2276:33:33"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9144,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 9139,
                          "name": "items",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9077,
                          "src": "2384:5:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RegistryItem_$9073_storage_$",
                            "typeString": "mapping(bytes32 => struct ContractRegistry.RegistryItem storage ref)"
                          }
                        },
                        "id": 9141,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 9140,
                          "name": "_contractName",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9122,
                          "src": "2390:13:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2384:20:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_RegistryItem_$9073_storage",
                          "typeString": "struct ContractRegistry.RegistryItem storage ref"
                        }
                      },
                      "id": 9142,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "contractAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9068,
                      "src": "2384:36:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 9143,
                      "name": "_contractAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9124,
                      "src": "2423:16:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2384:55:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 9145,
                  "nodeType": "ExpressionStatement",
                  "src": "2384:55:33"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 9150,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "2454:27:33",
                    "subExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 9146,
                          "name": "items",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9077,
                          "src": "2455:5:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RegistryItem_$9073_storage_$",
                            "typeString": "mapping(bytes32 => struct ContractRegistry.RegistryItem storage ref)"
                          }
                        },
                        "id": 9148,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 9147,
                          "name": "_contractName",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9122,
                          "src": "2461:13:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2455:20:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_RegistryItem_$9073_storage",
                          "typeString": "struct ContractRegistry.RegistryItem storage ref"
                        }
                      },
                      "id": 9149,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "isSet",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9072,
                      "src": "2455:26:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 9177,
                  "nodeType": "IfStatement",
                  "src": "2450:360:33",
                  "trueBody": {
                    "id": 9176,
                    "nodeType": "Block",
                    "src": "2483:327:33",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 9156,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 9151,
                                "name": "items",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9077,
                                "src": "2533:5:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RegistryItem_$9073_storage_$",
                                  "typeString": "mapping(bytes32 => struct ContractRegistry.RegistryItem storage ref)"
                                }
                              },
                              "id": 9153,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 9152,
                                "name": "_contractName",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9122,
                                "src": "2539:13:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2533:20:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_RegistryItem_$9073_storage",
                                "typeString": "struct ContractRegistry.RegistryItem storage ref"
                              }
                            },
                            "id": 9154,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberName": "isSet",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9072,
                            "src": "2533:26:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "hexValue": "74727565",
                            "id": 9155,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2562:4:33",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          "src": "2533:33:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 9157,
                        "nodeType": "ExpressionStatement",
                        "src": "2533:33:33"
                      },
                      {
                        "assignments": [
                          9159
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 9159,
                            "name": "i",
                            "nodeType": "VariableDeclaration",
                            "scope": 9184,
                            "src": "2634:9:33",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 9158,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "2634:7:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 9166,
                        "initialValue": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 9163,
                                  "name": "_contractName",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9122,
                                  "src": "2681:13:33",
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
                                "id": 9162,
                                "name": "bytes32ToString",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9311,
                                "src": "2665:15:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_bytes32_$returns$_t_string_memory_ptr_$",
                                  "typeString": "function (bytes32) pure returns (string memory)"
                                }
                              },
                              "id": 9164,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2665:30:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 9160,
                              "name": "contractNames",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9080,
                              "src": "2646:13:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                                "typeString": "string storage ref[] storage ref"
                              }
                            },
                            "id": 9161,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "push",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2646:18:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_arraypush_nonpayable$_t_string_storage_$returns$_t_uint256_$",
                              "typeString": "function (string storage ref) returns (uint256)"
                            }
                          },
                          "id": 9165,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2646:50:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "2634:62:33"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 9174,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 9167,
                                "name": "items",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9077,
                                "src": "2761:5:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RegistryItem_$9073_storage_$",
                                  "typeString": "mapping(bytes32 => struct ContractRegistry.RegistryItem storage ref)"
                                }
                              },
                              "id": 9169,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 9168,
                                "name": "_contractName",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9122,
                                "src": "2767:13:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2761:20:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_RegistryItem_$9073_storage",
                                "typeString": "struct ContractRegistry.RegistryItem storage ref"
                              }
                            },
                            "id": 9170,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberName": "nameIndex",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9070,
                            "src": "2761:30:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 9173,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 9171,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9159,
                              "src": "2794:1:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "31",
                              "id": 9172,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2798:1:33",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                              },
                              "value": "1"
                            },
                            "src": "2794:5:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2761:38:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9175,
                        "nodeType": "ExpressionStatement",
                        "src": "2761:38:33"
                      }
                    ]
                  }
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 9179,
                        "name": "_contractName",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9122,
                        "src": "2884:13:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 9180,
                        "name": "_contractAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9124,
                        "src": "2899:16:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 9178,
                      "name": "AddressUpdate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9086,
                      "src": "2870:13:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address)"
                      }
                    },
                    "id": 9181,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2870:46:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9182,
                  "nodeType": "EmitStatement",
                  "src": "2865:51:33"
                }
              ]
            },
            "documentation": "@dev registers a new address for the contract name in the registry\n@param _contractName     contract name\n@param _contractAddress  contract address",
            "id": 9184,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 9127,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 9126,
                  "name": "ownerOnly",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9469,
                  "src": "2213:9:33",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2213:9:33"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 9129,
                    "name": "_contractAddress",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 9124,
                    "src": "2244:16:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 9130,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 9128,
                  "name": "validAddress",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9592,
                  "src": "2231:12:33",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2231:30:33"
              }
            ],
            "name": "registerAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9125,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9122,
                  "name": "_contractName",
                  "nodeType": "VariableDeclaration",
                  "scope": 9184,
                  "src": "2141:21:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9121,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2141:7:33",
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
                  "id": 9124,
                  "name": "_contractAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 9184,
                  "src": "2164:24:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9123,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2164:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2140:49:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9131,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2266:0:33"
            },
            "scope": 9338,
            "src": "2116:807:33",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9272,
              "nodeType": "Block",
              "src": "3123:1186:33",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        },
                        "id": 9195,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 9192,
                            "name": "_contractName",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9186,
                            "src": "3141:13:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "id": 9193,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3141:20:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 9194,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3164:1:33",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "3141:24:33",
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
                      "id": 9191,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "3133:7:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 9196,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3133:33:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9197,
                  "nodeType": "ExpressionStatement",
                  "src": "3133:33:33"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9205,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 9198,
                          "name": "items",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9077,
                          "src": "3243:5:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RegistryItem_$9073_storage_$",
                            "typeString": "mapping(bytes32 => struct ContractRegistry.RegistryItem storage ref)"
                          }
                        },
                        "id": 9200,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 9199,
                          "name": "_contractName",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9186,
                          "src": "3249:13:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3243:20:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_RegistryItem_$9073_storage",
                          "typeString": "struct ContractRegistry.RegistryItem storage ref"
                        }
                      },
                      "id": 9201,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "contractAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9068,
                      "src": "3243:36:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 9203,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3290:1:33",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 9202,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "3282:7:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 9204,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3282:10:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "3243:49:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 9206,
                  "nodeType": "ExpressionStatement",
                  "src": "3243:49:33"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 9210,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 9207,
                        "name": "contractNames",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9080,
                        "src": "3551:13:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                          "typeString": "string storage ref[] storage ref"
                        }
                      },
                      "id": 9208,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "3551:20:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 9209,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3574:1:33",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "3551:24:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 9252,
                  "nodeType": "IfStatement",
                  "src": "3547:480:33",
                  "trueBody": {
                    "id": 9251,
                    "nodeType": "Block",
                    "src": "3577:450:33",
                    "statements": [
                      {
                        "assignments": [
                          9212
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 9212,
                            "name": "lastContractNameString",
                            "nodeType": "VariableDeclaration",
                            "scope": 9273,
                            "src": "3591:36:33",
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string"
                            },
                            "typeName": {
                              "id": 9211,
                              "name": "string",
                              "nodeType": "ElementaryTypeName",
                              "src": "3591:6:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 9219,
                        "initialValue": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 9213,
                            "name": "contractNames",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9080,
                            "src": "3630:13:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                              "typeString": "string storage ref[] storage ref"
                            }
                          },
                          "id": 9218,
                          "indexExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 9217,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 9214,
                                "name": "contractNames",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9080,
                                "src": "3644:13:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                                  "typeString": "string storage ref[] storage ref"
                                }
                              },
                              "id": 9215,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "3644:20:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "31",
                              "id": 9216,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3667:1:33",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                              },
                              "value": "1"
                            },
                            "src": "3644:24:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3630:39:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "3591:78:33"
                      },
                      {
                        "assignments": [
                          9221
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 9221,
                            "name": "unregisterIndex",
                            "nodeType": "VariableDeclaration",
                            "scope": 9273,
                            "src": "3683:23:33",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 9220,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "3683:7:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 9226,
                        "initialValue": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 9222,
                              "name": "items",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9077,
                              "src": "3709:5:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RegistryItem_$9073_storage_$",
                                "typeString": "mapping(bytes32 => struct ContractRegistry.RegistryItem storage ref)"
                              }
                            },
                            "id": 9224,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 9223,
                              "name": "_contractName",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9186,
                              "src": "3715:13:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3709:20:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_RegistryItem_$9073_storage",
                              "typeString": "struct ContractRegistry.RegistryItem storage ref"
                            }
                          },
                          "id": 9225,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "nameIndex",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 9070,
                          "src": "3709:30:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "3683:56:33"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 9231,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 9227,
                              "name": "contractNames",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9080,
                              "src": "3754:13:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                                "typeString": "string storage ref[] storage ref"
                              }
                            },
                            "id": 9229,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 9228,
                              "name": "unregisterIndex",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9221,
                              "src": "3768:15:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "3754:30:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_storage",
                              "typeString": "string storage ref"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 9230,
                            "name": "lastContractNameString",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9212,
                            "src": "3787:22:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          "src": "3754:55:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "id": 9232,
                        "nodeType": "ExpressionStatement",
                        "src": "3754:55:33"
                      },
                      {
                        "assignments": [
                          9234
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 9234,
                            "name": "lastContractName",
                            "nodeType": "VariableDeclaration",
                            "scope": 9273,
                            "src": "3823:24:33",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            "typeName": {
                              "id": 9233,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "3823:7:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 9238,
                        "initialValue": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 9236,
                              "name": "lastContractNameString",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9212,
                              "src": "3866:22:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 9235,
                            "name": "stringToBytes32",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9325,
                            "src": "3850:15:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_bytes32_$",
                              "typeString": "function (string memory) pure returns (bytes32)"
                            }
                          },
                          "id": 9237,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3850:39:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "3823:66:33"
                      },
                      {
                        "assignments": [
                          9240
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 9240,
                            "name": "registryItem",
                            "nodeType": "VariableDeclaration",
                            "scope": 9273,
                            "src": "3903:33:33",
                            "stateVariable": false,
                            "storageLocation": "storage",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_RegistryItem_$9073_storage_ptr",
                              "typeString": "struct ContractRegistry.RegistryItem"
                            },
                            "typeName": {
                              "contractScope": null,
                              "id": 9239,
                              "name": "RegistryItem",
                              "nodeType": "UserDefinedTypeName",
                              "referencedDeclaration": 9073,
                              "src": "3903:12:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_RegistryItem_$9073_storage_ptr",
                                "typeString": "struct ContractRegistry.RegistryItem"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 9244,
                        "initialValue": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 9241,
                            "name": "items",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9077,
                            "src": "3939:5:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RegistryItem_$9073_storage_$",
                              "typeString": "mapping(bytes32 => struct ContractRegistry.RegistryItem storage ref)"
                            }
                          },
                          "id": 9243,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 9242,
                            "name": "lastContractName",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9234,
                            "src": "3945:16:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3939:23:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_RegistryItem_$9073_storage",
                            "typeString": "struct ContractRegistry.RegistryItem storage ref"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "3903:59:33"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 9249,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 9245,
                              "name": "registryItem",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9240,
                              "src": "3976:12:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_RegistryItem_$9073_storage_ptr",
                                "typeString": "struct ContractRegistry.RegistryItem storage pointer"
                              }
                            },
                            "id": 9247,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberName": "nameIndex",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9070,
                            "src": "3976:22:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 9248,
                            "name": "unregisterIndex",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9221,
                            "src": "4001:15:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3976:40:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9250,
                        "nodeType": "ExpressionStatement",
                        "src": "3976:40:33"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9256,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "--",
                    "prefix": false,
                    "src": "4091:22:33",
                    "subExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 9253,
                        "name": "contractNames",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9080,
                        "src": "4091:13:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                          "typeString": "string storage ref[] storage ref"
                        }
                      },
                      "id": 9255,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "4091:20:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9257,
                  "nodeType": "ExpressionStatement",
                  "src": "4091:22:33"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9263,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 9258,
                          "name": "items",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9077,
                          "src": "4167:5:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_RegistryItem_$9073_storage_$",
                            "typeString": "mapping(bytes32 => struct ContractRegistry.RegistryItem storage ref)"
                          }
                        },
                        "id": 9260,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 9259,
                          "name": "_contractName",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9186,
                          "src": "4173:13:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "4167:20:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_RegistryItem_$9073_storage",
                          "typeString": "struct ContractRegistry.RegistryItem storage ref"
                        }
                      },
                      "id": 9261,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "nameIndex",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9070,
                      "src": "4167:30:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 9262,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4200:1:33",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "4167:34:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9264,
                  "nodeType": "ExpressionStatement",
                  "src": "4167:34:33"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 9266,
                        "name": "_contractName",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9186,
                        "src": "4276:13:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 9268,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "4299:1:33",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 9267,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4291:7:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 9269,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4291:10:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 9265,
                      "name": "AddressUpdate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9086,
                      "src": "4262:13:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address)"
                      }
                    },
                    "id": 9270,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4262:40:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9271,
                  "nodeType": "EmitStatement",
                  "src": "4257:45:33"
                }
              ]
            },
            "documentation": "@dev removes an existing contract address from the registry\n@param _contractName contract name",
            "id": 9273,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 9189,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 9188,
                  "name": "ownerOnly",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9469,
                  "src": "3113:9:33",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3113:9:33"
              }
            ],
            "name": "unregisterAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9187,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9186,
                  "name": "_contractName",
                  "nodeType": "VariableDeclaration",
                  "scope": 9273,
                  "src": "3083:21:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9185,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3083:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3082:23:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9190,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3123:0:33"
            },
            "scope": 9338,
            "src": "3056:1253:33",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9310,
              "nodeType": "Block",
              "src": "4603:177:33",
              "statements": [
                {
                  "assignments": [
                    9281
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 9281,
                      "name": "byteArray",
                      "nodeType": "VariableDeclaration",
                      "scope": 9311,
                      "src": "4613:22:33",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 9280,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "4613:5:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 9286,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "3332",
                        "id": 9284,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4648:2:33",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_32_by_1",
                          "typeString": "int_const 32"
                        },
                        "value": "32"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_32_by_1",
                          "typeString": "int_const 32"
                        }
                      ],
                      "id": 9283,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "4638:9:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_$",
                        "typeString": "function (uint256) pure returns (bytes memory)"
                      },
                      "typeName": {
                        "id": 9282,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "4642:5:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      }
                    },
                    "id": 9285,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4638:13:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4613:38:33"
                },
                {
                  "body": {
                    "id": 9304,
                    "nodeType": "Block",
                    "src": "4690:49:33",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 9302,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 9296,
                              "name": "byteArray",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9281,
                              "src": "4704:9:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            "id": 9298,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 9297,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9288,
                              "src": "4714:1:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "4704:12:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes1",
                              "typeString": "bytes1"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 9299,
                              "name": "_bytes",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9275,
                              "src": "4719:6:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "id": 9301,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 9300,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9288,
                              "src": "4726:1:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "4719:9:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes1",
                              "typeString": "bytes1"
                            }
                          },
                          "src": "4704:24:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes1",
                            "typeString": "bytes1"
                          }
                        },
                        "id": 9303,
                        "nodeType": "ExpressionStatement",
                        "src": "4704:24:33"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 9292,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 9290,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9288,
                      "src": "4677:1:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "3332",
                      "id": 9291,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4681:2:33",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_32_by_1",
                        "typeString": "int_const 32"
                      },
                      "value": "32"
                    },
                    "src": "4677:6:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 9305,
                  "initializationExpression": {
                    "assignments": [],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 9288,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 9311,
                        "src": "4666:9:33",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 9287,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "4666:7:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 9289,
                    "initialValue": null,
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4666:9:33"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 9294,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "4685:3:33",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 9293,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9288,
                        "src": "4685:1:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 9295,
                    "nodeType": "ExpressionStatement",
                    "src": "4685:3:33"
                  },
                  "nodeType": "ForStatement",
                  "src": "4661:78:33"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 9307,
                        "name": "byteArray",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9281,
                        "src": "4763:9:33",
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
                      "id": 9306,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "4756:6:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                        "typeString": "type(string storage pointer)"
                      },
                      "typeName": "string"
                    },
                    "id": 9308,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4756:17:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 9279,
                  "id": 9309,
                  "nodeType": "Return",
                  "src": "4749:24:33"
                }
              ]
            },
            "documentation": "@dev utility, converts bytes32 to a string\nnote that the bytes32 argument is assumed to be UTF8 encoded ASCII string\n@return string representation of the given bytes32 argument",
            "id": 9311,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "bytes32ToString",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9276,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9275,
                  "name": "_bytes",
                  "nodeType": "VariableDeclaration",
                  "scope": 9311,
                  "src": "4557:14:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9274,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4557:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4556:16:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9279,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9278,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9311,
                  "src": "4595:6:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 9277,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4595:6:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4594:8:33"
            },
            "scope": 9338,
            "src": "4532:248:33",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 9324,
              "nodeType": "Block",
              "src": "4913:128:33",
              "statements": [
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 9319,
                      "name": "result",
                      "nodeType": "VariableDeclaration",
                      "scope": 9325,
                      "src": "4923:14:33",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 9318,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "4923:7:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 9320,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4923:14:33"
                },
                {
                  "externalReferences": [
                    {
                      "result": {
                        "declaration": 9319,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "4970:6:33",
                        "valueSize": 1
                      }
                    },
                    {
                      "_string": {
                        "declaration": 9313,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "4990:7:33",
                        "valueSize": 1
                      }
                    }
                  ],
                  "id": 9321,
                  "nodeType": "InlineAssembly",
                  "operations": "{\n    result := mload(add(_string, 32))\n}",
                  "src": "4947:80:33"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9322,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 9319,
                    "src": "5028:6:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 9317,
                  "id": 9323,
                  "nodeType": "Return",
                  "src": "5021:13:33"
                }
              ]
            },
            "documentation": null,
            "id": 9325,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "stringToBytes32",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9314,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9313,
                  "name": "_string",
                  "nodeType": "VariableDeclaration",
                  "scope": 9325,
                  "src": "4859:21:33",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 9312,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4859:6:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4858:23:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9317,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9316,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9325,
                  "src": "4904:7:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9315,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4904:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4903:9:33"
            },
            "scope": 9338,
            "src": "4834:207:33",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 9336,
              "nodeType": "Block",
              "src": "5162:48:33",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 9333,
                        "name": "_contractName",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9327,
                        "src": "5189:13:33",
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
                      "id": 9332,
                      "name": "addressOf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        9120
                      ],
                      "referencedDeclaration": 9120,
                      "src": "5179:9:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_address_$",
                        "typeString": "function (bytes32) view returns (address)"
                      }
                    },
                    "id": 9334,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5179:24:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 9331,
                  "id": 9335,
                  "nodeType": "Return",
                  "src": "5172:31:33"
                }
              ]
            },
            "documentation": null,
            "id": 9337,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9328,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9327,
                  "name": "_contractName",
                  "nodeType": "VariableDeclaration",
                  "scope": 9337,
                  "src": "5109:21:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9326,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5109:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5108:23:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9331,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9330,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9337,
                  "src": "5153:7:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9329,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5153:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5152:9:33"
            },
            "scope": 9338,
            "src": "5089:121:33",
            "stateMutability": "view",
            "superFunction": 9869,
            "visibility": "public"
          }
        ],
        "scope": 9339,
        "src": "584:4628:33"
      }
    ],
    "src": "0:5213:33"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-12-06T01:19:16.554Z"
}