
function agregarRecordatorio() {
    // Capturamos el recordatorio a listar
    const nuevoRecordatorio = document.getElementById('nuevoRecordatorio');
    const textoRecordatorio = nuevoRecordatorio.value.trim();

    if (textoRecordatorio === '') {
        alert('Agregue un recordatorio');
        return;
    }

    // Capturamos listado de recordatorios
    const listadoRecordatorios = document.getElementById('listadoRecordatorios');

    const fechaInicial = document.getElementById('fechaInicial');
    const fechaI = fechaInicial.value;

    const fechaFinal = document.getElementById('fechaFinal');
    const fechaF = fechaFinal.value;

    }