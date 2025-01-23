import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 


function Review() {



    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };





  const data = [
    {
      name: `ishan bagra`,
      img: `./man4.jpg`,
      Review: "LoveCounselor helped me and my partner understand each other's perspectives better. The Gemini API insights were spot on, and the expert solutions worked wonders for us. We're stronger than ever!",
    },
    {
      name: `Harshita yadav`,
      img: `./woman2.jpg`,
      Review: "I felt truly heard and supported. The personalized conversations made me realize things I had been overlooking. LoveCounselor has been a game-changer for our family relationships!",
    },
    {
      name: `vipul dixit`,
      img: `./man5.jpg`,
      Review: "I was hesitant at first, but the expert team provided practical advice and clear steps to resolve our conflicts. It felt like they genuinely cared about my situation.",
    },
    {
      name: `gopal sharma`,
      img: `./man3.jpg`,
      Review: "I used LoveCounselor to address some friendship issues. The solutions were insightful and easy to apply. It's amazing how much this platform can help in all types of relationships.",
    },
    {
      name: `jai taneja`,
      img: `./man4.jpg`,
      Review: "After months of communication breakdown, LoveCounselor helped me and my partner rebuild trust and find a way forward. I highly recommend this platform to anyone facing relationship challenges.",
    },
    {
      name: `mehak verma`,
      img: `./woman2.jpg`,
      Review: "LoveCounselor helped me navigate some tough conversations with my parents. The tips and advice they provided were so helpful and practical.",
    },
    {
      name: `vinay kumar`,
      img: `./man5.jpg`,
      Review:"LoveCounselor gave us the tools and support we needed to reconnect during a tough phase. The mix of personalized advice and practical solutions made all the difference. We’re truly grateful!",
    },
  ];

  return (


     


<>

<h1 className='text-5xl text-center pb-7 text-pink-600 font-bold'>Reviews...</h1>

    <div>
            <Slider {...settings}>
      {data.map((d, index) => (
        <div key={index} className="bg-white h-[450px] text-black rounded-xl ">
          {/* for the image */}
          <div className="h-56 rounded-t-xl bg-pink-600 flex justify-center items-center">
            <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
          </div>

          {/* for the text */}
          <div className="flex flex-col justify-center items-center gap-3 p-3">
            <p className='text-2xl font-semibold capitalize'>{d.name}</p>
            <p className='text'>{d.Review}</p>
            <button className="text-xl bg-pink-500 p-2 rounded-lg text-white">Read More</button>
          </div>
        </div>
      ))}
      </Slider>
    </div>
    </>
  );
}

export default Review;
