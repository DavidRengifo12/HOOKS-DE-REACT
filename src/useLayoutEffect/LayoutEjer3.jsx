import { useLayoutEffect, useRef } from 'react';

function LayoutEjer3() {
  const divRef = useRef(null);

  // Esto se ejecuta ANTES de que el navegador muestre el elemento
  useLayoutEffect(() => {
    if (divRef.current) {
      divRef.current.style.backgroundColor = 'lightgreen';
      console.log('Color cambiado ANTES de mostrarse');
    }
  }, []);

  return (
    <div ref={divRef} style={{ padding: '20px', margin: '20px' }}>
      Este div aparecerá directamente con fondo verde claro (sin parpadeo)
    </div>
  );
}

export default LayoutEjer3;