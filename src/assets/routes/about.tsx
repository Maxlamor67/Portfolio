import '../css/about.css';
import aboutImage from '../images/photo-error.webp';
import { useState } from 'react';

type TimelineItem = {
    type: 'experience' | 'education';
    date: string;
    title: string;
    subtitle?: string;
    description?: string;
    longDescription?: string;
    isPro?: boolean;
    isCurrent?: boolean;
};

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
            Avec une forte curiosité pour les nouvelles technologies, le design ainsi que la mode, 
            je m'efforce de créer des expériences numériques uniques en rapport avec ma personne.
          </p>
          <p>
            Toujours en quête d'apprentissage, je me dois d'être créatif et technique 
            pour donner vie à des projets qui ont du sens.
          </p>
        </div>
        <img src={aboutImage} alt="Maxime Lamorlette" className="about-image" loading="lazy" />
    </div>
  );
}

// Contenu de la page en dessous
export default function About() {
const parcours: TimelineItem[] = [
    {
    type: 'experience',
    date: 'Juin 2020',
    title: 'Stage de troisième',
    subtitle: '2 CAPS Production, Strasbourg',
    description: 'Stage dans l’audiovisuel consistant à réaliser des reportages pour des événements locaux ainsi qu’à effectuer du montage vidéo.',
    longDescription: 'J’ai découvert le monde de la production audiovisuelle et développé mes compétences en montage vidéo et en communication. Une partie de ce stage s’est déroulée au Parlement européen, où j’ai pu observer le fonctionnement de la réalisation de reportages.',
    isPro: true
},
{
    type: 'education',
    date: 'Sept. 2020',
    title: 'Entrée au lycée',
    subtitle: 'Lycée Gymnase Jean-Sturm, Strasbourg',
    description: 'Découverte de l’informatique et des sciences du numérique, avec une passion immédiate pour le développement et la création de projets personnels.',
    longDescription: 'J’ai également appris à travailler en équipe et à gérer mon temps efficacement grâce à de nombreux projets, notamment la création d’un jeu vidéo en groupe.'
},
{
    type: 'experience',
    date: 'Mai 2021',
    title: 'Stage de découverte',
    subtitle: 'iLoos Informatique Strasbourg - HITEKS',
    description: 'Découverte de la vente de matériel informatique et initiation à la maintenance de serveurs, avec une immersion dans le monde professionnel de l’informatique.',
    longDescription: 'J’ai découvert le monde de l’informatique professionnelle et développé mes compétences en maintenance et en communication avec les clients. J’ai également été initié à Linux, aux serveurs ainsi qu’à la gestion de bases de données de grande taille.',
    isPro: true
},
{
    type: 'education',
    date: 'Juin 2023',
    title: 'Diplôme du Baccalauréat',
    subtitle: 'Lycée Gymnase Jean-Sturm, Strasbourg',
    description: 'Mention Bien, spécialités Numérique et Sciences Informatiques, Mathématiques et Sciences de l’Ingénieur, avec l’option Maths expertes.',
    longDescription: 'Cette formation m’a permis d’approfondir mes connaissances en informatique, en mathématiques et en algorithmique, notamment grâce au développement d’un jeu vidéo 2D en Python.'
},
{
    type: 'education',
    date: 'Sept. 2023',
    title: 'BUT Informatique — 1ère année',
    subtitle: 'IUT Robert Schuman, Illkirch',
    description: 'Acquisition des bases du développement, de l’algorithmique et des bases de données.',
    longDescription: 'Première immersion dans le développement logiciel avec la programmation orientée objet en C# et Java, l’apprentissage du SQL, de l’algorithmique et des bonnes pratiques de développement. Réalisation de plusieurs projets, dont un Snake en assembleur, un jeu de cartes Pokémon en Java et un projet réseau en C.'
},
{
    type: 'education',
    date: 'Sept. 2024',
    title: 'BUT Informatique — 2ème année',
    subtitle: 'IUT Robert Schuman, Illkirch',
    description: 'Approfondissement du développement à travers des projets collaboratifs et des technologies modernes.',
    longDescription: 'Réalisation d’un jeu sérieux sous Unity, d’une application Android, d’une interface web dynamique ainsi qu’une initiation aux pratiques CI/CD avec GitLab. Cette année a renforcé mes compétences en travail d’équipe et en gestion de projet.'
},
{
    type: 'experience',
    date: 'Avril — Juin 2025',
    title: 'Stage en entreprise',
    subtitle: 'Thuria, Schiltigheim (Espace Européen de l’Entreprise)',
    description: 'Développement backend en PHP et JavaScript, débogage et intégration d’API.',
    longDescription: 'J’ai participé au développement d’applications web professionnelles en PHP et JavaScript, au débogage de fonctionnalités existantes ainsi qu’au câblage d’API. Cette expérience m’a permis d’améliorer mes compétences techniques tout en découvrant les méthodes de travail en entreprise.',
    isPro: true
},
{
    type: 'education',
    date: 'Sept. 2025 →',
    title: 'BUT Informatique — 3ème année',
    subtitle: 'IUT Robert Schuman, Illkirch',
    description: 'Spécialisation en développement logiciel et réalisation de projets d’envergure en alternance.',
    longDescription: 'Conception d’une application mobile et d’un logiciel web interconnectés, avec une approche centrée sur l’architecture logicielle, le développement en équipe et la gestion de projets professionnels.',
    isCurrent: true
},
{
    type: 'experience',
    date: 'Sept. 2025 →',
    title: 'Alternance',
    subtitle: 'AFI-ESCA, Strasbourg',
    description: 'Développement backend en .NET, WINDEV et SQL pour un logiciel de gestion métier.',
    longDescription: 'Je participe au développement et à l’amélioration continue d’un logiciel utilisé par les gestionnaires en assurance. Cette alternance me permet d’approfondir mes compétences en .NET, WINDEV, SQL, débogage, maintenance et développement de fonctionnalités dans un environnement professionnel.',
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
                <TimelineWithModal items={parcours} />
    </div>
  );
}

function TimelineWithModal({ items }: { items: TimelineItem[] }) {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    function toggleExpand(i: number) {
        setExpandedIndex((prev) => (prev === i ? null : i));
    }

    return (
        <div className="timeline">
            <div className="timeline-line"></div>
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`timeline-item ${item.type} ${item.isCurrent ? 'current' : ''}`}
                >
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">{item.date}</div>
                    <div
                        className="timeline-content"
                        role="button"
                        tabIndex={0}
                        onClick={() => toggleExpand(index)}
                        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleExpand(index)}
                    >
                        <div className="timeline-header">
                            <h3>{item.title}</h3>
                            {item.isPro && <span className="pro-badge">Pro</span>}
                            <button
                                className={`expand-toggle ${expandedIndex === index ? 'open' : ''}`}
                                onClick={(e) => { e.stopPropagation(); toggleExpand(index); }}
                                aria-expanded={expandedIndex === index}
                                aria-controls={`expand-${index}`}
                                title={expandedIndex === index ? 'Réduire' : 'Développer'}
                            >
                                <span className="chev" aria-hidden="true">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <p className="timeline-subtitle">{item.subtitle}</p>
                        <p className="timeline-description">{item.description}</p>

                        {expandedIndex === index && (
                            <div id={`expand-${index}`} className="expanded-box">
                                <p>{item.longDescription || item.description}</p>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
