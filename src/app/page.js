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
import {SubmitManager} from "@/components/Modals/SubmitManager";
import {useModal} from "@/contexts/ModalContext";
import {OfficeModal} from "@/components/Modals/OfficeView";
import {Video} from "@/components/Video";
import dynamic from "next/dynamic";

export default function Home() {
    const {activePhone, activeVideo, activeOffice } = useModal()

    const Projects = dynamic(() => import('../components/Projects'), { ssr: false });
    const Contacts = dynamic(() => import('../components/Contacts'), { ssr: false });

    return (
        <>
            {activeVideo && <InformationVideo />}
            {activePhone && <SubmitManager />}
            {activeOffice && <OfficeModal />}
            <HeaderSection />
            <CalculatedSection />
            <Constructor />
            <Meeting />
            <Video/>
            <Projects />
            <SpecialOffers/>
            <Faq/>
            <Contacts />
        </>
    );
}
