import * as React from "react";
import { useHistory, Link } from 'react-router-dom';

// Reusable Components
function VideoComponent({ src, className }) {
  return (
    <video autoPlay loop muted playsInline className={className}>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

function TextBlock({ children, className }) {
  return (
    <div className={`text-lg text-white ${className}`}>
      {children}
    </div>
  );
}

function Header({ title }) {
  return (
    <header className="pl-6 mt-10 max-md:mt-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white">
      <h1 className="text-4xl font-semibold leading-tight max-md:text-3xl">{title}</h1>
    </header>
  );
}

function NavBar({ isSignedIn, handleLogin, handleLogout }) {
  return (
    <nav className="flex gap-5 justify-between items-center w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
     
    </nav>
  );
}

// Main Component
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
    <div className="container mx-auto px-5">
      <NavBar isSignedIn={isSignedIn} handleLogin={handleLogin} handleLogout={handleLogout} />

      <Header title="TRILLI ON IT - MONEY WALLET" />

      <main className="mt-12 max-md:mt-6 max-md:max-w-full">
        {/* Flex Container to position text beside video */}
        <section className="flex gap-6 max-md:flex-col max-md:gap-0 items-center">
          <VideoComponent 
            src="https://trillion-funding-fqgv.onrender.com/uploads/wallet.mp4" 
            className="w-1/2 aspect-[1.16] max-md:max-w-full" 
          />
          <TextBlock className="w-1/2">
            <p className="mb-6">
              Trilli On It Money Wallet is the only Hybrid Money Wallet in the world, capable of storing all digital financial assets, including fiat currencies, stocks, certificates, and cryptocurrencies.
            </p>
            <p className="mb-6">
              This wallet also functions as a digital bank card for the upcoming TRILLI ON BANK, featuring no bank fees, low transaction fees, and interest-free loans for indigenous communities.
            </p>
            <p className="mb-6">
              Users are rewarded with TrilliOn Krypto Currency for every transaction made with the digital bank card.
            </p>
          </TextBlock>
        </section>

        <TextBlock className="mt-12">
          <p className="mb-6">
            The Trilli On It Money Wallet incorporates advanced BIODIGICHEMWARE technology, built on the 3D PIRAMYD CYMATIC CELL SPINDLE platform, providing unmatched financial and data security.
          </p>
          <p className="mb-6">
            It empowers indigenous communities worldwide with secure, unhackable asset and data protection, fostering economic independence and control.
          </p>
          <p>
            The vision of "Trilli On It" is to bring financial power to the people, making a digital wallet that serves everyone, not just the elite few.
          </p>
        </TextBlock>
      </main>

      <footer className="mt-12 text-center">
        <h2 className="text-lg text-white">
          For inquiries, email us at: 
          <a href="mailto:drhamza@trilliao.com" className="underline text-fuchsia-500"> drhamza@trilliao.com</a>
        </h2>
      </footer>
    </div>
  );
}

export default Trillionit;
