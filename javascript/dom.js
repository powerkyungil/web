// document 1) createElement(tag) => tag 생성
//          2) getElementsByTagName(tag) => element 선택
function createList() {
    var ul = document.createElement('ul');
    
    var li = document.createElement('li');
    li.textContent = 'banana';
    ul.appendChild(li);
    
    li = document.createElement('li');
    li.textContent = 'cherry';
    ul.appendChild(li); //li를 ul 하위에 넣음
    
    var bd = document.getElementsByTagName('body');

    console.log(bd[0].appendChild(ul));
    // <body><ul><li>banana</li></ul></body>

}

// var tbl = window.document.createElement('table'); // element 생성 tag
// tbl.setAttribute('border', '1');
// tbl.setAttribute('id', 'tbl');
// console.log(tbl);

