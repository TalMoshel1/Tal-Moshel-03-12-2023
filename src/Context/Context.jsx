import { useEffect, useState } from "react";

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth)
      setIsMobile(window.innerWidth < 700); // Adjust the pixel value as needed
    };

    handleResize();


    window.addEventListener('resize', handleResize);

    return () => {
        console.log('closed')
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
}