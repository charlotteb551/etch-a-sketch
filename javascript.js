const container = document.querySelector("#container");
const gridSizeButton = document.querySelector("#size");

function createGrid(size){
    container.innerHTML=""; //Clears the old grid

    for (let i=0;i < size*size; i++){
        const square = document.createElement("div");

        square.classList.add("square");

        square.addEventListener("mouseenter",() => {
            square.style.backgroundColor = "black";
        });

        container.appendChild(square);
    }

    const squareSize = 640/size;

    const squares = document.querySelectorAll(".square");

    squares.forEach(square => {
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
    });
}

createGrid(16);

gridSizeButton.addEventListener("click", () =>{
    const input = prompt('Enter number of squares per side (1-100):');

    const size = Number(input)

    if (!Number.isInteger(size)){
        alert("Number entered must be an integer")
    } else if (size >= 1 && size <= 100) {
        createGrid(size);
    } else {
        alert("Please enter a number between 1 and 100.");
    }
});
