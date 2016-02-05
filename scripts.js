$(document).ready(function() {
  $('#blanks form').submit(function(event) {
    var person1Input = $("input#person1").val();
    var positionInput = $("input#position").val();
    var animalInput = $("input#animal").val();
    var crimeInput = $("input#crime").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();
    var fluidInput = $("input#fluid").val();
    var numberInput = $("input#number").val();
    var animal2Input = $("input#animal2").val();

    $('.person1').text(person1Input);
    $('.animal').text(animalInput);
    $('.crime').text(crimeInput);
    $('.verb').text(verbInput);
    $('.noun').text(nounInput);
    $('.fluid').text(fluidInput);
    $('.number').text(numberInput);
    $('.animal2').text(animal2Input);

    $("#story").show();

    event.preventDefault();
  });

});
