//document.write("외부 스크립트 방법");

console.log("콘솔창에 나와야 하는 내용");

var num = 10 + 20;

console.log(num);

let sum = 80 + 1234;
console.log(sum);

let string1 = "hello, world";
let string2 = "시네마 웹사이트 'Cinema website'에 오신걸 환영합니다.";
console.log(string1,string2);


let dan = 3;
let gugu = 8;
let string3 = `${dan} 곱하기 ${gugu}은/는 ${dan * gugu}입니다.`;
console.log(string3);

let studentscore = [80, 70, 90, 60];

console.log(studentscore);
console.log(studentscore[2]);

let stdscore = {
    koreanScore: 80,
    englishScore: 70,
    mathScore: 90,
    scienceScore: 60
};
console.log(stdscore);
console.log(stdscore.koreanScore);

//dan = 2;
//for(let i = 1; i <= 9; i++){
    //console.log(`${dan} * ${i} = ${dan * i}`);
//}

for(let i = 2; i <= 9; i++){
    for(let j = 1; j <= 9; j++){
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log("");
}