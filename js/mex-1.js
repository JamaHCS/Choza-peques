const board = document.getElementById('board');
const table = document.getElementById('table');
const teacher = document.getElementById('teacher');

board.addEventListener('click', () => $('#board-m').modal('show'));
table.addEventListener('click', () => $('#table-m').modal('show'));
teacher.addEventListener('click', () => $('#teacher-m').modal('show'));
