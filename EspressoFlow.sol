// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.1;

contract CoffeeSupplyChain {
    address public owner;

    // Coffee struct containing the coffee's information
    struct Coffee {
        uint256 id;
        string _type;
        uint256 harvestTimestamp;
        string location;
        address farmer;
        address shipper;
        address cafe;
        bool isProcessed;
        bool isRoasted;
        bool isShipped;
        bool isReceived;
    }

    // Cafe struct containing the cafe's information
    struct Cafe {
        uint256 id;
        string name;
        address cafeOwner;
    }

    // Farmer struct containing the farmer's information
    struct Farmer {
        uint256 id;
        string name;
        address farmerAddress;
    }

    // Shipper struct containing the shipper's information
    struct Shipper {
        uint256 id;
        string name;
        address shipperAddress;
    }

    // Mappings for registered coffees, cafes, farmers and shippers
    mapping(uint256 => Coffee) public coffees;
    mapping(uint256 => Cafe) public cafes;
    mapping(uint256 => Farmer) public farmers;
    mapping(uint256 => Shipper) public shippers;

    // Helper variables
    uint256 public nextCoffeeId;
    uint256 public nextCafeId;
    uint256 public nextFarmerId;
    uint256 public nextShipperId;

    // Events happening in the supply chain
    event CafeRegistered(uint256 id);
    event FarmerRegistered(uint256 id);
    event ShipperRegistered(uint256 id);
    event CoffeeRegistered(uint256 id);
    event CoffeeHarvested(uint256 id);
    event CoffeeProcessed(uint256 id);
    event CoffeeRoasted(uint256 id);
    event CoffeeShipped(uint256 id);
    event CoffeeReceived(uint256 id);

    // Modifier for the supply chain manager
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the supply chain manager can perform this action.");
        _;
    }

    // Modifier for the cafe owner
    modifier onlyCafeOwner(address cafeOwner) {
        require(msg.sender == cafeOwner, "Only the registered cafe owner can perform this action.");
        _;
    }

    // Modifier for the farmer
    modifier onlyFarmer(address farmer) {
        require(msg.sender == farmer, "Only the registered farmer can perform this action.");
        _;
    }

    // Modifier for the shipper
    modifier onlyShipper(address shipper) {
        require(msg.sender == shipper, "Only the registered shipper can perform this action.");
        _;
    }

    // Supply chain manager is whoever deploys the contract
    constructor() {
        owner = msg.sender;
    }

    // Function to register new coffee batch: supply chain manager
    function registerCoffee(
        string memory _type,
        string memory location,
        uint256 farmerId,
        uint256 shipperId,
        uint256 cafeId
    ) public onlyOwner {
        require(farmerId < nextFarmerId, "Invalid farmer ID.");
        require(shipperId < nextShipperId, "Invalid shipper ID.");
        require(cafeId < nextCafeId, "Invalid cafe ID.");
        uint256 id = nextCoffeeId++;
        coffees[id] = Coffee(id, _type, 0, location, farmers[farmerId].farmerAddress, shippers[shipperId].shipperAddress, cafes[cafeId].cafeOwner, false, false, false, false);
        emit CoffeeRegistered(id);
    }

    // Function to register cafe: supply chain manager
    function registerCafe(string memory name, address cafeOwner) public onlyOwner {
        require(cafeOwner != address(0), "Invalid address.");
        uint256 id = nextCafeId++;
        cafes[id] = Cafe(id, name, cafeOwner);
        emit CafeRegistered(id);
    }

    // Function to register farmer: supply chain manager
    function registerFarmer(string memory name, address farmerAddress) public onlyOwner {
        require(farmerAddress != address(0), "Invalid address.");
        uint256 id = nextFarmerId++;
        farmers[id] = Farmer(id, name, farmerAddress);
        emit FarmerRegistered(id);
    }

    // Function to register shipper: supply chain manager
    function registerShipper(string memory name, address shipperAddress) public onlyOwner {
        require(shipperAddress != address(0), "Invalid address.");
        uint256 id = nextShipperId++;
        shippers[id] = Shipper(id, name, shipperAddress);
        emit ShipperRegistered(id);
    }

    // Function to harvest coffee: farmer
    function harvestCoffee(uint256 id) public onlyFarmer(coffees[id].farmer) {
        Coffee storage coffee = coffees[id];
        coffee.harvestTimestamp = block.timestamp;
        emit CoffeeHarvested(id);
    }

    // Function to process coffee: farmer
    function processCoffee(uint256 id) public onlyFarmer(coffees[id].farmer) {
        Coffee storage coffee = coffees[id];
        coffee.isProcessed = true;
        emit CoffeeProcessed(id);
    }

    // Function to roast coffee: farmer
    function roastCoffee(uint256 id) public onlyFarmer(coffees[id].farmer) {
        Coffee storage coffee = coffees[id];
        coffee.isRoasted = true;
        emit CoffeeRoasted(id);
    }

    // Function to ship coffee: shipper
    function shipCoffee(uint256 id) public onlyShipper(coffees[id].shipper) {
        Coffee storage coffee = coffees[id];
        coffee.isShipped = true;
        emit CoffeeShipped(id);
    }

    // Function to indicate that coffee is received: cafe owner
    function receiveCoffee(uint256 id) public onlyCafeOwner(coffees[id].cafe) {
        Coffee storage coffee = coffees[id];
        coffee.isReceived = true;
        emit CoffeeReceived(id);
    }

    // Function to get coffee information: customer
    function getCoffeeInfo(uint256 id) public view returns (
        uint256 _id,
        string memory _type,
        uint256 harvestDate,
        string memory location,
        address farmer,
        address shipper,
        address cafe,
        bool isProcessed,
        bool isRoasted,
        bool isShipped,
        bool isReceived
    ) {
        Coffee storage coffee = coffees[id];
        return (
            coffee.id,
            coffee._type,
            coffee.harvestTimestamp,
            coffee.location,
            coffee.farmer,
            coffee.shipper,
            coffee.cafe,
            coffee.isProcessed,
            coffee.isRoasted,
            coffee.isShipped,
            coffee.isReceived
        );
    }

    // Function to get cafe information: supply chain manager
    function getCafeInfo(uint256 id) public view onlyOwner returns (
        uint256 _id,
        string memory name,
        address cafeOwner
    ) {
        Cafe storage cafe = cafes[id];
        return (
            cafe.id,
            cafe.name,
            cafe.cafeOwner
        );
    }

    // Function to get farmer information: supply chain manager
    function getFarmerInfo(uint256 id) public view onlyOwner returns (
        uint256 _id,
        string memory name,
        address farmerAddress
    ) {
        Farmer storage farmer = farmers[id];
        return (
            farmer.id,
            farmer.name,
            farmer.farmerAddress
        );
    }

    // Function to get shipper information: supply chain manager
    function getShipperInfo(uint256 id) public view onlyOwner returns (
        uint256 _id,
        string memory name,
        address shipperAddress
    ) {
        Shipper storage shipper = shippers[id];
        return (
            shipper.id,
            shipper.name,
            shipper.shipperAddress
        );
    }
}
