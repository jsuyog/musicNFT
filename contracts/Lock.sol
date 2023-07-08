// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Lock is ERC721{
    constructor() ERC721("Lock", "LOCK") {
        _mint(msg.sender, 1);      
    }

}