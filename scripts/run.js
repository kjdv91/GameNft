const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('GameNft');
    const gameContract = await gameContractFactory.deploy(
      ["MTG #0001", "MTG #0002", "MTG #0003", "MTG #0004", "MTG #005", "MTG #006","MTG #007","MTG #008","MTG #009","MTG #010"],       
      ["QmV6FoA1ok7c2VPEesbUhu73QdXNsdTHEQZuS9hrSuuDVP", 
      "QmYWFaEHHmdPbXCaEDAQN4pQPkeC8zrkubfeNj8aCvwZWV",
      "QmRhC5Gt5Ffjw1KbWoXsTAiWhQvHNiV76cFEK8kJVHZeS3",
      "QmdRYcfL5SrPVMxtgK5QxVNon8UMTAfPAhUD1Kwn1LTAF6",
      "QmPo6Px6Rrq3L4xysjD7RLp3EhuHSiD6XGhqNVpcC26kFb",
      "QmdamZ6fRPjGDifVvt9sWCWwVwgEvix3rRagN1kSiQbU3H",
      "QmYmesDkVCDNFZMDEL3EBeS6mgzC7tgcjW6ALJAUNHnsfp",
      "QmZQvjBZ36iURtjrNYXL5fVBMTTD8Hm2tskqSoUFQ131r7",
      "QmUHu4bb2LNeMy8BXodixHyDTS3wua2MGAFoozmTH15uaQ",
      "QmUtVDYJhLG27qq1aUL13A3wCZmG3csRHG4tBh3z71Bype",

      
      


      


    ],
      [100, 200, 300, 180, 80, 300, 200, 170, 150, 100 ],                    
      [100, 50, 25, 30, 150, 40, 100, 30, 50, 30],
      [0,0,0, 0,0,0,0,0,0,0],
      "Friedrick",
      "QmZMhxqygQfjQdnTSUcYBhn1Jcgfg7HDn84EYNe92JiFhw",
      10000,
      50               // Attack damage values
    );
    await gameContract.deployed();
    let txn;
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

   

    // Get the value of the NFT's URI.
    //let returnedTokenUri = await gameContract.tokenURI(1);
    //console.log("Token URI:", returnedTokenUri);
    };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();