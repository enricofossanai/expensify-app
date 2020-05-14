class Person{
    constructor(name = 'Anonymous') {
        this.name = name
    }
    getGreeding() {
        return `Hi. I am ${this.name}`
    }
}

const me = new Person('James');
console.log(me.getGreeding())

const other = new Person();
console.log(other.getGreeding())