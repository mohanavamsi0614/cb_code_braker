import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Home = () => {
    const nav=useNavigate()
  useEffect(() => {
    const canvas = document.getElementById('backgroundCanvas');
    const ctx = canvas.getContext('2d');
    const dots = [];
    const numDots = 100;


    for (let i = 0; i < numDots; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
      });
    }

    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach(dot => {
        dot.x += dot.dx;
        dot.y += dot.dy;

        if (dot.x < 0 || dot.x > canvas.width) dot.dx = -dot.dx;
        if (dot.y < 0 || dot.y > canvas.height) dot.dy = -dot.dy;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'orange';
        ctx.fill();
      });
      requestAnimationFrame(update);
    };

    update();
  }, []);

  return (
    <div className="relative w-screen min-h-screen bg-gray-100 flex flex-col justify-start items-center p-4">
      <canvas id="backgroundCanvas" width={window.innerWidth} height={window.innerHeight} className="absolute top-0 left-0 h-full"></canvas>
      <div className="relative z-10 text-center mb-8 bg-white bg-opacity-75 p-6 rounded-lg mt-16 w-full max-w-4xl flex justify-center items-center flex-col shadow-lg">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">Welcome to Code</h1>
          <div className="text-[#E16254] text-3xl md:text-5xl ml-2 font-extrabold typing">Breaker</div>
        </div>
        <h2 className="mt-4 text-xl md:text-2xl text-gray-700">Presented By Coding Blocks KARE</h2>
        <h2 className="mt-2 text-lg md:text-xl text-gray-700">28-01-2025 <span className="text-[#E16254] font-bold">to</span> 29-01-2025</h2>
        <button className="mt-6 px-6 py-3 md:px-8 md:py-4 bg-orange-500 text-white font-bold rounded-lg shadow-lg hover:bg-orange-600 transition duration-300" onClick={()=>{nav("/registration")}}>Register Now!</button>
      </div>

      <div className="relative z-10 text-left max-w-4xl bg-white p-6 md:p-8 rounded-lg shadow-lg mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-[#E16254]">What is this Event about?</h1>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          The Code Breaker event includes a 2-hour workshop on Data Structures and Algorithms (DSA) to be conducted one hour before the event begins. The Code Breaker event consists of two rounds designed to evaluate participants' analytical and coding abilities. Round 1, held on January 7th, features 60 multiple-choice questions across categories like Logical Reasoning, Quantitative Aptitude, Algorithmic Thinking, and Data Interpretation, with one mark per question. Round 2, on January 8th, challenges participants with 5 coding problems (2 easy, 2 medium, 1 hard), testing their problem-solving skills and coding expertise through intricate scenarios.
        </p>
      </div>
      <div className="relative z-10 text-left max-w-4xl bg-white p-6 md:p-8 rounded-lg shadow-lg mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-[#E16254]">How is this Event going to be?</h1>
        <div className="mt-4 text-lg text-gray-700 leading-relaxed">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2 md:p-4">Event</th>
                <th className="border border-gray-300 p-2 md:p-4">Marks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2 md:p-4">Workshop on DSA</td>
                <td className="border border-gray-300 p-2 md:p-4">0</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 md:p-4">
                  <p>Round 1</p>
                  <p>Day 1</p>
                  <p><span className='text-[#E16254] font-bold'>Time:</span> 2:00 PM to 5:00 PM</p>
                </td>
                <td className="border border-gray-300 p-2 md:p-4">25</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 md:p-4">
                  <p>Round 2</p>
                  <p>Day 2</p>
                  <p><span className='text-[#E16254] font-bold'>Time:</span> 2:00 PM to 5:00 PM</p>
                </td>
                <td className="border border-gray-300 p-2 md:p-4">75</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="relative z-10 text-left max-w-4xl bg-white p-6 md:p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl md:text-3xl font-semibold text-[#E16254]">Why is this event for you?</h1>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          This event is perfect for anyone looking to enhance their coding skills, improve their problem-solving abilities, and gain valuable experience in algorithmic reasoning. Whether you're a beginner or an experienced coder, Code Breaker offers a challenging and rewarding experience that will help you grow and succeed in the field of computer science.
        </p>
      </div>
      <button className="mt-6 px-6 py-3 md:px-8 md:py-4 bg-orange-500 text-white font-bold rounded-lg shadow-lg hover:bg-orange-600 transition duration-300" onClick={()=>{nav("/registration")}}>Register Now!</button>

    </div>
  );
};

export default Home;
