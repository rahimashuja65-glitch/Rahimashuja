
import Newsletter from '../components/Newsletter';
import Footer1 from '../components/Footer1';
import Contact from '../components/Contact'
import  Schedule from '../components/Schedule';
import Features from '../components/Features';
import FAQ from '../components/FAQ';
import Exercises from '../components/Exercises';
function Home() {
  return (
    <div style={{ background: '#fefdfd', minHeight: '100vh' }}>
    <Schedule />
     <Features />
     <Contact />
     <FAQ />
     <Newsletter />
     <Footer1 />
     <Exercises />

           </div>
           
  );
}

export default Home