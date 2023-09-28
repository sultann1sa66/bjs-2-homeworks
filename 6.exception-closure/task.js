﻿function parseCount(num) {
    if(Number.isNaN(Number.parseFloat(num))){
        throw new Error('Невалидное значение');
    }
    return Number.parseFloat(num);
}

function validateCount(num) {
    try {
        return parseCount(num)
    } catch(error) {
        return error;
    } finally {

    }
}
  class Triangle {
    constructor(a, b, c) {
        if(a + b < c || b + c < a || c + a < b) {
            throw new Error('Треугольник с такими сторонами не существует');
        }

        this.a = a;
        this.b = b;
        this.c = c;
    }
    get perimeter() { 
        return this.a + this.b + this.c; 
    }
    get area() {
        const halfP = this.perimeter / 2
        return Number(Math.sqrt(halfP * (halfP - this.a) * (halfP - this.b) * (halfP - this.c)).toFixed(3));
    }
    
  }

  function getTriangle(a, b, c){
    try {
        return new Triangle(a, b, c);
    } catch {
        return {
               get perimeter() {
               return 'Ошибка! Треугольник не существует'
               },
               get area() {
               return 'Ошибка! Треугольник не существует'
                }
        }
        
    } finally {

    }
  }
 