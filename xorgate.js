function calculateBmi() {
    var weight = document.bmiForm.weight.value
    var height = document.bmiForm.height.value
    if(weight > 0 && height > 0){	
    var finalBmi = 703*weight/(height*height)
    document.bmiForm.bmi.value = finalBmi
    if(finalBmi < 18.5){
    document.bmiForm.meaning.value = "You are too thin."
    }
    if(finalBmi > 18.5 && finalBmi < 25){
    document.bmiForm.meaning.value = "You are healthy."
    }
    if(finalBmi > 25){
    document.bmiForm.meaning.value = "You are overweight."
    }
    }
    else{
    alert("Please Fill in everything correctly")
    }
    }

function hex2bin(){
    var hex = document.bmiForm.hex.value;
    var bin= ("00000000" + (parseInt(hex, 16)).toString(2)).substr(-8);
    document.bmiForm.bin.value = bin;
}

function txt2ascii(){
    var text = document.bmiForm.text.value;
    var ascii= text.charCodeAt(0);
    document.bmiForm.ascii.value = ascii;
}

function txt2uni(){
    var text = document.bmiForm.text2.value;
    var uni= text.charCodeAt(0).toString(16);;
    document.bmiForm.uni.value = uni;
}

