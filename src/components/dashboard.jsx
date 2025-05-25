import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductTable from './productTables';
import Sidebar from './sidebar';
import api from '../utils/api'; // Import the API utility

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalProduct: 0,
    productRevenue: '$0.00',
    productSold: 0,
    avgMonthlySales: 0,
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await api.get('/products/stats'); // Adjust endpoint based on your backend
        setStats(response.data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) return <div className="p-4">Loading...</div>;

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col-10 p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Product</h2>
            <div>
              <button className="btn btn-outline-secondary me-2">Table View</button>
              <button className="btn btn-outline-secondary me-2">Filter</button>
              <button className="btn btn-outline-secondary me-2">Sort</button>
              <button className="btn btn-outline-secondary me-2">Show Stats</button>
              <button className="btn btn-primary me-3">Customize</button>
              <button className="btn btn-outline-secondary me-2">Export</button>
              <button
                className="btn btn-success"
                onClick={() => navigate('/add-product')}
              >
                Add New Product
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="row mb-4">
            <div className="col-md-3">
              <div className="card p-3 text-center">
                <h6>Total Product</h6>
                <h4>{stats.totalProduct}</h4>
                <p className="text-success">vs last month +3 product</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-3 text-center">
                <h6>Product Revenue</h6>
                <h4>{stats.productRevenue}</h4>
                <p className="text-success">vs last month +9%</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-3 text-center">
                <h6>Product Sold</h6>
                <h4>{stats.productSold}</h4>
                <p className="text-success">vs last month +7%</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-3 text-center">
                <h6>Avg Monthly Sales</h6>
                <h4>{stats.avgMonthlySales}</h4>
                <p className="text-success">vs last month +6%</p>
              </div>
            </div>
          </div>

          {/* Product Table */}
          <ProductTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;