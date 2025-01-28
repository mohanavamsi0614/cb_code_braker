import axios from "axios";
import api from "./api";
import { useState } from "react";

function PaymentCard({ student }) {
  const [photo, setPhoto] = useState(false);
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState();
  async function handleVerify(id) {
    try {
      setLoading(true);
      const response = await axios.get(`${api}/event/codebrake/student/${id}`,);
      console.log(response.data);
      setVerified(true);
    } catch (err) {
      console.error("Error verifying:", err);
      alert("Failed to verify the team.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-6 p-6 bg-white rounded-lg shadow-lg flex justify-between items-start space-x-6 hover:shadow-2xl transition-shadow duration-300">
      <div className="w-2/3">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Name:{student.name || "Team Name"}
        </h2>
        <h2>Trx:{student.transactionId}</h2>
        <h2>Upi id:{student.upiId}</h2>
        <div className="mt-4 flex items-center space-x-4">
          <button
            onClick={() => handleVerify(student._id)}
            className={`px-4 py-2 rounded font-semibold text-white flex items-center space-x-2 ${
              "bg-[#E16254] hover:bg-[#E16256] transition duration-300"
            }`}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
                Loading...
              </>
            ) : (
              <span>{verified ? "Verified" : "Verify"}</span>
            )}
          </button>

          {verified && (
            <span className="text-green-500 font-bold"> ✅ Verified</span>
          )}
        </div>

       

      <div className="w-1/3">
        {student.transactionPhotoUrl && (
          <img
            src={student.transactionPhotoUrl}
            onClick={() => setPhoto(true)}
            className="w-full h-48 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity"
          />
        )}
      </div>

      {photo && (
        <div className="fixed inset-0 overflow-visible flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
          <div className="bg-gray-700 rounded-lg p-4 relative shadow-lg max-w-lg w-full">
            <div className="flex justify-between items-center mb-4">
              <p className="text-xl font-semibold text-white text-center w-full">
                {student.name}
              </p>
              <button
                className="absolute top-2 right-4 text-white text-xl hover:text-red-500"
                onClick={() => setPhoto(false)}
              >
                X
              </button>
            </div>

            <div className="flex justify-center items-center">
              <img
                src={student.transactionPhotoUrl}
                alt="Team"
                className="max-w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

export default PaymentCard;
