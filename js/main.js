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

// window.onload = function () {
//   $('#modal-container').modal('show');
// };

if (window.innerHeight > window.innerWidth) {
  alert('Please use Landscape!');
}
