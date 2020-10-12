const crowd = document.getElementById('crowd');
const skull = document.getElementById('skull');
const singer = document.getElementById('singer');

crowd.addEventListener('click', () => $('#modal1').modal('show'));
skull.addEventListener('click', () => $('#modal2').modal('show'));
singer.addEventListener('click', () => $('#modal3').modal('show'));
