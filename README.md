<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Group Project - Subi Que Te Llevo

<p align="left">
  <img height="200" src="./car.jpg" />
</p>

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.
- Usar y practicar testing.

## BoilerPlate

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

Adicionalmente creamos desde psql una base de datos llamada `subi`

El contenido de `client` fue creado usando: Create React App.

## Enunciado

La idea general es crear una aplicación de viaje compartido. Las aplicaciones móviles ofrecen no solo comodidad, sino más claridad y seguridad que simplemente tomar un automóvil en la calle. 

Al revisar la lista de características, hay tres partes que participan en el viaje: un conductor, un pasajero y un mediador (administrador).

### Aplicación de pasajeros

- Registro encriptado. Los usuarios deben tener la oportunidad de crear una cuenta de forma rápida y segura con sus cuentas de redes sociales o Gmail.
- Búsqueda de viajes. La búsqueda de un conductor debe incluir filtros como tipo de automóvil, ruta preferida, tarifa, fecha y hora óptimas, calificación del conductor y sexo.
- Geolocalización. Una aplicación móvil ayuda a identificar un lugar de entrega (donde comienza el viaje) y una ubicación de entrega (donde termina) en el mapa.
- Reservando un viaje. Después de encontrar una opción perfecta, los usuarios crean una solicitud de viaje. Pueden identificar los lugares donde va a comenzar y terminar su viaje y también el número de pasajeros que viajan con ellos.
- Revisión de otros pasajeros. Al reservar un viaje, los usuarios deben poder consultar los perfiles de otros pasajeros con sus calificaciones para asegurarse de que el viaje sea seguro.
- Notificaciones. Se notifica a los usuarios sobre el estado del viaje: modelo y patente de automóvil, hora de llegada y tiempo de viaje.
- Seguimiento en tiempo real. Los pasajeros pueden seguir al conductor en el mapa en tiempo real y recibir notificaciones cuando se acerca un conductor.
- Llamadas / mensajes dentro de la aplicación. Esta característica se vuelve crucial si aparecen cambios o aclaraciones antes del viaje.
- Pago en línea. Aquí, un pasajero puede registrar su tarjeta de crédito y realizar pagos sin efectivo dentro de la aplicación.
- Cancelación de viaje. Los usuarios deben poder cancelar un viaje o participar en el viaje en cualquier momento que lo deseen, siguiendo las reglas y pautas de la aplicación.
- Puntajes y reseñas. Con la función, los usuarios pueden dejar sus opiniones y comentarios una vez finalizado el viaje.
- Recorre la historia. Los viajes terminados se registran y muestran en esta sección con todos los detalles necesarios: la fecha, el destino, la tarifa y la descripción del automóvil.
- Servicio de soporte. Las personas abordan sus quejas, preguntas y sugerencias.

### Aplicación de conductor

- Registro encriptado. Crear una cuenta debería ser fácil y seguro. Además de la información básica de las redes sociales, los conductores agregan detalles sobre el automóvil y sus fotos.
- Verificación de perfil. Antes de que una cuenta entre en funcionamiento, los conductores completan un formulario en el que ingresan información sobre su edad y estado de salud, licencia de conducir, experiencia e historial (verificación de antecedentes penales).
- Ofrecer un viaje. Los datos incluyen un punto de destino, tarifa por un viaje, fecha y hora del viaje, lugares preferibles para subir y dejar a los pasajeros y la cantidad de asientos disponibles para un viaje.
- Rechazo / aceptación del viaje. Los conductores revisan la lista de pasajeros y pueden decidir si la aceptan o no.
- GPS en la aplicación. Esta función proporciona varias opciones de ruta, ayuda a indicar atascos en el camino y sirve como guía si la ruta es desconocida para el conductor.
- Llamadas / mensajes dentro de la aplicación. Los propietarios de automóviles también deben tener la oportunidad de comunicarse con un pasajero para aclarar los detalles del viaje.
- Recibir pagos. Aquí los conductores registran sus tarjetas de pago para recibir convenientemente el pago por sus servicios.
- Puntajes y reseñas. Los conductores dejan sus calificaciones y reseñas cuando finaliza el viaje.
- Servicio de soporte. Al igual que los pasajeros, los conductores pueden tener preguntas sobre las funciones de la aplicación o deberían poder dejar quejas.

