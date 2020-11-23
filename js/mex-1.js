const board = document.getElementById('board');
const book = document.getElementById('table');
const tv = document.getElementById('teacher');

board.addEventListener('click', () => $('#modal1').modal('show'));
book.addEventListener('click', () => $('#modal2').modal('show'));
tv.addEventListener('click', () => $('#modal3').modal('show'));
