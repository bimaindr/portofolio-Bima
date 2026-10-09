import "./_group.css";
import "./Experience.css";

const milestones = [
  {
    number: "01",
    title: "Independent Study – Machine Learning Cohort",
    context: "ASAH (Led by Dicoding & Accenture) | August 2025 – January 2026",
    narrative:
      "Studied end-to-end machine learning from EDA and preprocessing to supervised and unsupervised modeling. Explored text and image processing in deep learning, and MLOps monitoring. Collaborated to build the Learning Buddy recommendation system integrated via Flask API.",
    link: {
      label: "View Certificate (BNSP Data Madya) ↗",
      href: "https://drive.google.com/drive/folders/1ujNqFWSdQHObV7ERmgjSbEtMfcN1pGcm?hl=ID",
    },
  },
  {
    number: "02",
    title: "Gunadarma University",
    context: "Informatics Engineering | 2022 – 2026 (GPA: 3.58)",
    narrative:
      "Completed degree with a solid foundation in software engineering. Final thesis focused on acne image classification using EfficientNetB0 architecture.",
  },
];

export function Experience() {
  return (
    <section
      className="section experience-section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="section-inner experience-inner">
        <header className="experience-heading">
          <div className="experience-heading-copy">
            <span className="section-kicker">EXPERIENCE &amp; MILESTONES</span>
            <h2 className="section-title" id="experience-title">
              Experience
            </h2>
            <p className="section-intro">
              Professional journey, independent study, and practical milestones.
            </p>
          </div>
          <span className="experience-index" aria-hidden="true">
            SELECTED
            <br />
            2022—26
          </span>
        </header>

        <ol className="experience-list">
          {milestones.map((milestone) => (
            <li className="experience-entry" key={milestone.number}>
              <span className="experience-number" aria-hidden="true">
                {milestone.number}
              </span>
              <article
                className="experience-content"
                aria-labelledby={`experience-entry-${milestone.number}`}
              >
                <h3 id={`experience-entry-${milestone.number}`}>
                  {milestone.title}
                </h3>
                <p className="experience-context">{milestone.context}</p>
                <p className="experience-narrative">{milestone.narrative}</p>
                {milestone.link && (
                  <a
                    className="experience-certificate"
                    href={milestone.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {milestone.link.label}
                  </a>
                )}
              </article>
              <span className="experience-marker" aria-hidden="true" />
            </li>
          ))}
        </ol>
        <div className="experience-footnote" aria-hidden="true">
          <span>LEARNING THROUGH MAKING</span>
          <span>BEKASI, INDONESIA</span>
        </div>
      </div>
    </section>
  );
}
