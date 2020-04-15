var pr1 = $.ajax({
    url: 'http://192.168.1.18:3000/post/2'
})
pr1.then(function(data){
    var row = $('<div class = "row"></div>')
    $('body').append(row);
    for(var i=0; i<data.length ; i++){
        const element = data[i];
        var template = `<div class = "card col-md-3">
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${element.image}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
          <p class="card-text">${element.cost}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`;
      row.append(template);
    }
    
})