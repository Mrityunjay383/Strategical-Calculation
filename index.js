//Coded by Mrityunjay

// Event Listener
//option change callBack
document.getElementById('option').addEventListener("change", () => {

  var option = document.getElementById('option').value;//getting the value of user choosen option

  document.getElementById('optionValue').innerText = option;
});


//Result callBack
document.querySelector("#showResult").addEventListener("click", () => {

  var valuesArr = [];//this arr get the finale data points which will use for evaluation
  var values = document.getElementById('values').value;//get the value from the user input filed
  var stringValuesArr = values.split(",");//geting the input value as array

  //pushing the data values as number in valuesArr
  for(var i = 0; i < stringValuesArr.length; i++){
    var noBlankString = stringValuesArr[i].replace(/ /g, "");//for replacing the black from the whole string
    if(noBlankString.length != 0){
      valuesArr.push(Number(noBlankString));
    }
  }


  var option = document.getElementById('option').value;
  var result;

  var show;
  //Conditional statement is for checking which value should it provide
  if(option === ""){
    show = "Please choose a option above to get the result";
  }
  else if(option === "Mean"){
    result = mean(valuesArr);
  }
  else if(option === "Variance"){
    result = variance(valuesArr);
  }
  else{
    result = standardDeviance(valuesArr);
  }

  //Conditional statement is for checking weather values are numbers or something else
  if(isNaN(result) && show != "Please choose a option above to get the result"){
    show = "Please provide only with comma seprated numbers";
  }else if(show === "Please choose a option above to get the result"){
    show = show;
  }
  else{
    show = `The ${option} of data points [${valuesArr}] is <span class="acValue">${result}</span>`;
  }

  document.querySelector("#result").innerHTML = show;

});

//Functions
function mean(arr){
  var mean = arr.reduce((a,b) => {return a+b;})/arr.length;
  return mean;
}

function variance(arr){
  var getMean = mean(arr);//this variable get the value of mean from above function

  var variance = arr.map((a) =>
  {return Math.pow((a-getMean),2);}).reduce((a,b) =>
  {return a+b;})/arr.length;

  return variance;
}

function standardDeviance(arr){
  var getVariance = variance(arr);//this variable get the value of variance from above function

  var sD = Math.sqrt(getVariance);
  return sD;
}
