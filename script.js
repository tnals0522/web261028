// script.js : 내 영화 평점 통계(콘솔판)
// 작성자 : 김수민2651011
const titles = ["극장판 치이카와: 인어 섬의 비밀", "오늘 밤, 세계에서 이 사랑이 사라진다 해도", "옵세션", "범죄도시 2", "오디세이"];
const ratings = [7.4, 7.6, 8.16, 7.32, 8.01];
const years = [2026, 2022, 2026, 2022, 2026];
let sum = 0;
for (let i = 0; i < ratings.length; i++) {
    sum = sum + ratings[i];
}
console.log("합계:", sum);

const average = sum / ratings.length;
console.log("평균:", average)

let max = ratings[0];
let maxIndex = 0;

let count = 0;

for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] >= 8) count++;
    if (ratings[i] > max) {
        max = ratings[i];
        maxIndex = i;
    }
}
console.log("최고:", titles[maxIndex], max)
console.log("8점 이상:", count + "편");

for(let i = 0; i < ratings.length; i++) {
    
    let label;

    if (ratings[i] >= 8.5) {
        label = "명작";
    } else if (ratings[i] >= 7) {
        label = "추천";
    } else {
        label = "보통";
    }
    console.log(titles[i] + " (" + years[i] + ") : " + ratings[i] + " " + label);
}

const avgText = average.toFixed(1);
const best = titles[maxIndex];
alert(`내 영화 ${titles.length}편, 평균 ${avgText}점, 최고는 ${best}`);