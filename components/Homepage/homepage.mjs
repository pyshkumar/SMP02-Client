import "../DataGrid/GridBase.mjs";
import "../Loader/Loader.mjs";

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("gridBase-page");
  const loader = document.getElementById("loader");

  grid.style.opacity = 0.3;
  loader.style.display = "block";

  setTimeout(() => {
    grid.style.opacity = 1;
    loader.style.display = "none";
  }, 1260);

  grid.addEventListener("logout", () => {
    grid.style.opacity = 0.3;
    loader.style.display = "block";
    console.log("from home logout");

    setTimeout(() => {
      grid.style.opacity = 1;
      loader.style.display = "none";
    }, 1260);
  });
});
