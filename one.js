const colorPicker = document.getElementById('colorPicker');
const textEditor = document.getElementById('textEditor');

colorPicker.addEventListener('change', (event) => {
  const selectedColor = event.target.value;
  textEditor.style.color = selectedColor;
});
