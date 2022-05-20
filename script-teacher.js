fetch('https://62860d1e96bccbf32d6e2bb3.mockapi.io/Teachers')
                        .then(responseCallBack)
                        .then(resultCallBack)
                        .catch(catchError);

function responseCallBack(response) {
    return response.json();
}

function resultCallBack(result) {
    const array = convertResultInArrayOfTeachers(result);
    return array;
}

function convertResultInArrayOfTeachers(result) {
    const arrayOfTeachers = [];    
    for (const obj of result) {
        const teacher = new Teacher(obj.id, obj.name, obj.surname, obj.gender, obj.avatar);    
        arrayOfTeachers.push(teacher);
    }
    return arrayOfTeachers;
}

function catchError (error) {
    concole.log(error);
}


function displayTeachers(arrayOfTeachers) {
    const arrayContainer = document.createElement('div')
    for (let i = 0; i < arrayOfTeachers.length; i++) {
        const teacher = arrayOfTeachers[i]
        const teacherContainer = document.createElement('div')
        const span = document.createElement('span')
        span.innerHTML = teacher.name + ' ' + teacher.surname;
        const img = document.createElement('img')
        img.src = teacher.avatar
        teacherContainer.append(span, img)

        arrayContainer.appendChild(teacherContainer)
    }
    document.body.appendChild(arrayContainer)
}