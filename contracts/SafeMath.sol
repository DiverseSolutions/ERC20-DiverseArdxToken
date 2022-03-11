/**
 *Submitted for verification at Etherscan.io on 2019-08-28
*/

pragma solidity ^0.5.11;

// ----------------------------------------------------------------------------
// ArdCoin contract
//
// Symbol      : ARDX
// Name        : ArdCoin
// Total supply: 5,158,308,000.00
// Decimals    : 2
//
// Implementation of the basic ERC20 token.
// https://github.com/ethereum/EIPs/issues/20
// Based on code by BokkyPooBah: https://github.com/bokkypoobah/Tokens/blob/master/contracts/FixedSupplyToken.sol
// Copyright (c) 2017 BokkyPooBah / Bok Consulting Pty Ltd, The MIT License
// Copyright (c) 2016-2019 zOS Global Limited, The MIT License
// Copyright (c) 2019 DataScience Ltd, The MIT License
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// Safe math lib
// ----------------------------------------------------------------------------
library SafeMath {
    function add(uint a, uint b) internal pure returns (uint c) {
        c = a + b;
        require(c >= a);
    }
    function sub(uint a, uint b) internal pure returns (uint c) {
        require(b <= a);
        c = a - b;
    }
    function mul(uint a, uint b) internal pure returns (uint c) {
        c = a * b;
        require(a == 0 || c / a == b);
    }
    function div(uint a, uint b) internal pure returns (uint c) {
        require(b > 0);
        c = a / b;
    }
}
