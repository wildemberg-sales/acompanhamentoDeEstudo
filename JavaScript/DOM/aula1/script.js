var p = document.getElementsByTagName('p');

// p é um objeto
//alert(p[0].innerHTML);
//alert(p[1].innerHTML);

/*
p[0].innerHTML = 'Manipulando via JS!';

for(var i=0; i<p.length; i++){
    p[i].innerHTML = 'Manipulando via JS - ' + i;
}
*/


for(var i=0; i<10; i++){
    p[0].innerHTML = p[0].innerHTML + i;
}
