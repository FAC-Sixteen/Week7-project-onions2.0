const actionTable = document.querySelector('.action-table');



const buildEachAction = (err, data) => {
    if(err) {
        console.log(err, 'Error in buildEachAction function');
    } else {
        const actions = JSON.parse(data);
        actions.forEach((action) => {
        const actionList = document.createElement('tr');
        const actionListId = document.createElement('td');
        actionListId.textContent = action.id;
        actionList.appendChild(actionListId);

        const actionListName = document.createElement('td');
        actionListName.textContent = action.name;
        actionList.appendChild(actionListName);

        const actionListDate = document.createElement('td');
        actionListDate.textContent = action.date;
        actionList.appendChild(actionListDate);
    });
}
    
};

