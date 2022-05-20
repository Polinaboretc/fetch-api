// fare il tasto espandi per altri dati

class Teacher {
    constructor(name, surname, gender, id, avatar){
        this.name = name;
        this.surname = surname;
        this.gender = gender;
        this.id = id;
        this.avatar = avatar;
    }


    toString(){
        return 'name: ' + this.name + '\n' +
        'surname: ' + this.surname + '\n' +
        'gender: ' + this.gender + '\n' +
        'id: ' + this.id + '\n'
    }

    static fromObjToTeacher(obj){
        return new Teacher(obj.name, obj.surname, obj.gender, obj.id, obj.avatar)
    }

}
