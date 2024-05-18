'use client'

import {InformationVideo} from "@/components/Modals/InformationVideo";
import {HeaderSection} from "@/components/Header";
import {CalculatedSection} from "@/components/CalculatePages/CalculatedSection";
import {Constructor} from "@/components/constructor";
import {Meeting} from "@/components/Meeting";
import {Projects} from "@/components/Projects";
import {SpecialOffers} from "@/components/Offers";
import {Faq} from "@/components/Faq";
import {Contacts} from "@/components/Contacts";
import {useState} from "react";

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
