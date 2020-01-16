let pixelCanvas = document.querySelector('#pixelCanvas');

let colorPicker = document.querySelector('#colorPicker');
// Select color input
let sizePicker = document.querySelector('#sizePicker');
// Select size input

sizePicker.addEventListener('submit', function(event) {
    event.preventDefault();
    makeGrid()
});
// When size is submitted by the user, call makeGrid()

function makeGrid() {
    pixelCanvas.innerHTML = '';
    //create new table

    let iWidth = document.querySelector('#inputWidth').value;

    let iHeight = document.querySelector('#inputHeight').value;
    //Select the table size

    for(let x = 0; x < iHeight; x++) {
        let row = document.createElement('tr');
        pixelCanvas.appendChild(row);
        //create tablerows

        for(let y = 0; y < iWidth; y++) {
            let cell = document.createElement('td');

            cell.addEventListener('click', function() {
                let color = colorPicker.value;
                cell.style.backgroundColor = color;
              });
              //make cell change it's color

        row.appendChild(cell);
        //create cells along the rows
    };
  }
}
