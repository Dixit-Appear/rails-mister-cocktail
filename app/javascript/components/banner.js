import Typed from 'typed.js';

const typed = () => {
  new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 50,
    loop: true
  });
}

export { typed };
