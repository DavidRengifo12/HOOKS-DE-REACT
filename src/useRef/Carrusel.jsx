import { useRef } from 'react';

export default function CatFriends() {
  const listRef = useRef(null);

  // Función para desplazar a la imagen en la posición indicada
  function scrollToIndex(index) {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll('li > img')[index];
    imgNode.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  return (
    <>
      <nav>
       
        <button onClick={() => scrollToIndex(0)}>Neo</button>
        <button onClick={() => scrollToIndex(1)}>Millie</button>
        <button onClick={() => scrollToIndex(2)}>Bella</button>
        <button onClick={() => scrollToIndex(3)}>Alex</button>
      </nav>

      <div>
        
        <ul 
          ref={listRef} 
          style={{
            display: 'flex',         
            overflowX: 'auto',       
            listStyle: 'none',       
            padding: 0,              
            margin: 0                
          }}
        >
        
          <li style={{ flexShrink: 0, marginRight: '10px' }}>
            <img
              src="https://placecats.com/neo/300/200"
              alt="Neo"
              style={{ width: '300px', height: '200px' }} 
            />
          </li>

        
          <li style={{ flexShrink: 0, marginRight: '10px' }}>
            <img
              src="https://placecats.com/millie/200/200"
              alt="Millie"
              style={{ width: '200px', height: '200px' }} 
            />
          </li>

          
          <li style={{ flexShrink: 0, marginRight: '10px' }}>
            <img
              src="https://placecats.com/bella/200/200"
              alt="Bella"
              style={{ width: '200px', height: '200px' }}
            />
          </li>

         
          <li style={{ flexShrink: 0 }}>
            <img
              src="https://placecats.com/alex/200/200"
              alt="Alex"
              style={{ width: '200px', height: '200px' }} 
            />
          </li>
        </ul>
      </div>
    </>
  );
}
