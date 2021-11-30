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
We SA ("Give me a ride", "we", "us" or "our") uses cookies and similar tracking technologies on our website and in our mobile applications (individually referred to as "platform" or collectively "platforms"). In this policy (the "Cookie Policy"), we provide you with more information related to these technologies and about the decisions you can make in this regard.

1. What is a “cookie” and what are “similar tracking technologies”?

A "cookie" is a small text file that is stored and / or read by your web browser on the hard drive of the device you are using (for example, a desktop computer, a laptop or a smartphone) extracted from the sites. website you visit. In addition to cookies, BlaBlaCar also uses similar technologies for tracking, including "pixels", "tracking scripts" or "software development kits" (known as SDKs). They are small transparent image files or lines of code contained in our website, emails and mobile applications, which record how you interact with them. All of these tracking technologies are referred to as "cookies" in this Cookie Policy.

2. Who places cookies on our platforms?

Cookies on our platforms are set by us (so-called "first-party cookies"), or by our partners (so-called "third-party cookies").

The list of our partners and the respective privacy policies of these third-party cookies are shown in the cookie settings, which are shown to you both in a banner, when you first visit our platforms, as well as in the footer of our website and in your member account settings.

3. What are the different types of cookies and how are they used on our platforms?

The following types of cookies used on our platforms are:

    Essential cookies:

These cookies allow you to easily navigate BlaBlaCar and use basic functions such as logging in or booking trips. They also allow you to avoid potential security risks. These cookies are essential for BlaBlaCar and cannot be deactivated.

    Performance cookies:

These cookies help us to know which of our pages are most (and least) popular, as well as which content is most useful to users. They help us to improve the performance of BlaBlaCar, since they allow us to verify, for example, that users find what they are looking for easily. These cookies can be ours or our analytics partners. If you do not accept these cookies, neither we nor our partners will know when you have accessed BlaBlaCar.

    Marketing and segmentation cookies:

These cookies tell us when you visit our platform, which pages you have viewed and the links you have clicked on. They are used to show you relevant ads based on your interests and help us measure the effectiveness of our advertising campaigns. These cookies can be ours or our advertising partners. If you do not accept them, the advertising that is displayed will be less adjusted to your needs.

4. How can you decide which cookies are used?

When you visit our platforms for the first time we show you a cookie banner. In this banner you can find more information about cookies and you can choose whether to accept performance cookies, as well as marketing and targeting cookies.

Keep in mind that your choice is linked to the device and also to the web browser you use. If you use multiple devices or web browsers, you can choose different settings.

You can also change your mind at any time and adjust your cookie settings at another time. Simply go to the cookie settings shown in the footer of our website or in your member account settings.

5. Updates to our Cookies Policy?

Every time we change the way we use cookies on our platforms, we will update this Cookie Policy and display the date of the last update. If you are a registered user on our platforms, we will contact you and notify you of these changes.
This Cookie Policy was last updated on April 1, 2021.

6. Who can you contact for additional questions?

If you have questions regarding our Cookie Policy, do not hesitate to contact us by email at dataprotecion@blablacar.com. 
        </div>
      </article>
    </div>
  );
}