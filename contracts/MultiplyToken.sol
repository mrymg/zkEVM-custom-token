// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MultiplyToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("MyMultiplyToken", "MMT") {
        _mint(msg.sender, initialSupply);
    }

    function multiply(uint8 multiplier) public {
        require(multiplier >= 0 && multiplier <= 5, "Multiplier must be between 0 and 5");
        uint256 currentBalance = balanceOf(msg.sender);
        
        _mint(msg.sender, (currentBalance * multiplier));
    }
}