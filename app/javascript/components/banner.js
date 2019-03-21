import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Change your life", "Create your perfect cocktail"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
