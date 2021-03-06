import React from 'react';
import Radium from 'radium';

const Header = Radium(({ hamburgerAction }) => {
  const styles = { height: 64 };

  return (
    <header className="flex-none flex items-center bg-blue white h3"
      style={ styles }>
      <div className="pointer px2 self-stretch flex items-center"
        onClick={ hamburgerAction }>
        <svg className="icon" viewBox="0 0 20 20">
          <path fill="#fff" d="M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314
                    c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743
                    s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314
                    c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z" />
        </svg>
      </div>
      <h3 className="caps m0 trim">Off Canvas Nav</h3>
    </header>
  );
});

export default Header;
