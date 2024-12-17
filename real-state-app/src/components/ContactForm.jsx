import '../assets/styles/pages/contactPage.style.scss'
export default function ContactForm (){
    return (
        <form className="contact-form">
            <h2 className="section-header">We Would Love to Hear From You</h2>
            <p className="vivid-text">we&apos;ll get to know you to understand you selling goals, explain the selling process so you know what to expect</p>
            <div className="form-inputs">
                <div>
                    <label htmlFor="name" className="label-style">Name:</label>
                    <input type="text" id="name" placeholder="Enter your name" className="input-style" />
                </div>
                <div>
                    <label htmlFor="email" className="label-style">Email:</label>
                    <input type="email" id="email" placeholder="Enter your email" className="input-style" />
                </div>
                <div>
                    <label htmlFor="phone" className="label-style">Phone number:</label>
                    <input type="tel" id="phone" placeholder="Enter your phone number" className="input-style" />
                </div>
                <div>
                    <label htmlFor="interest" className="label-style">What are you interested in?</label>
                    <select id="interest" default="" className="input-style">
                        <option value="" disabled selected>Select</option>
                        <option value="selling">Selling</option>
                        <option value="buying">Buying</option>
                        <option value="renting">Renting</option>
                    </select>
                </div>
            </div>
            <label htmlFor="message" className="label-style">Your Message:</label>
            <textarea id="message" className="message-input input-style" placeholder="message"></textarea>
            <button className="btn-primary">Contact our experts</button>
        </form>
    )
}