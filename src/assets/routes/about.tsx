import '../css/about.css';
import aboutImage from '../images/photo-error.JPG';

// Contenu du panel animé
export function AboutPanel() {
  return (
    <div className="panel-content-image about-layout">
        <div className="panel-content about-text">
          <h2>About.</h2>
          <p>
            Je suis un développeur français passionné par le monde de l'informatique et tout ce qui y touche.
          </p>
          <p>
            Avec une forte curiosité pour les nouvelles technologies, le designainsi que la mode, 
            je m'efforce de créer des expériences numériques uniques en rapport avec ma personne.
          </p>
          <p>
            Toujours en quête d'apprentissage, je me dois d'être créatif et technique 
            pour donner vie à des projets qui ont du sens.
          </p>
        </div>
        <img src={aboutImage} alt="Maxime Lamorlette" className="about-image" />
    </div>
  );
}

// Contenu de la page en dessous
export default function About() {
const parcours = [
    {
        type: 'experience',
        date: 'Juin 2020',
        title: 'Stage de troisième',
        subtitle: '2 CAPS Production, Strasbourg',
        description: 'Stage dans l\'audiovisuel consistant à créer des reportages pour des événements locaux ainsi que du montage de film',
        isPro: true
    },
    {
        type: 'education',
        date: 'Sept. 2020',
        title: 'Entrée au lycée',
        subtitle: 'Lycée Gymnase Jean-Sturm, Strasbourg',
        description: 'Découverte de l\'informatique et des sciences du numérique, avec une passion immédiate pour le développement et la création de projets personnels'
    },
    {
        type: 'experience',
        date: 'Mai 2021',
        title: 'Stage de découverte',
        subtitle: 'iLoos Informatique Strasbourg - HITEKS',
        description: 'Vente de matériel informatique et initiation à la maintenance serveurs, avec une immersion dans le monde professionnel de l\'informatique',
        isPro: true
    },
    {
        type: 'education',
        date: 'Juin 2023',
        title: 'Diplôme du Baccalauréat',
        subtitle: 'Lycée Gymnase Jean-Sturm, Strasbourg',
        description: 'Mention Bien, spécialité Informatique et Sciences du Numérique, option Mathématiques'
    },
    {
        type: 'education',
        date: 'Sept. 2023',
        title: 'BUT Informatique — 1ère année',
        subtitle: 'IUT Robert Schuman, Illkirch',
        description: 'Découverte des fondamentaux du développement à travers des projets variés et des cours théoriques'
    },
    {
        type: 'education',
        date: 'Sept. 2024',
        title: 'BUT Informatique — 2ème année',
        subtitle: 'IUT Robert Schuman, Illkirch',
        description: 'Approfondissement et projets en équipe à chaque fin de semestre'
    },
    {
        type: 'experience',
        date: 'Avril — Juin 2024',
        title: 'Stage en entreprise',
        subtitle: 'Thuria, Schiltigheim (Espace Européen de l\'Entreprise)',
        description: 'Développement web PHP, découverte du milieu professionnel et de la gestion interne d\'une entreprise',
        isPro: true
    },
    {
        type: 'education',
        date: 'Sept. 2024 →',
        title: 'BUT Informatique — 3ème année',
        subtitle: 'IUT Robert Schuman, Illkirch',
        description: 'Spécialisation et alternance',
        isCurrent: true
    },
    {
        type: 'experience',
        date: 'Sept. 2024 →',
        title: 'Alternance',
        subtitle: 'AFI-ESCA, Strasbourg',
        description: 'Développement .Net et WINDEV d\'un logiciel de gestion pour l\'entreprise, avec une immersion quasi totale dans le monde professionnel',
        isPro: true,
        isCurrent: true
    }
];

  return (
    <div className="parcours-page">
        <div className="parcours-header">
            <h2 className="parcours-title">Mon parcours</h2>
            <p className="parcours-subtitle">De la découverte du code aux projets professionnels, voici les étapes qui m'ont construit. Étant sûr depuis le jeune âge de faire de l'informatique mon métier, j'ai toujours été curieux de découvrir les différentes facettes du développement et de la technologie. Mon parcours reflète cette passion et ma volonté d'apprendre continuellement.</p> 
        </div>
        <div className="timeline">
            <div className="timeline-line"></div>
            {parcours.map((item, index) => (
            <div key={index} className={`timeline-item ${item.type} ${item.isCurrent ? 'current' : ''}`}>
                <div className="timeline-dot"></div>
                    <div className="timeline-date">{item.date}</div>
                    <div className="timeline-content">
                        <div className="timeline-header">
                            <h3>{item.title}</h3>
                            {item.isPro && <span className="pro-badge">Pro</span>}
                        </div>
                        <p className="timeline-subtitle">{item.subtitle}</p>
                        <p className="timeline-description">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}
