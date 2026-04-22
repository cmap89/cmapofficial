'use client';

import { useEffect, useRef } from 'react';

export default function FormCard({
  id,
  scriptSrc,
  title,
  description,
  className
}) {
  const containerRef = useRef(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (scriptLoaded.current || !containerRef.current || !scriptSrc) return;

    const script = document.createElement('script');
    script.src = scriptSrc;
    script.async = true;

    containerRef.current.appendChild(script);
    scriptLoaded.current = true;

    return () => {
      if (containerRef.current?.contains(script)) {
        containerRef.current.removeChild(script);
        scriptLoaded.current = false;
      }
    };
  }, [scriptSrc]);

  return (
    <div className={` form-card ${className}`}>
      <div id={id}
        className="form-desc">
        {title && <h2>{title}</h2>}
        <br />
        {description && <p>{description}</p>}
      </div>
      <div className="main-form" ref={containerRef}></div>
    </div>
  );
}