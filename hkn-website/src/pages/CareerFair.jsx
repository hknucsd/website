import React from 'react';
import NavBar from '../components/NavBar';
import './CareerFair.css';
import hcfBanner from '../media/images/hcf/hcf-banner-backgroundless.png';
import hcfBackground from '../media/images/hcf/hcf-background.png';
import hknLogo from '../media/images/hcf/hkn-logo.png';
import tbpLogo from '../media/images/hcf/tbp-logo.png';
import scholarsLogo from '../media/images/hcf/scholars-logo.png';
import llnlLogo from '../media/images/hcf/llnl-logo.png';
import viasatLogo from '../media/images/hcf/viasat-logo.png';
import interlinkLogo from '../media/images/hcf/interlink-logo.webp';
import arkusLogo from '../media/images/hcf/arkus-logo.webp';

function CareerFair() {
  return (
    <div className="career-fair-container">
      <div className="transparent-nav">
        <NavBar />
      </div>
      <button id="scrollTop">^</button>
      
      <div id="cover-page">
        <div id="cover-flex">
          <div>
            <div className="banner-container">
              <img
                className="center banner-image"
                src={hcfBanner}
                alt="HCF Banner"
              />
              <p id="eventdate" className="event-info">
                November 10th, 2024, 1-5pm
              </p>
              <p id="eventlocation" className="event-info">
                Qualcomm Room, Jacobs Hall
              </p>
            </div>
          </div>
        </div>
        <a
          id="apply-link"
          href="https://forms.gle/JQUWEiCAMw28Bu8m6"
          className="rsvp-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button big-button center main-font">
            RSVP Now
          </button>
        </a>
      </div>

      <div id="about-page">
        <p className="section-header">About</p>
        <hr className="section-divider" />
        <p className="about-text">
          The Honors Career Fair (HCF) at UC San Diego is an annual, student-organized event for top honors engineering students with high GPAs and excellent academic records. This event is hosted by Eta Kappa Nu (HKN), inviting members of Tau Beta Pi, and UCSD Scholar's Society. This exclusive career fair allows recruiters to connect with a select group of high-achieving students in an intimate setting.
        </p>
        <div className="logo-container">
          <img
            src={scholarsLogo}
            className="logo"
            alt="Scholars Logo"
          />
          <img
            src={hknLogo}
            className="logo"
            alt="HKN Logo"
          />
          <img
            src={tbpLogo}
            className="logo"
            alt="TBP Logo"
          />
        </div>
      </div>

      {/* Sponsors Section */}
      <div id="sponsors">
        <div className="sponsor-section">
          <p className="section-header">Sponsors</p>
          <hr className="section-divider" />
          <div className="sponsor-grid">
            <img
              src={llnlLogo}
              className="sponsor-logo"
              alt="Lawrence Livermore National Laboratory Logo"
            />
            <img
              src={viasatLogo}
              className="sponsor-logo"
              alt="Viasat Logo"
            />
            <img
              src={interlinkLogo}
              className="sponsor-logo"
              alt="Interlink Logo"
            />
            <img
              src={arkusLogo}
              className="sponsor-logo"
              alt="Arkus Logo"
            />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq-page">
        <p className="section-header">FAQ</p>
        <hr className="section-divider" />
        <div className="faq-grid">
          <div className="faq-card" onClick={(e) => e.currentTarget.classList.toggle('is-flipped')}>
            <div className="faq-card-inner">
              <div className="faq-card-front">
                <h3>Why should I attend HCF?</h3>
                <span className="faq-click-hint">Click to flip</span>
              </div>
              <div className="faq-card-back">
                <p>HCF gives honors students a private space to connect with companies, increasing their visibility in the job market. Recruiters also recognize their honors status, adding credibility to attendees.</p>
              </div>
            </div>
          </div>

          <div className="faq-card" onClick={(e) => e.currentTarget.classList.toggle('is-flipped')}>
            <div className="faq-card-inner">
              <div className="faq-card-front">
                <h3>Do I have to stay for the entire event?</h3>
                <span className="faq-click-hint">Click to flip</span>
              </div>
              <div className="faq-card-back">
                <p>No! Since the event will run from 1 to 5pm, you can join in at any time to participate in the event.</p>
              </div>
            </div>
          </div>

          <div className="faq-card" onClick={(e) => e.currentTarget.classList.toggle('is-flipped')}>
            <div className="faq-card-inner">
              <div className="faq-card-front">
                <h3>Which companies will be attending?</h3>
                <span className="faq-click-hint">Click to flip</span>
              </div>
              <div className="faq-card-back">
                <p>This year the companies attending include: Lawrence Livermore National Laboratory (LLNL), Viasat, Interlink, and Arkus.</p>
              </div>
            </div>
          </div>

          <div className="faq-card" onClick={(e) => e.currentTarget.classList.toggle('is-flipped')}>
            <div className="faq-card-inner">
              <div className="faq-card-front">
                <h3>What is the dress code?</h3>
                <span className="faq-click-hint">Click to flip</span>
              </div>
              <div className="faq-card-back">
                <p>This is a business-casual event, so make sure to dress as you would to an interview.</p>
              </div>
            </div>
          </div>

          <div className="faq-card" onClick={(e) => e.currentTarget.classList.toggle('is-flipped')}>
            <div className="faq-card-inner">
              <div className="faq-card-front">
                <h3>What should I bring?</h3>
                <span className="faq-click-hint">Click to flip</span>
              </div>
              <div className="faq-card-back">
                <p>Make sure to bring multiple hard copies of your resume to hand out to company representatives.</p>
              </div>
            </div>
          </div>

          <div className="faq-card" onClick={(e) => e.currentTarget.classList.toggle('is-flipped')}>
            <div className="faq-card-inner">
              <div className="faq-card-front">
                <h3>Where is it?</h3>
                <span className="faq-click-hint">Click to flip</span>
              </div>
              <div className="faq-card-back">
                <p>Qualcomm Room, first floor of Jacobs Hall at UC San Diego</p>
              </div>
            </div>
          </div>

          <div className="faq-card" onClick={(e) => e.currentTarget.classList.toggle('is-flipped')}>
            <div className="faq-card-inner">
              <div className="faq-card-front">
                <h3>When is it?</h3>
                <span className="faq-click-hint">Click to flip</span>
              </div>
              <div className="faq-card-back">
                <p>Monday, November 10th, 2025 1-5pm</p>
              </div>
            </div>
          </div>

          <div className="faq-card" onClick={(e) => e.currentTarget.classList.toggle('is-flipped')}>
            <div className="faq-card-inner">
              <div className="faq-card-front">
                <h3>I have a question, who do I contact?</h3>
                <span className="faq-click-hint">Click to flip</span>
              </div>
              <div className="faq-card-back">
                <p>Contact Nian Nian Wang at <a href="mailto:niw002@ucsd.edu">niw002@ucsd.edu</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerFair;