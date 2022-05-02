import React from 'react';

function year(){
  const date = new Date();
  const year = date.getFullYear();

  return year;
}

function Footer() {
  return(<footer>
    <p>Copyright © {year()}</p>
  </footer>)
}

export default Footer;
