import Navbar1 from '../components/Navbar1';
import Navbar2 from '../components/Navbar2';
import Navbar3 from '../components/Navbar3';
import React from 'react';
import Navbar4 from '../components/Navbar4';
import Navbar5 from '../components/Navbar5';
import Navbar6 from '../components/Navbar6';
// import Footer from '../components/Footer';
// import Hero1 from '../components/Hero1';
// import Features from '../components/Features';
import Newsletter from '../components/Newsletter';
import Footer1 from '../components/Footer1';
import Contact from '../components/Contact'
// import Schedule from '../components/Schedule';
import  Schedule from '../components/Schedule';
function Home() {
  return (
    <div style={{ background: '#fefdfd', minHeight: '100vh' }}>
    <Schedule />
     <Contact />
     <Newsletter />
     <Footer1 />

           </div>
           
  );
}

export default Home;