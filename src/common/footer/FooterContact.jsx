import FooterContactCard from "./FooterContactCard";

// icons
import { IoLocationSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import FooterMap from "./FooterMap";
import FooterForm from "./FooterForm";

const FooterContact = () => {
    const cards = [
        {
            icon: <IoLocationSharp size={25} />,
            title: "Address",
            content: '123 Fifth Avenue, NY 10160 Lane no 17, New York NY688101',
        },
        {
            icon: <IoIosCall size={25} />,
            title: 'Call Us',
            content: <>
                <div>
                    <p>123-456-7890,</p>
                    <p>123-456-7891</p>
                </div>
            </>
        },
        {
            icon: <MdEmail size={25} />,
            title: 'Email',
            content: <>
                <div>
                    <p>contact@example.com</p>
                    <p>hello@example.com</p>
                </div>
            </>
        }
    ]

    return <>
        <section className="w-full flex flex-col justify-start items-start gap-y-4">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-4">
                <FooterMap />
                <FooterForm />
            </div>
            <div className="w-full rounded-md gap-x-6 gap-y-4 grid grid-cols-3 justify-center items-center">
                {
                    cards.map((item, index) => (
                        <FooterContactCard key={index} {...item} />
                    ))
                }
            </div>
        </section>
    </>
}

export default FooterContact;