import React from 'react'
import './Contact.css'
const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "1c00b831-efd1-4b9f-848a-6959c7e76e53");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src='data:image/png;base64,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'/></h3>
        <p>Feel free to reach out through contact from or find our contact information bellow.</p>
        <ul>
            <li>Contact@Zahra:/</li>
            <li>09937263070</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type='text' name='name' placeholder='Enter your name'required/>
            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter your phone number'required/>
            <label>Write your massege here</label>
            <textarea name='message' rows="6" placeholder='Enter your message'required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
