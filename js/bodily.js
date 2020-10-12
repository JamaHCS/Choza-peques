const floor = document.getElementById('floor');
const photograph = document.getElementById('photograph');
const stereo = document.getElementById('stereo');

floor.addEventListener('click', () => $('#modal1').modal('show'));
photograph.addEventListener('click', () => $('#modal2').modal('show'));
stereo.addEventListener('click', () => $('#modal3').modal('show'));
