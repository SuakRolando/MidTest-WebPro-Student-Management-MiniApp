const form = document.querySelector('form');

form.addEventListener('submit', insertStudent);


function insertStudent() {
    let studentId = document.querySelector('#inputID');
    let studentName = document.querySelector('#inputName');
    let studentGender = document.querySelector('#radio1');
    let studentGender2 = document.querySelector('#radio2');
    let studentFaculty = document.querySelector('#selectFaculty');
    let studentProgram = document.querySelector('#selectProgramStudy');

    //console.log(`${studentId.value} / ${studentName.value} / ${studentGender.value} / ${studentFaculty.value} / ${studentProgram.value}`);
    // console.log(studentGender);
    
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    const td5 = document.createElement('td');

    const tdText1 = document.createTextNode(studentId.value);
    const tdText2 = document.createTextNode(studentName.value);
    const tdText3 = document.createTextNode(`${studentGender.value}${studentGender2.value}`);
    const tdText4 = document.createTextNode(studentFaculty.value);
    const tdText5 = document.createTextNode(studentProgram.value);
    
    td1.appendChild(tdText1);
    td2.appendChild(tdText2);
    td3.appendChild(tdText3);
    td4.appendChild(tdText4);
    td5.appendChild(tdText5);

    const table = document.querySelector('#listStudent');
    table.appendChild(tr);
    table.appendChild(td1);
    table.appendChild(td2);
    table.appendChild(td3);
    table.appendChild(td4);
    table.appendChild(td5);

    studentId.value = '';
    studentName.value = '';
    studentGender.value = '';
    studentFaculty.value = '';
    studentProgram.value = '';
    

    

}
