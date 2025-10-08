import React from 'react';
import NavBar from '../components/NavBar';
import './CareerFair.css';
import hcfBanner from '../media/images/hcf/hcf-banner-backgroundless.png';
import hcfBackground from '../media/images/hcf/hcf-background.png';
import hknLogo from '../media/images/hcf/hkn-logo.png';
import tbpLogo from '../media/images/hcf/tbp-logo.png';
import scholarsLogo from '../media/images/hcf/scholars-logo.png';

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
                November 18th, 2024, 1-5pm
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
          The Honors Career Fair (HCF) at UC San Diego is an annual, student-organized event for top honors engineering students with high GPAs and excellent academic records. This event is co-hosted by Eta Kappa Nu (HKN), Tau Beta Pi, and UCSD Scholar's Society. This exclusive career fair allows recruiters to connect with a select group of high-achieving students in an intimate setting.
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
          <p className="section-header"><b>Sponsors</b></p>
          <hr className="section-divider" />
          <div className="sponsor-grid">
            <div className="sponsor-row">
              <img
                src="assets/images/llnl-logo.png"
                className="sponsor-logo sponsor-logo-large"
                alt="LLNL Logo"
              />
              <img
                src="assets/images/naasco-logo.png"
                className="sponsor-logo sponsor-logo-large"
                alt="NAASCO Logo"
              />
            </div>
            <div className="sponsor-row">
              <img
                src="assets/images/ntagsw-logo.png"
                className="sponsor-logo sponsor-logo-small"
                alt="NTAGSW Logo"
              />
              <img
                src="assets/images/nasc-logo.png"
                className="sponsor-logo sponsor-logo-small"
                alt="NASC Logo"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq-page">
        <p style={{ marginBottom: "1em", fontSize: "50px" }}>FAQ</p>
        <hr style={{ width: "80%", borderTop: "2px solid white", marginBottom: "2em" }} />
        <dropdown-box
          header="Why should I attend HCF?"
          text="HCF provides honors students with a private setting to engage with companies, providing more chance of recognition in the internship/job market. Additionally, recruiters are also aware of the honors status that students hold, giving more credibility to attendees."
        />
        <dropdown-box
          header="Do I have to stay for the entire event?"
          text="No! Since the event will run from 1 to 5pm, you can join in at any time to participate in the event."
        />
        <dropdown-box
          header="Which companies will be attending?"
          text="This year the companies attending include: Lawrence Livermore National Laboratory, General Dynamics NASSCO, NTAG Southwest, and NAVAIR."
        />
        <dropdown-box
          header="What is the dress code?"
          text="This is a business-casual event, so make sure to dress as you would to an interview."
        />
        <dropdown-box
          header="What should I bring?"
          text="Make sure to bring multiple hard copies of your resume to hand out to company representatives."
        />
        <dropdown-box
          header="Where is it?"
          text="Qualcomm Room, first floor of Jacobs Hall at UC San Diego"
        />
        <dropdown-box
          header="When is it?"
          text="Monday, April 18th, 2024 1-5pm"
        />
        <dropdown-box
          header="I have a question, who do I contact?"
          text="Contact Ethan Jenkins at etjenkins@ucsd.edu"
        />
      </div>
    </div>
  );
}

export default CareerFair;