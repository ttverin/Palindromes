import React, { useState } from 'react'
import ReactDOM from 'react-dom'




function IsPalindrome(palindrome) {
  console.log(palindrome.palindrome)
  var palindromeForward = palindrome.palindrome.toLowerCase();  // work with palindrome string 
  palindromeForward = palindromeForward.replace('/[^A-Za-z0-9]/g', ''); //remove non alphabetic characters and blanks ** add later
  console.log(palindrome.palindrome.toLowerCase().replace('/[^A-Za-z0-9]/g', ''));  
  console.log("Forward: "+palindromeForward)

  var palindromeReverse = palindromeForward.split('').reverse().join('');
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
      <p>Your test case {palindrome} is <IsPalindrome palindrome = {palindrome} /></p>
    </div>
  )
}
export default App;

ReactDOM.render(
  <App />,
  document.getElementById('root')
)