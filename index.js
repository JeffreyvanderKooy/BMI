
function calculateBMI(){

    var heightValue = Number(document.querySelector("#height").value);
    var weightValue = Number(document.querySelector("#kg").value);

    if (heightValue === 0 || weightValue === 0) {

        const popup = document.querySelector(".popup");

        popup.classList.add("popup-visible");
    }
    if (document.querySelector(".slidertext").textContent === "metric"){
    var bmi = weightValue / Math.pow(heightValue/100, 2);
     }
    else {
    var bmi = weightValue / Math.pow(heightValue, 2) * 703;
    }

     //Weight (lb) / [height (in)]2 x 7037/

    var bmiRounded = Number(bmi.toFixed(1));

    document.querySelector("h2").innerHTML = "BMI: " + bmiRounded;

    const underweight = document.querySelector(".underweight");
    const healthy = document.querySelector(".healthy");
    const overweight = document.querySelector(".overweight");
    
    if (bmi < 18.5){
        underweight.classList.add("result-bar");
        healthy.classList.remove("result-bar");
        overweight.classList.remove("result-bar");
    }
    else if (bmi>18.5 && bmi<25){
        underweight.classList.remove("result-bar");
        healthy.classList.add("result-bar");
        overweight.classList.remove("result-bar");
    }
    else if (bmi>25) {
        underweight.classList.remove("result-bar");
        healthy.classList.remove("result-bar");
        overweight.classList.add("result-bar");
    } else {
        const popup = document.querySelector(".popup");

        popup.classList.add("popup-visible");
        setTimeout(function(){
            popup.classList.remove("popup-visible");
        }, 3000);

        document.querySelector("h2").innerHTML = "BMI: "
    }
}

document.querySelector(".calculate-button").addEventListener('click', calculateBMI);

document.querySelector("#slider").addEventListener("click", function(){

    document.querySelector("#slider").classList.toggle("slide-buttonRight");
    document.querySelector("#slider").classList.toggle("slide-buttonLeft");
    document.querySelector(".slidertext").classList.toggle("slide-textRight");
    document.querySelector(".slidertext").classList.toggle("slide-textLeft");

    if (document.querySelector(".slidertext").textContent === "metric") {
        document.querySelector(".slidertext").textContent = "imperial";
        document.querySelector("#kg").placeholder = "weight (LBS)"
        document.querySelector("#height").placeholder = "height (IN)"
    } else {
        document.querySelector(".slidertext").textContent = "metric";
        document.querySelector("#kg").placeholder = "weight (KG)"
        document.querySelector("#height").placeholder = "height (CM)"
    }
})