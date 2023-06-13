import React, { useEffect, useState } from "react";

import {
  SelectionSort,
  BubbleSort,
  InsertionSort,
  MergeSort,
  QuickSort,
} from "../lib/Algorithms";
import About from "./About";

export default function Main() {
  const nav = [
    { id: 1, name: "Selection Sort", complexity: "O(n²)" },
    { id: 2, name: "Bubble Sort", complexity: "O(n²)" },
    { id: 3, name: "Insertion Sort", complexity: "O(n)" },
    { id: 4, name: "Merge Sort", complexity: "O(n log n)" },
    { id: 5, name: "Quick Sort", complexity: "O(n log n)" },
  ];

  const [selected, setSelected] = useState("Selection Sort");
  const [array, setArray] = useState([]);
  const [button, setButton] = useState(false);

  function generateArray() {
    let SM_view = window.matchMedia("(max-width: 620px)");
    let mobile_L_view = window.matchMedia("(max-width: 425px)");
    let mobile_M_view = window.matchMedia("(max-width: 375px)");
    let mobile_S_view = window.matchMedia("(max-width: 320px)");
    let max = 100;
    const list = document.querySelector(".algorithm");
    list.innerHTML = "";
    const array = [];

    if (SM_view.matches) {
      max = 65;
    }

    if (mobile_L_view.matches) {
      max = 50;
    }

    if (mobile_M_view.matches) {
      max = 45;
    }

    if (mobile_S_view.matches) {
      max = 40;
    }

    for (let i = 0; i < max; i++) {
      array.push(Math.floor(Math.random() * 100 + 1));
    }

    setArray(array);

    array.forEach((item, index) => {
      const li = document.createElement("li");
      li.classList.add(
        "text-white",
        "text-sm",
        "font-bold",
        "flex",
        "items-end"
      );
      li.setAttribute("key", index);
      li.innerHTML = `<span class="flex justify-center items-end w-[6px] bg-emerald-500" style="height: ${
        item * 3
      }px"></span>`;
      list.appendChild(li);
    });
  }

  useEffect(() => {
    generateArray();
  }, [selected]);

  function renderSort() {
    setButton(true);
    switch (selected) {
      case "Selection Sort":
        return SelectionSort(array, setButton);
      case "Bubble Sort":
        return BubbleSort(array, setButton);
      case "Insertion Sort":
        return InsertionSort(array, setButton);
      case "Merge Sort":
        return MergeSort(array, setButton);
      case "Quick Sort":
        return QuickSort(array, setButton);
      default:
        return;
    }
  }

  return (
    <main className="py-10 px-2 bg-gray-900 flex-1 block gap-7 xl:flex xl:items-center xl:justify-evenly xl:px-4">
      <div className="space-y-7">
        <section className="w-full">
          <ul className="hidden md:flex flex-wrap gap-4 justify-center items-center">
            {nav.map((item) => (
              <li key={item.id}>
                <button
                  className={`bg-emerald-500 p-3 text-white text-base font-bold uppercase w-full rounded duration-300 ${
                    button
                      ? "bg-red-500"
                      : "bg-emerald-500 hover:bg-emerald-600"
                  }`}
                  type="button"
                  value={item.name}
                  onClick={(e) => setSelected(e.target.value)}
                  disabled={button}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
          <label
            className="text-white text-xl flex md:hidden justify-center items-center text-center flex-col gap-3"
            htmlFor="sortSelect"
          >
            Selecione o algoritmo de ordenação
            <select
              className="text-black"
              name="sortSelect"
              id="sortSelect"
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              disabled={button}
            >
              {nav.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>
        </section>

        <section className="flex justify-center items-center w-full">
          <div className="flex justify-center items-center flex-col w-full">
            <h1 className="text-white text-3xl font-bold uppercase text-center">
              {selected}
            </h1>
            <h2 className="text-white text-xl font-bold uppercase text-center my-2">
              Complexidade:{" "}
              {nav.find((item) => item.name === selected).complexity}
            </h2>
            <ul className="algorithm flex gap-[1px] my-14"></ul>
            <div className="flex justify-center w-full gap-4">
              <button
                className={`button-generate bg-emerald-500 p-3 text-white text-base font-bold uppercase w-fit rounded duration-300 ${
                  button ? "bg-red-500" : "bg-emerald-500 hover:bg-emerald-600"
                }`}
                type="button"
                onClick={generateArray}
                disabled={button}
              >
                Embaralhar
              </button>

              <button
                className={`button-sort p-3 text-white text-base font-bold uppercase w-fit rounded duration-300 ${
                  button ? "bg-red-500" : "bg-emerald-500 hover:bg-emerald-600"
                }`}
                type="button"
                onClick={renderSort}
                disabled={button}
              >
                Ordenar
              </button>
            </div>
          </div>
        </section>
      </div>
      <About selected={selected} />
    </main>
  );
}
