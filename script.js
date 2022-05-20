const responseCallBack = (response) => response.json();

const createAvatarImgFromSrc = (src) => {
    const image = document.createElement('img');
    image.classList.add('avatar-image');
    image.src = src;
    return image;
}

const createTextSpan = (text) => {
    const span = document.createElement('span');
    span.appendChild(document.createTextNode(text));
    return span;
}

const deleteCallBack = () => {
    initApp();
}

const deleteStudent = (id) => {
    const deleteUrl = 'https://62860d1e96bccbf32d6e2bb3.mockapi.io/students/' + id;
    const fetchConf = {
        method: 'delete'
    }
    fetch(deleteUrl, fetchConf)
    .then(responseCallBack)
    .then(deleteCallBack)
}

const createDeleteButton = (id) => {
    const button = document.createElement('button');
    button.onclick = () => deleteStudent(id);
    const node = document.createTextNode('cancella');
    button.appendChild(node);
    return button;
}

const createStudentCard = (student) => {
    const studentCard = document.createElement('div');
    studentCard.classList.add('student-card');
    studentCard.appendChild(createAvatarImgFromSrc(student.avatar));
    studentCard.appendChild(createTextSpan(student.name + ' ' + student.surname));
    studentCard.appendChild(createTextSpan('Giorni al compleanno: ' + student.getDaysToBirthDay()));
    studentCard.appendChild(createDeleteButton(student.id));
    return studentCard;
}

const createArrayOfStudentCard = (arrayOfStudents) => arrayOfStudents.map(student => createStudentCard(student));

const displayStudents = (arrayOfStudents) => {
    document.body.innerHTML = '';
    const arrayContainer = document.createElement('div');
    arrayContainer.append(...createArrayOfStudentCard(arrayOfStudents));
    document.body.appendChild(arrayContainer);
}

const convertResultInArrayOfStudents = (result) => result.map(obj => Student.fromObjToStudent(obj));

const resultCallBack = (result) => displayStudents(convertResultInArrayOfStudents(result));

const catchError = (error) => console.log(error);

const initApp = () => fetch('https://62860d1e96bccbf32d6e2bb3.mockapi.io/students')
                        .then(responseCallBack)
                        .then(resultCallBack)
                        .catch(catchError);

initApp();




// function mapExample(array) {
    
    //     const tempArray = [];    
    //     for (const obj of array) {
        //         const newObj = new Student(obj.id, obj.name, obj.surname, obj.dob, obj.avatar)    
        //         tempArray.push(newObj);
        //     }
        //     return tempArray;
        // }
        
        // function responseCallBack(response) {
            //     console.log('response', response);    
            //     return response.json();
//             function displayStudents(arrayOfStudents) {
//                 const arrayContainer = document.createElement('div');
            
//                 for (let i = 0; i < arrayOfStudents.length; i++) {
            
//                     const student = arrayOfStudents[i]
//                     const studentContainer = document.createElement('div');
//                     const span = document.createElement('span');
//                     const node = document.createTextNode(student.name + ' ' + student.surname);
            
//                     span.appendChild(node);
//                     studentContainer.appendChild(span);
//                     arrayContainer.appendChild(studentContainer);
//                 }
            
//                 document.body.appendChild(arrayContainer);
//             }
            
            
// // }


// function manageError(error) {
//     console.log(error);    
// }


// function resultCallBack(result) {
//     console.log('result', result);    
//     const array = convertResultInArrayOfStudents(result);
//     console.log('array', array);
//     displayStudents(result);
// }    


// function convertResultInArrayOfStudents(result) {
//     const arrayOfStudents = [];    
//     for (const obj of result) {
//         const student = new Student(obj.id, obj.name, obj.surname, obj.yob, obj.avatar);    
//         arrayOfStudents.push(student);
//     }
//     return arrayOfStudents;
// }


// function convertResultInArrayOfStudents(result) {
//     const arrayOfStudents = [];    
//     for (const obj of result) {
//         const student = Student.fromObj(obj);    
//         arrayOfStudents.push(student);
//     }
//     return arrayOfStudents;
// }


// function convertResultInArrayOfStudents(result) {
//     const arrayOfStudents = result.map(obj => Student.fromObj(obj));    
//     return arrayOfStudents;
// }











// console.log('prima');

// fetch('./student-data.json').then((resp) => resp.json()).then((res) => console.log('risultato', res));

// console.log('dopo');



// const ajax = new XMLHttpRequest()

// ajax.onreadystatechange = onreadystatechangeCallback

// ajax.open('get', './student-data.json');

// ajax.send()

// function onreadystatechangeCallback() {
//     if (this.readyState === 4) {
//         if (this.status === 200) {
//             console.log(this.responseText)
//             const array = JSON.parse(this.responseText);
//             console.log(array);
//         } else {
//             console.log('server non raggiungibile');
//         }
//     }
// }




// fetch('./student_data.json').then(responseCallBack, manageError).then(resultCallBack, manageError);

// fetch('./student-data.json').then(responseCallBack).then(resultCallBack).catch(manageError);

// function responseCallBack(response) {
//     console.log('response', response);
//     return response.text();
// }


// function resultCallBack(result) {
//     console.log('result', result);
// }


// function manageError(error) {
//     console.log(error);
// }





// fetch('https://62860d1bf0e8f0bb7c0f4284.mockapi.io/students').then(responseCallBack).then(resultCallBack).catch(menageError)

// function responseCallBack(response){
//     console.log(response);
//     return response.json();
// }

// function menageError(error){
//     console.log(error)
// }

// function resultCallBack(result) {
//     console.log(result);
//     const array = convertArrayToStudents(result)
//     console.log('yoyo', array)
//     displayStudents(array)
//     for (const student of array) {
//         student.getDaysToBirthDay();
//     }
// }

// function displayStudents(arrayOfStudents){
//     const arrayContainer = document.createElement('div')
//     for (let i = 0; i < arrayOfStudents.length; i++) {
//         const student = arrayOfStudents[i]
//         const studentContainer = document.createElement('div')
//         const span = document.createElement('span')
//         span.innerHTML = student.name + ' ' + student.surname + ' mancano giorni al compleanno: ' + student.getDaysToBirthDay();
//         const img = document.createElement('img')
//         img.src = student.avatarUrl
//         img.width = '100'
//         studentContainer.append(span, img)

//         arrayContainer.appendChild(studentContainer)
//     }
//     document.body.appendChild(arrayContainer)
// }


// function convertArrayToStudents(result){
//     const arrayOfStudents = result.map(obj => Student.fromObjToStudent(obj))
//     return arrayOfStudents
// }
