import React from 'react';
import { useHistory, Link } from 'react-router-dom';

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

function TextBlock({ children }) {
  return (
    <div 
      style={{
        marginTop: '5rem', 
        fontSize: '1.8rem', 
        color: '#ffffff', 
        maxWidth: '50%',
        textAlign: 'justify',
      }}
    >
      {children}
    </div>
  );
}

function Trillipay() {
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
        <header style={{ paddingLeft: '4.5rem', marginTop: '2rem', backgroundImage: 'linear-gradient(to right, purple, white)', backgroundClip: 'text', color: 'transparent' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '600' }}>Trilli Pay</h1>
        </header>

        <main style={{ marginTop: '5rem', width: '97%' }}>
        <section
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '50px',
      flexWrap: 'wrap',
    }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '30 %' }}>
              <VideoComponent 
                src="https://trillion-funding-fqgv.onrender.com/uploads/trillipay.mp4" 
                className="self-stretch w-full aspect-[1.16] max-md:max-w-full" 
              />
            </div>

              <p style={{
                fontSize: '1.6rem',
                lineHeight: '1.6',
                color: '#e0e0e0',
                padding: '20px',
                borderRadius: '8px',
                textAlign: 'justify',
              }}>
                A Payment Gateway that Benefits Indigenous Peoples Globally. Every Transaction only costs 1 cent USD & every 3 cents worth of Transactions will reward you with 1 Minted Peizo of TrilliOn Krypto Kurrency. TRILLI PAY is the most cost-effective Payment Gateway in the World, and every cent goes towards substantiating Interest-Free Loans for Indigenous Peoples Globally via TRILLI ON BANK.
                <br></br>                <br></br>

                TRILLI PAY is a BIODIGICHEMWARE, which means it can traverse outdated current technologies, and simultaneously seamlessly travelling inside the Future of A.I Cellular Quantum PIRAMYD 3D Cymatic Lattice Technology that is HYBRID CHAMELEON HARDWARE, the specifically designed outlier A.I Quantum Computing Hardware it was created for. No other Digital Financial Technologies can make the migration onto & into HYBRID CHAMELEON HARDWARE.
                These otherworldly Technologies give unprecedented Financial Privileges to Indigenous Communities WorldWide via both Unhackable Financial Asset Security & Unhackable Personal Data Protection.
                MONEY 4 MASSES is a reverberating slogan moniker perfect for the provisions that TRILLI PAY brings to Indigenous Peoples Globally.

              </p>
            
          </section>
          
        </main>
      </div>

      <footer style={{ marginTop: '5rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.0rem', color: '#9ca3af' }}>
          For any inquiries email us at: <a href="mailto:drhamza@trilliao.com">drhamza@trilliao.com</a>
        </h1>
        <br />
        <br />
      </footer>
    </>
  );
}


export default Trillipay;
