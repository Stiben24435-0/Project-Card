# Carnet React Native

Este proyecto es una implementación de un carnet virtual desarrollado con **React Native** que funciona tanto en dispositivos móviles como en la web utilizando **React Native Web**. El diseño es completamente responsivo y ajusta su contenido de manera automática para ofrecer una experiencia de usuario fluida en cualquier dispositivo.

## Funcionalidades

- Visualiza la información de un carnet virtual, incluyendo nombre, matrícula, carrera y una foto de perfil.
- Tiene la capacidad de mostrar un reverso con detalles adicionales como la validez y una advertencia.
- Usa un botón para "Girar" el carnet y alternar entre el anverso y el reverso.
- La estructura es totalmente responsive para adaptarse a dispositivos móviles y pantallas de escritorio.

## Tecnologías Utilizadas

- **React Native**: Framework para desarrollar aplicaciones móviles.
- **React Native Web**: Permite ejecutar aplicaciones de React Native en el navegador web.
- **React**: Librería de JavaScript para construir interfaces de usuario.
- **StyleSheet**: Para el diseño de la interfaz y asegurar la compatibilidad entre dispositivos.

## Requisitos

Antes de comenzar, asegúrate de tener instaladas las siguientes herramientas en tu máquina:

- **Node.js** (versión 14 o superior)
- **npm** (o **yarn**) para gestionar dependencias.

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/carnet-react-native.git
2.Navega al directorio del proyecto:

   cd carnetEstudiantil

3.Instala las dependencias del proyecto:

  npm install
  # o si usas yarn
  yarn install

Ejecución
En dispositivos móviles
Para ejecutar la aplicación en un dispositivo móvil, sigue estos pasos:

Si estás desarrollando para iOS, utiliza el siguiente comando:
  npx react-native run-ios
  npx react-native run-android

En la Web
Para ejecutar la aplicación en la web, usa el siguiente comando:

  npm run web
  # o si usas yarn
  yarn web

Estructura del Proyecto

/carnet-react-native
├── /assets/            # Archivos de imagen (foto y QR)   Carnet.js
├── /src/               # Código fuente de la aplicación
│   ├── /components/    # Componentes reutilizables
      ├── /Carnet.js    # Componentes del Carnet
│   ├── /screens/       # Pantallas de la aplicación
├── App.js              # Componente principal
├── package.json        # Información del proyecto y dependencias
└── README.md           # Este archivo


