import React, { useState, useEffect } from 'react';
import api from '../utils/api';

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products'); // Adjust endpoint based on your backend
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <div className="p-4">Loading...</div>;

  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Revenue</th>
            <th>Stock</th>
            <th>Status</th>
            <th>Rating</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id || product.name}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.sales || '0 pcs'}</td>
              <td>{product.revenue || '$0.00'}</td>
              <td>{product.stock || 0}</td>
              <td>
                <span
                  className={`badge ${
                    product.status === 'In Stock'
                      ? 'bg-success'
                      : product.status === 'Out of Stock'
                      ? 'bg-danger'
                      : 'bg-warning'
                  }`}
                >
                  {product.status || 'In Stock'}
                </span>
              </td>
              <td>{product.rating || '0.0'}</td>
              <td><button className="btn btn-sm btn-outline-secondary">...</button></td>
            </tr>
          ))}
        </tbody>
        
      </table>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <button className="btn btn-sm btn-outline-secondary me-2">Add Column</button>
          <span>2 Selected</span>
        </div>
        <div>
          <span>Showing per page: 10</span>
          <button className="btn btn-sm btn-outline-secondary mx-2">1</button>
          <button className="btn btn-sm btn-outline-secondary">2</button>
          <button className="btn btn-sm btn-outline-secondary">3</button>
          <span>...</span>
          <button className="btn btn-sm btn-outline-secondary">25</button>
          <button className="btn btn-sm btn-outline-secondary">Go to page</button>
          <button className="btn btn-sm btn-outline-secondary">Go</button>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;