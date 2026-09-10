import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import './App.css';

// Custom SVG Icons
const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);

const CheckCircleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);

const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
);

const ExternalLinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
);

export default function App() {
  const portfolioLetters = ['P', 'O', 'R', 'T', 'F', 'O', 'L', 'I', 'O'];

  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { amount: 0.3 });

  // Projects Dataset
  const projects = [
    {
      id: 'project-1',
      title: 'GoBuddy Student Errand App',
      category: 'UI/UX Design',
      overview: 'A cross-platform student errand and commission application designed to connect students who need assistance with students who can perform errands within the university campus.',
      contribution: 'UI/UX design, including designing the user interface, user flow, and overall user experience.',
      image: '/gobuddy.png',
      link: '#',
    },
    {
      id: 'project-2',
      title: 'Jade Store POS',
      category: 'UI/UX Design & Project Lead',
      overview: 'A standalone Point-of-Sale (POS) system developed to manage sales, products, transactions, and customer records. It was built using VB.NET and SQL.',
      contribution: 'Project Manager, where I led the team, coordinated tasks, monitored progress, and helped ensure the successful completion of the system.',
      image: '/jade_store.png',
      link: '#',
    },
    {
      id: 'project-3',
      title: 'Pokedex React',
      category: 'React Training Project',
      overview: 'A web-based Pokedex developed during React training to practice building components, managing application data, and creating interactive user interfaces.',
      contribution: 'Worked on the React components and user interface while practicing Git and GitHub workflows such as branching, committing, pushing, and merging.',
      image: '/pokedex.png',
      link: '#',
    },
    {
      id: 'project-4',
      title: 'Sally’s Karenderya – Web-Based Food Ordering System',
      category: 'Web Developer / UI/UX Designer',
      overview: 'A web-based ordering system designed to help a local karenderya handle customer orders during busy periods. Customers can browse available food and place orders using their phones or a web browser.',
      contribution: 'Designed and developed the system, including the user interface and ordering functionality, with a focus on making the ordering process simple and convenient.',
      image: '/sally-karenderya.png',
      link: '#',
    },
  ];

  // Certifications Dataset
  const certificates = [
    {
      id: 'cert-1',
      title: 'IT Specialist – Databases',
      issuer: 'Certiport / Certiport ITS',
      image: '/cert_database.png',
    },
    {
      id: 'cert-2',
      title: 'IT Specialist – HTML and CSS',
      issuer: 'Certiport / Certiport ITS',
      image: '/cert_html.png',
    },
    {
      id: 'cert-3',
      title: 'IT Specialist – Java',
      issuer: 'Certiport / Certiport ITS',
      image: '/cert_java.png',
    },
    {
      id: 'cert-4',
      title: 'IT Specialist – Network Security',
      issuer: 'Certiport / Certiport ITS',
      image: '/cert_networksec.png',
    },
    {
      id: 'cert-5',
      title: 'Git & Github and React.js Training Certificate',
      issuer: 'College of Computing Education Skills Mentors, University of Mindanao',
      image: '/react.png',
    },
  ];

  const marqueeCertificates = [...certificates, ...certificates];

  const [activeCert, setActiveCert] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setIsSubmitted(false), 5000);
    }, 800);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] },
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.3, ease: [0.25, 1, 0.5, 1] },
    }),
  };

  const portfolioVariants = {
    hidden: { y: '100%' },
    visible: (i) => ({
      y: '0%',
      transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1], delay: i * 0.045 },
    }),
  };
