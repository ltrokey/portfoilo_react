import { useEffect } from "react";
import ResumePDF from "../assets/resume/ltrokey_resume.pdf";

export default function DownloadResume() {
  useEffect(() => {
    const link = document.createElement("a");
    link.href = ResumePDF;
    link.download = "L. Trokey Resume.pdf";

    const handleDownload = (event) => {
      event.preventDefault();
      document.body.removeChild(link);
    };
    link.addEventListener("click", handleDownload);

    document.body.appendChild(link);

    return () => {
      link.removeEventListener("click", handleDownload);
    };
  }, []);

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
    },
    text: {
      fontSize: "16px",
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
    <div style={styles.container}>
      <p style={styles.text}>
        Click this link to download:{" "}
        <a style={styles.link} href={ResumePDF} download="L. Trokey Resume.pdf">
          Resume.pdf
        </a>
      </p>
    </div>
  );
}
