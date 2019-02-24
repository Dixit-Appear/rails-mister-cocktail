import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Create your Cocktail"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
