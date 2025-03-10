
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

    const li = document.createElement('li'); // Se crea un elemento <li>
    
    li.innerHTML = `
        <span class="listado">${textoRecordatorio} ${fechaI} ${fechaF}</span>
        <button class="borrar-btn" onclick="borrarRecordatorio(this)">Eliminar</button>
    `;

    li.querySelector('span').addEventListener('click', function () {
        this.parentElement.classList.toggle('completado');
    });

    listadoRecordatorios.appendChild(li);

    // Limpiar el campo de entrada
    nuevoRecordatorio.value = "";

    // Guardar en localStorage
    guardarRecordatoriosEnLocalStorage();
}

function borrarRecordatorio(boton) {
    const li = boton.parentElement; // Obtener el <li> que contiene el recordatorio
    li.remove(); // Eliminar el elemento de la lista

    // Actualizar localStorage
    guardarRecordatoriosEnLocalStorage();

    function guardarRecordatoriosEnLocalStorage() {
        const listadoRecordatorios = document.querySelectorAll("#listadoRecordatorios li");
        const recordatorios = [];
    
        listadoRecordatorios.forEach(li => {
            recordatorios.push(li.querySelector('.listado').textContent);
        });
    
        localStorage.setItem("recordatorios", JSON.stringify(recordatorios));
    }
    
    function cargarRecordatoriosDesdeLocalStorage() {
        const listadoRecordatorios = document.getElementById("listadoRecordatorios");
        const recordatorios = JSON.parse(localStorage.getItem("recordatorios")) || [];
    
        recordatorios.forEach(texto => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="listado">${texto}</span>
                <button class="borrar-btn" onclick="borrarRecordatorio(this)">Eliminar</button>
            `;
    
            li.querySelector('span').addEventListener('click', function () {
                this.parentElement.classList.toggle('completado');
            });
    
            listadoRecordatorios.appendChild(li);
        });
    }
    
    // Cargar recordatorios almacenados al cargar la página
    document.addEventListener("DOMContentLoaded", cargarRecordatoriosDesdeLocalStorage);
}

    
