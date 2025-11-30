import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <section className="hero bg-gradient-to-r from-blue-400 to-blue-600 text-white p-10 text-center">
        <h1 className="text-5xl font-bold">Pluimmers</h1>
        <p className="mt-4">Elevating your experiences, one step at a time.</p>
      </section>
      <section className="about my-10 p-5 text-center">
        <h2 className="text-3xl font-semibold">About Pluimmers</h2>
        <p className="mt-4">We are dedicated to providing high-quality services to enhance your lifestyle.</p>
      </section>
      <section className="services grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
        <h2 className="text-3xl font-semibold text-center">What We Do</h2>
        <div className="service bg-white rounded-lg shadow p-4">
          <h3 className="font-bold">Service One</h3>
          <p>Details about service one.</p>
        </div>
        <div className="service bg-white rounded-lg shadow p-4">
          <h3 className="font-bold">Service Two</h3>
          <p>Details about service two.</p>
        </div>
        <div className="service bg-white rounded-lg shadow p-4">
          <h3 className="font-bold">Service Three</h3>
          <p>Details about service three.</p>
        </div>
      </section>
      <section className="gallery grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
        <h2 className="text-3xl font-semibold text-center">Gallery</h2>
        <div className="gallery-item bg-white rounded-lg shadow p-4">Image 1</div>
        <div className="gallery-item bg-white rounded-lg shadow p-4">Image 2</div>
        <div className="gallery-item bg-white rounded-lg shadow p-4">Image 3</div>
      </section>
      <section className="contact p-5 text-center">
        <h2 className="text-3xl font-semibold">Contact Us</h2>
        <form className="mt-4">
          <input type="email" placeholder="Your email" className="p-2 rounded border"/>
          <button className="bg-blue-500 text-white rounded px-4 py-2 mt-2 hover:bg-blue-600 transition">Send</button>
        </form>
      </section>
    </div>
  );
};

export default Home;