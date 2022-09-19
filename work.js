const frominputAmount=document.getElementById("from_input2");
const toinputAmount=document.getElementById("to_input2");

const fromlist=document.getElementById("from_currency_list");
const tolist=document.getElementById("to_currency_list");

const clearbtn=document.getElementById("clear_button");

const fromtext=document.getElementById("from_text");
const totext=document.getElementById("to_text");

let currentRatio={
    KRW:{
        KRW:1,
        USD:0.00072,
        CNY:0.005,
        JPY:0.1,
        unit:"won"
    },
    USD:{
        KRW:1386.49,
        USD:1,
        CNY:6.98,
        jpy:142.96,
        unit:"dollar"
    },
    CNY:{
        KRW:198.53,
        USD:0.14,
        CNY:1,
        JPY:20.47,
        unit:"yuan"
    },
    JPY:{
        KRW:9.58,
        USD:0.007,
        CNY:0.049,
        JPY:1,
        unit:"yen"
    }
};

let fromCurrency='KRW';
let toCurrency='KRW';

document.querySelectorAll("#from_currency_list a")
.forEach((menu) => menu.addEventListener("click",function(){
    document.getElementById("from_button").textContent=this.textContent;
    fromCurrency=this.textContent;
    changetextfrom();
    convert2();
}));

document.querySelectorAll("#to_currency_list a")
.forEach((menu) => menu.addEventListener("click",function(){
    document.getElementById("to_button").textContent=this.textContent;
    toCurrency=this.textContent;
    changetextto();
    convert1();
}));

function convert1(){
   let money=document.getElementById("from_input2").value;
   let convert_money=money * currentRatio[fromCurrency][toCurrency];

   document.getElementById("to_input2").value=convert_money;
}

function convert2(){
    let money=document.getElementById("to_input2").value;
    let convert_money=money * currentRatio[toCurrency][fromCurrency];
 
    document.getElementById("from_input2").value=convert_money;
}

function clear(){
    frominputAmount.value=0;
    toinputAmount.value=0;
}

function changetextfrom(){
    fromtext.innerText=currentRatio[fromCurrency].unit;
}

function changetextto(){
    totext.innerText=currentRatio[toCurrency].unit;
}

frominputAmount.addEventListener("keyup",convert1);
toinputAmount.addEventListener("keyup",convert2);

clearbtn.addEventListener("click",clear);

