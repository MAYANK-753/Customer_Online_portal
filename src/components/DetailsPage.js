import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DetailsPage.css';

const DetailsPage = () => {
  const navigate = useNavigate();

  const customers = [
    {
      id: 1,
      name: 'Mayank Saha',
      email: 'mayanksaha.753@gmail.com',
      phone: '+91 9667887651',
    },
    {
      id: 2,
      name: 'John Doe',
      email: 'JohnDoe@example.com',
      phone: '9876543210',
    },
    {
      id: 3,
      name: 'Alice',
      email: 'alice@example.com',
      phone: '5555555555',
    },
  ];

  const products = [
    {
      id: 'P123456',
      name: 'Example Product 1',
      dealer: 'ABC Dealer',
    },
    {
      id: 'P234567',
      name: 'Example Product 2',
      dealer: 'XYZ Dealer',
    },
    {
      id: 'P345678',
      name: 'Example Product 3',
      dealer: 'DEF Dealer',
    },
  ];

  const handleFeedbackClick = (customerId) => {
    navigate(`/feedback`);
  };

  return (
    <div className="details-container">
      {customers.map((customer, index) => (
        <div className="details-row" key={customer.id}>
          <div className="customer-details">
            <h4 className="details-heading">Customer Details</h4>
            <ul className="details-list">
              <li>
                <span className="detail-label">ID:</span> {customer.id}
              </li>
              <li>
                <span className="detail-label">Name:</span> {customer.name}
              </li>
              <li>
                <span className="detail-label">Email:</span> {customer.email}
              </li>
              <li>
                <span className="detail-label">Phone:</span> {customer.phone}
              </li>
            </ul>
          </div>

          <div className="product-details">
            <h4 className="details-heading">Product Details</h4>
            <ul className="details-list">
              <li>
                <span className="detail-label">ID:</span> {products[index].id}
              </li>
              <li>
                <span className="detail-label">Name:</span> {products[index].name}
              </li>
              <li>
                <span className="detail-label">Dealer:</span> {products[index].dealer}
              </li>
            </ul>
          </div>

          <div className="feedback-section">
            <h4 className="details-heading">Leave Feedback</h4>
            <p className="feedback-description">
              We value your opinion! Share your feedback about our product and help us serve you better.
            </p>
            <button
              className="feedback-button"
              onClick={() => handleFeedbackClick(customer.id)}
            >
              Provide Feedback
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailsPage;
