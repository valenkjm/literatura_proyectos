const tablaProyectos = document.getElementById('tabla-proyectos');
const filasProyectos = document.getElementById('filas-proyectos');

const proyectos = JSON.parse(localStorage.getItem('proyectos'));

if (proyectos) {
    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${proyectos.nombre}</td>
        <td><a href="${proyectos.archivo}" download>${proyectos.archivo}</a></td>
        <td>${proyectos.fechaPublicacion}</td>
        <td>${proyectos.fechaActualizacion}</td>
    `;
    filasProyectos.appendChild(fila);
}