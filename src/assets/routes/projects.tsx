import { useState } from 'react';
import '../css/projects.css';
import presentationImage from '../images/photo-itachi.webp';

// Gallery images
import rayquazaImage from '../images/photo-dessin-rayquaza.webp';
import chequeInstaImage from '../images/photo-cheque-insta.webp';
import candyImage from '../images/photo-candy.webp';
import berserkImage from '../images/photo-berserk.webp';
import astroworldImage from '../images/photo-astroworld.webp';
import aileImage from '../images/photo-aile.webp';
import hollowImage from '../images/photo-hollow-bleu.webp';
import sonicImage from '../images/photo-sonic.webp';
import requinImage from '../images/photo-requin.webp';
import fantominusImage from '../images/photo-fantominus.webp';
import photoAseprite from '../images/photo-aseprite.webp';
import imageT4ecranQR from '../images/image_waiting_room_T4.png';
import photoPortfolio from '../images/photo-projet-portfolio.png';
import photoLabyrinthe from '../images/photo-labyrinthe.png';
import photoPokemon from '../images/photo-jeu-pokemon.png';
import photoNidoggr from '../images/photo-t5.png';


type Project = {
  name: string;
  shortDesc: string;
  description: string;
  features: string[];
  tech: string[];
  link: string;
  image: string | null;
};

// Contenu du panel animé
export function ProjectsPanel() {
  return (
    <div className="panel-content-image">
      <img src={presentationImage} alt="Contact" className="contact-image" loading="lazy" />
      <div className="panel-content">
        <h2>Mes Projets</h2>
        <p>Découvrez mes différents projets et réalisations.</p>
      </div>
    </div>
  );
}

