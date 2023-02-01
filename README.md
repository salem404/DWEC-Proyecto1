# SakuraCards

[![Desarrollo Web en Entorno Cliente](https://img.shields.io/badge/Asignatura-DWEC-ff69b4?style=for-the-badge)](https://iesrafaelalberti.es/c-f-g-s-desarrollo-de-aplicaciones-web/)

![Logo](https://seller.tcgplayer.com/media/2972/weiss_schwarz_cardcaptor_sakrua_clear_card_banner_02-2x.jpg)

[![Hecho con Visual Studio Code](https://badges.aleen42.com/src/visual_studio_code.svg)](https://code.visualstudio.com/)
[![Framework](https://badges.aleen42.com/src/react.svg)](https://reactjs.org/)

Trabajo de uso de API REST para la creacion de una aplicación web con REACT

---

## Índice

- [SakuraCards](#sakuracards)
  - [Índice](#índice)
  - [Aclaración](#aclaración)
  - [Despliegue](#despliegue)
  - [Documentación](#documentación)
  - [Scripts disponibles](#scripts-disponibles)
    - [Iniciar la aplicación](#iniciar-la-aplicación)
    - [Preparar la aplicación para producción](#preparar-la-aplicación-para-producción)
    - [Desplegar aplicación en netlify](#desplegar-aplicación-en-netlify)
    - [Generar documentación](#generar-documentación)

---

## Aclaración

La API original que se iba a usar en la realización de este trabajo ([sakura-card-captor-api](https://github.com/JessVel/sakura-card-captor-api)) está desutilizada, por lo que ha sido sustituida por [The Rick and Morty API](https://rickandmortyapi.com/).

## Despliegue

Aplicación desplegada a través de Netlify disponible [aquí](https://stupendous-mermaid-eabb10.netlify.app/)

## Documentación

Esta aplicación cuenta con documentación gracias a JSDoc disponible [aquí](https://salem404.github.io/sakura-cards/)

## Scripts disponibles

Tras descargar los módulos con `npm install`, en el directorio del proyecto puedes ejecutar comandos:

### Iniciar la aplicación

Accesible en [el puerto 3000](http://localhost:3000)

```bash
npm start
```

### Preparar la aplicación para producción

Se generará la carpeta `build`

```bash
npm run build
```

### Desplegar aplicación en netlify

Previsualización

```bash
npm run predeploy
```

Definitiva

```bash
npm run deploy
```

### Generar documentación

```bash
npm run document
```

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
