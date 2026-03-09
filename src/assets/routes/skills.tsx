import '../css/skills.css';
import photoshopImage from '../images/photo-photoshop.webp';
import pocketImage from '../images/photo-pocket.webp';
import filmoraImage from '../images/photo-filmora.webp';
import unityImage from '../images/photo-unity.webp';
import aseppriteImage from '../images/photo-aseprite.webp';

// Contenu du panel animé
export function SkillsPanel() {
  return (
    <div className="panel-content-vertical">
        <div className="vertical-title">
          <span className="vertical-title-top">Compé-</span>
          <span className="vertical-title-bottom">tences</span>
        </div>
        <div className="panel-content">
          <p className="skills-quote">"Tout le monde est un génie. Mais si vous jugez un poisson sur sa capacité à grimper à un arbre, il passera sa vie à croire qu'il est stupide."</p>
          <p className="skills-author">— Albert Einstein</p>
        </div>
    </div>
  );
}

// Contenu de la page en dessous
export default function Skills() {
  const creativeSkills = [
    { name: 'Photoshop', description: 'Retouche photo et création graphique', image: photoshopImage, imageClass: '' },
    { name: 'Filmora', description: 'Montage vidéo et effets visuels', image: filmoraImage, imageClass: '' },
    { name: 'Pocket', description: 'Illustration et dessins numériques', image: pocketImage, imageClass: 'skill-image-pocket' },
    { name: 'Unity', description: 'Création de jeux vidéos en tout genre', image: unityImage, imageClass: '' },
    { name: 'aseprite', description: 'Illustration 2D pour jeux', image: aseppriteImage, imageClass: 'skill-image-pocket' }
  ];

  const programmingSkills = [
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg', doc: 'https://learn.microsoft.com/dotnet/csharp/' },
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg', doc: 'https://dev.mysql.com/doc/' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', doc: 'https://docs.oracle.com/en/java/' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', doc: 'https://react.dev/' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', doc: 'https://docs.python.org/3/' },
    { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg', doc: 'https://en.cppreference.com/w/c' },
    { name: 'HTML / CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', doc: 'https://developer.mozilla.org/docs/Web/HTML' },
    { name: 'WinDev', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg', doc: 'https://doc.pcsoft.fr/' }
  ];

  return (
    <div className="skills-page">
      <section className="skills-section">
        <h3 className="skills-section-title">Création & Design</h3>
        <div className="creative-skills-grid">
          {creativeSkills.map((skill) => (
            <div key={skill.name} className="creative-skill-card">
              {skill.image && (
                <div className="skill-image-container">
                  <img src={skill.image} alt={skill.name} className={`skill-image ${skill.imageClass || ''}`} loading="lazy" />
                </div>
              )}
              <div className="skill-info">
                <h4>{skill.name}</h4>
                <p>{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="skills-section">
        <h3 className="skills-section-title">Programmation</h3>
        <div className="programming-skills-grid">
          {programmingSkills.map((skill) => (
            <a
              key={skill.name}
              href={skill.doc}
              target="_blank"
              rel="noopener noreferrer"
              className="programming-skill-card"
            >
              <img src={skill.icon} alt={skill.name} className="programming-skill-icon" />
              <span className="programming-skill-name">{skill.name}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