// Contenu de la page en dessous
export default function Projects() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const openLightbox = (image: { src: string; alt: string }) => setLightbox(image);

  const galleryImages = [
    { src: rayquazaImage, alt: 'Dessin Rayquaza' },
    { src: berserkImage, alt: 'Berserk' },
    { src: chequeInstaImage, alt: 'Chèque Instagram' },
    { src: astroworldImage, alt: 'Astroworld' },
    { src: aileImage, alt: 'Aile' },
    { src: candyImage, alt: 'Candy' },
    { src: hollowImage, alt: 'Hollow Knight Bleu' },
    { src: sonicImage, alt: 'Sonic' },
    { src: requinImage, alt: 'Requin' },
    { src: fantominusImage, alt: 'Fantominus' },
    { src: photoAseprite, alt: 'Aseprite' },
  ];

  const githubProjects: Project[] = [
    {
      name: 'Portfolio',
      shortDesc: 'Portfolio personnel construit avec React + TypeScript + Vite.',
      description:
        'Mon portfolio personnel présentant mes projets de développement et ma galerie graphique. Conçu pour vous présenter mes compétences, mes passions et mes réalisations.',
      features: [
        'Galerie graphique de photos-montages et dessins',
        'Panel animé par section',
        'Design responsive mobile / desktop',
        'Chargement lazy des images',
      ],
      tech: ['React', 'TypeScript', 'Vite'],
      link: 'https://github.com/Maxlamor67/Portfolio',
      image: photoPortfolio, // image: portfolioImg
    },
    {
      name: 'Frise-moi ça!',
      shortDesc: 'Projet de cours développé en TypeScript nommé Frise-moi ça.',
      description:
        '"Frise-Moi-ça !" est un jeu web pédagogique où l\'objectif du jeu est de construire une frise historique des services publics en plaçant correctement des cartes dans l\'ordre chronologique.Le premier joueur à atteindre le nombre de points requis gagne la partie.',
      features: [
        'serveur web socket pour le jeu multijoueur',
        'gestion de l\'ordre chronologique des cartes avec son affichage',
        'Drag and drop des cartes pour les placer sur la frise',
        'Gestion de QR code pour rejoindre la partie',
      ],
      tech: ['TypeScript'],
      link: 'https://github.com/Maxlamor67/T4_vrai',
      image: imageT4ecranQR,
    },
    
    {
      name: 'Jeu Labyrinthe',
      shortDesc: 'Jeu de plateau labyrinthe, développé comme application en Java.',
      description:
        'Jeu de plateau Labyrinthe développé en Java avec interface graphique Swing. Le jeu permet à plusieurs joueurs de naviguer dans un labyrinthe généré aléatoirement, en évitant les obstacles et en collectant des objets imposés pour atteindre la sortie.',
      features: [
        'Création d\'UML et diagrammes de classes',
        'Gestion des collisions',
        'Interface graphique Java Swing et plateau fait à la main',
        'possibilité de jouer à plusieurs joueurs',
      ],
      tech: ['Java'],
      link: 'https://github.com/Maxlamor67/Jeu_Labyrinthe',
      image: photoLabyrinthe, // image: labyrintheImg
    },
    {
      name: 'Pokémon TCG',
      shortDesc: 'Jeu de cartes Pokémon développé en Java.',
      description:
        'Simulation d\'un jeu de cartes Pokémon avec mécaniques de combat tour par tour, construction de deck et gestion des statistiques des Pokémon.',
      features: [
        'Combat tour par tour dans le terminal',
        'Système de deck building',
        'Stats et types Pokémon',
        'Gestion des points de vie et attaques',
      ],
      tech: ['Java'],
      link: 'https://github.com/Maxlamor67/Pokemon_Java',
      image: photoPokemon, // image: pokemonImg
    },
    {
      name: 'ZombieSamourai',
      shortDesc: 'Jeu d\'action en cours de développement — Unity / C#.',
      description:
        'Jeu d\'action en cours de développement mettant en scène un samouraï zombi. Développé sous Unity avec des assets personnalisés et un gameplay orienté action.',
      features: [
        'En développement actif',
        'Gameplay action / combat',
        'Assets et animations custom en pixel-art',
        'Moteur Unity 2D',
      ],
      tech: ['Unity', 'C#'],
      link: 'https://github.com/Maxlamor67/ZombieSamourai',
      image: photoAseprite, // image: zombieImg
    },
    {
    name: 'Níðhöggr',
    shortDesc: 'Outil d\'aide à la planification d\'événements sportifs pour l\'Eurométropole de Strasbourg.',
    description:
      'Application composée d\'une partie mobile, d\'un logiciel et d\'un site web connectés par QR code, pour faciliter la logistique et la sécurisation des manifestations sportives en ville. ' +
      'Permet de gérer les équipements (barrières, blocs de béton, etc.), les points d\'intérêt, les plannings des équipes, et l\'export des données (Excel, PDF). ' +
      'Développé en 4 sprints avec authentification, gestion de projets, et cartographie locale.',
    features: [
      'Application mobile (géolocalisation, saisie de points, guidage, scan QR)',
      'Logiciel lourd (cartographie locale, gestion des équipements, export Excel/PDF)',
      'Site web (connexion par QR code, synchronisation des données)',
      'Authentification sécurisée et gestion des utilisateurs/équipes',
      'Planification chronologique des poses/déposes d\'équipements',
      'Génération de plannings par équipe (PDF)',
      'Fonctionnement hors ligne (toutes les ressources locales)',
    ],
    tech: ['Prisma', 'TypeScript', 'React', 'PDF/Excel export','Docker'],
    link: 'https://github.com/Maxlamor67/Nidhoggur', 
    image: photoNidoggr, // image: nidoggrImg
    },
  ];

  
  const renderGalleryImage = (image: { src: string; alt: string }, className: string) => (
    <div className={`gallery-img ${className}`}>
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        role="button"
        tabIndex={0}
        onClick={() => openLightbox(image)}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openLightbox(image)}
      />
      <button className="gallery-expand" onClick={() => openLightbox(image)}>
        Voir en entier
      </button>
    </div>
  );

  return (
    <div className="projects-page">

      {/* ── Section projets dev ── */}
      <section className="dev-projects-section">
  <h3 className="dev-projects-title">Projets de Développement</h3>
  <div className="dev-projects-carousel">
    {/* Flèche gauche (PC uniquement) */}
    <button
      className="dev-projects-nav dev-projects-nav-left"
      onClick={() => {
        const container = document.querySelector('.dev-projects-scroll-container');
        if (container) {
          container.scrollBy({ left: -300, behavior: 'smooth' });
        }
      }}
      aria-label="Défilement vers la gauche"
    >
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      </svg>
    </button>

    {/* Conteneur de défilement */}
    <div className="dev-projects-scroll-container">
      <div className="dev-projects-grid">
        {githubProjects.map((project) => (
          <div
            key={project.name}
            className="dev-project-card"
            onClick={() => setActiveProject(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) =>
              (e.key === 'Enter' || e.key === ' ') && setActiveProject(project)
            }
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.name}
                className="dev-project-img"
                loading="lazy"
              />
            ) : (
              <div className="dev-project-img-placeholder">
                <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </div>
            )}
            <div className="dev-project-body">
              <h4 className="dev-project-name">{project.name}</h4>
              <p className="dev-project-desc">{project.shortDesc}</p>
              <div className="dev-project-tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
              <span className="dev-project-cta">Voir le projet →</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Flèche droite (PC uniquement) */}
    <button
      className="dev-projects-nav dev-projects-nav-right"
      onClick={() => {
        const container = document.querySelector('.dev-projects-scroll-container');
        if (container) {
          container.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }}
      aria-label="Défilement vers la droite"
    >
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
      </svg>
    </button>
  </div>
</section>

      {/* ── Modal projet ── */}
      {activeProject && (
        <div
          className="project-modal-overlay"
          onClick={() => setActiveProject(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeProject.name}
        >
          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="project-modal-close"
              onClick={() => setActiveProject(null)}
              aria-label="Fermer"
            >
              &times;
            </button>

            {/* Image ou placeholder */}
            {activeProject.image ? (
              <img
                src={activeProject.image}
                alt={activeProject.name}
                className="project-modal-img"
                loading="eager"
              />
            ) : (
              <div className="project-modal-img-placeholder">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </div>
            )}

            <div className="project-modal-body">
              <h3 className="project-modal-title">{activeProject.name}</h3>

              <div className="dev-project-tech">
                {activeProject.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>

              <p className="project-modal-desc">{activeProject.description}</p>

              <ul className="project-modal-features">
                {activeProject.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <div className="project-modal-footer">
                <button
                  className="project-modal-btn-close"
                  onClick={() => setActiveProject(null)}
                >
                  Fermer
                </button>
                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-modal-btn-gh"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  Voir sur GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Galerie graphique ── */}
      <h3 className="dev-projects-title">Galerie Graphique</h3>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>&times;</button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="lightbox-image"
            loading="eager"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <div className="gallery-scattered">
        {/* ligne 1: 2 images */}
        <div className="gallery-row row-h-tall">
          {renderGalleryImage(galleryImages[0], 'f2')}
          {renderGalleryImage(galleryImages[1], 'f1')}
        </div>

        {/* ligne 2: 3 images */}
        <div className="gallery-row row-h-short">
          {renderGalleryImage(galleryImages[2], 'f1')}
          {renderGalleryImage(galleryImages[3], 'f1')}
          {renderGalleryImage(galleryImages[4], 'f1')}
        </div>

        {/* ligne 3: 2 images */}
        <div className="gallery-row row-h-mid">
          {renderGalleryImage(galleryImages[5], 'f1')}
          {renderGalleryImage(galleryImages[6], 'f2')}
        </div>

        {/* ligne 4: 3 images */}
        <div className="gallery-row row-h-tall">
          {renderGalleryImage(galleryImages[7], 'f1')}
          {renderGalleryImage(galleryImages[8], 'f1')}
          {renderGalleryImage(galleryImages[9], 'f1')}
        </div>
      </div>
    </div>
  );
}