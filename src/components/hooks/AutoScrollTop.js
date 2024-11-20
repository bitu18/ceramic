import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function AutoScrollTop() {
    const { pathname } = useLocation(); // pathname changes, which ensures it triggers on every route change.

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when component mounts
    }, [pathname]); // pathname changes, which ensures it triggers on every route change.
    return null;
}
