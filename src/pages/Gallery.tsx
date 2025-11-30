import React from 'react';

const Gallery: React.FC = () => {
  return (
    <div className="p-5">
      <h1 className="text-4xl font-semibold text-center">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="gallery-item bg-white rounded-lg shadow p-4">Image 1</div>
        <div className="gallery-item bg-white rounded-lg shadow p-4">Image 2</div>
        <div className="gallery-item bg-white rounded-lg shadow p-4">Image 3</div>
      </div>
    </div>
  );
};

export default Gallery;