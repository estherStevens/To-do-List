window.onload=function(){

    var input;
    var listItems = [];

    var addItem = function(){

        input = document.querySelector('.add-item').value;
        listItems.push(input);
        if(input !== ""){
            displayItem(input);
        }else{
            document.getElementById('error-message').style.display = 'block';
        }
        document.querySelector('.add-item').value = "";

    };
    document.querySelector('.add-btn').addEventListener('click', addItem);
    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            addItem();
        }
    });


function displayItem(value){
    var li = document.createElement('li');
    var div = document.createElement('div');
    var span = document.createElement('span');
    var btn = document.createElement('button');
    var i = document.createElement('i');

    i.classList.add('far');
    i.classList.add('fa-times-circle');
    btn.classList.add('close-button');
    li.classList.add('list-item');
    span.classList.add('list-text');
    div.classList.add('list-item-container');

    document.getElementById('error-message').style.display = 'none';

    span.innerText = value;
    div.appendChild(span);
    btn.appendChild(i);
    div.appendChild(btn);
    li.appendChild(div);

    document.getElementById('TD-list').appendChild(li);
    btn.addEventListener('click', function(event){
      event.target.parentElement.parentElement.remove();

    });
}

};
