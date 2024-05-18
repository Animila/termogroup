'use client'
import HeaderSection from "../components/header";
import {CalculatedSection} from "../components/CalculatePages/CalculatedSection";
import {Faq} from "../components/Faq";
import {Constructor} from "../components/constructor";
import {Meeting} from "../components/Meeting";
import {InformationVideo} from "../components/Modals/InformationVideo";
import {useState} from "react";
import {Projects} from "../components/Projects";
import SpecialOffers from "../components/Offers";
import Contacts from "../components/Contacts";

export default function Home() {
    const [activeVideo, setActiveVideo] = useState(false)

    const changeActiveVideo = () => {
        setActiveVideo(!activeVideo)
    }

    return (
        <>
            {activeVideo && <InformationVideo changeActive={changeActiveVideo}/>}
            <HeaderSection setActiveVideo={setActiveVideo} />
            <CalculatedSection />
            <Constructor />
            <Meeting />
            <Projects />
            <SpecialOffers/>
            <Faq/>
            <Contacts />
        </>
    );
}
