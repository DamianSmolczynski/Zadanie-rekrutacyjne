const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


let buttonListiner = document.querySelector('button');

buttonListiner.addEventListener("click", ()=>
    {
        let imie = document.getElementsByName('imie')[0].value;
        let nazwisko = document.getElementsByName("nazwisko")[0].value;
        let name = imie + " " + nazwisko;
        console.log(name)
        let fullName = document.getElementsByClassName("name")[0];
        fullName.textContent = name;   
    }
)

let emailListiner = document.getElementsByName('email')[0];

emailListiner.addEventListener('blur', ()=>
    {

        let emailAllert = document.getElementsByClassName("mail")[0]

        if(emailListiner.value.match(mailformat))
            { 
                emailAllert.textContent = emailListiner.value + " - Twój adres mailowy jest poprawny";}
        else
            {
                emailAllert.textContent = emailListiner.value + " - Twój adres mailowy jest błędny";}
    }
)


