import React from "react";
import "../Sass/Styles/Recommendations.scss";
import {FormattedMessage} from 'react-intl';

export default function PoliticaPrivacidad() {
  return (
    <div className="TermsAndConditions">
      <article>
        <div></div>
        <div>
        <p ><a href="/terms-and-conditions">
        <FormattedMessage
							id="privacyPolicy.terms"
							defaultMessage="Terms and Conditions"
						/></a> | <FormattedMessage
            id="privacyPolicy.privacy"
            defaultMessage=" | Privacy Policy | "
          /> | <a href="/cookies-policy">
          <FormattedMessage
            id="privacyPolicy.cookies"
            defaultMessage="Cookies Policy"
          /></a></p>
          <p><strong><FormattedMessage
							id="privacyPolicy.effdate"
							defaultMessage="Effective date: "
						/>
            <FormattedMessage
							id="privacyPolicy.date"
							defaultMessage="17/12/2021"
						/></strong></p>
            <br/>
            <h2><FormattedMessage
							id="privacyPolicy.title1"
							defaultMessage="1. General"
						/></h2>
          <p><FormattedMessage
							id="privacyPolicy.p1"
							defaultMessage="Give SA (whose registered office is at 54678, Rivadavia avenue, Buenos Aires, 
                Argentina) ({name}), acting as data controller, is committed to protecting and respecting 
                your privacy. This notice ({privacyPolicy}) is designed to tell you about our practices 
                regarding the collection, use and disclosure of information that you may provide via our 
                platform  accessible from the website www.GimmeARide.com or our mobile applications 
                (the http://www.GimmeARide.com/{platform})."   
              values={{ 
                name: <b>{"GimmeARide"}</b>,
                privacyPolicy: <b>{"Privacy Policy"}</b>,
                platform: <b>{"Platform"}</b>,
              }}/></p>
              <p ><FormattedMessage
							id="privacyPolicy.p2"
							defaultMessage="This Privacy Policy (together with our <a>Terms and Conditions</a>, "
               values={{
              a: (...chunks) => <a href={"http://www.GiveMeaRide.com/terms-and-conditions"} target="_blank" rel="noopener noreferrer">{chunks}</a>
            }}
          /><FormattedMessage
          id="privacyPolicy.p3"
          defaultMessage="any other documents referred to in it and our <a>Cookie Policy</a>) sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us. Please read the following carefully to understand our views and practices regarding your personal data and how we will treat it."
           values={{
          a: (...chunks) => <a href={"http://www.GiveMeaRide.com/cookies-policy"} target="_blank" rel="noopener noreferrer">{chunks}</a>
        }}
      /></p>
      <h2>
      <FormattedMessage
							id="privacyPolicy.title3"
							defaultMessage="2. What information do we collect from you and for how long?"
						/></h2>
          <p> <FormattedMessage
							id="privacyPolicy.p4"
							defaultMessage="We may collect and process the following data about you:"
						/></p>
             <h3><FormattedMessage
							id="privacyPolicy.p5"
							defaultMessage="2.1. Information you give us"
						/></h3>
            <p><FormattedMessage
							id="privacyPolicy.p6"
							defaultMessage="You may give us information, including information that can identify you"
						/> <a href="/user/:id">
              <strong> <FormattedMessage
							id="privacyPolicy.pdata"
							defaultMessage="Personal Data"/></strong>
            </a>
          <FormattedMessage
							id="privacyPolicy.p7"
							defaultMessage=" when you use our Platform, by filling in forms on the Platforms (such as the sign-up form), when you enter into any of our competitions, promotions or surveys, when you correspond with us by phone, e-mail or otherwise, and when you report a problem related to the use of our Platform."
						/></p>
          <p > <strong><FormattedMessage
							id="privacyPolicy.p8"
							defaultMessage="The information you give us may include:"
						/></strong></p> 
            <p > <strong>2.1.1. </strong><FormattedMessage
							id="privacyPolicy.item1"
							defaultMessage="Mandatory information required to register for the service we provide on our Platform or to access other services provided by us, including your name, email address, date of birth and, when you create an account, a password. All these fields are mandatory. GimmeARide will not be able to provide you with the services offered on our Platforms if the required information is not provided or, if applicable, you will not be able to register for a user account on our Platform;"
						/></p>
             <p>
            <strong>2.1.2 </strong> 
            <FormattedMessage
							id="privacyPolicy.item2"
							defaultMessage="A photograph;"
						/>
          </p>
          <p>
            <strong>2.1.3 </strong> 
            <FormattedMessage
							id="privacyPolicy.item3"
							defaultMessage="A postal address;"
						/>
          </p><p>
            <strong>2.1.4 </strong> 
            <FormattedMessage
							id="privacyPolicy.item4"
							defaultMessage="Your phone number;"
						/>
          </p><p>
            <strong>2.1.5 </strong> 
            <FormattedMessage
							id="privacyPolicy.item5"
							defaultMessage="Details on your cars;"
						/>
          </p>
          <p>
            <strong>2.1.6 </strong> 
            <FormattedMessage
							id="privacyPolicy.item6"
						/>
          </p><p>
            <strong>2.1.7 </strong> 
            <FormattedMessage
							id="privacyPolicy.item7"
						/>
          </p><p>
            <strong>2.1.8 </strong> 
            <FormattedMessage
							id="privacyPolicy.item8"
						/>
          </p><p>
            <strong>2.1.9 </strong> 
            <FormattedMessage
							id="privacyPolicy.item9"
						/>
          </p><p>
            <strong>2.1.10 </strong> 
            <FormattedMessage
							id="privacyPolicy.item10"
						/>
          </p><p>
            <strong>2.1.11 </strong> 
            <FormattedMessage
							id="privacyPolicy.item11"
						/>
          </p><p>
            <strong>2.1.12 </strong> 
            <FormattedMessage
							id="privacyPolicy.item12"
						/>
          </p><p>
            <strong>2.1.13 </strong> 
            <FormattedMessage
							id="privacyPolicy.item13"
						/>
          </p><p>
            <strong>2.1.14 </strong> 
            <FormattedMessage
							id="privacyPolicy.item14"
						/>
          </p>
          <p>
            <strong>2.1.15 </strong> 
            <FormattedMessage
							id="privacyPolicy.item15"
						/>
          </p>
          <h3><FormattedMessage
							id="privacyPolicy.p9"
							defaultMessage="2.2. Information we collect automatically"
						/></h3>
            <p>
            <strong>2.2.1 </strong> 
            <FormattedMessage
							id="privacyPolicy.p10"
						/>
          </p>
          <p>
            <strong>2.2.2 </strong> 
            <FormattedMessage
							id="privacyPolicy.p11"
						/><a href= "/cookies-policy">
            <u>
              <span><FormattedMessage
							id="privacyPolicy.p12"
						/></span>
            </u>
          </a>
          ).
          </p><p>
            <strong>2.2.3 </strong> 
            <FormattedMessage
							id="privacyPolicy.p13"
						/>
          </p>
          <p>
            <strong>2.2.4 </strong> 
            <FormattedMessage
							id="privacyPolicy.p14"
						/>
          </p>
          <p>
            <strong>2.3. </strong> 
            <FormattedMessage
							id="privacyPolicy.p15"
						/>
          </p>
          <p>
            <strong>2.3.1 </strong> 
            <FormattedMessage
							id="privacyPolicy.p16"
						/>
          </p><p>
            <FormattedMessage
							id="privacyPolicy.p17"
						/>
          </p><p>
            <strong>2.3.2 </strong> 
            <FormattedMessage
							id="privacyPolicy.p18"
						/></p><p>
            <FormattedMessage
							id="privacyPolicy.p19"
						/>
          </p><p>
          <strong>2.3.3 </strong> 
            <FormattedMessage
							id="privacyPolicy.p20"
						/>
          </p><p>
          <strong>2.3.4 </strong> 
            <FormattedMessage
							id="privacyPolicy.p21"
						/>
          </p><p>
            <FormattedMessage
							id="privacyPolicy.p70"
              defaultMessage="If you have any questions about this Privacy Policy or if you have any requests relating to your Personal Data, you can contact us via email to our Data Protection Officer under <a>dataprotection@GiveMeaRide.com</a>"
              values={{
                a: (...chunks) => <a href={"mailto:grupo10.soyhenry@gmail.com"} target="_blank" rel="noopener noreferrer">{chunks}</a>
              }}/>
          </p><br/>
              <hr />
        </div>
      </article>
    </div>
  );
}