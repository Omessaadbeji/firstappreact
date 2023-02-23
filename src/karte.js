import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Karte() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/carte.png" />
      <Card.Body>
        <Card.Title>Tunisia</Card.Title>
        <Card.Text>
        La Tunisie est un pays d'Afrique du Nord qui a attiré des conquérants et des visiteurs grâce à sa situation stratégique et à sa côte méditerranéenne accessible.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Karte;