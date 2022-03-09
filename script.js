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

// O que é o DOM?
// Document Object Model, é uma ferramenta que já vem nativa dos navegadores, é uma interface padronizada que permite que navegadopres e scipts possam manipular o conteúdo de uma página web.
// Usa se o DOM principalmente quando queremos atualizar um site sem precisar atualizar ele.
// Quem padroniza o DOM é a W3C.
// Foi originada nos primordios da internet em um acordo da W3C com a Netscape e a Microsoft para criar uma linguagem de Script padronizada, então surgiu a ECMAScript, que hoje é o Javascript oficialmente lançado em 97.
// Desde lá o DOM foi se aperfeiçoando.
// O DOM tem várias vantagens, dentre elas a que mais se destaca é a criação de aplicações que alteram os dados da página sem a necessidade de atualização.
// Qual a diferença entre window e document?
// O objeto $(window) se refere à janela, viewport do navegador que está executando o site. Com ele é possível capturar as dimensões da janela, o quanto o usuário usou o scroll, etc. Com esse objeto, você pode executar código quando toda a página estiver carregada, incluindo imagens, scripts, estilos e afins. Ou seja, o código só será executado quando tudo estiver concluído.
// $(document)
// Diferente do $(window), o objeto $(document) tem referência ao documento como um todo. Esse documento a qual me refiro é o DOM, todos os elementos da página (código HTML). Esse é o mais utilizado, pois o script rodará imediatamente após os elementos carregarem, independente das imagens e estilos.
// (apresentação da POC)
// O Que é um element?
// Element é a classe base mais geral da qual todos os objetos em um Document herda, muitas funções podem ser usadas em um element.
// O que é uma Nodelist?
// Quando se tem uma estrutura baseada em árvore, o nó Node é o elemento básico da estrutura. No caso do JavaScript, o DOM é uma árvore de nós. A classe NodeList representa um conjunto desses nós, sendo retornado, por exemplo, pelas funções document.querySelectorAll ou o atributo element.childNodes.