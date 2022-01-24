const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('GameNft');
    
    const gameContract = await gameContractFactory.deploy(                        
      ["MTG #0001", "MTG #0002", "MTG #0003", "MTG #0004", "MTG #005", "MTG #006","MTG #007","MTG #008","MTG #009","MTG #010"],       
      ["bafybeidbjx4wnnnmkxq7d2acob6uitdebsd325mzfinqbxmjq5wz7qwlhm", 
      "bafybeidekhcpq3hde2z3xvwskzxt6pcyvk3uhiumpdeafxewb7zheevaly",
      "bafybeiexbkcies63zow5lfdqw5dbygchqwmwvahjjpvbjxsqlggibhyzry",
      "bafybeihaebiuyqaiwq2qcndj7hoegpznfwhg7ebrqvy3nbnwfll5t4sd6u",
      "/bafybeiavuhkrejeybykexcbcon6yism62zxrr2gzq4kzr6bdcfm5hzzmki",
      "bafybeihcpuwk4px3ksdf6siat3xmdceqziujyumiwqobttbtvkenpdtfoa",
      "bafybeie27sitdwbojz762ygiuobfcpu3k66iq7k4goa6noiri6sotolmhm",
      "bafybeiferd653ghtsmdliuf4ofey2f5jwno2flfuxb52mxc3fvrubklt2a/",
      "bafybeicyogn4ft5hjvbpyxqrttug3ya7ui725jweu7nwp6stz5fnvwydae",
      "bafybeidbjx4wnnnmkxq7d2acob6uitdebsd325mzfinqbxmjq5wz7qwlhm",

      
      


      


    ],
      [100, 200, 300, 180, 80, 300, 200, 170, 150, 100 ],                    
      [100, 50, 25, 30, 150, 40, 100, 30, 50, 30],
      [0,0,0, 0,0,0,0,0,0,0],
      "Friedrick",
      "bafybeifdwxiqecqcvqyj3up7t7hpov7uxkjftxyu5ml2t2vembcqjk5s2y",
      10000,
      50
    );
  
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
    /*let txn;
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();
    console.log("Token URI:", txn)*/
  
  
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


/*const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('GameNft');
    const gameContract = await gameContractFactory.deploy(
      ["Troilo", "Aidan", "Knaw"],       // Names
      ["https://i.imgur.com/pKd5Sdk.png", // Images
      "https://i.imgur.com/xVu4vFL.png", 
      "https://i.imgur.com/WMB6g9u.png"],
      [100, 200, 300],                    // HP values
      [100, 50, 25],                      // Attack damage values
      [0,0,0],        //Exp
        "Trelos", // Boss name
        "https://i.imgur.com/AksR0tt.png", // Boss image
        10000, // Boss hp
        50 // Boss attack damage
      );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    let txn;
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    console.log("Done!");
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
  */