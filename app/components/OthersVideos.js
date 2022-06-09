const OthersVideos = (video) => {
  const div = document.createElement("div");
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
export default OthersVideos;
