function WeightedActivities(activities) {
  let total = 0;
  for (let i = 0; i < activities.length; i++) {
    total = total + activities[i];}
  let average = total / activities.length;
  let weighted = average * 0.30;
  return Math.floor(weighted);
}


function WeightedLabs(labs) {
  let sortedLabs = labs.slice().sort(function(a, b) {
    return b - a;});
  let bestFive = [];
  for (let i = 0; i < 5; i++) {
    bestFive.push(sortedLabs[i]);}
  let total = 0;
  for (let i = 0; i < bestFive.length; i++) {
    total = total + bestFive[i];}
  let average = total / bestFive.length;
  let weighted = average * 0.40;
  return Math.floor(weighted);
}


function WeightedQuizzes(quizzes) {
  let total = 0;
  for (let i = 0; i < quizzes.length; i++) {
    total = total + quizzes[i];}
  let percent = (total / 40) * 100;
  let weighted = percent * 0.30;
  return Math.floor(weighted);
}


function getLetterGrade(finalgrade) {
  if (finalgrade >= 90) return "A+";
  else if (finalgrade >= 85) return "A";
  else if (finalgrade >= 80) return "A-";
  else if (finalgrade >= 75) return "B+";
  else if (finalgrade >= 70) return "B";
  else if (finalgrade >= 65) return "B-";
  else if (finalgrade >= 60) return "C+";
  else if (finalgrade >= 55) return "C";
}

const tbody = document.getElementById("Web Technology Grade Book");

let aliceActivities = [85, 88, 82, 91, 87];
let aliceLabs = [82, 88, 85, 0, 85, 64];
let aliceQuizzes = [7, 7.5, 6, 7.5];
let aliceActW = WeightedActivities(aliceActivities);
let aliceLabW = WeightedLabs(aliceLabs);
let aliceQuizW = WeightedQuizzes(aliceQuizzes);
var aliceFinal = aliceActW + aliceLabW + aliceQuizW;
var aliceLetter = getLetterGrade(aliceFinal);
tbody.innerHTML += `<tr><td>Alice</td>
                    <td>${aliceActivities.join('</td><td>')}</td>
                    <td>${aliceActW}</td>
                    <td>${aliceLabs.join('</td><td>')}</td>
                    <td>${aliceLabW}</td>
                    <td>${aliceQuizzes.join('</td><td>')}</td>
                    <td>${aliceQuizW}</td>
                    <td>${aliceFinal}</td>
                    <td>${aliceLetter}</td></tr>`;

                    
let pedroActivities = [76, 80, 80, 87, 85];
let pedroLabs = [85, 77, 86, 94, 84, 0];
let pedroQuizzes = [8.5, 9, 9.5, 10];
let pedroActW = WeightedActivities(pedroActivities);
let pedroLabW = WeightedLabs(pedroLabs);
let pedroQuizW = WeightedQuizzes(pedroQuizzes);
var pedroFinal = pedroActW + pedroLabW + pedroQuizW;
var pedroLetter = getLetterGrade(pedroFinal);
tbody.innerHTML += `<tr><td>Pedro</td>
                    <td>${pedroActivities.join('</td><td>')}</td>
                    <td>${pedroActW}</td>
                    <td>${pedroLabs.join('</td><td>')}</td>
                    <td>${pedroLabW}</td>
                    <td>${pedroQuizzes.join('</td><td>')}</td>
                    <td>${pedroQuizW}</td>
                    <td>${pedroFinal}</td>
                    <td>${pedroLetter}</td></tr>`;


let jeffActivities = [95, 90, 80, 93, 92];
let jeffLabs = [100, 98, 100, 80, 97, 96];
let jeffQuizzes = [10, 9.5, 9.5, 10];
let jeffActW = WeightedActivities(jeffActivities);
let jeffLabW = WeightedLabs(jeffLabs);
let jeffQuizW = WeightedQuizzes(jeffQuizzes);
var jeffFinal = jeffActW + jeffLabW + jeffQuizW;
var jeffLetter = getLetterGrade(jeffFinal);
tbody.innerHTML += `<tr><td>Jeff</td>
                    <td>${jeffActivities.join('</td><td>')}</td>
                    <td>${jeffActW}</td>
                    <td>${jeffLabs.join('</td><td>')}</td>
                    <td>${jeffLabW}</td>
                    <td>${jeffQuizzes.join('</td><td>')}</td>
                    <td>${jeffQuizW}</td>
                    <td>${jeffFinal}</td>
                    <td>${jeffLetter}</td></tr>`;


