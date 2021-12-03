import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../Sass/Styles/TermsAndConditions.scss";

export default function TermsAndConditions() {
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    history.push("/home");
  }

  return (
    <div className="TermsAndConditions">
      <Link to="/home">
        <button className="buttonBlue">Home</button>
      </Link>
      <article>
        <div></div>
        <div>
          <p>
          <p> Terms and Conditions | <a href="/privacy-policy">Privacy Policy </a>| <a href="/cookies-policy"> Cookies Policy </a></p>
            
          </p>
          <p>
            <strong>Last review: </strong>
            <span>November 28, 2021 </span>
          </p>
          <p>
            <span>
              This document describes the General Terms and Conditions
              applicable to the use of the services offered by Gimme a Ride®
              &nbsp;{" "}
              <a href="http://www.gimmearide.com/">www.GimmeARide.com/app</a>
              &nbsp; and the Gimme a Ride® application (hereinafter “Give me a
              ride®”). Any person (hereinafter "User") who wishes to use Give me
              a ride® can do so subject to the Terms and Conditions respective,
              along with all other policies and principles.
            </span>
          </p>
          <p>
            <span>
              Anyone who does not accept these terms and conditions general,
              which are mandatory and binding, You will not be able to use Give
              me a ride®
            </span>
          </p>
          <p>
            <span>
              The User must read, understand and accept all the conditions
              established in the General Terms and Conditions prior to its
              registration as a User of Gimme a Ride®. If you continue, you
              are expressly accepting and without waiving any clause the these
              Terms and Conditions.
            </span>
          </p>
          <p>
            <span>
              Gimme a Ride® may modify the Terms and Conditions at any time
              moment and will be binding from their publication on the web
              www.Gimme a Ride®.com
            </span>
          </p>
          <p>
            <strong>Users</strong>
          </p>
          <p>
            <span>
              The Services are only available to people who have legal capacity
              to contract according to Argentine legislation. No Gimme a Ride®
              can be used by people who do not have this capacity, minors or
              Gimme a Ride® Users who have been suspended temporarily,
              indefinitely or permanently. The user acknowledges being over 18
              years of age when registering for use Gimme a Ride®. Regarding
              Users who are transported with minors, must comply with the
              provisions of the SGT N ° 43/2016, of the CNRT N ° 1025/2016 and
              concordant. The User will be the exclusively responsible for
              enforcing these provisions and the absolute responsible for the
              breach of it, without prejudice to the actions that Give me a
              ride® can take regarding your temporary or permanent suspension.
              The use of the service is individual and proper to the user who
              uploaded their personal data in the Gimme a Ride® profile. It is
              only possible to create a single user per individual, any natural
              person that is detected with multiple user accounts will be
              suspended, leaving a single user associated with the natural
              person. The person using the service must be the person sharing
              the travel, either as a driver or a passenger, and cannot in any
              way represent another person who will carry out the trip as a
              driver or passenger. Each person must have a user to create a trip
              as a driver or get on a trip as a passenger and you must share
              that trip in the role seated in the trip loaded on the platform.
              Passing or posting personal data of another person to through the
              platform. The User will be fully responsible for all the
              consequences derived from the contractual breach of these Terms
              and Conditions, on the things in your charge and / or the persons
              in their care and for any damage and / or injury, be it through
              guilt or fraud.
            </span>
          </p>
          <p>
            <strong>The service</strong>
          </p>
          <p>
            <span>
              The meeting point service between drivers and passengers offered
              by Gimme a Ride® is free. Gimme a Ride® reserves the right to
              implement new free or paid services, which will be published on
              the web www.Gimme a Ride®.com.ar and which the User will have
              the possibility to accept or not. The service consists on a
              platform that allows you to find people to share a non-profit car
              ride for none of the people. The car must be contributed for the
              trip in a disinterested way by any of the people who will share
              the journey. Who drives can not ask remuneration or payment for
              that action. In this way it is expressly Forbidden to use the
              platform for profit of any nature and / or as a means of public
              passenger transport service or private.
            </span>
          </p>
          <p>
            <span>
              Acceptance of any new service, free or paid, constitutes an
              exclusive condition to remain a User Gimme a Ride® asset
            </span>
          </p>
          <p>
            <span>
              Gimme a Ride® reserves the right to disable or suspend users,
              without being obliged to communicate or state the reasons for your
              decision and without generating any right to compensation, redress
              or repair.
            </span>
          </p>
          <p>
            <span>
              Without prejudice to other measures, Gimme a Ride® may warn,
              suspend temporarily or permanently, disable a User and / or a
              publication, initiate the actions it deems pertinent and / or
              suspend the provision of its Services if: (1) it is broken any
              law, or any of the stipulations of the Terms and Conditions and
              other policies of Gimme a Ride®; (2) if you breach your
              commitments as a User; (3) if incurred, at the discretion of Give
              me a ride® that go against the legal system or that which exceeds
              the limits imposed by good faith, morals and good customs and / or
              malicious or fraudulent acts tending to harm both to the other
              Users and to Gimme a Ride®; (4) could not Verify the identity of
              the User or any information provided by the same is erroneous; (5)
              Gimme a Ride® understand that postings or other actions may be
              the cause of responsibility for the User who published them, for
              Gimme a Ride® correspondingly and according to the legislation
              on privacy, all data that Gimme a Ride® is obliged to provide to
              assist in the advancement of any investigation civil, criminal or
              of any kind.
            </span>
          </p>
          <p>
            <span>
              The reactivation of the account in case of suspension, will have a
              cost associated monetary that must be paid by the suspended user
              and / or sanctioned. This only in cases where it is possible after
              having the suspension time and related sanctions have been
              fulfilled. In case of that the suspension is gravity for Give me a
              ride®, you can suspend permanently and in that case, there will be
              no possibility of account reactivation.
            </span>
          </p>
          <p>
            <strong>Use of service</strong>
          </p>
          <p>
            <span>
              A journey in which users share a car is the result of a prior
              agreement between a driver and passengers, service users (both
              driver and passengers over age) act under their full
              responsibility. As such, Gimme a Ride® no is responsible for the
              actual fulfillment of the trip or the conditions proposed by users
              or drivers, or any consequence, foreseen or unforeseen, arising
              from the same. The service provided by Gimme a Ride® is limited
              to connecting to users (who can act as passengers or drivers
              indistinctly) through the application put to disposition of the
              same.
            </span>
          </p>
          <p>
            <span>
              Gimme a Ride® does not assume the realization, ownership, or
              responsibility of the provision of the services that it
              intermediates, nor against users of the same, nor in front of
              third parties.
            </span>
          </p>
          <p>
            <strong>Corresponding auto insurance </strong>
          </p>
          <p>
            <span>
              Prior to the User proposing a trip as a driver, You must first
              check that the validity of your auto insurance span the entire
              duration of the trip. The traffic law indicates how requirement to
              circulate with a car that carries the proof of insurance in force,
              among other things. An uninsured driver is fully responsible for
              the damages caused to its passengers in case of accident. Give me
              a ride® is not responsible for consequences, both for the driver
              and the passengers or any third party, who has a trip not insured
              by the driver; nor is it partially or totally responsible for any
              damage and / or physical, psychological, material, or any kind of
              people or things derived from those consequences, nor does it
              constitute a guarantor, guarantor or responsible solidarity with
              the main responsible who, due to their lack of skill, negligence,
              lack of observance of their duties, fault or fraud have generated
              such damages and / or losses. Passengers will have the absolute
              responsibility to control the condition of the car, driver and the
              car in which they will travel, without the possibility of claim
              any to Gimme a Ride® or its members.
            </span>
          </p>
          <p>
            <span>
              Users are informed that insurance companies may refuse to cover
              any damage incurred on a trip during which the driver would have
              asked the passengers for a share greater than that established by
              the division of expenses of the travel (for the purposes of
              interpreting these Terms and Conditions, and from now on, travel
              expenses are considered only fuel and toll / s). The driver
              requesting that other users of a trip contribute greater sums to
              the resulting from the division of travel expenses among all
              members of said trip, incurs a serious breach of these Terms and
              Conditions, under warning of being discharged definitively from
              the application at the sole discretion of Gimme a Ride®,
              notwithstanding the corresponding legal sanctions for illegal
              transportation of passengers and / or the lack of coverage of
              their contracted insurance.
            </span>
          </p>
          <p>
            <span>
              The Driver of a trip may request a collaboration to the travel
              expenses to other Users in prior coordination. The maximum
              collaboration being equal to travel expenses divided by the total
              number of people traveling. Likewise, Users can request that the
              division of travel expenses be carried out with the presentation
              of the tickets or invoices associated with it in the prior
              coordination of the trip. Such request cannot be denied or not
              answered by any other User, under penalty of incurring a fault to
              these Terms and Conditions and subsequent sanction that he may
              apply Gimme a Ride® according to the severity of the action or
              repetition of the same by the same User as a Gimme a Ride® user.
            </span>
          </p>
          <p>
            <span>
              It is prohibited and is considered a violation of these Terms and
              Conditions that the User who drives requests prior to the trip a
              advance travel expenses as a down payment, in that case Give me a
              ride® may sanction and suspend the user from the platform
              preventing you from using the Gimme a Ride® platform.
            </span>
          </p>
          <p>
            <span>
              Gimme a Ride® has no responsibility in the definition of
              expenses From the trip. It is the sole responsibility of the users
              participants of the trip, both passengers and driver, who in case
              if there is an economic participation, it is not greater than that
              established by the division of travel expenses to maintain the
              validity of the insurance associated with the vehicle with which
              the shared trip was made and not Failure to comply with current
              regulations on transport in the Argentinian republic.
            </span>
          </p>
          <p>
            <strong>Service interruptions and failures </strong>
          </p>
          <p>
            <span>
              Gimme a Ride® aims to offer the service uninterrupted. No
              However, it may happen that access to the website or the service
              is interrupt in the course of maintenance operations, hardware and
              software updates, emergency repairs of the web, or due to
              circumstances beyond the control of Gimme a Ride® like Internet
              failure or Facebook problems). Is by that Gimme a Ride® does not
              guarantee access and continued use or uninterrupted service. Users
              acknowledge and accept that Gimme a Ride® assumes no
              responsibility to him for any lack, suspension or interruption of
              the website or the service.
            </span>
          </p>
          <p>
            <span>
              ive me a ride® is not responsible for any damage, loss or loss to
              the User caused by failures in the system, in the server or on the
              internet. Gimme a Ride® will also not be responsible for any
              virus that could infect Users' equipment such as consequence of
              the access, use or examination of its application or as a result
              of any transfer of data, files, images, texts, or audio contained
              therein. Users may not award Gimme a Ride® any responsibility or
              demand payment for lost profits, by virtue of damages resulting
              from technical difficulties or failures in the systems or on the
              Internet.
            </span>
          </p>
          <p>
            <strong>System violations </strong>
          </p>
          <p>
            <span>
              Any action, use of device, is strictly prohibited. software, or
              other means tending to interfere with both the Gimme a Ride®
              activities and operations as in descriptions or databases
              associated with Gimme a Ride®. Any meddling attempt or activity
              violating or contrary to the laws on intellectual property rights
              and / or stipulated prohibitions in this contract they will make
              their person responsible for the actions criminal and civil laws
              for pertinent damages, and to the sanctions provided for by this
              agreement, as well as will make you responsible to compensate the
              damages caused.
            </span>
          </p>
          <p>
            <strong>Intellectual property</strong>
          </p>
          <p>
            <span>
              Gimme a Ride® is a non-profit project owned by the Rosario Civil
              Association Sustainable Technological Solutions (en hereinafter
              "STS Rosario") under License No. 2,850,394. All forbidden misuse
              and / or use for profit and / or reproduction and for any medium
              of your image, logo, programs, databases, application, networks,
              files that allow the User to make use of Gimme a Ride® ®,
              digital audiovisual content, without authorization due from STS
              Rosario who is the absolute owner of said assets and rights over
              them; they are protected by international copyright laws and
              treaties, trademarks, patents, models and industrial designs.
            </span>
          </p>
          <p>
            <strong>Arbitration Clause </strong>
          </p>
          <p>
            <span>
              Any question that arises between the parties for any reason
              related to these Terms and Conditions, including, between other
              issues, its validity, interpretation, scope, compliance,
              resolution or, likewise, the claims to which it gives place its
              non-compliance, will be definitively resolved by the Arbitration
              Court of the ... , in accordance with with the Regulations and
              Complementary Standards applicable to arbitration of law approved
              by the Institution, that the parties they claim to know.
            </span>
          </p>
          <p>
            <strong>Copyright © 2021 - The Henry Solutions.</strong>
          </p>
          <p>
            <strong>All rights reserved.</strong>
          </p>
        </div>
      </article>
    </div>
  );
}
