/*
var myNodeList = document.getElementsByTagNameName('LI')

var i;

for(i = 0; i < myNodeList.length; i++){
    var span = document.createElement('SPAN')
    var txt = document.createTextNode('\u00D7');
    span.className = 'close'
    span.appendChild(txt)
    
    myNodeList.appendChild(span);
}

var close = document.getElementsByClassName('close')
var i;

for(i = 0; i < close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = 'none'
    }
}
*/

// creates button to close for each item in the list

var myNodelist = document.getElementsByTagName("LI");
var i;
for(i = 0; i < myNodelist.length; i++){
    var span = document.createElement("SPAN")
    var txt = document.createTextNode("\u00D7");
    span.className = "close";   
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Add check symbol to finished items when clicked on

var list = document.querySelector('ul');
list.addEventListener('click', function(ev){
    if(ev.target.tagName === 'LI'){ 
        ev.target.classList.toggle('checked');
        console.log("hi");
    }
}, false);


// removes item from list when close button is clicked

var close = document.getElementsByClassName('close');
var i;
for(i = 0; i < close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = 'none';
    }
}

// Create a new list item when user clicks on "add"

function newElement(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("assignInput").value;
    var t = document.createTextNode(inputValue);
    
    li.appendChild(t);
    
    if (inputValue === ''){
        alert("Please input an assignment!")
    } else{
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("assignInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);


    for(i = 0; i < close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
