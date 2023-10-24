let baseFee = 5
let Area = ["annanagar", "thamparam", "redhills", ]
let uberRates = [20, 31, 45]

let customerName = "suresh" 
let customerArea = "thamparam" 


console.log("Hello", customerName+ ", welcome to the Uber Program")


function getRate(customerArea) {
  
    function uberRate(customerArea, index) {

    
    let finalRate = (uberRates[index]) * baseFee
    return finalRate
  }

    console.log(customerArea, "rate is:", uberRate(customerArea, Area.indexOf(customerArea)))
}   

getRate(customerArea)
