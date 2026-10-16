
const CODE_ROUTES = {
  "TUAT01": "wuman01.html",
  "WOMEN02": "ban-02.html",
  "WOMEN03": "ban-03.html",
  "WOMEN04": "ban-04.html",
  "WOMEN05": "ban-05.html",
  "WOMEN06": "ban-06.html",
  "WOMEN07": "ban-07.html",
  "WOMEN08": "ban-08.html",
  "WOMEN09": "ban-09.html",
  "WOMEN10": "ban-10.html",
  "WOMEN11": "ban-11.html",
  "WOMEN12": "ban-12.html",
  "WOMEN13": "ban-13.html",
  "WOMEN14": "ban-14.html"
};

const form = document.querySelector("#codeForm");
const codeInput = document.querySelector("#secretCode");
const openButton = document.querySelector("#openButton");
const message = document.querySelector("#formMessage");
const envelopeScene = document.querySelector("#envelopeScene");
const transitionScreen = document.querySelector("#transitionScreen");
let isOpening = false;

function showMessage(text, type = "") {
  message.textContent = text;
  message.classList.remove("is-error", "is-success");
  if (type) message.classList.add(`is-${type}`);
}

function normalizeCode(value) {
  return value.trim().replace(/\s+/g, "").toUpperCase();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (isOpening) return;

  const code = normalizeCode(codeInput.value);
  if (!code) {
    codeInput.setAttribute("aria-invalid", "true");
    showMessage("Bạn chưa nhập mã bí mật rồi ♡", "error");
    codeInput.focus();
    return;
  }

  const destination = CODE_ROUTES[code];
  if (!destination) {
    codeInput.setAttribute("aria-invalid", "true");
    showMessage("Hmm… hình như mã chưa đúng. Thử lại nhé!", "error");
    codeInput.focus();
    return;
  }

  codeInput.removeAttribute("aria-invalid");
  isOpening = true;
  openButton.disabled = true;
  openButton.classList.add("is-loading");
  showMessage("Lá thư của bạn đang được mở…", "success");
  envelopeScene.classList.add("is-opening");

  window.setTimeout(() => {
    transitionScreen.classList.add("is-visible");
    transitionScreen.setAttribute("aria-hidden", "false");
    window.setTimeout(() => { window.location.href = destination; }, 350);
  }, 1250);
});

codeInput.addEventListener("input", () => {
  codeInput.removeAttribute("aria-invalid");
  if (message.classList.contains("is-error")) {
    showMessage("Mỗi lá thư đều có người nhận riêng.");
  }
});
