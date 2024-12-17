import '../assets/styles/pages/contactPage.style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMap, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
export default function ContactInfoSection (){
    return (
        <section className="contact-info-section">
        <div className="contact-info">
            <h1 className="contact-header">We provide the most suitable and qulaity real estate.</h1>
            <p className="vivid-text">Estimate you payment with our easy-to-use loan calculator. Then get pre qualified to buy by a local lender.</p>
            <div className="adresses">
                <div className="adress-item">
                    <FontAwesomeIcon icon={faMap} size='xl' />
                    <div className="v-break"></div>
                    <div>
                        <p className="adress-title">Office adress</p>
                        <p>102 ingraham St, Brooklyn, NY 11237</p>
                    </div>
                </div>
                <div className="adress-item">
                    <FontAwesomeIcon icon={faPhone} size='xl' />
                    <div className="v-break"></div>
                    <div>
                        <p className="adress-title">office adress</p>
                        <p className="orange-info big">(603) 555-0123</p> 
                    </div>
                </div>
                <div className="adress-item">
                    <FontAwesomeIcon icon={faEnvelope} size='xl' />
                    <div className="v-break"></div>
                    <div>
                        <p className="adress-title">Office adress</p>
                        <p className="orange-info">themsflat@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
        <img src="./assets/imgs/houses/house3.jpg" alt="house-image" />
    </section>
    )
}