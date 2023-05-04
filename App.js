import React from 'react';
import { ReactDOM } from 'react';
import { useState } from 'react';
import './App.css';

/*
First component.
Creating the input for the user to enter their name
label is required when making an input, radio, or checkbox
Label is also used for screen readers.
Use type="checkbox or type="radio" for either option
Without a type, the input will default to text
names and id's are good to use to capture the information the user inputs as well as identifiying different inputs, buttons, etc
for istance,
{ myInput: "Taylor" }
*/ 
function Input({onChange}){
  return(
    <label>
        Whats your name: <input name="myInput" onChange={onChange} />
    </label>
  )
}


/*
The Button component isn't required to have something like a <label> tag
Still good to use for screen readers
names and id's are good to use to capture the information the user inputs as well as identifiying different inputs, buttons, etc
*/
function Button({ onClick }){
  return(
    <label>
      <button type="submit" onClick={onClick}>Submit</button>
    </label>
  )
}

export default function MyApp(){
  const [name, setName] = useState('')

  function handleChange(event) {
    setName(event.target.value);
  };

  function handleSubmit(){
    alert(`Hello, ${name}!`);
  };

  return(
    <div>
      <Input onChange={handleChange} />
      <Button onClick={handleSubmit} />
      {name && <p>Welcome: {name}</p>}
    </div>
  )
}
