import Path from "../Components/Path/path";
import contactLogo from '../Assets/imgs/news1.jpg'
import ContactInfo from "../Components/Contact-Components/contactDetails";
import ContactBanner from "../Components/Contact-Components/contactBanner";
const Contact = () => {
    return ( 
        <article className="contact-wrapper">
            <section className="Path-Container">
                <Path src={contactLogo} title='Contact'/>
            </section>

            <section className="contact-details-wrapper">
                <ContactInfo />
            </section>

            <section>
                <ContactBanner />
            </section>
        </article>
    );
}

export default Contact;