import { Container } from "react-bootstrap";

export default function Separator(props){
    return (
        <Container className="mb-3 my-box-shadow separator bg-section-color d-flex align-items-center justify-content-center">
        <h2> {props.text} </h2>
      </Container>
    );
}