import React, { useState } from "react";

function AddShopForm({ onAddShop }) {
  const [formData, setFormData]  = useState("")

  function handleInput(e) {
    setFormData(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log('submit')
    console.log(formData)

    fetch("http://127.0.0.1:5555/shops", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(newUser => {
      console.log(newUser);
      onAddShop(newUser);
    })

    setFormData("")

  }

  return (
    <form className="add_shop" onSubmit={handleSubmit}>
      <h3>Add a new shop</h3>
      <input type="text" value={formData} onChange={handleInput}/>
      <button type="submit">Add</button>
    </form>
  )
};

export default AddShopForm;