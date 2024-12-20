import { useState, useEffect } from 'react';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState({ name: '', price: '', quantity: '' });
    const [editProductId, setEditProductId] = useState(null);

    const apiUrl = 'http://localhost/api.php';

    // Fetch products from the API
    const fetchProducts = async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Add or update a product
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const method = editProductId ? 'PUT' : 'POST';
            const url = editProductId ? `${apiUrl}?id=${editProductId}` : apiUrl;

            const response = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const message = editProductId ? 'Product updated successfully!' : 'Product added successfully!';
                alert(message);
                setFormData({ name: '', price: '', quantity: '' });
                setEditProductId(null);
                fetchProducts();
            } else {
                alert('Failed to save product. Please try again.');
            }
        } catch (error) {
            console.error('Error saving product:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    // Edit a product
    const handleEdit = (product) => {
        setEditProductId(product.id);
        setFormData({ name: product.name, price: product.price, quantity: product.quantity });
    };

    // Delete a product
    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this product?')) {
            return;
        }

        try {
            const response = await fetch(`${apiUrl}?id=${id}`, { method: 'DELETE' });

            if (response.ok) {
                alert('Product deleted successfully.');
                fetchProducts();
            } else {
                alert('Failed to delete product. Please try again.');
            }
        } catch (error) {
            console.error('Error deleting product:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <>
        <span id='product'></span>
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Product Management</h1>

            {/* Product Form */}
            <form onSubmit={handleFormSubmit} className="bg-white p-6 rounded shadow-md mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Product Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={formData.price}
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <input
                        type="number"
                        name="quantity"
                        placeholder="Quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                    {editProductId ? 'Update Product' : 'Add Product'}
                </button>
            </form>

            {/* Product List */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded shadow-md">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">ID</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Name</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Price</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Quantity</th>
                            <th className="px-6 py-3 text-center text-sm font-medium text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id} className="border-t">
                                <td className="px-6 py-3 text-sm text-gray-700">{product.id}</td>
                                <td className="px-6 py-3 text-sm text-gray-700">{product.name}</td>
                                <td className="px-6 py-3 text-sm text-gray-700">${product.price}</td>
                                <td className="px-6 py-3 text-sm text-gray-700">{product.quantity}</td>
                                <td className="px-6 py-3 text-center text-sm">
                                    <button
                                        onClick={() => handleEdit(product)}
                                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-3 rounded mr-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(product.id)}
                                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
        
};

export default Product;
