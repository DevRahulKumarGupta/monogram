import { defaultModal } from "../global/modal";

if ($("#testing").data("monogram-image")) {
  const btn = document.querySelector("#monogram");
  const inputs = document.querySelectorAll(".form-field.querryThis");
  let inputsString = "";
  inputs.forEach((div) => {
    inputsString += div.outerHTML;
  });
  inputsString = inputsString.replace(/style="display:none;"/g, "");
  let mode = false;
  btn.addEventListener("click", function () {
    mode = !mode;
    const modal = defaultModal();
    modal.open();
    let imgUrl = $("#testing").data("monogram-image");
    const element = `
        <div class="container" style="display:flex; justify-content: space-between; padding:0; align-items: center;">
        <div class="monogrammer-preview__image" style="position: relative;">
            <img style="width: 100%; display:block; position:relative;" src="${imgUrl}">
            <span class="monogrammer-preview__items-container" style="color: #fff; font-size: 3rem; font-size: 3.8vw; line-height: 1; font-family: Martel, serif; display: inline-block; position: absolute; left: 0; top: 43%; width: 300px; word-wrap: break-word; right: 0; margin: auto; text-align: center;">
                <span class="monogrammer-preview__item"></span>
                <span class="monogrammer-preview__icons hide"></span>
            </span>
        </div>
        <div id="inputsModifiers" style="margin:auto">
        ${inputsString}
            <button class="button--primary" id="modelClose" style="padding:10px; border-radius:5px;">ADD THIS MONOGRAM</button>
            <button class="button--primary-reset" id="modelCloseAndReset" style="padding:10px; border-radius:5px;">RESET & CLOSE</button>

        </div>
    </div>
    
        `;

    $("#modal").find(".modal-content").append(element);
    setTimeout(() => {
      $(".loadingOverlay").hide();
    }, 1000);

    const inputElement = document.querySelector(
      '#inputsModifiers input[type="text"]'
    );
    inputElement.value = document.querySelector(
      ".productView-options .form-field.querryThis input.form-input.form-input--small"
    ).value;
    document.querySelector("span.monogrammer-preview__item").innerText =
      document.querySelector(
        ".productView-options .form-field.querryThis input.form-input.form-input--small"
      ).value;
    inputElement.addEventListener("keyup", function (event) {
      const value = event.target.value;
      document.querySelector("span.monogrammer-preview__item").innerText =
        value;
      document.querySelector(
        ".productView-options .form-field.querryThis input.form-input.form-input--small"
      ).value = value;
    });

    // Select all radio buttons with type="radio" inside #inputsModifiers
    const radioButtons = document.querySelectorAll(
      "#inputsModifiers label.form-option"
    );
    const activeRadioButton = document.querySelector(
      '.productView-details.product-options div.form-field.querryThis input.form-radio[type="radio"]:checked'
    );

    for (const radioButton of radioButtons) {
      radioButton.addEventListener("click", () => {
        radioButton.parentElement.querySelector(
          'input[type="radio"]'
        ).checked = true;
        document.querySelector("span.monogrammer-preview__item").style.color =
          radioButton.querySelector(".form-option-variant").style[
            "background-color"
          ]
            ? radioButton.querySelector(".form-option-variant").style[
                "background-color"
              ]
            : "white";

        document.querySelector(
          '#inputsModifiers .form-field.querryThis[data-product-attribute="swatch"] label.form-label.form-label--alternate.form-label--inlineSmall span'
        ).innerText = radioButton.querySelector("span").title;
      });

      if (
        radioButton.parentElement
          .querySelector("input")
          .getAttribute("aria-label") ==
        activeRadioButton.getAttribute("aria-label")
      ) {
        radioButton.click();
      }
    }

    document.querySelector("#modelClose").addEventListener("click", () => {
      document.querySelector("button.modal-close").click();
    });
    document
      .querySelector("#modelCloseAndReset")
      .addEventListener("click", () => {
        radioButtons[0].click();
        document.querySelector('#inputsModifiers input[type="text"]').value =
          "";
        document.querySelector("span.monogrammer-preview__item").innerText = "";
        document.querySelector(
          ".productView-options .form-field.querryThis input.form-input.form-input--small"
        ).value = "";
        document.querySelector("button.modal-close").click();
      });
  });
}
