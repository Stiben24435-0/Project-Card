📄 Descripción general del proyecto: InfoCard en React Native
🎯 Objetivo del proyecto
Crear una tarjeta de información de usuario en React Native, moderna, elegante y funcional, que permita mostrar de forma atractiva los datos personales básicos de un usuario, con soporte de cambio de tema (claro/oscuro), adaptando estilos automáticamente.

🏗️ Componentes y funcionalidades principales
1. Componente InfoCard
Muestra la información de un usuario:

Nombre.

Edad.

Género.

Programa académico.

Posición en la institución.

Nota adicional: "Pertenece a la Magic University of Pennsylvania".

Incluye imagen del usuario:

Imagen cuadrada, tamaño fijo, posicionada a la izquierda de la tarjeta.

Borde alrededor de la imagen que cambia de color con el tema:

Negro en modo claro.

Blanco en modo oscuro.

Contiene un botón de cambio de tema:

El botón muestra un ícono (sol 🌞 o luna 🌙) en la esquina superior derecha.

Permite al usuario alternar entre:

Tema claro: Fondo blanco, texto negro.

Tema oscuro: Fondo oscuro, texto blanco.

Efectos visuales de la tarjeta:

Bordes redondeados.

Sombra para simular elevación sobre el fondo.

Margen general adaptado al color del tema activo.

🎨 Estilos aplicados
Tarjeta (card):

Fondo blanco en modo claro, gris oscuro en modo oscuro.

Sombra (tanto en iOS como en Android).

Bordes redondeados (15px de radio).

Imagen (image):

Cuadrada (130x130px).

Borde grueso adaptativo: Negro (modo claro) o blanco (modo oscuro).

Textos:

Nombre del usuario en fuente más grande y en negrita.

Información adicional (edad, género, programa, posición) en texto normal.

Colores de texto adaptables: negro o blanco según el tema.

Botón de cambio de tema (themeButton):

Absoluto, en la esquina superior derecha.

Ícono dinámico de luna o sol dependiendo del estado del tema.

Clickeable sin afectar la estructura de la tarjeta.

🧩 Dependencias utilizadas
React Native (react-native):

Componentes base (View, Text, Image, TouchableOpacity, StyleSheet).

Vector Icons (react-native-vector-icons/Ionicons):

Para usar los íconos de sol/luna.

⚡ Resumen visual del layout
markdown
Copiar código
---------------------------------------------
| [Botón de Tema]                         |
|                                           |
| [Imagen cuadrada]  [Nombre del usuario]   |
|                       Edad                |
|                       Género              |
|                       Programa            |
|                       Posición            |
|                       Universidad         |
--------------------------------------------
