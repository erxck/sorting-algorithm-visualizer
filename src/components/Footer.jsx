import React from "react";

export default function Footer() {
  return (
    <footer className="flex justify-center p-3 bg-gray-800">
      <p className="text-gray-300 text-base">
        Powered by{" "}
        <a
          className="text-emerald-500 font-bold hover:text-emerald-600 duration-300"
          href="https://github.com/erxck"
          target="_blank"
          rel="noopener noreferrer"
        >
          Erick Rian
        </a>
      </p>
    </footer>
  );
}
