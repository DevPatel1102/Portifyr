import { Header } from "./LandingPage/Header";
import { HeroSection } from "./LandingPage/HeroSection";
import { Footer } from "./LandingPage/Footer";
import { InteractivePreviewSection } from "./LandingPage/InteractivePreviewSection";

export const LandingPage = ()=>{
    return(
        <>
            <Header/>
            <HeroSection/>
            <InteractivePreviewSection/>
            <Footer/>
        </>
    );
}