import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import Form from "../Components/Form";

function Contact() {
  return (
    <div className="">
<div className="bg-pink-900 w-full h-[200px] flex flex-col text-white justify-center items-center">
  <div className="flex flex-col items-center justify-center">
  <h1
  className="text-4xl font-bold pb-2"
  style={{
    backgroundImage: "url('https://tse2.mm.bing.net/th?id=OIP.FwsrunBIrLt-8HQkQFq-GgHaEo&pid=Api&P=0&h=180')",
    backgroundSize: 'cover', // Ensure the image covers the entire area
    backgroundPosition: 'center', // Center the image
    color: 'white', // Fallback text color
    padding: '20px', // Padding for better spacing
    WebkitTextFillColor: 'transparent', // Transparent text color
    WebkitBackgroundClip: 'text', // Use the background as the text color
  }}
>
  Contact us
</h1>


    <p
    style={{
      backgroundImage: "url('http://wallpapercave.com/wp/IEoAGpv.jpg')",
      backgroundSize: 'cover', // Ensure the image covers the entire area
      backgroundPosition: 'center', // Center the image
      color: 'white', // Fallback text color
      padding: '20px', // Padding for better spacing
      WebkitTextFillColor: 'transparent', // Transparent text color
      WebkitBackgroundClip: 'text', // Use the background as the text color
    }}
    >Your Queries Are Important to Us—Reach Out Anytime for Support</p>
  </div>
</div>


<div className="flex items-center justify-center ">
    <div className="flex flex-col">
      <div className="pb-8">
        <h1
        style={{
          backgroundImage: "url('http://wallpapercave.com/wp/IEoAGpv.jpg')",
          backgroundSize: 'cover', // Ensure the image covers the entire area
          backgroundPosition: 'center', // Center the image
          color: 'white', // Fallback text color
          padding: '20px', // Padding for better spacing
          WebkitTextFillColor: 'transparent', // Transparent text color
          WebkitBackgroundClip: 'text', // Use the background as the text color
        }}
         className="text-3xl font-semibold pb-3">Get in Touch</h1>
        <p className="text-gray-400">Have Questions? Get in Touch, and Let’s Work Together to Find the Right Solution</p>
      </div>

      <hr />

      <div>
  <h1 className=" text-black pb-6 pt-3">60 Road Broklyn Golden Street of New York, USA</h1>
  <div className="flex items-center space-x-2 text-pink-600">
    <  FaPhoneVolume />
    <h2 className="text-black">+91 1234567897</h2>
    </div>
     <h2 className="text-sm text-pink-600">ishanbagra18@gmail.com</h2>
  </div>

    </div>
    <img className="w-[400px] h-[400px]" src="location.gif" alt="" />
    
  </div>


  <Form/>


  <div className="flex flex-col items-center justify-center pb-7">
    <h1 className="text-6xl pb-5 font-semibold"
      style={{
        color: 'blue',
        textShadow: '0px 0px 10px rgba(255,105,180,0.5), 0px 0px 20px rgba(255,105,180,0.5), 0px 0px 30px rgba(255,105,180,0.5), 0px 0px 40px rgba(255,105,180,0.8)',      }}
    >Check Our <span className="text-pink-600">Pages on-</span>  </h1>
    <ul className="flex gap-5">
    <li>
    <a href="https://www.instagram.com/ishanbagra18/" target="_blank">
  <img 
    className="w-[100px]" 
    style={{ filter: 'drop-shadow(10px 10px 10px pink)' }}
    src="insta.jpg" 
    alt="Instagram Profile" 
  />
</a>

</li>
<li>
  <a href="https://www.instagram.com/ishanbagra18/" target="_blank">
    <img className="w-[100px]"     style={{ filter: 'drop-shadow(10px 10px 10px blue)' }}
 src="facebook.png" alt="Instagram Profile" />
  </a>
</li>
<li>
  <a href="https://www.instagram.com/ishanbagra18/" target="_blank">
    <img className="w-[100px]"     style={{ filter: 'drop-shadow(10px 10px 10px green)' }}
 src="whatapp.jpg" alt="Instagram Profile" />
  </a>
</li>
<li>
  <a href="https://www.linkedin.com/in/ishan-bagra-52aa95289/" target="_blank">
    <img className="w-[100px]"     style={{ filter: 'drop-shadow(10px 10px 10px skyblue)' }}
 src="linkedin.png" alt="Instagram Profile" />
  </a>
</li>
    </ul>
  </div>


    <div className="pt-5 ">

          <h1 className="text-5xl font-semibold pl-9" >Found <span className="text-pink-600">us on</span></h1>

        <div className="flex items-center justify-center pt-9">

          <iframe className="w-[1000px] h-[500px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.2261099526213!2d75.66841057572924!3d26.959738076619235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db311be4ebd5f%3A0x48540dc5b94d3480!2sKalwar%20Rd%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1736435808522!5m2!1sen!2sin" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

          </div>
          
    </div>


    <div className="bg-pink-400 w-full h-30 p-10 flex flex-col items-center justify-center mt-9">
        <h1 className="text-3xl font-semibold">What Our Thought</h1>
        <p className="text-xl pt-3">"At LoveCounselor, we believe every relationship deserves a chance to thrive. Together, let's build a world where love and understanding conquer all challenges."</p>
      </div>



    </div>
  );
}

export default Contact;
