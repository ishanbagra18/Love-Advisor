import React, { useState } from "react";
import axios from "axios";
import { IoMdMic } from "react-icons/io";
import { IoMdMicOff } from "react-icons/io";



function Home() {
  const [question, setquestion] = useState("");
  const [ans, setans] = useState("Your answer will appear here");
  const [copyText, setCopyText] = useState("Copy");
  const [loading, setLoading] = useState(false); // State to track loading status
  const audio = new Audio("/sound1.mp3");





  const resetanswer = () => {
    setquestion("");
    setans("Your answer will appear here");
    setCopyText("Copy");
  };

  const generateans = async () => {
    // console.log("loading.....");
    setans("Your answer will appear here"); // Reset the answer while loading
    setLoading(true); // Set loading to true when request starts
    audio.play();

    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCmJP1SuNDuZMCHAFHKPf7qYVlocPNLiVI",
        method: "post",
        data: {
          contents: [
            {
              parts: [{ text: question }],
            },
          ],
        },
      });

      const result = response.data;

      // Directly set the response text (including spaces and line breaks)
      setans(result.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error("Error generating answer:", error);
      setans("Sorry, there was an error generating your answer. Please try again.");
    } finally {
      setLoading(false); // Set loading to false once the request is complete
    }
  };

  const handlecopy = () => {
    navigator.clipboard.writeText(ans);
    setCopyText("Copied!");
    setTimeout(() => setCopyText("Copy"), 2000);
  };

  return (
    <div
      className="flex flex-col justify-center items-center h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: "url(/girlboy.png)",
        backgroundPosition: "right",
        backgroundSize: "contain",
      }}
    >
      <div className="flex items-center gap-3 p-3">
        <h1 className="text-2xl font-bold mb-4">Tell Me Your Problem</h1>
        <img src="/relationship.png" className="w-12" alt="Relationship Icon" />
      </div>

      <textarea
        className="w-96 h-24 border-2 rounded-md p-2 mb-4"
        placeholder="Type your problem here..."
        onChange={(e) => setquestion(e.target.value)}
        value={question}
      ></textarea>



      <div>
        <button
          className="px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 mb-4"
          onClick={generateans}
          // disabled={loading} // Disable button while loading  
        >
          Solve problem
        </button>

        <button
          className="ml-5 px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 mb-4"
          onClick={resetanswer}
        >
          Another problem
        </button>
      </div>


      <div className="flex gap-6 mb-3">
          <button className="bg-pink-600 text-white p-3"><IoMdMic /></button>
          <button className="bg-pink-600 text-white p-3"><IoMdMicOff /></button>
      </div>

      <div className="border-2 flex flex-col">
        <button onClick={handlecopy} className="copybutton bg-pink-500 p-2 text-white">
          {copyText}
        </button>

        <div className="text-left m-3">
          {/* <h3 className="font-semibold">Answer: </h3> */}
          {loading ? (
            <p className="ml-5">🥰💖💓💗💞❣💘💝💌😍</p> // Show loading text while waiting for answer
          ) : (
            <p className="ml-5 whitespace-pre-wrap bg-pink-100">{ans}</p> // Show the answer when ready
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;