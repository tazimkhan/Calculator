class Calculator{
    constructor(display){
        this.display=display
    }
    appendNumber(a){

        console.log('woow')
        if(a.toString()==='.'){
            var x=1;
            var s=display.value.toString();
            for(let i=s.length;i>=0;i--){
                if(s.charAt(i)==='+' || s.charAt(i)==='-' || s.charAt(i)==='*' || s.charAt(i)==='/' ){
                    x=1;
                    break;
                }
                if(s.charAt(i)==='.'){
                    x=2;
                    break;
                }
            }
            if(x==1){
              return  display.value=display.value.toString()+a.toString();
            }
            if(x==2){
                return ;
            }
        }
        if(a.toString()==='+' || a.toString()==='-' || a.toString()==='*' || a.toString()==='/' ){
            s=display.value.toString();
            if(s.endsWith('+') || s.endsWith('-') || s.endsWith('*') || s.endsWith('-')){
                return
            }else{
                return  display.value=display.value.toString()+a.toString();
            }
        }
        else{
            return  display.value=display.value.toString()+a.toString();
        }
    }
    equal(){
        console.log('eql')
        if(display.value===''){
            setTimeout(()=>{ return display.value=''; },1000);
        }else{
            setTimeout(()=>{ return display.value=eval(display.value); },2000);
        } 
    }
    back(){
        var q=display.value.toString();
        var l=q.length;
       return display.value=q.slice(0,l-1);
    }
    clear(){
       return display.value='';
    }
}

document.getElementById('scinti').style.display='none';
document.getElementById('bas').style.display='block';
document.getElementById('buta2').addEventListener('click',function(){
    document.getElementById('scinti').style.display='block';
    document.getElementById('bas').style.display='none';
    cal.clear();
    
})
document.getElementById('buta1').addEventListener('click',function(){
    document.getElementById('bas').style.display='block';
    document.getElementById('scinti').style.display='none';
    cal.clear();
})

const cal=new Calculator(display);
var display=document.getElementById('display');
var numberButtons=document.querySelectorAll('.number');
var operationButtons=document.querySelectorAll('.operation');
var clear=document.querySelectorAll('.clear');
var equal=document.querySelectorAll('.equal');
var back=document.querySelectorAll('.back');
var exp=document.getElementById('exp');
var ln=document.getElementById('ln');
var sin=document.getElementById('sin');
var cos=document.getElementById('cos');
var tan=document.getElementById('tan');
var sq=document.getElementById('sq');
var sqrt=document.getElementById('sqrt');
var button=document.getElementById('button');

back.forEach(button =>{button.addEventListener('click',() =>{cal.back();   })})
equal.forEach(button =>{ button.addEventListener('click',()=>{cal.equal(); })});
clear.forEach(button =>{button.addEventListener('click',() =>{cal.clear();  })})
numberButtons.forEach(button =>{
    button.addEventListener('click',() =>{
        number=button.value; 
        cal.appendNumber(number);       
    })
})
operationButtons.forEach(button =>{
    button.addEventListener('click',() =>{
        operation=button.value;
        cal.appendNumber(operation);
    })
})

exp.addEventListener('click',()=>{
    display.value=Math.exp(display.value);
})

ln.addEventListener('click',()=>{
    display.value=Math.log(display.value);
})

sin.addEventListener('click',()=>{
    display.value=Math.sin((display.value) * Math.PI /180 );
})

cos.addEventListener('click',()=>{
    display.value=Math.cos((display.value) * Math.PI /180 );
})

tan.addEventListener('click',()=>{
    display.value=Math.tan((display.value) * Math.PI /180 );
})

sq.addEventListener('click',()=>{
    display.value=Math.pow((display.value),2);
})

sqrt.addEventListener('click',()=>{
    display.value=Math.sqrt(display.value);
})
