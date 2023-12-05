import React, { useState, useEffect } from 'react';

function ResponsiveComponent() {


  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700); // Adjust the pixel value as needed
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile && (
        <nav></nav>
      )}
    </div>
  );
};

export default ResponsiveComponent;
