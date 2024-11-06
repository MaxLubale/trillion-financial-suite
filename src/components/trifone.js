import * as React from "react";
import { useHistory, Link  } from 'react-router-dom';

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

function Trifone() {

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
        TRI FONE - PEIZO ELECTRIC CHARGING
        </h1>
      </header>

      <main className="mt-12 max-md:mt-6 max-md:max-w-full">
        <section className="flex gap-6 max-md:flex-col max-md:gap-0">
        <VideoComponent src="https://trillion-funding-fqgv.onrender.com/uploads/trifon.mp4" alt="3D BLOKCHAIN - BIODIGITAL SUPREMACY" className="self-stretch w-full aspect-[1.16] max-md:max-w-full" />

          <TextBlock>
            <p className="mb-6">
            The Global Game Changer in Mobile Phones that features HYBRID CHAMELEON HARDWARE capability to charge itself when left in the Sun & or the Moonlight!!!!
            Which means no-more Electricity requirements regardless of your location.

            </p>
            <p className="mb-6">
            In actual fact, NEO TRILLI AO are currently developing a Wireless Electricity Device that also simultaneously broadcasts both a Wireless I.T Network, and a Wireless Telecommunications Network that will make Data Coverage Limitless!!!! 
            PEIZO Electricity is Non-Pernicious, which means it does not harm the body, in actual fact it does the complete opposite, it HEALS the Body!!!!

            </p>
            <p className="mb-6">
            As with all PEIZO Community & Commercial Products, "TRI" epitomises & consolidates the following 4 Security & Privacy Protection Provisions Globally for the Individual & Family alike.
              Personal Privacy Protection
              Which means Peizo & Developers NEO TRILLI AO at no time whatsoever, sell your Personal Information to 3rd Party Operators.
              It also means that under no circumstances whatsoever do we disclose your Personal Information to Governments & or Authorities for their corrupt purposes!! 
              
   
            </p>

            
          </TextBlock>
        </section>
        <TextBlock>
        <p className="mb-6">
              Your Geo Location is only ever recorded & monitored when you initiate TRAVEL SAFE APP.
              Your Video is only ever recorded & monitored when you initiate TRAVEL SAFE APP.
              Your Audio is only ever recorded & monitored when you initiate TRAVEL SAFE APP.
            </p>

            
            <p className="mb-6">
            HYBRID CHAMELEON HARDWARE is an Unprecedented Unhackable Age of Aquarius Knowledge & New Dawn Application espoused to the World as Piramyd Technology. 
            The otherworldly Technology present in TRI FONE grants unprecedented Financial Privileges to Indigenous Communities WorldWide via both Unhackable Financial Asset Security & Unhackable Personal Data Protection.

            </p>
            
          </TextBlock>
      </main> 

     
     
    </div>
    <h1>For any inquiries email us at :  drhamza@trilliao.com</h1>
    </>
  );
}

export default Trifone;