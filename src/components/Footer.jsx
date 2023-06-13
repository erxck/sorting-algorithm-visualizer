import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex justify-center p-3 bg-gray-800 border-t border-gray-700">
      <p className="text-gray-300 text-base">
        Projetado e Desenvolvido por{" "}
        <a
          className="font-bold text-emerald-500 hover:text-emerald-600 duration-300"
          href="https://www.linkedin.com/in/erick-rian/"
          target="_blank"
          rel="noreferrer"
        >
          Erick Rian
        </a>{" "}
        {year}
      </p>
    </footer>
  );
}
