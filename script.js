/********************************

assume you have 3 subjects with 3 reqs each subject, not 1st quarter
- get tentative grades per subject
- ask for previous grade 
- get final grades
- get average grade (of the 3 final grades)
- round to nearest Pisay GWA grade for the quarter

*********************************/

function getScores(){
  let sub1Req1 = parseInt(document.querySelector("#sub1Req1").value);
  let sub1Req2 = parseInt(document.querySelector("#sub1Req2").value);
  let sub1Req3 = parseInt(document.querySelector("#sub1Req3").value);

  let sub2Req1 = parseInt(document.querySelector("#sub2Req1").value);
  let sub2Req2 = parseInt(document.querySelector("#sub2Req2").value);
  let sub2Req3 = parseInt(document.querySelector("#sub2Req3").value);

  let sub3Req1 = parseInt(document.querySelector("#sub3Req1").value);
  let sub3Req2 = parseInt(document.querySelector("#sub3Req2").value);
  let sub3Req3 = parseInt(document.querySelector("#sub3Req3").value);

  let sub1Prev = parseFloat(document.querySelector("#prev1").value);
  let sub2Prev = parseFloat(document.querySelector("#prev2").value);
  let sub3Prev = parseFloat(document.querySelector("#prev3").value);

  console.log(sub1Req1 + sub1Req2 + sub1Req3);
  console.log(sub2Req1 + sub2Req2 + sub2Req3);
  console.log(sub3Req1 + sub3Req2 + sub3Req3);

  getSum(sub1Req1, sub1Req2, sub1Req3);
  getFinal1(grade, sub1Prev);

  getSum(sub2Req1, sub2Req2, sub2Req3);
  getFinal2(grade, sub2Prev);

  getSum(sub3Req1, sub3Req2, sub3Req3);
  getFinal3(grade, sub3Prev);

  getGWA(final1, final2, final3);

}

function getSum(r1, r2, r3){
  let sum = r1+r2+r3;

  console.log(sum);
  getPercent(sum);
  
}

function getPercent(sum){

  const HPS = 20 +30+50;
  percentage = sum/ HPS * 100;

  console.log(percentage);

  getTenta(percentage);

}

function getTenta(p){
  if (p >= 96){
    document.write("Tentative Grade: 1.00" + "<br>");
    grade = 1.00;
  }
  if (p >= 90 && p <= 95.99){
    document.write("Tentative Grade: 1.25" + "<br>");
    grade = 1.25;
  }
  
  if (p >= 84 && p <= 89.99){
    document.write("Tentative Grade: 1.50" + "<br>");
    grade = 1.50;
  }

  if (p >= 78 && p <= 83.99){
    document.write("Tentative Grade: 1.75" + "<br>");
    grade = 1.75;
  }

  if (p >= 72 && p <= 77.99){
    document.write("Tentative Grade: 2.00" + "<br>");
    grade = 2.00;
  }

  if (p >= 66 && p <= 71.99){
    document.write("Tentative Grade: 2.25" + "<br>");
    grade = 2.25;
  }

  if (p >= 60 && p <= 65.99){
    document.write("Tentative Grade: 2.50" + "<br>");
    grade = 2.50;
  }

  if (p >= 55 && p <= 59.99){
    document.write("Tentative Grade: 2.75" + "<br>");
    grade = 2.75;
  }

  if (p >= 50 && p <= 54.99){
    document.write("Tentative Grade: 3.00" + "<br>");
    grade = 3.00;
  }

  if (p >= 40 && p <= 49.99){
    document.write("Tentative Grade: 4.00" + "<br>");
    grade = 4.00;
  }

  if (p <= 40){
    document.write("Tentative Grade: 5.00" + "<br>");
    grade = 5.00;
  }

}

function getFinal1(f, g) {

  final1 = f * 2/3 + g * 1/3;
  document.write("Subject 1 Final Grade: " + final1 + "<br>" + "<br>");
}

function getFinal2(f, g) {

  final2 = f * 2/3 + g * 1/3;
  document.write("Subject 2 Final Grade: " + final2 + "<br>" + "<br>");
}

function getFinal3(f, g) {

  final3 = f * 2/3 + g * 1/3;
  document.write("Subject 3 Final Grade: " + final3 + "<br>" + "<br>");
}

function getGWA(g1, g2, g3) {
  let average = (g1 + g2 + g3) / 3;
  document.write("GWA: " + average + "<br>");
}

function calcGrade(){
  getScores();
}