import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DetailsPage.css';
import StickyHeader from './header';

const DetailsPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const Dealers = [
    {
      id: 23803,
      name: 'Dealer name',
      email: 'Dealer email id',
      phone: 'Dealer Phone no.',
      products: [
        {
          id: 'P123456',
          name: 'Example Product 1',
          datetime: '2023-06-30T10:30:00',
        },
        {
          id: 'P234567',
          name: 'Example Product 2',
          datetime: '2023-07-01T15:45:00',
        },
      ],
    },
  ];

  const handleFeedbackClick = (dealerId) => {
    navigate(`/customer/feedback`);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter the products based on the search term
  const filteredProducts = Dealers[0].products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <React.Fragment>
      <StickyHeader />
    <div className="details-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search product..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      
      {Dealers.map((dealer) => (
        <div className="details-row" key={dealer.id}>
          <div className="dealer-details">
            <h4 className="details-heading">Dealer Details</h4>
            <div className="dealer-info-row">
              <span className="detail-label">Name:</span>
              <span>{dealer.name}</span>
            </div>
            <div className="dealer-info-row">
              <span className="dealer-label">ID:</span>
              <span>{dealer.id}</span>
            </div>
            <div className="dealer-info-row">
              <span className="dealer-label">Email:</span>
              <span>{dealer.email}</span>
            </div>
            <div className="dealer-info-row">
              <span className="dealer-label">Phone:</span>
              <span>{dealer.phone}</span>
            </div>
          </div>

          <div className="product-details">
            <h4 className="details-heading">Product Details</h4>
            {filteredProducts.map((product) => (
              <div className="product-item" key={product.id}>
                <div className="product-info-row">
                  <span className="detail-label">ID:</span>
                  <span>{product.id}</span>
                </div>
                <div className="product-info-row">
                  <span className="detail-label">Name:</span>
                  <span>{product.name}</span>
                </div>
                <div className="product-info-row">
                  <span className="detail-label">Date & Time:</span>
                  <span>{new Date(product.datetime).toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="feedback-section">
            <h4 className="details-heading">Leave Feedback</h4>
            <p className="feedback-description">
              We value your opinion! Share your feedback about our product and help us serve you better.
            </p>
            <button
              className="feedback-button"
              onClick={() => handleFeedbackClick(dealer.id)}
            >
              Provide Feedback
            </button>
          </div>
        </div>
      ))}
    </div>
    </React.Fragment>
  );
};

export default DetailsPage;
