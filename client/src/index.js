var contract
var accounts
var web3

const getHello = async () => {
  hello = await contract.methods.hello().call()
  document.getElementById("p_hello").innerHTML = hello
}

const setHello = async () => {
  var hello = document.getElementById('input_hello').value
  const result = await contract.methods.setHello(hello)
  .send({ from: accounts[0], gas: 400000 })
}