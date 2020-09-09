import React, { useState } from 'react'
import ReactDOM from 'react-dom'




function IsPalindrome(palindrome) {
  console.log(palindrome.palindrome)
  console.log({palindrome});
  var regEx = new RegExp();  //remove non alphabetic characters and blanks ** add later
  var palindromeForward = palindrome.palindrome.toLowerCase().replace(regEx, '');  // work with palindrome string 
  console.log("Forward: "+palindromeForward)

  var palindromeReverse = palindrome.palindrome.split('').reverse().join('');
      //reverse generated string


  console.log("Reverse: " +palindromeReverse)
  console.log(palindrome.palindrome === palindromeReverse)
  return JSON.stringify(palindrome.palindrome === palindromeReverse);

  } 


const App = (props) => {
  const [palindrome, setPalindrome] = useState('');
  const handleSubmit = () => setPalindrome(IsPalindrome({palindrome}));
  
  return(
    <div>
      <form onSubmit= {handleSubmit} >
          <h1>Test Palindrome!</h1>
          <label>
            Palindrome to be examined:
            <input 
            name="palindrome" 
            value={palindrome} 
            onChange = {e => setPalindrome(e.target.value)}/>
          </label>
         {/* <button text="Submit" onChange={handleSubmit}>Submit</button> */}
      </form>
      <p>Your {palindrome} is <IsPalindrome palindrome = {palindrome} /></p>
    </div>
  )
}
export default App;

ReactDOM.render(
  <App />,
  document.getElementById('root')
)