let lauraActivities = [88, 91, 86, 80, 75];
let lauraLabs = [79, 85, 90, 88, 84, 89];
let lauraQuizzes = [8, 9, 7.5, 9];
let lauraActW = WeightedActivities(lauraActivities);
let lauraLabW = WeightedLabs(lauraLabs);
let lauraQuizW = WeightedQuizzes(lauraQuizzes);
var lauraFinal = lauraActW + lauraLabW + lauraQuizW;
var lauraLetter = getLetterGrade(lauraFinal);
tbody.innerHTML += `<tr><td>Laura</td>
                    <td>${lauraActivities.join('</td><td>')}</td>
                    <td>${lauraActW}</td>
                    <td>${lauraLabs.join('</td><td>')}</td>
                    <td>${lauraLabW}</td>
                    <td>${lauraQuizzes.join('</td><td>')}</td>
                    <td>${lauraQuizW}</td>
                    <td>${lauraFinal}</td>
                    <td>${lauraLetter}</td></tr>`;


let mikeActivities = [65, 75, 69, 60, 74];
let mikeLabs = [76, 62, 52, 70, 78, 0];
let mikeQuizzes = [5, 4, 6, 5];
let mikeActW = WeightedActivities(mikeActivities);
let mikeLabW = WeightedLabs(mikeLabs);
let mikeQuizW = WeightedQuizzes(mikeQuizzes);
var mikeFinal = mikeActW + mikeLabW + mikeQuizW;
var mikeLetter = getLetterGrade(mikeFinal);
tbody.innerHTML += `<tr><td>Mike</td>
                    <td>${mikeActivities.join('</td><td>')}</td>
                    <td>${mikeActW}</td>
                    <td>${mikeLabs.join('</td><td>')}</td>
                    <td>${mikeLabW}</td>
                    <td>${mikeQuizzes.join('</td><td>')}</td>
                    <td>${mikeQuizW}</td>
                    <td>${mikeFinal}</td>
                    <td>${mikeLetter}</td></tr>`;


let sarahActivities = [60, 75, 60, 75, 80];
let sarahLabs = [60, 70, 68, 75, 0, 80];
let sarahQuizzes = [6, 7, 8, 5];
let sarahActW = WeightedActivities(sarahActivities);
let sarahLabW = WeightedLabs(sarahLabs);
let sarahQuizW = WeightedQuizzes(sarahQuizzes);
var sarahFinal = sarahActW + sarahLabW + sarahQuizW;
var sarahLetter = getLetterGrade(sarahFinal);
tbody.innerHTML += `<tr><td>Sarah</td>
                    <td>${sarahActivities.join('</td><td>')}</td>
                    <td>${sarahActW}</td>
                    <td>${sarahLabs.join('</td><td>')}</td>
                    <td>${sarahLabW}</td>
                    <td>${sarahQuizzes.join('</td><td>')}</td>
                    <td>${sarahQuizW}</td>
                    <td>${sarahFinal}</td>
                    <td>${sarahLetter}</td></tr>`;


let justinActivities = [50, 62, 63, 60, 55];
let justinLabs = [55, 65, 70, 65, 50, 80]; 
let justinQuizzes = [4.5, 5, 5.5, 5];
let justinActW = WeightedActivities(justinActivities);
let justinLabW = WeightedLabs(justinLabs);
let justinQuizW = WeightedQuizzes(justinQuizzes);
var justinFinal = justinActW + justinLabW + justinQuizW;
var justinLetter = getLetterGrade(justinFinal);
tbody.innerHTML += `<tr><td>Justin</td>
                    <td>${justinActivities.join('</td><td>')}</td>
                    <td>${justinActW}</td>
                    <td>${justinLabs.join('</td><td>')}</td>
                    <td>${justinLabW}</td>
                    <td>${justinQuizzes.join('</td><td>')}</td>
                    <td>${justinQuizW}</td>
                    <td>${justinFinal}</td>
                    <td>${justinLetter}</td></tr>`;


let garryActivities = [80, 70, 65, 70, 90];
let garryLabs = [85, 70, 65, 75, 80, 0];
let garryQuizzes = [7, 6, 5, 6];
let garryActW = WeightedActivities(garryActivities);
let garryLabW = WeightedLabs(garryLabs);
let garryQuizW = WeightedQuizzes(garryQuizzes);
var garryFinal = garryActW + garryLabW + garryQuizW;
var garryLetter = getLetterGrade(garryFinal);
tbody.innerHTML += `<tr><td>Garry</td>
                    <td>${garryActivities.join('</td><td>')}</td>
                    <td>${garryActW}</td>
                    <td>${garryLabs.join('</td><td>')}</td>
                    <td>${garryLabW}</td>
                    <td>${garryQuizzes.join('</td><td>')}</td>
                    <td>${garryQuizW}</td>
                    <td>${garryFinal}</td>
                    <td>${garryLetter}</td></tr>`;