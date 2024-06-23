import React, { useState } from "react";
import logoImage from "./logo.jpg"; // Path to your logo image
import harvardImage from "./harvard.jpg"; // Path to your Harvard image
import videoImage from "./video.jpg";
import videooImage from "./2574-library.jpg";
import "./header.css";

function Header() {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (id) => {
    setActiveItem(id === activeItem ? null : id);
  };

  const items = [
    {
      id: 1,
      title: "About",
      info: (
        <>
          <div className="green-section">
            <div className="green-item">
              <div className="green-item-row">
                <img
                  src="https://yocket.com/svgs/courthouseIcon.svg"
                  alt="Courthouse Icon"
                  width="50"
                  height="50"
                />
                Private
              </div>
              <p className="item-info">&nbsp;&nbsp;University Type</p>
            </div>
            <div className="green-item">
              <div className="green-item-row">
                <img
                  src="https://yocket.com/svgs/rankingIcon.svg"
                  alt="number Icon"
                  width="50"
                  height="50"
                />
                3
              </div>
              <p className="item-info">&nbsp;&nbsp;US News National rank</p>
            </div>
            <div className="green-item">
              <div className="green-item-row">
                <img
                  src="https://yocket.com/svgs/buildingsGreenIcon.svg"
                  alt="dollar Icon"
                  width="50"
                  height="50"
                />
                $84,950
                
              </div>
              <p className="item-info">&nbsp;&nbsp;&nbsp;&nbsp;Average Living Expenses
              <img 
                src="https://yocket.com/svgs/info.svg"
                alt="info Icon"
                className="info-icon"
                />
              </p>

            </div>
          </div>
          <p>
            <strong>Harvard University</strong> is a private Ivy League research
            university in <strong>Cambridge, Massachusetts.</strong> Founded in{" "}
            <strong>1636</strong> as Harvard College, it is the oldest
            institution of higher learning in the United States and among the
            most prestigious in the world. Harvard University has an enrollment
            of <strong>23,000+ students</strong> and a{" "}
            <strong>student-to-faculty ratio of 7:1.</strong> Harvard's
            four-year graduation rate is 87%, and its first-year retention rate
            is 96%.
          </p>
          <h2>What is the Acceptance Rate of Harvard University?</h2>
          <p>
            Harvard University's <strong>acceptance rate is 4%,</strong> making
            it one of the most selective universities in the world.
          </p>
          <p>
            <strong>Click Here:</strong> "Boost Your <u>Harvard Admission</u> Chances with Yocket: Study abroad Platform. Get Expert Guidance!"
          </p>
        </>
      ),
    },
    { id: 2, title: "Courses", info: "Harvard offers a diverse range of courses across various disciplines including arts, sciences, engineering, and business." },
    { id: 3, title: "Admissions", info: "Harvard's admissions process is highly competitive, requiring strong academic records, standardized test scores, and personal essays." },
    { id: 4, title: "Rankings", info: "Harvard consistently ranks among the top universities worldwide across various ranking platforms." },
    { id: 5, title: "Students", info: "Harvard has a diverse student body, representing all 50 states and over 80 countries." },
    { id: 6, title: "Counselling", info: "Harvard offers extensive counseling services to support students' mental health and academic success." },
    { id: 7, title: "Discussions", info: "Various discussion forums are available for students to engage in intellectual debates and academic discussions." },
    { id: 8, title: "Reviews", info: "Students and alumni often provide positive reviews about their experiences at Harvard." },
    { id: 9, title: "FAQ", info: "Frequently asked questions about Harvard University and its programs." },
  ];

  return (
    <header className="header">
      <div className="harvard-container">
        <img
          src={harvardImage}
          alt="Harvard Image"
          className="harvard-image"
        />
        <img src={logoImage} alt="Logo Image" className="logo-image" />
        <div className="text-container">
          <div className="heading-container">
          <h1>Harvard University: Acceptance Rate, Fees & Courses</h1>
          <button className="icon-text-button" >
          <img
            src="https://yocket.com/svgs/YocketText.svg"
            alt="yocket Icon"
            className="Yocket"
          />
          Top 10
        </button>
        </div>
          <h2>Massachusetts, United States</h2>
        </div>
      </div>

      <div className="nav-container">
        <nav className="navigation">
          <ul className="nav-links">
            {items.map((item) => (
              <li key={item.id}>
                <a href="#" onClick={() => handleItemClick(item.id)}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {activeItem === 1 && (
        <div className="about-photos-container">
          <div className="section about-section">
            <h2>About</h2>
            <div className="info-content">
              {items.find((item) => item.id === activeItem).info}
            </div>
          </div>
          <div className="section photos-videos-section">
            <h2>Photos & Videos</h2>
            <img src={videoImage} alt="Sample" className="video-image" />
            <img src={videooImage} alt="Sample" className="video-imagee" />
            
            <p></p>
          </div>
        </div>
      )}

{activeItem === 1 && (
  <div className="contact-section">
    <h2>Contact</h2>
    <div className="contact-item">
      <p>Address    <strong><span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;Oxford&nbsp;St.&nbsp;Cambridge,&nbsp;MA&nbsp;02138,</span></strong>.</p>
      <p><strong> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;USA</strong></p>
    </div>
    
     
      <div className="blue-text"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;View on Google Earth</strong>
      <img src="https://yocket.com/svgs/ExternalLinkBlue.svg"
      alt="Google Link"
      className="external=link-icon"
      />
      </div>
    
    <div className="contact-item">
      <p><strong>Email  </strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;internationaloffice@harvard.edu</p>
    </div>
  </div>
)}


      <div className="button-container">
        <button className="button star-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="50"
            height="50"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M12 17.27L18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
        </button>
        <button className="button join-button">
          <img
            src="https://yocket.com/svgs/users.svg"
            alt="Users Icon"
            className="icon"
          />
          Join Group
        </button>
        <button className="button decide-button" onClick={() => handleItemClick(1)}>
          <img
            src="https://yocket.com/svgs/ExpertIconWhite.svg"
            alt="Expert Icon"
            className="icon"
          />
          Help me decide
        </button>
      </div>
    </header>
  );
}

export default Header;
