function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

let student1 = new Student('Ann', 'Female', 20);
let student2 = new Student('Mary', 'Female', 25);
let student3 = new Student('Max', 'male', 30);



Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
  }

Student.prototype.addMarks = function (...marksToAdd) {
    if('marks' in this){
        this.marks.push(...marksToAdd)
    }   
}

Student.prototype.getAverage = function () {
    if('marks' in this && this.marks.length > 0){
        return this.marks.reduce((acc, mark, index, arr) => acc + mark / arr.length, 0);
    }
  return 0;
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}
