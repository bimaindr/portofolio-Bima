import { useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  BrainCircuit,
  Code2,
  Menu,
  Monitor,
  X,
} from 'lucide-react';

const navItems = [
  { label: 'Skills', href: '#skills' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Curriculum Vitae', href: '#cv' },
  { label: 'Contact', href: '#contact' },
];

const skills = [
  {
    icon: Code2,
    title: 'Data Science & Machine Learning',
    description:
      'Performing data preprocessing, feature engineering, and building predictive models. Experienced with Python libraries like Pandas, Scikit-learn, TensorFlow, and PyTorch to extract insights and solve complex problems.',
  },
  {
    icon: Monitor,
    title: 'Web & Backend Development',
    description:
      'Creating interactive data dashboards and robust APIs using Streamlit, FastAPI, and Flask. Managing relational databases including PostgreSQL, MySQL, and Supabase to support dependable web systems.',
  },
  {
    icon: BrainCircuit,
    title: 'Generative AI & MLOps',
    description:
      'Building intelligent RAG systems and LLM agents using LangChain and Google Gemini. Orchestrating model deployment and CI/CD pipelines via MLflow, Docker, and GitHub Actions.',
  },
];

const projects = [
  {
    title: 'Generative AI Web App',
    stack: 'Python / LangChain / Streamlit',
    summary: 'Web application integrating LangChain tools and Google Gemini models.',
    image: 'project-genai-rag.png',
    tone: 'genai-rag',
    number: '01',
    github: 'github.com/bimaindr/GenAi-app',
    href: 'https://github.com/bimaindr/GenAi-app',
  },
  {
    title: 'Learning Buddy',
    stack: 'Python / ML / Recommendation System',
    summary: 'An intelligent personalized study recommendation application designed to guide learners’ paths.',
    image: 'project-learning-buddy.png',
    tone: 'learning-buddy',
    number: '02',
    github: 'github.com/bimaindr/dicoding-project',
    href: 'https://github.com/bimaindr/dicoding-project',
  },
  {
    title: 'Employee Attrition Analytics',
    stack: 'SQL / Metabase / ML',
    summary: 'Data preprocessing and Metabase dashboards for monitoring attrition.',
    image: 'project-employee-attrition.png',
    tone: 'employee-attrition',
    number: '03',
    github: 'github.com/bimaindr/employee-attrition',
    href: 'https://github.com/bimaindr/employee-attrition',
  },
  {
    title: 'Bike-Sharing Analytics (2011 - 2012)',
    stack: 'Python / Pandas / Streamlit',
    summary: 'Interactive data analysis dashboard visualizing usage trends from 2011 to 2012.',
    image: 'project-bike-sharing.png',
    tone: 'bike-sharing',
    number: '04',
    github: 'github.com/bimaindr/Bike-sharing-analysis',
    href: 'https://github.com/bimaindr/Bike-sharing-analysis',
  },
  {
    title: 'Acne Image Classification',
    stack: 'Python / TensorFlow / EfficientNetB0',
    summary: 'CNN model utilizing EfficientNetB0 for facial image classification.',
    image: 'project-acne-classification.png',
    tone: 'acne-classification',
    number: '05',
    github: 'github.com/bimaindr/klasifikasi-jerawat',
    href: 'https://github.com/bimaindr/klasifikasi-jerawat',
  },
];

const timeline = [
  {
    date: '2022 — 2026',
    title: 'Gunadarma University',
    description:
      'Pursued Informatics Engineering with a GPA of 3.58, building a solid foundation and earning the BNSP Data Madya certification.',
  },
  {
    date: 'Aug 2025 — Jan 2026',
    title: 'ASAH Dicoding Bootcamp',
    description:
      'Participated in the independent study program focusing on machine learning cohorts.',
  },
  {
    date: 'Recently',
    title: 'Graduated',
    description:
      'Completed my degree with a final thesis on acne image classification using EfficientNetB0.',
  },
  {
    date: 'Looking ahead',
    title: 'Building the future',
    description:
      'Ready to step into the industry and build intelligent systems.',
  },
];

const cvCategories = [
  {
    label: '01',
    title: 'Profile',
    description: 'Recent Information & Computer Systems graduate with a practical, curious approach to technology.',
  },
  {
    label: '02',
    title: 'Highlights of Qualifications',
    description: 'Responsive web development, interface thinking and a growing foundation in software systems.',
  },
  {
    label: '03',
    title: 'Education',
    description: 'Information & Computer Systems — recently completed.',
  },
  {
    label: '04',
    title: 'Additional Courses & Training',
    description: 'Independent learning in modern web technologies, mobile development and accessible design.',
  },
  {
    label: '05',
    title: 'Work Experience',
    description: 'Project-based practice building useful, well-considered digital experiences.',
  },
  {
    label: '06',
    title: 'Extracurricular Activities',
    description: 'Personal projects, technology exploration and learning by making.',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio" id="top">
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" onClick={closeMenu} aria-label="Bima Indra Sakti, home">
            <span className="brand-mark" aria-hidden="true">BI</span>
            <span>Bima Indra Sakti</span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                className={item.href === '#contact' ? 'header-cta' : undefined}
                href={item.href}
                key={item.href}
                data-testid={`link-nav-${item.label.toLowerCase().replaceAll(' ', '-')}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
            data-testid="button-toggle-navigation"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          {menuOpen && (
            <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <a href={item.href} key={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-image" role="img" aria-label="Editorial portrait of Bima Indra Sakti" />
          <div className="hero-inner">
            <div className="hero-copy">
              <span className="eyebrow">Curious by nature. Building for people.</span>
              <p className="hero-name">Bima Indra Sakti</p>
              <h1 id="hero-title">Information &amp; Computer Systems</h1>
              <p className="hero-description">
                I’m passionate about integrating deep learning and Generative AI into practical,
                dependable web platforms—one impactful project at a time.
              </p>
              <div className="hero-actions">
                <a className="button-primary" href="#skills">
                  Tell me more <ArrowDown size={14} />
                </a>
                <a className="text-link" href="#portfolio">
                  Explore my work <ArrowRight size={15} />
                </a>
              </div>
            </div>
            <div className="hero-stamp">
              <span className="status-dot" aria-hidden="true" />
              Open to work &amp; partnerships
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills" aria-labelledby="skills-title">
          <div className="section-inner">
            <div className="section-heading">
              <div>
                <span className="section-kicker">Core expertise</span>
                <h2 className="section-title" id="skills-title">Skills</h2>
                <p className="section-intro">
                  Building intelligent systems through data pipelines and modern web frameworks.
                </p>
              </div>
              <p className="section-note">
                A specialized toolkit focused on AI integration and scalable deployment.
              </p>
            </div>
            <div className="skills-grid">
              {skills.map(({ icon: Icon, title, description }, index) => (
                <article className="skill-card" key={title} data-testid={`card-skill-${index + 1}`}>
                  <span className="skill-index">0{index + 1}</span>
                  <div className="skill-icon"><Icon size={20} strokeWidth={1.8} /></div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
            <div className="skills-foot">APPLYING KNOWLEDGE, BUILDING EVERY DAY</div>
          </div>
        </section>

        <section className="section portfolio-section" id="portfolio" aria-labelledby="portfolio-title">
          <div className="section-inner">
            <div className="section-heading">
              <div>
                <span className="section-kicker">Selected practice</span>
                <h2 className="section-title" id="portfolio-title">Portfolio</h2>
                <p className="section-intro">A collection of projects I’ve worked on.</p>
              </div>
              <p className="section-note">Small ideas, shaped into real interfaces.</p>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <a
                  className="project-card"
                  key={project.number}
                  data-testid={`card-project-${project.number}`}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={`project-visual ${project.tone}`}>
                    <img
                      className="project-thumbnail"
                      src={`${import.meta.env.BASE_URL}${project.image}`}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="project-info">
                    <div className="project-info-heading">
                      <h3>{project.title}</h3>
                      <span className="project-number">{project.number}</span>
                    </div>
                    <p className="project-stack">{project.stack}</p>
                    <p className="project-summary">{project.summary}</p>
                    <span className="project-link">{project.github} ↗</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-title">
          <div className="section-inner about-layout">
            <div className="about-copy">
              <div className="section-heading">
                <div>
                  <span className="section-kicker">A little context</span>
                  <h2 className="section-title" id="about-title">About</h2>
                </div>
              </div>
              <div className="about-body">
                <p>
                  I am an Informatics Engineering graduate from Gunadarma University with a
                  strong interest in Machine Learning and AI-driven solutions. I recently
                  completed the Asah program led by Dicoding. I enjoy
                  building Python projects, performing data exploration, and developing AI
                  models like image classification. I am open to career opportunities and
                  collaborations.
                </p>
              </div>
              <div className="about-facts">
                <div className="fact"><strong>03</strong><span>Areas of focus</span></div>
                <div className="fact"><strong>05</strong><span>Selected projects</span></div>
                <div className="fact"><strong>Always</strong><span>Learning mindset</span></div>
              </div>
            </div>
            <div className="timeline-column">
              <h3 className="timeline-heading">The path so far</h3>
              <div className="timeline">
                {timeline.map((item) => (
                  <article className="timeline-item" key={item.date}>
                    <span className="timeline-date">{item.date}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section cv-section" id="cv" aria-labelledby="cv-title">
          <div className="section-inner">
            <div className="cv-top">
              <div>
                <span className="section-kicker">Experience at a glance</span>
                <h2 className="section-title" id="cv-title">Curriculum Vitae</h2>
                <p className="section-intro">
                  The foundations, interests and experience I bring to the next opportunity.
                </p>
              </div>
              <p className="section-note">A snapshot of my developing practice.</p>
            </div>
            <div className="cv-grid">
              {cvCategories.map((category) => (
                <article className="cv-item" key={category.label} data-testid={`cv-category-${category.label}`}>
                  <span>{category.label} / CV</span>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="contact-section" id="contact">
        <div className="contact-inner">
          <div className="contact-grid">
            <div>
              <span className="section-kicker">Have something in mind?</span>
              <h2 className="contact-title">Let’s make the next thing useful.</h2>
              <p className="contact-copy">
                I’m always glad to talk about technology, projects and opportunities to learn.
                Send a note and let’s start there.
              </p>
              <div className="contact-actions">
                <a className="button-primary" href="mailto:hello@jamesanderson.dev">
                  Get in touch <ArrowRight size={15} />
                </a>
                <a className="contact-email" href="mailto:hello@jamesanderson.dev">
                  hello@jamesanderson.dev
                </a>
              </div>
            </div>
            <aside className="contact-card">
              <span className="contact-card-label">A good place to begin</span>
              <strong>Open to conversations</strong>
              <p>Project collaborations, entry-level opportunities, or a thoughtful chat about building for the web.</p>
            </aside>
          </div>
          <div className="footer">
            <span>© {new Date().getFullYear()} Bima Indra Sakti</span>
            <div className="footer-links">
              <a href="#skills">Skills</a>
              <a href="#portfolio">Work</a>
              <a href="mailto:hello@jamesanderson.dev">Email</a>
            </div>
            <a className="back-top" href="#top">Back to top <ArrowUp size={13} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
