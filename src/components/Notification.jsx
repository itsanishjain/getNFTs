import React from "react";

const Notification = () => {
  return (
    <div className="flex flex-col lg:flex-row text-center items-center bg-green-200 border-l-2 border-green-600 p-4">
      <div className="bg-green-400 rounded-full p-2">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className="w-6 h-6 text-white"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </div>
      <div className="ml-4">You are fully confirmed to attend this event!</div>
    </div>
  );
};

export default Notification;
