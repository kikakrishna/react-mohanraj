// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { InputCheck } from './components/InputCheck';

function App() {

  // const [list, setlist] = useState([{ firstName: "", lastName: "" }]);


  // const handleInputChange = (e, i) => {
  //   console.log(e);
  //   console.log(i);

  // }

  // const handleAddClick = () => {
  //   console.log("add");
  //   setlist([...list, { firstName: '', lastName: '' }]);
  // };

  // const handleRemoveClick = (i) => {
  //   console.log(i);
  // }



  // handle input change
  // const handleInputChange = (e, index) => {
  //   console.log(e);
  //   console.log(index);
  //   const { name, value } = e.target;
  //   console.log(name);
  //   console.log(value);
  //   const listt = [...list];
  //   listt[index][name] = value;
  //   setlist(listt);
  // };

  // // handle click event of the Remove button
  // const handleRemoveClick = index => {
  //   console.log(index);
  //   const listt = [...list];
  //   listt.splice(index, 1);
  //   setlist(listt);
  // };

  // // handle click event of the Add button
  // const handleAddClick = () => {
  //   setlist([...list, { firstName: "", lastName: "" }]);
  // };


  const [getvaliue, setgetvaliue] = useState("");

  const handlegetvalue = (e) => {
    setgetvaliue(e);
    console.log(getvaliue);
  };

  return (
    <div>
      {/* {
        list.map((x, i) => {

          return (
            <div className="box">
              <input
                name="firstName"
                placeholder="Enter First Name"
                value={x.firstName}
                onChange={(e) => handleInputChange(e, i)}
              />
              <input
                className="ml10"
                name="lastName"
                placeholder="Enter Last Name"
                value={x.lastName}
                onChange={(e) => handleInputChange(e, i)}
              />
              <div className="btn-box">
                {list.length !== 1 && (
                  <button className="mr10" onClick={() => handleRemoveClick(i)}>
                    Remove
                  </button>
                )}
                {list.length - 1 === i && (
                  <button onClick={handleAddClick}>Add</button>
                )}
              </div>
            </div>
          );

        })
      } */}


      {/* <div>{JSON.stringify(list)}</div> */}


      <InputCheck value={handlegetvalue} />
    </div>
  )


}

export default App;
