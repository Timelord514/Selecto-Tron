$(document).ready(function () {
  $("form#language-selector").submit(function (event) {
    event.preventDefault();
    
    const name = parseInt($("#name").val());
    const color = parseInt($("#question1").val());
    const shrimp = parseInt($("#question2").val());
    const moon = parseInt($("#question3").val());
    const games = parseInt($("#question4").val());
    const choice = parseInt($("#question5").val());
    const theAnswer = parseInt($("#question6").val());

    if (total < 18) {
      let resultVal = "Duplo";
      $("#programerLang").text(resultVal);
    } else if (total >= 18 && 88) {
      let resultVal = "C#";
      $("#programerLang").text(resultVal);
    } else if (total > 88 && 182) {
      let resultVal = "Rust";
      $("#programerLang").text(resultVal);
    } else if (total > 182 && 275) {
      let resultVal = "Python";
      $("#programerLang").text(resultVal);
    } else {
      let resultVal = "Ruby";
      $("#programerLang").text(resultVal);
    }
    $("#result").show();


  });
});