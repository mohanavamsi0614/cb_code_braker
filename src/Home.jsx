import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import kalasalingam from "/public/kalasalingam.png"
import cb from "/public/KARE(latest).png"
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
    <div className="relative w-screen min-h-screen bg-gray-100 overflow-x-hidden flex flex-col justify-start items-center p-4">
      <canvas id="backgroundCanvas" width={window.innerWidth} height={window.innerHeight} className="absolute top-0 left-0 h-full"></canvas>
      <div className="relative z-10 text-center mb-8 bg-white bg-opacity-75 p-6 rounded-lg mt-16 w-full max-w-4xl flex justify-center items-center flex-col shadow-lg">
      <div className="w-full flex justify-center items-center">
                    <img src={kalasalingam} className="size-16" alt="Kalasalingam Logo" />
                    <img src={cb} className=" size-16 relative ml-1 rounded-full" alt="Coding Blocks Logo" />
                </div>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <h1 className=" patrick-hand-sc-regular text-3xl md:text-5xl font-bold text-gray-800">Welcome to Code</h1>
          <div className="text-[#E16254] patrick-hand-sc-regular patrick-hand-sc-regular patrick-hand-sc-regular patrick-hand-sc-regular text-3xl md:text-5xl ml-2 font-extrabold typing patrick-hand-sc-regular ">Breaker</div>
        </div>
        <h2 className="mt-4 text-xl md:text-2xl text-gray-700">Presented By Coding Blocks KARE</h2>
        <h2 className="mt-2 text-lg md:text-xl text-gray-700">28-01-2025 <span className="text-[#E16254] patrick-hand-sc-regular patrick-hand-sc-regular patrick-hand-sc-regular patrick-hand-sc-regular font-bold">to</span> 29-01-2025</h2>
        <button className="mt-6 px-6 py-3 md:px-8 md:py-4 bg-[#E16259] text-white font-bold rounded-lg shadow-lg hover:bg-orange-600 transition duration-300" onClick={()=>{nav("/registration")}}>Register Now!</button>
      </div>

      <div className="relative z-10 text-left max-w-4xl bg-white p-6 md:p-8 rounded-lg shadow-lg mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-[#E16254] patrick-hand-sc-regular patrick-hand-sc-regular patrick-hand-sc-regular patrick-hand-sc-regular">What is this Event about?</h1>
        <ul className="mt-4 text-lg text-gray-700 leading-relaxed list-disc list-inside">
          <li>The event includes a 2-hour workshop on Data Structures and Algorithms (DSA) conducted one hour before the event begins.</li>
          <li>Round 1 (January 7th): 60 multiple-choice questions covering Logical Reasoning, Quantitative Aptitude, Algorithmic Thinking, and Data Interpretation.</li>
          <li>Round 2 (January 8th): 5 coding problems (2 easy, 2 medium, 1 hard) to test problem-solving skills and coding expertise.</li>
        </ul>
      </div>
      <div className="relative z-10 text-left max-w-4xl bg-white p-6 md:p-8 rounded-lg shadow-lg mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-[#E16254] patrick-hand-sc-regular patrick-hand-sc-regular patrick-hand-sc-regular patrick-hand-sc-regular">How is this Event going to be?</h1>
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
                  <p><span className='text-[#E16254] patrick-hand-sc-regular patrick-hand-sc-regular patrick-hand-sc-regular patrick-hand-sc-regular font-bold'>Time:</span> 2:00 PM to 5:00 PM</p>
                </td>
                <td className="border border-gray-300 p-2 md:p-4">25</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 md:p-4">
                  <p>Round 2</p>
                  <p>Day 2</p>
                  <p><span className='text-[#E16254] patrick-hand-sc-regular patrick-hand-sc-regular patrick-hand-sc-regular patrick-hand-sc-regular font-bold'>Time:</span> 2:00 PM to 5:00 PM</p>
                </td>
                <td className="border border-gray-300 p-2 md:p-4">75</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="relative z-10 text-left max-w-4xl bg-white p-6 md:p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl md:text-3xl font-semibold text-[#E16254] patrick-hand-sc-regular patrick-hand-sc-regular patrick-hand-sc-regular patrick-hand-sc-regular">Why is this event for you?</h1>
        <ul className="mt-4 text-lg text-gray-700 leading-relaxed list-disc list-inside">
          <li>Enhance your coding skills.</li>
          <li>Improve your problem-solving abilities.</li>
          <li>Gain valuable experience in algorithmic reasoning.</li>
          <li>Challenging and rewarding experience for both beginners and experienced coders.</li>
        </ul>
      </div>
      <button className="mt-6 z-10 px-6 py-3 md:px-8 md:py-4 bg-[#E16259] text-white font-bold rounded-lg shadow-lg hover:bg-orange-600 transition duration-300" onClick={()=>{nav("/registration")}}>Register Now!</button>

    </div>
  );
};

export default Home;
