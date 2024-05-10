import React from 'react';
import { useLocation } from 'react-router-dom';
import './styles.css'; // Importa el archivo CSS con los estilos del cursor

function HoverEffectCursor() {
    const location = useLocation();

    let cursorClass = 'default-cursor';

    // Determina qué clase de cursor aplicar según la ruta actual
    switch (location.pathname) {
        case '/':
            cursorClass = 'default-cursor';
            break;
        case '/Acercade':
            cursorClass = 'pointer-cursor';
            break;
        case '/Servicios':
            cursorClass = 'text-cursor';
            break;
        case '/Educacion':
            cursorClass = 'help-cursor';
            break;
        case '/Contacto':
            cursorClass = 'pointer-cursor';
            break;
        default:
            cursorClass = 'default-cursor';
    }

    return (
        <div className={cursorClass}>
            {/* Contenido de tu componente */}
        </div>
    );
}

export default HoverEffectCursor;
