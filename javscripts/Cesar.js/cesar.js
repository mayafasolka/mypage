function incription(texttocode, shift) {
    var result = '';
    for (var i = 0; i <texttocode.length; i++) {
     var kod = texttocode.charCodeAt(i);
     if ((kod >= 65 && kod <= 90)) {
         result += String.fromCharCode((kod - 65 + shift) % 26 + 65);
     
     } else if ((kod >= 97 && kod <= 122)) {
         result += String.fromCharCode((kod - 97 + shift) % 26 + 97);
     } else{
         result += texttocode.chartAt(i);
     }
    }
    return result;
 }
 function code() {
               var texttocode = document.getElementById('input').value;
               var result = incription(texttocode, 3);
               document.getElementById('output').value = result;
 }
 
 
 
 
 