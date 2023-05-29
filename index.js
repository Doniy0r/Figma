

function f() {
    let yigit=document.getElementById('in1').value;
    let qiz=document.getElementById('in2').value;
    if (yigit.length>0&&qiz.length>0){
        document.getElementById('t').innerHTML=(yigit.substring(0, 1)).toUpperCase() + '+' + (qiz.substring(0, 1)).toUpperCase() + '=' + 'S';
    }else if (qiz.length>0){
        document.getElementById('t').innerHTML="Yigitni ismini kiriting!"
    }else if (yigit.length>0){
        document.getElementById('t').innerHTML='Qizni ismini kiriting!'
    }else{
        document.getElementById('t').innerHTML=`<h3 class="ml-3" style="color: red">${'Ismlarni kiriting!'}</h3>`
    }
}

