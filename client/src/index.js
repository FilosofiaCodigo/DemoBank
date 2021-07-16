var contract
var accounts
var web3

const deposit = async () => {
  var amount = document.getElementById('input_amount').value
  const result = await contract.methods.deposit()
  .send({ from: accounts[0], gas: 400000, value: convertCryptoToWei(amount) })
}

const getBalance = async () => {
  hello = await contract.methods.balances(accounts[0]).call()
  document.getElementById("p_balance").innerHTML = convertWeiToCrypto(hello)
}

const retrieveTokens = async () => {
  const result = await contract.methods.retrieveTokens()
  .send({ from: accounts[0], gas: 400000 })
}
