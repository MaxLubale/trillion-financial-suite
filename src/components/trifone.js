import * as React from "react";
import { useHistory, Link  } from 'react-router-dom';

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
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap', paddingRight: '20px' }}>
        <div style={{ fontWeight: 'bold', fontSize: '2.5rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', gap: '5px' }}>
            <header style={{ paddingLeft: '1.5rem', marginTop: '1.5rem', backgroundImage: 'linear-gradient(to right, purple, white)', backgroundClip: 'text', color: 'transparent' }}>
              <Link to="/" style={{ fontSize: '2.5rem', fontWeight: '600', lineHeight: 'tight' }}>
                NEO TRILLI AO
              </Link>
            </header>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 20px' }}>
        <header style={{ paddingLeft: '0.1rem', marginTop: '2rem', backgroundImage: 'linear-gradient(to right, purple, white)', backgroundClip: 'text', color: 'transparent' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '600' }}>TRI FONE - PEIZO ELECTRIC CHARGING</h1>
        </header>

        <main style={{ marginTop: '5rem', width: '100%' }}>
          <section style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '70px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '25%' }}>
              <VideoComponent 
                src="https://trillion-funding-fqgv.onrender.com/uploads/trifon.mp4" 
                className="self-stretch w-full aspect-[1.16] max-md:max-w-full"
              />
            </div>

            
              <p style={{ fontSize: '1.6rem', lineHeight: '1.6', color: '#e0e0e0', padding: '15px', borderRadius: '8px', textAlign: 'justify' }}>
                The Global Game Changer in Mobile Phones that features HYBRID CHAMELEON HARDWARE capability to charge itself when left in the Sun & or the Moonlight!!!! Which means no-more Electricity requirements regardless of your location.
                In actual fact, NEO TRILLI AO are currently developing a Wireless Electricity Device that also simultaneously broadcasts both a Wireless I.T Network, and a Wireless Telecommunications Network that will make Data Coverage Limitless!!!! PEIZO Electricity is Non-Pernicious, which means it does not harm the body, in actual fact it does the complete opposite, it HEALS the Body!!!!
                <br></br>    <br></br>

                As with all PEIZO Community & Commercial Products, "TRI" epitomises & consolidates the following 4 Security & Privacy Protection Provisions Globally for the Individual & Family alike.
                Personal Privacy Protection Which means Peizo & Developers NEO TRILLI AO at no time whatsoever, sell your Personal Information to 3rd Party Operators. It also means that under no circumstances whatsoever do we disclose your Personal Information to Governments & or Authorities for their corrupt purposes!!
                Your Geo Location is only ever recorded & monitored when you initiate TRAVEL SAFE APP. Your Video is only ever recorded & monitored when you initiate TRAVEL SAFE APP. Your Audio is only ever recorded & monitored when you initiate TRAVEL SAFE APP.
                HYBRID CHAMELEON HARDWARE is an Unprecedented Unhackable Age of Aquarius Knowledge & New Dawn Application espoused to the World as Piramyd Technology. The otherworldly Technology present in TRI FONE grants unprecedented Financial Privileges to Indigenous Communities WorldWide via both Unhackable Financial Asset Security & Unhackable Personal Data Protection.

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


export default Trifone;