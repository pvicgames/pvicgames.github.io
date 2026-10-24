import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const previous = useRef(pathname);

  useEffect(() => {
    // opening/closing the artiuspedia popup keeps the page where it was
    const popup = (path: string) => path.startsWith("/artius/artiuspedia");
    if (!popup(pathname) && !popup(previous.current)) window.scrollTo(0, 0);
    previous.current = pathname;
  }, [pathname]);

  return null;
};

export default ScrollToTop;