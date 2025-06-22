import React from 'react';
import './Contact.css';
function Contact() {
    const [result, setResult] = React.useState("");
     const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ebfaed2c-c46a-4dbb-89f5-3d0d88279d61");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("form submitted");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

    return (
    <div id='Contact' className="Contact-section">
        <h1 className='contact-heading'>Get in touch</h1>
        <div className="contact-box">
            <div className="Contact-details">
                <h2 className="contact-details-heading"> Let's talk</h2>
                <p className='current-status'>I'm currently available to take on new project,so feel free to to send me a message about anything that you want me to work on.You can contact anythime</p>
                <p className='email'><i class="fa-regular fa-envelope"></i>sanketsathe198@gmail.com</p>
                <p className="mobile-no"><i class="fa-solid fa-phone-volume"></i> +919322962717</p>
                <p className="location"><i class="fa-solid fa-location-dot"></i>Raigad,Maharashtra,India</p>
            </div>
            <form  onSubmit={onSubmit}className="Contact-form">
                <label htmlFor=''>You Name</label>
                <input required type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor=''>You Email</label>
                <input required type="email" placeholder='Enter your email' name='email' />
                <label htmlFor=''>Write your message here</label>
                <textarea required name="message"  placeholder='Enter your message'></textarea>
                <button type='submit' className="Submit">Submit now</button>
            </form>
        </div>
    </div>  
    );
}

export default Contact;