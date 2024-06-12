import * as utils from "./utility.mjs";

const errorNotify = (message) => {
  Toastify({
    text: message,
    duration: 1500,
    newWindow: false,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right,#A00000 , #C62128)",
    },
  }).showToast();
};

const infoNotify = (message) => {
  Toastify({
    text: message,
    duration: 1700,
    newWindow: true,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #74D680, #378B29)",
    },
  }).showToast();
};

const errorNotifying = (message) => {
  errorNotify(`Error : ${message}`);
};

const infoNotifying = (message) => {
  infoNotify(message);
};

export { errorNotifying, infoNotifying };
