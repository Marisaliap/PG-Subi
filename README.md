<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Group Project - Gimme a Ride (Subi Que Te Llevo)

<p align="left">
  <img height="200" src="./car_8.jpg" />
</p>

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Utilizar otras tecnologìas : Auth0, Format Js, Sass, Material Ui, Cloudinary.
- Incorporar una pasarela de pago.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.

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

Se ofrece una interfaz bilingüe Inglés-Castellano (inglés como idioma primario). Nuestro país es visitado por turistas de todo el mundo, por lo que agregar estos dos idiomas en la aplicación es algo muy interesante y valioso. 

Al revisar la lista de características de la aplicación, hay tres partes que participan en el viaje: un conductor, un pasajero y un mediador (administrador).

<p align="left">
  <img height="200" src="./routes_2.jpg" />
</p>

### Aplicación de pasajeros

- Registro encriptado. Los usuarios deben tener la oportunidad de crear una cuenta de forma rápida y segura con sus cuentas de redes sociales o Gmail.
- Búsqueda de viajes. La búsqueda de un conductor debe incluir filtros como tarifa más baja, fecha y hora óptimas, preferencias personales como viajar con mascotas, fumadores o no fumadores, dos personas en la parte de atrás del autómovil como máximo, etc. También debe poder ver la calificación y el sexo del conductor.
- Conductores femeninos. Viajar con una mujer parece más seguro, especialmente para las mujeres viajeras, por lo que se ofrece a los usuarios esta función como filtro de búsqueda. Se incluye la opción "Sólo para mujeres" ya sean propietarias de automóviles o pasajeras.
- Reservando un viaje. Después de encontrar una opción perfecta, los usuarios crean una solicitud de viaje. Pueden identificar los lugares donde va a comenzar y terminar su viaje y también el número de pasajeros que viajan con ellos.
- Revisión de otros pasajeros. Al reservar un viaje, los usuarios deben poder consultar los perfiles de otros pasajeros con sus calificaciones para asegurarse de que el viaje sea seguro.
- Notificaciones. Se notifica a los usuarios sobre el estado del viaje: modelo, color  y patente de automóvil, hora de salida y tiempo de viaje.
- Llamadas / mensajes de chat dentro de la aplicación. Esta característica se vuelve crucial si aparecen cambios o aclaraciones antes del viaje.
- Pago en línea. Aquí, un pasajero puede registrar su tarjeta de crédito y realizar pagos sin efectivo dentro de la aplicación.
- Los usuarios deben poder participar en un viaje en cualquier momento que lo deseen, siguiendo las reglas y pautas de la aplicación.
- Puntajes y reseñas. Con la función, los usuarios pueden dejar sus opiniones y comentarios una vez finalizado el viaje.
- Servicio de soporte. Las personas abordan sus quejas, preguntas y sugerencias.

### Aplicación de conductor

- Registro encriptado. Crear una cuenta debería ser fácil y seguro. Además de la información básica de las redes sociales, los conductores agregan detalles sobre el automóvil, cédula verde, cédula azul si fuera un conductor autorizado, dni y sus fotos.
- Verificación de perfil. Antes de que una cuenta entre en funcionamiento, los conductores completan un formulario en el que ingresan información sobre su edad, licencia de conducir y experiencia.
- Ofrecer un viaje. Los datos incluyen un punto de destino, tarifa por un viaje, fecha y hora del viaje, y la cantidad de asientos disponibles para un viaje.
- Llamadas / mensajes de chat dentro de la aplicación. Los propietarios de automóviles también deben tener la oportunidad de comunicarse con un pasajero para aclarar los detalles del viaje.
- Recibir pagos. Aquí los conductores registran su cbu para recibir convenientemente el pago por sus servicios.
- Puntajes y reseñas. Los conductores dejan sus calificaciones y reseñas cuando finaliza el viaje.
- Servicio de soporte. Al igual que los pasajeros, los conductores pueden tener preguntas sobre las funciones de la aplicación o deberían poder dejar quejas.

### Panel de administrador

