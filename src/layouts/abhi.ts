"use strict";

var abhi: string = "abhishek";
var arr: string[] = [1, 2, 3, 4];

console.log(abhi);

function fun(num: number): string {
  return num.toString();
}
fun(12);

type typeObj = {
   readonly name: string,
    id: number
}

const obj : typeObj = {
    name: "abhishek",
    id: 123,
}

obj.name = 'divya';