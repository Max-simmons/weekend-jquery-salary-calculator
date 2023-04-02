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

// $("#add-button").on('click', addMonthly)
}

let monthlyTotal= [];

function addEmployee(event) {
    event.preventDefault();
  
    let firstName = $('#firstname-input').val();
    let lastName = $('#lastname-input').val();
    let idnumber = $('#id-number').val();
    let title = $('#title-input').val();
    let annualSalary =$('#salary-input').val();

    $('tbody').append(`
    <tr id= "table row">
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${idnumber}</td>
    <td>${title}</td>
    <td>$${annualSalary}</td>
    <td><button id="delete-button" data-salary="${annualSalary}">Delete</button></td>
    </tr>`
    );
    
    addMonthly();
    display();
    $('#monthlyTotal').text(calculateMonthly());

    $('#firstname-input').val("");
    $('#lastname-input').val("");
    $('#id-number').val("");
    $('#title-input').val("");
    $('#salary-input').val("");

   

}

function deleteThis(){
    const numberToRemove = Number($(this).attr('data-salary'));
    console.log($(this).attr('data-salary'))
    

    const index = monthlyTotal.indexOf(numberToRemove);
    if (index > -1) { 
    monthlyTotal.splice(index, 1); 
    }

    // monthlyTotal = monthlyTotal.filter(function(item) {
    //     return item !== numberToRemove
    // })
    
    $(this).parent().parent().remove();


    $('#monthlyTotal').text(calculateMonthly());
    
    display();
}

// let monthlyTotal= [];

// 1. get the user input
// 2. create a new variable
// 3. push the new variable into the array
// 4. calulate the total monthly create new function

function addMonthly(){
    let newSalary = Number($('#salary-input').val())
    
    monthlyTotal.push(newSalary);

    console.log(monthlyTotal);

}
// 1. loop thru monthlyTotal
// 2. for each new salary add up total monthly 
function calculateMonthly(){
let monthTotal = 0;
for (let i = 0; i<monthlyTotal.length; i++){

monthTotal += monthlyTotal[i];
}
return monthTotal


console.log(monthTotal);



}

//  Use .css jquery functions to display different background 

function display(){
    if((calculateMonthly()) >= 20000){
        $('#monthlyTotal').css('background-color', 'red');
    } else {
        $('#monthlyTotal').css('background-color', 'white');
    }
}

