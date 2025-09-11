import React from "react";

export default function Button(props) {
  const { func, text } = props;
  return (
    <button
      onClick={func}
      className="duration-200 px-8 mx-auto py-4 rounded-md border-blue-400 border-[2px] border-solid bg-slate-950 blueShadow"
    >
      <p>{text}</p>
    </button>
  );
}
