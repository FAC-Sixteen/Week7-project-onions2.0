const actionTable = document.querySelector('.action-table');
const opinionTable = document.querySelector('.opinion-table');
const formActionId = document.querySelector('#form-id-to-send');

const buildEachRow = (data, tableToFill) => {
    while(tableToFill.childNodes[2]) {
        tableToFill.removeChild(tableToFill.childNodes[2])
    };
    
    const inputs = data;

    inputs.forEach((input) => {
    const inputRow = document.createElement('tr');
    inputRow.value = input.id;

    if (tableToFill === actionTable) {
        const inputId = document.createElement('td');
        inputId.textContent = input.id;
        inputRow.appendChild(inputId);

        const inputAction = document.createElement('td');
        inputAction.textContent = input.action_point;
        inputRow.appendChild(inputAction);

    } else if (tableToFill === opinionTable) {
        const inputName = document.createElement('td');
        inputName.textContent = input.name;
        inputRow.appendChild(inputName);

        const inputOpinion = document.createElement('td');
        inputOpinion.textContent = input.opinion;
        inputRow.appendChild(inputOpinion);
    }
    
    const inputDate = document.createElement('td');
    let inputDateStamp = input.date;
    let formattedDate = new Date(inputDateStamp.replace(' ', 'T'));
    inputDate.textContent = formattedDate;
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
    const highlitAction = e.target.parentElement.value;
    const urlToSend = `/get-opinions?=${highlitAction}`; 

    //sets the value of the hidden input to the selected action's id
    //for postData to use
    formActionId.value = highlitAction;
fetch( urlToSend)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Fetch not working!');
        }
    })
    .then(json => buildEachRow(json, opinionTable))
    .catch((error) => {
        console.log('The fetch error is', error);
});
};

