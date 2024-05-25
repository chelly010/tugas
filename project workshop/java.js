//let letvariabel;
//letvariabel = 10;

//const constvariabel = 1;

// tipe data number
//let ininumber = 10;
//console.log(ininumber)
//console.log("tipe data"+ typeof ininumber);

//let iniDesimal = 10.1;
//console.log(iniDesimal);
//console.log("tipe data"+ typeof iniDesimal);

//let iniString = "ini teks";
//console.log(iniString);
//console.log("tipe data"+ typeof iniString);

//let iniboolean = true;
//console.log(iniboolean);
//console.log("tipe data"+ typeof iniboolean);

//let ininull = null;
//console.log(ininull);
//console.log("tipe data"+ typeof ininull);

//let iniundifined;
//console.log(iniundifined);
//console.log("tipe data"+ typeof iniundifined);

// if/else (percabangan)

//let nilai = 70;
//if (nilai > 70){
    //console.log("benar")
//}else{
    //console.log("salah")
//}

// log statement (perulangan)

//for(let i = 0;i<5; i++){
    //console.log (i) ;
//}

// operasi penugasan

//let a = 10;
//let b = 11;
//a+=b;
//console.log(a)

// dan,or, not

//console.log(true && true)
//console.log(true || false)
//console.log(!false)

// function

//function inifunction(a){
    //console.log(a)
//}
//inifunction("ini function"); //fungsinya unutuk memanggil printah yang ingin di panggil dari ()

//Array

//let iniarray = [1, "dua", 3.0, "4"];
    //console.log(iniarray[3])

// Method Array

//let iniArray = [1, "dua", 3.0, "4"];
//iniArray.pop()
//iniArray.push()
//iniArray.push("Lemon")
//iniArray.shift();
//iniArray.unshift("pertama");
//delete iniArray[1];
//for(let i=0; i < iniArray.length; i++){
    //console.log(iniArray[i]);
//}

// const nav = document.getElementById('nav');
// const li = document.getElementsByTagName('li');
// const icon = document.getElementsByClassName('icon');
// const li1 = document.querySelector('.navbar .menu ul li');
// const li2 = document.querySelectorAll('.navbar .menu ul li');

const mode = document.querySelector('.icon img');
const body = document.querySelector('body')
mode.addEventListener('click', function(){
    if(body.style.backgroundColor == 'white'){
    body.style.backgroundColor = 'black';
    mode.src = "./icon/moon-fill.svg";
    }else{
        body.style.backgroundColor = 'white';
        mode.src = "./icon/brightness-high-fill.svg";
    }
})