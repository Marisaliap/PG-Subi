import React from "react";
import "../Sass/Styles/CookiesPolicy.scss";
import {FormattedMessage} from 'react-intl';

export default function CookiesPolicy() {
  return (
    <div className="CookiesPolicy">
      <article>
        <div></div>
        <div>
          <p ><a href="/terms-and-conditions">
        <FormattedMessage
							id="privacyPolicy.terms"
							defaultMessage="Terms and Conditions"
						/></a> | <a href="/privacy-policy"><FormattedMessage
            id="privacyPolicy.privacy"
            defaultMessage=" | Privacy Policy | "
          /></a> | <FormattedMessage
            id="privacyPolicy.cookies"
            defaultMessage="Cookies Policy"
          /></p>
          <p>
            <span>
            <FormattedMessage
							id="cookiesPolicy.p1"
							defaultMessage=""
						/>
            </span>
          </p>

          <strong> 1. 
          <FormattedMessage
							id="cookiesPolicy.t1"
							defaultMessage=""
						/>
          </strong>
          <p> <FormattedMessage
							id="cookiesPolicy.p2"
							defaultMessage=""
						/>
          </p>
          <strong> 2. 
          <FormattedMessage
							id="cookiesPolicy.t2"
							defaultMessage=""
						/></strong>
          <p>
          <FormattedMessage
							id="cookiesPolicy.p3"
							defaultMessage=""
						/>
          </p>
          <p>
          <FormattedMessage
							id="cookiesPolicy.p4"
							defaultMessage=""
						/>
          </p>
          <strong> 3.
          <FormattedMessage
							id="cookiesPolicy.t3"
							defaultMessage=""
						/>
          </strong>
          <p> <FormattedMessage
							id="cookiesPolicy.p5"
							defaultMessage=""
						/></p>
          
          <h4><FormattedMessage
							id="cookiesPolicy.t4"
							defaultMessage=""
						/></h4>
          <p>
          <FormattedMessage
							id="cookiesPolicy.p6"
							defaultMessage=""
						/>
          </p>

          <h4> <FormattedMessage
							id="cookiesPolicy.t5"
							defaultMessage=""
						/></h4>
          <p><FormattedMessage
							id="cookiesPolicy.p7"
							defaultMessage=""
						/>
          </p>
          <h4><FormattedMessage
							id="cookiesPolicy.t6"
							defaultMessage=""
						/></h4>
          <p>
          <FormattedMessage
							id="cookiesPolicy.p8"
							defaultMessage=""
						/>
          </p>
          <strong> 4.<FormattedMessage
							id="cookiesPolicy.t7"
							defaultMessage=""
						/> </strong>
          <p><FormattedMessage
							id="cookiesPolicy.p9"
							defaultMessage=""
						/>
          </p>
          <strong>5. <FormattedMessage
							id="cookiesPolicy.t8"
							defaultMessage=""
						/></strong>
          <p><FormattedMessage
							id="cookiesPolicy.p10"
							defaultMessage=""
						/>
          </p>
          <strong> 6.<FormattedMessage
							id="cookiesPolicy.t9"
							defaultMessage=""
						/></strong>
          <p><FormattedMessage
							id="cookiesPolicy.p11"
							defaultMessage=""
						/>
            <a
              href="mailto:grupo10.soyhenry@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              grupo10.soyhenry@gmail.com
            </a>
          </p>
        </div>
      </article>
    </div>
  );
}
