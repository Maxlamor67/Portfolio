import type { CSSProperties } from 'react';
import '../css/skills.css';
import photoshopImage from '../images/photo-photoshop.webp';
import pocketImage from '../images/photo-pocket.webp';
import filmoraImage from '../images/photo-filmora.webp';
import unityImage from '../images/photo-unity.webp';
import asepriteImage from '../images/photo-aseprite.webp';

// Contenu du panel animé
export function SkillsPanel() {
  return (
    <div className="panel-content-vertical">
        <div className="vertical-title">
          <span className="vertical-title-top">Com-</span>
          <span className="vertical-title-bottom">pétences</span>
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
  const visualSkills = [
    { name: 'Photoshop', description: 'Retouche, montage et composition visuelle', image: photoshopImage, imageClass: '' },
    { name: 'Filmora', description: 'Montage vidéo rapide et habillage', image: filmoraImage, imageClass: '' },
    { name: 'Pocket', description: 'Croquis, illustration et dessin numérique', image: pocketImage, imageClass: 'skill-image-pocket' },
    { name: 'Unity', description: 'Prototypage et expériences interactives', image: unityImage, imageClass: '' },
    { name: 'Aseprite', description: 'Sprites et animation 2D', image: asepriteImage, imageClass: 'skill-image-pocket' },
    { name: 'Blender', description: "Modélisation 3D et rendu d'objets", image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg', imageClass: 'skill-image-blender', cardClass: 'creative-skill-card-blender', containerClass: 'skill-image-container-blender', isExternalUrl: true }
  ];

  // Conservation stricte de tes anneaux d'origine (0 = inner, 1 = middle, 2 = outer)
  const programmingSkills = [
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', doc: 'https://www.typescriptlang.org/docs/', ring: 0 },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', doc: 'https://developer.mozilla.org/docs/Web/JavaScript', ring: 0 },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', doc: 'https://react.dev/', ring: 0 },
    { name: 'NestJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg', doc: 'https://docs.nestjs.com/', ring: 0 },
    { name: 'Prisma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg', doc: 'https://www.prisma.io/docs', ring: 1 },
    { name: 'Android', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg', doc: 'https://developer.android.com/docs', ring: 1 },
    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg', doc: 'https://laravel.com/docs', ring: 1 },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg', doc: 'https://www.php.net/docs.php', ring: 1 },
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', doc: 'https://dev.mysql.com/doc/', ring: 1 },
    { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg', doc: 'https://en.cppreference.com/w/c', ring: 2 },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', doc: 'https://docs.oracle.com/en/java/', ring: 2 },
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg', doc: 'https://learn.microsoft.com/dotnet/csharp/', ring: 2 },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', doc: 'https://docs.python.org/3/', ring: 2 },
    { name: 'HTML / CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', doc: 'https://developer.mozilla.org/docs/Web/HTML', ring: 2 },
    { name: 'WinDev', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg', doc: 'https://doc.pcsoft.fr/', ring: 2 },
  ];

  // Conservation stricte de tes rayons et vitesses d'origine
  const rings = [
    { radius: 220, duration: 28, direction: 1 },
    { radius: 320, duration: 42, direction: -1 },
    { radius: 400, duration: 58, direction: 1 },
  ];

  const byRing = [0, 1, 2].map(r => programmingSkills.filter(s => s.ring === r));

  return (
    <div className="skills-page skills-page-modern">
      <section className="skills-section">
        <h3 className="skills-section-title">Création & Design</h3>
        <div className="creative-skills-grid creative-skills-grid-modern creative-skills-grid-full">
          {visualSkills.map((skill) => (
            <article key={skill.name} className={`creative-skill-card creative-skill-card-modern ${skill.cardClass || ''}`}>
              {skill.image && (
                <div className={`skill-image-container skill-image-container-modern ${skill.containerClass || ''}`}>
                  <img src={skill.image} alt={skill.name} className={`skill-image ${skill.imageClass || ''}`} loading="lazy" />
                </div>
              )}
              <div className="skill-info">
                <h4>{skill.name}</h4>
                <p>{skill.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills-section">
        <h3 className="skills-section-title">Programmation</h3>
        <div className="programming-showcase">
          <div className="programming-orbit-stage">
              {/* Rails physiques masqués */}
              <div className="ring ring-inner" />
              <div className="ring ring-mid" />
              <div className="ring ring-outer" />
              
              {/* Orbites d'atome ajoutées et gérées via CSS */}
              <div className="atom-orbit orbit-1" />
              <div className="atom-orbit orbit-2" />
              <div className="atom-orbit orbit-3" />
              
            <div className="programming-orbit-core">
              <span>Dev</span>
              <strong>languages</strong>
            </div>

            {byRing.map((group, ri) => {
              const ring = rings[ri];
              const count = group.length; 
              return group.map((skill, i) => {
                const startDeg = (360 / count) * i;
                return (
                  <div
                    key={skill.name}
                    className="programming-orbit-arm"
                    style={{
                      '--orbit-start': `${startDeg}deg`,
                      '--orbit-dur': `${ring.duration}s`,
                      '--orbit-delay': `${-((startDeg / 360) * ring.duration)}s`,
                      '--orbit-radius': `${ring.radius}px`,
                      '--orbit-dir': ring.direction,
                    } as CSSProperties}
                  >
                    <a
                      href={skill.doc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="programming-orbit-chip"
                      style={{
                        '--counter-start': `${startDeg}deg`,
                        '--counter-dur': `${ring.duration}s`,
                        '--counter-delay': `${-((startDeg / 360) * ring.duration)}s`,
                      } as CSSProperties}
                    >
                      <img src={skill.icon} alt={skill.name} className="programming-skill-icon" loading="lazy" />
                      <span className="programming-orbit-chip-name">{skill.name}</span>
                    </a>
                  </div>
                );
              });
            })}
          </div>
        </div>
      </section>
    </div>
  );
}