let menubtn =document.querySelector('#menu_bars');
let mynav =document.querySelector('.header');

menubtn.onclick = () =>{
    menubtn.classList.toggle('fa-times');
    mynav.classList.toggle('active');
}