"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var MintableToken = exports.MintableToken = 
{
  "contractName": "MintableToken",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "mintingFinished",
      "outputs": [
        {
          "name": "",
          "type": "bool"
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
          "name": "_minter",
          "type": "address"
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
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Mint",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "MintFinished",
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
      "name": "mint",
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
      "name": "finishMinting",
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
      "name": "getTokenURI",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50604051610ae8380380610ae8833981016040528051602080830151919092018051909261004391600491850190610075565b5060038054600160a060020a039092166101000261010060a860020a0319909216919091179055506000600255610110565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100b657805160ff19168380011785556100e3565b828001600101855582156100e3579182015b828111156100e35782518255916020019190600101906100c8565b506100ef9291506100f3565b5090565b61010d91905b808211156100ef57600081556001016100f9565b90565b6109c98061011f6000396000f3006080604052600436106100b95763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166305d2035b81146100be578063095ea7b3146100e757806318160ddd1461010b57806323b872dd1461013257806340c10f191461015c578063661884631461018057806370a08231146101a45780637d64bcb4146101c5578063a9059cbb146101da578063d4a19116146101fe578063d73dd62314610288578063dd62ed3e146102ac575b600080fd5b3480156100ca57600080fd5b506100d36102d3565b604080519115158252519081900360200190f35b3480156100f357600080fd5b506100d3600160a060020a03600435166024356102dc565b34801561011757600080fd5b50610120610342565b60408051918252519081900360200190f35b34801561013e57600080fd5b506100d3600160a060020a0360043581169060243516604435610348565b34801561016857600080fd5b506100d3600160a060020a03600435166024356104bd565b34801561018c57600080fd5b506100d3600160a060020a03600435166024356105c6565b3480156101b057600080fd5b50610120600160a060020a03600435166106b5565b3480156101d157600080fd5b506100d36106d0565b3480156101e657600080fd5b506100d3600160a060020a036004351660243561073c565b34801561020a57600080fd5b5061021361081b565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561024d578181015183820152602001610235565b50505050905090810190601f16801561027a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561029457600080fd5b506100d3600160a060020a03600435166024356108b1565b3480156102b857600080fd5b50610120600160a060020a036004358116906024351661094a565b60035460ff1681565b336000818152600160209081526040808320600160a060020a038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b60025490565b600160a060020a03831660009081526020819052604081205482111561036d57600080fd5b600160a060020a038416600090815260016020908152604080832033845290915290205482111561039d57600080fd5b600160a060020a03831615156103b257600080fd5b600160a060020a0384166000908152602081905260409020546103db908363ffffffff61097516565b600160a060020a038086166000908152602081905260408082209390935590851681522054610410908363ffffffff61098716565b600160a060020a03808516600090815260208181526040808320949094559187168152600182528281203382529091522054610452908363ffffffff61097516565b600160a060020a03808616600081815260016020908152604080832033845282529182902094909455805186815290519287169391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929181900390910190a35060019392505050565b60035460009060ff161580156104e257506003546101009004600160a060020a031633145b15156104ed57600080fd5b600254610500908363ffffffff61098716565b600255600160a060020a03831660009081526020819052604090205461052c908363ffffffff61098716565b600160a060020a03841660008181526020818152604091829020939093558051858152905191927f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d412139688592918290030190a2604080518381529051600160a060020a038516916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a350600192915050565b336000908152600160209081526040808320600160a060020a038616845290915281205480831061061a57336000908152600160209081526040808320600160a060020a038816845290915281205561064f565b61062a818463ffffffff61097516565b336000908152600160209081526040808320600160a060020a03891684529091529020555b336000818152600160209081526040808320600160a060020a0389168085529083529281902054815190815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060019392505050565b600160a060020a031660009081526020819052604090205490565b60035460009060ff161580156106f557506003546101009004600160a060020a031633145b151561070057600080fd5b6003805460ff191660011790556040517fae5184fba832cb2b1f702aca6117b8d265eaf03ad33eb133f19dde0f5920fa0890600090a150600190565b3360009081526020819052604081205482111561075857600080fd5b600160a060020a038316151561076d57600080fd5b3360009081526020819052604090205461078d908363ffffffff61097516565b3360009081526020819052604080822092909255600160a060020a038516815220546107bf908363ffffffff61098716565b600160a060020a038416600081815260208181526040918290209390935580518581529051919233927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a350600192915050565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108a75780601f1061087c576101008083540402835291602001916108a7565b820191906000526020600020905b81548152906001019060200180831161088a57829003601f168201915b5050505050905090565b336000908152600160209081526040808320600160a060020a03861684529091528120546108e5908363ffffffff61098716565b336000818152600160209081526040808320600160a060020a0389168085529083529281902085905580519485525191937f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929081900390910190a350600192915050565b600160a060020a03918216600090815260016020908152604080832093909416825291909152205490565b60008282111561098157fe5b50900390565b60008282018381101561099657fe5b93925050505600a165627a7a723058209c5fe76ab0fddb3348581c8635481673245998b0cd56b6e45814b9b048501fd90029",
  "deployedBytecode": "0x6080604052600436106100b95763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166305d2035b81146100be578063095ea7b3146100e757806318160ddd1461010b57806323b872dd1461013257806340c10f191461015c578063661884631461018057806370a08231146101a45780637d64bcb4146101c5578063a9059cbb146101da578063d4a19116146101fe578063d73dd62314610288578063dd62ed3e146102ac575b600080fd5b3480156100ca57600080fd5b506100d36102d3565b604080519115158252519081900360200190f35b3480156100f357600080fd5b506100d3600160a060020a03600435166024356102dc565b34801561011757600080fd5b50610120610342565b60408051918252519081900360200190f35b34801561013e57600080fd5b506100d3600160a060020a0360043581169060243516604435610348565b34801561016857600080fd5b506100d3600160a060020a03600435166024356104bd565b34801561018c57600080fd5b506100d3600160a060020a03600435166024356105c6565b3480156101b057600080fd5b50610120600160a060020a03600435166106b5565b3480156101d157600080fd5b506100d36106d0565b3480156101e657600080fd5b506100d3600160a060020a036004351660243561073c565b34801561020a57600080fd5b5061021361081b565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561024d578181015183820152602001610235565b50505050905090810190601f16801561027a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561029457600080fd5b506100d3600160a060020a03600435166024356108b1565b3480156102b857600080fd5b50610120600160a060020a036004358116906024351661094a565b60035460ff1681565b336000818152600160209081526040808320600160a060020a038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b60025490565b600160a060020a03831660009081526020819052604081205482111561036d57600080fd5b600160a060020a038416600090815260016020908152604080832033845290915290205482111561039d57600080fd5b600160a060020a03831615156103b257600080fd5b600160a060020a0384166000908152602081905260409020546103db908363ffffffff61097516565b600160a060020a038086166000908152602081905260408082209390935590851681522054610410908363ffffffff61098716565b600160a060020a03808516600090815260208181526040808320949094559187168152600182528281203382529091522054610452908363ffffffff61097516565b600160a060020a03808616600081815260016020908152604080832033845282529182902094909455805186815290519287169391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929181900390910190a35060019392505050565b60035460009060ff161580156104e257506003546101009004600160a060020a031633145b15156104ed57600080fd5b600254610500908363ffffffff61098716565b600255600160a060020a03831660009081526020819052604090205461052c908363ffffffff61098716565b600160a060020a03841660008181526020818152604091829020939093558051858152905191927f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d412139688592918290030190a2604080518381529051600160a060020a038516916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a350600192915050565b336000908152600160209081526040808320600160a060020a038616845290915281205480831061061a57336000908152600160209081526040808320600160a060020a038816845290915281205561064f565b61062a818463ffffffff61097516565b336000908152600160209081526040808320600160a060020a03891684529091529020555b336000818152600160209081526040808320600160a060020a0389168085529083529281902054815190815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060019392505050565b600160a060020a031660009081526020819052604090205490565b60035460009060ff161580156106f557506003546101009004600160a060020a031633145b151561070057600080fd5b6003805460ff191660011790556040517fae5184fba832cb2b1f702aca6117b8d265eaf03ad33eb133f19dde0f5920fa0890600090a150600190565b3360009081526020819052604081205482111561075857600080fd5b600160a060020a038316151561076d57600080fd5b3360009081526020819052604090205461078d908363ffffffff61097516565b3360009081526020819052604080822092909255600160a060020a038516815220546107bf908363ffffffff61098716565b600160a060020a038416600081815260208181526040918290209390935580518581529051919233927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a350600192915050565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108a75780601f1061087c576101008083540402835291602001916108a7565b820191906000526020600020905b81548152906001019060200180831161088a57829003601f168201915b5050505050905090565b336000908152600160209081526040808320600160a060020a03861684529091528120546108e5908363ffffffff61098716565b336000818152600160209081526040808320600160a060020a0389168085529083529281902085905580519485525191937f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929081900390910190a350600192915050565b600160a060020a03918216600090815260016020908152604080832093909416825291909152205490565b60008282111561098157fe5b50900390565b60008282018381101561099657fe5b93925050505600a165627a7a723058209c5fe76ab0fddb3348581c8635481673245998b0cd56b6e45814b9b048501fd90029",
  "sourceMap": "270:1344:98:-;;;518:177;8:9:-1;5:2;;;30:1;27;20:12;5:2;518:177:98;;;;;;;;;;;;;;;;;;;;;;;;;580:20;;518:177;;580:20;;:8;;:20;;;;:::i;:::-;-1:-1:-1;658:6:98;:16;;-1:-1:-1;;;;;658:16:98;;;;;-1:-1:-1;;;;;;658:16:98;;;;;;;;;-1:-1:-1;;680:6:98;:10;270:1344;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;270:1344:98;;;-1:-1:-1;270:1344:98;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "270:1344:98:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;315:27;;8:9:-1;5:2;;;30:1;27;20:12;5:2;315:27:98;;;;;;;;;;;;;;;;;;;;;;2112:188:100;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2112:188:100;-1:-1:-1;;;;;2112:188:100;;;;;;;4706:77;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4706:77:100;;;;;;;;;;;;;;;;;;;;2575:447;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2575:447:100;-1:-1:-1;;;;;2575:447:100;;;;;;;;;;;;849:258:98;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;849:258:98;-1:-1:-1;;;;;849:258:98;;;;;;;4227:418:100;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;4227:418:100;-1:-1:-1;;;;;4227:418:100;;;;;;;4985:99;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;4985:99:100;-1:-1:-1;;;;;4985:99:100;;;;;1158:136:98;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1158:136:98;;;;1174:320:100;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1174:320:100;-1:-1:-1;;;;;1174:320:100;;;;;;;1298:88:98;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1298:88:98;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;1298:88:98;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3474:296:100;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;3474:296:100;-1:-1:-1;;;;;3474:296:100;;;;;;;888:132;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;888:132:100;-1:-1:-1;;;;;888:132:100;;;;;;;;;;315:27:98;;;;;;:::o;2112:188:100:-;2199:10;2179:4;2191:19;;;:7;:19;;;;;;;;-1:-1:-1;;;;;2191:29:100;;;;;;;;;;;:38;;;2240;;;;;;;2179:4;;2191:29;;2199:10;;2240:38;;;;;;;;-1:-1:-1;2291:4:100;2112:188;;;;:::o;4706:77::-;4772:6;;4706:77;:::o;2575:447::-;-1:-1:-1;;;;;2691:15:100;;2661:4;2691:15;;;;;;;;;;;2681:25;;;2673:34;;;;;;-1:-1:-1;;;;;2731:14:100;;;;;;:7;:14;;;;;;;;2746:10;2731:26;;;;;;;;2721:36;;;2713:45;;;;;;-1:-1:-1;;;;;2772:17:100;;;;2764:26;;;;;;-1:-1:-1;;;;;2814:15:100;;:8;:15;;;;;;;;;;;:27;;2834:6;2814:27;:19;:27;:::i;:::-;-1:-1:-1;;;;;2796:15:100;;;:8;:15;;;;;;;;;;;:45;;;;2863:13;;;;;;;:25;;2881:6;2863:25;:17;:25;:::i;:::-;-1:-1:-1;;;;;2847:13:100;;;:8;:13;;;;;;;;;;;:41;;;;2923:14;;;;;:7;:14;;;;;2938:10;2923:26;;;;;;;:38;;2954:6;2923:38;:30;:38;:::i;:::-;-1:-1:-1;;;;;2894:14:100;;;;;;;:7;:14;;;;;;;;2909:10;2894:26;;;;;;;;:67;;;;2972:28;;;;;;;;;;;2894:14;;2972:28;;;;;;;;;;;-1:-1:-1;3013:4:100;2575:447;;;;;:::o;849:258:98:-;1485:15;;923:4;;1485:15;;1484:16;:40;;;;-1:-1:-1;1518:6:98;;;;;-1:-1:-1;;;;;1518:6:98;1504:10;:20;1484:40;1476:49;;;;;;;;944:6;;:19;;955:7;944:19;:10;:19;:::i;:::-;935:6;:28;-1:-1:-1;;;;;985:13:98;;:8;:13;;;;;;;;;;;:26;;1003:7;985:26;:17;:26;:::i;:::-;-1:-1:-1;;;;;969:13:98;;:8;:13;;;;;;;;;;;;:42;;;;1022:18;;;;;;;969:13;;1022:18;;;;;;;;;1051:34;;;;;;;;-1:-1:-1;;;;;1051:34:98;;;1068:1;;1051:34;;;;;;;;;-1:-1:-1;1098:4:98;849:258;;;;:::o;4227:418:100:-;4356:10;4317:4;4348:19;;;:7;:19;;;;;;;;-1:-1:-1;;;;;4348:29:100;;;;;;;;;;4387:28;;;4383:169;;4433:10;4457:1;4425:19;;;:7;:19;;;;;;;;-1:-1:-1;;;;;4425:29:100;;;;;;;;;:33;4383:169;;;4515:30;:8;4528:16;4515:30;:12;:30;:::i;:::-;4491:10;4483:19;;;;:7;:19;;;;;;;;-1:-1:-1;;;;;4483:29:100;;;;;;;;;:62;4383:169;4571:10;4593:19;;;;:7;:19;;;;;;;;-1:-1:-1;;;;;4562:61:100;;4593:29;;;;;;;;;;;4562:61;;;;;;;;;4571:10;4562:61;;;;;;;;;;;-1:-1:-1;4636:4:100;;4227:418;-1:-1:-1;;;4227:418:100:o;4985:99::-;-1:-1:-1;;;;;5063:16:100;5041:7;5063:16;;;;;;;;;;;;4985:99::o;1158:136:98:-;1485:15;;1213:4;;1485:15;;1484:16;:40;;;;-1:-1:-1;1518:6:98;;;;;-1:-1:-1;;;;;1518:6:98;1504:10;:20;1484:40;1476:49;;;;;;;;1225:15;:22;;-1:-1:-1;;1225:22:98;1243:4;1225:22;;;1258:14;;;;1225:15;;1258:14;-1:-1:-1;1285:4:98;1158:136;:::o;1174:320:100:-;1276:10;1237:4;1267:20;;;;;;;;;;;1257:30;;;1249:39;;;;;;-1:-1:-1;;;;;1302:17:100;;;;1294:26;;;;;;1358:10;1349:8;:20;;;;;;;;;;;:32;;1374:6;1349:32;:24;:32;:::i;:::-;1335:10;1326:8;:20;;;;;;;;;;;:55;;;;-1:-1:-1;;;;;1403:13:100;;;;;;:25;;1421:6;1403:25;:17;:25;:::i;:::-;-1:-1:-1;;;;;1387:13:100;;:8;:13;;;;;;;;;;;;:41;;;;1439:33;;;;;;;1387:13;;1448:10;;1439:33;;;;;;;;;;-1:-1:-1;1485:4:100;1174:320;;;;:::o;1298:88:98:-;1373:8;1366:15;;;;;;;;-1:-1:-1;;1366:15:98;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1350:6;;1366:15;;1373:8;;1366:15;;1373:8;1366:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1298:88;:::o;3474:296:100:-;3637:10;3575:4;3629:19;;;:7;:19;;;;;;;;-1:-1:-1;;;;;3629:29:100;;;;;;;;;;:46;;3663:11;3629:46;:33;:46;:::i;:::-;3597:10;3589:19;;;;:7;:19;;;;;;;;-1:-1:-1;;;;;3589:29:100;;;;;;;;;;;;:87;;;3687:61;;;;;;3589:29;;3687:61;;;;;;;;;;;-1:-1:-1;3761:4:100;3474:296;;;;:::o;888:132::-;-1:-1:-1;;;;;990:15:100;;;968:7;990:15;;;:7;:15;;;;;;;;:25;;;;;;;;;;;;;888:132::o;936:110:70:-;994:7;1016:6;;;;1009:14;;;;-1:-1:-1;1036:5:70;;;936:110::o;1101:129::-;1159:7;1186:5;;;1204:6;;;;1197:14;;;;1224:1;1101:129;-1:-1:-1;;;1101:129:70:o",
  "source": "pragma solidity ^0.4.24;\n\nimport \"./StandardToken.sol\";\n\n\n/**\n * @title Mintable token\n * @dev Simple ERC20 Token example, with mintable token creation\n * Based on code by TokenMarketNet: https://github.com/TokenMarketNet/ico/blob/master/contracts/MintableToken.sol\n */\ncontract MintableToken is StandardToken {\n\n  bool public mintingFinished;\n  address internal minter;\n  string internal tokenURI;                 // A reference to a URI containing further token information\n\n\n  // @notice constructor: initialized\n  constructor(string _tokenURI, address _minter)\n  public {\n    tokenURI = _tokenURI;                         // Set the id for reference\n    minter = _minter;\n    supply = 0;\n  }\n\n\n  // @dev Function to mint tokens\n  // @param _to The address that will receive the minted tokens.\n  // @param _amount The amount of tokens to mint.\n  function mint(address _to, uint256 _amount)\n  public\n  canMint\n  returns (bool) {\n    supply = supply.add(_amount);\n    balances[_to] = balances[_to].add(_amount);\n    emit Mint(_to, _amount);\n    emit Transfer(address(0), _to, _amount);\n    return true;\n  }\n\n  // @dev Function to stop minting new tokens.\n  function finishMinting()\n  public\n  canMint\n  returns (bool) {\n    mintingFinished = true;\n    emit MintFinished();\n    return true;\n  }\n\n  function getTokenURI()\n  external\n  view\n  returns (string) {\n      return tokenURI;\n  }\n\n  // @notice modifier: Requires that minting hasn't finished\n  modifier canMint() {\n    require(!mintingFinished && msg.sender == minter);\n    _;\n  }\n\n  event Mint(address indexed to, uint256 amount);\n  event MintFinished();\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc20/MintableToken.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc20/MintableToken.sol",
    "exportedSymbols": {
      "MintableToken": [
        27645
      ]
    },
    "id": 27646,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 27523,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:98"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc20/StandardToken.sol",
        "file": "./StandardToken.sol",
        "id": 27524,
        "nodeType": "ImportDirective",
        "scope": 27646,
        "sourceUnit": 28024,
        "src": "26:29:98",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 27525,
              "name": "StandardToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 28023,
              "src": "296:13:98",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_StandardToken_$28023",
                "typeString": "contract StandardToken"
              }
            },
            "id": 27526,
            "nodeType": "InheritanceSpecifier",
            "src": "296:13:98"
          }
        ],
        "contractDependencies": [
          17072,
          28023
        ],
        "contractKind": "contract",
        "documentation": "@title Mintable token\n@dev Simple ERC20 Token example, with mintable token creation\nBased on code by TokenMarketNet: https://github.com/TokenMarketNet/ico/blob/master/contracts/MintableToken.sol",
        "fullyImplemented": true,
        "id": 27645,
        "linearizedBaseContracts": [
          27645,
          28023,
          17072
        ],
        "name": "MintableToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 27528,
            "name": "mintingFinished",
            "nodeType": "VariableDeclaration",
            "scope": 27645,
            "src": "315:27:98",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 27527,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "315:4:98",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 27530,
            "name": "minter",
            "nodeType": "VariableDeclaration",
            "scope": 27645,
            "src": "346:23:98",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 27529,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "346:7:98",
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
            "id": 27532,
            "name": "tokenURI",
            "nodeType": "VariableDeclaration",
            "scope": 27645,
            "src": "373:24:98",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 27531,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "373:6:98",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 27551,
              "nodeType": "Block",
              "src": "574:121:98",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 27541,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 27539,
                      "name": "tokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27532,
                      "src": "580:8:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 27540,
                      "name": "_tokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27534,
                      "src": "591:9:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "580:20:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 27542,
                  "nodeType": "ExpressionStatement",
                  "src": "580:20:98"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 27545,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 27543,
                      "name": "minter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27530,
                      "src": "658:6:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 27544,
                      "name": "_minter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27536,
                      "src": "667:7:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "658:16:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 27546,
                  "nodeType": "ExpressionStatement",
                  "src": "658:16:98"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 27549,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 27547,
                      "name": "supply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27710,
                      "src": "680:6:98",
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
                      "id": 27548,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "689:1:98",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "680:10:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 27550,
                  "nodeType": "ExpressionStatement",
                  "src": "680:10:98"
                }
              ]
            },
            "documentation": null,
            "id": 27552,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 27537,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27534,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 27552,
                  "src": "530:16:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27533,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "530:6:98",
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
                  "id": 27536,
                  "name": "_minter",
                  "nodeType": "VariableDeclaration",
                  "scope": 27552,
                  "src": "548:15:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27535,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "548:7:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "529:35:98"
            },
            "payable": false,
            "returnParameters": {
              "id": 27538,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "574:0:98"
            },
            "scope": 27645,
            "src": "518:177:98",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 27596,
              "nodeType": "Block",
              "src": "929:178:98",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 27568,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 27563,
                      "name": "supply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27710,
                      "src": "935:6:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 27566,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27556,
                          "src": "955:7:98",
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
                          "id": 27564,
                          "name": "supply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27710,
                          "src": "944:6:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 27565,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 17318,
                        "src": "944:10:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 27567,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "944:19:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "935:28:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 27569,
                  "nodeType": "ExpressionStatement",
                  "src": "935:28:98"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 27579,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 27570,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27702,
                        "src": "969:8:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 27572,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 27571,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27554,
                        "src": "978:3:98",
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
                      "src": "969:13:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 27577,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27556,
                          "src": "1003:7:98",
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
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 27573,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27702,
                            "src": "985:8:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 27575,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 27574,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27554,
                            "src": "994:3:98",
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
                          "src": "985:13:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 27576,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 17318,
                        "src": "985:17:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 27578,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "985:26:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "969:42:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 27580,
                  "nodeType": "ExpressionStatement",
                  "src": "969:42:98"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 27582,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27554,
                        "src": "1027:3:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 27583,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27556,
                        "src": "1032:7:98",
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
                      "id": 27581,
                      "name": "Mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27642,
                      "src": "1022:4:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 27584,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1022:18:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27585,
                  "nodeType": "EmitStatement",
                  "src": "1017:23:98"
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
                            "id": 27588,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1068:1:98",
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
                          "id": 27587,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1060:7:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 27589,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1060:10:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 27590,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27554,
                        "src": "1072:3:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 27591,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27556,
                        "src": "1077:7:98",
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
                      "id": 27586,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17063,
                      "src": "1051:8:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 27592,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1051:34:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27593,
                  "nodeType": "EmitStatement",
                  "src": "1046:39:98"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 27594,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1098:4:98",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 27562,
                  "id": 27595,
                  "nodeType": "Return",
                  "src": "1091:11:98"
                }
              ]
            },
            "documentation": null,
            "id": 27597,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 27559,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 27558,
                  "name": "canMint",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 27636,
                  "src": "904:7:98",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "904:7:98"
              }
            ],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 27557,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27554,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 27597,
                  "src": "863:11:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27553,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "863:7:98",
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
                  "id": 27556,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 27597,
                  "src": "876:15:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27555,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "876:7:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "862:30:98"
            },
            "payable": false,
            "returnParameters": {
              "id": 27562,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27561,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 27597,
                  "src": "923:4:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27560,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "923:4:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "922:6:98"
            },
            "scope": 27645,
            "src": "849:258:98",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 27613,
              "nodeType": "Block",
              "src": "1219:75:98",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 27606,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 27604,
                      "name": "mintingFinished",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27528,
                      "src": "1225:15:98",
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
                      "id": 27605,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1243:4:98",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1225:22:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 27607,
                  "nodeType": "ExpressionStatement",
                  "src": "1225:22:98"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 27608,
                      "name": "MintFinished",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27644,
                      "src": "1258:12:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 27609,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1258:14:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27610,
                  "nodeType": "EmitStatement",
                  "src": "1253:19:98"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 27611,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1285:4:98",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 27603,
                  "id": 27612,
                  "nodeType": "Return",
                  "src": "1278:11:98"
                }
              ]
            },
            "documentation": null,
            "id": 27614,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 27600,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 27599,
                  "name": "canMint",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 27636,
                  "src": "1194:7:98",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1194:7:98"
              }
            ],
            "name": "finishMinting",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 27598,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1180:2:98"
            },
            "payable": false,
            "returnParameters": {
              "id": 27603,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27602,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 27614,
                  "src": "1213:4:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27601,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1213:4:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1212:6:98"
            },
            "scope": 27645,
            "src": "1158:136:98",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 27621,
              "nodeType": "Block",
              "src": "1358:28:98",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 27619,
                    "name": "tokenURI",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 27532,
                    "src": "1373:8:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 27618,
                  "id": 27620,
                  "nodeType": "Return",
                  "src": "1366:15:98"
                }
              ]
            },
            "documentation": null,
            "id": 27622,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getTokenURI",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 27615,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1318:2:98"
            },
            "payable": false,
            "returnParameters": {
              "id": 27618,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27617,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 27622,
                  "src": "1350:6:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27616,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1350:6:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1349:8:98"
            },
            "scope": 27645,
            "src": "1298:88:98",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 27635,
              "nodeType": "Block",
              "src": "1470:67:98",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 27631,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 27626,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "1484:16:98",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 27625,
                            "name": "mintingFinished",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27528,
                            "src": "1485:15:98",
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
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 27630,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 27627,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28038,
                              "src": "1504:3:98",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 27628,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1504:10:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 27629,
                            "name": "minter",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27530,
                            "src": "1518:6:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1504:20:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "1484:40:98",
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
                      "id": 27624,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "1476:7:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 27632,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1476:49:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27633,
                  "nodeType": "ExpressionStatement",
                  "src": "1476:49:98"
                },
                {
                  "id": 27634,
                  "nodeType": "PlaceholderStatement",
                  "src": "1531:1:98"
                }
              ]
            },
            "documentation": null,
            "id": 27636,
            "name": "canMint",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 27623,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1467:2:98"
            },
            "src": "1451:86:98",
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 27642,
            "name": "Mint",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 27641,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27638,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 27642,
                  "src": "1552:18:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27637,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1552:7:98",
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
                  "id": 27640,
                  "indexed": false,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 27642,
                  "src": "1572:14:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27639,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1572:7:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1551:36:98"
            },
            "src": "1541:47:98"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 27644,
            "name": "MintFinished",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 27643,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1609:2:98"
            },
            "src": "1591:21:98"
          }
        ],
        "scope": 27646,
        "src": "270:1344:98"
      }
    ],
    "src": "0:1615:98"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc20/MintableToken.sol",
    "exportedSymbols": {
      "MintableToken": [
        27645
      ]
    },
    "id": 27646,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 27523,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:98"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc20/StandardToken.sol",
        "file": "./StandardToken.sol",
        "id": 27524,
        "nodeType": "ImportDirective",
        "scope": 27646,
        "sourceUnit": 28024,
        "src": "26:29:98",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 27525,
              "name": "StandardToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 28023,
              "src": "296:13:98",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_StandardToken_$28023",
                "typeString": "contract StandardToken"
              }
            },
            "id": 27526,
            "nodeType": "InheritanceSpecifier",
            "src": "296:13:98"
          }
        ],
        "contractDependencies": [
          17072,
          28023
        ],
        "contractKind": "contract",
        "documentation": "@title Mintable token\n@dev Simple ERC20 Token example, with mintable token creation\nBased on code by TokenMarketNet: https://github.com/TokenMarketNet/ico/blob/master/contracts/MintableToken.sol",
        "fullyImplemented": true,
        "id": 27645,
        "linearizedBaseContracts": [
          27645,
          28023,
          17072
        ],
        "name": "MintableToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 27528,
            "name": "mintingFinished",
            "nodeType": "VariableDeclaration",
            "scope": 27645,
            "src": "315:27:98",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 27527,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "315:4:98",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 27530,
            "name": "minter",
            "nodeType": "VariableDeclaration",
            "scope": 27645,
            "src": "346:23:98",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 27529,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "346:7:98",
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
            "id": 27532,
            "name": "tokenURI",
            "nodeType": "VariableDeclaration",
            "scope": 27645,
            "src": "373:24:98",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 27531,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "373:6:98",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 27551,
              "nodeType": "Block",
              "src": "574:121:98",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 27541,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 27539,
                      "name": "tokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27532,
                      "src": "580:8:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 27540,
                      "name": "_tokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27534,
                      "src": "591:9:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "580:20:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 27542,
                  "nodeType": "ExpressionStatement",
                  "src": "580:20:98"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 27545,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 27543,
                      "name": "minter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27530,
                      "src": "658:6:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 27544,
                      "name": "_minter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27536,
                      "src": "667:7:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "658:16:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 27546,
                  "nodeType": "ExpressionStatement",
                  "src": "658:16:98"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 27549,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 27547,
                      "name": "supply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27710,
                      "src": "680:6:98",
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
                      "id": 27548,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "689:1:98",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "680:10:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 27550,
                  "nodeType": "ExpressionStatement",
                  "src": "680:10:98"
                }
              ]
            },
            "documentation": null,
            "id": 27552,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 27537,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27534,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 27552,
                  "src": "530:16:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27533,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "530:6:98",
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
                  "id": 27536,
                  "name": "_minter",
                  "nodeType": "VariableDeclaration",
                  "scope": 27552,
                  "src": "548:15:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27535,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "548:7:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "529:35:98"
            },
            "payable": false,
            "returnParameters": {
              "id": 27538,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "574:0:98"
            },
            "scope": 27645,
            "src": "518:177:98",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 27596,
              "nodeType": "Block",
              "src": "929:178:98",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 27568,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 27563,
                      "name": "supply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27710,
                      "src": "935:6:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 27566,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27556,
                          "src": "955:7:98",
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
                          "id": 27564,
                          "name": "supply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27710,
                          "src": "944:6:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 27565,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 17318,
                        "src": "944:10:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 27567,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "944:19:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "935:28:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 27569,
                  "nodeType": "ExpressionStatement",
                  "src": "935:28:98"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 27579,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 27570,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27702,
                        "src": "969:8:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 27572,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 27571,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27554,
                        "src": "978:3:98",
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
                      "src": "969:13:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 27577,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27556,
                          "src": "1003:7:98",
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
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 27573,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27702,
                            "src": "985:8:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 27575,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 27574,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27554,
                            "src": "994:3:98",
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
                          "src": "985:13:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 27576,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 17318,
                        "src": "985:17:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 27578,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "985:26:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "969:42:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 27580,
                  "nodeType": "ExpressionStatement",
                  "src": "969:42:98"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 27582,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27554,
                        "src": "1027:3:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 27583,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27556,
                        "src": "1032:7:98",
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
                      "id": 27581,
                      "name": "Mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27642,
                      "src": "1022:4:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 27584,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1022:18:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27585,
                  "nodeType": "EmitStatement",
                  "src": "1017:23:98"
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
                            "id": 27588,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1068:1:98",
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
                          "id": 27587,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1060:7:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 27589,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1060:10:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 27590,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27554,
                        "src": "1072:3:98",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 27591,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27556,
                        "src": "1077:7:98",
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
                      "id": 27586,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17063,
                      "src": "1051:8:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 27592,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1051:34:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27593,
                  "nodeType": "EmitStatement",
                  "src": "1046:39:98"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 27594,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1098:4:98",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 27562,
                  "id": 27595,
                  "nodeType": "Return",
                  "src": "1091:11:98"
                }
              ]
            },
            "documentation": null,
            "id": 27597,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 27559,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 27558,
                  "name": "canMint",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 27636,
                  "src": "904:7:98",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "904:7:98"
              }
            ],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 27557,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27554,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 27597,
                  "src": "863:11:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27553,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "863:7:98",
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
                  "id": 27556,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 27597,
                  "src": "876:15:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27555,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "876:7:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "862:30:98"
            },
            "payable": false,
            "returnParameters": {
              "id": 27562,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27561,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 27597,
                  "src": "923:4:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27560,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "923:4:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "922:6:98"
            },
            "scope": 27645,
            "src": "849:258:98",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 27613,
              "nodeType": "Block",
              "src": "1219:75:98",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 27606,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 27604,
                      "name": "mintingFinished",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27528,
                      "src": "1225:15:98",
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
                      "id": 27605,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1243:4:98",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1225:22:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 27607,
                  "nodeType": "ExpressionStatement",
                  "src": "1225:22:98"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 27608,
                      "name": "MintFinished",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27644,
                      "src": "1258:12:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 27609,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1258:14:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27610,
                  "nodeType": "EmitStatement",
                  "src": "1253:19:98"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 27611,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1285:4:98",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 27603,
                  "id": 27612,
                  "nodeType": "Return",
                  "src": "1278:11:98"
                }
              ]
            },
            "documentation": null,
            "id": 27614,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 27600,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 27599,
                  "name": "canMint",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 27636,
                  "src": "1194:7:98",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1194:7:98"
              }
            ],
            "name": "finishMinting",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 27598,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1180:2:98"
            },
            "payable": false,
            "returnParameters": {
              "id": 27603,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27602,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 27614,
                  "src": "1213:4:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27601,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1213:4:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1212:6:98"
            },
            "scope": 27645,
            "src": "1158:136:98",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 27621,
              "nodeType": "Block",
              "src": "1358:28:98",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 27619,
                    "name": "tokenURI",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 27532,
                    "src": "1373:8:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 27618,
                  "id": 27620,
                  "nodeType": "Return",
                  "src": "1366:15:98"
                }
              ]
            },
            "documentation": null,
            "id": 27622,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getTokenURI",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 27615,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1318:2:98"
            },
            "payable": false,
            "returnParameters": {
              "id": 27618,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27617,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 27622,
                  "src": "1350:6:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27616,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1350:6:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1349:8:98"
            },
            "scope": 27645,
            "src": "1298:88:98",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 27635,
              "nodeType": "Block",
              "src": "1470:67:98",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 27631,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 27626,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "1484:16:98",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 27625,
                            "name": "mintingFinished",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27528,
                            "src": "1485:15:98",
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
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 27630,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 27627,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28038,
                              "src": "1504:3:98",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 27628,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1504:10:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 27629,
                            "name": "minter",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27530,
                            "src": "1518:6:98",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1504:20:98",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "1484:40:98",
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
                      "id": 27624,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "1476:7:98",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 27632,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1476:49:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27633,
                  "nodeType": "ExpressionStatement",
                  "src": "1476:49:98"
                },
                {
                  "id": 27634,
                  "nodeType": "PlaceholderStatement",
                  "src": "1531:1:98"
                }
              ]
            },
            "documentation": null,
            "id": 27636,
            "name": "canMint",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 27623,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1467:2:98"
            },
            "src": "1451:86:98",
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 27642,
            "name": "Mint",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 27641,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27638,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 27642,
                  "src": "1552:18:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27637,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1552:7:98",
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
                  "id": 27640,
                  "indexed": false,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 27642,
                  "src": "1572:14:98",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27639,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1572:7:98",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1551:36:98"
            },
            "src": "1541:47:98"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 27644,
            "name": "MintFinished",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 27643,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1609:2:98"
            },
            "src": "1591:21:98"
          }
        ],
        "scope": 27646,
        "src": "270:1344:98"
      }
    ],
    "src": "0:1615:98"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-12-06T01:19:16.949Z"
}