import CookieConsent, {
  Cookies,
  getCookieConsentValue,
} from "react-cookie-consent";
import Link from "next/link";
const Consent = () => {
  return (
    <CookieConsent
      debug={true}
      enableDeclineButton
      flipButtons
      onAccept={() => {
        console.log(getCookieConsentValue());
      }}
      onDecline={() => {
        console.log(getCookieConsentValue());
      }}
      // overlay={true}
      // location="top"
      // onAccept={(acceptedByScrolling) => {
      //   if (acceptedByScrolling) {
      //     // triggered if user scrolls past threshold
      //     alert("Accept was triggered by user scrolling");
      //   } else {
      //     alert("Accept was triggered by clicking the Accept button");
      //   }
      // }}
      // acceptOnScroll={true}
      style={{
        color: "#fff",
        background: "#212121",
        fontFamily: "IBM Plex Sans, sans-serif",
      }}
      buttonStyle={{
        color: "#fff",
        background: "var(--mainRed)",
        fontSize: "14px",
        padding: "8px",
        marginTop: "0",
        marginBottom: "0",
      }}
      declineButtonStyle={{
        background: "#e20505",
      }}
      buttonText="I Understand"
      expires={365}
    >
      This site uses cookies. By continuing to use this website, you agree to
      their use. See{" "}
      <Link href="/privacy" style={{ color: "#ffdce7" }}>
        privacy policy
      </Link>{" "}
      for more info.
    </CookieConsent>
  );
};

export default Consent;
