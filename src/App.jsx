import React, { useState, useEffect, useMemo } from 'react';
import Aurora from './Aurora';
import RubiksCube from './RubiksCube';
import SplashCursor from './SplashCursor'
export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = useMemo(() => ({
    container: {
      position: 'relative',
      width: '100vw',
      minHeight: '100vh',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row', // ✅ Switch layout on mobile
      alignItems: 'center',
      justifyContent: isMobile ? 'center' : 'space-between',
      padding: isMobile ? '6rem 1.5rem 2rem' : '8rem 4rem 4rem',
      boxSizing: 'border-box',
      textAlign: isMobile ? 'center' : 'left',
    },
    liquidEtherContainer: {
      width: '100%',
      height: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 0,
    },
    gradientBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      background: 'black',
    },
    textContainer: {
      position: 'relative',
      zIndex: 2,
      flex: 1,
      marginTop: isMobile ? '2rem' : 0, // ✅ Add space between cube and text
    },
    mainHeading: {
      fontSize: 'clamp(2.5rem, 8vw, 8rem)',
      fontWeight: 700,
      color: 'white',
      margin: 0,
      letterSpacing: 2,
      lineHeight: 1.1,
      fontFamily: "'Abril Fatface', serif",
    },
    subHeading: {
      fontSize: 'clamp(0.9rem, 2vw, 2rem)',
      color: 'white',
      marginTop: '1rem',
      fontFamily: "'Poppins', sans-serif",
    },
    canvasContainer: {
      position: 'relative',
      width: isMobile ? '70vw' : '45vw',
      maxWidth: '600px',
      height: isMobile ? '70vw' : '45vw',
      maxHeight: '600px',
      zIndex: 2,
      flexShrink: 0,
      order: isMobile ? -1 : 1, // ✅ Show cube first on mobile
    },
  }), [isMobile]);

  return (
    
    <div style={styles.container}>

<SplashCursor />

      {/* LiquidEther background */}
      <div style={styles.liquidEtherContainer}>
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Gradient background */}
      <div style={styles.gradientBackground} />

      {/* 3D Cube */}
      <div style={styles.canvasContainer}>
        <RubiksCube />
      </div>

      {/* Text content */}
      <div style={styles.textContainer}>
        <h1 style={styles.mainHeading}>
          TCET ACM<br />SIGAI
        </h1>
        <p style={styles.subHeading}>
          Student's Chapter
        </p>
      </div>
    </div>
  );
}
