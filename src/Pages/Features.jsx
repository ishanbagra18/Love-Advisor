import React from "react";
import { Parallax } from 'react-parallax';
import Review from "../Components/Review";
import './style.css';

function Features() {
  return (
    <div style={{
      cursor: 'url("cursor.png"), auto'
    }}
     className="bg-gray-100 py-10">
      <div className="flex flex-col items-center justify-center">
        <h1
          className="text-4xl md:text-5xl text-gray-800 animated-text font-bold"
          style={{
            fontWeight: 100,
            lineHeight: '10vw',
            fontVariationSettings: '"wght" 100, "wdth" 85',
          }}
        >
          {/* Wrap each letter inside a span */}
          {"Our Basic Workflow".split("").map((char, index) => (
            <span
              key={index}
              style={{ "--char-index": index }}
            >
              {char}
            </span>
          ))}
        </h1>

        <div className="flex flex-wrap justify-center gap-10 pt-12 px-6 max-w-7xl mx-auto">
          {/* First */}
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 hover:shadow-xl w-[90%] md:w-[45%] lg:w-[30%]">
            <div className="flex justify-center">
              <img className="w-[300px] md:w-[350px] lg:w-[400px] rounded-md" src="gemni.jpg" alt="Gemini API" />
            </div>
            <h2 className="text-xl font-bold mt-4 text-gray-800">Gemini API-Powered Solutions</h2>
            <p className="pt-2 text-gray-600 text-lg text-center">
              We utilize the advanced capabilities of the Gemini API to address minor relationship issues. By analyzing disputes, it identifies mistakes and helps partners understand each other's perspectives, fostering better communication and clarity.
            </p>
          </div>

          {/* Second */}
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow w-[90%] md:w-[45%] lg:w-[30%]">
            <div className="flex justify-center">
              <img className="w-[300px] md:w-[350px] lg:w-[400px] rounded-md" src="analysis.jpg" alt="Analysis" />
            </div>
            <h2 className="text-xl font-bold mt-4 text-gray-800">Personalized Conversations</h2>
            <p className="pt-2 text-gray-600 text-lg text-center">
              Our platform facilitates direct, empathetic discussions with individuals involved in conflicts to uncover and resolve underlying issues.
            </p>
          </div>

          {/* Third */}
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow w-[90%] md:w-[45%] lg:w-[30%]">
            <div className="flex justify-center">
              <img className="w-[300px] md:w-[350px] lg:w-[400px] rounded-md" src="solution.jpg" alt="Solution" />
            </div>
            <h2 className="text-xl font-bold mt-4 text-gray-800">Expert Analysis and Tailored Solutions</h2>
            <p className="pt-2 text-gray-600 text-lg text-center">
              Our team carefully analyzes complex situations and provides actionable, customized solutions to strengthen relationships.
            </p>
          </div>
        </div>
      </div>

      <h1 className="text-4xl font-bold text-center mb-6 pt-9">
        Features of <span className="text-pink-600">LoveCounselor</span>
      </h1>

      <div 
      className="p-6 flex flex-wrap justify-evenly">
        {/* Feature 1 */}
        <div className="mb-6 p-4 bg-white shadow-lg rounded-lg w-[90%] md:w-[45%] lg:w-[30%]">
          <h2 className="text-2xl font-semibold mb-2">Gemini API-Powered Insights</h2>
          <p className="text-gray-600">
            Our website integrates the Gemini API to address minor disputes by identifying mistakes and helping partners understand each other's perspectives better.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="mb-6 p-4 bg-white shadow-lg rounded-lg w-[90%] md:w-[45%] lg:w-[30%]">
          <h2 className="text-2xl font-semibold mb-2">Direct Conversations with Disputing Partners</h2>
          <p className="text-gray-600">
            We engage in meaningful discussions with individuals involved in conflicts, fostering a deeper understanding and paving the way for resolution.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="mb-6 p-4 bg-white shadow-lg rounded-lg w-[90%] md:w-[45%] lg:w-[30%]">
          <h2 className="text-2xl font-semibold mb-2">Comprehensive Analysis and Solutions</h2>
          <p className="text-gray-600">
            Our expert team carefully analyzes the situation and provides actionable solutions to help strengthen and rebuild relationships.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="mb-6 p-4 bg-white shadow-lg rounded-lg w-[90%] md:w-[45%] lg:w-[30%]">
          <h2 className="text-2xl font-semibold mb-2">Multi-Relationship Support</h2>
          <p className="text-gray-600">
            We don’t just focus on romantic relationships. Our platform also supports family, friendships, and professional connections, ensuring every relationship can thrive.
          </p>
        </div>

        {/* Feature 5 */}
        <div className="mb-6 p-4 bg-white shadow-lg rounded-lg w-[90%] md:w-[45%] lg:w-[30%]">
          <h2 className="text-2xl font-semibold mb-2">Real-Time Support and Resources</h2>
          <p className="text-gray-600">
            Access a library of expert-curated resources, tips, and strategies in real time, empowering you to tackle challenges as they arise.
          </p>
        </div>

        {/* Feature 6 */}
        <div className="mb-6 p-4 bg-white shadow-lg rounded-lg w-[90%] md:w-[45%] lg:w-[30%]">
          <h2 className="text-2xl font-semibold mb-2">AI-Powered Relationship Assessments</h2>
          <p className="text-gray-600">
            Leverage AI to gain insights into your relationship dynamics. Our platform provides assessments tailored to your unique situation, helping you better understand your strengths and areas for improvement.
          </p>
        </div>

        {/* Feature 7 */}
        <div className="mb-6 p-4 bg-white shadow-lg rounded-lg w-[90%] md:w-[45%] lg:w-[30%]">
          <h2 className="text-2xl font-semibold mb-2">Confidentiality and Privacy Protection</h2>
          <p className="text-gray-600">
            We prioritize your privacy, ensuring all conversations, analyses, and data are handled with the utmost confidentiality to create a safe and secure environment.
          </p>
        </div>
      </div>

      <Review />
    </div>
  );
}

export default Features;
