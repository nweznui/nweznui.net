window.addEventListener("load", (event) => {
    first();
});

function first(){
    arr = document.getElementsByClassName('first');
    document.getElementById('entry').innerHTML = arr[0].innerHTML;
}

function show(id) {
    document.getElementById('entry').innerHTML = document.getElementById(id).innerHTML;
}