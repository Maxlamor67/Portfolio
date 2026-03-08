import { useState, useRef, useCallback } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
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
