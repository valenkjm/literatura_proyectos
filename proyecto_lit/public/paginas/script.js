const dropZone = document.querySelector('.drop-zone');
const fileInput = document.querySelector('#file');
const archivoSubido = document.querySelector('#archivo-subido');
const nombreProyectoInput = document.querySelector('#nombre-proyecto');
const publicarProyectoButton = document.querySelector('#publicar-proyecto');

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('dragover');
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    const file = e.dataTransfer.files[0];
    fileInput.files = e.dataTransfer.files;
    archivoSubido.style.display = 'block';
    archivoSubido.innerHTML = `Archivo subido: ${file.name}`;
});

publicarProyectoButton.addEventListener('click', () => {
    const nombreProyecto = nombreProyectoInput.value;
    const archivo = fileInput.files[0];
    const tablaProyectos = document.getElementById('tabla-proyectos');
    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${nombreProyecto}</td>
        <td><a href="${archivo.name}" download>${archivo.name}</a></td>
        <td>${new Date().toLocaleDateString()}</td>
        <td>${new Date().toLocaleDateString()}</td>
    `;
    tablaProyectos.tBodies[0].appendChild(fila);
    localStorage.setItem('proyectos', JSON.stringify({
        nombre: nombreProyecto,
        archivo: archivo.name,
        fechaPublicacion: new Date().toLocaleDateString(),
        fechaActualizacion: new Date().toLocaleDateString()
    }));
    window.location.href = 'index.html';
});