const handleNavClick = (e, targetId) => {
  e.preventDefault();
  
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }

  // Forces the browser address bar to stay clean without reloading
  if (window.history.pushState) {
    window.history.pushState(null, '', window.location.pathname);
  }
};
  const currentProject = projects[currentIndex];

  return (
    <div className="portfolio-app">
      {/* Fixed Header Navbar */}
      <header className="navbar">
        <div className="logo" onClick={(e) => handleNavClick(e, 'hero')}>
          JADE ELIZE ASGAPO
        </div>
        <nav className="nav-links">
  <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
  <a href="#works" onClick={(e) => handleNavClick(e, 'works')}>Works</a>
  <a href="#certifications" onClick={(e) => handleNavClick(e, 'certifications')}>Certifications</a>
  <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
</nav>

      </header>

      {/* Snap Scroll Container */}
      <main className="snap-container">
        
        {/* 1. Hero Landing Section */}
        <section className="hero-section" id="hero" ref={heroRef}>
          <div className="slat-container">
            <div className="slat-group">
              {portfolioLetters.map((letter, index) => (
                <motion.div
                  key={`portfolio-${index}`}
                  className="slat white"
                  custom={index}
                  initial="hidden"
                  animate={isHeroInView ? 'visible' : 'hidden'}
                  variants={portfolioVariants}
                >
                  <span className="slat-letter">{letter}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. About Section */}
        <section className="about-section" id="about">
          <div className="about-container">
            <div className="about-content">
              <span className="greeting">Hi, I'm</span>
              <h1 className="name">JADE ELIZE ASGAPO</h1>
              <h2 className="title-tag">UI/UX Designer & Data Analyst</h2>
              <p className="bio">
                An Information Technology student specializing at the intersection of user interface design and data analytics. I design intuitive, user-centered interfaces informed by data-driven insights—converting complex functional requirements and user metrics into clean, effective digital products.
              </p>
            </div>

            <div className="about-visual">
              <div className="portrait-wrapper">
                <div className="blue-accent-shape" />
                <img 
                  src="/pic.png" 
                  alt="Jade Elize Asgapo - Professional Portrait" 
                  className="portrait-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Works / Projects Section */}
        <section className="works-section" id="works">
          <div className="works-wrapper">
            <h2 className="section-title">PROJECTS</h2>

            <div className="slider-container">
              <button className="nav-arrow prev-arrow" onClick={handlePrev} aria-label="Previous Project">
                &#10094;
              </button>

              <div className="slide-window">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentProject.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="project-card"
                  >
                    <div className="project-visual">
                      <div className="landscape-wrapper">
                        <div className="blue-accent-shape-landscape" />
                        <div className="mockup-frame">
                          <img 
                            src={currentProject.image} 
                            alt={`${currentProject.title} Landscape Mockup`} 
                            className="landscape-img"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="project-content">
                      <span className="project-category">{currentProject.category}</span>
                      <h3 className="project-title">{currentProject.title}</h3>
                      
                      <div className="project-detail-group">
                        <h4 className="detail-heading">System Overview</h4>
                        <p className="detail-text">{currentProject.overview}</p>
                      </div>

                      <div className="project-detail-group">
                        <h4 className="detail-heading">My Contribution</h4>
                        <p className="detail-text">{currentProject.contribution}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <button className="nav-arrow next-arrow" onClick={handleNext} aria-label="Next Project">
                &#10095;
              </button>
            </div>

            <div className="carousel-dots">
              {projects.map((_, idx) => (
                <button
                  key={`dot-${idx}`}
                  className={`dot ${idx === currentIndex ? 'active' : ''}`}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 4. Certifications Marquee Section */}
        <section className="certs-section" id="certifications">
          <div className="certs-wrapper">
            <h2 className="section-title">CERTIFICATIONS</h2>

            <div className="marquee-container">
              <div className={`marquee-track ${activeCert ? 'paused' : ''}`}>
                {marqueeCertificates.map((cert, index) => {
                  const isFocused = activeCert && activeCert.uniqueKey === `${cert.id}-${index}`;
                  const isDimmed = activeCert && activeCert.uniqueKey !== `${cert.id}-${index}`;

                  return (
                    <div
                      key={`${cert.id}-${index}`}
                      className={`cert-card ${isFocused ? 'focused' : ''} ${isDimmed ? 'dimmed' : ''}`}
                      onMouseEnter={() => setActiveCert({ ...cert, uniqueKey: `${cert.id}-${index}` })}
                      onMouseLeave={() => setActiveCert(null)}
                      onClick={() => setActiveCert(isFocused ? null : { ...cert, uniqueKey: `${cert.id}-${index}` })}
                    >
                      <div className="cert-card-frame">
                        <img src={cert.image} alt={cert.title} className="cert-img" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="cert-info-display">
              <AnimatePresence mode="wait">
                {activeCert ? (
                  <motion.div
                    key={activeCert.uniqueKey}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.25 }}
                    className="cert-details-card"
                  >
                    <h3 className="cert-title-text">{activeCert.title}</h3>
                    <p className="cert-issuer-text">{activeCert.issuer}</p>
                  </motion.div>
                ) : (
                  <div className="cert-placeholder">Hover or tap a certificate to view details</div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </section>

        {/* 5. Contact Section */}
        <section className="contact-section" id="contact">
          <div className="contact-wrapper">
            <h2 className="section-title">CONTACT</h2>

            <div className="contact-grid">
              
              {/* Left Column: Interactive Contact Form */}
              <div className="contact-form-container">
                <form onSubmit={handleFormSubmit} className="contact-form" noValidate>
                  <div className="input-group">
                    <label htmlFor="name" className="input-label">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Alex Morgan"
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="email" className="input-label">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. alex@example.com"
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="message" className="input-label">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Let's talk about a new project or collaboration."
                      required
                      className="form-input textarea-input"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <SendIcon />
                  </button>

                  <AnimatePresence>
                    {isSubmitted && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="form-success-banner"
                      >
                        <CheckCircleIcon />
                        <span>Message Sent Successfully!</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>

              {/* Right Column: Info Card */}
              <div className="contact-info-card">
                <h3 className="card-heading">Contact Details</h3>
                <p className="card-description">
                  Feel free to reach out for project inquiries, design collaborations, or data consulting opportunities.
                </p>

                <div className="info-list">
                  <a href="mailto:asgapojade@gmail.com" className="info-item">
                    <div className="icon-wrapper">
                      <MailIcon />
                    </div>
                    <div className="info-text">
                      <span className="info-label">Email</span>
                      <span className="info-value">asgapojade@gmail.com</span>
                    </div>
                  </a>

                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="info-item">
                    <div className="icon-wrapper">
                      <LinkedinIcon />
                    </div>
                    <div className="info-text">
                      <span className="info-label">LinkedIn</span>
                      <span className="info-value">linkedin.com/in/jadeasgapo</span>
                    </div>
                    <ExternalLinkIcon />
                  </a>

                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="info-item">
                    <div className="icon-wrapper">
                      <GithubIcon />
                    </div>
                    <div className="info-text">
                      <span className="info-label">GitHub / Portfolio</span>
                      <span className="info-value">github.com/jadeasgapo</span>
                    </div>
                    <ExternalLinkIcon />
                  </a>

                  <div className="info-item static">
                    <div className="icon-wrapper">
                      <MapPinIcon />
                    </div>
                    <div className="info-text">
                      <span className="info-label">Location</span>
                      <span className="info-value">Davao City, Philippines</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
    </div>
  );
}