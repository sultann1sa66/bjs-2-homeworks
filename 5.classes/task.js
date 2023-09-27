class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
        
    }
    fix() {  
      this.state * 1.5;
    }
   set state(newState) {
      this._state = newState * 1.5;
      if(this._state < 0){
         this._state = 0;
      }
      if(this._state > 100){
         this._state = 100;
      }
   

   }
   get state(){
      return this._state;
   }
}
class Magazine extends PrintEditionItem {
   constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = 'magazine';
   }
}

class Book extends PrintEditionItem {
   constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = 'book';
   }
}

class NovelBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = 'novel';
   }
}

class FantasticBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = 'fantastic';
   }
}

class DetectiveBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = 'detective';
   }
}



class Library {
   constructor(name) {
      this.name = name;
      this.books = [];
   }
   addBook(book) {
      if(book.state > 30) {
         this.books.push(book);
      }
   }
   findBookBy(type, value) {
      let findBook = this.books.find(book => book[type] === value);
      return findBook || null;
   }
   giveBookByName(bookName) {
      let findIndex = this.books.findIndex(book => book.name === bookName);
      if(findIndex === -1){
         return null;
      }
      return this.books.splice(findIndex, 1)[0];
   }  
}

class Student {
   constructor(name, gender, age) {
      this.name = name;
      this.gender = gender;
      this.age = age;
      this.marks = {};
   }
   addMark(mark, subjectName) {
      if(mark < 6 && mark > 2){
         if(!this.marks[subjectName]){
            this.marks[subjectName] = [];
         }
         this.marks[subjectName].push(mark);
      }
      return; 
   }
   getAverageBySubject(subjectName) {
      if(subjectName in this.marks && this.marks[subjectName].length > 0){
          return this.marks[subjectName].reduce((acc, mark, index, arr) => acc + mark / arr.length, 0);
      }
      return 0;
   }
   getAverage() {
      let subjects = Object.keys(this.marks);
      if(subjects.length === 0) {
         return 0;
      }
      return subjects.reduce((acc, subject) => acc + this.getAverageBySubject(subject), 0) / subjects.length;
   }

 }
 

 
