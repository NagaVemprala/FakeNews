import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <Menu style={{ marginTop: '10px' }}>
      <Link route="/">
        <a className="item">Spot the fake news! </a>
      </Link>  

      <Menu.Menu position="right">
        <Link route="/">
          <a className="item">!Fake News!</a>
        </Link>  
        <Link route="/topics/newTopic">
          <a className="item">+</a>
        </Link>  
      </Menu.Menu>
    </Menu>
  );
};