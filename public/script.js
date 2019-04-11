const actionTable = document.querySelector('.action-table');
const opinionTable = document.querySelector('.opinion-table');

//on load function to get current actions table
fetch('/get-actions')
    .then(response => response.json())
    .then(buildEachRow(err, response, actionTable));

//on click of action to get opinion table
fetch('/get-opinions')
    .then(response => response.json())
    .then(buildEachRow(err, response, opinionTable));

const buildEachRow = (err, data, tableToFill) => {
    if(err) {
        console.log(err, 'Error in buildEachRow function');
    } else {
        const inputs = JSON.parse(data);
        inputs.forEach((input) => {
        const inputRow = document.createElement('tr');

        const inputId = document.createElement('td');
        inputId.textContent = input.id;
        inputRow.appendChild(inputId);

        const inputName = document.createElement('td');
        inputName.textContent = input.name;
        inputRow.appendChild(inputName);

        const inputDate = document.createElement('td');
        inputDate.textContent = input.date;
        inputRow.appendChild(inputDate);
        
        tableToFill.appendChild(inputRow);
    });
}
    
};

