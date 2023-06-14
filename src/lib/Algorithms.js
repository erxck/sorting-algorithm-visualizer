/* Projetado e Desenvolvido por Erick Rian 2023 */

// const audio. = new Audio("/beep.mp3");

function swap(array, a, b, aux = false) {
  const list = document.querySelectorAll(".algorithm li span");

  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;

  list[a].style.height = array[a] * 3 + "px";
  list[b].style.height = array[b] * 3 + "px";
  // audio.play();

  setTimeout(
    () => {
      list[a].style.backgroundColor = "white";
      list[b].style.backgroundColor = "white";
    },
    aux ? 0 : 100
  );

  list[a].style.backgroundColor = "red";
  list[b].style.backgroundColor = "red";
}

export function SelectionSort(array, setButton) {
  const sortedArray = array.slice().sort((a, b) => a - b);
  if (sortedArray.toString() === array.toString()) {
    setButton(false);
    return;
  }

  function selection(vet) {
    const tam = vet.length;
    let i = 0,
      j,
      min;

    const interval = setInterval(() => {
      if (i < tam - 1) {
        min = i;
        j = i + 1;
        while (j < tam) {
          if (vet[j] < vet[min]) {
            min = j;
          }
          j++;
        }
        if (i !== min) {
          swap(vet, i, min);
        }
        i++;
      } else {
        clearInterval(interval);
        for (let i = 0; i < tam; i++) {
          setTimeout(() => {
            const list = document.querySelectorAll(".algorithm li span");
            list[i].style.backgroundColor = "rgb(16 185 129)";
            // audio.play();
          }, 20 * i);
        }
        setButton(false);
      }
    }, 100);
  }

  return selection(array);
}

export function BubbleSort(array, setButton) {
  const sortedArray = array.slice().sort((a, b) => a - b);
  if (sortedArray.toString() === array.toString()) {
    setButton(false);
    return;
  }

  function bubble(array) {
    let i = 0;
    let j = 0;
    let aux = true;

    const interval = setInterval(() => {
      if (i < array.length) {
        if (j < array.length - i - 1) {
          if (array[j] > array[j + 1]) {
            swap(array, j, j + 1, aux);
          }
          j++;
        }
        if (j === array.length - i - 1) {
          i++;
          j = 0;
        }
      } else {
        clearInterval(interval);
        for (let i = 0; i < array.length; i++) {
          setTimeout(() => {
            const list = document.querySelectorAll(".algorithm li span");
            list[i].style.backgroundColor = "rgb(16 185 129)";
            // audio.play();
          }, 20 * i);
        }
        setButton(false);
      }
    }, 0);
  }

  return bubble(array);
}

export function InsertionSort(array, setButton) {
  const sortedArray = array.slice().sort((a, b) => a - b);
  if (sortedArray.toString() === array.toString()) {
    setButton(false);
    return;
  }

  function insertion(array) {
    let i = 1;

    const interval = setInterval(() => {
      if (i < array.length) {
        let j = i;
        while (j > 0 && array[j - 1] > array[j]) {
          swap(array, j, j - 1);
          j--;
        }
        i++;
      } else {
        clearInterval(interval);
        for (let i = 0; i < array.length; i++) {
          setTimeout(() => {
            const list = document.querySelectorAll(".algorithm li span");
            list[i].style.backgroundColor = "rgb(16 185 129)";
            // audio.play();
          }, 20 * i);
        }
        setButton(false);
      }
    }, 50);
  }

  return insertion(array);
}

export function MergeSort(array, setButton) {
  const list = document.querySelectorAll(".algorithm li span");
  const sortedArray = array.slice().sort((a, b) => a - b);
  if (sortedArray.toString() === array.toString()) {
    setButton(false);
    return;
  }

  function mergeSortWithAnimation(arr) {
    mergeSortRecursive(arr, 0, arr.length - 1);
  }

  function mergeSortRecursive(arr, left, right) {
    return new Promise((resolve) => {
      if (left < right) {
        const mid = Math.floor((left + right) / 2);
        mergeSortRecursive(arr, left, mid, setButton).then(() => {
          mergeSortRecursive(arr, mid + 1, right, setButton).then(() => {
            merge(arr, left, mid, right).then(() => {
              if (left === 0 && right === arr.length - 1) {
                for (let i = 0; i < arr.length; i++) {
                  setTimeout(() => {
                    const list =
                      document.querySelectorAll(".algorithm li span");
                    list[i].style.backgroundColor = "rgb(16 185 129)";
                    // audio.play();
                  }, 20 * i);
                }
                setButton(false); // Atualiza o estado do botão para false quando a ordenação é concluída
              }
              resolve();
            });
          });
        });
      } else {
        resolve();
      }
    });
  }

  function merge(arr, left, mid, right) {
    return new Promise((resolve) => {
      const mergedArray = [];
      let i = left;
      let j = mid + 1;
      let k = 0;

      while (i <= mid && j <= right) {
        if (arr[i] < arr[j]) {
          mergedArray[k++] = arr[i++];
        } else {
          mergedArray[k++] = arr[j++];
        }
      }

      while (i <= mid) {
        mergedArray[k++] = arr[i++];
      }

      while (j <= right) {
        mergedArray[k++] = arr[j++];
      }

      k = 0;
      setInterval(() => {
        if (k < mergedArray.length) {
          arr[left + k] = mergedArray[k];
          list[left + k].style.height = mergedArray[k] * 3 + "px";
          // audio.play();

          if (k > 0) {
            list[left + k - 1].style.backgroundColor = "white";
          }

          list[left + k].style.backgroundColor = "red";
          k++;
        } else {
          resolve();
        }
      }, 20);
    });
  }

  return mergeSortWithAnimation(array);
}

export function QuickSort(array, setButton) {
  const sortedArray = array.slice().sort((a, b) => a - b);
  if (sortedArray.toString() === array.toString()) {
    setButton(false);
    return;
  }

  function quickSortWithAnimation(arr) {
    quickSortRecursive(arr, 0, arr.length - 1);
  }

  function partition(arr, esq, dir) {
    const pivo = arr[dir];
    let i = esq - 1;

    for (let j = esq; j <= dir - 1; j++) {
      if (arr[j] < pivo) {
        i++;
        swap(arr, i, j);
      }
    }

    swap(arr, i + 1, dir);
    return i + 1;
  }

  function quickSortRecursive(arr, esq, dir) {
    return new Promise((resolve) => {
      if (esq < dir) {
        const pivo = partition(arr, esq, dir);
        setTimeout(() => {
          quickSortRecursive(arr, esq, pivo - 1).then(() => {
            quickSortRecursive(arr, pivo + 1, dir).then(() => {
              if (esq === 0 && dir === arr.length - 1) {
                for (let i = 0; i < arr.length; i++) {
                  setTimeout(() => {
                    const list =
                      document.querySelectorAll(".algorithm li span");
                    list[i].style.backgroundColor = "rgb(16 185 129)";
                    // audio.play();
                  }, 20 * i);
                }
                setButton(false);
              }
              resolve();
            });
          });
        }, 100);
      } else {
        resolve();
      }
    });
  }

  return quickSortWithAnimation(array);
}
