
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const Portal: React.FC = ({ children }) => {
  const portal = document.getElementById("portal") as HTMLDivElement;
  const el = document.createElement("div");

  useEffect(() => {
    portal.appendChild(el);
    
    return () => {
        portal.removeChild(el);
      }
  }, [portal, el])

  return createPortal(children, el)
};

export default Portal;