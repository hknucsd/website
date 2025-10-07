import React from 'react';
import NavBar from '../components/NavBar';

function CareerFair() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <header className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Honors Career Fair</h1>
          <p className="text-xl">
            Connect with top companies and launch your engineering career
          </p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        {/* Add career fair content here */}
      </main>
      <footer id="contact" className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          {/* Add contact information here */}
        </div>
      </footer>
    </div>
  );
}

export default CareerFair;