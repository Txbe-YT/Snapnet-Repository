import React, { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  // Add a new item
  const addItem = () => {
    if (newItem.trim() === "") return;
    setItems([...items, newItem]);
    setNewItem("");
  };

  // Remove an item by index
  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#f5f5f5"
    }}>
      <div style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        width: "350px"
      }}>
        <h1 style={{ textAlign: "center" }}>My List</h1>

        {/* Input Field */}
        <div style={{ display: "flex", marginBottom: "15px" }}>
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Enter a new item..."
            style={{
              flex: 1,
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "5px 0 0 5px"
            }}
          />
          <button
            onClick={addItem}
            style={{
              padding: "8px 12px",
              border: "none",
              backgroundColor: "#007bff",
              color: "white",
              borderRadius: "0 5px 5px 0",
              cursor: "pointer"
            }}
          >
            Add to List
          </button>
        </div>

        {/* Item List */}
        <ul style={{ listStyle: "none", padding: 0 }}>
          {items.map((item, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#f9f9f9",
                padding: "8px",
                marginBottom: "8px",
                borderRadius: "5px"
              }}
            >
              <span>{item}</span>
              <button
                onClick={() => removeItem(index)}
                style={{
                  background: "none",
                  border: "none",
                  color: "red",
                  cursor: "pointer"
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

