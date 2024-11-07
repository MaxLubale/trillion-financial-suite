import * as React from "react";
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';



// Video Component with Inline CSS
function VideoComponent({ src, className }) {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      webkit-playsinline
      className={className}
      style={{
        width: '100%',
        maxWidth: '600px', // Set a maximum width for responsive layout
        borderRadius: '8px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.5)',
      }}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

// TextBlock Component with Inline CSS
function TextBlock({ children }) {
  return (
    <div
      style={{
        marginTop: '5rem',
        fontSize: '1.8rem',
        color: '#ffffff',
        maxWidth: '50%',
      }}
    >
      {children}
    </div>
  );
}

// Main Component with Inline CSS
function Blokchain() {
  const navigate = useHistory();
  const isSignedIn = !!localStorage.getItem('accessToken');

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    navigate('/');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap', paddingRight: '20px' }}>
        <div style={{ fontWeight: 'bold', fontSize: '2.5rem', display: 'flex', flexDirection: 'column' }}>
          <header style={{ paddingLeft: '1.5rem', marginTop: '1.5rem', backgroundImage: 'linear-gradient(to right, purple, white)', backgroundClip: 'text', color: 'transparent' }}>
            <Link to="/" style={{ fontSize: '2.5rem', fontWeight: '600', lineHeight: 'tight' }}>
              NEO TRILLI AO
            </Link>
          </header>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 20px' }}>
        <header style={{ paddingLeft: '1.5rem', marginTop: '2rem', backgroundImage: 'linear-gradient(to right, purple, white)', backgroundClip: 'text', color: 'transparent' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '600' }}>3D BLOKCHAIN - BIODIGITAL SUPREMACY</h1>
        </header>

        <main style={{ marginTop: '5rem', width: '100%' }}>
  <section 
    style={{ 
      display: 'flex', 
      flexDirection: 'row', // side-by-side layout
      alignItems: 'center', 
      gap: '30px', 
      flexWrap: 'wrap' 
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%' }}>
  <VideoComponent 
    src="https://trillion-funding-fqgv.onrender.com/uploads/blokchain.mp4" 
    alt="3D BLOKCHAIN - BIODIGITAL SUPREMACY" 
    style={{ 
      maxWidth: '100%', 
      height: 'auto',
    }}
  />
</div>

<p style={{
    fontSize: '2.0rem',
    lineHeight: '1.6',
    color: '#e0e0e0',
    padding: '15px',
    borderRadius: '8px',
    textAlign: 'justify',
  }}>
    Is the Founding Groundbreaking 3D Cymatic Lattic, It means that all Digital Technologies.
    The problem is that there are Trillions of 3D Cymatic Lattice Cells..Not even 1 million Quantum Computers.
  </p>
  </section>
</main>

      </div>

      <footer style={{ marginTop: '5rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.3rem', color: '#9ca3af' }}>For any inquiries email us at: drhamza@trilliao.com</h1>
        <br/>
        <br/>
      </footer>
    </>
  );
}

export default Blokchain;