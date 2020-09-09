import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function IsPalindrome(palindrome) {
  console.log(palindrome.palindrome)
  var regEx = new RegExp(/\W+/gi);  //remove non alphabetic characters and blanks
  var palindromeForward = palindrome.palindrome.toLowerCase().replace(regEx, '');  // work with palindrome string 
  console.log("Forward: "+palindromeForward)

  var palindromeReverse = palindrome.palindrome.split('').reverse().join('');
      //reverse generated string


  console.log("Reverse: " +palindromeReverse)
  console.log(palindrome.palindrome === palindromeReverse)
  return JSON.stringify(palindrome.palindrome === palindromeReverse);

  } 

 

const App = () => {
  const palindrome = 'saippuakauppias';
    
  return(
    <div>
      <h1>Test Palindrome!</h1>
      <p>Your test {palindrome} is <IsPalindrome palindrome = {palindrome} /></p>
    </div>
  )
}
export default App;

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)