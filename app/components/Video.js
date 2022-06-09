const Video = (video) => {
  const { title, likes, views, urlMedia } = video;
  const div = document.createElement("div");
  div.innerHTML = `
  <div>
    <video controls>
      <source
        src="${urlMedia}"
      />
    </video>
    <h3>${title}</h3>
    </hr>
    <span>${likes} likes</span>
    <span>${views} views</span>
  </div>
  `;
  return div;
};
export default Video;
