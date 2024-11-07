import * as React from "react";
import { useHistory, Link } from 'react-router-dom';


function VideoComponent({ src, className }) {
  return (
    <video autoPlay loop muted playsInline webkit-playsinline className={className} style={{ width: '100%', maxWidth: '600px', borderRadius: '8px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.5)' }}>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

function TextBlock({ children }) {
  return (
    <div style={{ marginTop: '5rem', fontSize: '1.8rem', color: '#ffffff', maxWidth: '50%', textAlign: 'justify' }}>
      {children}
    </div>
  );
}

function TrillionBank() {
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
        <header style={{ paddingLeft: '0.1rem', marginTop: '2rem', backgroundImage: 'linear-gradient(to right, purple, white)', backgroundClip: 'text', color: 'transparent' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '600' }}>TRILLI ON BANK</h1>
        </header>

        <main style={{ marginTop: '5rem', width: '100%' }}>
          <section style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '30px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%' }}>
              <VideoComponent
                src="https://trillion-funding-fqgv.onrender.com/uploads/bank.mp4"
                className="self-stretch w-full aspect-[1.16] max-md:max-w-full"
              />
            </div>

            
  <p style={{ fontSize: '1.6rem', lineHeight: '1.6', color: '#e0e0e0', padding: '15px', borderRadius: '8px', textAlign: 'justify' }}>
    TRILLI ON BANK is the World's First & Only Independent Indigenous Digital Bank. A Bank that has no monthly Fees, a Digital Bank Card Housed into its little Sister Trilli On It Money Wallet, as well as Features like Interest Free Loans for Indigenous Peoples Globally. TRILLI ON BANK is a Global Life Changer for Indigenous Peoples on a Level never seen Before!!!! Like all of the Trillion Dollar Digital Financial Suite, it is hashed into the Unprecedented Unhackable 3D BLOKCHAIN, that grants its 3D Cymatic Lattice, A.I Spindle Inner Cell, Vortex Harmonic Frequency Phasing Blockchain Technology never seen before A.I Encryption Security Consolidation. These BIODIGICHEMWARE Qualities & Characteristics combined in Seamless Synchronisation with TRI FONE grant TRILLI ON BANK Decentralised Capabilities that can never be tampered with or hacked, and therefore render TRILLI ON BANK BIODIGITALLY SUPREME. BIODIGICHEMWARE in Crystalised Conjunction with HYBRID CHAMELEON HARDWARE is an Unprecedented Unhackable Age of Aquarius Knowledge & New Dawn Application espoused to the World as Piramyd Technology. These otherworldly Technologies grant TRILLI ON BANK unprecedented Financial Privileges to Indigenous Communities WorldWide via both Unhackable Financial Asset Security & Unhackable Personal Data Protection.
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

export default TrillionBank;