import React from "react";
import Navbar from "./navbar";
import Header from "./Header";
import HowitWorks from "./HowitWorks";
import Useapp from "./Useapp";
import Support from "./Support";
import Sendmoney from "./Sendmoney";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Header /> */}
      {/* <HowitWorks/>
       <Useapp/>
       <Support/>
       <Sendmoney/> */}
      <Contact />
      <Footer />
    </>
  );
};
export default App;
