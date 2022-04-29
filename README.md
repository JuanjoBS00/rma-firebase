# Rma-Firebase

Este proyecto tiene la principal finalidad de crear una aplicación mediante el uso del framework Angular, la cual gestiona la plantilla de jugadores de un equipo deportivo, en este caso el Real Madrid CF. Igualmente, otro objetivo fundamental de este trabajo, es que la información sea accedida a través de una base de datos de Firebase (tipo Realtime) y que se realicen las operaciones de: Crear, Leer, Actualizar y Borrar (CRUD). En este caso, dichas operaciones se realizarán sobre los jugadores de la plantilla.

Para el desarrollo de esta aplicación, se ha partido de una previamente creada, la cual se encuentra en el repositorio de esta misma cuenta "rma-handler". Dicha aplicación se ha adaptado, de tal forma que los datos no sean accedidos desde variables locales existentes sino desde una base de datos real Firebase. 

Los componentes existentes son prácticamente similares a la anterior aplicación. Existen algunos componentes comúnes para todos los usuarios (forgot-password, login y not-found). Asimismo, se han realizado pequeñas modificaciones en componentes existentes pertenecientes a los usuarios administradores (about, footer, header, home, players, create-player, modify-player, player-detail, etc). En esta nueva aplicación, se ha creado un nuevo componente (remove-player-msg) el cual se encarga de mostrar un mensaje de confirmación cada vez que un jugador sea eliminado de la plantilla.

En este proyecto, se hace uso de  del anidamiento entre componentes, enrutamiento (donde se administra la carga de componentes dependiendo de su uso gracias al empleo del lazy-loading), navegación y servicios (auth.service y database.service). En la versión anterior de la aplicación, existía un servicio por operación disponible, mientras que ahora todas estas operaciones a realizar en la base de datos de Firebase son gestionadas por un único servicio (database.service).

Los datos de acceso para la administración de la aplicación son los siguientes:

-Usuario: florentinoperrod@gmail.com

-Contraseña: tranquilo

Enlace de la aplicación desplegada: https://juanjobs00.github.io/rma-firebase/login

¡Espero que te guste!
