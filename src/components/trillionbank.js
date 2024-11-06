import * as React from "react";
import { useHistory, Link } from 'react-router-dom';


function VideoComponent({ src, className }) {
  return (
    <video autoPlay loop muted playsInline webkit-playsinline className={className}>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}



function TextBlock({ children }) {
  return (
    <div className="mt-12 text-3xl text-white max-md:mt-6 max-md:max-w-full">
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
    <div className="flex gap-5 justify-between items-center w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
    <div className="flex flex-col self-stretch text-4xl font-bold">
      <div className="flex gap-5">
      <header className="pl-6 mt-10 max-md:mt-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white">
      <Link to="/" className="text-4xl font-semibold leading-tight max-md:text-3xl">
              NEO TRILLI AO
            </Link>
      </header>
        
      </div>
      
    </div>
    
    <nav className="flex gap-5 justify-between self-stretch my-auto max-md:flex-wrap max-md:max-w-full">
    <Link to="/" className="my-auto text-2xl text-white">
             Home
            </Link>
      <a
        href="#"
        onClick={() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
          });
        }}
        className="justify-center px-7 py-5 text-2xl font-semibold text-fuchsia-700 whitespace-nowrap shadow bg-zinc-100 rounded-[50px] max-md:px-5"
      >
        Products
      </a>
      <Link to="/profile" className="my-auto text-2xl text-white">
            Profile
          </Link>
      <button
            onClick={isSignedIn ? handleLogout : handleLogin}
            className="my-auto text-2xl text-white"
          >
            {isSignedIn ? 'Log Out' : 'Log In'}
      </button>
      <div className="flex flex-col self-start"></div>
    </nav>
  </div>
    <div className="flex flex-col px-5 items-center">
      <header className="pl-6 mt-10 max-md:mt-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white">
        <h1 className="text-4xl font-semibold leading-tight max-md:text-3xl">
        TRILLI ON BANK 
        </h1>
      </header>

      <main className="mt-12 max-md:mt-6 max-md:max-w-full">
        <section className="flex gap-6 max-md:flex-col max-md:gap-0">
        <VideoComponent src="https://trillion-funding-fqgv.onrender.com/uploads/bank.mp4" alt="3D BLOKCHAIN - BIODIGITAL SUPREMACY" className="self-stretch w-full aspect-[1.16] max-md:max-w-full" />

          <TextBlock>

          <p className="mb-6">
          TRILLI ON BANK is the World's First & Only Independent Indigenous Digital Bank. A Bank that has no monthly Fees, a Digital Bank Card Housed into its little Sister Trilli On It Money Wallet, as well as Features like Interest Free Loans for Indigenous Peoples Globally.
          TRILLI ON BANK is a Global Life Changer for Indigenous Peoples on a Level never seen Before!!!!

            </p>
            <p className="mb-6">
            Like all of the Trillion Dollar Digital Financial Suite, it is hashed into the Unprecedented Unhackable 3D BLOKCHAIN, that grants its 3D Cymatic Lattice, A.I Spindle Inner Cell, Vortex Harmonic Frequency Phasing Blockchain Technology never seen before A.I Encryption Security Consolidation.
            </p>
            <p className="mb-6">
            These BIODIGICHEMWARE Qualities & Characteristics combined in Seamless Synchronisation with TRI FONE grant TRILLI ON BANK Decentralised Capabilities that can never be tampered with or hacked, and therefore render TRILLI ON BANK BIODIGITALLY SUPREME.  
            </p>
           
           
            <p>
            
            </p>
          </TextBlock>
        </section>
        <TextBlock>

          
            
            <p className="mb-6">
            BIODIGICHEMWARE in Crystalised Conjunction with HYBRID CHAMELEON HARDWARE is an Unprecedented Unhackable Age of Aquarius Knowledge & New Dawn Application espoused to the World as Piramyd Technology.
            </p>
            <p className="mb-6">
            These otherworldly Technologies grant TRILLI ON BANK unprecedented Financial Privileges to Indigenous Communities WorldWide via both Unhackable Financial Asset Security & Unhackable Personal Data Protection.
            </p>
           
            <p>
            
            </p>
          </TextBlock>
      </main> 

      
     
    </div>
    <h1>For any inquiries email us at :  drhamza@trilliao.com</h1>
    </>
  );
}

export default TrillionBank;