let body = document.getElementsByTagName("body")[0];
for(var i=0;i<10;i++){
    var btn = document.createElement("button");
    btn.innerHTML = +(i+1); 
    body.appendChild(btn);
    btn.addEventListener('click',function(){alert(this.innerHTML)});
}
