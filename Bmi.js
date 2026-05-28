const NextButton = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email");

    const lettersOnly = /^[A-Za-z]+$/;

    if (!lettersOnly.test(name)) {
        alert("Only letters are allowed. No spaces, numbers or symbols.")
        return;   
    } 
    if(!email.checkValidity()){
        alert("Enter valid Email address")
        return;
    }

    const heading2 = document.querySelector('h2');
    heading2.innerHTML = `WELCOME ${name}`;
    document.getElementById("step1").classList.remove("active");
    document.getElementById("step2").classList.add("active");
    
}

function BodyMassIndex(){
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let num= weight/(height**2)
    let Bmi = Math.ceil(num * 10)/10;
    if (Bmi < 18.5){
        document.getElementById("status").innerHTML = "Status: Underweight"
    }
    if (Bmi >= 18.5 && Bmi <= 24.9){
        document.getElementById("status").innerHTML = "Status: Healthy weight"
    }
    if (Bmi >= 25.0 && Bmi <=29.9){
        document.getElementById("status").innerHTML = "Status: Overweight"
    }
    if (Bmi >= 30.0){
        document.getElementById("status").innerHTML = "Status: Obese"
    }

    document.getElementById("step2").classList.remove("active")
    document.getElementById("step3").classList.add("active")
    document.getElementById("result").textContent = Bmi
}
