/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/
billInput = document.getElementById('billTotalInput')
tipInput = document.getElementById('tipInput')
numberOfPeopleDiv = document.getElementById('numberOfPeople')
perPersonTotalDiv = document.getElementById('perPersonTotal')


// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div



// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText)


// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  let bill = Number(billInput.value)



  // get the tip from user & convert it into a percentage (divide by 100)
  const tipPercentage = Number(tipInput.value) / 100
  console.log(tipPercentage)

  // get the total tip amount

  const tipAmount = bill * tipPercentage
  console.log({ tipAmount })


  // calculate the total (tip amount + bill)
  let totalAmount = tipAmount + bill
  console.log({ totalAmount })


  // calculate the per person total (total divided by number of people)
  const perPersonTotal = totalAmount / numberOfPeople
  console.log({ perPersonTotal })


  // update the perPersonTotal on DOM & show it to user
  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(1)}`

}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  numberOfPeople+=1


  // update the DOM with the new number of people
  numberOfPeopleDiv.innerText = numberOfPeople 


  // calculate the bill based on the new number of people
  
  calculateBill()
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
   if (numberOfPeople <=1){
    return
     // What this basically does is that if the number of people is less than one, then it stops the function below from running because you cannot divide the bill to less than one person as it makes no sense and it feels illegal ;)
  }
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
 

  
  // decrement the amount of people
    numberOfPeople-=1
  
  // update the DOM with the new number of people
    numberOfPeopleDiv.innerText = numberOfPeople
  
  
  // calculate the bill based on the new number of people
    calculateBill()
  
}