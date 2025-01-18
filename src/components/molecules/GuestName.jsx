import { useState, useRef } from "react";

export default function GuestName() {
  const guest = useRef(null);
  const [enteredGuestName, setEnteredGuestName] = useState(null);

  function handleClick() {
    setEnteredGuestName(guest.current.value);
    guest.current.value = null;
  }

  return (
    <div className="text-sm justify-between items-center mt-8 hidden sm:flex sm:text-base">
      <h4 className="font-inter font-medium tracking-wide">
        Welcome,{" "}
        <span className="font-plex italic">{enteredGuestName ?? "Guest"}</span>
      </h4>
      <div className="font-inter flex gap-2">
        <input
          type="text"
          className="px-4 py-1 rounded-md"
          ref={guest}
          placeholder="Your Name"
        />
        <button
          className="px-2 py-1 rounded-md text-slate-200 bg-slate-600 hover:bg-slate-800"
          onClick={handleClick}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
