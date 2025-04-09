import React, { useLayoutEffect, useRef } from "react";

const Layout1Ejer = () => {
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    if (boxRef.current) {
      boxRef.current.style.width = "300px";
      boxRef.current.style.height = "200px";
      boxRef.current.style.backgroundColor = "skyblue";
    }
  }, []);

  return <div ref={boxRef}>Este div cambia tamaño antes de renderizar</div>;
};

export default Layout1Ejer;