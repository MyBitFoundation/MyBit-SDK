"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var MintableDistribution = exports.MintableDistribution = 
{
  "contractName": "MintableDistribution",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "supply",
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
      "constant": true,
      "inputs": [],
      "name": "minter",
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
      "inputs": [],
      "name": "assetIncome",
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
      "inputs": [],
      "name": "withdraw",
      "outputs": [
        {
          "name": "_amount",
          "type": "uint256"
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
      "constant": true,
      "inputs": [],
      "name": "valuePerToken",
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
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "getUnclaimedAmount",
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
      "inputs": [],
      "name": "issueDividends",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "claimableIncome",
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
          "name": "",
          "type": "address"
        }
      ],
      "name": "previousValuePerToken",
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
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "getTokenValue",
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
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
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
          "name": "_sender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_paymentAmount",
          "type": "uint256"
        }
      ],
      "name": "LogIncomeReceived",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_block",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "_address",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "LogIncomeCollected",
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
    }
  ],
  "bytecode": "0x60806040526007805460ff1916905534801561001a57600080fd5b506040516109df3803806109df833981016040528051602080830151919092018051909261004d9160029185019061007a565b5060078054600160a060020a039092166101000261010060a860020a031990921691909117905550610115565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100bb57805160ff19168380011785556100e8565b828001600101855582156100e8579182015b828111156100e85782518255916020019190600101906100cd565b506100f49291506100f8565b5090565b61011291905b808211156100f457600081556001016100fe565b90565b6108bb806101246000396000f3006080604052600436106100e55763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663047fc9aa811461017a57806305d2035b146101a157806307546172146101ca57806318160ddd146101fb5780632ba1b3a1146102105780633c130d90146102255780633ccfd60b146102af57806340c10f19146102c457806370a08231146102e85780637d64bcb414610309578063a8fa8e521461031e578063b815239514610333578063eba74e5c14610354578063ec8593be1461035e578063efcb5dea1461037f578063f1c5d6c2146103a0575b6000546101299061011a9061010e346d04ee2d6d415b85acef810000000063ffffffff6103c116565b9063ffffffff6103f716565b6004549063ffffffff61040c16565b60045560035461013f903463ffffffff61040c16565b60035560408051348152905133917fe3166012cb87b3dec8e117fe0e096a47387f94ea2ec12086ed8ae24ff8c237fe919081900360200190a2005b34801561018657600080fd5b5061018f61041b565b60408051918252519081900360200190f35b3480156101ad57600080fd5b506101b6610421565b604080519115158252519081900360200190f35b3480156101d657600080fd5b506101df61042a565b60408051600160a060020a039092168252519081900360200190f35b34801561020757600080fd5b5061018f61043e565b34801561021c57600080fd5b5061018f610444565b34801561023157600080fd5b5061023a61044a565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561027457818101518382015260200161025c565b50505050905090810190601f1680156102a15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102bb57600080fd5b5061018f6104d5565b3480156102d057600080fd5b506101b6600160a060020a03600435166024356105db565b3480156102f457600080fd5b5061018f600160a060020a03600435166106a4565b34801561031557600080fd5b506101b66106bf565b34801561032a57600080fd5b5061018f61072b565b34801561033f57600080fd5b5061018f600160a060020a0360043516610731565b61035c61077d565b005b34801561036a57600080fd5b5061018f600160a060020a03600435166107f7565b34801561038b57600080fd5b5061018f600160a060020a0360043516610809565b3480156103ac57600080fd5b5061018f600160a060020a036004351661081b565b6000808315156103d457600091506103f0565b508282028284828115156103e457fe5b04146103ec57fe5b8091505b5092915050565b6000818381151561040457fe5b049392505050565b6000828201838110156103ec57fe5b60005481565b60075460ff1681565b6007546101009004600160a060020a031681565b60005490565b60035481565b6002805460408051602060018416156101000260001901909316849004601f810184900484028201840190925281815292918301828280156104cd5780601f106104a2576101008083540402835291602001916104cd565b820191906000526020600020905b8154815290600101906020018083116104b057829003601f168201915b505050505081565b6000336105096104e48261081b565b600160a060020a0383166000908152600560205260409020549063ffffffff61040c16565b600160a060020a0382166000908152600560208181526040808420949094556004546006825284842055338352522054610557906d04ee2d6d415b85acef810000000063ffffffff6103f716565b3360008181526005602052604080822082905551929450909184156108fc0291859190818181858888f19350505050158015610597573d6000803e3d6000fd5b506040805142815233602082015280820184905290517f10db2ba5699bf5dbd1070a0c0b207f229dc1ecb78bbe555b84cab3db9576ac429181900360600190a15090565b60075460009060ff1615801561060057506007546101009004600160a060020a031633145b151561060b57600080fd5b60005461061e908363ffffffff61040c16565b6000908155600160a060020a038416815260016020526040902054610649908363ffffffff61040c16565b600160a060020a038416600081815260016020908152604091829020939093558051858152905191927f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d412139688592918290030190a250600192915050565b600160a060020a031660009081526001602052604090205490565b60075460009060ff161580156106e457506007546101009004600160a060020a031633145b15156106ef57600080fd5b6007805460ff191660011790556040517fae5184fba832cb2b1f702aca6117b8d265eaf03ad33eb133f19dde0f5920fa0890600090a150600190565b60045481565b600160a060020a038116600090815260056020526040812054610777906d04ee2d6d415b85acef81000000009061010e9061076b8661081b565b9063ffffffff61040c16565b92915050565b6000546107a69061011a9061010e346d04ee2d6d415b85acef810000000063ffffffff6103c116565b6004556003546107bc903463ffffffff61040c16565b60035560408051348152905133917fe3166012cb87b3dec8e117fe0e096a47387f94ea2ec12086ed8ae24ff8c237fe919081900360200190a2565b60056020526000908152604090205481565b60066020526000908152604090205481565b600160a060020a0381166000908152600660205260408120546004548291610849919063ffffffff61087d16565b600160a060020a03841660009081526001602052604090205490915061087690829063ffffffff6103c116565b9392505050565b60008282111561088957fe5b509003905600a165627a7a7230582056886cd964de4390eccc57ec6848664ccf7df82846f7afc6db2860a3a078073c0029",
  "deployedBytecode": "0x6080604052600436106100e55763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663047fc9aa811461017a57806305d2035b146101a157806307546172146101ca57806318160ddd146101fb5780632ba1b3a1146102105780633c130d90146102255780633ccfd60b146102af57806340c10f19146102c457806370a08231146102e85780637d64bcb414610309578063a8fa8e521461031e578063b815239514610333578063eba74e5c14610354578063ec8593be1461035e578063efcb5dea1461037f578063f1c5d6c2146103a0575b6000546101299061011a9061010e346d04ee2d6d415b85acef810000000063ffffffff6103c116565b9063ffffffff6103f716565b6004549063ffffffff61040c16565b60045560035461013f903463ffffffff61040c16565b60035560408051348152905133917fe3166012cb87b3dec8e117fe0e096a47387f94ea2ec12086ed8ae24ff8c237fe919081900360200190a2005b34801561018657600080fd5b5061018f61041b565b60408051918252519081900360200190f35b3480156101ad57600080fd5b506101b6610421565b604080519115158252519081900360200190f35b3480156101d657600080fd5b506101df61042a565b60408051600160a060020a039092168252519081900360200190f35b34801561020757600080fd5b5061018f61043e565b34801561021c57600080fd5b5061018f610444565b34801561023157600080fd5b5061023a61044a565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561027457818101518382015260200161025c565b50505050905090810190601f1680156102a15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102bb57600080fd5b5061018f6104d5565b3480156102d057600080fd5b506101b6600160a060020a03600435166024356105db565b3480156102f457600080fd5b5061018f600160a060020a03600435166106a4565b34801561031557600080fd5b506101b66106bf565b34801561032a57600080fd5b5061018f61072b565b34801561033f57600080fd5b5061018f600160a060020a0360043516610731565b61035c61077d565b005b34801561036a57600080fd5b5061018f600160a060020a03600435166107f7565b34801561038b57600080fd5b5061018f600160a060020a0360043516610809565b3480156103ac57600080fd5b5061018f600160a060020a036004351661081b565b6000808315156103d457600091506103f0565b508282028284828115156103e457fe5b04146103ec57fe5b8091505b5092915050565b6000818381151561040457fe5b049392505050565b6000828201838110156103ec57fe5b60005481565b60075460ff1681565b6007546101009004600160a060020a031681565b60005490565b60035481565b6002805460408051602060018416156101000260001901909316849004601f810184900484028201840190925281815292918301828280156104cd5780601f106104a2576101008083540402835291602001916104cd565b820191906000526020600020905b8154815290600101906020018083116104b057829003601f168201915b505050505081565b6000336105096104e48261081b565b600160a060020a0383166000908152600560205260409020549063ffffffff61040c16565b600160a060020a0382166000908152600560208181526040808420949094556004546006825284842055338352522054610557906d04ee2d6d415b85acef810000000063ffffffff6103f716565b3360008181526005602052604080822082905551929450909184156108fc0291859190818181858888f19350505050158015610597573d6000803e3d6000fd5b506040805142815233602082015280820184905290517f10db2ba5699bf5dbd1070a0c0b207f229dc1ecb78bbe555b84cab3db9576ac429181900360600190a15090565b60075460009060ff1615801561060057506007546101009004600160a060020a031633145b151561060b57600080fd5b60005461061e908363ffffffff61040c16565b6000908155600160a060020a038416815260016020526040902054610649908363ffffffff61040c16565b600160a060020a038416600081815260016020908152604091829020939093558051858152905191927f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d412139688592918290030190a250600192915050565b600160a060020a031660009081526001602052604090205490565b60075460009060ff161580156106e457506007546101009004600160a060020a031633145b15156106ef57600080fd5b6007805460ff191660011790556040517fae5184fba832cb2b1f702aca6117b8d265eaf03ad33eb133f19dde0f5920fa0890600090a150600190565b60045481565b600160a060020a038116600090815260056020526040812054610777906d04ee2d6d415b85acef81000000009061010e9061076b8661081b565b9063ffffffff61040c16565b92915050565b6000546107a69061011a9061010e346d04ee2d6d415b85acef810000000063ffffffff6103c116565b6004556003546107bc903463ffffffff61040c16565b60035560408051348152905133917fe3166012cb87b3dec8e117fe0e096a47387f94ea2ec12086ed8ae24ff8c237fe919081900360200190a2565b60056020526000908152604090205481565b60066020526000908152604090205481565b600160a060020a0381166000908152600660205260408120546004548291610849919063ffffffff61087d16565b600160a060020a03841660009081526001602052604090205490915061087690829063ffffffff6103c116565b9392505050565b60008282111561088957fe5b509003905600a165627a7a7230582056886cd964de4390eccc57ec6848664ccf7df82846f7afc6db2860a3a078073c0029",
  "sourceMap": "485:1645:91:-;;;570:35;;;-1:-1:-1;;570:35:91;;;673:165;5:2:-1;;;;30:1;27;20:12;5:2;673:165:91;;;;;;;;;;;;;;;;;;;;;;;;;737:20;;673:165;;737:20;;:8;;:20;;;;:::i;:::-;-1:-1:-1;817:6:91;:16;;-1:-1:-1;;;;;817:16:91;;;;;-1:-1:-1;;;;;;817:16:91;;;;;;;;;-1:-1:-1;485:1645:91;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;485:1645:91;;;-1:-1:-1;485:1645:91;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "485:1645:91:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2221:6:92;;2170:59;;2188:40;;:28;:9;795:4;2188:28;:13;:28;:::i;:::-;:32;:40;:32;:40;:::i;:::-;2170:13;;;:59;:17;:59;:::i;:::-;2154:13;:75;2251:11;;:26;;2267:9;2251:26;:15;:26;:::i;:::-;2237:11;:40;2290;;;2320:9;2290:40;;;;2308:10;;2290:40;;;;;;;;;;485:1645:91;552:18:92;;8:9:-1;5:2;;;30:1;27;20:12;5:2;552:18:92;;;;;;;;;;;;;;;;;;;;570:35:91;;8:9:-1;5:2;;;30:1;27;20:12;5:2;570:35:91;;;;;;;;;;;;;;;;;;;;;;609:21;;8:9:-1;5:2;;;30:1;27;20:12;5:2;609:21:91;;;;;;;;-1:-1:-1;;;;;609:21:91;;;;;;;;;;;;;;3134:77:92;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3134:77:92;;;;803:23;;8:9:-1;5:2;;;30:1;27;20:12;5:2;803:23:92;;;;622:22;;8:9:-1;5:2;;;30:1;27;20:12;5:2;622:22:92;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;622:22:92;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1044:294;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1044:294:92;;;;991:213:91;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;991:213:91;-1:-1:-1;;;;;991:213:91;;;;;;;3215:99:92;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;3215:99:92;-1:-1:-1;;;;;3215:99:92;;;;;1256:136:91;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1256:136:91;;;;830:25:92;;8:9:-1;5:2;;;30:1;27;20:12;5:2;830:25:92;;;;2965:165;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2965:165:92;-1:-1:-1;;;;;2965:165:92;;;;;1795:234;;;;;;860:48;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;860:48:92;-1:-1:-1;;;;;860:48:92;;;;;912:54;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;912:54:92;-1:-1:-1;;;;;912:54:92;;;;;2649:221;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2649:221:92;-1:-1:-1;;;;;2649:221:92;;;;;311:173:70;369:7;;388:6;;384:35;;;411:1;404:8;;;;384:35;-1:-1:-1;436:5:70;;;440:1;436;:5;454;;;;;;;;:10;447:18;;;;478:1;471:8;;311:173;;;;;;:::o;559:272::-;617:7;825:1;821;:5;;;;;;;;;559:272;-1:-1:-1;;;559:272:70:o;1101:129::-;1159:7;1186:5;;;1204:6;;;;1197:14;;;552:18:92;;;;:::o;570:35:91:-;;;;;;:::o;609:21::-;;;;;;-1:-1:-1;;;;;609:21:91;;:::o;3134:77:92:-;3178:7;3200:6;3134:77;:::o;803:23::-;;;;:::o;622:22::-;;;;;;;;;;;;;;-1:-1:-1;;622:22:92;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1044:294::-;1120:12;1097:10;3765:48;3792:20;3806:5;3792:13;:20::i;:::-;-1:-1:-1;;;;;3765:22:92;;;;;;:15;:22;;;;;;;:48;:26;:48;:::i;:::-;-1:-1:-1;;;;;3740:22:92;;;;;;:15;:22;;;;;;;;:73;;;;3852:13;;3821:21;:28;;;;;:44;1168:10;1152:27;;;;;:46;;795:4;1152:46;:31;:46;:::i;:::-;1229:10;1213:27;;;;:15;:27;;;;;;1206:34;;;1248:28;1142:56;;-1:-1:-1;1229:10:92;;1248:28;;;;;1142:56;;1248:28;;1213:27;1248:28;1142:56;1229:10;1248:28;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;-1:-1;1289:44:92;;;1308:3;1289:44;;1313:10;1289:44;;;;;;;;;;;;;;;;;;;;;1044:294;;:::o;991:213:91:-;1746:15;;1065:4;;1746:15;;1745:16;:40;;;;-1:-1:-1;1779:6:91;;;;;-1:-1:-1;;;;;1779:6:91;1765:10;:20;1745:40;1737:49;;;;;;;;1086:6;;:19;;1097:7;1086:19;:10;:19;:::i;:::-;1077:6;:28;;;-1:-1:-1;;;;;1127:13:91;;;;:8;:13;;;;;;:26;;1145:7;1127:26;:17;:26;:::i;:::-;-1:-1:-1;;;;;1111:13:91;;;;;;:8;:13;;;;;;;;;:42;;;;1164:18;;;;;;;1111:13;;1164:18;;;;;;;;;-1:-1:-1;1195:4:91;991:213;;;;:::o;3215:99:92:-;-1:-1:-1;;;;;3293:16:92;3271:7;3293:16;;;:8;:16;;;;;;;3215:99::o;1256:136:91:-;1746:15;;1311:4;;1746:15;;1745:16;:40;;;;-1:-1:-1;1779:6:91;;;;;-1:-1:-1;;;;;1779:6:91;1765:10;:20;1745:40;1737:49;;;;;;;;1323:15;:22;;-1:-1:-1;;1323:22:91;1341:4;1323:22;;;1356:14;;;;1323:15;;1356:14;-1:-1:-1;1383:4:91;1256:136;:::o;830:25:92:-;;;;:::o;2965:165::-;-1:-1:-1;;;;;3082:22:92;;3035:4;3082:22;;;:15;:22;;;;;;3057:67;;795:4;;3057:48;;:20;3098:5;3057:13;:20::i;:::-;:24;:48;:24;:48;:::i;:67::-;3049:76;2965:165;-1:-1:-1;;2965:165:92:o;1795:234::-;1915:6;;1864:59;;1882:40;;:28;:9;795:4;1882:28;:13;:28;:::i;1864:59::-;1848:13;:75;1945:11;;:26;;1961:9;1945:26;:15;:26;:::i;:::-;1931:11;:40;1984;;;2014:9;1984:40;;;;2002:10;;1984:40;;;;;;;;;;1795:234::o;860:48::-;;;;;;;;;;;;;:::o;912:54::-;;;;;;;;;;;;;:::o;2649:221::-;-1:-1:-1;;;;;2777:28:92;;2714:4;2777:28;;;:21;:28;;;;;;2759:13;;2714:4;;2759:47;;:13;:47;:17;:47;:::i;:::-;-1:-1:-1;;;;;2849:15:92;;;;;;:8;:15;;;;;;2728:78;;-1:-1:-1;2821:44:92;;2728:78;;2821:44;:27;:44;:::i;:::-;2814:51;2649:221;-1:-1:-1;;;2649:221:92:o;936:110:70:-;994:7;1016:6;;;;1009:14;;;;-1:-1:-1;1036:5:70;;;936:110::o",
  "source": "pragma solidity ^0.4.24;\n\nimport '../../math/SafeMath.sol';\nimport './StandardDistribution.sol';\n\n\n\n// @title Non-Transferable ERC20 token contract with shared revenue distribution functionality.\n// @notice This token contract can receive payments in the fallback function and token owners can withdraw their share\n// @author Kyle Dewhurst, MyBitFoundation\n// Credit goes to Nick Johnson for the dividend token https://medium.com/@weka/dividend-bearing-tokens-on-ethereum-42d01c710657\ncontract MintableDistribution is StandardDistribution{\n  using SafeMath for uint;\n\n  bool public mintingFinished = false;\n  address public minter;\n\n  // @notice constructor: initialized\n  constructor(string _tokenURI, address _minter)\n  public {\n      tokenURI = _tokenURI;                         // Set the id for reference\n      minter = _minter;\n  }\n\n  // @dev Function to mint tokens\n  // @param _to The address that will receive the minted tokens.\n  // @param _amount The amount of tokens to mint.\n  function mint(address _to, uint256 _amount)\n  public\n  canMint\n  returns (bool) {\n    supply = supply.add(_amount);\n    balances[_to] = balances[_to].add(_amount);\n    emit Mint(_to, _amount);\n    return true;\n  }\n\n\n  // @dev Function to stop minting new tokens.\n  function finishMinting()\n  public\n  canMint\n  returns (bool) {\n    mintingFinished = true;\n    emit MintFinished();\n    return true;\n  }\n\n  // ------------------------------------------------------------------------------------------------\n  //                                   Modifiers\n  // ------------------------------------------------------------------------------------------------\n\n\n  // @notice modifier: Requires that minting hasn't finished\n  modifier canMint() {\n    require(!mintingFinished && msg.sender == minter);\n    _;\n  }\n\n\n  // ------------------------------------------------------------------------------------------------\n  //                                     Events\n  // ------------------------------------------------------------------------------------------------\n\n  event Mint(address indexed to, uint256 amount);\n  event MintFinished();\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/distribution/MintableDistribution.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/distribution/MintableDistribution.sol",
    "exportedSymbols": {
      "MintableDistribution": [
        26063
      ]
    },
    "id": 26064,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 25958,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:91"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../../math/SafeMath.sol",
        "id": 25959,
        "nodeType": "ImportDirective",
        "scope": 26064,
        "sourceUnit": 17338,
        "src": "26:33:91",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/distribution/StandardDistribution.sol",
        "file": "./StandardDistribution.sol",
        "id": 25960,
        "nodeType": "ImportDirective",
        "scope": 26064,
        "sourceUnit": 26306,
        "src": "60:36:91",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 25961,
              "name": "StandardDistribution",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 26305,
              "src": "518:20:91",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_StandardDistribution_$26305",
                "typeString": "contract StandardDistribution"
              }
            },
            "id": 25962,
            "nodeType": "InheritanceSpecifier",
            "src": "518:20:91"
          }
        ],
        "contractDependencies": [
          26305
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 26063,
        "linearizedBaseContracts": [
          26063,
          26305
        ],
        "name": "MintableDistribution",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 25965,
            "libraryName": {
              "contractScope": null,
              "id": 25963,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 17337,
              "src": "548:8:91",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$17337",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "542:24:91",
            "typeName": {
              "id": 25964,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "561:4:91",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 25968,
            "name": "mintingFinished",
            "nodeType": "VariableDeclaration",
            "scope": 26063,
            "src": "570:35:91",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 25966,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "570:4:91",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "66616c7365",
              "id": 25967,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "bool",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "600:5:91",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              },
              "value": "false"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 25970,
            "name": "minter",
            "nodeType": "VariableDeclaration",
            "scope": 26063,
            "src": "609:21:91",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 25969,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "609:7:91",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 25985,
              "nodeType": "Block",
              "src": "729:109:91",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 25979,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 25977,
                      "name": "tokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26078,
                      "src": "737:8:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 25978,
                      "name": "_tokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25972,
                      "src": "748:9:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "737:20:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 25980,
                  "nodeType": "ExpressionStatement",
                  "src": "737:20:91"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 25983,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 25981,
                      "name": "minter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25970,
                      "src": "817:6:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 25982,
                      "name": "_minter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25974,
                      "src": "826:7:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "817:16:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 25984,
                  "nodeType": "ExpressionStatement",
                  "src": "817:16:91"
                }
              ]
            },
            "documentation": null,
            "id": 25986,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25975,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25972,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 25986,
                  "src": "685:16:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 25971,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "685:6:91",
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
                  "id": 25974,
                  "name": "_minter",
                  "nodeType": "VariableDeclaration",
                  "scope": 25986,
                  "src": "703:15:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 25973,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "703:7:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "684:35:91"
            },
            "payable": false,
            "returnParameters": {
              "id": 25976,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "729:0:91"
            },
            "scope": 26063,
            "src": "673:165:91",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 26022,
              "nodeType": "Block",
              "src": "1071:133:91",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 26002,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 25997,
                      "name": "supply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26072,
                      "src": "1077:6:91",
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
                          "id": 26000,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25990,
                          "src": "1097:7:91",
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
                          "id": 25998,
                          "name": "supply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26072,
                          "src": "1086:6:91",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 25999,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 17318,
                        "src": "1086:10:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 26001,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1086:19:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1077:28:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 26003,
                  "nodeType": "ExpressionStatement",
                  "src": "1077:28:91"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 26013,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 26004,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26076,
                        "src": "1111:8:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 26006,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 26005,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25988,
                        "src": "1120:3:91",
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
                      "src": "1111:13:91",
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
                          "id": 26011,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25990,
                          "src": "1145:7:91",
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
                            "id": 26007,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26076,
                            "src": "1127:8:91",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 26009,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 26008,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25988,
                            "src": "1136:3:91",
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
                          "src": "1127:13:91",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 26010,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 17318,
                        "src": "1127:17:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 26012,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1127:26:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1111:42:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 26014,
                  "nodeType": "ExpressionStatement",
                  "src": "1111:42:91"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 26016,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25988,
                        "src": "1169:3:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 26017,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25990,
                        "src": "1174:7:91",
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
                      "id": 26015,
                      "name": "Mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26060,
                      "src": "1164:4:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 26018,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1164:18:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 26019,
                  "nodeType": "EmitStatement",
                  "src": "1159:23:91"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 26020,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1195:4:91",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 25996,
                  "id": 26021,
                  "nodeType": "Return",
                  "src": "1188:11:91"
                }
              ]
            },
            "documentation": null,
            "id": 26023,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 25993,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 25992,
                  "name": "canMint",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 26054,
                  "src": "1046:7:91",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1046:7:91"
              }
            ],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25991,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25988,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 26023,
                  "src": "1005:11:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 25987,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1005:7:91",
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
                  "id": 25990,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 26023,
                  "src": "1018:15:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25989,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1018:7:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1004:30:91"
            },
            "payable": false,
            "returnParameters": {
              "id": 25996,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25995,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 26023,
                  "src": "1065:4:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 25994,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1065:4:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1064:6:91"
            },
            "scope": 26063,
            "src": "991:213:91",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 26039,
              "nodeType": "Block",
              "src": "1317:75:91",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 26032,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 26030,
                      "name": "mintingFinished",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25968,
                      "src": "1323:15:91",
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
                      "id": 26031,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1341:4:91",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1323:22:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 26033,
                  "nodeType": "ExpressionStatement",
                  "src": "1323:22:91"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 26034,
                      "name": "MintFinished",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26062,
                      "src": "1356:12:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 26035,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1356:14:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 26036,
                  "nodeType": "EmitStatement",
                  "src": "1351:19:91"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 26037,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1383:4:91",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 26029,
                  "id": 26038,
                  "nodeType": "Return",
                  "src": "1376:11:91"
                }
              ]
            },
            "documentation": null,
            "id": 26040,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 26026,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 26025,
                  "name": "canMint",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 26054,
                  "src": "1292:7:91",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1292:7:91"
              }
            ],
            "name": "finishMinting",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 26024,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1278:2:91"
            },
            "payable": false,
            "returnParameters": {
              "id": 26029,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26028,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 26040,
                  "src": "1311:4:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 26027,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1311:4:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1310:6:91"
            },
            "scope": 26063,
            "src": "1256:136:91",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 26053,
              "nodeType": "Block",
              "src": "1731:67:91",
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
                        "id": 26049,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 26044,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "1745:16:91",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 26043,
                            "name": "mintingFinished",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25968,
                            "src": "1746:15:91",
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
                          "id": 26048,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 26045,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28038,
                              "src": "1765:3:91",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 26046,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1765:10:91",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 26047,
                            "name": "minter",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25970,
                            "src": "1779:6:91",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1765:20:91",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "1745:40:91",
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
                      "id": 26042,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "1737:7:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 26050,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1737:49:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 26051,
                  "nodeType": "ExpressionStatement",
                  "src": "1737:49:91"
                },
                {
                  "id": 26052,
                  "nodeType": "PlaceholderStatement",
                  "src": "1792:1:91"
                }
              ]
            },
            "documentation": null,
            "id": 26054,
            "name": "canMint",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 26041,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1728:2:91"
            },
            "src": "1712:86:91",
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 26060,
            "name": "Mint",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 26059,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26056,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 26060,
                  "src": "2067:18:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 26055,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2067:7:91",
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
                  "id": 26058,
                  "indexed": false,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 26060,
                  "src": "2087:14:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26057,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2087:7:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2066:36:91"
            },
            "src": "2056:47:91"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 26062,
            "name": "MintFinished",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 26061,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2124:2:91"
            },
            "src": "2106:21:91"
          }
        ],
        "scope": 26064,
        "src": "485:1645:91"
      }
    ],
    "src": "0:2131:91"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/distribution/MintableDistribution.sol",
    "exportedSymbols": {
      "MintableDistribution": [
        26063
      ]
    },
    "id": 26064,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 25958,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:91"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../../math/SafeMath.sol",
        "id": 25959,
        "nodeType": "ImportDirective",
        "scope": 26064,
        "sourceUnit": 17338,
        "src": "26:33:91",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/distribution/StandardDistribution.sol",
        "file": "./StandardDistribution.sol",
        "id": 25960,
        "nodeType": "ImportDirective",
        "scope": 26064,
        "sourceUnit": 26306,
        "src": "60:36:91",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 25961,
              "name": "StandardDistribution",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 26305,
              "src": "518:20:91",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_StandardDistribution_$26305",
                "typeString": "contract StandardDistribution"
              }
            },
            "id": 25962,
            "nodeType": "InheritanceSpecifier",
            "src": "518:20:91"
          }
        ],
        "contractDependencies": [
          26305
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 26063,
        "linearizedBaseContracts": [
          26063,
          26305
        ],
        "name": "MintableDistribution",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 25965,
            "libraryName": {
              "contractScope": null,
              "id": 25963,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 17337,
              "src": "548:8:91",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$17337",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "542:24:91",
            "typeName": {
              "id": 25964,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "561:4:91",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 25968,
            "name": "mintingFinished",
            "nodeType": "VariableDeclaration",
            "scope": 26063,
            "src": "570:35:91",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 25966,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "570:4:91",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "66616c7365",
              "id": 25967,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "bool",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "600:5:91",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              },
              "value": "false"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 25970,
            "name": "minter",
            "nodeType": "VariableDeclaration",
            "scope": 26063,
            "src": "609:21:91",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 25969,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "609:7:91",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 25985,
              "nodeType": "Block",
              "src": "729:109:91",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 25979,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 25977,
                      "name": "tokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26078,
                      "src": "737:8:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 25978,
                      "name": "_tokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25972,
                      "src": "748:9:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "737:20:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 25980,
                  "nodeType": "ExpressionStatement",
                  "src": "737:20:91"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 25983,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 25981,
                      "name": "minter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25970,
                      "src": "817:6:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 25982,
                      "name": "_minter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25974,
                      "src": "826:7:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "817:16:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 25984,
                  "nodeType": "ExpressionStatement",
                  "src": "817:16:91"
                }
              ]
            },
            "documentation": null,
            "id": 25986,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25975,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25972,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 25986,
                  "src": "685:16:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 25971,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "685:6:91",
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
                  "id": 25974,
                  "name": "_minter",
                  "nodeType": "VariableDeclaration",
                  "scope": 25986,
                  "src": "703:15:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 25973,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "703:7:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "684:35:91"
            },
            "payable": false,
            "returnParameters": {
              "id": 25976,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "729:0:91"
            },
            "scope": 26063,
            "src": "673:165:91",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 26022,
              "nodeType": "Block",
              "src": "1071:133:91",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 26002,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 25997,
                      "name": "supply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26072,
                      "src": "1077:6:91",
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
                          "id": 26000,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25990,
                          "src": "1097:7:91",
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
                          "id": 25998,
                          "name": "supply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26072,
                          "src": "1086:6:91",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 25999,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 17318,
                        "src": "1086:10:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 26001,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1086:19:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1077:28:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 26003,
                  "nodeType": "ExpressionStatement",
                  "src": "1077:28:91"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 26013,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 26004,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26076,
                        "src": "1111:8:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 26006,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 26005,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25988,
                        "src": "1120:3:91",
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
                      "src": "1111:13:91",
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
                          "id": 26011,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25990,
                          "src": "1145:7:91",
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
                            "id": 26007,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26076,
                            "src": "1127:8:91",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 26009,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 26008,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25988,
                            "src": "1136:3:91",
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
                          "src": "1127:13:91",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 26010,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 17318,
                        "src": "1127:17:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 26012,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1127:26:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1111:42:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 26014,
                  "nodeType": "ExpressionStatement",
                  "src": "1111:42:91"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 26016,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25988,
                        "src": "1169:3:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 26017,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25990,
                        "src": "1174:7:91",
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
                      "id": 26015,
                      "name": "Mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26060,
                      "src": "1164:4:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 26018,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1164:18:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 26019,
                  "nodeType": "EmitStatement",
                  "src": "1159:23:91"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 26020,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1195:4:91",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 25996,
                  "id": 26021,
                  "nodeType": "Return",
                  "src": "1188:11:91"
                }
              ]
            },
            "documentation": null,
            "id": 26023,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 25993,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 25992,
                  "name": "canMint",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 26054,
                  "src": "1046:7:91",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1046:7:91"
              }
            ],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25991,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25988,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 26023,
                  "src": "1005:11:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 25987,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1005:7:91",
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
                  "id": 25990,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 26023,
                  "src": "1018:15:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25989,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1018:7:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1004:30:91"
            },
            "payable": false,
            "returnParameters": {
              "id": 25996,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25995,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 26023,
                  "src": "1065:4:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 25994,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1065:4:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1064:6:91"
            },
            "scope": 26063,
            "src": "991:213:91",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 26039,
              "nodeType": "Block",
              "src": "1317:75:91",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 26032,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 26030,
                      "name": "mintingFinished",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25968,
                      "src": "1323:15:91",
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
                      "id": 26031,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1341:4:91",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1323:22:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 26033,
                  "nodeType": "ExpressionStatement",
                  "src": "1323:22:91"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 26034,
                      "name": "MintFinished",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26062,
                      "src": "1356:12:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 26035,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1356:14:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 26036,
                  "nodeType": "EmitStatement",
                  "src": "1351:19:91"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 26037,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1383:4:91",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 26029,
                  "id": 26038,
                  "nodeType": "Return",
                  "src": "1376:11:91"
                }
              ]
            },
            "documentation": null,
            "id": 26040,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 26026,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 26025,
                  "name": "canMint",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 26054,
                  "src": "1292:7:91",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1292:7:91"
              }
            ],
            "name": "finishMinting",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 26024,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1278:2:91"
            },
            "payable": false,
            "returnParameters": {
              "id": 26029,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26028,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 26040,
                  "src": "1311:4:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 26027,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1311:4:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1310:6:91"
            },
            "scope": 26063,
            "src": "1256:136:91",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 26053,
              "nodeType": "Block",
              "src": "1731:67:91",
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
                        "id": 26049,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 26044,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "1745:16:91",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 26043,
                            "name": "mintingFinished",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25968,
                            "src": "1746:15:91",
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
                          "id": 26048,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 26045,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28038,
                              "src": "1765:3:91",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 26046,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1765:10:91",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 26047,
                            "name": "minter",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25970,
                            "src": "1779:6:91",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1765:20:91",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "1745:40:91",
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
                      "id": 26042,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "1737:7:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 26050,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1737:49:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 26051,
                  "nodeType": "ExpressionStatement",
                  "src": "1737:49:91"
                },
                {
                  "id": 26052,
                  "nodeType": "PlaceholderStatement",
                  "src": "1792:1:91"
                }
              ]
            },
            "documentation": null,
            "id": 26054,
            "name": "canMint",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 26041,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1728:2:91"
            },
            "src": "1712:86:91",
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 26060,
            "name": "Mint",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 26059,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26056,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 26060,
                  "src": "2067:18:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 26055,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2067:7:91",
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
                  "id": 26058,
                  "indexed": false,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 26060,
                  "src": "2087:14:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26057,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2087:7:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2066:36:91"
            },
            "src": "2056:47:91"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 26062,
            "name": "MintFinished",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 26061,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2124:2:91"
            },
            "src": "2106:21:91"
          }
        ],
        "scope": 26064,
        "src": "485:1645:91"
      }
    ],
    "src": "0:2131:91"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-12-06T01:19:16.924Z"
}