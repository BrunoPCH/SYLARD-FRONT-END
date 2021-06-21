// MODAL INFORMACION DE COLECCION
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

swalWithBootstrapButtons.fire({
  title: 'Contenido restringido, <br> por favor registrese',
  text: "¿Desea continuar con el registro?",
  icon: 'warning',
  showCancelButton: true,
  cancelButtonText: 'No, cancelar!',
  confirmButtonText: 'Si, registrar',
  
  reverseButtons: false,
  customClass: {
        container: '',
        popup:'sa-popup',
        header: '',
        title: 'sa_title',
        // closeButton: '...',
        icon:'sa_icon_warning',
        // image: '...',
        // content: '...',
        //htmlContainer: 'sa_popup',
        // input: '...',
        // inputLabel: '...',
        // validationMessage: '...',
        // actions: '...',
        confirmButton:  'btn btn-primario sa_btn_confirm',
        // denyButton: '...',
        cancelButton: 'btn btn-secundario sa_btn',
        // loader: '...',
        footer: 'secundario '
      },	
	
	
	
}).then((result) => {
  if (result.isConfirmed) {
    swalWithBootstrapButtons.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire(
      'Cancelled',
      'Your imaginary file is safe :)',
      'error'
    )
  }
})
