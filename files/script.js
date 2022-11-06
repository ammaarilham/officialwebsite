let typed = new Typed('.e-reply1', {
    strings: ["Ammaar","Ilham","blacKDevil"],
    typeSpeed: 150,
    backSpeed: 150,
    loop : true 

})


let typedtwo= new Typed(".e-reply2", {
    strings: [ "testing", "Welcome to my OFFICIAL WEBSITE!" ],
    typeSpeed: 50,
    backSpeed: 30,
    loop : true 

})

let navLinks = document.getElementById("navLink");

function hidemenu(){
    navLinks.style.right="-250px";
    
}

function showmenu(){
    navLinks.style.right="0";
}