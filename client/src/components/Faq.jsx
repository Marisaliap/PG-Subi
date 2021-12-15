import React from "react";
import { Link } from "react-router-dom";
import "../Sass/Styles/Faq.scss";
import { FormattedMessage } from 'react-intl';

export default function Faq() {


  return (
    <div className="Faq">
      <Link to="/home">
        <button className="buttonBlue"><FormattedMessage id= "faq.button" defaultMessage="" /></button>
      </Link>
      <article>
        <div></div>
        <div>
          <h2><FormattedMessage id= "faq.title" defaultMessage="Frequently asked questions" /></h2>
          <h3><FormattedMessage id= "faq.h3UsingGimme" defaultMessage="" /></h3>
          <p>
          <FormattedMessage id= "faq.pDoYouHave" defaultMessage="Do you have questions about how to use Gimme A Ride®? Write to our " />
            <a
              href="https://www.facebook.com/people/Give-me-a-ride/100075632223946/?sk=about"
              target="_blank"
            rel="noreferrer"
            >
              Facebook 
            </a>
            <FormattedMessage id= "faq.or" defaultMessage="or" />{" "}
            <a href="mailto:grupo10.soyhenry@gmail.com" target="_top">
              grupo10.soyhenry@gmail.com
            </a>
            .
          </p>

          <h3><FormattedMessage id= "faq.h3whatIs" defaultMessage="What is Gimme A Ride®?" /> </h3>
          <p>
          <FormattedMessage id= "faq.pItIs" defaultMessage="It is a network of people who share car trips between cities, making an equitable division of costs among all travelers or an agreed contribution. Gimme A Ride® is not a public or private passenger transportation system."/>{" "}
          </p>

          <h3><FormattedMessage id= "faq.h3whatType" defaultMessage="What types of trips can I do with Gimme A Ride®?" /></h3>
          <p>
          <FormattedMessage id= "faq.p1" defaultMessage="In Gimme A Ride® you can create or find medium and long-distance trips. Drivers who organize their long or short distance trips publish their free seats on the app, specifying in their advertisement the route and the price for each seat and section." />
          </p>
            <p>
            <FormattedMessage id= "faq.p2" defaultMessage="The trips are created by the same users according to their destination and time availability. In base to that travel proposal, other users can ask the driver to accompany them in journey." />{" "}
            </p>
            <p>
            <FormattedMessage id= "faq.p3" defaultMessage="Passengers interested in the trip can contact the drivers through the public messaging system.If they decide to travel together, the  passenger makes the reservation and pays online the price stipulated for the contracted place." />{" "}
          </p>

          <h3>
          <FormattedMessage id= "faq.h31" defaultMessage="Do the rides on Gimme A Ride® have a cost? How much does a Give me a ride® ride cost?" />{" "}
          </h3>
          <p>
          <FormattedMessage id= "faq.p4" defaultMessage="Gimme A Ride® -being a network of people who share trips- only allows monetary contributions for used fuel and tolls or equitable division of expenses among all participants. There is no fixed rate or ticket value. The contribution cannot exceed the value of an equitable division of fuel expenses and tolls since if so it couldbe considered illegal passenger transport."/>
            <u> <FormattedMessage id= "faq.u1" defaultMessage="Gimme A Ride® is a collaborative network, not a service."/></u>
          </p>

          <h3><FormattedMessage id= "faq.h32" defaultMessage="How is the contribution for a trip calculated?" /> </h3>
          <p>
          <FormattedMessage id= "faq.p5" defaultMessage="The maximum monetary contribution accepted in Gimme A Ride® is the fuel used + tolls divided by the number of people traveling in the car. It must be defined before the trip, before or during the prior coordination. Unless it is decided to make a division of expenses with fuel and toll tickets in hand, at the end of it. In the event that a person requests a monetary value that leaves in evidence that exceeds the accepted maximum, they will be warned by the administrators and suspended from the platform until accepting the rules. In case of recidivism, suspended for months until reaching a definitive suspension." />{" "}
          </p>

          <h3><FormattedMessage id= "faq.h33" defaultMessage="Why are only the cost of fuel used and tolls considered?" /> </h3>
          <p>
          <FormattedMessage id= "faq.p6" defaultMessage="They are the only verifiable expenses in a trip through tickets (in case their verification is required). The rest of the expenses that may exist (car wear or insurance) are borne by the driver since he contributes his car in a disinterested way for the trip and is not professionally dedicated to the transport of people." /> {" "}
          </p>
          <p>
            {" "}
            <FormattedMessage id= "faq.p7" defaultMessage="In the event of a possible inconvenience in the trip, if it is found that there has been a profit in favor of the driver, the same could face legal problems for offering a service and not being registered to carry out that activity and charge it. In contrast, in a fuel and toll division there is no illicit activity." />
            {" "}
          </p>
          <p>
            {" "}
            <FormattedMessage id= "faq.p8" defaultMessage="Beyond the contribution of fuel and tolls, people who share a trip can contribute monetarily for the reason they consider necessary to another person with whom they shared the trip -for example for the cookies they shared- It must be completely voluntary and The reason cannot be for having shared the trip." />
            {" "}
          </p>

          <h3>
            {" "}
            <FormattedMessage id= "faq.h34" defaultMessage="Is it essential to present fuel and toll tickets to request the monetary contribution to passengers?" />
            {" "}
          </h3>
          <p>
            {" "}
            <FormattedMessage id= "faq.p9" defaultMessage="They are not obligatory but they are a way of clarifying the accounts between the driver and his companions. Some people make the same trip frequently and already know the amounts, so they do not usually divide the expenses at each opportunity but use the reference value of the previous trip." />
          </p>
          <p>
            {" "}
            <FormattedMessage id= "faq.p10" defaultMessage="In any case, anyone during the pre-trip coordination can request in advance to define the contribution by presenting fuel and toll tickets in hand. No driver can refuse this request or leave it unanswered, nor can they cancel a passenger for this request. The division of expenses with fuel tickets and tolls is the most direct way to establish the maximum contribution for a trip and is recommended by Gimme A Ride®. (*)" />
            {" "}
          </p>
          <p>
            {" "}
            <FormattedMessage id= "faq.p11" defaultMessage="(*) To calculate fuel costs and tolls with tickets, Gimme A Ride® recommends filling the tank before leaving and refilling it at the destination. This last load (or the amount of fuel loads that are made once the trip has started) will be the fuel expense + the toll tickets." />
            {" "}
          </p>

          <h3> <FormattedMessage id= "faq.h35" defaultMessage="Can contributions be made in a way other than monetary?" /></h3>
          <p>
            
            <FormattedMessage id= "faq.p12" defaultMessage="It will be an arrangement between driver and passenger. Some may request or offer another type of contribution, such as having someone pay for meals during a long trip or asking the passenger to stay awake to keep the driver attentive to the road, among other examples." />
          </p>

          <h3><FormattedMessage id= "faq.h36" defaultMessage="How do I coordinate a trip?" /></h3>
          <p>
            
            <strong><FormattedMessage id= "faq.strong1" defaultMessage="Drivers:" /></strong>
          </p>
          <p>
            
            <FormattedMessage id= "faq.p13" defaultMessage="When you load the trip, we recommend that you detail the information as much as possible to avoid repetitive inquiries from those interested in your trip. To do this, use the Comment for passengers field. There you can inform what is the contribution for the trip and the amount, the space available for luggage, what is the maximum number of passengers that you will take in your car, where it begins and ends and any other additional information that you consider relevant. It is important that you communicate with your passengers via message to finish coordinating details and conditions of the trip. We suggest that in this instance you ask for a telephone contact for a more precise communication when the date of the trip. Remember that both must agree and be aware of the conditions of the trip to avoid misunderstandings regarding schedules, meeting and arrival points, luggage, fuel and toll contribution and other essential information. You We recommend coordinating and boarding your passengers using the Give me a ride® platform to then access the possibility of qualifying them at the end of the trip." />
          </p>
          <p>
            
            <strong> <FormattedMessage id= "faq.stron2" defaultMessage="Drivers: Passenger search engine:" /> </strong>
          </p>
          <p>
            
            <FormattedMessage id= "faq.p14" defaultMessage="In addition to posting your trip as a Driver and waiting for others to contact you, you can also search for passengers using Give me a ride®. From the PC, by clicking on the I'm looking for passengers button, you complete the origin and destination fields and press Search. From the cell phone: on the main screen by clicking on the magnifying glass symbol and selecting I'm looking for a passenger as the search criteria." />
          </p>
          <p>
            
            <strong><FormattedMessage id= "faq.strong3" defaultMessage="Passengers:" /></strong>
          </p>
          <p>
          <FormattedMessage id= "faq.p15" defaultMessage="Once you find a trip that works for you, send a message via the platform to the driver to clarify the terms of the trip and coordinate the details. In this message you can make inquiries if you see that the trip description does not have all the information you need, or you can leave a telephone contact with the driver so that he or she has another alternative of communication with you. Once the queries have been satisfied and that you both agree with the conditions of the trip, you ask the driver for the seat and he accepts your request." />
          </p>
          <p>
          <FormattedMessage id= "faq.p16" defaultMessage="It is important that both agree on the conditions and details of the trip when confirming it. Make sure that there are no doubts about the meeting point, the schedule, the availability of luggage space, the total number of passengers and the contribution for fuel and toll expenses. We also suggest you ask for the driver's phone number for more accurate communication on the date of travel." />
         </p>
         <p>
         <FormattedMessage id= "faq.p17" defaultMessage="" />
          </p>
          <p>
          <FormattedMessage id= "faq.p18" defaultMessage="" />
          </p>

          <h3>
            
          <FormattedMessage id= "faq.h37" defaultMessage="" />
          </h3>
          <p>
          <FormattedMessage id= "faq.p19" defaultMessage="" />
          </p>
          <p>
          <FormattedMessage id= "faq.p20" defaultMessage="" />
          </p>
          <p>
          <FormattedMessage id= "faq.p21" defaultMessage="" />
          </p>
          <p>
          <FormattedMessage id= "faq.p22" defaultMessage="" />
          </p>
          <p>
          <FormattedMessage id= "faq.p23" defaultMessage="" />
          </p>
          <p>
          <FormattedMessage id= "faq.p24" defaultMessage="" />
          </p>
          <p> 
          <FormattedMessage id= "faq.p25" defaultMessage="" />
          </p>
          <ul>
            <li>
              
            <FormattedMessage id= "faq.li1" defaultMessage="" /> 
            </li>
            <li>
            <FormattedMessage id= "faq.li2" defaultMessage="" />
              
            </li>
            <li>
            <FormattedMessage id= "faq.li3" defaultMessage="" />
            </li>
          </ul>
          <table>
            <thead>
              <tr>
                <th></th>
                <th><FormattedMessage id= "faq.th1" defaultMessage="" /></th>
                <th> <FormattedMessage id= "faq.th2" defaultMessage="" /> </th>
                <th> <FormattedMessage id= "faq.th3" defaultMessage="" /> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th> <FormattedMessage id= "faq.th4" defaultMessage="" /> </th>
                <td> <FormattedMessage id= "faq.td1" defaultMessage="" /> </td>
                <td> <FormattedMessage id= "faq.td2" defaultMessage="" /></td>
                <td> <FormattedMessage id= "faq.td3" defaultMessage="" /> </td>
              </tr>
              <tr>
                <th> <FormattedMessage id= "faq.th5" defaultMessage="" /> </th>
                <td> <FormattedMessage id= "faq.td1" defaultMessage="" /> </td>
                <td><FormattedMessage id= "faq.td2" defaultMessage="" /> </td>
                <td>  </td>
              </tr>
              <tr>
                <th> <FormattedMessage id= "faq.th6" defaultMessage="" /> </th>
                <td> <FormattedMessage id= "faq.td3" defaultMessage="" /> </td>
                <td> <FormattedMessage id= "faq.td4" defaultMessage="" /> </td>
                <td> <FormattedMessage id= "faq.td4" defaultMessage="" /> </td>
              </tr>
            </tbody>
          </table>

          <h3> <FormattedMessage id= "faq.h38" defaultMessage="" /> </h3>
          <p>
            
          <FormattedMessage id= "faq.p26" defaultMessage="" />
          </p>
          <p>
          <FormattedMessage id= "faq.p27" defaultMessage="" />
            
          </p>

          <h3> <FormattedMessage id= "faq.h39" defaultMessage="" /> </h3>
          <p>
          <FormattedMessage id= "faq.p28" defaultMessage="" />
          </p>

          <h3>
          <FormattedMessage id= "faq.h40" defaultMessage="" />
          </h3>
          <p>
          <FormattedMessage id= "faq.p29" defaultMessage="" />
           
          </p>
          <h3> <FormattedMessage id= "faq.h42" defaultMessage="" /> </h3>
          <p>
          <FormattedMessage id= "faq.h41" defaultMessage="" />
          </p>

          <h3>
            
          <FormattedMessage id= "faq.h43" defaultMessage="" />
          </h3>
          <p>
          <FormattedMessage id= "faq.p30" defaultMessage="" />
            
          </p>

          <h3> <FormattedMessage id= "faq.h44" defaultMessage="" /> </h3>
          <p>
          <FormattedMessage id= "faq.p31" defaultMessage="" />
           
          </p>

          <h3> <FormattedMessage id= "faq.h45" defaultMessage="" /></h3>
          <p>
           
          <FormattedMessage id= "faq.p32" defaultMessage="" />
            <a href="https://gimmearide.com/donar"> <FormattedMessage id= "faq.a" defaultMessage="" /> </a>
          </p>
          <h3><FormattedMessage id= "faq.h46" defaultMessage="" /> </h3>
          <p>
            
          <FormattedMessage id= "faq.p33" defaultMessage="" /> 
            <a href="https://gimmearide.com.ar/donar"><FormattedMessage id= "faq.a" defaultMessage="" />  </a>
          </p>
                  </div>
      </article>
    </div>
  );
}
