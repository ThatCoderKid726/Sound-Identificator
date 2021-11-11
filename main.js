function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/DczoT96Ml/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error); 
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    imgd = document.getElementById('dog') 
    imgc = document.getElementById('cat')
    imgc2 = document.getElementById('cricket')
    imgb = document.getElementById('bird')

    if (results[0].label == "Dog") {
      imgd.src = 'dog img.jfif';
    } else if (results[0].label == "Cat") {
      imgc.src = 'cat img.jfif';
    } else if (results[0].label == "Cricket") {
      imgc2.src = 'cricket.jfif';
    }else if (results[0].label == "Bird") {
      imgb.src = 'bird image.jfif';
    }else{
      img.src = 'street image.jfif';
    }
    
  }
}