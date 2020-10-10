$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

const validateComeback = () => {
  let aBoolean = confirm('¿Seguro de que quieres regresar al inicio?');
  if (aBoolean) {
    window.location.href = window.location.origin + '/index.html';
  }
};

$('#modal-container').on('shown.bs.modal', function () {
  $('#modal').trigger('focus');
});

if (window.innerHeight > window.innerWidth) {
  alert('Por favor, activa la rotación y gira tu telefono.');
}
