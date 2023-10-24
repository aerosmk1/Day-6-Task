class Person{
    constructor(firstname,lastname,age,country,city){
        console.log(this)
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
        this.country = country
        this.city = city
    }
}

const person1 = new Person('muthu','kumar',25,'india','madras')
console.log(person1)