### Panel de administrador

- Dashboard. Es una descripción general de las numerosas métricas comerciales: la cantidad de usuarios e ingresos para un período determinado, mensajes, administración de varios departamentos de aplicaciones (pagos, conductores, pasajeros, calificaciones, etc.).
- Análisis. Aquí los administradores encuentran información sobre flujos de ingresos, tendencias de crecimiento o disminución, ingresos por categoría, etc.
- Conductores. Los admin pueden aprobar nuevos conductores en esta sección y luego almacenar los detalles del perfil, las calificaciones y las reseñas de cada conductor.
- Pasajeros. Cuando un pasajero crea una nueva cuenta, aparecerá inmediatamente en esta sección con todos los detalles de contacto, calificaciones y reseñas accesibles.
- Vehículos. Es un lugar separado para almacenar información sobre los automóviles y su estado.
- Pagos. Cada pago y su estado (exitoso o no) junto con las ganancias de los conductores se registran aquí.
- Servicio de ayuda. Cualquier solicitud de los usuarios se enviará a esta sección y luego se transformará en tareas para el equipo de soporte o los expertos técnicos.

## Para desarrollar esta aplicación es importante tener en cuenta los siguientes aspectos:

### Requerimientos legales

Todas las ciudades y áreas tienen sus propias listas de leyes y restricciones, y debemos conocerlas detenidamente antes del lanzamiento oficial de la aplicación. Los puntos críticos de incluyen:

- El documento principal que le permite iniciar un negocio de viajes compartidos (una licencia, certificado o algo similar);
- El sistema fiscal para las empresas de viajes compartidos;
- Seguros para conductores y pasajeros;
- Información de antecedentes sobre los conductores, si dicha información está disponible; y
- Marcas de identificación de la empresa proporcionadas a los conductores si fuera necesario.

### Confianza y seguridad

La seguridad es una necesidad vital para todos nosotros, sin importar adónde vayamos y qué hagamos. Encontrarse con un extraño en el automóvil no siempre parece lo suficientemente seguro para los pasajeros potenciales, pero las compañías modernas de viajes compartidos han cambiado esta imagen y como desarrolladores debemos hacer todo lo posible para mantenerla o incluso fortalecerla.

- Verificaciones de antecedentes. Los conductores son los que demuestran la calidad y el valor de su aplicación y mantienen los más altos niveles de seguridad para los usuarios. Tomarse el tiempo para realizar verificaciones de antecedentes al principio nos permitirá ahorrar mucho dinero en el futuro y garantizará la reputación de la aplicación. ¿Qué puede ser más valioso para un negocio?
- Compartiendo un viaje. Los pasajeros preocupados por su seguridad enviarán el número del automóvil a sus amigos cercanos o familiares. Podemos hacerlo más fácil con la función de compartir los detalles del viaje a través de diferentes mensajeros, y podemos incluir la posibilidad de seguimiento en tiempo real. Los usuarios podrían hacer esto con sólo tocar un botón "Enviar Detalles del Viaje".
- Soporte 24/7. Sus clientes apreciarán el esfuerzo si hay empleados de la app que están acompañándolos todo el tiempo, de manera de que parezca que la empresa detrás de esta appsiempre está ahí si fuera necesario. Se puede incluir un botón para informar al soporte, o un lugar donde los usuarios pueden contactar al equipo directamente.
- Boton de emergencia. Es el siguiente nivel de soporte 24/7, ya que estas son acciones en caso de necesidad imperiosa. Debemos considerar con quién va a conectar a los usuarios este botón: si con personal de la api o con una estación de policía de inmediato. Por ejemplo, se puede ofrece alertar al 911 en silencio.
- Conductores femeninos. Viajar con una mujer parece más seguro, especialmente para las mujeres viajeras, por lo que puede ofrecer a los usuarios esta función como filtro de búsqueda. De manera que se puede incluír la opción "Sólo para mujeres" ya sean propietarias de automóviles o pasajeras.

