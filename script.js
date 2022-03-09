//CUIDADO O ID SÓ PODE TER 1!!! Da para pegar no queryselector usando o # na frente
function testeID(){
    const testeID = document.getElementById('teste-id');
    console.log(testeID);
    testeID.classList.toggle('blue');
}

//RETORNA UM HTMLCOLLECTION!!!
function testeClassName(){
    const testeClassName = document.getElementsByClassName('teste');
    console.log(testeClassName);
    testeClassName[0].classList.toggle('green');
}

//ELE VAI PEGAR O PRIMEIRO QUE APARECER COM ESSA REFERÊNCIA!!!
function testeQS(){
    const testeComQuerySelector = document.querySelector('h1');
    console.log(testeComQuerySelector);
    testeComQuerySelector.classList.toggle('red');
}

//RETORNA UMA NODELIST COM TODAS AS REFERÊNCIAS!!!
function querySelectorALl() {
    const todosH1 = document.querySelectorAll('h1');
    console.log(todosH1);
    todosH1.forEach((el)=> el.classList.toggle('black'));
}


function textContentsTeste(){
    const text = document.querySelector('p');
    const a = text.textContent;
    console.log(a);
}

//manda apenas o texto que está dentro
function innerTextTeste(){
    const text = document.querySelector('p');
    const a = text.innerText;
    console.log(a);
}

//manda tudo que estiver dentro do html, sendo texto, tags, etc...
function innerHtmlTeste(){
    const text = document.querySelector('p');
    const a = text.innerHTML;
    console.log(a);
}