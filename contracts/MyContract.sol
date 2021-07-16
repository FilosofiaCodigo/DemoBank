// SPDX-License-Identifier: MIT
pragma solidity 0.8.5;

contract MyContract {
  mapping (address=>bool) public has_voted;
  mapping (address=>string) public votes;
  mapping (string=>uint256) public vote_count;

  modifier hasNotVoted {
    require(!has_voted[msg.sender], "You already voted.");
    _;
  }

  function voteForFinanzas() public hasNotVoted
  {
    has_voted[msg.sender] = true;
    votes[msg.sender] = "Finanzas";
    vote_count["Finanzas"] += 1;
  }

  function voteForArte() public hasNotVoted
  {
    has_voted[msg.sender] = true;
    votes[msg.sender] = "Arte";
    vote_count["Arte"] += 1;
  }

  function voteForLegal() public hasNotVoted
  {
    has_voted[msg.sender] = true;
    votes[msg.sender] = "Legal";
    vote_count["Legal"] += 1;
  }

  function voteForLogistica() public hasNotVoted
  {
    has_voted[msg.sender] = true;
    votes[msg.sender] = "Logística";
    vote_count["Logística"] += 1;
  }
}