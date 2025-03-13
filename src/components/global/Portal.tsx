import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: React.ReactNode; // Define the type for children
}

const Portal: React.FC<PortalProps> = ({ children }) => {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Create a new div element for the portal
    const element = document.createElement("div");
    document.body.appendChild(element);
    setPortalElement(element);

    // Cleanup: Remove the portal element when the component unmounts
    return () => {
      document.body.removeChild(element);
    };
  }, []);

  // Render the children into the portal element
  if (!portalElement) return null;
  return createPortal(children, portalElement);
};

export default Portal;