import SectionHeader from "@/components/seccion/SectionHeader";
import MissionVisionSection from "@/components/seccion/nosotros/MissionVisionSection"
import IntroductionText from "@/components/seccion/nosotros/IntroductionText"
import ArtisanProcessSection from "@/components/seccion/nosotros/ArtisanProcessSection";


export default function Nosotros(){

    return(
        <>
            <SectionHeader title="Nosotros" subtitle="" />
            <IntroductionText/>
            <MissionVisionSection/>
            <ArtisanProcessSection/>
        </>
    );
}