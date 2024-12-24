// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from 'axios';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState({ id: "", name: "", description: "", price: "", stock: "", image: "" });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        axios.get('http://localhost/cafecircle/api.php?type=products')
            .then(response => setProducts(response.data.products))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddProduct = () => {
        if (formData.name && formData.description && formData.price && formData.stock) {
            axios.post('http://localhost/cafecircle/api.php?type=products', formData)
                .then(response => {
                    setProducts([...products, response.data.product]);
                    setFormData({ id: "", name: "", description: "", price: "", stock: "", image: "" });
                })
                .catch(error => console.error('Error adding product:', error));
        }
    };

    const handleEditProduct = (product) => {
        setFormData(product);
        setIsEditing(true);
    };

    const handleUpdateProduct = () => {
        axios.put('http://localhost/cafecircle/api.php?type=products', formData)
            .then(response => {
                const updatedProducts = products.map((product) =>
                    product.id === formData.id
                        ? response.data.product
                        : product
                );
                setProducts(updatedProducts);
                setFormData({ id: "", name: "", description: "", price: "", stock: "", image: "" });
                setIsEditing(false);
            })
            .catch(error => console.error('Error updating product:', error));
    };

    const handleDeleteProduct = (id) => {
        axios.delete('http://localhost/cafecircle/api.php?type=products', { data: { id } })
            .then(() => {
                const filteredProducts = products.filter((product) => product.id !== id);
                setProducts(filteredProducts);
            })
            .catch(error => console.error('Error deleting product:', error));
    };

    return (
        <div className="flex flex-col sm:flex-row h-screen bg-lightwhite2">
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <main className="flex-1 p-4">
                <header className="flex justify-between items-center mb-4">
                    <h1 className="text-lg font-bold text-lightBrown">Product Management</h1>
                </header>

                {/* Product Form */}
                <section className="mb-4">
                    <h2 className="text-lightBrown font-bold mb-2">{isEditing ? "Edit Product" : "Add Product"}</h2>
                    <div className="bg-white p-4 rounded-3xl shadow-md border border-lightBrown2">
                        <form className="space-y-4">
                            <div className="flex space-x-4">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Product Name"
                                    className="px-2 py-2 w-1/2 rounded-3xl border border-lightBrown2 bg-lighterWhite text-lightBrown"
                                />
                                <input
                                    type="number"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleInputChange}
                                    placeholder="Price"
                                    className="px-2 py-2 w-1/4 rounded-3xl border border-lightBrown2 bg-lighterWhite text-lightBrown"
                                />
                                <input
                                    type="number"
                                    name="stock"
                                    value={formData.stock}
                                    onChange={handleInputChange}
                                    placeholder="Stock"
                                    className="px-2 py-2 w-1/4 rounded-3xl border border-lightBrown2 bg-lighterWhite text-lightBrown"
                                />
                            </div>
                            <div className="flex space-x-4">
                                <input
                                    type="text"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    placeholder="Description"
                                    className="px-2 py-2 w-full rounded-3xl border border-lightBrown2 bg-lighterWhite text-lightBrown"
                                />
                            </div>
                            <div className="flex space-x-4">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="px-2 py-2 w-full rounded-3xl border border-lightBrown2 bg-lighterWhite text-lightBrown"
                                />
                            </div>
                            <button
                                type="button"
                                onClick={isEditing ? handleUpdateProduct : handleAddProduct}
                                className="px-4 py-2 bg-lightBrown text-white rounded-3xl"
                            >
                                {isEditing ? "Update Product" : "Add Product"}
                            </button>
                        </form>
                    </div>
                </section>

                {/* Product Table */}
                <section>
                    <h2 className="text-lightBrown font-bold mb-4">Product List</h2>
                    <div className="bg-white p-4 rounded-3xl shadow-md border border-lightBrown2">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left text-lightBrown">
                                <thead>
                                    <tr>
                                        <th className="border-b border-lightBrown2 pb-2 px-4">ID</th>
                                        <th className="border-b border-lightBrown2 pb-2 px-4">Name</th>
                                        <th className="border-b border-lightBrown2 pb-2 px-4">Description</th>
                                        <th className="border-b border-lightBrown2 pb-2 px-4">Price</th>
                                        <th className="border-b border-lightBrown2 pb-2 px-4">Stock</th>
                                        <th className="border-b border-lightBrown2 pb-2 px-4">Image</th>
                                        <th className="border-b border-lightBrown2 pb-2 px-4">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product) => (
                                        <tr key={product.id} className="hover:bg-lightwhite2">
                                            <td className="py-2 px-4">{product.id}</td>
                                            <td className="py-2 px-4">{product.name}</td>
                                            <td className="py-2 px-4">{product.description}</td>
                                            <td className="py-2 px-4">${product.price}</td>
                                            <td className="py-2 px-4">{product.stock}</td>
                                            <td className="py-2 px-4">
                                                {product.image && <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-3xl" />}
                                            </td>
                                            <td className="py-2 px-4">
                                                <button
                                                    onClick={() => handleEditProduct(product)}
                                                    className="px-2 py-1 bg-gray-500 text-white rounded-3xl mr-2"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteProduct(product.id)}
                                                    className="px-2 py-1 bg-lightBrown text-white rounded-3xl"
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
                </section>
            </main>
        </div>
    );
};

export default Product;
