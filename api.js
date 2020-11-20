var results;
fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple')
.then(res => res.json())
.then((out) => {
  results = out.results;
})

document.getElementById('question').innerHTML = results[0].question

document.getElementById('1').innerHTML = results[0]
document.getElementById('2').innerHTML = results[0]
document.getElementById('3').innerHTML = results[0]
document.getElementById('4').innerHTML = results[0]