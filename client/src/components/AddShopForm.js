import React, { useState } from "react";

function AddShopForm({ onAddShop }) {
  const [formData, setFormData]  = useState("")

  function handleInput(e) {
    setFormData(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://127.0.0.1:5555/shops", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(newShop => {
      onAddShop(newShop);
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