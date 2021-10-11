//show and hide button
const show_hide = document.querySelector('#show-hide');
show_hide.addEventListener('click', showHide);
function showHide() {
    const change = document.querySelector('form');

    if(change.style.display === "none"){
        change.style.display = "block";
        show_hide.textContent = "Hide Form Add New Student";
    }
    else {
        change.style.display = "none";
        show_hide.textContent = "Show Form Add New Student";
    }
};
//faculty and program
const fac_prog = document.querySelector('#selectFaculty');
fac_prog.addEventListener('click', selectProgram);
function selectProgram() {
    console.log(fac_prog.value);

    let faculty = document.querySelector('#selectFaculty')
    
    let facultyProg = document.querySelector('#selectProgramStudy');
    
    if (faculty.value = 'Pascasarjana'){
        let option1 = document.createElement('option');
        let option2 = document.createElement('option');
        let text1 = document.createTextNode('Magister management');
        let text2 = document.createTextNode('Magister Teologi');

        option1.appendChild(text1);
        option2.appendChild(text2);
        
        facultyProg.appendChild(option1);
        facultyProg.appendChild(option2);
    }
    else if (faculty.value = 'Fakultas Filsafat'){  
        let option3 = document.createElement('option');
        let text3 = document.createTextNode('Ilmu Filsafat');

        option3.appendChild(text3);
        
        facultyProg.appendChild(option3);
    }
    else if (faculty.value = 'Fakultas Keguruan dan Ilmu Pendidikan'){
        let option4 = document.createElement('option');
        let option5 = document.createElement('option');
        let option6 = document.createElement('option');
        let option7 = document.createElement('option');
        let text4 = document.createTextNode('Pendidikan Agama');
        let text5 = document.createTextNode('Pendidikan Bahasa Inggris');
        let text6 = document.createTextNode('Pendidikan Ekonomi');
        let text7 = document.createTextNode('Pendidikan Luar Sekolah');

        option4.appendChild(text4);
        option5.appendChild(text5);
        option6.appendChild(text6);
        option7.appendChild(text7);
        
        facultyProg.appendChild(option4);
        facultyProg.appendChild(option5);
        facultyProg.appendChild(option6);
        facultyProg.appendChild(option7);
    }
    else if (faculty.value = 'Fakultas Ekonomi dan Bisnis'){
        let option8 = document.createElement('option');
        let option9 = document.createElement('option');
        let text8 = document.createTextNode('Akuntansi');
        let text9 = document.createTextNode('Manajemen');

        option8.appendChild(text8);
        option9.appendChild(text9);
        
        facultyProg.appendChild(option8);
        facultyProg.appendChild(option9);
    }
    else if (faculty.value = 'Fakultas Pertanian'){  
        let option10 = document.createElement('option');
        let text10 = document.createTextNode('Agroteknologi');

        option10.appendChild(text10);
        
        facultyProg.appendChild(option10);
    }
    else if (faculty.value = 'Fakultas Ilmu Komputer'){
        let option11 = document.createElement('option');
        let option12 = document.createElement('option');
        let text11 = document.createTextNode('Informatika');
        let text12 = document.createTextNode('Sistem Informasi');

        option11.appendChild(text11);
        option12.appendChild(text12);
        
        facultyProg.appendChild(option11);
        facultyProg.appendChild(option12);
    }
    else if (faculty.value = 'Fakultas Keperawatan'){
        let option13 = document.createElement('option');
        let option14 = document.createElement('option');
        let text13 = document.createTextNode('Profesi Ners');
        let text14 = document.createTextNode('Keperawatan');

        option13.appendChild(text13);
        option14.appendChild(text14);
        
        facultyProg.appendChild(option13);
        facultyProg.appendChild(option14);
    }
    else if (faculty.value = 'Akademik Sekretasi Manajemen'){  
        let option15 = document.createElement('option');
        let text15 = document.createTextNode('Sekretari (D3)');

        option15.appendChild(text15);
        
        facultyProg.appendChild(option15);
    }

}

//function add student
const form = document.querySelector('form');
form.addEventListener('submit', insertStudent);
function insertStudent(e) {
    e.preventDefault();

    //get user input
    let studentId = document.querySelector('#inputID');
    let studentName = document.querySelector('#inputName');
    let studentGender = document.getElementsByClassName('form-check-input');
    let gender, i;
    for (i=0; i<2; i++){
        if (i = studentGender[0].checked){
            gender = document.querySelector('#radio1');
        }
        else if (i = studentGender[1].checked)
        {
            gender = document.querySelector('#radio2')
        }
    }
    studentGender = gender;

    let studentFaculty = document.querySelector('#selectFaculty');
    let studentProgram = document.querySelector('#selectProgramStudy');
    
    //create element tr & td
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    const td5 = document.createElement('td');

    // let deleteLink = document.createElement('a');
    // deleteLink.className = 'delete';
    // deleteLink.setAttribute('href', '#');
    // deleteLink.appendChild(document.createElement('button'))


    //add element to the parent table element
    const tdText1 = document.createTextNode(studentId.value);
    const tdText2 = document.createTextNode(studentName.value);
    const tdText3 = document.createTextNode(studentGender.value);
    const tdText4 = document.createTextNode(studentFaculty.value);
    const tdText5 = document.createTextNode(studentProgram.value);
    
    
    td1.appendChild(tdText1);
    td2.appendChild(tdText2);
    td3.appendChild(tdText3);
    td4.appendChild(tdText4);
    td5.appendChild(tdText5);

    //add delte icon
    let addIcon = document.querySelector('#deleteData');
    
    const td6 = document.createElement('td');
    const tdText6 = document.createTextNode(addIcon.textContent);
    console.dir(tdText6);
    td6.appendChild(tdText6);


    const table = document.querySelector('#listStudent');
    table.appendChild(tr);
    table.appendChild(td1);
    table.appendChild(td2);
    table.appendChild(td3);
    table.appendChild(td4);
    table.appendChild(td5);
    table.appendChild(td6);
    //table.appendChild(deleteLink);

    studentId.value = '';
    studentName.value = '';
    studentGender.value = '';
    studentFaculty.value = '';
    studentProgram.value = '';
    
}


//search student
const search = document.querySelector('#search');
search.addEventListener('keyup', searchStudent);
function searchStudent(event) {
    let searchText = event.target.value.toLowerCase();

    let listOfStudent = [...document.querySelectorAll('tr')];
    console.log(listOfStudent);

    listOfStudent.forEach((student) => {
        let studentName = student.firstElementChild.textContent;
        console.log(studentName);
        
        if(studentName.toLowerCase().indexOf(searchText) != -1 ){
            student.style.display = 'block';
        }
        else {
            student.style.display = 'none';
        }
    });
}

//remove student
// const deleteStudent = document.querySelectorAll('#allDataStudent');
// deleteStudent.addEventListener('click', removeStudents);
// function removeStudents(event) {
//     if(event.target.classList.contains('delete')){
//         const td = event.target.parentElement;
//         console.dir(td);
//         deleteStudent.removeChild(td);
//     }
// }