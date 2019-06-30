calc = (percent) => {
    var userEntered = document.getElementById("userEntered").value
    userEntered = parseInt(userEntered)
    var tipAmount = userEntered * percent
    var totalAmount = userEntered + tipAmount
    tipAmount = tipAmount.toFixed(2)
    totalAmount = totalAmount.toFixed(2)
    

    document.getElementById("tipAmount").style.color='black'
    document.getElementById("totalAmount").style.color='black'
    document.getElementById("tipAmount").innerHTML ='$'+ tipAmount
    document.getElementById("totalAmount").innerHTML ='$'+ totalAmount
    console.log(userEntered)
    console.log(tipAmount)
}