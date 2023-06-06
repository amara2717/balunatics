var openBtns = document.querySelectorAll('.open-btn');
var closeBtns = document.querySelectorAll('.close-btn');
var popups = document.querySelectorAll('.popup');


openBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        var popupId = btn.getAttribute('data-popup');
        var popup = document.getElementById(popupId);
        popup.style.display = 'block';

        
        var popupContent = popup.querySelector('.popup-content');
        popupContent.style.top = '20px'; 
    });
});


closeBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        var popup = btn.parentNode.parentNode;
        popup.style.display = 'none';
    });
});
alert("ALERT!");

confirm("I AM HUMAN");
prompt("USER?");
let result = prompt("PLEASE INPUT YOUR FULL NAME:>");
console.log(result);

alert("WELCOME TO BALUNATIC'S WEBSITE! ");
