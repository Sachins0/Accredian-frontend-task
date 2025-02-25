import { useState } from "react";
import ContactSection from "./components/ContactSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HowToRefer from "./components/HowToRefer";
import Navbar from "./components/Navbar";
import ReferralBenefitsSection from "./components/ReferralBenefitsSection";
import UpperHeader from "./components/UpperHeader";
import FormComponent from "./components/FormComponent";

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openReferralForm = () => {
    setIsFormOpen(true);
  };

  const closeReferralForm = () => {
    setIsFormOpen(false);
  };


  return (
    <>
    <div className="w-full fixed md:sticky top-0 z-20 bg-white transition-all duration-300 drop-shadow-lg">
    <UpperHeader/>
    <Header/> 
    </div>
    <div className="pt-28 md:pt-4">
    <Navbar/>
    </div>
    <div className="md:mx-72 md:my-4">
    <HeroSection openReferralForm={openReferralForm}/>
    </div>
    <HowToRefer openReferralForm={openReferralForm}/>
    <div className='md:mx-72 md:my-4'>
      <ReferralBenefitsSection openReferralForm={openReferralForm}/>
      <FAQSection/>
      <ContactSection/>
    </div>
    <Footer/>
    {isFormOpen && (
        <FormComponent closeReferralForm={closeReferralForm} />
      )}
    </>
  );
}

export default App;
