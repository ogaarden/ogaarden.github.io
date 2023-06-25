let array: number[] = [];

function createArray(len: number): number[] {
  const array: number[] = [];
  for (let i = 0; i < len; i++) {
    array.push(Math.floor(Math.random() * 100));
  }
  return array;
}

function visualizeArray(array: number[]) {
  const arrayDiv = document.getElementById("arrayDiv");
  arrayDiv.innerHTML = ""; // Fjern eventuelle eksisterende bokser

  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.height = `${value}px`;
    arrayDiv.appendChild(box);
  }
}

function bubbleSort(): Promise<number[]> {
  return new Promise((resolve) => {
    let len = array.length;
    let swapped;

    let i = 0;
    let j = 0;

    const intervalId = setInterval(() => {
      if (i < len - 1) {
        if (array[j] > array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          swapped = true;
        }

        j++;

        if (j >= len - i - 1) {
          if (!swapped) {
            clearInterval(intervalId);
            resolve(array);
          }

          i++;
          j = 0;
          swapped = false;
        }
      } else {
        clearInterval(intervalId);
        resolve(array);
      }

      visualizeArray(array);
    }, 10); // Juster forsinkelsen etter behov
  });
}

async function sortArray() {
  const sliderValue = parseInt(slider.value);
  array = createArray(sliderValue);
  await bubbleSort();
}

function main() {
  const slider = document.getElementById("slider") as HTMLInputElement;
  const sliderValue = parseInt(slider.value);
  array = createArray(sliderValue);
  visualizeArray(array);
}

const slider = document.getElementById("slider") as HTMLInputElement;
const sliderValueElement = document.getElementById("sliderValue") as HTMLParagraphElement;

slider.addEventListener("input", () => {
  const sliderValue = parseInt(slider.value);
  array = createArray(sliderValue);
  visualizeArray(array);
});

main();
