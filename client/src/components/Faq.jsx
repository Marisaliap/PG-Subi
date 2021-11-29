import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../Sass/Styles/Faq.scss"

export default function Faq() {

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    history.push('/home');
  }

    return (
        <div className='Faq'>
         <Link to="/home">
        <button className="buttonBlue">Home</button>
      </Link>
      <article>
      <div></div>
            <div>
              <h2>Frequently asked questions</h2><h3>Using Give me a ride® </h3>
              <p>Do you have questions about how to use Give me a ride®? Write to our  
                <a href="https://facebook.com/givemearide" target="_blank">Facebook</a> 
                o <a href="mailto:grupo10.soyhenry@gmail.com" target="_top">grupo10.soyhenry@gmail.com</a>.</p>

              <h3>What is Give me a ride®? </h3>
              <p>It is a network of people who share car trips between cities, making an equitable division of 
              costs among all travelers or an agreed contribution. Give me a ride® is not a public or private 
              passenger transportation system. </p>            
              
              <h3>What types of trips can I do with Give me a ride®? </h3>
              <p>In Give me a ride® you can create or find medium and long-distance trips. Drivers who organize 
              their long or short distance trips publish their free seats on the app, specifying in their 
              advertisement the route and the price for each seat and section. 

              <p>The trips are created by the same users according to their destination and time availability. In base
              to that travel proposal, other users can ask the driver to accompany them in journey. </p>
              Passengers interested in the trip can contact the drivers through the public messaging system.If they 
              decide to travel together, the passenger makes the reservation and pays online the price stipulated 
              for the contracted place.  </p>
              
              <h3>Do the rides on Give me a ride® have a cost? How much does a Give me a ride® ride cost? </h3>
              <p>Give me a ride® -being a network of people who share trips- only allows monetary contributions for used 
              fuel and tolls or equitable division of expenses among all participants. There is no fixed rate or ticket value. 
              The contribution cannot exceed the value of an equitable division of fuel expenses and tolls since if so it could 
              be considered illegal passenger transport. 
              <u>Give me a ride® is a collaborative network, not a service. </u></p>


              <h3>How is the contribution for a trip calculated? </h3>
              <p>The maximum monetary contribution accepted in Give me a ride® is the fuel used + tolls divided by the number 
                of people traveling in the car. It must be defined before the trip, before or during the prior coordination. 
                Unless it is decided to make a division of expenses with fuel and toll tickets in hand, at the end of it.
                In the event that a person requests a monetary value that leaves in evidence that exceeds the accepted maximum, 
                they will be warned by the administrators and suspended from the platform until accepting the rules. 
                In case of recidivism, suspended for months until reaching a definitive suspension. </p>


              <h3>Why are only the cost of fuel used and tolls considered? </h3>
              <p>They are the only verifiable expenses in a trip through tickets (in case their verification is required). The rest of the expenses that may exist (car wear or insurance) are borne by the driver since he contributes his car in a disinterested way for the trip and is not professionally dedicated to the transport of people.  </p>
              <p> In the event of a possible inconvenience in the trip, if it is found that there has been a profit in favor of the driver, the same could face legal problems for offering a service and not being registered to carry out that activity and charge it. In contrast, in a fuel and toll division there is no illicit activity. </p>
               <p> Beyond the contribution of fuel and tolls, people who share a trip can contribute monetarily for the reason they consider necessary to another person with whom they shared the trip -for example for the cookies they shared- It must be completely voluntary and The reason cannot be for having shared the trip. </p>


               <h3> Is it essential to present fuel and toll tickets to request the monetary contribution to passengers? </h3>
               <p> They are not obligatory but they are a way of clarifying the accounts between the driver and his companions. Some people make the same trip frequently and already know the amounts, so they do not usually divide the expenses at each opportunity but use the reference value of the previous trip.
               </p>
               <p> In any case, anyone during the pre-trip coordination can request in advance to define the contribution by presenting fuel and toll tickets in hand. No driver can refuse this request or leave it unanswered, nor can they cancel a passenger for this request. The division of expenses with fuel tickets and tolls is the most direct way to establish the maximum contribution for a trip and is recommended by Give me a ride®. (*) </p>
               <p> (*) To calculate fuel costs and tolls with tickets, Give me a ride® recommends filling the tank before leaving and refilling it at the destination. This last load (or the amount of fuel loads that are made once the trip has started) will be the fuel expense + the toll tickets. </p> 

               <h3> Can contributions be made in a way other than monetary? </h3>
               <p> It will be an arrangement between driver and passenger. Some may request or offer another type of contribution, such as having someone pay for meals during a long trip or asking the passenger to stay awake to keep the driver attentive to the road, among other examples.
               </p> 

               <h3> How do I coordinate a trip? </h3>
              <p> <strong> Drivers: </strong>
              </p>
              <p> When you load the trip, we recommend that you detail the information as much as possible to avoid repetitive inquiries from those interested in your trip. To do this, use the "Comment for passengers" field. There you can inform what is the contribution for the trip and the amount, the space available for luggage, what is the maximum number of passengers that you will take in your car, where it begins and ends and any other additional information that you consider relevant. <br/> It is important that you communicate with your passengers via message to finish coordinating details and conditions of the trip. We suggest that in this instance you ask for a telephone contact for a more precise communication when the date of the trip. <br/> Remember that both must agree and be aware of the conditions of the trip to avoid misunderstandings regarding schedules, meeting and arrival points, luggage, fuel and toll contribution and other essential information. <br/> You We recommend coordinating and boarding your passengers using the Give me a ride® platform to then access the possibility of qualifying them at the end of the trip.
                </p>
                <p> <strong> Drivers: Passenger search engine: </strong>
                </p>
                <p> In addition to posting your trip as a Driver and waiting for others to contact you, you can also search for passengers using Give me a ride®. From the PC, by clicking on the "I'm looking for passengers" button, you complete the origin and destination fields and press "Search".
                  From the cell phone: on the main screen by clicking on the magnifying glass symbol and selecting "I'm looking for a passenger" as the search criteria.
                  </p> 
                 <p> <strong> Passengers: </strong>
                  </p>
                  <p> Once you find a trip that works for you, send a message via the platform to the driver to clarify the terms of the trip and coordinate the details. In this message you can make inquiries if you see that the trip description does not have all the information you need, or you can leave a telephone contact with the driver so that he or she has another alternative of communication with you. Once the queries have been satisfied and that you both agree with the conditions of the trip, you ask the driver for the seat and he accepts your request.
                    <br/> It is important that both agree on the conditions and details of the trip when confirming it. Make sure that there are no doubts about the meeting point, the schedule, the availability of luggage space, the total number of passengers and the contribution for fuel and toll expenses. We also suggest you ask for the driver's phone number for more accurate communication on the date of travel.
                    <br/> We recommend that you always get on the trip using the Give me a ride® platform and then access the possibility of rating it at the end of the trip. Remember that for that, you must request a seat with the corresponding button and that the other person accepts the request. When they accept you, you will receive a notification that you can see verify within "My trips".
                    <br/> Once everything is coordinated and the driver confirms you to share the trip, you just have to wait until the day of the trip!
                    </p> 

                    <h3> Who sees the trips you posted ?: Personalized trip visibility. </h3>
               <p> When creating a trip, you can define its privacy and choose who will be the Give me a ride® users who will be able to contact you. <br/>
                 There are three types of visibility: <br/>
                 "Public trip" <br/>
                 "Visible trip for friends of friends" <br/>
                 "Visible trip for friends" <br/>
                 <br/> You can create your list of friends by sending friend requests within the platform or by linking your account with that of Facebook, so that the platform also takes into account your friends from that social network who are on Give me a ride® .
               </p> 
               <p> Following this, the three types of travel comprise: </p>
               <ul>
                 <li> “Public ride” → ALL Give me a ride® users will be able to view and request this ride. </li>
                 <li> “Visible trip for friends of friends” → your friends and their friends from Give me a ride® and Facebook (if you logged in with this social network) will be able to see and request this trip. </li>
                 <li> “Visible trip for friends” → only your Give me a ride® and Facebook friends (if you logged in with this social network) who use Give me a ride® will be able to see and request this trip. </li>
               </ul> 
              <table>
                <thead>
                  <tr>
                      <th></th>
                      <th> If you are a friend
                       </th> <th> If you have a friend in common </th>
                       <th> If you are not a friend </th> 
                  </tr>
                </thead>
                  <tbody><tr>
                  <th> Someone creates a "Public" trip </th>
                       <td> you see it ✔ </td>
                       <td> you see it ✔ </td>
                       <td> you see it ✔ </td> 
                  </tr>
                  <tr>
                  <th> Someone creates a trip for "Friends of friends" </th>
                       <td> you see it ✔ </td>
                       <td> you see it ✔ </td>
                       <td> you don't see it ✘ </td> 
                  </tr>
                  <tr>
                  <th> Someone creates a trip for "Friends" </th>
                       <td> you see it ✔ </td>
                       <td> you don't see it ✘ </td>
                       <td> you don't see it ✘ </td> 
                  </tr>
              </tbody></table>

              <h3> I had problems with my trip, what do I do? </h3>
              <p> If you had a bad experience with your trip (irresponsible drivers, lack of passenger commitment, among other problems) or the conditions of the trip did not occur as they were established, tell about your experience when you can rate the other person. That is why it is important that you maintain the coordination of the trips within the Give me a ride® platform. </p>
              <p> If the bad experience involves violence by messages, verbal or physical. Also road violence (dangerous driving, cell phone use, etc). Not respecting the maximum contribution or some other illegality. Beyond leaving a rating to the person, also write to Give me at ride®@stsrosario.org.ar or via Private Message on our Facebook, Instagram or Tweeter page and tell us what happened.
                If we consider that it warrants it and that there is evidence of the incident, we can warn, suspend the person for some time or indefinitely.
                </p> 

               <h3> How does the grading system work? </h3>
              <p> You can rate your driver or passengers through our rating system after 24 hours from the start of the trip. <br/>
                To be able to do so, whether in the role of driver or passenger, enter the platform in the 'My Trips' section. A dialog box will appear in which you can comment on your experience indicating whether or not you recommend sharing a trip with the person (thumbs up / down according to your experience) and add a text that justifies that rating. <br/> The comment about your experience is very important for the rest of the community to understand why you recommend or not to share trips with that person. Share everything that you think is important for others to know. Remember that once the grade has been sent, it cannot be modified. <br/>
                Ratings are published once the other person has also left their rating on you, both references appearing at the same time in their profiles on the platform. In the event that 14 days pass without someone qualifying, the system will publish the qualification that has been made and the person who has not left a reference in that time will no longer be able to do so. <br/> For the system to enable the qualification, it is It is necessary to record that both users shared a trip. For this, it is necessary that the passenger has sent a travel request to the driver and the latter has accepted it. If you only communicated via message but they did not accept the seat request (as a passenger) or you did not accept the request (as a driver), they will not be able to qualify. 
                </p>

                <h3> If I got on a trip as a passenger and then had to get off or as a driver I had to cancel the trip, is it scored the same? </h3>
               <p> The system records the pending rating once both (driver and passengers) confirm that they will share a ride. If a passenger is canceled or the driver cancels for any reason, both can still qualify. In that case, we recommend that you clarify that the trip did not take place and that you tell how your experience was when interacting with the other person. </p> 
               <h3> Can I Give me a ride® without having a car? </h3>
               <p> Sure, generating a trip as a passenger looking for a driver. You can create a trip as such and the app will notify drivers when they load a trip similar to the one you generated as a passenger. If you do not create your trip, you can also search among the already published drivers and request a seat. </p> 

               <h3> Can I use Give me a ride® to connect with another transport and continue my journey? (Example: to go to Ezeiza International Airport) </h3>
               <p> Sure yes, but keep in mind that trips may be subject to modifications by the driver of the car. To guarantee your arrival at an airport or bus station, we recommend using public transport. </p> 


               <h3> Can I search for a particular trip? </h3>
               <p> Yes, using the travel search engine. On the main screen of the platform you will be able to enter "Origin", "Destination" and / or "Date". They all work as optional since it is not necessary to complete all three. <br/> Example: If you want to travel for a long weekend but you do not have a defined destination, you can enter your place of origin and the date you want to leave. The search engine will be in charge of showing you all the trips that leave that place on that date. In addition, it will show you trips related to alternative dates in case you have flexible plans. <br/> We invite you to browse the app and see the infinite travel options, such as joining one with free seats or finding fellow travelers on the list of passengers looking for a car.
                 </p> 

                 <h3> How does the travel alert work? </h3>
                 <p> After carrying out a trip search, at the end of the results list you will find a button to create an alert with the trip data that you loaded in the search.
                   The alert comes to you when someone creates a new trip that matches the search from which the alert originated.
                   Soon you will be able to configure the alert conditions, being able to have a range of time and distance. You can collaborate with Give me a ride® so that we can incorporate these functions soon <a href="https://givemearide.com/donar"> --- & gt; Donate! </a> </p> 
                   <h3> How does the travel ‘matcher’ work? </h3>
                   <p> To see the search matches (or matches) with published trips, you have to go to "my trips" enter the one you created and you will see the matches. The match has a range of days. Soon you will be able to configure the "match" conditions, being able to have a range of time and distance. You can collaborate with Give me a ride® so that we can incorporate these functions soon <a href="https://subiquetellevo.com.ar/donar"> --- & gt; Donate! </a> </p> 
              {/* <h3>¿Puedo invitar a mis amigos a Give me a ride®? :D</h3>
              <p>¡Claro que sí! Contales del proyecto e invitalos a sumarse a la aplicación mediante el botón “Invitar amigos” en el menú principal. También podés incentivarlos compartir en tu muro de Facebook los viajes que cargues a la plataforma. </p>


              <h3>¿Puedo crear viajes frecuentes u ocasionales para Give me a ride® dentro de mi ciudad?</h3>
              <p>Lamentablemente el sistema aún no está desarrollado para gestionar este tipo de viajes pero estamos trabajando en el desarrollo de una versión que también sea útil para compartir viajes dentro de la misma ciudad.</p>

              <h3>¿Cómo comparto viajes por las redes sociales?</h3>
              <p>Para compartir tu viaje o alguno que hayas visto en la plataforma a través de las redes sociales, tenés que usar los botones con el símbolo de la red social. Los podés encontrar en el listado de viajes o dentro del detalle de cada uno. Esta función sólo está disponible para la versión descargable para celulares.  </p>


              <h3>¿Cómo nace Give me a ride®? ¿Quiénes lo hacen? </h3>
              <p>Give me a ride® es una red de personas que comparten viajes en auto. Es un proyecto de gestión colectiva sin fines de lucro y de código libre que surge de la asociación civil STS Rosario en 2013 con el fin de aportar a un uso más racional del auto. 
                La idea es que cuando tengamos que viajar en auto porque no hay colectivo o no nos conviene por algún motivo, siempre busquemos de llenar el auto para hacer un mejor aprovechamiento de los recursos fósiles y contaminación asociada al viaje. Más allá de la motivación ambiental, también Give me a ride® nos parece muy importante porque ayuda a generar vínculos entre las personas, quienes muchas veces no se hubieran encontrado de otra forma. </p>

                <h3>¿Cómo puedo contribuir con Give me a ride®?  </h3>
                <p>¡Genial que quieras colaborar! Se puede aportar a Give me a ride® con tareas de voluntariado y también difusión/contactos. <a href="https://subiquetellevo.com.ar/colabora-como-colaborar">Acá podés encontrar toda la información para ayudar a que Give me a ride® llegue más lejos</a>.  </p>

              <p>También podés donar por única vez o mensualmente acá <a href="https://subiquetellevo.com.ar/donar"> ---&gt; ¡Donar!</a></p>

              <h3>Ante cualquier comentario, consulta o propuesta de mejora, escribinos a nuestras redes Facebook, Instagram, Twitter o <a href="mailto:subiquetellevo@grupo10.com.ar" target="_top">Give me a ride®@grupo10.com.ar</a>.<p></p>

                <p>¡Buen viaje!</p>
            </h3> */}
            </div>
            </article>
        </div>
    )
}


