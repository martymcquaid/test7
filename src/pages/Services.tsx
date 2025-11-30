import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="p-5">
      <h1 className="text-4xl font-semibold text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="service bg-white rounded-lg shadow p-4">
          <h3 className="font-bold">Service One</h3>
          <p>Comprehensive overview of service one.</p>
        </div>
        <div className="service bg-white rounded-lg shadow p-4">
          <h3 className="font-bold">Service Two</h3>
          <p>Detailed description of service two.</p>
        </div>
        <div className="service bg-white rounded-lg shadow p-4">
          <h3 className="font-bold">Service Three</h3>
          <p>Insight into service three.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;