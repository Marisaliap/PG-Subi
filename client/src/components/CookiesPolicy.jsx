import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../Sass/Styles/CookiesPolicy.scss";


export default function CookiesPolicy() {
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    history.push("/home");
  }
  return (
    <div className="CookiesPolicy">
      <article>
      <div></div>
        <div>
        <p ><a href="/terms-and-conditions">Condiciones Generales de Uso</a> | <a href="/privacy-policy">Política de Privacidad</a> | Política de cookies</p>
          <p>
          <span>
            Give SA ("Give me a ride", "we", "us" or "our") uses cookies and
            similar tracking technologies on our website and in our mobile
            applications (individually referred to as "platform" or collectively
            "platforms"). In this policy (the "Cookie Policy"), we provide you
            with more information related to these technologies and about the
            decisions you can make in this regard.
            </span>
          </p>

          <strong>
            1. What is a “cookie” and what are “similar tracking technologies”?
            </strong>

          <p>
            A "cookie" is a small text file that is stored and / or read by your
            web browser on the hard drive of the device you are using (for
            example, a desktop computer, a laptop or a smartphone) extracted
            from the sites you visit. In addition to cookies, Give me a ride
            also uses similar technologies for tracking, including "pixels",
            "tracking scripts" or "software development kits" (known as SDKs).
            They are small transparent image files or lines of code contained in
            our website, emails and mobile applications, which record how you
            interact with them. All of these tracking technologies are referred
            to as "cookies" in this Cookie Policy.
          </p>

          <strong>2. Who places cookies on our platforms?</strong>

          <p>
            Cookies on our platforms are set by us (so-called "first-party
            cookies"), or by our partners (so-called "third-party cookies").
          </p>

          <p>
            The list of our partners and the respective privacy policies of
            these third-party cookies are shown in the cookie settings, which
            are shown to you in the footer of our website.
          </p>

          <strong>
            3. What are the different types of cookies and how are they used on
            our platforms?
            </strong>

          <p>The following types of cookies used on our platforms are:</p>

          <p>Essential cookies:</p>

          <p>
            These cookies allow you to easily navigate Give me a ride and use
            basic functions such as logging in or booking trips. They also allow
            you to avoid potential security risks. These cookies are essential
            for Give me a ride and cannot be deactivated.
          </p>

          <p>Performance cookies:</p>

          <p>
            These cookies help us to know which of our pages are most (and
            least) popular, as well as which content is most useful to users.
            They help us to improve the performance of Give me a ride, since
            they allow us to verify, for example, that users find what they are
            looking for easily. These cookies can be ours or our analytics
            partners. If you do not accept these cookies, neither we nor our
            partners will know when you have accessed Give me a ride.
          </p>

          <p>Marketing and segmentation cookies:</p>

          <p>
            These cookies tell us when you visit our platform, which pages you
            have viewed and the links you have clicked on. They are used to show
            you relevant ads based on your interests and help us measure the
            effectiveness of our advertising campaigns. These cookies can be
            ours or our advertising partners. If you do not accept them, the
            advertising that is displayed will be less adjusted to your needs.
          </p>

          <strong>4. How can you decide which cookies are used?</strong>

          <p>
            When you log to our platforms for the first time we show you a
            cookie banner. In this banner you can find more information about
            cookies and you can choose whether to accept performance cookies, as
            well as marketing and targeting cookies. Keep in mind that your
            choice is linked to the device and also to the web browser you use.
            If you use multiple devices or web browsers, you can choose
            different settings. You can also change your mind at any time and
            adjust your cookie settings at another time. Simply go to the cookie
            settings shown in the footer of our website.
          </p>

          <strong>5. Updates to our Cookies Policy?</strong>

          <p>
            Every time we change the way we use cookies on our platforms, we
            will update this Cookie Policy and display the date of the last
            update. If you are a registered user on our platforms, we will
            contact you and notify you of these changes. This Cookie Policy was
            last updated on December 1, 2021.
          </p>

          <strong>6. Who can you contact for additional questions?</strong>

          <p>
            If you have questions regarding our Cookie Policy, do not hesitate
            to contact us by email at
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
