"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var MyBitToken = exports.MyBitToken = 
{
  "contractName": "MyBitToken",
  "abi": [
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
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseApproval",
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
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
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
          "name": "_from",
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
          "name": "_addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseApproval",
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
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
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
      "inputs": [
        {
          "name": "_tokenURI",
          "type": "string"
        },
        {
          "name": "_totalSupply",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
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
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50604051610b20380380610b208339810160405280516020808301516002819055919092018051909261004891600391850190610095565b5033600081815260208181526040808320859055805185815290517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929181900390910190a35050610130565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100d657805160ff1916838001178555610103565b82800160010185558215610103579182015b828111156101035782518255916020019190600101906100e8565b5061010f929150610113565b5090565b61012d91905b8082111561010f5760008155600101610119565b90565b6109e18061013f6000396000f3006080604052600436106100ae5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663095ea7b381146100b357806318160ddd146100eb57806323b872dd146101125780633c130d901461013c57806342966c68146101c657806366188463146101de57806370a082311461020257806379cc679014610223578063a9059cbb14610247578063d73dd6231461026b578063dd62ed3e1461028f575b600080fd5b3480156100bf57600080fd5b506100d7600160a060020a03600435166024356102b6565b604080519115158252519081900360200190f35b3480156100f757600080fd5b5061010061031c565b60408051918252519081900360200190f35b34801561011e57600080fd5b506100d7600160a060020a0360043581169060243516604435610322565b34801561014857600080fd5b50610151610485565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561018b578181015183820152602001610173565b50505050905090810190601f1680156101b85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101d257600080fd5b506100d7600435610513565b3480156101ea57600080fd5b506100d7600160a060020a03600435166024356105bd565b34801561020e57600080fd5b50610100600160a060020a03600435166106ac565b34801561022f57600080fd5b506100d7600160a060020a03600435166024356106c7565b34801561025357600080fd5b506100d7600160a060020a03600435166024356107dc565b34801561027757600080fd5b506100d7600160a060020a03600435166024356108a9565b34801561029b57600080fd5b50610100600160a060020a0360043581169060243516610942565b336000818152600160209081526040808320600160a060020a038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b60025490565b600160a060020a03831660009081526020819052604081205482111561034757600080fd5b600160a060020a038416600090815260016020908152604080832033845290915290205482111561037757600080fd5b600160a060020a038316151561038c57600080fd5b600160a060020a0384166000908152602081905260409020546103b5908363ffffffff61096d16565b600160a060020a0380861660009081526020819052604080822093909355908516815220546103ea908363ffffffff61097f16565b600160a060020a0380851660009081526020818152604080832094909455918716815260018252828120338252909152205461042c908363ffffffff61096d16565b600160a060020a0380861660008181526001602090815260408083203384528252918290209490945580518681529051928716939192600080516020610996833981519152929181900390910190a35060019392505050565b6003805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561050b5780601f106104e05761010080835404028352916020019161050b565b820191906000526020600020905b8154815290600101906020018083116104ee57829003601f168201915b505050505081565b33600090815260208190526040812054610533908363ffffffff61096d16565b33600090815260208190526040902055600254610556908363ffffffff61096d16565b60025560408051838152905133917f38d762ef507761291a578e921acfe29c1af31a7331ea03e391cf16cfc4d4f581919081900360200190a260408051838152905160009133916000805160206109968339815191529181900360200190a3506001919050565b336000908152600160209081526040808320600160a060020a038616845290915281205480831061061157336000908152600160209081526040808320600160a060020a0388168452909152812055610646565b610621818463ffffffff61096d16565b336000908152600160209081526040808320600160a060020a03891684529091529020555b336000818152600160209081526040808320600160a060020a0389168085529083529281902054815190815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060019392505050565b600160a060020a031660009081526020819052604090205490565b600160a060020a0382166000908152602081905260408120546106f0908363ffffffff61096d16565b600160a060020a03841660009081526020818152604080832093909355600181528282203383529052205461072b908363ffffffff61096d16565b600160a060020a0384166000908152600160209081526040808320338452909152902055600254610762908363ffffffff61096d16565b600255604080518381529051600160a060020a038516917f38d762ef507761291a578e921acfe29c1af31a7331ea03e391cf16cfc4d4f581919081900360200190a2604080518381529051600091600160a060020a038616916000805160206109968339815191529181900360200190a350600192915050565b336000908152602081905260408120548211156107f857600080fd5b600160a060020a038316151561080d57600080fd5b3360009081526020819052604090205461082d908363ffffffff61096d16565b3360009081526020819052604080822092909255600160a060020a0385168152205461085f908363ffffffff61097f16565b600160a060020a038416600081815260208181526040918290209390935580518581529051919233926000805160206109968339815191529281900390910190a350600192915050565b336000908152600160209081526040808320600160a060020a03861684529091528120546108dd908363ffffffff61097f16565b336000818152600160209081526040808320600160a060020a0389168085529083529281902085905580519485525191937f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929081900390910190a350600192915050565b600160a060020a03918216600090815260016020908152604080832093909416825291909152205490565b60008282111561097957fe5b50900390565b60008282018381101561098e57fe5b93925050505600ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa165627a7a72305820a80fa5150ece84c887d78fb6a827bdc494d9c5556965e424c678fbe40d8e680a0029",
  "deployedBytecode": "0x6080604052600436106100ae5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663095ea7b381146100b357806318160ddd146100eb57806323b872dd146101125780633c130d901461013c57806342966c68146101c657806366188463146101de57806370a082311461020257806379cc679014610223578063a9059cbb14610247578063d73dd6231461026b578063dd62ed3e1461028f575b600080fd5b3480156100bf57600080fd5b506100d7600160a060020a03600435166024356102b6565b604080519115158252519081900360200190f35b3480156100f757600080fd5b5061010061031c565b60408051918252519081900360200190f35b34801561011e57600080fd5b506100d7600160a060020a0360043581169060243516604435610322565b34801561014857600080fd5b50610151610485565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561018b578181015183820152602001610173565b50505050905090810190601f1680156101b85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101d257600080fd5b506100d7600435610513565b3480156101ea57600080fd5b506100d7600160a060020a03600435166024356105bd565b34801561020e57600080fd5b50610100600160a060020a03600435166106ac565b34801561022f57600080fd5b506100d7600160a060020a03600435166024356106c7565b34801561025357600080fd5b506100d7600160a060020a03600435166024356107dc565b34801561027757600080fd5b506100d7600160a060020a03600435166024356108a9565b34801561029b57600080fd5b50610100600160a060020a0360043581169060243516610942565b336000818152600160209081526040808320600160a060020a038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b60025490565b600160a060020a03831660009081526020819052604081205482111561034757600080fd5b600160a060020a038416600090815260016020908152604080832033845290915290205482111561037757600080fd5b600160a060020a038316151561038c57600080fd5b600160a060020a0384166000908152602081905260409020546103b5908363ffffffff61096d16565b600160a060020a0380861660009081526020819052604080822093909355908516815220546103ea908363ffffffff61097f16565b600160a060020a0380851660009081526020818152604080832094909455918716815260018252828120338252909152205461042c908363ffffffff61096d16565b600160a060020a0380861660008181526001602090815260408083203384528252918290209490945580518681529051928716939192600080516020610996833981519152929181900390910190a35060019392505050565b6003805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561050b5780601f106104e05761010080835404028352916020019161050b565b820191906000526020600020905b8154815290600101906020018083116104ee57829003601f168201915b505050505081565b33600090815260208190526040812054610533908363ffffffff61096d16565b33600090815260208190526040902055600254610556908363ffffffff61096d16565b60025560408051838152905133917f38d762ef507761291a578e921acfe29c1af31a7331ea03e391cf16cfc4d4f581919081900360200190a260408051838152905160009133916000805160206109968339815191529181900360200190a3506001919050565b336000908152600160209081526040808320600160a060020a038616845290915281205480831061061157336000908152600160209081526040808320600160a060020a0388168452909152812055610646565b610621818463ffffffff61096d16565b336000908152600160209081526040808320600160a060020a03891684529091529020555b336000818152600160209081526040808320600160a060020a0389168085529083529281902054815190815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060019392505050565b600160a060020a031660009081526020819052604090205490565b600160a060020a0382166000908152602081905260408120546106f0908363ffffffff61096d16565b600160a060020a03841660009081526020818152604080832093909355600181528282203383529052205461072b908363ffffffff61096d16565b600160a060020a0384166000908152600160209081526040808320338452909152902055600254610762908363ffffffff61096d16565b600255604080518381529051600160a060020a038516917f38d762ef507761291a578e921acfe29c1af31a7331ea03e391cf16cfc4d4f581919081900360200190a2604080518381529051600091600160a060020a038616916000805160206109968339815191529181900360200190a350600192915050565b336000908152602081905260408120548211156107f857600080fd5b600160a060020a038316151561080d57600080fd5b3360009081526020819052604090205461082d908363ffffffff61096d16565b3360009081526020819052604080822092909255600160a060020a0385168152205461085f908363ffffffff61097f16565b600160a060020a038416600081815260208181526040918290209390935580518581529051919233926000805160206109968339815191529281900390910190a350600192915050565b336000908152600160209081526040808320600160a060020a03861684529091528120546108dd908363ffffffff61097f16565b336000818152600160209081526040808320600160a060020a0389168085529083529281902085905580519485525191937f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929081900390910190a350600192915050565b600160a060020a03918216600090815260016020908152604080832093909416825291909152205490565b60008282111561097957fe5b50900390565b60008282018381101561098e57fe5b93925050505600ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa165627a7a72305820a80fa5150ece84c887d78fb6a827bdc494d9c5556965e424c678fbe40d8e680a0029",
  "sourceMap": "211:660:99:-;;;502:367;8:9:-1;5:2;;;30:1;27;20:12;5:2;502:367:99;;;;;;;;;;;;;;;;;;;;;568:6;:21;;;502:367;;;;643:20;;502:367;;643:20;;:8;;:20;;;;:::i;:::-;-1:-1:-1;732:10:99;723:8;:20;;;;;;;;;;;:35;;;771:46;;;;;;;;;;;;;;;;;;502:367;;211:660;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;211:660:99;;;-1:-1:-1;211:660:99;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "211:660:99:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2112:188:100;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2112:188:100;-1:-1:-1;;;;;2112:188:100;;;;;;;;;;;;;;;;;;;;;;;;;4706:77;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4706:77:100;;;;;;;;;;;;;;;;;;;;2575:447;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2575:447:100;-1:-1:-1;;;;;2575:447:100;;;;;;;;;;;;282:22:99;;8:9:-1;5:2;;;30:1;27;20:12;5:2;282:22:99;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;282:22:99;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;591:271:93;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;591:271:93;;;;;4227:418:100;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;4227:418:100;-1:-1:-1;;;;;4227:418:100;;;;;;;4985:99;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;4985:99:100;-1:-1:-1;;;;;4985:99:100;;;;;1139:504:93;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1139:504:93;-1:-1:-1;;;;;1139:504:93;;;;;;;1174:320:100;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1174:320:100;-1:-1:-1;;;;;1174:320:100;;;;;;;3474:296;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;3474:296:100;-1:-1:-1;;;;;3474:296:100;;;;;;;888:132;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;888:132:100;-1:-1:-1;;;;;888:132:100;;;;;;;;;;2112:188;2199:10;2179:4;2191:19;;;:7;:19;;;;;;;;-1:-1:-1;;;;;2191:29:100;;;;;;;;;;;:38;;;2240;;;;;;;2179:4;;2191:29;;2199:10;;2240:38;;;;;;;;-1:-1:-1;2291:4:100;2112:188;;;;:::o;4706:77::-;4772:6;;4706:77;:::o;2575:447::-;-1:-1:-1;;;;;2691:15:100;;2661:4;2691:15;;;;;;;;;;;2681:25;;;2673:34;;;;;;-1:-1:-1;;;;;2731:14:100;;;;;;:7;:14;;;;;;;;2746:10;2731:26;;;;;;;;2721:36;;;2713:45;;;;;;-1:-1:-1;;;;;2772:17:100;;;;2764:26;;;;;;-1:-1:-1;;;;;2814:15:100;;:8;:15;;;;;;;;;;;:27;;2834:6;2814:27;:19;:27;:::i;:::-;-1:-1:-1;;;;;2796:15:100;;;:8;:15;;;;;;;;;;;:45;;;;2863:13;;;;;;;:25;;2881:6;2863:25;:17;:25;:::i;:::-;-1:-1:-1;;;;;2847:13:100;;;:8;:13;;;;;;;;;;;:41;;;;2923:14;;;;;:7;:14;;;;;2938:10;2923:26;;;;;;;:38;;2954:6;2923:38;:30;:38;:::i;:::-;-1:-1:-1;;;;;2894:14:100;;;;;;;:7;:14;;;;;;;;2909:10;2894:26;;;;;;;;:67;;;;2972:28;;;;;;;;;;;2894:14;;-1:-1:-1;;;;;;;;;;;2972:28:100;;;;;;;;;;-1:-1:-1;3013:4:100;2575:447;;;;;:::o;282:22:99:-;;;;;;;;;;;;;;;-1:-1:-1;;282:22:99;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;591:271:93:-;691:10;639:12;682:20;;;;;;;;;;;:33;;707:7;682:33;:24;:33;:::i;:::-;668:10;659:8;:20;;;;;;;;;;:56;730:6;;:19;;741:7;730:19;:10;:19;:::i;:::-;721:6;:28;760;;;;;;;;768:10;;760:28;;;;;;;;;;799:41;;;;;;;;828:1;;808:10;;-1:-1:-1;;;;;;;;;;;799:41:93;;;;;;;;-1:-1:-1;853:4:93;591:271;;;:::o;4227:418:100:-;4356:10;4317:4;4348:19;;;:7;:19;;;;;;;;-1:-1:-1;;;;;4348:29:100;;;;;;;;;;4387:28;;;4383:169;;4433:10;4457:1;4425:19;;;:7;:19;;;;;;;;-1:-1:-1;;;;;4425:29:100;;;;;;;;;:33;4383:169;;;4515:30;:8;4528:16;4515:30;:12;:30;:::i;:::-;4491:10;4483:19;;;;:7;:19;;;;;;;;-1:-1:-1;;;;;4483:29:100;;;;;;;;;:62;4383:169;4571:10;4593:19;;;;:7;:19;;;;;;;;-1:-1:-1;;;;;4562:61:100;;4593:29;;;;;;;;;;;4562:61;;;;;;;;;4571:10;4562:61;;;;;;;;;;;-1:-1:-1;4636:4:100;;4227:418;-1:-1:-1;;;4227:418:100:o;4985:99::-;-1:-1:-1;;;;;5063:16:100;5041:7;5063:16;;;;;;;;;;;;4985:99::o;1139:504:93:-;-1:-1:-1;;;;;1244:15:93;;1206:12;1244:15;;;;;;;;;;;:28;;1264:7;1244:28;:19;:28;:::i;:::-;-1:-1:-1;;;;;1226:15:93;;:8;:15;;;;;;;;;;;:46;;;;1369:7;:14;;;;;1384:10;1369:26;;;;;;:39;;1400:7;1369:39;:30;:39;:::i;:::-;-1:-1:-1;;;;;1340:14:93;;;;;;:7;:14;;;;;;;;1355:10;1340:26;;;;;;;:68;1475:6;;:19;;1486:7;1475:19;:10;:19;:::i;:::-;1466:6;:28;1551:23;;;;;;;;-1:-1:-1;;;;;1551:23:93;;;;;;;;;;;;;1585:36;;;;;;;;1609:1;;-1:-1:-1;;;;;1585:36:93;;;-1:-1:-1;;;;;;;;;;;1585:36:93;;;;;;;;-1:-1:-1;1634:4:93;1139:504;;;;:::o;1174:320:100:-;1276:10;1237:4;1267:20;;;;;;;;;;;1257:30;;;1249:39;;;;;;-1:-1:-1;;;;;1302:17:100;;;;1294:26;;;;;;1358:10;1349:8;:20;;;;;;;;;;;:32;;1374:6;1349:32;:24;:32;:::i;:::-;1335:10;1326:8;:20;;;;;;;;;;;:55;;;;-1:-1:-1;;;;;1403:13:100;;;;;;:25;;1421:6;1403:25;:17;:25;:::i;:::-;-1:-1:-1;;;;;1387:13:100;;:8;:13;;;;;;;;;;;;:41;;;;1439:33;;;;;;;1387:13;;1448:10;;-1:-1:-1;;;;;;;;;;;1439:33:100;;;;;;;;;-1:-1:-1;1485:4:100;1174:320;;;;:::o;3474:296::-;3637:10;3575:4;3629:19;;;:7;:19;;;;;;;;-1:-1:-1;;;;;3629:29:100;;;;;;;;;;:46;;3663:11;3629:46;:33;:46;:::i;:::-;3597:10;3589:19;;;;:7;:19;;;;;;;;-1:-1:-1;;;;;3589:29:100;;;;;;;;;;;;:87;;;3687:61;;;;;;3589:29;;3687:61;;;;;;;;;;;-1:-1:-1;3761:4:100;3474:296;;;;:::o;888:132::-;-1:-1:-1;;;;;990:15:100;;;968:7;990:15;;;:7;:15;;;;;;;;:25;;;;;;;;;;;;;888:132::o;936:110:70:-;994:7;1016:6;;;;1009:14;;;;-1:-1:-1;1036:5:70;;;936:110::o;1101:129::-;1159:7;1186:5;;;1204:6;;;;1197:14;;;;1224:1;1101:129;-1:-1:-1;;;1101:129:70:o",
  "source": "pragma solidity ^0.4.24;\n\nimport \"./BurnableToken.sol\";\nimport \"../../math/SafeMath.sol\";\n\n// @title ERC20 token contract with burning capabilities\n// @notice Standard ERC20 contract with a deflationary supply.\ncontract MyBitToken is BurnableToken{\n  using SafeMath for uint256;\n\n  string public tokenURI;\n\n  // @notice constructor: initialized\n  // @param (string) _tokenURI = The URI where information about this token can be found\n  // @param (uint) _totalSupply = The initial supply of the token\n  constructor(string _tokenURI, uint _totalSupply)\n  public {\n      supply = _totalSupply;                        // Update total supply\n      tokenURI = _tokenURI;                         // Set the id for reference\n      balances[msg.sender] = _totalSupply;\n      emit Transfer(address(0), msg.sender, _totalSupply);    // Transfer event indicating token creation\n  }\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc20/MyBitToken.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc20/MyBitToken.sol",
    "exportedSymbols": {
      "MyBitToken": [
        27689
      ]
    },
    "id": 27690,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 27647,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:99"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc20/BurnableToken.sol",
        "file": "./BurnableToken.sol",
        "id": 27648,
        "nodeType": "ImportDirective",
        "scope": 27690,
        "sourceUnit": 26424,
        "src": "26:29:99",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../../math/SafeMath.sol",
        "id": 27649,
        "nodeType": "ImportDirective",
        "scope": 27690,
        "sourceUnit": 17338,
        "src": "56:33:99",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 27650,
              "name": "BurnableToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 26423,
              "src": "234:13:99",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_BurnableToken_$26423",
                "typeString": "contract BurnableToken"
              }
            },
            "id": 27651,
            "nodeType": "InheritanceSpecifier",
            "src": "234:13:99"
          }
        ],
        "contractDependencies": [
          16644,
          17072,
          26423,
          28023
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 27689,
        "linearizedBaseContracts": [
          27689,
          26423,
          16644,
          28023,
          17072
        ],
        "name": "MyBitToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 27654,
            "libraryName": {
              "contractScope": null,
              "id": 27652,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 17337,
              "src": "257:8:99",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$17337",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "251:27:99",
            "typeName": {
              "id": 27653,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "270:7:99",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 27656,
            "name": "tokenURI",
            "nodeType": "VariableDeclaration",
            "scope": 27689,
            "src": "282:22:99",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 27655,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "282:6:99",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 27687,
              "nodeType": "Block",
              "src": "560:309:99",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 27665,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 27663,
                      "name": "supply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27710,
                      "src": "568:6:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 27664,
                      "name": "_totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27660,
                      "src": "577:12:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "568:21:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 27666,
                  "nodeType": "ExpressionStatement",
                  "src": "568:21:99"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 27669,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 27667,
                      "name": "tokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27656,
                      "src": "643:8:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 27668,
                      "name": "_tokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27658,
                      "src": "654:9:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "643:20:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 27670,
                  "nodeType": "ExpressionStatement",
                  "src": "643:20:99"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 27676,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 27671,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27702,
                        "src": "723:8:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 27674,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 27672,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28038,
                          "src": "732:3:99",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 27673,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "732:10:99",
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
                      "src": "723:20:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 27675,
                      "name": "_totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27660,
                      "src": "746:12:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "723:35:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 27677,
                  "nodeType": "ExpressionStatement",
                  "src": "723:35:99"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 27680,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "788:1:99",
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
                          "id": 27679,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "780:7:99",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 27681,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "780:10:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 27682,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28038,
                          "src": "792:3:99",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 27683,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "792:10:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 27684,
                        "name": "_totalSupply",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27660,
                        "src": "804:12:99",
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
                      "id": 27678,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17063,
                      "src": "771:8:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 27685,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "771:46:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27686,
                  "nodeType": "EmitStatement",
                  "src": "766:51:99"
                }
              ]
            },
            "documentation": null,
            "id": 27688,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 27661,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27658,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 27688,
                  "src": "514:16:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27657,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "514:6:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27660,
                  "name": "_totalSupply",
                  "nodeType": "VariableDeclaration",
                  "scope": 27688,
                  "src": "532:17:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27659,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "532:4:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "513:37:99"
            },
            "payable": false,
            "returnParameters": {
              "id": 27662,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "560:0:99"
            },
            "scope": 27689,
            "src": "502:367:99",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 27690,
        "src": "211:660:99"
      }
    ],
    "src": "0:872:99"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc20/MyBitToken.sol",
    "exportedSymbols": {
      "MyBitToken": [
        27689
      ]
    },
    "id": 27690,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 27647,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:99"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc20/BurnableToken.sol",
        "file": "./BurnableToken.sol",
        "id": 27648,
        "nodeType": "ImportDirective",
        "scope": 27690,
        "sourceUnit": 26424,
        "src": "26:29:99",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../../math/SafeMath.sol",
        "id": 27649,
        "nodeType": "ImportDirective",
        "scope": 27690,
        "sourceUnit": 17338,
        "src": "56:33:99",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 27650,
              "name": "BurnableToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 26423,
              "src": "234:13:99",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_BurnableToken_$26423",
                "typeString": "contract BurnableToken"
              }
            },
            "id": 27651,
            "nodeType": "InheritanceSpecifier",
            "src": "234:13:99"
          }
        ],
        "contractDependencies": [
          16644,
          17072,
          26423,
          28023
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 27689,
        "linearizedBaseContracts": [
          27689,
          26423,
          16644,
          28023,
          17072
        ],
        "name": "MyBitToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 27654,
            "libraryName": {
              "contractScope": null,
              "id": 27652,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 17337,
              "src": "257:8:99",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$17337",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "251:27:99",
            "typeName": {
              "id": 27653,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "270:7:99",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 27656,
            "name": "tokenURI",
            "nodeType": "VariableDeclaration",
            "scope": 27689,
            "src": "282:22:99",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 27655,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "282:6:99",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 27687,
              "nodeType": "Block",
              "src": "560:309:99",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 27665,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 27663,
                      "name": "supply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27710,
                      "src": "568:6:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 27664,
                      "name": "_totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27660,
                      "src": "577:12:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "568:21:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 27666,
                  "nodeType": "ExpressionStatement",
                  "src": "568:21:99"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 27669,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 27667,
                      "name": "tokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27656,
                      "src": "643:8:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 27668,
                      "name": "_tokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27658,
                      "src": "654:9:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "643:20:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 27670,
                  "nodeType": "ExpressionStatement",
                  "src": "643:20:99"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 27676,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 27671,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27702,
                        "src": "723:8:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 27674,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 27672,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28038,
                          "src": "732:3:99",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 27673,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "732:10:99",
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
                      "src": "723:20:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 27675,
                      "name": "_totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27660,
                      "src": "746:12:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "723:35:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 27677,
                  "nodeType": "ExpressionStatement",
                  "src": "723:35:99"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 27680,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "788:1:99",
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
                          "id": 27679,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "780:7:99",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 27681,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "780:10:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 27682,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28038,
                          "src": "792:3:99",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 27683,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "792:10:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 27684,
                        "name": "_totalSupply",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27660,
                        "src": "804:12:99",
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
                      "id": 27678,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17063,
                      "src": "771:8:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 27685,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "771:46:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27686,
                  "nodeType": "EmitStatement",
                  "src": "766:51:99"
                }
              ]
            },
            "documentation": null,
            "id": 27688,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 27661,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27658,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 27688,
                  "src": "514:16:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27657,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "514:6:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27660,
                  "name": "_totalSupply",
                  "nodeType": "VariableDeclaration",
                  "scope": 27688,
                  "src": "532:17:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27659,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "532:4:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "513:37:99"
            },
            "payable": false,
            "returnParameters": {
              "id": 27662,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "560:0:99"
            },
            "scope": 27689,
            "src": "502:367:99",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 27690,
        "src": "211:660:99"
      }
    ],
    "src": "0:872:99"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-12-06T01:19:16.946Z"
}