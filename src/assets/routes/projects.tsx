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
  ];

  const githubProjects = [
    {
      name: 'Portfolio',
      description: 'Mon portfolio personnel construit avec React + TypeScript + Vite.',
      tech: ['React', 'TypeScript', 'Vite'],
      link: 'https://github.com/Maxlamor67/Portfolio',
    },
    {
      name: 'T4_vrai',
      description: 'Projet T4 développé en TypeScript.',
      tech: ['TypeScript'],
      link: 'https://github.com/Maxlamor67/T4_vrai',
    },
    {
      name: 'Jeu_Labyrinthe',
      description: 'Jeu de labyrinthe développé en Java.',
      tech: ['Java'],
      link: 'https://github.com/Maxlamor67/Jeu_Labyrinthe',
    },
    {
      name: 'Pokemon_Java',
      description: 'Jeu Pokémon développé en Java.',
      tech: ['Java'],
      link: 'https://github.com/Maxlamor67/Pokemon_Java',
    },
    {
      name: 'ZombieSamourai',
      description: 'Jeu en cours de développement — ZombieSamourai.',
      tech: ['Unity', 'C#'],
      link: 'https://github.com/Maxlamor67/ZombieSamourai',
    },
  ];

  return (
    <div className="projects-page">
        <section className="dev-projects-section">
        <h3 className="dev-projects-title">Projets de Développement</h3>
        <div className="dev-projects-grid">
          {githubProjects.map((project) => (
            <a
              key={project.name}
              className="dev-project-card"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="dev-project-icon">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </div>
              <h4 className="dev-project-name">{project.name}</h4>
              <p className="dev-project-desc">{project.description}</p>
              <div className="dev-project-tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      <h3 className="dev-projects-title">Galerie Graphique</h3>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>&times;</button>
          <img src={lightbox.src} alt={lightbox.alt} className="lightbox-image" loading="eager" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      <div className="gallery-scattered">
        {/* ligne 1: 2 images */}
        <div className="gallery-row row-h-tall">
          <div className="gallery-img f2">
            <img src={galleryImages[0].src} alt={galleryImages[0].alt} loading="lazy" />
            <button className="gallery-expand" onClick={() => setLightbox(galleryImages[0])}>
              Voir en entier
            </button>
          </div>
          <div className="gallery-img f1">
            <img src={galleryImages[1].src} alt={galleryImages[1].alt} loading="lazy" />
            <button className="gallery-expand" onClick={() => setLightbox(galleryImages[1])}>
              Voir en entier
            </button>
          </div>
        </div>

        {/* ligne 2: 3 images */}
        <div className="gallery-row row-h-short">
          <div className="gallery-img f1">
            <img src={galleryImages[2].src} alt={galleryImages[2].alt} loading="lazy" />
            <button className="gallery-expand" onClick={() => setLightbox(galleryImages[2])}>
              Voir en entier
            </button>
          </div>
          <div className="gallery-img f1">
            <img src={galleryImages[3].src} alt={galleryImages[3].alt} loading="lazy" />
            <button className="gallery-expand" onClick={() => setLightbox(galleryImages[3])}>
              Voir en entier
            </button>
          </div>
          <div className="gallery-img f1">
            <img src={galleryImages[4].src} alt={galleryImages[4].alt} loading="lazy" />
            <button className="gallery-expand" onClick={() => setLightbox(galleryImages[4])}>
              Voir en entier
            </button>
          </div>
        </div>

        {/* ligne 3: 2 images */}
        <div className="gallery-row row-h-mid">
          <div className="gallery-img f1">
            <img src={galleryImages[5].src} alt={galleryImages[5].alt} loading="lazy" />
            <button className="gallery-expand" onClick={() => setLightbox(galleryImages[5])}>
              Voir en entier
            </button>
          </div>
          <div className="gallery-img f2">
            <img src={galleryImages[6].src} alt={galleryImages[6].alt} loading="lazy" />
            <button className="gallery-expand" onClick={() => setLightbox(galleryImages[6])}>
              Voir en entier
            </button>
          </div>
        </div>

        {/* ligne 4: 3 images */}
        <div className="gallery-row row-h-tall">
          <div className="gallery-img f1">
            <img src={galleryImages[7].src} alt={galleryImages[7].alt} loading="lazy" />
            <button className="gallery-expand" onClick={() => setLightbox(galleryImages[7])}>
              Voir en entier
            </button>
          </div>
          <div className="gallery-img f1">
            <img src={galleryImages[8].src} alt={galleryImages[8].alt} loading="lazy" />
            <button className="gallery-expand" onClick={() => setLightbox(galleryImages[8])}>
              Voir en entier
            </button>
          </div>
          <div className="gallery-img f1">
            <img src={galleryImages[9].src} alt={galleryImages[9].alt} loading="lazy" />
            <button className="gallery-expand" onClick={() => setLightbox(galleryImages[9])}>
              Voir en entier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
