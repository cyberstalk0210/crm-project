import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import api from '../utils/api';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await api.get('/orders'); // Adjust endpoint based on your backend
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) return <div className="p-4">Loading...</div>;

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col-10 p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Orders</h2>
            <div>
              <button className="btn btn-outline-secondary me-2">Filter</button>
              <button className="btn btn-outline-secondary me-2">Sort</button>
              <Link to="/products" className="btn btn-outline-secondary">Back to Products</Link>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Product</th>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.product}</td>
                    <td>{order.customer}</td>
                    <td>{order.date}</td>
                    <td>{order.amount}</td>
                    <td>
                      <span
                        className={`badge ${
                          order.status === 'Delivered'
                            ? 'bg-success'
                            : order.status === 'Pending'
                            ? 'bg-warning'
                            : 'bg-danger'
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-outline-secondary">...</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;