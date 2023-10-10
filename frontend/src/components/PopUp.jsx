import React from "react";

function PopUp({ todo, handelDelete, setShow }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 ">
      <div className="modal-overlay fixed inset-0 bg-gray-500 opacity-75"></div>

      <div className="modal-container bg-white w-96 mx-auto rounded-lg shadow-lg z-50">
        <div className="modal-content p-4">
          <p className="text-lg font-semibold mb-4 text-stone-950">
            Are you sure you want to delete this todo?
            <br />
            <span className="text-red-300">{todo.description}</span>
          </p>
          <div className="flex justify-end">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
              onClick={handelDelete}
            >
              Yes
            </button>
            <button
              className="bg-gray-400 text-white px-4 py-2 rounded-md"
              onClick={() => setShow(false)}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
