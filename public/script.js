const actionTable = document.querySelector('.action-table');
const opinionTable = document.querySelector('.opinion-table');

const buildEachRow = (data, tableToFill) => {
    console.log('This is the data:', data);
        const inputs = data;
        inputs.forEach((input) => {
        const inputRow = document.createElement('tr');

        const inputId = document.createElement('td');
        inputId.textContent = input.id;
        inputRow.appendChild(inputId);

        if (tableToFill === actionTable) {
            const inputAction = document.createElement('td');
            inputAction.textContent = input.action_point;
            inputRow.appendChild(inputAction);
        } else {
            const inputName = document.createElement('td');
            inputName.textContent = input.name;
            const inputOpinion = document.createElement('td');
            inputOpinion.textContent = input.opinion;
            inputRow.appendChild(inputName, inputOpinion);
        }
        
        const inputDate = document.createElement('td');
        inputDate.textContent = input.date;
        inputRow.appendChild(inputDate);
        
        if (tableToFill === actionTable) {
            inputRow.addEventListener('click', getOpinionTable );
        }
        tableToFill.appendChild(inputRow);
        });
};

//on load function to get current actions table
fetch('/get-actions')
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Fetch not working!');
        }
    })
    .then(json => buildEachRow(json, actionTable))
    .catch((error) => {
        console.log('The fetch error is', error);
    });


//on click of action to get opinion table
const getOpinionTable = (e) => {
    console.log(e.target, 'is e.target');
    const urlToSend = `/get-opinions?=`
fetch( urlToSend)
    .then(response => response.json())
    .then(json => buildEachRow(response, opinionTable));
};