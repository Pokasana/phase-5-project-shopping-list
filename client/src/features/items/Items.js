import React, { useState } from "react";
import AddItemForm from "./AddItemForm";
import SortedItems from "./SortedItems";

function Items({ refresh }) {
  const [onAddItem, setOnAddItem] = useState(false);
  const [filterBy, setFilterBy] = useState("shop");

  function resetOnAddItem() {
    setOnAddItem(false);
  }

  return (
    <div className="items">
      <h1>Shopping List</h1>

      <div className="sort_container">
        <h4>Sort by:</h4>

        <div className="custom-select" style={{ width: "200px" }}>
          <select
            name="filter"
            id="filter"
            onChange={(e) => setFilterBy(e.target.value)}
          >
            <option value="shop">Shops</option>
            <option value="user">Users</option>
          </select>
        </div>
      </div>

      <div className="item_list_container">
        <SortedItems filterBy={filterBy} />
      </div>

      <button
        id="add_item"
        onClick={() => setOnAddItem(!onAddItem)}
        style={{ display: onAddItem ? "none" : "" }}
      >
        Add Item
      </button>
      <AddItemForm
        refresh={refresh}
        onAddItem={onAddItem}
        resetOnAddItem={resetOnAddItem}
      />
    </div>
  );
}

export default Items;
