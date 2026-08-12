'use client';

import { useState } from 'react';
import { 
  Code2, 
  Sparkles, 
  Rocket, 
  Layers, 
  Globe, 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink,
  Cpu,
  Server,
  Database,
  Layout,
  Send
} from 'lucide-react';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const skillsData = [
    {
      category: 'Frontend',
      title: 'Modern Web Frontends',
      icon: <Layout className="w-6 h-6" />,
      desc: 'Crafting pixel-perfect, accessible, and fast web interfaces using Next.js App Router, React, and custom styling systems.',
      tags: ['Next.js 14', 'React 18', 'TypeScript', 'CSS Modules', 'Tailwind', 'HTML5/CSS3']
    },
    {
      category: 'Backend',
      title: 'Scalable APIs & Systems',
      icon: <Server className="w-6 h-6" />,
      desc: 'Architecting resilient backend microservices, REST & GraphQL APIs, and serverless functions optimized for throughput.',
      tags: ['Node.js', 'Express', 'Python', 'REST APIs', 'Serverless', 'Authentication']
    },
    {
      category: 'Database',
      title: 'Data & Analytics',
      icon: <Database className="w-6 h-6" />,
      desc: 'Designing performant relational and document databases with query optimization, indexing, and analytics pipelines.',
      tags: ['PostgreSQL', 'MongoDB', 'Redis', 'BigQuery', 'Prisma', 'Supabase']
    },
    {
      category: 'Tools',
      title: 'Cloud & Infrastructure',
      icon: <Cpu className="w-6 h-6" />,
      desc: 'Streamlining CI/CD workflows, containerization, deployment on Vercel/GCP, and code governance.',
      tags: ['Vercel', 'Google Cloud', 'Docker', 'Git & GitHub', 'CI/CD', 'Web Vitals']
    }
  ];

  const projectsData = [
    {
      id: 'proj-1',
      title: 'Apex Analytics Dashboard',
      description: 'An AI-powered real-time data analytics suite featuring interactive metrics, custom dynamic charts, and serverless reporting engine.',
      bannerText: 'APEX ANALYTICS',
      tags: ['Next.js', 'React', 'Chart.js', 'Tailwind', 'Vercel API'],
      liveUrl: 'https://vercel.com',
      githubUrl: 'https://github.com'
    },
    {
      id: 'proj-2',
      title: 'Nova Cloud Workflow Orchestrator',
      description: 'A cloud-native developer tool for visually orchestrating asynchronous data jobs and API triggers with real-time webhooks.',
      bannerText: 'NOVA CLOUD',
      tags: ['Node.js', 'TypeScript', 'WebSockets', 'PostgreSQL', 'Docker'],
      liveUrl: 'https://vercel.com',
      githubUrl: 'https://github.com'
    },
    {
      id: 'proj-3',
      title: 'Aura E-Commerce Engine',
      description: 'High-performance headless e-commerce store built for sub-second page loads, global edge caching, and seamless checkout flows.',
      bannerText: 'AURA STORE',
      tags: ['Next.js App Router', 'Stripe', 'GraphQL', 'Vercel Edge'],
      liveUrl: 'https://vercel.com',
      githubUrl: 'https://github.com'
    }
  ];

  const filteredSkills = activeCategory === 'All' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeCategory);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
      }, 500);
    }
  };

  return (
    <main id="top">
      {/* Sticky Header Navigation */}
      <header className="header-nav">
        <div className="container nav-container">
          <a href="#top" className="logo">
            <span className="logo-dot"></span>
            <span>Karunesh<span className="gradient-text">.dev</span></span>
          </a>
          
          <nav>
            <ul className="nav-links">
              <li><a href="#about" className="nav-link">About</a></li>
              <li><a href="#skills" className="nav-link">Skills</a></li>
              <li><a href="#projects" className="nav-link">Projects</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
          </nav>

          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '8px 18px', fontSize: '0.875rem' }}>
            <Github style={{ width: 16, height: 16 }} />
            <span>GitHub Profile</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="hero-section">
        <div className="hero-glow"></div>
        <div className="container">
          <div className="hero-badge">
            <span className="badge-ping"></span>
            <span>Available for new projects & opportunities</span>
          </div>

          <h1 className="hero-title">
            Building High-Performance <br />
            <span className="gradient-text">Digital Products</span> & Web Apps
          </h1>

          <p className="hero-description">
            Hi, I’m <strong>Karunesh</strong> — a Full-Stack Engineer specializing in building modern Next.js applications, 
            sleek user interfaces, and scalable backend services ready for Vercel edge deployment.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>View Featured Work</span>
              <ArrowRight style={{ width: 18, height: 18 }} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              <Mail style={{ width: 18, height: 18 }} />
              <span>Get in Touch</span>
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <h3>5+</h3>
              <p>Years Building Web Apps</p>
            </div>
            <div className="stat-item">
              <h3>30+</h3>
              <p>Completed Projects</p>
            </div>
            <div className="stat-item">
              <h3>99.9%</h3>
              <p>Performance & Reliability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Technical <span className="gradient-text">Expertise</span></h2>
            <p className="section-subtitle">A comprehensive overview of technologies, frameworks, and engineering tools I build with.</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '40px' }}>
            {['All', 'Frontend', 'Backend', 'Database', 'Tools'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="btn btn-secondary"
                style={{
                  padding: '8px 20px',
                  fontSize: '0.875rem',
                  borderColor: activeCategory === cat ? 'var(--accent-purple)' : 'var(--border-glass)',
                  background: activeCategory === cat ? 'rgba(168, 85, 247, 0.15)' : 'rgba(255, 255, 255, 0.05)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="skills-grid">
            {filteredSkills.map((skill, idx) => (
              <div key={idx} className="glass-panel skill-card">
                <div className="skill-icon-wrapper">
                  {skill.icon}
                </div>
                <h3>{skill.title}</h3>
                <p>{skill.desc}</p>
                <div className="skill-tags">
                  {skill.tags.map((t, tIdx) => (
                    <span key={tIdx} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="section" style={{ background: 'rgba(255, 255, 255, 0.01)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured <span className="gradient-text-cyan">Projects</span></h2>
            <p className="section-subtitle">Handpicked applications built for scalability, performance, and clean UX.</p>
          </div>

          <div className="projects-grid">
            {projectsData.map((project) => (
              <div key={project.id} className="glass-panel project-card">
                <div className="project-banner">
                  {project.bannerText}
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  
                  <div className="skill-tags" style={{ marginBottom: '20px' }}>
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>

                  <div className="project-footer">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      <span>Live Preview</span>
                      <ExternalLink style={{ width: 14, height: 14 }} />
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link" style={{ color: 'var(--text-secondary)' }}>
                      <span>Source Code</span>
                      <Github style={{ width: 14, height: 14 }} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="glass-panel" style={{ padding: '48px' }}>
            <div className="contact-grid">
              <div className="contact-info">
                <h3>Let's Build Something <span className="gradient-text">Great</span></h3>
                <p>Have an exciting project in mind or want to collaborate? Send me a message and I'll get back to you shortly!</p>

                <div className="contact-methods">
                  <div className="contact-method-item">
                    <div className="contact-method-icon">
                      <Mail style={{ width: 20, height: 20 }} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Direct Email</span>
                      <p style={{ fontWeight: 600, margin: 0 }}>karunesh@example.com</p>
                    </div>
                  </div>

                  <div className="contact-method-item">
                    <div className="contact-method-icon">
                      <Globe style={{ width: 20, height: 20 }} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Location</span>
                      <p style={{ fontWeight: 600, margin: 0 }}>Remote / Worldwide</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Your Name</label>
                    <input 
                      id="name"
                      type="text" 
                      required 
                      className="form-input" 
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input 
                      id="email"
                      type="email" 
                      required 
                      className="form-input" 
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea 
                      id="message"
                      required 
                      className="form-textarea" 
                      placeholder="Tell me about your project or inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    <span>Send Message</span>
                    <Send style={{ width: 16, height: 16 }} />
                  </button>

                  {submitted && (
                    <div className="status-message">
                      <CheckCircle2 style={{ display: 'inline', width: 16, height: 16, marginRight: 8, verticalAlign: 'middle' }} />
                      Message sent successfully! Thank you for reaching out.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Karunesh. Built with Next.js & ready for Vercel deployment.</p>
        </div>
      </footer>
    </main>
  );
}
