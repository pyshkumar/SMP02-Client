import * as utils from "./utility.mjs";

const errorNotify = (message) => {
  Toastify({
    text: message,
    duration: 4000,
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
    duration: 4000,
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
  errorNotify(message);
};

const infoNotifying = (message) => {
  infoNotify(message);
};

const validateID = async (bodyData) => {
  return utils.postJson("checkJobId", bodyData);
};

export { errorNotifying, infoNotifying, validateID };