- Dashboard. Es una descripción general de las numerosas métricas comerciales: la cantidad de usuarios e ingresos para un período determinado, mensajes, administración de varios departamentos de aplicaciones (pagos, conductores, pasajeros, calificaciones, etc.).
- Análisis. Aquí los administradores encuentran información sobre flujos de ingresos, tendencias de crecimiento o disminución, ingresos por categoría, etc.
- Conductores. Los admin pueden aprobar nuevos conductores en esta sección y luego almacenar los detalles del perfil, las calificaciones y las reseñas de cada conductor.
- Pasajeros. Cuando un pasajero crea una nueva cuenta, aparecerá inmediatamente en esta sección con todos los detalles de contacto, calificaciones y reseñas accesibles.
- Vehículos. Es un lugar separado para almacenar información sobre los automóviles y su estado.
- Pagos. Cada pago y su estado (exitoso o no) se registran aquí.
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
- Soporte 24/7. Sus clientes apreciarán el esfuerzo si hay empleados de la app que están acompañándolos todo el tiempo, de manera de que parezca que la empresa detrás de esta app siempre está ahí si fuera necesario. Se puede incluir un botón para informar al soporte, o un lugar donde los usuarios pueden contactar al equipo directamente.
- Boton de emergencia. Es el siguiente nivel de soporte 24/7, ya que estas son acciones en caso de necesidad imperiosa. Debemos considerar con quién va a conectar a los usuarios este botón: si con personal de la api o con una estación de policía de inmediato. Por ejemplo, se puede ofrece alertar al 911 en silencio.
- Conductores femeninos. Viajar con una mujer parece más seguro, especialmente para las mujeres viajeras, por lo que puede ofrecer a los usuarios esta función como filtro de búsqueda. De manera que se puede incluír la opción "Sólo para mujeres" ya sean propietarias de automóviles o pasajeras.

### Modelos de monetización

Se puede ganar dinero con una aplicación de viaje compartido. Hay tres modelos que se van a evaluar:

- Tasas de comisión. En este caso la plataforma cobra una cierta cantidad de dinero a los usuarios. Por ejemplo, toma un valor entre el 12% y el 20% de los pagos realizados por los pasajeros a los conductores, y el porcentaje restante son las ganancias del conductor.
- Publicidad. Poner algunos anuncios en distintos lugares en la aplicación puede ser una fuente de ingresos adicional. Pero por encima de todo debe estar la experiencia del usuario y ser cuidadoso y discreto con cada banner publicitario.
- Asociaciones. Una plataforma con prestigio puede elegir algunas empresas de transporte con las que asociarse para ampliar la oferta y brindar a los usuarios una alternativa de transporte durante los tiempos de COVID. Pero se pueden crear más asociaciones, con determinadas Estaciones de Servicio o incluso hoteles o hosterías cuando se realizan viajes de media y larga distancia.

### Funciones avanzadas de las aplicaciones de viaje compartido que se podrían evaluar y añadir a futuro

Implementar una o dos de las siguientes características pueden ser una ventaja para atraer nuevos clientes.

- Modo offline. A veces los conductores pueden pasar por lugares con una mala conexión a Internet, o los pasajeros pueden querer usar una aplicación en el sótano. El modo sin conexión es un respaldo para estas situaciones.
- Lugares favoritos. La dirección de la casa, la oficina, los lugares de amigos o familiares: todos estos son los lugares favoritos de los pasajeros. Guardarlos en la aplicación eventualmente ahorrará algunos minutos preciosos para el usuario.
- Programación de un viaje. ¿De inmediato o en varias horas? Si los usuarios tienen un viaje al aeropuerto, es mejor contratar un viaje de antemano. La programación de viajes es una herramienta extremadamente útil para tales situaciones.
- Descuentos para usuarios. Existen muchas formas de aprovechar los descuentos y los códigos de promoción para beneficio de los propietarios de la app, así que, ¿por qué no convertirlo en parte del esfuerzo de marketing? Informe a sus clientes nuevos y leales sobre los beneficios de precio con su servicio de viaje compartido.
- Propinas. Cualquier pago adicional es una motivación para hacer mejor el trabajo. Dejar propinas es una opción para que los pasajeros agradezcan a los conductores por un gran servicio y un incentivo para que los propietarios de automóviles mejoren sus habilidades (tanto de conducción como de comunicación).
- Interfaz multilingüe. Cuantos más idiomas incorporados tenga la aplicación, más usuarios obtendrá. Incluso dentro de una ciudad, se pueden encontrar personas de diversos grupos étnicos, por lo que agregar varios idiomas a la aplicación es algo sumamente valioso. 

