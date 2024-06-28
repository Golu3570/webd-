let input = document.querySelector(".show");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
   button.addEventListener("click", (event) => {
       if (event.target.innerHTML === '=') {
           try {
               string = eval(string);
               if (isNaN(string) || !isFinite(string)) {
                   throw new Error('Invalid expression');
               }
               input.value = string;
           } catch (error) {
               input.value = 'Error';
               string = '';
           }
           console.log("clicked");
       }else if(event.target.innerHTML==='AC'){
        string= " ";
        input.value= string;



       }else if(event.target.innerHTML==='DE'){
        string=string.substring(0,string.length-1);
        input.value=string;

       }
        else {
           string += event.target.innerHTML;
           input.value = string;
       }
   });
});
