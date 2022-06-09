const Header = () => {
  const $header = document.createElement("header");
  $header.classList.add("header"); //clase para estilar en css
  $header.innerHTML = `
    <header>
      <img src="./app/assets/img/youtube.svg" alt="logo yourube" />
      <input type="search" placeholder="buscar video .." />
      <img src="./app/assets/img/gmail.svg" alt="logo yourube" />
    </header>
  `;
  return $header;
};
export default Header;
