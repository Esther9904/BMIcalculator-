function BodyMassIndex(){
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    Bmi = weight/(height**2)
    document.getElementById("result").textContent = "your BMI is:" + Bmi
}
