import { useState } from "react";

export const Home = () => {
  // Stating default values of different fields.

  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [checkedUpper, setCheckedUpper] = useState(true);
  const [checkedLower, setCheckedLower] = useState(true);
  const [checkedNumber, setCheckedNumber] = useState(true);
  const [checkedSpecial, setCheckedSpecial] = useState(true);

  // Handling the changes in the input fields.
  const handleChangeOne = () => {
    setCheckedUpper(!checkedUpper);
    getChar(true);
  };

  const handleChangeTwo = () => {
    setCheckedLower(!checkedLower);
    getChar(true);
  };

  const handleChangeThree = () => {
    setCheckedNumber(!checkedNumber);
    getChar(true);
  };

  const handleChangeFour = () => {
    setCheckedSpecial(!checkedSpecial);
    getChar(true);
  };

  const handleChangeFive = (e) => {
    setLength(e.target.value);
  };

  // function to capture the types of characters required int he password.
  function getChar(isClearFunction = false) {
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    const numeric = "0123456789";
    const spechar = "!@#$%^&*/?><";
    let characters = "";

    if (isClearFunction) { characters = ""; };
    if (checkedUpper) characters += alpha.toUpperCase();
    if (checkedLower) characters += alpha;
    if (checkedNumber) characters += numeric;
    if (checkedSpecial) characters += spechar;

    return characters;
  }

  // function to generate random string.
  function makeid(length) {
    let result = "";
    const charactersLength = getChar().length;
    let counter = 0;
    while (counter < length) {
      result += getChar().charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    setPassword(result);
  }

  return (
    <div>
      <h4>
        Please select from the below options what characters do you want in
        your password:
      </h4>
      <div>
        <label>No. of characters in password: </label>
        <input
          type="number"
          id="length"
          placeholder="Enter number"
          value={length}
          onChange={(e) => handleChangeFive(e)}
        ></input>
        <br />
        <input type="checkbox" defaultChecked={checkedUpper} onChange={() => handleChangeOne()} />
        Upper Case
        <br />
        <input type="checkbox" defaultChecked={checkedLower} onChange={() => handleChangeTwo()} />
        Lower Case
        <br />
        <input type="checkbox" defaultChecked={checkedNumber} onChange={() => handleChangeThree()} />
        Numeric Values
        <br />
        <input type="checkbox" defaultChecked={checkedSpecial} onChange={() => handleChangeFour()} />
        Special Characters
        <br />
        <br />
        <button onClick={() => makeid(length)}>Generate Password</button>
        <br />
        <p className="password">{password}</p>
      </div>
    </div>
  );
};
