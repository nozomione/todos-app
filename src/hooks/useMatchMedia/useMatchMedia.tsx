import { useState, useEffect } from 'react';
const useMatchMedia= (query: string) => {
    const media = window.matchMedia(query);
    const [matches, setMatches] = useState(media.matches);
    const changeHandler = (e: MediaQueryListEvent) => {
        setMatches(e.matches)
    };
    
    useEffect(() => {
        media.addEventListener('change', changeHandler);
        return () => {
            media.removeEventListener('change', changeHandler);
        }
 
    }, [media])

    return matches;
}

export { useMatchMedia };
