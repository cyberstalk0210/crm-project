import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from './sidebar';
import api from '../utils/api';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    stock: '',
    status: 'In Stock',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post('/products', product); // Adjust endpoint based on your backend
      navigate('/products');
    } catch (error) {
      console.error('Error adding product:', error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col-10 p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Add New Product</h2>
            <div>
              <Link to="/products" className="btn btn-outline-secondary me-2">Back to Product</Link>
            </div>
          </div>

          <div className="card p-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="productName" className="form-label">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="productName"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="productPrice" className="form-label">Price</label>
                <input
                  type="number"
                  className="form-control"
                  id="productPrice"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  step="0.01"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="productStock" className="form-label">Stock</label>
                <input
                  type="number"
                  className="form-control"
                  id="productStock"
                  name="stock"
                  value={product.stock}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="productStatus" className="form-label">Status</label>
                <select
                  className="form-select"
                  id="productStatus"
                  name="status"
                  value={product.status}
                  onChange={handleChange}
                  required
                >
                  <option value="In Stock">In Stock</option>
                  <option value="Out of Stock">Out of Stock</option>
                  <option value="Restock">Restock</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Adding...' : 'Add Product'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;