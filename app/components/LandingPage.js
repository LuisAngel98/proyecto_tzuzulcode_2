const LandingPage = (video) => {
  //delegar el click solo a la clase enlace
  document.addEventListener("click", (e) => {
    if (!e.target.matches(".enlace")) return false;
    localStorage.setItem("urlId", e.target.dataset.id);
  });

  const div = document.createElement("div");
  div.classList.add("Landing");
  div.innerHTML = video
    .map((obj) => {
      return `
      <divdata-id="${obj.id}">
        <a href="#/${obj.slug}" data-id="${obj.id}">
          <img class="enlace" src="${obj.miniature}" alt="xd" data-id="${obj.id}">
        </a>
      </div>
    `;
    })
    .join("");
  return div;
};
export default LandingPage;
