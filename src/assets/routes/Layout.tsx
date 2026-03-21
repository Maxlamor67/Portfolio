import { useState, useRef, useCallback, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import '../css/layout.css';
import Projects, { ProjectsPanel } from './projects';
import About, { AboutPanel } from './about';
import Skills, { SkillsPanel } from './skills';
import Contact, { ContactPanel } from './contact';

const panelComponents: Record<string, React.ComponentType> = {
  '/': ProjectsPanel,
  '/projects': ProjectsPanel,
  '/about': AboutPanel,
  '/skills': SkillsPanel,
  '/contact': ContactPanel,
};

const pageComponents: Record<string, React.ComponentType> = {
  '/': Projects,
  '/projects': Projects,
  '/about': About,
  '/skills': Skills,
  '/contact': Contact,
};

const seoMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Maxime Lamorlette | Portfolio Developpeur Web',
    description: 'Portfolio de Maxime Lamorlette: projets, competences et contact.',
  },
  '/projects': {
    title: 'Projets | Maxime Lamorlette',
    description: 'Decouvrez les projets web realises par Maxime Lamorlette.',
  },
  '/about': {
    title: 'A Propos | Maxime Lamorlette',
    description: 'Presentation de Maxime Lamorlette, developpeur web.',
  },
  '/skills': {
    title: 'Competences | Maxime Lamorlette',
    description: 'Les competences techniques de Maxime Lamorlette en developpement web.',
  },
  '/contact': {
    title: 'Contact | Maxime Lamorlette',
    description: 'Contactez Maxime Lamorlette pour vos opportunites et projets.',
  },
};

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [displayedPath, setDisplayedPath] = useState<string>(location.pathname);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'in' | 'out' | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, targetPath: string) => {
    e.preventDefault();
    
    if (targetPath === displayedPath || isAnimating) return;

    setIsAnimating(true);
    setSlideDirection('out');

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setDisplayedPath(targetPath);
      setSlideDirection('in');
      navigate(targetPath);

      timeoutRef.current = setTimeout(() => {
        setIsAnimating(false);
        setSlideDirection(null);
      }, 300);
    }, 300);
  }, [displayedPath, isAnimating, navigate]);

  const CurrentPanel = panelComponents[displayedPath] || ProjectsPanel;
  const CurrentPage = pageComponents[displayedPath] || Projects;

  useEffect(() => {
    const currentMeta = seoMeta[location.pathname] || seoMeta['/'];
    document.title = currentMeta.title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute('content', currentMeta.description);
    }

    const canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
      const pathname = location.pathname === '/' ? '' : location.pathname;
      canonicalTag.setAttribute('href', `https://maxime-lamorlette.vercel.app${pathname}`);
    }
  }, [location.pathname]);

  return (
    <div className="home-group">
      <h1 className="home-title">Maxime Lamorlette</h1>
      <nav className="button-group">
        <NavLink 
          to="/projects" 
          className={({ isActive }) => `nav-link ${isActive || location.pathname === '/' ? 'active' : ''}`}
          onClick={(e) => handleNavClick(e, '/projects')}
        >
          Projets
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          onClick={(e) => handleNavClick(e, '/about')}
        >
          À Propos
        </NavLink>
        <NavLink 
          to="/skills" 
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          onClick={(e) => handleNavClick(e, '/skills')}
        >
          Compétences
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          onClick={(e) => handleNavClick(e, '/contact')}
        >
          Contact
        </NavLink>
      </nav>
      <div className="content-panel-container">
        <div className={`content-panel ${slideDirection === 'out' ? 'slide-out-left' : ''} ${slideDirection === 'in' ? 'slide-in-right' : ''}`}>
          <CurrentPanel />
        </div>
      </div>
      <div className="page-section">
        <CurrentPage />
      </div>
    </div>
  );
}
