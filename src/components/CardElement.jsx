import "tabler-react/dist/Tabler.css";
import { Card, Button } from "tabler-react";

function CardElement() {
    return (
      <div>
        <Card>
        <Card.Header>
          <Card.Title>Card Title</Card.Title>
        </Card.Header>
        <Card.Body>
          <Button color="primary">A Button</Button>
        </Card.Body>
      </Card>
      </div>
    )
  }
  
export default CardElement;