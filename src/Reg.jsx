import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Nav from './Nav';

const defaultData = {
  name: "",
  email: "",
  year: "",
  department: "",
  regnum: "",
  hostel: "",
  roomNumber: ""
};

const Form = () => {
  const storedData = JSON.parse(localStorage.getItem("formData")) || {};
  const [error, setError] = useState("");
  const [name, setName] = useState(storedData.name || defaultData.name);
  const [email, setEmail] = useState(storedData.email || defaultData.email);
  const [year, setYear] = useState(storedData.year || defaultData.year);
  const [department, setDepartment] = useState(storedData.department || defaultData.department);
  const [regnum, setregnum] = useState(storedData.regnum || defaultData.regnum);

  useEffect(() => {
    const formData = {
      name,
      email,
      year,
      department,
      regnum,
    };
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [name, email, year, department, regnum, ]);

  const nav = useNavigate();

  const validateForm = () => {
    if (!name.trim()) return "Name is required.";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) return "A valid Email is required.";
    if (!year.trim()) return "Year is required.";
    if (!department.trim()) return "Department is required.";
    if (!regnum.trim()) return "Registration Number is required.";
    return null;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = () => {
    const error = validateForm();
    if (error) {
      alert(error);
      return;
    }
    if (department.toLowerCase() !== 'it') {
      setError("Registration is now open only for IT students as all CSE slots are filled.");
      return;
    }
    const formData = {
      name,
      email,
      year,
      department,
      regnum,
    };
    console.log('Collected Form Data:', formData);
    nav("/payment", { state: formData });
  };

  return (
    <div className="flex-col items-center overflow-visible p-6 justify-center h-full flex w-full bg-white">
      
      <div className="border rounded-lg h-full p-6 flex flex-col items-center max-w-lg space-y-6 w-full container bg-gray-100">
        <div className="relative p-3 w-[95%]">
          <div className="size-12 animate-bounce rounded-full bg-[#E16254] absolute top-2 left-1 p-4"></div>
          <div className="size-12 animate-bounce rounded-full bg-gray-400 absolute bottom-1 right-1"></div>
          <div className="relative p-6 bg-white bg-opacity-20 backdrop-blur rounded-lg shadow-lg border border-gray-300 w-full text-center">
            <h2 className="text-2xl font-bold text-gray-800">Registration Form</h2>
          </div>
        </div>

        <div className="w-full">
          <label htmlFor="name" className="text-gray-800">Name: <span className='text-red-700'>*</span></label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name..."
            className="w-full p-3 mb-2 mt-1 text-gray-800 shadow-inner bg-white bg-opacity-10 backdrop-blur-md rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400"
          />
          <label htmlFor="regnum" className="text-gray-800">Registration Number: <span className='text-red-700'>*</span></label>
          <input
            type="text"
            id="regnum"
            value={regnum}
            onChange={(e) => setregnum(e.target.value)}
            placeholder="Enter your registration number..."
            className="w-full p-3 mb-2 mt-1 text-gray-800 shadow-inner bg-white bg-opacity-10 backdrop-blur-md rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400"
          />
          <label htmlFor="email" className="text-gray-800 mt-3">Email: <span className='text-red-700'>*</span></label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address..."
            className="w-full p-3 mb-2 mt-1 text-gray-800 shadow-inner bg-white bg-opacity-10 backdrop-blur-md rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400"
          />
          <label htmlFor="year" className="text-gray-800 mt-3">Year: <span className='text-red-700'>*</span></label>
          <input
            type="number"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="Enter your year..."
            className="w-full p-3 mb-2 mt-1 text-gray-800 shadow-inner bg-white bg-opacity-10 backdrop-blur-md rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400"
          />
          <label htmlFor="department" className="text-gray-800 mt-3">Department: <span className='text-red-700'>*</span></label>
          <input
            type="text"
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            placeholder="Enter your department..."
            className="w-full p-3 mb-2 mt-1 text-gray-800 shadow-inner bg-white bg-opacity-10 backdrop-blur-md rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400"
          />
        
        </div>
      </div>
      <div className="w-full flex justify-end m-3 items-center h-auto">
        <button
          onClick={handleSubmit}
          className="w-40 font-semibold bg-[#E16254] text-white rounded-full h-14 m-3 border"
        >
          Next
        </button>
      </div>
      {error && (
        <div className='modal-overlay'>
          <div className='modal-content flex flex-col justify-center items-center'>
            <img src={errorlogo} className='w-16 animate-pulse' alt="Error" />
            <p className="font-semibold mb-4">Registration is now open only for <span className='text-[#E16254] font-bold'>IT</span> students as all <span className='text-[#E16254] font-bold'>CSE</span> slots are filled.</p>
            <button className='p-2 bg-[#E16254] rounded text-white' onClick={() => { nav("/") }}>Home</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
