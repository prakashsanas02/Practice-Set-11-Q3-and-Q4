class Human {
  constructor(name, favfood) {
    this.name = name
    this.favfood = favfood
  }
  walk() {
    console.log(this.name + "Human is Walking")
  }
}

class Student extends Human {
  walk() {
    console.log(this.name + ": Student is Walking")
  }
}

let o = new Student("Prakash", "Yash")
o.walk()

console.log(o instanceof Human)