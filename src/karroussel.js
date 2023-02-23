import Carousel from 'react-bootstrap/Carousel';

function Karroussel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src="/gbs1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>GABES</h3>
          <p>Plus grande ville du Sud tunisien après Sfax, Gabès possède la particularité d'être à la fois une oasis et un port maritime. Cette fonction portuaire date du développement industriel des années 1970. Auparavant, Gabès était un mouillage réputé difficile et dangereux3.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/houa5.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>NABEUL</h3>
          <p>Nabeul (arabe : نابل, Nābil, /nɛːbɪl/, Écouter) est une ville du nord-est de la Tunisie, située au sud de la péninsule du cap Bon, à une soixantaine de kilomètres au sud-est de Tunis.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/sidib7.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>SIDI BOUSAID</h3>
          <p>
          Sidi Bou Saïd (arabe : سيدي بو سعيد Écouter) est un village de Tunisie situé à une vingtaine de kilomètres au nord-est de Tunis. Il compte 5 911 habitants selon le recensement de 20142.

Perché sur une falaise dominant Carthage et le golfe de Tunis, il s'élève à 130 mètre du niveau de la mer et porte le nom d'un saint : Sidi Bou Saïd.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Karroussel;