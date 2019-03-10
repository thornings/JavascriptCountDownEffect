var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");

this.box1Interval = setInterval(doSomething, 6, box1);
this.box1Interval = setInterval(doSomething, 7, box2);
this.box1Interval = setInterval(doSomething, 5, box3);

function doSomething(boxElement) {
    var boxText = boxElement.getElementsByTagName("p")[0];
    var maxValue = boxElement.dataset.max;    
    var currentValue = parseInt(boxElement.dataset.current);
    var interval = parseInt(boxElement.dataset.interval);    

    if (currentValue<maxValue) {
        var newValue = currentValue + interval;
        boxElement.dataset.current = newValue;
        boxText.textContent = currentValue;
    } else {
        currentValue = 10000;
        boxText.textContent = maxValue;
        clearInterval(this);
    }
}
  
