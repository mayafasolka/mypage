let title = document.querySelector('.title');
let turn = 'x';
let squares =[];
function winner()
{
 for(let i = 1; i<10;i++)
{
      squares[i] = document.getElementById('item'+ i).innerHTML;
}
if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '');



else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[5] != '');



else if(squares[7] == squares[8] && squares[8] == squares[6] && squares[5] != '');



}

function game(id)
{


  let element = document.getElementById(id);
  if(turn === 'x'  && element.innerHTML == '')
  {
        element.innerHTML = 'X';
        turn = 'o';
        element.innerHTML = 'O';
}
     else if(turn === 'o' && element.innerHTML == ''){
        element.innerHTML = 'O';
        turn = 'x'
        element.innerHTML = 'X';
}
}

    


