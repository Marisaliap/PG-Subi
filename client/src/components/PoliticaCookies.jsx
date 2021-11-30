import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../Sass/Styles/Recommendations.scss";

export default function PoliticaCookies() {
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    history.push("/home");
  }
  return (
    <div className="Cookies">
     
      <article>
        <div></div>
        <div>
        Comuto SA (“BlaBlaCar”, “nosotros”, “nos” o “nuestro”) utiliza cookies y tecnologías de seguimiento similares en nuestro sitio web y en nuestras aplicaciones móviles (individualmente denominadas “plataforma” o conjuntamente “plataformas”). En esta política (la “Política de cookies”), te proporcionamos más información relacionada con estas tecnologías y sobre las decisiones que puedes tomar al respecto.

1. ¿Qué es una “cookie” y cuáles son las “tecnologías de seguimiento similares”?

Una “cookie” es un pequeño archivo de texto que es almacenado y/o leído por tu navegador web en el disco duro del dispositivo que estás utilizando (por ejemplo, un ordenador de escritorio, un portátil o un teléfono inteligente) extraído de los sitios web que visitas. Además de las cookies, BlaBlaCar también utiliza tecnologías similares para el seguimiento, incluidos “píxeles”, “scripts de seguimiento” o “kits de desarrollo de software” (conocidos como SDK). Son pequeños archivos de imagen transparentes o líneas de código contenidas en nuestro sitio web, correos electrónicos y aplicaciones móviles, que registran la forma en la que interactúas con ellos. Todas estas tecnologías de seguimiento se denominan “cookies” en esta Política de cookies.

2. ¿Quién coloca cookies en nuestras plataformas?

Las cookies en nuestras plataformas las colocamos nosotros (las llamadas “cookies de origen”), o bien nuestros socios (las llamadas “cookies de terceros”).

La lista de nuestros socios y las respectivas políticas de privacidad de estas cookies de terceros se muestran en la configuración de cookies, que se te muestra tanto en un banner, cuando visitas por primera vez nuestras plataformas, así como en el pie de página de nuestro sitio web y en la configuración de tu cuenta de miembro.

3. ¿Cuáles son los diferentes tipos de cookies y cómo se utilizan en nuestras plataformas?

Los siguientes tipos de cookies que se utilizan en nuestras plataformas son:

    Cookies esenciales:

Estas cookies te permiten navegar con facilidad en BlaBlaCar y usar funciones básicas como el inicio de sesión o la reserva de viajes. También permiten evitar posibles riesgos de seguridad. Estas cookies son esenciales para BlaBlaCar y no pueden desactivarse.

    Cookies de rendimiento:

Estas cookies nos ayudan a saber cuáles de nuestras páginas son más (y menos) populares, así como el contenido que resulta más útil para los usuarios. Nos ayudan a mejorar el rendimiento de BlaBlaCar, ya que nos permiten verificar, por ejemplo, que los usuarios encuentran lo que buscan con facilidad. Estas cookies pueden ser nuestras o de nuestros socios de análisis. Si no aceptas estas cookies, ni nosotros ni nuestros socios sabremos cuándo has accedido a BlaBlaCar.

    Cookies de marketing y segmentación:

Estas cookies nos indican cuándo visitas nuestra plataforma, qué páginas has visto y los enlaces en los que has hecho clic. Se usan para mostrarte anuncios relevantes en función de tus intereses y nos ayudan a medir la efectividad de nuestras campañas de publicidad. Estas cookies pueden ser nuestras o de nuestros socios publicitarios. Si no las aceptas, la publicidad que se muestre se ajustará en menor medida a tus necesidades.

4. Cómo puedes decidir sobre qué cookies se utilizan?

Cuando visitas nuestras plataformas por primera vez te mostramos un banner de cookies. En ese banner puedes encontrar más información sobre las cookies y puedes elegir si aceptas cookies de rendimiento, así como los cookies de marketing y segmentación.

Ten en cuenta que tu elección está vinculada al dispositivo y también al navegador web que utilizas. Si utilizas varios dispositivos o navegadores web, puedes elegir diferentes configuraciones.

También puedes cambiar de opinión en cualquier momento y ajustar la configuración de cookies en otro momento. Simplemente ve a la configuración de cookies que se muestra en el pie de página de nuestro sitio web o en la configuración de tu cuenta de miembro.

5. ¿Actualizaciones de nuestra Política de cookies?

Cada vez que cambiemos la forma en la que utilizamos las cookies en nuestras plataformas, actualizaremos esta Política de cookies y mostraremos la fecha de la última actualización. Si eres un usuario registrado en nuestras plataformas, nos comunicaremos contigo y te notificaremos estos cambios.
Esta Política de cookies se actualizó por última vez el 1 de abril de 2021.

6. ¿Con quién puedes ponerte en contacto en caso de preguntas adicionales?

Si tienes preguntas con respecto a nuestra Política de cookies, no dudes en ponerte en contacto con nosotros por correo electrónico a dataprotecion@blablacar.com.
        </div>
      </article>
    </div>
  );
}
