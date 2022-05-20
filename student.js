class Student {
    constructor(name, surname, dob, id, avatar){
        this.name = name;
        this.surname = surname;
        this.dob = dob;
        this.id = id;
        this.avatar = avatar;
    }
    
    toString(){
        return 'name: ' + this.name + '\n' +
        'name: ' + this.name + '\n' +
        'year of birth: ' + this.dob + '\n' +
        'id: ' + this.id + '\n'
    }

    static fromObjToStudent(obj){
        return new Student(obj.name, obj.surname, obj.dob, obj.id, obj.avatar)
    }

    get dateOfBirth(){
        return new Date(this.dob)
    }
    set datOfBirth(value){
        this.dob = value.toISOString();
    }

    getDaysToBirthDay() {
        //     const todayDate = new Date();
        //     const dateOfBirth = this.dateOfBirth
        //     const diffTime = Math.abs(dateOfBirth - todayDate);
        //     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        //    return diffDays;

        const today = new Date()
        const todayMills = today.getTime();
        const birthdayClone = new Date(this.dateOfBirth.getTime());
        birthdayClone.setFullYear(new Date().getFullYear());
        const birthdayInMills = birthdayClone.getTime();


        let diff
        if (todayMills > birthdayInMills) {
            birthdayClone.setFullYear(new Date().getFullYear() + 1);
            const newYearBirthDayInMills = birthdayClone.getTime();
            diff = newYearBirthDayInMills - todayMills;
        } else {
            diff = birthdayInMills - todayMills;
        }
        
        const daysToBirth = diff / 1000 / 60 / 60 / 24;
        const flooreDateToBirth = Math.floor(daysToBirth);
        return flooreDateToBirth;
    }
}