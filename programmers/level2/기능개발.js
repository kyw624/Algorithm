/*
1. 각 기능의 개발속도는 다르다. (= 뒤에 있는 기능이 먼저 개발될 수 있다.)
2. 앞에 있는 기능의 개발이 끝나야 뒤쪽의 완료된 개발이 함께 배포된다.
3. 파라미터
  - progresses: 배포 순서대로 작업의 진도가 적힌 정수 배열.
  - speeds: 각 작업의 개발 속도가 적힌 정수 배열.

[조건]
  - 작업의 개수 (progresses, speeds의 길이) 는 100개 이하.
  - 작업 진도는 100 미만의 자연수.
  - 작업 속도는 100 이하의 자연수.
  - 배포는 하루에 한 번 가능.

[출력]
  - 각 배포마다 몇 개의 기능이 배포되는지 반환.
*/

function solution(progresses, speeds) {
  const copyProgresses = [...progresses];
  const copySpeeds = [...speeds];
  const length = copyProgresses.length;
  const result = [];
  let index = 0;

  while (index < length) {
    let count = 0;

    for (let i = index; i < length; i++) {
      if (copyProgresses[i] < 100) copyProgresses[i] += copySpeeds[i];
    }

    for (let i = index; i < length; i++) {
      if (copyProgresses[i] < 100) break;
      else {
        index = i + 1;
        count++;
      }
    }

    if (count !== 0) result.push(count);
  }

  return result;
}

console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1, 3, 2]
console.log(solution([96, 99, 98, 97], [1, 1, 1, 1])); // [4]

[4, 1, 2, 3];
