document.getElementById('font-sizer').value = 20;

document.getElementById('btn-bold').addEventListener('click',function(){
  const myEditor = document.getElementById('editor');
  myEditor.classList.toggle('change-bold');
})

document.getElementById('btn-italic').addEventListener('click',function(){
  const myEditor = document.getElementById('editor');
  myEditor.classList.toggle('change-italic');
})

document.getElementById('btn-underline').addEventListener('click',function(){
  const myEditor = document.getElementById('editor');
  myEditor.classList.toggle('change-underline');
})




document.getElementById('btn-left').addEventListener('click',function(){
  const myEditor = document.getElementById('editor');
  myEditor.style.textAlign = 'left';
})

document.getElementById('btn-right').addEventListener('click',function(){
  const myEditor = document.getElementById('editor');
  
  myEditor.style.textAlign = 'right';
})

document.getElementById('btn-center').addEventListener('click',function(){
  const myEditor = document.getElementById('editor');
  myEditor.style.textAlign = 'center';
})


document.getElementById('font-sizer').addEventListener('click',function(){
   const valString = document.getElementById('font-sizer').value;
   const val = parseFloat(valString);
   const myEditor = document.getElementById('editor');
   myEditor.style.fontSize = val+'px';
})


document.getElementById('color-picker').addEventListener('change',function(event){
  const selectedColor = event.target.value;
 
  const myEditor = document.getElementById('editor');
   myEditor.style.color = selectedColor;
})