import { apiVideo } from "../helpers/apiVideo";
import LandingPage from "./LandingPage";
import OthersVideos from "./OthersVideos";
import Video from "./Video";

const Router = async () => {
  const $main = document.getElementById("main");
  let { hash } = window.location;
  $main.innerHTML = ``;

  if (!hash || hash === "#/") {
    await apiVideo({
      url: "https://my-json-server.typicode.com/LuisAngel98/DB_VIDEOS/videos",
      cbSuccess: (video) => {
        $main.appendChild(LandingPage(video));
      }
    });
  } else {
    await apiVideo({
      url: "https://my-json-server.typicode.com/LuisAngel98/DB_VIDEOS/videos",
      cbSuccess: (video) => {
        const $div = document.createElement("div");
        $div.classList.add("videoRepro");
        let idLocal = localStorage.getItem("urlId");
        let newvideo = video.find((v) => v.id === Number(idLocal));
        let newothervideos = video.filter((v) => v.id !== idLocal);
        $div.appendChild(Video(newvideo));
        $div.appendChild(OthersVideos(newothervideos));
        console.log(newvideo);
        console.log(newothervideos);
        $main.appendChild($div);
      }
    });
  }
};
export default Router;
