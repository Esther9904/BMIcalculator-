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
    Bmi = weight/(height**2)
    document.getElementById("result").textContent = "your BMI is:" + Bmi
}
