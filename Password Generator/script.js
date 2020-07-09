
window.onload=()=>
{ 
 const length = document.querySelector('#length'); 
 const options = document.querySelectorAll('.input-container div input[type="checkbox"]');
 const password = document.querySelector('#password');
 const clipboardBtn = document.querySelector('#clipboard-btn');
 const generateBtn = document.querySelector('#generate-btn');

 
 const getRandomUpper=()=>{
  let n = Math.round(Math.random()*25)+65;
  return String.fromCharCode(n);
 }

 const getRandomLower=()=>{
  let n = Math.round(Math.random()*25)+97;
  return String.fromCharCode(n);
 }

 const getRandomNumber=()=>{
  return Math.round(Math.random()*9);
 }

 const getRandomSymbol=()=>{
  let specialChars="{}()[]<>@#$&+/\%*?!";
  let s = Math.round(Math.random()*(specialChars.length-1));
  return specialChars[s];
 }

 
 var generateFunc=[
        getRandomUpper,
        getRandomLower,
        getRandomNumber,
        getRandomSymbol
    ];
 
 generateBtn.addEventListener('click',()=>{
 
  password.innerHTML = "";
  var pswd = "";
  var x=0;
  var i=1;  
 
  var counter=0;
  options.forEach((opt)=>{
    if(opt.checked)
     counter++;
  });
  
    
  if(!counter)
   alert('⚠️ Select Options.');
  else{
  while(i<=length.value) 
  {
    if(options[x].checked){
     const func = generateFunc[x];
     //pswd += generateFunc[x](); 
     pswd += func(); 
     i++;
    }
    x++;
    if(x == options.length) x=0;
  }
   
  }

   password.innerHTML = pswd;
 });
 


 // For Clipboard
 clipboardBtn.addEventListener('click',()=>{
      const el = document.createElement('textarea');
      el.value = password.innerHTML; 
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');  
      document.body.removeChild(el); 
    alert('Password Copied to Clipboard');
 }); 
  
 
}