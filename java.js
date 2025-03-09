
function agregarRecordatorio(){

   //Capturamos el recordatorio a listar//
   const nuevoRecordatorio = document.getElementById('nuevoRecordatorio');
   const textoRecordatorio = nuevoRecordatorio.value.trim();

   if(textoRecordatorio === ''){
       alert('Agregue un recordatorio');
       return;
   }

    // Capturamos listado Recordatorios//

   const listadoRecordatorios = document.getElementById('listadoRecordatorios');

   const fechaInicial = document.getElementById('fechaInicial');
   const fechaI = fechaInicial.value;
   

   const fechaFinal = document.getElementById('fechaFinal');
   const fechaF = fechaFinal.value;

   const li = document.createElement('li'); // Se crea un elemento <li></li>//
   
   li.innerHTML = `<span class="listado">${textoRecordatorio} ${fechaI} ${fechaF} </span>
           <button class="borrar-btn" onclick="borrarTarea(this)">Eliminar</button>`;


   li.querySelector('span').addEventListener('click', function (){
       this.parentElement.classList.toggle('completado');
   })
   
   listadoRecordatorios.appendChild(li);

   nuevoRecordatorio.value = "";

   guardarRecordatoriosEnLocalStorage();

}

function guardarRecordatoriosEnLocalStorage(){
    const recordatorios = [];
    document.querySelector('li').forEach(recordatorio => {
        recordatorios.push({
            Nombre_Tarea: tarea.querySelector('span').innerText,
            Estado_tarea: tarea.classList.contains('completado')
        });
    });
}