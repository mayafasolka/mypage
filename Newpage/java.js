let title= document.querySelector('.title');
let turn ='x';
let squares =[];
function end(num1,num2,num3){
    title.innerHTML='${squares[num1]} winner';
    document.getElementById('item'+num1).style.background='#000';
    document.getElementById('item'+num2).style.background='#000';
    document.getElementById('item'+num3).style.background='#000';

    setInterval(function(){title.innerHTML +='.'},1000);
    setTimeout(function(){iocation.relod()},4000);
}

function winner(){

    for (let i = 1; i<10;i++)
    {
          squares[i] = document.getElementById('item'+ i).innerHTML;
    }
    if(squares[1]==squares[2] && squares[2]==squares[3] && squares[1]!='')
    {
        end(1,2,3);
    }
    else if(squares[4]==squares[5] && squares[5]==squares[6] && squares[5]!='')
    {
        end(4,5,6);
    }
    else if(squares[7]==squares[8] && squares[8]==squares[9] && squares[8]!='')
    {
        end(7,8,9);
    }
    else if(squares[1]==squares[4] && squares[4]==squares[7] && squares[1]!='')
    {
        end(1,4,7);
    }
    else if(squares[2]==squares[5] && squares[5]==squares[8] && squares[5]!='')
    {
        end(2,5,8);
    }
    else if(squares[3]==squares[6] && squares[6]==squares[9] && squares[6]!='')
    {
        end(3,6,9);
    }
    else if(squares[1]==squares[5] && squares[5]==squares[9] && squares[5]!='')
    {
        end(1,5,9);
    }
    else if(squares[3]==squares[5] && squares[5]==squares[7] && squares[5]!='')
    {
       end(3,5,7);
    }
}
 
function insert(num){
    var myString =document.form.textview.value;
    var lastChar= myString[myString .length-1];
    if(myString.length<30){
        if(!isNaN(lastChar) && lastChar == null &&!isNaN(num)){
            document.form.textview.value =myString+num;
        }
        else if (unm!=lastChar){
       document.form.textview.value=myString.replace(lastChar,num);
     }
    }
 }
 function equal(){
   var sum =document.form.textview.value;
   if (sum){
     document.form.textview.value= eval(sum);
   }
 }
function clean(){
 document.form.textview.value="" ;
}
function back(){
 var exp= document.form.textview.value;
 document.form.textview.value= exp.substring(0,exp.length -1);
}
 

 