let btnAddProPlayer = document.querySelector('#pro-button');
let btnAddProspectPlayer = document.querySelector('#prospect-button');

//let table = document.querySelector('#for-pro');
var table;
var template;

var forRows = 0;
var defRows = 0;
var goaRows = 0;

let playerProName = document.querySelector("#pro-name");
let playerProspectName = document.querySelector("#prospect-name");


btnAddProPlayer.addEventListener('click', () => {
    let name = playerProName.value;
    //console.log(name);
    template = `
        <tr>
            <td>${name}</td>
            <td> <input type="button" 
            id="delete-pro-player" 
            value="Delete" onclick="removeProPlayer(this)"> </td>
        </tr>
    `;
    // <td> <input type="checkbox" id="deleteCheck ' + getRowID() + ' ">
// <td> <button type="button" onclick="removePlayerFromTable(this)">Delete</button></td>
    if (document.querySelector("#forward").checked) {
        table = document.querySelector('#for-pro').getElementsByTagName('tbody')[0];
        //addForwardPro(template);
    }
    else if (document.querySelector("#defense").checked) {
        table = document.querySelector('#def-pro').getElementsByTagName('tbody')[0];
        //addDefensePro(template);
    }
    else if (document.querySelector("#goalie").checked) {
        table = document.querySelector('#goa-pro').getElementsByTagName('tbody')[0];
        //addGoaliePro(template);
    }
    else {
        // error check for when a radio isnt checked.
    }
    table.innerHTML += template;
});

btnAddProspectPlayer.addEventListener('click', () => {
    let name = playerProspectName.value;
    //console.log(name);
    template = `
    <tr>
        <td>${name}</td>
        <td> <input type="button" 
        id="delete-prospect-player" 
        value="Delete" onclick="removeProspectPlayer(this)"> </td>
    </tr>
    `;

    if (document.querySelector("#prospect-forward").checked) {
        table = document.querySelector('#for-prospect').getElementsByTagName('tbody')[0];
        //addForwardPro(template);
    }
    else if (document.querySelector("#prospect-defense").checked) {
        table = document.querySelector('#def-prospect').getElementsByTagName('tbody')[0];
        //addDefensePro(template);
    }
    else if (document.querySelector("#prospect-goalie").checked) {
        table = document.querySelector('#goa-prospect').getElementsByTagName('tbody')[0];
        //addGoaliePro(template);
    }
    else {
        // error checking here for when a radio button ISNT selected.
    }
    table.innerHTML += template;
});

function getRowID() {
    rowID += 1;
    return rowID;
}

function removeProPlayer(player) {
    var row = player;
    while(row.nodeName != "TR"){
        row = row.parentNode;
    }
    
    var selTable = player;
    while(selTable.nodeName != "TABLE") {
        selTable = selTable.parentNode;
    }
     console.log("rows:" + selTable.rows.length);
     console.log("selRow: " + row.rowIndex);

    selTable.deleteRow(row.rowIndex);
}

function removeProspectPlayer(player) {
    var row = player;
    while(row.nodeName != "TR"){
        row = row.parentNode;
    }
    
    var selTable = player;
    while(selTable.nodeName != "TABLE") {
        selTable = selTable.parentNode;
    }
     console.log("rows:" + selTable.rows.length);
     console.log("selRow: " + row.rowIndex);

    selTable.deleteRow(row.rowIndex);
}
