import Card from "react-bootstrap/Card";
import { SocialIcon } from "react-social-icons";
import { RiExternalLinkLine } from "react-icons/ri";

export default function ProjectCard({ project }) {
  const styles = {
    socialIconSize: {
      height: 40,
      width: 40,
    },
    cardFooter: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  };
  return (
    <Card>
      <Card.Img variant="top" src={project.imgSrc} alt={project.altText} />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.languages}</Card.Text>
      </Card.Body>
      <Card.Body style={styles.cardFooter}>
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
          <RiExternalLinkLine size="2em" color="var(--accent-color)" />
        </a>
        <SocialIcon
          style={styles.socialIconSize}
          bgColor="black"
          fgColor="white"
          url={project.gitHubUrl}
        />
      </Card.Body>
    </Card>
  );
}
