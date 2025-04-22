import { Title } from "react-head";
import Clientele from "../home/Clientele";
import ClientTestimonials from "../home/ClientTestimonials";
import WhyChooseUs from "../home/WhyChooseUs";

const AboutUs = () => {
    return <>
        <Title>About Us</Title>
        <main className="w-full">
            <img src="/banners/About-us.png" alt="image" className="w-full" />
            <WhyChooseUs />
            <ClientTestimonials />
            <Clientele />
        </main>
    </>
}

export default AboutUs;