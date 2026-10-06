
import Hero from "../components/Hero";
import Headlines from "../components/Headlines";
import GymShowcase from "../components/GymShowcase";
import Footer from "../components/Footer";
import Login1 from "../components/Login1";

import Login2 from "../components/Login2";
import Login3 from "../components/Login3";
import Login4 from "../components/Login4";
import About from "../components/About";
import Membership from "../components/Membership";



function Home() {
  return (
    <>
      
      <Hero />
      <Headlines /> 
      <GymShowcase />
      <About />
      {/* <Membership /> */}
      <Headlines /> 
      {/* <Login1 /> 
      <Login2 />
      <Login3 />
      <Login4 />  */}
    </>
  );
}

export default Home;
