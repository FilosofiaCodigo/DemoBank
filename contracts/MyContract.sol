// SPDX-License-Identifier: MIT
pragma solidity 0.8.5;

contract MyContract {

  mapping (address=>uint) public balances;

  function deposit() public payable
  {
    balances[msg.sender] += msg.value;
  }

  function retrieveTokens() public
  {
    bool sent = payable(msg.sender).send(balances[msg.sender]);
    balances[msg.sender] = 0;
  }
}