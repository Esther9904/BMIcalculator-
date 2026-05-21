const NextButton = () => {
    const name = document.getElementById("name").value;
    const message = document.getElementById("message");

    const lettersOnly = /^[A-Za-z]+$/;

    if (lettersOnly.test(name)) {
        message.textContent = "Valid name!"
        document.getElementById("step1").classList.remove("active");
        document.getElementById("step2").classList.add("active");
        const heading2 = document.querySelector('h2');
        heading2.innerHTML = `WELCOME ${name}`;

    } else{
        message.textContent = "only letters are allowed. No space, numbers, or symbols.";
    }

    
    

    
}



function BodyMassIndex(){
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    Bmi = weight/(height**2)
    document.getElementById("result").textContent = "your BMI is:" + Bmi
}
