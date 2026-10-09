import "./_group.css";

const cvCategories = [
  {
    label: "01",
    title: "Profile",
    description:
      "Recent Information & Computer Systems graduate with a practical, curious approach to technology.",
  },
  {
    label: "02",
    title: "Highlights of Qualifications",
    description:
      "Responsive web development, interface thinking and a growing foundation in software systems.",
  },
  {
    label: "03",
    title: "Education",
    description: "Information & Computer Systems — recently completed.",
  },
  {
    label: "04",
    title: "Additional Courses & Training",
    description:
      "Independent learning in modern web technologies, mobile development and accessible design.",
  },
  {
    label: "05",
    title: "Work Experience",
    description:
      "Project-based practice building useful, well-considered digital experiences.",
  },
  {
    label: "06",
    title: "Extracurricular Activities",
    description:
      "Personal projects, technology exploration and learning by making.",
  },
];

export function Current() {
  return (
    <section
      className="section cv-section"
      id="cv"
      aria-labelledby="cv-title"
    >
      <div className="section-inner">
        <div className="cv-top">
          <div>
            <span className="section-kicker">Experience at a glance</span>
            <h2 className="section-title" id="cv-title">
              Curriculum Vitae
            </h2>
            <p className="section-intro">
              The foundations, interests and experience I bring to the next
              opportunity.
            </p>
          </div>
          <p className="section-note">A snapshot of my developing practice.</p>
        </div>
        <div className="cv-grid">
          {cvCategories.map((category) => (
            <article
              className="cv-item"
              key={category.label}
              data-testid={`cv-category-${category.label}`}
            >
              <span>{category.label} / CV</span>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
