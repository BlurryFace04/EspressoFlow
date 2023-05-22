# EspressoFlow
EspressoFlow is a decentralized application (dApp) built on the Ethereum blockchain that allows customers to verify the authenticity of their coffee. By leveraging blockchain technology, Espresso Flow ensures transparency and trust in the coffee supply chain.

## Application Flow Diagram
![4,000](https://user-images.githubusercontent.com/64888928/231164712-7fc6e4ce-9d0e-44a4-9166-fb1d9020fc6a.png)

## Project Overview
This project focuses on the implementation and deployment of the Espresso Flow smart contract, which includes:

1. Smart contract development
2. Setting up a local blockchain environment
3. Deployment and testing on the local blockchain
4. Creating a web interface for user interaction

## Technologies
The following technologies are used in this project:

* Solidity: The smart contract programming language
* Truffle: A development environment, testing framework, and asset pipeline for Ethereum
* Ganache: A personal blockchain for Ethereum development
* MetaMask: A browser extension for managing Ethereum accounts
* Web3.js: A collection of libraries for interacting with Ethereum nodes using HTTP or IPC
* Flask: A web application framework for python

## Smart Contract

* registerCoffee(): Registers a new coffee batch.
* registerCafe(): Registers a new cafe.
* registerFarmer(): Registers a new farmer.
* registerShipper(): Registers a new shipper.
* harvestCoffee(): Records the harvest of a coffee batch.
* processCoffee(): Records the processing of a coffee batch.
* roastCoffee(): Records the roasting of a coffee batch.
* shipCoffee(): Records the shipping of a coffee batch.
* receiveCoffee(): Records the receiving of a coffee batch by the cafe.
* getCoffeeInfo(): Retrieves information about a specific coffee batch.
* getCafeInfo(): Retrieves information about a specific cafe.
* getFarmerInfo(): Retrieves information about a specific farmer.
* getShipperInfo(): Retrieves information about a specific shipper.

## Local Blockchain Environment

In this project, we will use Ganache to set up a local blockchain environment. Ganache provides a personal Ethereum blockchain that you can use to run tests, execute commands, and inspect state while controlling how the chain operates.

## Deployment and Testing

We will use the Truffle framework to compile, deploy, and test the EspressoFlow smart contract. Truffle provides a suite of tools to streamline the development process and make it easier to manage complex Ethereum projects.

## Web Interface

A simple web interface is also developed using Flask, which is a web application framework for python; and Web3.js which is a collection of libraries for interacting with Ethereum nodes in javascript. This web interface can interact with the EspressoFlow smart contract which allows the allow supply chain managers to register cafes, farmers, shippers, and coffee batches, as well as update the status of coffee batches in the supply chain. This web interface will also allow the customers to verify the authenticity of their coffee.

## Future Enhancements

Possible future enhancements EspressoFlow
1. Integration with real-world data sources, such as IoT devices or external APIs, to automate the recording of supply chain events.
2. Adding a marketplace feature to allow customers to purchase coffee directly from the dApp.
3. Expanding the platform to support other types of supply chains, such as tea or chocolate.
