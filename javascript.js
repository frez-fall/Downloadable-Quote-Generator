//Switch to mobile template selection
const selectionToggle = document.getElementsByClassName('temp-title-container')[0];
const selection = document.querySelector('.selection');
const titleHide = document.getElementsByClassName('temp-title')[0];

selectionToggle.addEventListener('click',()=>{
    selectionToggle.classList.toggle('active')
    selection.classList.toggle('active')
    titleHide.classList.toggle('active')
});



//Template button animation and template display
const btn = document.getElementsByClassName("template-btns");
const template = document.querySelector(".quote-sec");
const notifWrapper = document.querySelector('.notif-wrapper');
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function() {
        //adds active class to clicked button and removes active class from prev clicked button
        (document.querySelector('.template-btns.active')) ? document.querySelector('.template-btns.active').classList.remove('active') : '';
        this.classList.add('active');

        //displays template based on value of clicked button
        let tempBtn = this.querySelector('input').getAttribute('value');
        (tempBtn == 'Notification') ? notifWrapper.classList.add('active'): notifWrapper.classList.remove('active');
        template.setAttribute('data-type', tempBtn); 

    });
} 


//Random quote API 
const quote = document.querySelector(".quoteDisplay");
const author = document.querySelector(".quoteAuthor");
const apiUrl="https://api.quotable.io/random";
async function genQuote(url){
    const response = await fetch(url);
    var data = await response.json();
    if (data.content.length>120){ 
        genQuote(url);
    }
    else {
    quote.innerHTML = data.content;
    author.innerHTML=data.author;
    }
}
genQuote(apiUrl);



//Notification template day and time 
window.addEventListener('load', ()=>{
    clock();
    function clock(){
        const today = new Date();

        //time components
        const hours = today.getHours();
        const minutes = today.getMinutes();

        const hour = (hours <10 || hours != 0) ? "0" + hours : hours;
        const minute = minutes < 10 ? "0" + minutes : minutes;
        let hourTime=0;
        if (hour > 12){
            hourTime=hour - 12;
        }
        else if (hour == 0){
            hourTime = 12;
        }
        else{
            hourTime=hour;
        }


        const ampm = hour < 12 ? 'AM' : 'PM';

        const day = today.getDay();
        const weekday = ['Sun', 'Mon', 'Tues',
        'Wed', 'Thurs', 'Fri', 'Sat'];
        
        const myDateTime = weekday[day] + " " + hourTime + ":" + minute + ampm; 
        document.getElementById('date').innerHTML = myDateTime;
        setTimeout(clock,60000);
    }
})

const mediaQuery = window.matchMedia('(max-width: 576px)');
const icon = document.querySelector('#download > i');
// Check if the media query is true
if (mediaQuery.matches) {
    icon.classList.remove('fa-lg')
};



