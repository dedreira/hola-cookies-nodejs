# Hola Cookies - NodeJS

## Introducción

Este proyecto es un ejemplo de cómo podemos escribir una cookie en un servidor node al servir una
página estática, y cómo desde ese página html podemos recuperar esa cookie y guardarla en 
el almacenamiento de localStorage o sessionStorage

## Cómo arranco el projecto

**IMPORTANTE** Esto solo funciona si tienes Node instalado :0)

Abre un terminal, vete a la carpeta **src** y ejecuta:

````js

node app.js

````

si todo ha ido bien, verás este mensaje:

server start at port 3000

después, solo tienes que navegar hasta la ruta http://localhost:3000/cookies y verás un mensaje junto con un json con los datos del usuario que hemos recuperado de la cookie.

## Dónde está la magia?

### Cómo seteamos la cookie en el servidor:

[app.js](./src/app.js):

````js
res.writeHead(200, {'Set-Cookie':'data=' + JSON.stringify(userInfo),
                        'Content-Type': 'text/html'}); // http header
````

### Cómo recuperamos la cookie en el navegador

[cookies.html](./src/static/cookies.html):

````js
        var dataCookie = getCookie('data');
        document.getElementById('cookiesHolder').innerText = dataCookie;
        // https://es.javascript.info/data-storage
        // guardamos la cookie en sessionStorage:
        sessionStorage.setItem('cookieMonster.userData',dataCookie);
        // si queremos guardarla en localStorage:
        // localStorage.setItem('cookieMonster.userData',dataCookie);
````



