'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const experiences = [
    {
      role: 'Americas Market expansion and co-sales manager',
      company: 'AIESEC Global',
      date: 'January 2026 – present',
      tasks: [
        'Prospecting USA, Brazil, Colombia, Peru, Chile, and Mexico markets',
        'Suspecting new global targets & PRM fulfillment',
        'B2B Global Platform mastering (Apollo, Odoo, Lusha)',
      ],
    },
    {
      role: 'BD Sales - Entity Support Team',
      company: 'AIESEC - Dominican Republic',
      date: 'August 2026 - Present',
      tasks: [
        'Co-create the BD portfolio & exposure to sales strategies',
        'Support CRM updates and lead status reports',
        'Co-create outreach templates and scripts',
        'Help build national database of warm leads',
      ],
    },
    {
      role: 'Head of Business Development and Engagement',
      company: 'AIESEC In Bangladesh',
      date: 'Recent Experience',
      tasks: [
        'Building strategic partnerships and sponsor outreach.',
        'Relationship management through external relations.',
        'Driving business development and organizational growth.',
      ],
    },
    {
      role: 'Radio Communication',
      company: "L'Institut Arabe des Droits de l'Homme (IADH)",
      date: 'Recent Experience',
      tasks: [
        'Facilitated radio communication initiatives.',
        'Advocated for human rights through media outreach.',
      ],
    },
    {
      role: 'External Relation Specialist - Entity Support Team',
      company: 'AIESEC - United States',
      date: 'March 2025 - August 2025',
      tasks: [
        'Exposure to sales strategies & AIESEC Merch',
        'Co-create the ER portfolio',
        'Support CRM updates and lead status reports',
        'Co-create outreach templates and scripts',
      ],
    },
    {
      role: 'Public Relation and Brand Manager',
      company: 'AIESEC in Tunisia - Nabeul',
      date: 'January 2025 – August 2025',
      tasks: [
        'Plan and execute strategies to make the LC more visible and trusted',
        'Create collaborations within the PR and UR network',
        'Ensure LC projects are well-branded and meet stakeholders expectations',
      ],
    },
    {
      role: 'Head Of Logistics - Neapolis Leadership Development Seminar',
      company: 'AIESEC in Tunisia - Nabeul',
      date: 'January 2025 - February 2025',
      tasks: [
        'Public speaking & Stress & Emotional management',
        'Sales skills & Timeline Management',
        'Obtaining financial and in-kind sponsorships',
      ],
    },
    {
      role: 'Head Of External Relation - Youth Speak',
      company: 'AIESEC in Tunisia - Nabeul',
      date: 'Jan 2024 – May 2024',
      tasks: [
        'Obtaining financial sponsorships',
        'Elaborating a target list & Team Management',
        'Tracking sales Activities & Creating Content of Needed Materials',
      ],
    },
    {
      role: 'University Brand Ambassador',
      company: 'AIESEC In Tunisia',
      date: 'March 2024 - August 2024',
      tasks: [
        'University relations',
        'Administrative relations',
        'Government relation',
      ],
    }
  ];

  const skills = [
    'Sales Presentations', 'CRM', 'Partnership Development',
    'Lead Generation', 'PRM', 'Problem-Solving',
    'Active Listening', 'Negotiation', 'Apollo (B2B platform)',
    'Analytical Thinking', 'KPI Evaluation', 'Lusha (B2B platform)'
  ];

  return (
    <>
      <div className="animated-bg">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <nav className="navbar">
        <div className="container">
          <div className="logo"><span className="text-gradient">JF</span></div>
          <div className="nav-links">
            <Link href="#about">About</Link>
            <Link href="#experience">Experience</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#education">Education</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="about" className="hero-section container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Hi, I'm <br/><span className="text-gradient">Jied Fatma</span></h1>
              <p>
                Americas (AME) Market Expansion and Co-sales Manager. Passionate about youth leadership, cultural exchange, and creating meaningful experiences that inspire connection and collaboration. Adept at teamwork, adaptability, and problem-solving while bringing positive energy into every project.
              </p>
              <a href="#contact" className="btn-primary">Let's Connect</a>
            </div>
            <div className="hero-image-wrapper">
              <div className="hero-image-backdrop"></div>
              <div className="hero-image-container">
                <Image 
                  src="/fatma_photo.jpeg" 
                  alt="Jied Fatma" 
                  fill
                  className="hero-image"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section container">
          <h2 className="section-title"><span className="text-gradient-alt">Professional</span> Journey</h2>
          <div className="grid grid-cols-2">
            {experiences.map((exp, idx) => (
              <div key={idx} className="glass-card experience-card">
                <h3>{exp.role}</h3>
                <h4>{exp.company} • {exp.date}</h4>
                <ul>
                  {exp.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section container">
          <h2 className="section-title">Core <span className="text-gradient">Competencies</span></h2>
          <div className="skills-container">
            {skills.map((skill, idx) => (
              <div key={idx} className="skill-pill">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="section container">
          <h2 className="section-title">Academic <span className="text-gradient-alt">Background</span></h2>
          <div className="grid grid-cols-2">
            <div className="glass-card">
              <h3>Higher Institute Of Languages Of Nabeul</h3>
              <h4>Licence (2023 - present)</h4>
              <p className="text-secondary mt-2">Field of Studies: English Literature and Civilization</p>
            </div>
            <div className="glass-card">
              <h3>Lycée Privé EL MANZAH Blaiech</h3>
              <h4>Baccalaureate (2021 - 2022)</h4>
              <p className="text-secondary mt-2">Field of Studies: Economics</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section container">
          <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Ready to <span className="text-gradient">Collaborate?</span></h2>
            <p className="text-secondary" style={{ fontSize: '1.2rem', marginBottom: '2.5rem' }}>
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Let's make something great together.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <div>
                <h4 style={{ color: 'var(--accent-1)' }}>Email</h4>
                <p>Fatmaj@aiesecus.org</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--accent-2)' }}>Phone</h4>
                <p>+216 46215234</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--accent-3)' }}>Location</h4>
                <p>Tunis, Tunisia</p>
              </div>
            </div>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=Fatmaj@aiesecus.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Send an Email
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
