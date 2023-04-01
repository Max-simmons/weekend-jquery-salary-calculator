$(document).ready(onReady);


// 1. Make sure the document is ready with console.log();

function onReady() {

// 1. Activate submit button
// 2. Create add employee function
// 3. prevent default , console.log to check
    
$('.submit-button').on('click', addEmployee)

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
    <td>${annualSalary}</td>
    </tr>`

        
    );


}