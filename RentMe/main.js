const FullName= document.getElementById("FullName");
const Email= document.getElementById("Email");
const Message= document.getElementById("UrMessage");
const button= document.getElementById("btn");

button.addEventListener('click',send);

function send() {
    alert (`FullName ${FullName.value}
     Email ${Email.value}
    Message${UrMessage.value}
    `);
}


