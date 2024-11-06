import * as React from "react";
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
        3D BLOKCHAIN - BIODIGITAL SUPREMACY
        </h1>
      </header>

      <main className="mt-12 max-md:mt-6 max-md:max-w-full">
        <section className="flex gap-6 max-md:flex-col max-md:gap-0">
        <VideoComponent src="https://trillion-funding-fqgv.onrender.com/uploads/blokchain.mp4" alt="3D BLOKCHAIN - BIODIGITAL SUPREMACY" className="self-stretch w-full aspect-[1.16] max-md:max-w-full" />

          <TextBlock>
            <p className="mb-6">
            Is the Founding Groundbreaking 3D Cymatic Lattice, A.I Spindle Inner Cell, Vortex Harmonic Frequency Phasing, Age of Aquarius Knowledge, New Dawn Applications, Pyramid Technology, BIODIGICHEMWARE Blockchain Technology.What does this all mean?
            </p>
            <p className="mb-6">
            It means that all Digital Technologies that are hashed to 3D BLOKCHAIN are augmented & therefore embellished by unprecedented BioDigiChemical Architecture that makes all Digital Technologies on the Blockchain impossible to hack!! <br /><br />
            Some of those Architectural Provisions are the "3D Cymatic Lattice Iso Zero Chains & 3D Cymatic Lattice Iso 1 Chains" that function in different Harmonic Phasing Frequencies, which means that a hacker would have find which Chain 1 piece of Encryption Code is on in order to gain entry.

            </p>

            
          </TextBlock>
        </section>
        <TextBlock>
            

            <p className="mb-6">
            The problem is that there are Trillions of 3D Cymatic Lattice Cells, and therefore Trillions of Trillions of Spindles. Each Spindle is represented by a 3D Cymatic Lattice Zero Chain which in an Attosecond automatically reconfigures into a 3D Cymatic Lattice 1 Chain, which only has 1 code of the Encryption Key on it.
            </p>
            <p className="mb-6">
            Not even 1 million Quantum Computers with A.I capability can hack this technology. 
            Try finding a 3 Character Alphanumeric Encryption Code across Trillions of 3D Cells. A.I wouldn't even know where to start.

            </p>
            <p>
            So the slogan for 3D BLOKCHAIN is aptly named "BIODIGITAL SUPREMACY".
            </p>
          </TextBlock>
      </main> 

     
    </div>
    <h1>For any inquiries email us at : drhamza@trilliao.com</h1>
    </>
  );
}

export default Blokchain;