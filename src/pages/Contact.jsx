import React from 'react'
import '../Global.css'
function Contact() {
  return (

   <div id='contact'  className="Contact">
    <h1>Contact</h1>
    <form >
      <input type="text" placeholder='Your Name' />
      <input type="Email" placeholder='Your Email' />
      <textarea placeholder='Your Message'></textarea>
      <button type='Submit'>Send</button>

    </form>
   </div>

  )
}

export default Contact