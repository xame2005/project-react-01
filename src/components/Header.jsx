import React from 'react';
import '../styles/components/Header.css';
import Media from 'react-bootstrap/Media';
import Image from 'react-bootstrap/Image';

const Header = () => {
  return (
    <Media>
      <Image
        width={150}
        height={150}
        className="mr-3"
        src="/src/assets/images/profile.jpg"
        alt="Generic placeholder"
        roundedCircle
      />
      <Media.Body>
        <h5>Media Heading</h5>
        <p>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
          scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in
          vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
          vulputate fringilla. Donec lacinia congue felis in faucibus.
        </p>
      </Media.Body>
    </Media>
  );
};

export default Header;
