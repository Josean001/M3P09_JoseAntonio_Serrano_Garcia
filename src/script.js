function generar_tabla() {
    const container = document.getElementById('tabla-container');

    // Limpia cualquier tabla previa
    container.innerHTML = '';

    // Crear elemento tabla
    const tabla = document.createElement('table');

    for (let fila = 1; fila <= 3; fila++) {
        const tr = document.createElement('tr');
        for (let columna = 1; columna <= 3; columna++) {
            const td = document.createElement('td');
            td.textContent = `Fila ${fila}, Columna ${columna}`;
            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }

    // Añadir la tabla al contenedor
    container.appendChild(tabla);
}

function limpiar_tabla() {
    const container = document.getElementById('tabla-container');
    container.innerHTML = ''; // Borra el contenido del contenedor
}