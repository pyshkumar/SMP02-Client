import "./components/Login/AuthenticationPage.mjs";
import "./components/Loader/Loader.mjs";

document.addEventListener("DOMContentLoaded", () => {
  const authPage = document.getElementById("auth-page");
  const loader = document.getElementById("loader");

  authPage.addEventListener("authenticated", (event) => {
    authPage.style.opacity = 0.3;
    loader.style.display = "block";
  });

  setTimeout(() => {
    authPage.style.opacity = 1;
    loader.style.display = "none";
  }, 5000);
});
