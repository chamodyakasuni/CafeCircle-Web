// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonIcon from '@mui/icons-material/Person';
import NavigationBar from "../NavigationBar/NavigationBar";
import Swal from 'sweetalert2';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [newProduct, setNewProduct] = useState({ name: "", description: "", price: "", category: "", stock: "", image: "" });
    const [imagePreview, setImagePreview] = useState(null);
    const [errors, setErrors] = useState({});
    const [originalProduct, setOriginalProduct] = useState(null);
    const [setErrorMessage] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    

    // Fetch products from the API on component mount
    useEffect(() => {
        axios
            .get("http://localhost/cafecircle/api.php?type=products")
            .then(response => setProducts(response.data.products))
            .catch(error => console.error("Error fetching products:", error));
    }, []);

    const validate = () => {
        const newErrors = {};
        if (!newProduct.name) newErrors.name = "Product name is required.";
        if (!newProduct.description) newErrors.description = "Description is required.";
        if (!newProduct.price) newErrors.price = "Valid price is required.";
        if (!newProduct.category) newErrors.category = "Category is required.";
        if (!newProduct.stock) newErrors.stock = "Valid stock quantity is required.";
        if (!newProduct.image) newErrors.image = "Image is required.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleAddProduct = () => {
        if (!validate()) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Please fill in all required fields.",
                confirmButtonColor: "#8b4513",
            });
            return;
        }

        const formData = new FormData();
        Object.keys(newProduct).forEach(key => {
            formData.append(key, newProduct[key]);
        });

        if (editIndex !== null) {
            formData.append( products[editIndex].product_id);
            axios.put("http://localhost/cafecircle/api.php?type=products", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(response => {
                    console.log('Product updated:', response.data);
                    const updatedProducts = [...products];
                    updatedProducts[editIndex] = response.data.product;
                    setProducts(updatedProducts);
                    setEditIndex(null);
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: "Product updated successfully!",
                        width: '250px',
                        customClass: {
                            title: 'text-sm',
                            popup: 'text-sm',
                        },
                        confirmButtonColor: "#8b4513",
                    });
                })
                .catch(error => console.error("Error updating product:", error));
        } else {
            axios.post("http://localhost/cafecircle/api.php?type=products", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(response => {
                    console.log('Product added:', response.data);
                    setProducts([...products, response.data.product]);
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: "Product added successfully!",
                        width: '250px',
                        customClass: {
                            title: 'text-sm',
                            popup: 'text-sm',
                        },
                        confirmButtonColor: "#8b4513",
                    });
                })
                .catch(error => console.error("Error adding product:", error));
        }

        setIsPopupOpen(false);
        setNewProduct({name: "",description: "",price: "",category: "",stock: "",image: ""});
        setErrorMessage("");
        setErrors({});
    };

    // Open modal for editing
    const handleEditProduct = (index) => {
        const productToEdit = products[index];
        setNewProduct({ ...productToEdit, image: "" });
        setOriginalProduct({ ...productToEdit });
        setImagePreview(productToEdit.image);
        setEditIndex(index);
        setIsPopupOpen(true);
    };

    // Delete a product
    const handleDeleteProduct = (index) => {
        axios.delete("http://localhost/cafecircle/api.php?type=products", { data: { id: products[index].product_id} })
            .then(() => {
                const updatedProducts = products.filter((_, i) => i !== index);
                setProducts(updatedProducts);
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Product deleted successfully!",
                    width: '250px',
                    customClass: {
                        title: 'text-sm',
                        popup: 'text-sm',
                    },
                    confirmButtonColor: "#8b4513",
                });
            })
            .catch(error => console.error("Error deleting product:", error));
    };

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setEditIndex(null);
        setOriginalProduct(null);
        setErrors({});
    };


    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const isSaveChangesDisabled = () => {
        return JSON.stringify(newProduct) === JSON.stringify(originalProduct);
    };

    // Handle image upload
    const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
        // Check if the file is a valid image type
        const validTypes = ["image/png", "image/jpeg"];
        if (!validTypes.includes(file.type)) {
            alert("Invalid file type. Please upload a PNG or JPEG image.");
            return;
        }

        // Use FileReader to generate a preview
        const reader = new FileReader();
        reader.onload = () => {
            setImagePreview(reader.result); // Update the preview
            setNewProduct({ ...newProduct, image: reader.result }); // Set the image in newProduct
        };
        reader.onerror = () => {
            alert("Error reading file.");
        };
        reader.readAsDataURL(file); // Convert image to base64
    }
};

   
     return (
        <div className="w-full flex">
            <NavigationBar />
            <div className="grow flex flex-col sm:flex-row h-screen bg-lightwhite2">
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <main className="flex-1 p-2">
                    {/* Header */}
                    <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-2">
                        <div className="mb-1 lg:mb-0">
                            <h1 className="text-lg font-bold text-lightBrown">Product Management</h1>
                            <p className="text-s text-lightBrown3">Manage our coffee shop products</p>
                        </div>
                        <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-1 lg:space-y-0 lg:space-x-1 ml-auto">
                            <input
                                type="text"
                                placeholder="Search products"
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className="px-2 py-2 rounded-3xl border border-lightBrown2 bg-lighterWhite text-lightBrown text-s items-baseline text-right"
                            />
                            <div className="flex items-center ml-auto">
                                <PersonIcon className="text-lightBrown mr-1 text-s" />
                                <span className="text-s text-lightBrown">Admin</span>
                            </div>
                        </div>
                    </header>

                    {/* Add Product Button */}
                    <button
                        onClick={openPopup}
                        className="bg-lightBrown text-white px-4 py-2 rounded-3xl shadow mb-4"
                    >
                        Add Product
                    </button>

                    {/* Products Table */}
                    <section className="bg-white p-4 rounded-3xl shadow-md border border-lightBrown2">
                        <h2 className="text-lightBrown font-bold mb-4">Product List</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left text-lightBrown">
                                <thead>
                                    <tr>
                                        <th className="border-b border-lightBrown2 pb-2 px-4">Name</th>
                                        <th className="border-b border-lightBrown2 pb-2 px-4">Description</th>
                                        <th className="border-b border-lightBrown2 pb-2 px-4">Price</th>
                                        <th className="border-b border-lightBrown2 pb-2 px-4">Category</th>
                                        <th className="border-b border-lightBrown2 pb-2 px-4">Stock</th>
                                        <th className="border-b border-lightBrown2 pb-2 px-4">Image</th>
                                        <th className="border-b border-lightBrown2 pb-2 px-4">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                     {filteredProducts.map((product, index) => (
                                        <tr key={index} className="hover:bg-lightwhite2">
                                            <td className="py-2 px-4">{product.name}</td>
                                            <td className="py-2 px-4">{product.description}</td>
                                            <td className="py-2 px-4">{product.price}</td>
                                            <td className="py-2 px-4">{product.category}</td>
                                            <td className="py-2 px-4">{product.stock}</td>
                                            <td className="py-2 px-4">{product.image}</td>
                                            <td className="py-2 px-4 flex space-x-2">
                                                <button
                                                    onClick={() => handleEditProduct(index)}
                                                    className="px-2 py-1 bg-lightBrown text-white rounded-3xl mr-2"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteProduct(index)}
                                                    className="px-2 py-1 bg-gray-500 text-white rounded-3xl"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </main>
            </div>

            {/* Modal Popup */}
            {isPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-lg font-bold text-lightBrown mb-4">
                             {editIndex !== null ? "Edit Product" : "Add Product"}
                        </h2>
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                            <input
                                type="text"
                                name="name"
                                value={newProduct.name}
                                placeholder="Product Name"
                                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                                className="border border-lightBrown2 p-2 rounded"
                            />
                                 {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                            </div>
                            <div>
                            <textarea
                                name="description"
                                value={newProduct.description}
                                placeholder="Description"
                                 onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                                className="border border-lightBrown2 p-2 rounded"
                            />
                                 {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
                            </div>
                            <div>
                            <input
                                type="text"
                                name="price"
                                value={newProduct.price}
                                placeholder="Price"
                                 onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                                className="border border-lightBrown2 p-2 rounded"
                            />
                                 {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price}</p>}
                            </div>

                            {/* Category Select */}
                            <div>
                            <select
                                name="category"
                                value={newProduct.category}
                                 onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                                className="border border-lightBrown2 p-2 rounded"
                            >
                                <option value="">Select Category</option>
                                <option value="Hot">Hot</option>
                                <option value="Cold">Cold</option>
                                <option value="Bean">Bean</option>
                            </select>
                             {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
</div>
                            {/* Stock Status Select */}
                            <div></div>
                            <select
                                name="stock"
                                value={newProduct.stock}
                                 onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                                className="border border-lightBrown2 p-2 rounded"
                            >
                                <option value="">Select Stock Status</option>
                                <option value="In-stock">In-stock</option>
                                <option value="Out of stock">Out of stock</option>
                            </select>
                         {errors.stock && <p className="text-red-500 text-xs mt-1">{errors.stock}</p>}
</div>
                            {/* Image Upload */}
                            <div>
                            <input
                                type="file"
                                accept="image/png, image/jpeg"
                                onChange={handleImageChange}
                                className="border border-lightBrown2 p-2 rounded"
                            />
                         {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}
                            </div>
                            {imagePreview && (
                                <div className="mt-2">
                                    <img src={imagePreview} alt="Preview" className="w-full h-32 object-cover" />
                                </div>
                            )}

                            <div className="flex justify-end space-x-2">
                                <button
                                     onClick={closePopup}
                                    className="bg-gray-300 px-4 py-2 rounded"
                                >
                                    Cancel
                                </button>
                                 <button
                                     onClick={handleAddProduct}
                                     className="px-4 py-2 bg-lightBrown text-white rounded-lg"
                                     disabled={editIndex !== null && isSaveChangesDisabled()}
                                 >
                                     {editIndex !== null ? "Save Changes" : "Add Product"}
                                 </button>
                            </div>
                        </div>
                        </div>
                    
                
            )}
        </div>
    );
};

export default Product;