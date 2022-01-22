import firebase from "firebase/app";
import { useHistory } from "react-router-dom";
import Toggle from "../components/DarkTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const history = useHistory();
  function logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        history.push("/");
      })
      .catch((error) => {});
  }
  return (
    <>
      <section className="d-flex align-items-center justify-content-between mx-2 mx-md-4 my-3 ">
        <Toggle />

        <div className="d-flex">
          {/* <button
            className="h-25 d-flex align-items-center button customButton"
            onClick={() => {
              history.push("/home");
            }}
          >
            <FontAwesomeIcon color="#0c4ec9" size="1x" icon={faHome} />{" "}
            <span className="d-md-block d-none ms-2">HOME</span>
          </button> */}

          {/* <button
            className="h-25 d-flex align-items-center button customButton mx-4"
            onClick={() => {
              history.push("/live");
            }}
          >
            <FontAwesomeIcon color="#0c4ec9" size="1x" icon={faPodcast} />{" "}
            <span className="d-md-block d-none ms-2">LIVE NOW</span>
          </button> */}

          <button
            className="h-25 d-flex align-items-center button customButton"
            onClick={logout}
          >
            <FontAwesomeIcon color="#0c4ec9" size="1x" icon={faSignOutAlt} />{" "}
            <span className="d-md-block d-none ms-2">SIGN OUT</span>
          </button>
        </div>
      </section>
    </>
  );
}
