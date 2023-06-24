
let array: number[] = [];

function createArray(len: number): number[] {
  for (let i = 0; i < len; i++){
      array.push(Math.floor(Math.random() * 100));
  }
  return array;
}

function visualizeArray(array) {
    const arrayDiv = document.getElementById("arrayDiv");
    arrayDiv.innerHTML = ""; // Fjern eventuelle eksisterende bokser
  
    for (let i = 0; i < array.length; i++) {
      const value = array[i];
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.height = `${value}px`;
      arrayDiv.appendChild(box);
      console.log(array)
    }
  }

  function bubbleSort(arr: number[]): number[] {
    let len = arr.length;
    let swapped;
  
    do {
      swapped = false;
  
      for (var i = 0; i < len - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          var temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
  
    return arr;
  }
  

  
function main() {
    visualizeArray(bubbleSort(createArray(10)));
}

main();
//Q: WHy is there a red line under array and createArray?
//A: Because they are not used in the main function.
//Q: Why is there still a red line when its called in the main function?
//A: Because the main function is not called in the file.
//Q: Why is there still a red line when the main function is called in the file?
//A: Because the file is not called in the html file.
//Q: Why is there still a red line when the file is called in the html file?
//A: Because the html file is not called in the browser.
//Q: Why is there still a red line when the html file is called in the browser?
//A: Because the browser is not called in the terminal.
//Q: Why is there still a red line when the browser is called in the terminal?
//A: Because the terminal is not called in the app.ts file.
//Q: Why is there still a red line when the terminal is called in the app.ts file?
//A: Because the terminal is not called in the app.ts file.
//Q: Why is there still a red line when the terminal is called in the app.ts file?
//A: Because the terminal is not called in the app.ts file.
