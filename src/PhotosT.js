import Figure from 'react-bootstrap/Figure';
function PhotosT() {
  return (
    <><Figure>
    <Figure.Image
      width={500}
      height={300}
      alt="171x180"
      src="/bnzrt1.png"
    />
    <Figure.Caption>
      Benzert.
    </Figure.Caption>
  </Figure>
  <Figure>
    <Figure.Image
      width={500}
      height={700}
      alt="171x180"
      src="/gbs1.png"
    />
    <Figure.Caption>
      Gabes.
    </Figure.Caption>
  </Figure>
  <Figure>
    <Figure.Image
      width={600}
      height={500}
      alt="171x180"
      src="/toz2.png"
    />
    <Figure.Caption>
      Tozeur.
    </Figure.Caption>
  </Figure>
  <Figure>
    <Figure.Image
      width={500}
      height={300}
      alt="171x180"
      src="/houa5.png"
    />
    <Figure.Caption>
      Houaria Nabeul.
    </Figure.Caption>
  </Figure>
  </>
    
  );
}

export default PhotosT;
