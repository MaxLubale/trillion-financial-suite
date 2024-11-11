import * as React from "react";
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
        maxWidth: '600px',
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

function Header({ title }) {
  return (
    <header style={{
      paddingLeft: '1.5rem',
      marginTop: '2rem',
      backgroundImage: 'linear-gradient(to right, purple, white)',
      backgroundClip: 'text',
      color: 'transparent'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: '600',
        lineHeight: 'tight'
      }}>{title}</h1>
    </header>
  );
}

function Trillionit() {
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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 20px' }}>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap', paddingRight: '20px' }}>
        <div style={{ fontWeight: 'bold', fontSize: '2.5rem', display: 'flex', flexDirection: 'column' }}>
          <header style={{
            paddingLeft: '1.5rem',
            marginTop: '1.5rem',
            backgroundImage: 'linear-gradient(to right, purple, white)',
            backgroundClip: 'text',
            color: 'transparent'
          }}>
            <Link to="/" style={{ fontSize: '1.6rem', fontWeight: '600', lineHeight: 'tight' }}>TRILLI ON IT - MONEY WALLET</Link>
          </header>
        </div>
      </div>

      <main style={{ marginTop: '5rem', width: '100%' }}>
        <section style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '70px',
          flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '25%' }}>
            <VideoComponent
              src="https://trillion-funding-fqgv.onrender.com/uploads/wallet.mp4"
              className="self-stretch w-full aspect-[1.16] max-md:max-w-full"
            />
          </div>
          
            <p style={{
              fontSize: '1.6rem',
              lineHeight: '1.6',
              color: '#e0e0e0',
              padding: '15px',
              borderRadius: '8px',
              textAlign: 'justify',
            }}>
              Trilli On It Money Wallet is the only Hybrid Money Wallet in the world, capable of storing all digital financial assets, including fiat currencies, stocks, certificates, and cryptocurrencies.
              This wallet also functions as a digital bank card for the upcoming TRILLI ON BANK, featuring no bank fees, low transaction fees, and interest-free loans for indigenous communities.
              Users are rewarded with TrilliOn Krypto Currency for every transaction made with the digital bank card.
              <br /><br />
              The Trilli On It Money Wallet incorporates advanced BIODIGICHEMWARE technology, built on the 3D PIRAMYD CYMATIC CELL SPINDLE platform, providing unmatched financial and data security.
              
              It empowers indigenous communities worldwide with secure, unhackable asset and data protection, fostering economic independence and control.
              The vision of "Trilli On It" is to bring financial power to the people, making a digital wallet that serves everyone, not just the elite few.
            </p>
          
        </section>
      </main>

      <footer style={{ marginTop: '5rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.0rem', color: '#9ca3af' }}>
          For inquiries, email us at: 
          <a href="mailto:drhamza@trilliao.com" style={{ color: '#fuchsia', textDecoration: 'underline' }}> drhamza@trilliao.com</a>
        </h1>
      </footer>
    </div>
  );
}

export default Trillionit;