### Modelos de monetización

Se puede ganar dinero con una aplicación de viaje compartido. Hay tres modelos que se van a evaluar:

- Tasas de comisión. En este caso la plataforma cobra una cierta cantidad de dinero a los usuarios. Por ejemplo, toma un valor entre el 12% y el 20% de los pagos realizados por los pasajeros a los conductores, y el porcentaje restante son las ganancias del conductor.
- Publicidad. Poner algunos anuncios en distintos lugares en la aplicación puede ser una fuente de ingresos adicional. Pero por encima de todo debe estar la experiencia del usuario y ser cuidadoso y discreto con cada banner publicitario.
- Asociaciones. Una plataforma con prestigio puede elegir algunas empresas de transporte con las que asociarse para ampliar la oferta y brindar a los usuarios una alternativa de transporte durante los tiempos de COVID. Pero se pueden crear más asociaciones, con determinadas Estaciones de Servicio o incluso hoteles o hosterías cuando se realizan viajes de larga distancia.

### Endpoints utilizados serán:

  - GET https://api. completar
  - GET https://api.

#### Tecnologías utilizadas:
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres

#### Frontend

Se debe desarrollar una aplicación de React/Redux que contenga las siguientes pantallas/rutas.

__Pagina inicial__: deben armar una landing page con
- [ ] Alguna imagen de fondo representativa al proyecto
- [ ] Botón para ingresar al home (`Ruta principal`)

__Ruta principal__: debe contener
- [ ] Input de búsqueda para encontrar viajes
- [ ] Área donde se verá 
  - Imagen
  - Nombre
  - Calificación
 
- [ ] Botones/Opciones para filtrar por:
    - Rutas con peaje
    - Rutas sin peaje
    - 
- [ ] Paginado.

__Ruta de detalle de la ruta__: debe contener
- [ ] Los campos mostrados en la ruta principal para cada ruta
- [ ] Puntos destacados del viaje
- [ ] Duración del recorrido


__Ruta de creación de un viaje__: debe contener
- [ ] Un formulario __controlado__ con los siguientes campos
  - Ciudad de Origen
  - Ciudad de Destino
  - Día del viaje
  - Hora del viaje
- [ ] Posibilidad de seleccionar/agregar ...
- [ ] Botón/Opción para crear un nuevo viaje

#### Base de datos

El modelo de la base de datos deberá tener las siguientes entidades:

- [ ] Rutas con las siguientes propiedades:
  - ID *
  - Nombre *
  
- [ ] (Completar) con las siguientes propiedades:
  - ID
  - Nombre

Detallar la relación entre las distintas entidades de muchos a muchos 

#### Backend

Se debe desarrollar un servidor en Node/Express con las siguientes rutas:

- [ ] __GET /maps__:
  - Obtiene un listado de una ruta por coordenadas ofreciendo distancia entre dos puntos y tiempo del recorrido
  - Debe devolver solo los datos necesarios para la ruta principal
- [ ] __GET /maps/location/?name="..."__:
  - Obtener un listado de las ciudades que contengan la palabra ingresada como query parameter
  - Si no existe ninguna ciudad con ese nombre mostrar un mensaje adecuado
- [ ] __GET /maps/{id}__:
  - Obtener el detalle de una ciudad en particular
  - Debe traer solo los datos pedidos en la ruta de detalle de la ciudad
- [ ] __GET /__:
  - Obtener ...
- [ ] __POST /route__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de un nuevo viaje por body
  - Crea una nuevo viaje en la base de datos

#### Testing
- [ ] frontend con sus tests respectivos
- [ ] backend con sus tests respectivos
- [ ] base de datos con sus tests respectivos
