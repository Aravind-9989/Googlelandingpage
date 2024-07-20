import React, { useState } from 'react';

function Update() {
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseOver = (index) => setHoverIndex(index);
  const handleMouseOut = () => setHoverIndex(null);

  const imageStyles = (index) => ({
    width: index === 3 ? '287px' : '687px',
    height: '350px',
    position: 'relative',
    left: index === 0 ? '-400px' : index === 1 ? '-375px' : index === 2 ? '-345px' : index === 3 ? '-316px' : '-291px',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease, border 0.2s ease, border-radius 0.2s ease',
    transform: hoverIndex === index ? 'scale(1.1) rotate(5deg)' : 'none',
    opacity: hoverIndex === index ? 0.8 : 1,
    boxShadow: hoverIndex === index ? '0 8px 16px rgba(0, 0, 0, 0.3)' : 'none',
    borderRadius: index === 3 && hoverIndex === 3 ? '10px' : '0',
    border: index === 3 && hoverIndex === 3 ? '2px solid rgba(248, 248, 248, 0.8)' : 'none',
    animation: hoverIndex === index ? 'scrollAnimation 1s ease-in-out' : 'none',
  });

  return (
    <>
      <style>
        {`
          @keyframes scrollAnimation {
            0% { transform: translateX(0); }
            50% { transform: translateX(10px); }
            100% { transform: translateX(0); }
          }
        `}
      </style>

      <div>
        <img
          style={{ width: '761px', height: '444px', position: 'relative', left: '-490px', top: '-72px', display: 'inline-block' }}
          src='/images/1.webp'
          alt="Image 1"
        />
        <img
          style={{ width: '220px', height: '424px', display: 'none' }}
          src='/images/2.webp'
          alt="Image 2"
        />
        <img
          style={{ width: '875px', height: '510px', display: 'inline-block', position: 'relative', left: '320px', top: '-400px' }}
          src='/images/3.webp'
          alt="Image 3"
        />
        <img
          style={{ width: '287px', height: '555px', position: 'relative', left: '363px', top: '-580px', boxShadow: '0 0 1.5px 1.5px lightGrey', border: '0.1px solid lightGrey', borderRadius: '20px' }}
          src='/images/4.webp'
          alt="Image 4"
        />
        <img
          style={{ width: '727px', height: '424px', display: 'none' }}
          src='/images/5.webp'
          alt="Image 5"
        />
      </div>

      <div style={{ display: 'flex', marginTop: '-360px', overflow: 'hidden' }}>
        <img
          src='/images/1.webp'
          alt="Image 1"
          style={imageStyles(0)}
          onMouseOver={() => handleMouseOver(0)}
          onMouseOut={handleMouseOut}
        />
        <img
          src='/images/2.webp'
          alt="Image 2"
          style={imageStyles(1)}
          onMouseOver={() => handleMouseOver(1)}
          onMouseOut={handleMouseOut}
        />
        <img
          src='/images/3.webp'
          alt="Image 3"
          style={imageStyles(2)}
          onMouseOver={() => handleMouseOver(2)}
          onMouseOut={handleMouseOut}
        />
        <img
          src='/images/4.webp'
          alt="Image 4"
          style={imageStyles(3)}
          onMouseOver={() => handleMouseOver(3)}
          onMouseOut={handleMouseOut}
        />
        <img
          src='/images/5.webp'
          alt="Image 5"
          style={imageStyles(4)}
          onMouseOver={() => handleMouseOver(4)}
          onMouseOut={handleMouseOut}
        />
      </div>

      <center>
        <h1 style={{ marginTop: '85px' }}>Discover the latest from Chrome</h1>
      </center>
      <div style={{ textAlign: 'center' }}>
        <div style={{ display: 'flex', background: 'lightblue', alignItems: 'center', justifyContent: 'center', border: '2px solid black', borderRadius: '15px', width: '120px', marginLeft: '450px' }}>
          <img
            src="/images/12.png"
            alt="icon"
            style={{ height: '30px', width: '30px', marginRight: '10px', marginBottom: '15px', background: 'lightblue' }}
          />
          <span style={{ fontSize: '18px', color: 'black', background: 'lightblue' }}>updates</span>
        </div>
      </div>
      <h1 style={{ marginLeft: '605px', marginBottom: '25px', position: 'relative', bottom: '50px' }}>from chrome</h1>
    </>
  );
}

export default Update;

