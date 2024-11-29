import { useState, useEffect } from "react";

const Dashboard = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Mock initial data
    setItems([
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
    ]);
  }, []);

  const addItem = () => {
    if (name.trim()) {
      setItems([...items, { id: Date.now(), name }]);
      setName("");
    }
  };

  const updateItem = () => {
    if (selectedItem && name.trim()) {
      setItems(
        items.map((item) =>
          item.id === selectedItem.id ? { ...item, name } : item
        )
      );
      setSelectedItem(null);
      setName("");
    }
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const selectItem = (item) => {
    setSelectedItem(item);
    setName(item.name);
  };

  return (
    <>
    <span id='dashboard'></span>
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow rounded-md">
      <h1 className="text-2xl font-bold text-center mb-6">Admin Dashboard</h1>

      {/* Form Section */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Enter item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-md"
        />
        <button
          onClick={selectedItem ? updateItem : addItem}
          className={`p-2 rounded-md ${
            selectedItem ? "bg-blue-500 text-white" : "bg-green-500 text-white"
          }`}
        >
          {selectedItem ? "Update Item" : "Add Item"}
        </button>
      </div>

      {/* Table Section */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">#</th>
            <th className="border border-gray-300 p-2">Item Name</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id}>
              <td className="border border-gray-300 p-2 text-center">
                {index + 1}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {item.name}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                <button
                  onClick={() => selectItem(item)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded-md mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteItem(item.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded-md"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </>
  );
};

export default Dashboard;
