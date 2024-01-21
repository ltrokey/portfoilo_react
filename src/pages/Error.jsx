import image_1 from "../assets/images/beached_boats.jpg";
import { useRouteError } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    link: {
      fontFamily: "Great Vibes, cursive",
      fontSize: "24px",
      textDecoration: "none",
      color: "var(--secondaryDark-color)",
      letterSpacing: "4px",
    },
  };

  return (
    <div className="container" style={styles.container}>
      <h2>Oops!</h2>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <img src={image_1} alt="Beached boats" />
      </p>

      <p>
        Would you like to return to the{" "}
        <NavLink style={styles.link} to="/">
          home
        </NavLink>
        page?
      </p>
    </div>
  );
}
