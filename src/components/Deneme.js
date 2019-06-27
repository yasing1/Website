import React from 'react';
import { Media } from 'reactstrap';
import Logo from "./Adsiz.png" // Bi resim ekle

const Example = () => {
  return (
    <Media>
      <Media left>
        <img
            width={256}  //  Ayarla
            height={256} //  Ayarla
            src={Logo}
            alt="Placeholder"
        />
      </Media>
      <Media body>
        <Media heading>
          Media heading
        </Media>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </Media>
    </Media>
  );
};

export default Example;
