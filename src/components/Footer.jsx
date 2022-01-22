import {
    faLinkedin,
    faYoutube,
    faGithub,
    faInstagram,
    faTwitter,
    faFacebook,
    faDiscord,
  } from "@fortawesome/free-brands-svg-icons";
  import logo from "../assets/images/logo-textface.svg";
  import SocialIcons from "./SocialIcons";
  import { Link } from "react-router-dom";
  
  export default function Footer() {
    const date = new Date();
    const currentYear = date.getFullYear();
    return (
      <>
        <section>
          <div className="px-5">
            <div className="bg-secondary" style={{ height: "1px" }}></div>
          </div>
          <div className="text-center text-muted d-flex flex-column flex-md-row  justify-content-between align-items-center my-3 mx-md-3  ml-md-4 ml-lg-0">
            <Link
              to={{ pathname: "https://www.pattarai.in/" }}
              target="_blank"
              className="text-center"
            >
              <img
                className="my-md-2"
                height="45px"
                src={logo}
                alt="Licet Pattarai"
              ></img>
            </Link>
            © {currentYear} · Pattarai · All rights reserved
            <div className="h4 my-sm-0 my-2 text-center">
              <SocialIcons
                img={faLinkedin}
                src={"https://www.linkedin.com/company/licetpattarai"}
              />
              <SocialIcons
                img={faYoutube}
                src={"https://www.youtube.com/channel/UC24MOAmQKzWK5-6DyUaa8Aw"}
              />
              <SocialIcons img={faGithub} src={"https://github.com/pattarai"} />
              <SocialIcons
                img={faInstagram}
                src={"https://www.instagram.com/licetpattarai"}
              />
              <SocialIcons
                img={faTwitter}
                src={"https://twitter.com/licetpattarai"}
              />
              <SocialIcons
                img={faFacebook}
                src={"https://www.facebook.com/licetpattarai"}
              />
              <SocialIcons
                img={faDiscord}
                src={"https://discord.gg/GuMceRXPSQ"}
              />
            </div>
          </div>
        </section>
      </>
    );
  }
  