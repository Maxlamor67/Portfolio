import photoshopImage from '../images/photo-photoshop.png';
import pocketImage from '../images/photo-pocket.png';
import filmoraImage from '../images/photo-filmora.jpg';
import unityImage from '../images/photo-unity.png';
import aseppriteImage from '../images/photo-aseprite.png';

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
    { name: 'C#', level: 85 },
    { name: 'SQL', level: 85 },
    { name: 'Java', level: 55 },
    { name: 'React', level: 50 },
    { name: 'Python', level: 55 },
    { name: 'C', level: 60 },
    { name: 'HTML / CSS', level: 65 },
    { name: 'WinDev', level: 45 }
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
                  <img src={skill.image} alt={skill.name} className={`skill-image ${skill.imageClass || ''}`} />
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
            <div key={skill.name} className="programming-skill-item">
              <span className="skill-name">{skill.name}</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
              </div>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
