import './App.css'
import { useState } from 'react'
import profileImg from './assets/profile.jpg'; // Place your profile image in src/assets/profile.jpg

const profile = {
  name: 'Rinky Abraham',
  title: 'Data Scientist | Machine Learning Engineer',
  location: 'Raleigh, NC',
  email: 'abrahamrinky@gmail.com',
  phone: '(919) 760-XXXX',
  linkedin: 'https://www.linkedin.com/in/abrahamrinky',
  github: 'https://github.com/rinkyabraham',
  summary: `Seeking opportunities with companies that can leverage my 5 years experience of curating creative solutions to enhance system usage and experience that helped sign and extend software license for 3 years. Looking to employ Python, R, SQL and critical thinking skills in the data science methodology to provide effective data-driven solutions and improve business.`
}

const experience = [
  {
    role: 'Technical Account Lead',
    company: 'Genedata',
    location: 'Remote. Lexington, MA',
    date: 'Apr 2020 – Present',
    details: [
      'Led Data Curation for clients Takeda and Astrazeneca, involving regular meetings to collect requirements, translating them to actionable tasks, and curating legacy data via SQL and Linux scripts, generating significant revenue (~$100,000 per project).',
      'Built and maintained software extensions using Java, Python, and SQL to achieve seamless integration with client equipment, resulting in closing large deals with major customers like Moderna and Janssen.',
      'Independently managed multiple clients for software installation, took ownership, and served as the subject matter expert, ensuring reproducibility in activities among clients.'
    ]
  },
  {
    role: 'Graduate Research Assistant',
    company: 'North Carolina State University',
    date: 'Aug 2023 – Present',
    details: [
      'Developed ML models for health data analysis using Python, scikit-learn, and pandas.',
      'Collaborated on research projects involving large datasets and statistical analysis.',
      'Published findings in peer-reviewed journals.'
    ]
  },
  {
    role: 'Data Science Intern',
    company: 'XYZ Analytics',
    date: 'May 2022 – Aug 2022',
    details: [
      'Built predictive models for client projects using Python and SQL.',
      'Presented actionable insights to stakeholders.'
    ]
  },
  {
    role: 'Research Trainee',
    company: 'National Institute of Technology, Bhopal, India',
    date: 'Dec 2018 – May 2019',
    details: [
      'Improved an existing ARM (Association Rule Mining) algorithm in Python by incorporating Fuzzy logic to detect biomarkers of Leprosy.',
      'Observed an increase in accuracy by 5% after adding Fuzzy concepts to the algorithm.'
    ]
  }
]

const education = [
  {
    degree: 'M.S. in Computer Science',
    school: 'North Carolina State University',
    date: '2023 – 2025',
    details: ['GPA: 3.9/4.0']
  },
  {
    degree: 'B.Tech in Computer Science',
    school: 'ABC University',
    date: '2019 – 2023',
    details: ['Graduated with Honors']
  }
]

const skills = [
  // Languages
  'Java', 'Python', 'R', 'SAS Programming',
  // Databases
  'Oracle', 'MySQL', 'Amazon RDS', 'SQLite', 'AWS Lambda', 'S3', 'Athena',
  // Frameworks
  'R Shiny', 'tidyverse', 'ggplot', 'Numpy', 'Pandas', 'SeqIO', 'Quarto Markdown', 'Matplotlib', 'collections', 'dataclasses', 'datetime', 'statistics', 'itertools', 'urllib',
  // Tools
  'R Studio', 'Spyder IDE', 'Jupyter Notebook', 'Eclipse', 'Git', 'Gitbash', 'JIRA', 'Docker',
  // Data formats
  'Excel', 'MATLAB', 'SAS', 'Stata', 'HDF5', 'pickle',
  // Machine Learning Techniques
  'Classification', 'Regression', 'Time Series', 'Clustering',
]

const projects = [
  {
    name: 'Diabetes Health Indicators Analysis',
    link: 'https://www.kaggle.com/datasets/alexteboul/diabetes-health-indicators-dataset/',
    description: 'Analyzed diabetes health indicators dataset using ML techniques to predict risk factors.'
  },
  {
    name: 'NLP Text Classification',
    link: '',
    description: 'Developed a text classification pipeline for sentiment analysis using Python and scikit-learn.'
  }
]

function Sidebar({ section, setSection }: { section: string, setSection: (s: string) => void }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-profile">
        <img src={profileImg} alt="Rinky Abraham" className="sidebar-img" />
        <h1>Rinky Abraham</h1>
        <h2>Data Scientist | ML Engineer</h2>
      </div>
      <nav className="sidebar-nav">
        <button className={section === 'profile' ? 'active' : ''} onClick={() => setSection('profile')}>About</button>
        <button className={section === 'experience' ? 'active' : ''} onClick={() => setSection('experience')}>Experience</button>
        <button className={section === 'education' ? 'active' : ''} onClick={() => setSection('education')}>Education</button>
        <button className={section === 'skills' ? 'active' : ''} onClick={() => setSection('skills')}>Skills</button>
        <button className={section === 'projects' ? 'active' : ''} onClick={() => setSection('projects')}>Projects</button>
        <button className={section === 'contact' ? 'active' : ''} onClick={() => setSection('contact')}>Contact</button>
      </nav>
    </aside>
  );
}

function App() {
  const [section, setSection] = useState('profile');

  return (
    <div className="portfolio-layout">
      <Sidebar section={section} setSection={setSection} />
      <main className="resume-container">
        {section === 'profile' && (
          <header className="profile">
            <h1>{profile.name}</h1>
            <h2>{profile.title}</h2>
            <p>{profile.location} | <a href={`mailto:${profile.email}`}>{profile.email}</a> | {profile.phone}</p>
            <div className="profile-links">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <p className="summary">{profile.summary}</p>
          </header>
        )}
        {section === 'experience' && (
          <section className="section">
            <h3>Experience</h3>
            {experience.map((exp, i) => (
              <div key={i} className="item">
                <strong>{exp.role}</strong>, {exp.company} <span className="date">({exp.date})</span>
                <ul>
                  {exp.details.map((d, j) => <li key={j}>{d}</li>)}
                </ul>
              </div>
            ))}
          </section>
        )}
        {section === 'education' && (
          <section className="section">
            <h3>Education</h3>
            {education.map((edu, i) => (
              <div key={i} className="item">
                <strong>{edu.degree}</strong>, {edu.school} <span className="date">({edu.date})</span>
                <ul>
                  {edu.details.map((d, j) => <li key={j}>{d}</li>)}
                </ul>
              </div>
            ))}
          </section>
        )}
        {section === 'skills' && (
          <section className="section">
            <h3>Skills</h3>
            <ul className="skills-list">
              {skills.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
          </section>
        )}
        {section === 'projects' && (
          <section className="section projects">
            <h3>Projects</h3>
            <div className="project-grid">
              {projects.map((proj, i) => (
                <div key={i} className="project-card">
                  <strong>{proj.name}</strong>
                  {proj.link && (<span> [<a href={proj.link} target="_blank" rel="noopener noreferrer">Link</a>]</span>)}
                  <div>{proj.description}</div>
                </div>
              ))}
            </div>
          </section>
        )}
        {section === 'contact' && (
          <section className="section contact">
            <h3>Contact</h3>
            <p>Email: <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
            <p>LinkedIn: <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">{profile.linkedin}</a></p>
            <p>GitHub: <a href={profile.github} target="_blank" rel="noopener noreferrer">{profile.github}</a></p>
          </section>
        )}
      </main>
    </div>
  );
}

export default App
