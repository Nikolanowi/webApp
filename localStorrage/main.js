var counter = 0;

if (typeof(Storage) != 'undefined') {
    console.log('storrage exists');
}
var handler = function () {

    var x =  localStorage.getItem('brojac');

    // if (x) {
    //     counter = JSON.parse(x);
    // }
    
    counter++;
    var button = document.querySelector('button');
    button.innerText = counter;
    localStorage.setItem('brojac',counter);
  

}