### Endpoints utilizados serán:

  - GET https://api.mapbox.com/geocoding/v5/mapbox.places/${name}.json?country=ar&types=place&access_token=${TOKEN}
  - GET https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${long1}%2C${lat1}%3B${long2}%2C${lat2}?alternatives=false&geometries=geojson&overview=full&steps=false&access_token=${TOKEN}`
        

#### Tecnologías utilizadas:
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres
- [ ] Format JS (traducción)
- [ ] Sass
- [ ] Cloudinary
- [ ] Material-Ui
- [ ] Auth0
- [ ] Sweetalert


#### Frontend

Se desarrolla una aplicación de React/Redux que contiene las siguientes pantallas/rutas.

__Pagina inicial__: una landing page con
- [ ] Una imagen de fondo representativa al proyecto
- [ ] Imágenes de banderas de países para seleccionar el idioma
- [ ] Texto breve indicando la principal funcionalidad de la app y sus ventajas
- [ ] Botón para ingresar al home (`Ruta principal`)

__Ruta principal__: contiene
- [ ] Input de búsqueda para encontrar viajes
- [ ] Botón para crear un viaje que lleva al registro del usuario y registro de su coche
- [ ] Un botón para acceder a todas las rutas disponibles actualmente
- [ ] Área donde se ven imágenes y textos que amplían la información para el usuario
  - Imagen
  - Descripción
  
 __Ruta de listas de las rutas existentes__: contiene
  
- [ ] Botones/Opciones para filtrar rutas por:
    - Se admiten mascotas
    - Se permite fumar 
    - Alimentos permitidos
    - Màximo dos personas en la parte de atrás
    - Se permiten niños
    - Sólo mujeres

- [ ] Botón para ordenar por    
    - Salida más temprana
    - Precio más bajo

- [ ] Detalle de cada ruta con los siguientes campos:
    - Foto de perfil del conductor
    - Calificación del conductor
    - Ciudad de origen
    - Ciudad de destino
    - Fecha y hora de salida
    - Asientos disponibles
    - Precio del viaje
    
- [ ] Paginado.

__Ruta de detalle de la ruta__: contiene
- [ ] Los campos mostrados en la ruta principal para cada ruta
- [ ] Mapa mostrando la ruta seleccionada
- [ ] Distancia en kilómetros entre origen y destino
- [ ] Duración del viaje
- [ ] Preferencias
- [ ] Botón para poder unirse a un viaje
- [ ] Borón para regresar a la pàgina anterior


__Ruta de creación de un viaje__: contiene
- [ ] Un formulario __controlado__ con los siguientes campos
  - Ciudad de Origen
  - Ciudad de Destino
  - Día del viaje
  - Hora del viaje
  - Lugares disponibles
- [ ] Posibilidad de seleccionar preferencias del conductor
- [ ] Botón/Opción para la vista previa de un nuevo viaje


__Ruta de confirmación para crear un viaje__: contiene
- [ ] Mapa ampliado de la ruta definida previamente
- [ ] Información detallada con los campos enumerados en el formulario anterior
- [ ] Botón/Opción para crear un nuevo viaje
- [ ] Botón/Opción para realizar alguna modificación


#### Base de datos

El modelo de la base de datos contiene las siguientes entidades:

- [ ] Usuario con las siguientes propiedades:
  - Email *
  - Nombre *
  - Apellido *
  - Género *
  - Sobre *
  - Edad *
  - DNI *
  - Calle *
  - Ciudad *
  - Provincia *
  - Teléfono *
  - Facebook
  - Instagram
  - Calificación
  - Foto de perfil
  - Foto del DNI
  - Es administrador
  - Está baneado
  - CBU (datos bancarios)

- [ ] Rutas con las siguientes propiedades:
  - ID *
  - Nombre de Origen *
  - Nombre de Destino *
  - Origen *
  - Destino *
  - Puntos *
  - Precio *
  - Fecha de salida *
  - Hora de salida *
  - Lugares disponibles *
  - Preferencias *
  - Conductor *
  - Distancia en Kilómetros *
  - Duración *
  
- [ ] Coche con las siguientes propiedades:
  - ID *
  - Patente *
  - Marca *
  - Modelo *
  - Cilindrada *
  - Color *
  - Tarjeta verde *
  - Tarjeta azul

- [ ] Post con las siguientes propiedades:
  - Descripciòn *
  - Calificaciòn
  - Fecha
  - Autor

- [ ] Orden con las siguientes propiedades:
  - Estado de la orden 
  - Id del pago 
  - Estado del pago
  - Id de la orden del vendedor
  - Precio

- [ ] Chat con las siguientes propiedades:
  - Autor *
  - Mensaje *
  - Fecha

- [ ] Buzón de Sugerencias con las siguientes propiedades:
  - ID *
  - Nombre *

- [ ] Preferencias con las siguientes propiedades:
  - Autor *
  - Email del autor *
  - Sugerencias *


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
