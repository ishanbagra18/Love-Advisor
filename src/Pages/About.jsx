import React, { useEffect, useLayoutEffect, useRef } from "react";
import { fadeIn } from "../variants";
import {useGSAP} from '@gsap/react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

function About() {
  const box = useRef("");
  const box2 = useRef("");
  const box3= useRef("");
  const box4 = useRef("");
  const box5=useRef("");


  useGSAP(() => {
    const tl = gsap.timeline(); // Corrected 'timline()' to 'gsap.timeline()'


    tl.from(".headabout", {
      opacity: 0,
      y: 40,
      delay: 0.2,
      duration: 0.6,
    });
  
    tl.from(".paraabout", {
      opacity: 0,
      x: -100,
      duration: 0.7,
    });

    tl.from(".aboutimg1",{
      x:100,
      duration:1,
      opacity:0
    })



  });



  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: box.current,
        start: "top 50%",
      },
    });
  
    tl.fromTo(
      box.current,
      {
        opacity: 0,
        x: -100,
      },
      {
        duration: 0.7,
        x: 0,
        opacity: 1,
      }
    ).fromTo(
      box2.current,
      {
        opacity: 0,
        y: -100,
      },
      {
        duration: 0.7,
        y: 0,
        opacity: 1,
      },
    ).fromTo(
      box3.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        duration: 0.7,
        y: 0,
        opacity: 1,
      },
    ).fromTo(
      box4.current,
      {
        opacity: 0,
        x: 100,
      },
      {
        duration: 0.7,
        x: 0,
        opacity: 1,
      },
    ).fromTo(
      box5.current,
      {
        opacity: 0,
        z: 100,
      },
      {
        duration: 0.7,
        z: 0,
        opacity: 1,
      },
    )
  }, []);



  useEffect(() => {
    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".list1", // Targeting the class name directly
        start: "top 80%", // Adjust as per your layout
        toggleActions: "play none none reverse", // Optional: Controls the animation
      },
    });
  
    t2.fromTo(
      ".list1",
      {
        opacity: 0,
        x: -100,
        stagger: 1, // This should be outside the fromTo method
      },
      {
        duration: 1,
        x: 0,
        opacity: 1,
        stagger: 0.3, // Add stagger here for animating each list item sequentially
      }
    );
  }, []);
  



  
  return (
    <div className="">

      <div className="">
        <div className="flex items-center justify-between p-9 mt-4">
          <div className="w-3/5">
            <h1 className=" headabout text-6xl font-semibold pb-4">Who Are <span className="text-pink-600">We</span></h1>
            <p className="paraabout text-lg">
              LoveCounselor is a platform dedicated to helping individuals navigate the complexities of relationships. Whether you're facing communication issues, trust concerns, or simply need guidance on maintaining a healthy relationship, LoveCounselor provides personalized advice to support you.
              <br />
              By leveraging the power of the Gemini API, LoveCounselor analyzes your relationship challenges and offers tailored solutions, coping strategies, and expert recommendations. Our goal is to help you understand your relationship dynamics better and empower you to make informed decisions for a happier and more fulfilling connection with your partner.
            </p>
          </div>
          <img className="aboutimg1" style={{ width: "500px", height: "600px" }} src="/couple.jpg" alt="Couple" />
        </div>
      </div>

      <h1 className="text-5xl font-light p-4">What We Do</h1>

      <div
        className="w-full m-2 flex items-center justify-around flex-wrap"
      >
        <div
        ref={box}      
         className="w-80 h-100">
          <img className="w-full" src="/Guidance.jpg" alt="Guidance" />
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">Guidance</h1>
            <p className="text-center">Provides direction and support for individuals navigating relationship challenges.</p>
          </div>
        </div>

        <div
          ref={box2}
        className="w-80 h-100">
          <img className="w-full" src="/Advice.jpg" alt="Advice" />
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">Advice</h1>
            <p className="text-center">Offers personalized recommendations and insights to address relationship issues effectively.</p>
          </div>
        </div>

        <div ref={box3} className="w-80 h-105">
          <img className="w-full" src="/Support.jpg" alt="Support" />
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">Support</h1>
            <p className="text-center">Support means offering reliable backing and comfort to individuals as they navigate challenging times. It involves providing guidance to help them.</p>
          </div>
        </div>

        <div ref={box4} className="w-80 h-100">
          <img className="w-full" src="/recomdadation.jpg" alt="Recommendations" />
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">Recommendations</h1>
            <p className="text-center">Provides expert suggestions on how to improve communication, trust, and understanding.</p>
          </div>
        </div>

        <div ref={box5} className="w-80 h-100">
          <img className="w-full" src="/Empowerment.jpg" alt="Empowerment" />
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">Empowerment</h1>
            <p className="text-center">Helps users gain confidence in making informed decisions for healthier and happier relationships.</p>
          </div>
        </div>
      </div>

      <h1 className="text-6xl pt-8 pb-4 pl-12">Why LoveCounselor <span className="text-pink-700">Was Created..</span></h1>

      <div className="p-4 flex justify-evenly">
        <div>
          <p className="text-xl max-w-5xl">
            LoveCounselor was born out of a desire to help individuals navigate the complexities of relationships. In a world where emotional challenges are often misunderstood or overlooked, we recognized the need for a platform that provides compassionate guidance, practical solutions, and personalized support.
            Relationships are the cornerstone of our lives, yet they come with their own set of challenges—be it communication gaps, trust issues, or emotional struggles. LoveCounselor was created to bridge this gap by offering a safe space where individuals can seek advice, find clarity, and feel empowered to strengthen their connections.
          </p>
          <br />
          <p className="text-xl max-w-5xl">
            LoveCounselor is not just about helping couples or romantic relationships—our platform is dedicated to fostering healthy connections across all forms of relationships. Whether it’s strengthening the bond with your family, resolving conflicts with friends, or building better professional relationships, LoveCounselor is here to guide you.
            <br />
            We understand that every relationship is unique, and so are its challenges. From navigating misunderstandings with loved ones to improving communication with colleagues, LoveCounselor provides tailored solutions and practical advice for all relationship dynamics.
          </p>
        </div>
        <img className="w-80 h-90" src="/why.jpg" alt="Why LoveCounselor" />
      </div>

      <div className="">
        <h1 className="text-6xl pl-11"> <span className="text-pink-600">Milestones</span> Of Our Team </h1>
        <div className="flex justify-evenly pl-11 pt-10">
          <img className="w-[500px] h-[500px]" src="/Milestones.jpg" alt="Milestones" />
          <ol className="space-y-12">
            <li className="list1">
              <h1 className="text-xl font-semibold">10,000+ Relationships Strengthened-</h1>
              <p className="max-w-2xl">Till now, we have successfully provided guidance and support to over 10,000 relationships, helping individuals overcome challenges and build stronger bonds.</p>
            </li>

            <li className="list1">
              <h1 className="text-xl font-semibold">5,000+ Personalized Solutions Delivered-</h1>
              <p className="max-w-2xl">Our platform has analyzed unique relationship challenges and offered tailored advice to more than 5,000 users, ensuring every individual gets the support they need.</p>
            </li>

            <li className="list1">
              <h1 className="text-xl font-semibold">Expanding Beyond Romantic Relationships-</h1>
              <p className="max-w-2xl">Addressed over 2,000 family and friendship-related issues, highlighting our dedication to improving all types of relationships.</p>
            </li>

            <li className="list1">
              <h1 className="text-xl font-semibold">95% User Satisfaction Rate-</h1>
              <p className="max-w-2xl">Based on user feedback, the majority of our users feel more confident and positive about their relationships after using LoveCounselor.</p>
            </li>
          </ol>
        </div>
      </div>

      <div className="fees flex flex-col items-center justify-center">
      <h1 className="text-8xl">Fees</h1>
      <div className="flex items-center justify-evenly">
      <img className="w-[200px]" src="/money.jpeg" alt="Support" />
      <img className="w-[200px]" src="/money.jpeg" alt="Support" />
      </div>
          <div className="">
            
            <p>hello i am ishan</p>
          </div>
      </div>

      <div className="bg-pink-400 w-full h-30 p-10 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold">What Our Thought</h1>
        <p className="text-xl pt-3">"At LoveCounselor, we believe every relationship deserves a chance to thrive. Together, let's build a world where love and understanding conquer all challenges."</p>
      </div>



    </div>
  );
}

export default About;  