import { Header } from "./LandingPage/Header";
import { HeroSection } from "./LandingPage/HeroSection";
import { Footer } from "./LandingPage/Footer";
import {Features} from "./LandingPage/Features";
import {Showcase} from "./LandingPage/Showcase";
import { InteractivePreviewSection } from "./LandingPage/InteractivePreviewSection";
import { useAuth } from "../components/Auth/AuthContext";

export const LandingPage = ()=>{
    return(
        <>
            <Header/>
            <HeroSection/>
            <InteractivePreviewSection/>
            <Features/>
            <Showcase/>
            <Footer/>
        </>
    );
}