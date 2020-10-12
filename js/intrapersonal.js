const book = document.getElementById('book');
const smoke = document.getElementById('smoke');
const magic = document.getElementById('magic');

book.addEventListener('click', () => $('#modal1').modal('show'));
smoke.addEventListener('click', () => $('#modal2').modal('show'));
magic.addEventListener('click', () => $('#modal3').modal('show'));
