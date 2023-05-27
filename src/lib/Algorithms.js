const audio = new Audio("src/assets/audio/beep.mp3");

function swap(array, a, b) {
  let aux = array[a];
  array[a] = array[b];
  array[b] = aux;
}

export function SelectionSort(array, setIntervalId) {
  if (Math.max(...array) === array[array.length - 1]) {
    return;
  }

  function algorithm() {
    const list = document.querySelectorAll(".algorithm li span");
    let i = 0;
    let j = 0;
    let min = 0;

    const newIntervalId = setInterval(() => {
      if (i < array.length) {
        if (j < array.length) {
          if (array[j] < array[min]) {
            min = j;
          }
          j++;
        } else {
          swap(array, i, min);

          for (let k = 0; k < array.length; k++) {
            list[k].style.height = array[k] * 3 + "px";
            audio.play();
          }

          i++;
          j = i;
          min = i;
        }
      } else {
        clearInterval(newIntervalId);
      }
    }, 0);

    setIntervalId(newIntervalId);
  }

  return algorithm();
}

export function BubbleSort(array, setIntervalId) {
  if (Math.max(...array) === array[array.length - 1]) {
    return;
  }

  function algorithm() {
    const list = document.querySelectorAll(".algorithm li span");
    let i = 0;
    let j = 0;

    const newIntervalId = setInterval(() => {
      if (i < array.length) {
        if (j < array.length) {
          if (array[j] > array[j + 1]) {
            swap(array, j, j + 1);

            for (let k = 0; k < array.length; k++) {
              list[k].style.height = array[k] * 3 + "px";
              audio.play();
            }
          }

          j++;
        } else {
          i++;
          j = 0;
        }
      } else {
        clearInterval(newIntervalId);
      }
    }, 0);

    setIntervalId(newIntervalId);
  }

  return algorithm();
}

export function InsertionSort(array, setIntervalId) {
  if (Math.max(...array) === array[array.length - 1]) {
    return;
  }

  function algorithm() {
    const list = document.querySelectorAll(".algorithm li span");
    let i = 1;

    const newIntervalId = setInterval(() => {
      if (i < array.length) {
        let x = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > x) {
          array[j + 1] = array[j];
          j = j - 1;
        }
        array[j + 1] = x;

        for (let k = 0; k < array.length; k++) {
          list[k].style.height = array[k] * 3 + "px";
          audio.play();
        }

        i++;
      } else {
        clearInterval(newIntervalId);
      }
    }, 10);

    setIntervalId(newIntervalId);
  }

  return algorithm();
}

export function MergeSort(array, setIntervalId) {
  if (Math.max(...array) === array[array.length - 1]) {
    return;
  }

  function algorithm() {
    const list = document.querySelectorAll(".algorithm li span");
    const left = array.slice(0, array.length / 2);
    const right = array.slice(array.length / 2, array.length);
    const leftSorted = left.sort((a, b) => a - b);
    const rightSorted = right.sort((a, b) => a - b);
    let newArray = [];
    let i = 0,
      j = 0,
      k = 0;

    const newIntervalId = setInterval(() => {
      if (i < leftSorted.length && j < rightSorted.length) {
        if (leftSorted[i] < rightSorted[j]) {
          newArray[k] = leftSorted[i];
          list[k].style.height = newArray[k] * 3 + "px";
          audio.play();
          i++;
        } else {
          newArray[k] = rightSorted[j];
          list[k].style.height = newArray[k] * 3 + "px";
          audio.play();
          j++;
        }
        k++;
      } else if (i < leftSorted.length) {
        newArray[k] = leftSorted[i];
        list[k].style.height = newArray[k] * 3 + "px";
        audio.play();
        i++;
        k++;
      } else if (j < rightSorted.length) {
        newArray[k] = rightSorted[j];
        list[k].style.height = newArray[k] * 3 + "px";
        audio.play();
        j++;
        k++;
      } else {
        clearInterval(newIntervalId);
      }
    }, 10);

    setIntervalId(newIntervalId);

    array.splice(0, array.length, ...newArray);
  }

  return algorithm();
}

export function QuickSort(array, setIntervalId) {
  if (Math.max(...array) === array[array.length - 1]) {
    return;
  }

  function swap(array, i, min) {
    let aux = array[i];
    array[i] = array[min];
    array[min] = aux;
  }

  const list = document.querySelectorAll(".algorithm li span");

  function partition(array, low, high) {
    let pivot = array[low];
    let i = low;
    let j = low + 1;

    while (j <= high) {
      if (array[j] < pivot) {
        i++;
        swap(array, i, j);
        for (let k = 0; k < array.length; k++) {
          list[k].style.height = array[k] * 3 + "px";
          audio.play();
        }
      }
      j++;
    }

    swap(array, low, i);

    for (let k = 0; k < array.length; k++) {
      list[k].style.height = array[k] * 3 + "px";
      audio.play();
    }

    return i;
  }

  function quickSortHelper(array, low, high) {
    if (low < high) {
      let pivot = partition(array, low, high);
      quickSortHelper(array, low, pivot - 1);
      quickSortHelper(array, pivot + 1, high);
    }
  }

  quickSortHelper(array, 0, array.length - 1);
}
