import "./AuthenticationPage.mjs";
import "./GridBase.mjs";

document.addEventListener("DOMContentLoaded", () => {
  const authPage = document.getElementById("auth-page");
  const gridPage = document.getElementById("grid-page");

  authPage.addEventListener("authenticated", () => {
    authPage.style.display = "none";
    gridPage.style.display = "block";
  });
});
