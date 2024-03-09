async function script() {
  const japaneseTitle =
    document.getElementsByClassName("pretty")[1].textContent;
  const englishTitle = document.getElementsByClassName("pretty")[0].textContent;

  const url = `https://nhentai.net/search/?q=${japaneseTitle}`;
  const url_hitomi = `https://hitomi.la/search.html?${japaneseTitle}`;
  const url_google_ja = `https://www.google.com/search?q=${japaneseTitle}`;
  const url_google_en = `https://www.google.com/search?q=${englishTitle}`;

  const targetElement = document.querySelector("h2.title");

  if (targetElement) {
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");
    var button4 = document.createElement("button");

    button1.textContent = "nhentaiで見つける";
    button2.textContent = "Hitomiで見つける";
    button3.textContent = "🇯🇵googleで見つける";
    button4.textContent = "🇺🇸googleで見つける";

    button1.addEventListener("click", () => {
      window.open(url, "_blank");
    });

    button2.addEventListener("click", () => {
      window.open(url_hitomi, "_blank");
    });

    button3.addEventListener("click", () => {
      window.open(url_google_ja, "_blank");
    });

    button4.addEventListener("click", () => {
      window.open(url_google_en, "_blank");
    });

    targetElement.insertAdjacentElement("afterend", button1);
    targetElement.insertAdjacentElement("afterend", button2);
    targetElement.insertAdjacentElement("afterend", button3);
    targetElement.insertAdjacentElement("afterend", button4);
  }
}

window.addEventListener("load", script);
