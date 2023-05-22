const contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "CafeRegistered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "CoffeeHarvested",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "CoffeeProcessed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "CoffeeReceived",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "CoffeeRegistered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "CoffeeRoasted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "CoffeeShipped",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "FarmerRegistered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "ShipperRegistered",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "cafes",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "cafeOwner",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "coffees",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_type",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "harvestTimestamp",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "location",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "farmer",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "shipper",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "cafe",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "isProcessed",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "isRoasted",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "isShipped",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "isReceived",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "farmers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "farmerAddress",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getCafeInfo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "cafeOwner",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getCoffeeInfo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_type",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "harvestDate",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "location",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "farmer",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "shipper",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "cafe",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "isProcessed",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "isRoasted",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "isShipped",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "isReceived",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getFarmerInfo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "farmerAddress",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getShipperInfo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "shipperAddress",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "harvestCoffee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nextCafeId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nextCoffeeId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nextFarmerId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nextShipperId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "processCoffee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "receiveCoffee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "cafeOwner",
				"type": "address"
			}
		],
		"name": "registerCafe",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_type",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "location",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "farmerId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "shipperId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "cafeId",
				"type": "uint256"
			}
		],
		"name": "registerCoffee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "farmerAddress",
				"type": "address"
			}
		],
		"name": "registerFarmer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "shipperAddress",
				"type": "address"
			}
		],
		"name": "registerShipper",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "roastCoffee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "shipCoffee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "shippers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "shipperAddress",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
const contractAddress = '0x74EB5Aa059c13F3b55965DA00EF8cAA7d72ecDa9';
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));

const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

async function registerCafe() {
    const name = document.getElementById('cafeName').value;
    const owner = document.getElementById('cafeOwner').value;
    const accounts = await web3.eth.getAccounts();
    await contractInstance.methods.registerCafe(name, owner).send({ from: accounts[0], gas: 3000000 });
}

async function registerFarmer() {
    const name = document.getElementById('farmerName').value;
    const address = document.getElementById('farmerAddress').value;
    const accounts = await web3.eth.getAccounts();
    await contractInstance.methods.registerFarmer(name, address).send({ from: accounts[0], gas: 3000000 });
}

async function registerShipper() {
    const name = document.getElementById('shipperName').value;
    const address = document.getElementById('shipperAddress').value;
    const accounts = await web3.eth.getAccounts();
    await contractInstance.methods.registerShipper(name, address).send({ from: accounts[0], gas: 3000000 });
}

async function registerCoffee() {
    const _type = document.getElementById('coffeeType').value;
    const location = document.getElementById('coffeeLocation').value;
    const farmerId = parseInt(document.getElementById('coffeeFarmerId').value);
    const shipperId = parseInt(document.getElementById('coffeeShipperId').value);
    const cafeId = parseInt(document.getElementById('coffeeCafeId').value);
    const accounts = await web3.eth.getAccounts();
    await contractInstance.methods.registerCoffee(_type, location, farmerId, shipperId, cafeId).send({ from: accounts[0], gas: 3000000 });
}

async function receiveCoffee() {
    const id = parseInt(document.getElementById('cafeCoffeeId').value);
    const accounts = await web3.eth.getAccounts();
    await contractInstance.methods.receiveCoffee(id).send({ from: accounts[0], gas: 300000 });
}

async function harvestCoffee() {
    const id = parseInt(document.getElementById('farmerCoffeeId').value);
    const accounts = await web3.eth.getAccounts();
    await contractInstance.methods.harvestCoffee(id).send({ from: accounts[0], gas: 300000 });
}

async function processCoffee() {
    const id = parseInt(document.getElementById('processCoffeeId').value);
    const accounts = await web3.eth.getAccounts();
    await contractInstance.methods.processCoffee(id).send({ from: accounts[0], gas: 300000 });
}

async function roastCoffee() {
    const id = parseInt(document.getElementById('roastCoffeeId').value);
    const accounts = await web3.eth.getAccounts();
    await contractInstance.methods.roastCoffee(id).send({ from: accounts[0], gas: 300000 });
}

async function shipCoffee() {
    const id = parseInt(document.getElementById('shipCoffeeId').value);
        const accounts = await web3.eth.getAccounts();
        await contractInstance.methods.shipCoffee(id).send({ from: accounts[0], gas: 300000 });
}
