let eventTarget = document.getElementById('black');
let blackback1 = function() {
    eventTarget.style.backgroundColor('white');
}
let blackback2 = function() {
    eventTarget.style.color('black');
}
let blackback3 = function() {
    eventTarget.style.boxShadow('6px 6px black');
}
eventTarget.addEventListener('click', function() {
    eventTarget.style.backgroundColor('white');
});
eventTarget.onclick = blackback1;
