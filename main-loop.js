// select images
const container = function() {
    const box = ["Box", "Book", "Piggy"];
    let i = [];
    

// radio value make querySelectorAll
let total = getElementById('#total').innerHTML
function addRadioValue() {
    const addOps = document.getElementsById('.radios');
    const minusOps = document.getElementById('.calculations')
    for (i = 0; i < addOps.length; i++) {
        if(addOps[i] == true)
        document.getElementById("radios").innerHTML;
        total+= addOps[i].value;
    } else {
    if(minusOps[i] == true)
        document.getElementById("radios").innerHTML;
        total = total - minusOps[i].value;
    } 
    return input.total
}

// to-do ol
// bottom
const sendButton = document.querySelector('#sendButton');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');

sendButton.addEventListener('click', send);

function send() {
    let msg = messageIn.value;
    if (msg === '') {
        alert('enter your transaction')
    } 
    else {
        messageOut.innerHTML = msg;
        messageIn.value = '';
    }
}