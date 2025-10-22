import React from 'react';
import NavBar from './components/NavBar';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Welcome to HKN</h1>
            <p className="text-2xl">
              The Premier Honor Society for Electrical and Computer Engineering
            </p>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-lg text-gray-700 mb-4">
            Eta Kappa Nu (HKN) is the premier honor society for electrical and computer engineering students.
            We recognize and support excellence in engineering education through leadership, scholarship, and service.
          </p>
          {/* Add more content sections here */}
        </section>
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

export default Home;