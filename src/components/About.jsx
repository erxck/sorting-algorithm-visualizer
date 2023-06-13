export default function About({ selected }) {
  const about = [
    {
      id: 1,
      title: "Selection Sort",
      description:
        "A classificação por seleção é um algoritmo de classificação, especificamente uma classificação por comparação no local. Ele tem complexidade de tempo O(n2), tornando-o ineficiente em listas grandes e geralmente tem desempenho pior do que a classificação por inserção semelhante. A ordenação por seleção é conhecida por sua simplicidade e tem vantagens de desempenho em relação a algoritmos mais complicados em certas situações, particularmente onde a memória auxiliar é limitada.",
    },
    {
      id: 2,
      title: "Bubble Sort",
      description:
        "A classificação por bolhas, às vezes chamada de classificação por afundamento, é um algoritmo de classificação simples que percorre repetidamente a lista, compara elementos adjacentes e os troca se estiverem na ordem errada. A passagem pela lista é repetida até que a lista seja ordenada.",
    },
    {
      id: 3,
      title: "Insertion Sort",
      description:
        "A classificação por inserção é um algoritmo de classificação simples que constrói a matriz classificada final (ou lista) um item por vez. É muito menos eficiente em listas grandes do que algoritmos mais avançados, como quicksort, heapsort ou merge sort.",
    },
    {
      id: 4,
      title: "Merge Sort",
      description:
        "O Merge sort é um algoritmo de classificação eficiente, de uso geral e baseado em comparação. A maioria das implementações produz uma classificação estável, o que significa que a ordem dos elementos iguais é a mesma na entrada e na saída. Merge sort é um algoritmo de dividir e conquistar que foi inventado por John von Neumann em 1945.",
    },
    {
      id: 5,
      title: "Quick Sort",
      description:
        "Quicksort é um algoritmo de classificação eficiente. Desenvolvido pelo cientista da computação britânico Tony Hoare em 1959 e publicado em 1961, ainda é um algoritmo comumente usado para classificação. Quando bem implementado, pode ser cerca de duas ou três vezes mais rápido que seus principais concorrentes, merge sort e heapsort.",
    },
  ];
  return (
    <div className="w-full mt-10 max-w-lg mx-auto xl:mx-0 xl:mt-0 bg-gray-800 p-6 border border-gray-700 rounded-lg">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          {about.map(
            (item) =>
              item.title === selected && (
                <div
                  key={item.id}
                  className="flex flex-col items-center justify-center w-full gap-3"
                >
                  <h1 className="text-white text-2xl font-bold uppercase text-center">
                    {item.title}
                  </h1>
                  <p className="text-white text-base text-center">
                    {item.description}
                  </p>
                </div>
              )
          )}
        </div>

        <div className="flex flex-col items-center justify-center gap-3 mt-10">
          <h1 className="text-white text-2xl font-bold uppercase text-center">
            Como funciona?
          </h1>
          <p className="text-white text-base text-center">
            Clique em <b>ORDENAR</b> para ver o algoritmo em ação.
          </p>
          <p className="text-white text-base text-center">
            Clique em <b>EMBARALHAR</b> para gerar uma nova lista.
          </p>
        </div>
      </div>
    </div>
  );
}
