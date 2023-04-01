$(document).ready(onReady);


// 1. Make sure the document is ready with console.log();

function onReady() {

// 1. Activate submit button
// 2. Create add employee function
// 3. prevent default , console.log to test
// 4. create new variables 
// 5. clear out the remaining words
// 6. create delete button
// 7. create delete function
// 8. Create a function that calculates the total monthly cost add it the the add employee function

    
$('.submit-button').on('click', addEmployee)

$('tbody').on('click', '#delete-button', deleteThis);
}

function addEmployee(event) {
    event.preventDefault();

    let firstName = $('#firstname-input').val();
    let lastName = $('#lastname-input').val();
    let idnumber = $('#id-number').val();
    let title = $('#title-input').val();
    let annualSalary = $('#salary-input').val();

    $('tbody').append(`
    <tr id= "table row">
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${idnumber}</td>
    <td>${title}</td>
    <td>$${annualSalary}</td>
    <td><button id="delete-button">Delete</button></td>
    </tr>`
    );

    $('#firstname-input').val("");
    $('#lastname-input').val("");
    $('#id-number').val("");
    $('#title-input').val("");
    $('#salary-input').val("");
}

function deleteThis(){
    $(this).parent().parent().remove();
}

