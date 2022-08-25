import React, { useState } from "react";

import "./Home.css";

export const Home = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
  });

  const setData = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;

    setInputValue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const addInputData = async (e) => {
    e.preventDefault();
    const { name } = inputValue;
    const res = await fetch("http://localhost:5000/adduser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
      }),
    });

    const data = await res.json();

    if (res.status === 404 || !data) {
      window.alert("User Aleready Exits");
    } else {
      window.alert("User Added");
    }
  };

  return (
    <div>
      <form>
        <div className="mb-3 formControl">
          <label className="form-label">UserName</label>
          <input
            type="text"
            className="form-control"
            id="user"
            name="name"
            onChange={setData}
            value={inputValue.name}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={addInputData}
        >
          Add User
        </button>
      </form>
    </div>
  );
};
