import React from 'react';
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
      <div className="flex gap-5 justify-between items-center w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <div className="flex flex-col self-stretch text-4xl font-bold">
          <header className="pl-6 mt-10 max-md:mt-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white">
            <Link to="/" className="text-4xl font-semibold leading-tight max-md:text-3xl">
              NEO TRILLI AO
            </Link>
          </header>
        </div>

        <nav className="flex gap-5 self-stretch my-auto max-md:flex-wrap max-md:max-w-full">
          <Link to="/" className="my-auto text-2xl text-white">Home</Link>
          <a
            href="#"
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            className="px-7 py-5 text-2xl font-semibold text-fuchsia-700 whitespace-nowrap shadow bg-zinc-100 rounded-[50px] max-md:px-5"
          >
            Products
          </a>
          <Link to="/profile" className="my-auto text-2xl text-white">Profile</Link>
          <button
            onClick={isSignedIn ? handleLogout : handleLogin}
            className="my-auto text-2xl text-white"
          >
            {isSignedIn ? 'Log Out' : 'Log In'}
          </button>
        </nav>
      </div>

      <div className="flex flex-col px-5 items-center">
        <header className="pl-6 mt-10 max-md:mt-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white">
          <h1 className="text-4xl font-semibold leading-tight max-md:text-3xl">Trilli Pay</h1>
        </header>

        <main className="mt-12 max-md:mt-6 max-md:max-w-full">
          <section className="flex gap-6 max-md:flex-col max-md:gap-0">
            <VideoComponent 
              src="https://trillion-funding-fqgv.onrender.com/uploads/trillipay.mp4" 
              className="self-stretch w-full aspect-[1.16] max-md:max-w-full" 
            />
            <TextBlock>
              <p className="mb-6">
                A Payment Gateway that Benefits Indigenous Peoples Globally. Every Transaction only costs 1 cent USD & every 3 cents worth of Transactions will reward you with 1 Minted Peizo of TrilliOn Krypto Kurrency. TRILLI PAY is the most cost effective Payment Gateway in the World, and every cent goes towards substantiating Interest Free Loans for Indigenous Peoples Globally via TRILLI ON BANK.
              </p>
              <p className="mb-6">
                TRILLI PAY is a BIODIGICHEMWARE, which means it can traverse outdated current technologies, and simultaneously seamlessly travelling inside the Future of A.I Cellular Quantum PIRAMYD 3D Cymatic Lattice Technology that is HYBRID CHAMELEON HARDWARE, the specifically designed outlier A.I Quantum Computing Hardware it was created for. No other Digital Financial Technologies can make the migration onto & into HYBRID CHAMELEON HARDWARE.
              </p>
            </TextBlock>
          </section>
          
          <TextBlock>
            <p className="mb-6">
              These otherworldly Technologies give unprecedented Financial Privileges to Indigenous Communities WorldWide via both Unhackable Financial Asset Security & Unhackable Personal Data Protection.
            </p>
            <p className="mb-6">
              MONEY 4 MASSES is a reverberating slogan moniker perfect for the provisions that TRILLI PAY brings to Indigenous Peoples Globally.
            </p>
          </TextBlock>
        </main>
      </div>

      <footer className="text-center mt-10 text-white">
        <h1>For any inquiries email us at: <a href="mailto:drhamza@trilliao.com">drhamza@trilliao.com</a></h1>
      </footer>
    </>
  );
}

export default Trillipay;
