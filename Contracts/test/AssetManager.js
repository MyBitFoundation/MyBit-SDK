var BigNumber = require('bignumber.js');

/* Contracts  */
const Database = artifacts.require("./Database.sol");
const ContractManager = artifacts.require("./ContractManager.sol");
const HashFunctions = artifacts.require("./HashFunctions.sol");
const API = artifacts.require("./API.sol");
const InitialVariables = artifacts.require("./InitialVariables.sol");
const Owned = artifacts.require("./Owned.sol");
const AssetManager = artifacts.require('./AssetManager.sol');
const UserAccess = artifacts.require('./UserAccess.sol');
const MyBitToken = artifacts.require('./MyBitToken.sol');
const TokenBurn = artifacts.require('./TokenBurn.sol'); 
const AssetCreation = artifacts.require('./AssetCreation.sol');
const Asset = artifacts.require('./Asset.sol');
const FundingHub = artifacts.require('./FundingHub.sol');
const Staking = artifacts.require('./Staking.sol'); 


contract('Deploying and storing all contracts + validation', async (accounts) => {
  const ownerAddr1 = web3.eth.accounts[0];
  const ownerAddr2 = web3.eth.accounts[1];
  const ownerAddr3 = web3.eth.accounts[2];

  const assetCreator = web3.eth.accounts[3];
  const funder1 = web3.eth.accounts[4];
  const funder2 = web3.eth.accounts[5];

  // addresses for validation
  const funderNotApproved = web3.eth.accounts[6];
  const staker = web3.eth.accounts[7];
  const contractMimik = web3.eth.accounts[8];

  const myBitPayoutAddress = web3.eth.accounts[8];
  const assetEscrowPayoutAddress = web3.eth.accounts[6];

  let contractManagerInstance;
  let hfInstance;
  let api;
  let initialVariableInstance;
  let ownedInstance;
  let dbInstance;
  let assetManagerInstance;
  let stakingInstance;
  let userAccessInstance;
  let myBitTokenInstance;
  let assetCreationInstance;
  let assetInstance;
  let fundingHubInstance;


  var initialSupply;
  var transferAmount;
  var approvalAmount;

  let amountToBeRaised = 500; // USD
  let managerPercentage = 5;   // 5%
  let assetID;
  let installerID;
  let assetType;

  let amountEscrowedForAsset;
  let stakingAmount; 
  let stakingBlockCreation; 

  let LogEscrowRequester; 

  it("Owners should be assigned", async () => {
     dbInstance = await Database.new(ownerAddr1, ownerAddr2, ownerAddr3);
     hfInstance = await HashFunctions.new();
     api = await API.new(dbInstance.address);

     // Database Owners assigned properly
     assert.equal(await api.isOwner(ownerAddr1), true, 'Owner 1 assigned properly');
     assert.equal(await api.isOwner(ownerAddr2), true, 'Owner 2 assigned properly');
     assert.equal(await api.isOwner(ownerAddr3), true, 'Owner 3 assigned properly');
   });

   it('Assign ContractManager', async () => {
      contractManagerInstance = await ContractManager.new(dbInstance.address);

      await dbInstance.setContractManager(contractManagerInstance.address);
      assert.equal(await dbInstance.addressStorage(await hfInstance.stringString("contract", "ContractManager")),contractManagerInstance.address, 'Contract manager address equal');
      assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress("contract", contractManagerInstance.address)), true, 'Contract manager stored true');
   });


   it('Add InitialVariables contract to database via contract manager', async () => {
    initialVariableInstance = await InitialVariables.new(dbInstance.address);
    // Check that initialvariables database address is correct compared to real database address
    assert.equal(await initialVariableInstance.database(), await dbInstance.address, 'Initial Variables database Address assigned properly');

    // Add initialvariables contract to database and validate all fields are updated with correct outcome
    await contractManagerInstance.addContract('InitialVariables', initialVariableInstance.address, ownerAddr2);
    assert.equal(await dbInstance.boolStorage(await hfInstance.getAuthorizeHash(contractManagerInstance.address, ownerAddr2, 'addContract', await hfInstance.addressHash(initialVariableInstance.address))), false, 'Contract manager to database === false');
    assert.equal(await dbInstance.addressStorage(await hfInstance.stringString('contract', 'InitialVariables')), initialVariableInstance.address, 'Initial variables address correctly stored');
    assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('contract', initialVariableInstance.address)), true, 'Initial variables address == true');
   });

   it('Initialize InitialVariables  variables via startDapp', async () => {
     await initialVariableInstance.startDapp(myBitPayoutAddress, assetEscrowPayoutAddress);
     //--------------------Asset Creation Variables-----------------
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringHash('myBitFoundationPercentage')), 1, 'myBitFoundationPercentage == 1');
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringHash('installerPercentage')), 99, 'installerPercentage == 97');
   });

    it('Owned deployment ', async () => {
      ownedInstance = await Owned.new(dbInstance.address);

      // Ensure all variables are set in constructor and passed
      assert.equal(await ownedInstance.database(), await dbInstance.address, 'Owned database Address assigned properly');

      await contractManagerInstance.addContract('Owned', ownedInstance.address, ownerAddr2);
      assert.equal(await dbInstance.boolStorage(await hfInstance.getAuthorizeHash(contractManagerInstance.address, ownerAddr2, 'addContract', await hfInstance.addressHash(ownedInstance.address))), false, 'Contract manager(Owned) to database === false');
      assert.equal(await dbInstance.addressStorage(await hfInstance.stringString('contract', 'Owned')), ownedInstance.address, 'Owned address correctly stored');
      assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('contract', ownedInstance.address)), true, 'Owned address == true');
    });


   it('MyBitToken contract deployment ', async () => {
     initialSupply = 180000000000000000000000000;
     myBitTokenInstance = await MyBitToken.new(initialSupply, 'MyBit', 18, 'MYB');

     assert.equal(await myBitTokenInstance.balanceOf(web3.eth.accounts[0]), initialSupply, 'MyBitToken - Correct initial balance to owner');
     assert.equal(await myBitTokenInstance.totalSupply(), initialSupply, 'MyBitToken - Correct total supply');
     assert.equal(await myBitTokenInstance.name(), 'MyBit', 'MyBitToken - Correct token name');
     assert.equal(await myBitTokenInstance.symbol(), 'MYB', 'MyBitToken - Correct Token symbol');
     assert.equal(await myBitTokenInstance.decimals(), 18, 'MyBitToken - Correct decimals');
   });


   it('UserAccess deployment ', async () => {
     userAccessInstance = await UserAccess.new(dbInstance.address);
     assert.equal(await userAccessInstance.database(), await dbInstance.address, 'UserAccess database Address assigned properly');
     await contractManagerInstance.addContract('UserAccess', userAccessInstance.address, ownerAddr2);
     assert.equal(await dbInstance.boolStorage(await hfInstance.getAuthorizeHash(contractManagerInstance.address, ownerAddr2, 'addContract', await hfInstance.addressHash(userAccessInstance.address))), false, 'Contract manager(UserAccess) to database === false');
     assert.equal(await dbInstance.addressStorage(await hfInstance.stringString('contract', 'UserAccess')), userAccessInstance.address, 'UserAccess address correctly stored');
     assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('contract', userAccessInstance.address)), true, 'UserAccess address == true');
   });

   it('AssetCreation deployment', async () => {
     assetCreationInstance = await AssetCreation.new(dbInstance.address);
     await contractManagerInstance.addContract('AssetCreation', assetCreationInstance.address, ownerAddr2);
     // Funding Hub contract
     fundingHubInstance = await FundingHub.new(dbInstance.address);
     await contractManagerInstance.addContract('FundingHub', fundingHubInstance.address, ownerAddr2);
     // Asset Contract
     assetInstance = await Asset.new(dbInstance.address);
     await contractManagerInstance.addContract('Asset', assetInstance.address, ownerAddr2);

    await contractManagerInstance.addContract('testContract', contractMimik, ownerAddr2);
    assert.equal(await api.contractAddress('testContract'), contractMimik, 'testContract set');

   });

   it('assetManagerInstance contract deployment ', async () => {
     assetManagerInstance = await AssetManager.new(dbInstance.address, myBitTokenInstance.address);
     await contractManagerInstance.addContract('AssetManager', assetManagerInstance.address, ownerAddr2);
     assert.equal(await dbInstance.boolStorage(await hfInstance.getAuthorizeHash(contractManagerInstance.address, ownerAddr2, 'addContract', await hfInstance.addressHash(assetManagerInstance.address))), false, 'Contract manager(AssetManager) to database === false');
     assert.equal(await dbInstance.addressStorage(await hfInstance.stringString('contract', 'AssetManager')), assetManagerInstance.address, 'AssetManager address correctly stored');
     assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('contract', assetManagerInstance.address)), true, 'AssetManager address == true');
   });

   it('Staking deployment', async () => { 
   	 stakingInstance = await Staking.new(dbInstance.address, myBitTokenInstance.address); 
   	 await contractManagerInstance.addContract('Staking', stakingInstance.address, ownerAddr2); 
   	 assert.equal(await api.contractExists(stakingInstance.address), true);
   	 assert.equal(await api.contractAddress("Staking"), stakingInstance.address);   
   })

   it('Manually Approve user', async () => {
     await userAccessInstance.approveUser(staker, 2);
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', staker)), 2, 'Access 2 granted');

     await userAccessInstance.approveUser(assetCreator, 2);
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', assetCreator)), 2, 'Access 2 granted');

     await userAccessInstance.approveUser(funder1, 2);
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', funder1)), 2, 'Access 2 granted');

     await userAccessInstance.approveUser(funder2, 2);
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', funder2)), 2, 'Access 2 granted');
   });

   it('Transfer tokens to user', async () => {
     let balanceOfOwnerBefore = await myBitTokenInstance.balanceOf(ownerAddr1);
     let balanceOfAccess1Before = await myBitTokenInstance.balanceOf(assetCreator);
     assert.equal(balanceOfOwnerBefore, initialSupply, 'Owner has full initial supply');
     assert.equal(balanceOfAccess1Before, 0, 'assetCreator has 0 initial supply');

     transferAmount = 100000 * 10**18;  // Transfer 100,000 tokens
     await myBitTokenInstance.transfer(assetCreator, transferAmount,{from:ownerAddr1}); //transfer tokens for escrow

     let balanceOfOwnerAfterTransfer = await myBitTokenInstance.balanceOf(ownerAddr1);
     let balanceOfAccess1AfterTransfer = await myBitTokenInstance.balanceOf(assetCreator);
     assert.equal(BigNumber(balanceOfOwnerAfterTransfer).eq(BigNumber(initialSupply).minus(transferAmount)),true, 'Owner has been deducted transfer amount');
     assert.equal(balanceOfAccess1AfterTransfer, transferAmount, 'assetCreator has transfer tokens amount');
   });

   it('Approve escrow to transfer', async () => {
     approvalAmount = transferAmount / 2;
     await myBitTokenInstance.approve(assetManagerInstance.address, approvalAmount,{from:assetCreator});
     let allowance = await myBitTokenInstance.allowance(assetCreator, assetManagerInstance.address);
     assert.equal(allowance, approvalAmount, 'Approval granted');
   });

   it('Deposit Escrow', async () => {
     // Modifier Check
     let funderNotApprovedModifier = null;
     try {await assetManagerInstance.depositEscrow(500,{from:funderNotApproved});}
     catch (error) {funderNotApprovedModifier = error}
     assert.notEqual(funderNotApprovedModifier, null, 'modifier funderNotApproved');
     // Require check
     let depositEscrowRequire = null;
     try {await assetManagerInstance.depositEscrow(BigNumber(approvalAmount).plus(1),{from:assetCreator});}
     catch (error) {depositEscrowRequire = error}

     assert.notEqual(depositEscrowRequire,null, 'deposit require too many tokens');
     await assetManagerInstance.depositEscrow(approvalAmount,{from:assetCreator});
     let managerAmountDeposited = await api.depositedMYB(assetCreator);
     assert.equal(managerAmountDeposited, approvalAmount, 'Account escrow value updated');
   });

   /*
      Setting this manually as oraclizehub has been tested and is fully functional,
      if we were not to set it manually the test would rely on events and results
      in unecessary work.  In this test we are testing the asset manager  functionality,
      not that of OraclizeHub which can be seen in; TestOraclize.js .
   */
   it('Add dummy account as a contract', async () => {
     await contractManagerInstance.addContract('TestContractMimic', ownerAddr1, ownerAddr2);
     assert.equal(await dbInstance.addressStorage(await hfInstance.stringString('contract', 'TestContractMimic')), ownerAddr1, 'TestContractMimic correctly stored');
     assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('contract', ownerAddr1)), true, 'ownerAddr1 address == true');
   });

   it('Set ETH and MYB prices in USD', async () => {
     let ethPrice = 470; 
     let mybPrice = 98;   // floating point 10^3
     await initialVariableInstance.setDailyPrices(ethPrice, mybPrice); 
     // Check values set properly 
     assert.equal(await api.ethUSDPrice(), ethPrice);
     assert.equal(await api.mybUSDPrice(), mybPrice); 

     let priceExpiration = await api.priceTimeToExpiration();
     assert.notEqual(priceExpiration, 0); 
   });


   it('Create asset', async () => {
     assetType = await hfInstance.stringHash('BitcoinATM');
     installerID =  await hfInstance.stringHash('installerID');
     let amountEscrowDeposited = await api.depositedMYB(assetCreator);
     let mybUSDPrice = await api.mybUSDPrice();
     assert.notEqual(approvalAmount, 0);
     assert.notEqual(managerPercentage); 
     assert.equal(amountEscrowDeposited, approvalAmount); 
     await assetCreationInstance.newAsset(amountToBeRaised, managerPercentage, approvalAmount, installerID, assetType, 23, {from:assetCreator});
     amountEscrowedForAsset = approvalAmount;
     LogAssetFundingStarted = await assetCreationInstance.LogAssetFundingStarted({},{fromBlock:0, toBlock:'latest'});
   });

    it ("listen for assetID", function (done) {
      // Create coffee machine asset
      LogAssetFundingStarted.watch(
        async function(e,r){
          if(e){ done(e); }
          else {
            console.log('LogAssetFundingStarted event triggered');
            assetID = r.args._assetID;
            LogAssetFundingStarted.stopWatching();
            done(e);
          }
      });
    });


    it("check new asset information was set properly", async () => { 
     let myBPrice = await api.mybUSDPrice(); 
     let addressAssigned = await api.assetManager(assetID);
     let escrowedForAsset = await api.escrowedForAsset(assetID);

     assert.equal(approvalAmount, escrowedForAsset, 'escrow deposited');
     assert.equal(addressAssigned, assetCreator, 'asset creator assigned to asset manager');
     assert.equal(await api.assetStaker(assetID), await hfInstance.nullAddress()); 

     assert.equal(await api.amountToBeRaised(assetID), amountToBeRaised,'amountToBeRaised asset set');
     assert.equal(await api.managerPercentage(assetID), managerPercentage, 'managerPercentage asset set');
     assert.equal(await api.fundingStage(assetID), 1, 'fundingStage asset set');

   });


   it('Fund asset', async () => {
     let amountToBeRaised = await dbInstance.uintStorage(await hfInstance.stringBytes("amountToBeRaised", assetID));
     let ethUSDPrice = await dbInstance.uintStorage(await hfInstance.stringHash('ethUSDPrice'));

     let halfOfUSDValueInEth = ((amountToBeRaised / ethUSDPrice) / 2);

     await fundingHubInstance.fund(assetID, {from:funder1, value:web3.toWei(halfOfUSDValueInEth,'ether')});
     await fundingHubInstance.fund(assetID, {from:funder2, value:web3.toWei(halfOfUSDValueInEth,'ether')});
    });

    it('Asset transition to stage 4', async () => {
     assert.equal(parseInt(await dbInstance.uintStorage(await hfInstance.stringBytes('fundingStage', assetID))), 3, 'Funding stage == 3');
     await fundingHubInstance.payout(assetID);
     assert.equal(parseInt(await dbInstance.uintStorage(await hfInstance.stringBytes('fundingStage', assetID))), 4, 'Stage set to 4, ready for payments');
    });

   it('Asset recieves funding', async () => {
     let etherAmountToFund = 1;
     await assetInstance.receiveIncome(assetID, '', {value:web3.toWei(etherAmountToFund,'ether')});
   });


  it('attempt to withdrawToken while asset is live ', async () => {
    let unlockedBalance = await api.depositedMYB(assetCreator);
    assert.equal(unlockedBalance, 0); 
    let escrowedBalance = await api.escrowedMYB(assetCreator); 
    assert.equal(escrowedBalance, approvalAmount); 

    // Try to withdraw from non approved user 
    let funderNotApprovedModifier = null;
    try {await assetManagerInstance.withdrawToken(500,{from:funderNotApproved});}
    catch (error) {funderNotApprovedModifier = error}
    assert.notEqual(funderNotApprovedModifier, null, 'modifier funderNotApproved');

    let contractBalance = await myBitTokenInstance.balanceOf(assetManagerInstance.address);

    // Try to withdraw too many tokens. Expect EVM error. 
    let unlockedBalanceTooMuch = null;
    try {await assetManagerInstance.withdrawToken(BigNumber(escrowedBalance),{from:assetCreator});}
    catch (error) {unlockedBalanceTooMuch = error}
    assert.notEqual(unlockedBalanceTooMuch, null, 'amount too high for unlocked balance');    


    let withdrawTooEarly; 
    try { await assetManagerInstance.withdrawToken(escrowedBalance,{from:assetCreator}); } 
    catch (error) { withdrawTooEarly = error; }
    assert.notEqual(withdrawTooEarly, null); 
    let tokenBalanceManager = await myBitTokenInstance.balanceOf(assetCreator);
    let escrowBalance = await myBitTokenInstance.balanceOf(assetManagerInstance.address);

   });

  it ('Kill asset', async () => { 
    await ownedInstance.setFunctionAuthorized(assetCreationInstance.address, "removeAsset", assetID); 
    await assetCreationInstance.removeAsset(assetID, ownerAddr1, {from: ownerAddr2}); 
    assert.equal(await api.fundingStage(assetID), 5); 

  }); 

   // AssetManager can now withdraw tokens
   it('Unlock escrow', async () => {
     await assetManagerInstance.unlockEscrow(assetID,{from:assetCreator});
     let managerAmountEscrowed = await api.escrowedMYB(assetCreator); 
     let managerAmountDeposited = await api.depositedMYB(assetCreator);

     assert.equal(managerAmountEscrowed, 0, 'unlocked funds');
     assert.equal(managerAmountDeposited, amountEscrowedForAsset, 'funds back in deposit - can withdraw');
     assert.equal(await api.escrowedForAsset(assetID), 0); 
   });

   it('Withdraw Deposited MYB', async () => { 
    // Try to withdraw too many tokens. Expect EVM error. 
    let unlockedBalanceTooMuch = null;
    try {await assetManagerInstance.withdrawToken(BigNumber(amountEscrowedForAsset).plus(1),{from:assetCreator});}
    catch (error) {unlockedBalanceTooMuch = error}
    assert.notEqual(unlockedBalanceTooMuch, null, 'amount too high for unlocked balance');  

    // Withdraw all deposited tokens
    let assetManagerBalanceMYB = await myBitTokenInstance.balanceOf(assetManagerInstance.address); 
    let mybBalanceBefore = await myBitTokenInstance.balanceOf(assetCreator); 
    await assetManagerInstance.withdraw(amountEscrowedForAsset, {from: assetCreator});

    console.log(await myBitTokenInstance.balanceOf(assetCreator)); 
    console.log(amountEscrowedForAsset);
    console.log(mybBalanceBefore); 
    assert.equal(BigNumber(await myBitTokenInstance.balanceOf(assetCreator)).eq(BigNumber(mybBalanceBefore).plus(amountEscrowedForAsset)), true); 

    // Try to withdraw a second time 
    let withdrawlAgain = null;
    try {await assetManagerInstance.withdrawToken(BigNumber(amountEscrowedForAsset),{from:assetCreator});}
    catch (error) {withdrawlAgain = error}
    assert.notEqual(withdrawlAgain, null, 'amount too high for unlocked balance');  

   }); 

   it('Request escrow staking', async () => {
     assetType = await hfInstance.stringHash('BitcoinATM');
     installerID =  await hfInstance.stringHash('SomeInstaller');
     managerPercentage = 7; 
     stakingAmount = 10000 * 10**18;   // 10,000 MYB 
     incomeShare = 50; 
     amountToBeRaised = 20000; 
     await stakingInstance.requestEscrowLending(stakingAmount, incomeShare, managerPercentage, amountToBeRaised, installerID, assetType, {from:assetCreator});
     amountEscrowedForAsset = amountToBeRaised;
     LogEscrowRequester = await stakingInstance.LogEscrowRequester({},{fromBlock:0, toBlock:'latest'});
   });

    it ("listen for creation block", function (done) {
      // Create coffee machine asset
      LogEscrowRequester.watch(
        async function(e,r){
          if(e){ done(e); }
          else {
            console.log('LogAssetFundingStarted event triggered');
            stakingBlockCreation = r.args._blockAtCreation;
            assetID = r.args._escrowID;          // assetID == escrowID
            LogAssetFundingStarted.stopWatching();
            done(e);
          }
      });
    });

    it ("Give staker tokens and deposit into assetManagerInstance", async () => { 
    	await myBitTokenInstance.transfer(staker, stakingAmount); 
    	assert.equal(await myBitTokenInstance.balanceOf(staker), stakingAmount); 
    	await myBitTokenInstance.approveAndCall(assetManagerInstance.address, stakingAmount, await hfInstance.nullBytes(), {from: staker}); 

    	assert.equal(await api.depositedMYB(staker), stakingAmount); 
    	assert.equal(await myBitTokenInstance.balanceOf(assetManagerInstance.address), stakingAmount); 

    });

    it ("Accept escrow lending conditions", async () => { 
    	assert.notEqual(await api.escrowExpiration(assetID), 0); 
    	assert.equal(await api.userAccess(staker), 2); 
    	await stakingInstance.approveEscrowLending(assetCreator, stakingAmount, incomeShare, managerPercentage, amountToBeRaised, installerID, assetType, stakingBlockCreation, {from: staker}); 

    	assert.equal(await api.assetStaker(assetID), staker); 
      assert.equal(await api.stakerIncomeShare(assetID), incomeShare); 
    	
    }); 


    it('Fallback function', async () => {
      let err = null
      try {
        await assetManagerInstance.sendTransaction({from:web3.eth.coinbase,value:web3.toWei(0.1,'ether')});
      } catch (error) {
        err = error
      }
      assert.ok(err instanceof Error)
    });

});