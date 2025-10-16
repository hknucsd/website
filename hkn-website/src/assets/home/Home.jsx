import React from 'react';
import NavBar from '../../components/NavBar';
import './Home.css';
import Slideshow from './slideshow/Slideshow';
import Carousel from './carousel/Carousel';

function Home() {
  return (
    <div className="page-container">
      <NavBar />

      <header className="header">
        <div className="container mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight title">
                Eta Kappa Nu
              </h1>
              <p className="mt-6 text-xl md:text-2xl subtitle">
                Engineering honors society at UCSD
              </p>

              <div className="mt-10 gradient-bar gradient-bar-md"></div>
            </div>

            <div className="md:justify-self-end">
              <img
                src="/src/media/images/group.jpg"
                alt="HKN group"
                className="image"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 md:px-10 py-16">
        <section className="max-w-4xl text-center mx-auto">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">ABOUT US</h2>
          <p className="text-lg text-blue-200/90">
            Eta Kappa Nu (HKN) is the premier honor society for electrical and computer engineering students.
            We recognize and support excellence in engineering education through leadership, scholarship, and service.
          </p>
        </section>
      </main>

      <main className="container mx-auto px-6 md:px-10 py-16">
        <section className="max-w-4xl text-center mx-auto">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">WHERE WE ARE</h2>
          <Slideshow />
        </section>
      </main>

      <main className="container mx-auto px-6 md:px-10 py-16">
        <section className="max-w-4xl text-center mx-auto">
          <Carousel />
        </section>
      </main>

      <footer id="contact" className="bg-[#0A2540] text-blue-100 py-10">
        <div className="container mx-auto px-6 md:px-10">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-blue-200/80">Add contact information here.</p>
        </div>
      </footer>
    </div>


  );
}

export default Home;