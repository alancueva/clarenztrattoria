import ContactSection from "@/components/seccion/contactos/ContactSection";
import SectionHeader from "@/components/seccion/SectionHeader";
import ContactForm from "@/components/seccion/contactos/ContactForm";


export default function Contactos(){

    return(
        <>
            <SectionHeader title="Contactos" subtitle="" />
            <ContactSection />
            <ContactForm />
        </>
    );
}