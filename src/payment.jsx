import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import api from "./api";
import Modal from "./Model";
import done from "/1cbd3594bb5e8d90924a105d4aae924c.gif";
import qr from "/public/alt3.jpg"

function Payment() {
  const [upiId, setupi] = useState("");
  const [transactionId, settxn] = useState("");
  const [transactionPhotoUrl, seturl] = useState("");
  const [isDone, setisDone] = useState(false);
  const [link, setlink] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(""); 
  const data = useLocation().state;
  const wid = useRef();

  useEffect(() => {
    let myWidget = cloudinary.createUploadWidget(
      {
        cloudName: "dus9hgplo",
        uploadPreset: "vh0llv8b",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          setlink(result.info.secure_url);
        } else if (error) {
          console.error("Error during Cloudinary upload:", error);
          setError("Image upload failed! Please try again.");
        }
      }
    );
    wid.current = myWidget;
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  async function handleSubmit() {
    setIsLoading(true);
    if (!upiId || !transactionId || !link) {
      setError("All fields are required! Please fill in UPI ID, Transaction Number, and upload the screenshot.");
      setIsLoading(false);
      return;
    }

    const transactionPhotoUrl = link;
    const finaldata = { ...data, upiId, transactionId, transactionPhotoUrl: transactionPhotoUrl };
    console.log(finaldata);

    try {
      const response = await axios.post(`${api}/event/codebrake/register`, finaldata);
      console.log(response);
      setIsLoading(false);
      setisDone(true);
    } catch (error) {
      console.error("Error during payment submission:", error);
      setError(
        "Something went wrong during submission! Please try again or contact us at 6281605767 or codingblocks@klu.ac.in."
      );
      setIsLoading(false);
    }
  }

  const handlePayment = () => {
    const upiId = "6305282987@okbizaxis";
    const amount = "100";
    const name = "Coding Blocks";

    const upiUrl = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR`;
    window.location.href = upiUrl;
  };

  return (
    <div className="flex-col items-center overflow-visible p-6 justify-center h-full flex w-full bg-white">
      <div className="w-full justify-items-start">
        <Link to="/registration">
          <button className="w-40 font-semibold bg-black rounded-full h-11 m-3 border text-white">
            &#8592; Back
          </button>
        </Link>
      </div>

      <div className="w-full max-w-md space-y-4 container p-6 border rounded bg-gray-100 shadow-lg">
        <h3 className="text-2xl text-black font-bold">🔒 Payment</h3>
        <p className="text-black">
          <b>Info:</b> Please scan the QR code below to make a payment for:
        </p>
        <div className="text-black border p-4 rounded bg-white shadow-sm">
          <p className="font-bold text-center">{data.teamName}</p>
          <hr />
          <p className="m-1">
            <b>Name</b>: {data.name} x 100
          </p>
          <b className="m-1">
            Total: <i className="text-red-600 text-lg">₹100</i>
          </b>
        </div>
        <p className="text-black">
          Total of <b className="text-red-600 text-xl">₹100</b> using any UPI app. And also provide your UPI ID and
          Transaction Number for our reference.
        </p>
        <div className="w-full flex flex-col justify-center p-4 bg-white bg-opacity-20 backdrop-blur rounded-lg shadow-md">
          <p className="text-black">Scan Here To Pay:</p>
          <div className="w-full flex flex-col justify-center items-center">
            <img src={qr} alt="QR Code for Payment" className=" w-72 object-contain" />
            <button onClick={handlePayment} className=" border border-[#E16254] p-2 mt-1 ">Click to Pay</button>
           <a href={qr} download="qr"><p className=" text-white bg-[#E16254] font-bold border rounded p-4 mt-2">Download</p></a> 
          </div>
        </div>

        <div>
          <label htmlFor="upi" className="text-black">
            Your UPI ID: <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            id="upi"
            value={upiId}
            onChange={(e) => setupi(e.target.value)}
            placeholder="UPI ID"
            className="w-full p-3 border text-black bg-white m-0 bg-opacity-10 border-black rounded-lg  focus:ring-2 focus:ring-blue-400"
          />

          <label htmlFor="txn" className="text-black">
            Transaction Number: <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            id="txn"
            value={transactionId}
            onChange={(e) => settxn(e.target.value)}
            placeholder="Transaction Number"
            className="w-full mb-2 border border-black mt-1 p-3 text-black bg-white bg-opacity-10 rounded-lg  focus:ring-2 focus:ring-blue-400"
          />

          <label htmlFor="transactionScreenshot" className="text-black">
            Transaction Screenshot: <span className="text-red-700">*</span>
          </label>
          <div className="flex justify-center">
            <button
              onClick={() => wid.current.open()}
              className="w-72 h-12 rounded-lg bg-[#E16254] text-white"
            >
              Upload Your Screenshot
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="w-40 font-semibold bg-black rounded-full h-14 m-3 border text-white"
      >
        Submit
      </button>
   

      {(isLoading || isDone || error) && (
        <Modal isLoading={isLoading}>
          {isDone && (
            <div className="modal-content">
              <img src={done} alt="Success" />
              <p className="text-xl font-bold">Registration successfully!</p>
              <p className="font-mono w-full">
                Please check your inbox for the confirmation mail. Thank you!
              </p>
              <Link to="/">
                <button className="bg-[#E16254] w-24 p-4 text-white rounded mt-5">Home</button>
              </Link>
            </div>
          )}
          {error && (
            <div className="modal-content">
              <p className="text-xl font-bold text-red-500">Error</p>
              <p className="font-mono w-full">{error}</p>
              <button
                onClick={() => setError("")}
                className="bg-[#E16254] w-24 p-4 text-white rounded mt-5"
              >
                Close
              </button>
            </div>
          )}
        </Modal>
      )}
    </div>
  );
}

export default Payment;
