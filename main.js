function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    function gotResults(error,results){
    if (error) {
        console.log(error);
    }else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'DOG, CAT, LION, COW - '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'NUMBER OF TIMES THE ANIMAL SOUND IS BEEN PLAYED- '+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

        img = document.getElementById('NACHOO'); 
        img1 = document.getElementById('MANUSHH');
        img2 = document.getElementById('liion');  
        img3 = document.getElementById('COOW'); 

        if (results[0].label == "BARK") {
            img.src = 'NACHOO.png';
            img1.src = 'forced smile.gif';
            img2.src = 'lion.gif';
            img3.src = 'COW.gif';
        } else if (results[0].label == "MEOW") {
            img.src = 'NACHOO.png';
            img1.src = 'forced smile.gif';
            img2.src = 'lion.gif';
            img3.src = 'COW.gif';
        } else if (results[0].label == "ROAR") {
            img.src = 'NACHOO.png';
            img1.src = 'forced smile.gif';
            img2.src = 'lion.gif';
            img3.src = 'COW.gif';
        } else if (results[0].label == "MOO") {
            img.src = 'NACHOO.png';
            img1.src = 'forced smile.gif';
            img2.src = 'lion.gif';
            img3.src = 'COW.gif';
        } else {
            img.src = 'NACHOO.png';
            img1.src = 'forced smile.gif';
            img2.src = 'lion.gif';
            img3.src = 'COW.gif';
        }
}
}

