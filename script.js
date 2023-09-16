// Función para agregar una nueva tarea
function agregarTarea() {

    const nuevaTareaInput = document.getElementById("nuevaTarea");
    const listaTareas = document.getElementById("listaTareas");
    const nuevaTareaTexto = nuevaTareaInput.value.trim();

    if (nuevaTareaTexto !== "") {
        const nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = nuevaTareaTexto;
        
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.className = "delete";

        botonEliminar.onclick = function() {
            listaTareas.removeChild(nuevaTarea);
        };
        
        nuevaTarea.appendChild(botonEliminar);
        listaTareas.appendChild(nuevaTarea);
        nuevaTareaInput.value = "";
    }
};

// Función para marcar una tarea como completada
function marcarCompletada(tarea) {
    tarea.classList.toggle("completed")
};

// Agregar evento de clic a las tareas para marcarlas como completadas


const listaTareas = document.getElementById("listaTareas");

if (listaTareas) {
    listaTareas.addEventListener("click",
        function(event) {
            if (event.target.tagName === "LI") {
                marcarCompletada(event.target);
            }
        })
};

// Agregar evento de clic al botón "Agregar"
const agregar = document.getElementById("agregar");
if (agregar) {
    agregar.addEventListener("click", agregarTarea)
};

// Función para mostrar tareas completadas
function mostrarCompletadas() {
    const tareas = document.querySelectorAll("li");
    tareas.forEach(tarea => {
        if (tarea.classList.contains("completed")) {
            tarea.style.display = "flex";
        } else {
            tarea.style.display = "none";
        }
    })
};

// Función para mostrar tareas pendientes
function mostrarPendientes() {
    const tareas = document.querySelectorAll("li");
    tareas.forEach(tarea => {
        if (!tarea.classList.contains("completed")) {
            tarea.style.display = "flex";
        } else {
            tarea.style.display = "none";
        }
    })
};

// Agregar evento de clic al botón "Mostrar Completadas"
const mostrarCompletadasBtn = document.getElementById("mostrarCompletadas");
if (mostrarCompletadasBtn) {
    mostrarCompletadasBtn.addEventListener("click", mostrarCompletadas)
};
// Agregar evento de clic al botón "Mostrar Pendientes"
const mostrarPendientesBtn = document.getElementById("mostrarPendientes");
if (mostrarPendientesBtn) {
    mostrarPendientesBtn.addEventListener("click", mostrarPendientes)
};