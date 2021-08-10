import React, {useState} from 'react'
import "./FizzBuzzInput.css"

export const FizzBuzzInput = () => {
    const [inputText, setInputText] = useState("")

    const handleChange = (e) => {
        console.log(e.target.value);
    }

    const activateLasers = () => {
        alert('A name was submitted: ' + this.state.value);
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        console.log(
         e);
      };

      /*   <div>
            <p>Hej {inputText}</p>
            <form className = "fzcontrol" onSumbit={activateLasers}>
                <input name="firstName"  className = "fzcontrol__input" onChange={handleChange} />
                <input type="submit" value="Submit"></input>
            </form>
        </div> 
      */
    return (
        <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userEmail">Email address</label>
          <input id="userEmail" name="email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
}
