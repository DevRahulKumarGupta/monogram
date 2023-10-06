"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_product_js"],{

/***/ "./assets/js/theme/custom/monogram.js":
/*!********************************************!*\
  !*** ./assets/js/theme/custom/monogram.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

if ($("#testing").data("monogram-image")) {
  var btn = document.querySelector("#monogram");
  var inputs = document.querySelectorAll(".form-field.querryThis");
  var inputsString = "";
  inputs.forEach(function (div) {
    inputsString += div.outerHTML;
  });
  inputsString = inputsString.replace(/style="display:none;"/g, "");
  var mode = false;
  btn.addEventListener("click", function () {
    mode = !mode;
    var modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_0__.defaultModal)();
    modal.open();
    var imgUrl = $("#testing").data("monogram-image");
    var element = "\n        <div class=\"container\" style=\"display:flex; justify-content: space-between; padding:0; align-items: center;\">\n        <div class=\"monogrammer-preview__image\" style=\"position: relative;\">\n            <img style=\"width: 100%; display:block; position:relative;\" src=\"" + imgUrl + "\">\n            <span class=\"monogrammer-preview__items-container\" style=\"color: #fff; font-size: 3rem; font-size: 3.8vw; line-height: 1; font-family: Martel, serif; display: inline-block; position: absolute; left: 0; top: 43%; width: 300px; word-wrap: break-word; right: 0; margin: auto; text-align: center;\">\n                <span class=\"monogrammer-preview__item\"></span>\n                <span class=\"monogrammer-preview__icons hide\"></span>\n            </span>\n        </div>\n        <div id=\"inputsModifiers\" style=\"margin:auto\">\n        " + inputsString + "\n            <button class=\"button--primary\" id=\"modelClose\" style=\"padding:10px; border-radius:5px;\">ADD THIS MONOGRAM</button>\n            <button class=\"button--primary-reset\" id=\"modelCloseAndReset\" style=\"padding:10px; border-radius:5px;\">RESET & CLOSE</button>\n\n        </div>\n    </div>\n    \n        ";
    $("#modal").find(".modal-content").append(element);
    setTimeout(function () {
      $(".loadingOverlay").hide();
    }, 1000);
    var inputElement = document.querySelector('#inputsModifiers input[type="text"]');
    inputElement.value = document.querySelector(".productView-options .form-field.querryThis input.form-input.form-input--small").value;
    document.querySelector("span.monogrammer-preview__item").innerText = document.querySelector(".productView-options .form-field.querryThis input.form-input.form-input--small").value;
    inputElement.addEventListener("keyup", function (event) {
      var value = event.target.value;
      document.querySelector("span.monogrammer-preview__item").innerText = value;
      document.querySelector(".productView-options .form-field.querryThis input.form-input.form-input--small").value = value;
    });

    // Select all radio buttons with type="radio" inside #inputsModifiers
    var radioButtons = document.querySelectorAll("#inputsModifiers label.form-option");
    var activeRadioButton = document.querySelector('.productView-details.product-options div.form-field.querryThis input.form-radio[type="radio"]:checked');
    var _loop = function _loop() {
      var radioButton = _step.value;
      radioButton.addEventListener("click", function () {
        radioButton.parentElement.querySelector('input[type="radio"]').checked = true;
        document.querySelector("span.monogrammer-preview__item").style.color = radioButton.querySelector(".form-option-variant").style["background-color"] ? radioButton.querySelector(".form-option-variant").style["background-color"] : "white";
        document.querySelector('#inputsModifiers .form-field.querryThis[data-product-attribute="swatch"] label.form-label.form-label--alternate.form-label--inlineSmall span').innerText = radioButton.querySelector("span").title;
      });
      if (radioButton.parentElement.querySelector("input").getAttribute("aria-label") == activeRadioButton.getAttribute("aria-label")) {
        radioButton.click();
      }
    };
    for (var _iterator = _createForOfIteratorHelperLoose(radioButtons), _step; !(_step = _iterator()).done;) {
      _loop();
    }
    document.querySelector("#modelClose").addEventListener("click", function () {
      document.querySelector("button.modal-close").click();
    });
    document.querySelector("#modelCloseAndReset").addEventListener("click", function () {
      radioButtons[0].click();
      document.querySelector('#inputsModifiers input[type="text"]').value = "";
      document.querySelector("span.monogrammer-preview__item").innerText = "";
      document.querySelector(".productView-options .form-field.querryThis input.form-input.form-input--small").value = "";
      document.querySelector("button.modal-close").click();
    });
  });
}

/***/ }),

/***/ "./assets/js/theme/product.js":
/*!************************************!*\
  !*** ./assets/js/theme/product.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _product_reviews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product/reviews */ "./assets/js/theme/product/reviews.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _product_video_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/video-gallery */ "./assets/js/theme/product/video-gallery.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _custom_monogram__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom/monogram */ "./assets/js/theme/custom/monogram.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
/*
 Import all product specific js
 */








var Product = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Product, _PageManager);
  function Product(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.url = window.location.href;
    _this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
    _this.$bulkPricingLink = $('[data-reveal-id="modal-bulk-pricing"]');
    _this.reviewModal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_6__["default"])('#modal-review-form')[0];
    return _this;
  }
  var _proto = Product.prototype;
  _proto.onReady = function onReady() {
    var _this2 = this;
    // Listen for foundation modal close events to sanitize URL after review.
    $(document).on('close.fndtn.reveal', function () {
      if (_this2.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
        window.history.replaceState(null, document.title, window.location.pathname);
      }
    });
    var validator;

    // Init collapsible
    (0,_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["default"])();
    this.productDetails = new _common_product_details__WEBPACK_IMPORTED_MODULE_3__["default"]($('.productView'), this.context, window.BCData.product_attributes);
    this.productDetails.setProductVariant();
    (0,_product_video_gallery__WEBPACK_IMPORTED_MODULE_4__["default"])();
    this.bulkPricingHandler();
    var $reviewForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.classifyForm)('.writeReview-form');
    if ($reviewForm.length === 0) return;
    var review = new _product_reviews__WEBPACK_IMPORTED_MODULE_1__["default"]({
      $reviewForm: $reviewForm
    });
    $('body').on('click', '[data-reveal-id="modal-review-form"]', function () {
      validator = review.registerValidation(_this2.context);
      _this2.ariaDescribeReviewInputs($reviewForm);
    });
    $reviewForm.on('submit', function () {
      if (validator) {
        validator.performCheck();
        return validator.areAll('valid');
      }
      return false;
    });
    this.productReviewHandler();
  };
  _proto.ariaDescribeReviewInputs = function ariaDescribeReviewInputs($form) {
    $form.find('[data-input]').each(function (_, input) {
      var $input = $(input);
      var msgSpanId = $input.attr('name') + "-msg";
      $input.siblings('span').attr('id', msgSpanId);
      $input.attr('aria-describedby', msgSpanId);
    });
  };
  _proto.productReviewHandler = function productReviewHandler() {
    if (this.url.indexOf('#write_review') !== -1) {
      this.$reviewLink.trigger('click');
    }
  };
  _proto.bulkPricingHandler = function bulkPricingHandler() {
    if (this.url.indexOf('#bulk_pricing') !== -1) {
      this.$bulkPricingLink.trigger('click');
    }
  };
  return Product;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/theme/product/video-gallery.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/product/video-gallery.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VideoGallery: () => (/* binding */ VideoGallery),
/* harmony export */   "default": () => (/* binding */ videoGallery)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
var VideoGallery = /*#__PURE__*/function () {
  function VideoGallery($element) {
    this.$player = $element.find('[data-video-player]');
    this.$videos = $element.find('[data-video-item]');
    this.currentVideo = {};
    this.bindEvents();
  }
  var _proto = VideoGallery.prototype;
  _proto.selectNewVideo = function selectNewVideo(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    this.currentVideo = {
      id: $target.data('videoId'),
      $selectedThumb: $target
    };
    this.setMainVideo();
    this.setActiveThumb();
  };
  _proto.setMainVideo = function setMainVideo() {
    this.$player.attr('src', "//www.youtube.com/embed/" + this.currentVideo.id);
  };
  _proto.setActiveThumb = function setActiveThumb() {
    this.$videos.removeClass('is-active');
    this.currentVideo.$selectedThumb.addClass('is-active');
  };
  _proto.bindEvents = function bindEvents() {
    this.$videos.on('click', this.selectNewVideo.bind(this));
  };
  return VideoGallery;
}();
function videoGallery() {
  var pluginKey = 'video-gallery';
  var $videoGallery = $("[data-" + pluginKey + "]");
  $videoGallery.each(function (index, element) {
    var $el = $(element);
    var isInitialized = $el.data(pluginKey) instanceof VideoGallery;
    if (isInitialized) {
      return;
    }
    $el.data(pluginKey, new VideoGallery($el));
  });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9wcm9kdWN0X2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUErQztBQUUvQyxJQUFJQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUNDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO0VBQ3hDLElBQU1DLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDO0VBQy9DLElBQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyx3QkFBd0IsQ0FBQztFQUNsRSxJQUFJQyxZQUFZLEdBQUcsRUFBRTtFQUNyQkYsTUFBTSxDQUFDRyxPQUFPLENBQUMsVUFBQ0MsR0FBRyxFQUFLO0lBQ3RCRixZQUFZLElBQUlFLEdBQUcsQ0FBQ0MsU0FBUztFQUMvQixDQUFDLENBQUM7RUFDRkgsWUFBWSxHQUFHQSxZQUFZLENBQUNJLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxFQUFFLENBQUM7RUFDakUsSUFBSUMsSUFBSSxHQUFHLEtBQUs7RUFDaEJWLEdBQUcsQ0FBQ1csZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVk7SUFDeENELElBQUksR0FBRyxDQUFDQSxJQUFJO0lBQ1osSUFBTUUsS0FBSyxHQUFHZiwyREFBWSxDQUFDLENBQUM7SUFDNUJlLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLENBQUM7SUFDWixJQUFJQyxNQUFNLEdBQUdoQixDQUFDLENBQUMsVUFBVSxDQUFDLENBQUNDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUNqRCxJQUFNZ0IsT0FBTyx1U0FHOERELE1BQU0sMGpCQU8zRVQsWUFBWSwyVUFPYjtJQUVMUCxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUNrQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDRixPQUFPLENBQUM7SUFDbERHLFVBQVUsQ0FBQyxZQUFNO01BQ2ZwQixDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ3FCLElBQUks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QUNYLE9BQU8sQ0FBQ1ksV0FBVyxDQUFDLFdBQVcsQ0FBQztJQUNyQyxJQUFJLENBQUNYLFlBQVksQ0FBQ1EsY0FBYyxDQUFDSSxRQUFRLENBQUMsV0FBVyxDQUFDO0VBQzFELENBQUM7RUFBQWpELE1BQUEsQ0FFRHNDLFVBQVUsR0FBVixTQUFBQSxXQUFBLEVBQWE7SUFDVCxJQUFJLENBQUNGLE9BQU8sQ0FBQ2hDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDbUMsY0FBYyxDQUFDVyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDNUQsQ0FBQztFQUFBLE9BQUFqQixZQUFBO0FBQUE7QUFHVSxTQUFTakQsWUFBWUEsQ0FBQSxFQUFHO0VBQ25DLElBQU1tRSxTQUFTLEdBQUcsZUFBZTtFQUNqQyxJQUFNQyxhQUFhLEdBQUdsSCxDQUFDLFlBQVVpSCxTQUFTLE1BQUcsQ0FBQztFQUU5Q0MsYUFBYSxDQUFDNUIsSUFBSSxDQUFDLFVBQUM2QixLQUFLLEVBQUVsRyxPQUFPLEVBQUs7SUFDbkMsSUFBTW1HLEdBQUcsR0FBR3BILENBQUMsQ0FBQ2lCLE9BQU8sQ0FBQztJQUN0QixJQUFNb0csYUFBYSxHQUFHRCxHQUFHLENBQUNuSCxJQUFJLENBQUNnSCxTQUFTLENBQUMsWUFBWWxCLFlBQVk7SUFFakUsSUFBSXNCLGFBQWEsRUFBRTtNQUNmO0lBQ0o7SUFFQUQsR0FBRyxDQUFDbkgsSUFBSSxDQUFDZ0gsU0FBUyxFQUFFLElBQUlsQixZQUFZLENBQUNxQixHQUFHLENBQUMsQ0FBQztFQUM5QyxDQUFDLENBQUM7QUFDTiIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2N1c3RvbS9tb25vZ3JhbS5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0LmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QvdmlkZW8tZ2FsbGVyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWZhdWx0TW9kYWwgfSBmcm9tIFwiLi4vZ2xvYmFsL21vZGFsXCI7XG5cbmlmICgkKFwiI3Rlc3RpbmdcIikuZGF0YShcIm1vbm9ncmFtLWltYWdlXCIpKSB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9ub2dyYW1cIik7XG4gIGNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9ybS1maWVsZC5xdWVycnlUaGlzXCIpO1xuICBsZXQgaW5wdXRzU3RyaW5nID0gXCJcIjtcbiAgaW5wdXRzLmZvckVhY2goKGRpdikgPT4ge1xuICAgIGlucHV0c1N0cmluZyArPSBkaXYub3V0ZXJIVE1MO1xuICB9KTtcbiAgaW5wdXRzU3RyaW5nID0gaW5wdXRzU3RyaW5nLnJlcGxhY2UoL3N0eWxlPVwiZGlzcGxheTpub25lO1wiL2csIFwiXCIpO1xuICBsZXQgbW9kZSA9IGZhbHNlO1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBtb2RlID0gIW1vZGU7XG4gICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcbiAgICBtb2RhbC5vcGVuKCk7XG4gICAgbGV0IGltZ1VybCA9ICQoXCIjdGVzdGluZ1wiKS5kYXRhKFwibW9ub2dyYW0taW1hZ2VcIik7XG4gICAgY29uc3QgZWxlbWVudCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIHN0eWxlPVwiZGlzcGxheTpmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IHBhZGRpbmc6MDsgYWxpZ24taXRlbXM6IGNlbnRlcjtcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vbm9ncmFtbWVyLXByZXZpZXdfX2ltYWdlXCIgc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmU7XCI+XG4gICAgICAgICAgICA8aW1nIHN0eWxlPVwid2lkdGg6IDEwMCU7IGRpc3BsYXk6YmxvY2s7IHBvc2l0aW9uOnJlbGF0aXZlO1wiIHNyYz1cIiR7aW1nVXJsfVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtb25vZ3JhbW1lci1wcmV2aWV3X19pdGVtcy1jb250YWluZXJcIiBzdHlsZT1cImNvbG9yOiAjZmZmOyBmb250LXNpemU6IDNyZW07IGZvbnQtc2l6ZTogMy44dnc7IGxpbmUtaGVpZ2h0OiAxOyBmb250LWZhbWlseTogTWFydGVsLCBzZXJpZjsgZGlzcGxheTogaW5saW5lLWJsb2NrOyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDA7IHRvcDogNDMlOyB3aWR0aDogMzAwcHg7IHdvcmQtd3JhcDogYnJlYWstd29yZDsgcmlnaHQ6IDA7IG1hcmdpbjogYXV0bzsgdGV4dC1hbGlnbjogY2VudGVyO1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibW9ub2dyYW1tZXItcHJldmlld19faXRlbVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1vbm9ncmFtbWVyLXByZXZpZXdfX2ljb25zIGhpZGVcIj48L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwiaW5wdXRzTW9kaWZpZXJzXCIgc3R5bGU9XCJtYXJnaW46YXV0b1wiPlxuICAgICAgICAke2lucHV0c1N0cmluZ31cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24tLXByaW1hcnlcIiBpZD1cIm1vZGVsQ2xvc2VcIiBzdHlsZT1cInBhZGRpbmc6MTBweDsgYm9yZGVyLXJhZGl1czo1cHg7XCI+QUREIFRISVMgTU9OT0dSQU08L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24tLXByaW1hcnktcmVzZXRcIiBpZD1cIm1vZGVsQ2xvc2VBbmRSZXNldFwiIHN0eWxlPVwicGFkZGluZzoxMHB4OyBib3JkZXItcmFkaXVzOjVweDtcIj5SRVNFVCAmIENMT1NFPC9idXR0b24+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgICAgIGA7XG5cbiAgICAkKFwiI21vZGFsXCIpLmZpbmQoXCIubW9kYWwtY29udGVudFwiKS5hcHBlbmQoZWxlbWVudCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAkKFwiLmxvYWRpbmdPdmVybGF5XCIpLmhpZGUoKTtcbiAgICB9LCAxMDAwKTtcblxuICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnI2lucHV0c01vZGlmaWVycyBpbnB1dFt0eXBlPVwidGV4dFwiXSdcbiAgICApO1xuICAgIGlucHV0RWxlbWVudC52YWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5wcm9kdWN0Vmlldy1vcHRpb25zIC5mb3JtLWZpZWxkLnF1ZXJyeVRoaXMgaW5wdXQuZm9ybS1pbnB1dC5mb3JtLWlucHV0LS1zbWFsbFwiXG4gICAgKS52YWx1ZTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3Bhbi5tb25vZ3JhbW1lci1wcmV2aWV3X19pdGVtXCIpLmlubmVyVGV4dCA9XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi5wcm9kdWN0Vmlldy1vcHRpb25zIC5mb3JtLWZpZWxkLnF1ZXJyeVRoaXMgaW5wdXQuZm9ybS1pbnB1dC5mb3JtLWlucHV0LS1zbWFsbFwiXG4gICAgICApLnZhbHVlO1xuICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuLm1vbm9ncmFtbWVyLXByZXZpZXdfX2l0ZW1cIikuaW5uZXJUZXh0ID1cbiAgICAgICAgdmFsdWU7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi5wcm9kdWN0Vmlldy1vcHRpb25zIC5mb3JtLWZpZWxkLnF1ZXJyeVRoaXMgaW5wdXQuZm9ybS1pbnB1dC5mb3JtLWlucHV0LS1zbWFsbFwiXG4gICAgICApLnZhbHVlID0gdmFsdWU7XG4gICAgfSk7XG5cbiAgICAvLyBTZWxlY3QgYWxsIHJhZGlvIGJ1dHRvbnMgd2l0aCB0eXBlPVwicmFkaW9cIiBpbnNpZGUgI2lucHV0c01vZGlmaWVyc1xuICAgIGNvbnN0IHJhZGlvQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcIiNpbnB1dHNNb2RpZmllcnMgbGFiZWwuZm9ybS1vcHRpb25cIlxuICAgICk7XG4gICAgY29uc3QgYWN0aXZlUmFkaW9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy5wcm9kdWN0Vmlldy1kZXRhaWxzLnByb2R1Y3Qtb3B0aW9ucyBkaXYuZm9ybS1maWVsZC5xdWVycnlUaGlzIGlucHV0LmZvcm0tcmFkaW9bdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQnXG4gICAgKTtcblxuICAgIGZvciAoY29uc3QgcmFkaW9CdXR0b24gb2YgcmFkaW9CdXR0b25zKSB7XG4gICAgICByYWRpb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICByYWRpb0J1dHRvbi5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgJ2lucHV0W3R5cGU9XCJyYWRpb1wiXSdcbiAgICAgICAgKS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNwYW4ubW9ub2dyYW1tZXItcHJldmlld19faXRlbVwiKS5zdHlsZS5jb2xvciA9XG4gICAgICAgICAgcmFkaW9CdXR0b24ucXVlcnlTZWxlY3RvcihcIi5mb3JtLW9wdGlvbi12YXJpYW50XCIpLnN0eWxlW1xuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCJcbiAgICAgICAgICBdXG4gICAgICAgICAgICA/IHJhZGlvQnV0dG9uLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1vcHRpb24tdmFyaWFudFwiKS5zdHlsZVtcbiAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICA6IFwid2hpdGVcIjtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICcjaW5wdXRzTW9kaWZpZXJzIC5mb3JtLWZpZWxkLnF1ZXJyeVRoaXNbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZT1cInN3YXRjaFwiXSBsYWJlbC5mb3JtLWxhYmVsLmZvcm0tbGFiZWwtLWFsdGVybmF0ZS5mb3JtLWxhYmVsLS1pbmxpbmVTbWFsbCBzcGFuJ1xuICAgICAgICApLmlubmVyVGV4dCA9IHJhZGlvQnV0dG9uLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLnRpdGxlO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgcmFkaW9CdXR0b24ucGFyZW50RWxlbWVudFxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIilcbiAgICAgICAgICAuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKSA9PVxuICAgICAgICBhY3RpdmVSYWRpb0J1dHRvbi5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpXG4gICAgICApIHtcbiAgICAgICAgcmFkaW9CdXR0b24uY2xpY2soKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGVsQ2xvc2VcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24ubW9kYWwtY2xvc2VcIikuY2xpY2soKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjbW9kZWxDbG9zZUFuZFJlc2V0XCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcmFkaW9CdXR0b25zWzBdLmNsaWNrKCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dHNNb2RpZmllcnMgaW5wdXRbdHlwZT1cInRleHRcIl0nKS52YWx1ZSA9XG4gICAgICAgICAgXCJcIjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNwYW4ubW9ub2dyYW1tZXItcHJldmlld19faXRlbVwiKS5pbm5lclRleHQgPSBcIlwiO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIFwiLnByb2R1Y3RWaWV3LW9wdGlvbnMgLmZvcm0tZmllbGQucXVlcnJ5VGhpcyBpbnB1dC5mb3JtLWlucHV0LmZvcm0taW5wdXQtLXNtYWxsXCJcbiAgICAgICAgKS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24ubW9kYWwtY2xvc2VcIikuY2xpY2soKTtcbiAgICAgIH0pO1xuICB9KTtcbn1cbiIsIi8qXG4gSW1wb3J0IGFsbCBwcm9kdWN0IHNwZWNpZmljIGpzXG4gKi9cbmltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgUmV2aWV3IGZyb20gJy4vcHJvZHVjdC9yZXZpZXdzJztcbmltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnkgZnJvbSAnLi9jb21tb24vY29sbGFwc2libGUnO1xuaW1wb3J0IFByb2R1Y3REZXRhaWxzIGZyb20gJy4vY29tbW9uL3Byb2R1Y3QtZGV0YWlscyc7XG5pbXBvcnQgdmlkZW9HYWxsZXJ5IGZyb20gJy4vcHJvZHVjdC92aWRlby1nYWxsZXJ5JztcbmltcG9ydCB7IGNsYXNzaWZ5Rm9ybSB9IGZyb20gJy4vY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IG1vZGFsRmFjdG9yeSBmcm9tICcuL2dsb2JhbC9tb2RhbCc7XG5pbXBvcnQgJy4vY3VzdG9tL21vbm9ncmFtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLnVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICB0aGlzLiRyZXZpZXdMaW5rID0gJCgnW2RhdGEtcmV2ZWFsLWlkPVwibW9kYWwtcmV2aWV3LWZvcm1cIl0nKTtcbiAgICAgICAgdGhpcy4kYnVsa1ByaWNpbmdMaW5rID0gJCgnW2RhdGEtcmV2ZWFsLWlkPVwibW9kYWwtYnVsay1wcmljaW5nXCJdJyk7XG4gICAgICAgIHRoaXMucmV2aWV3TW9kYWwgPSBtb2RhbEZhY3RvcnkoJyNtb2RhbC1yZXZpZXctZm9ybScpWzBdO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIC8vIExpc3RlbiBmb3IgZm91bmRhdGlvbiBtb2RhbCBjbG9zZSBldmVudHMgdG8gc2FuaXRpemUgVVJMIGFmdGVyIHJldmlldy5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2Nsb3NlLmZuZHRuLnJldmVhbCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnVybC5pbmRleE9mKCcjd3JpdGVfcmV2aWV3JykgIT09IC0xICYmIHR5cGVvZiB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgZG9jdW1lbnQudGl0bGUsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCB2YWxpZGF0b3I7XG5cbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZVxuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcblxuICAgICAgICB0aGlzLnByb2R1Y3REZXRhaWxzID0gbmV3IFByb2R1Y3REZXRhaWxzKCQoJy5wcm9kdWN0VmlldycpLCB0aGlzLmNvbnRleHQsIHdpbmRvdy5CQ0RhdGEucHJvZHVjdF9hdHRyaWJ1dGVzKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0RGV0YWlscy5zZXRQcm9kdWN0VmFyaWFudCgpO1xuXG4gICAgICAgIHZpZGVvR2FsbGVyeSgpO1xuXG4gICAgICAgIHRoaXMuYnVsa1ByaWNpbmdIYW5kbGVyKCk7XG5cbiAgICAgICAgY29uc3QgJHJldmlld0Zvcm0gPSBjbGFzc2lmeUZvcm0oJy53cml0ZVJldmlldy1mb3JtJyk7XG5cbiAgICAgICAgaWYgKCRyZXZpZXdGb3JtLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHJldmlldyA9IG5ldyBSZXZpZXcoeyAkcmV2aWV3Rm9ybSB9KTtcblxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLXJldmVhbC1pZD1cIm1vZGFsLXJldmlldy1mb3JtXCJdJywgKCkgPT4ge1xuICAgICAgICAgICAgdmFsaWRhdG9yID0gcmV2aWV3LnJlZ2lzdGVyVmFsaWRhdGlvbih0aGlzLmNvbnRleHQpO1xuICAgICAgICAgICAgdGhpcy5hcmlhRGVzY3JpYmVSZXZpZXdJbnB1dHMoJHJldmlld0Zvcm0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAkcmV2aWV3Rm9ybS5vbignc3VibWl0JywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbGlkYXRvcikge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnByb2R1Y3RSZXZpZXdIYW5kbGVyKCk7XG4gICAgfVxuXG4gICAgYXJpYURlc2NyaWJlUmV2aWV3SW5wdXRzKCRmb3JtKSB7XG4gICAgICAgICRmb3JtLmZpbmQoJ1tkYXRhLWlucHV0XScpLmVhY2goKF8sIGlucHV0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkaW5wdXQgPSAkKGlucHV0KTtcbiAgICAgICAgICAgIGNvbnN0IG1zZ1NwYW5JZCA9IGAkeyRpbnB1dC5hdHRyKCduYW1lJyl9LW1zZ2A7XG5cbiAgICAgICAgICAgICRpbnB1dC5zaWJsaW5ncygnc3BhbicpLmF0dHIoJ2lkJywgbXNnU3BhbklkKTtcbiAgICAgICAgICAgICRpbnB1dC5hdHRyKCdhcmlhLWRlc2NyaWJlZGJ5JywgbXNnU3BhbklkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvZHVjdFJldmlld0hhbmRsZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnVybC5pbmRleE9mKCcjd3JpdGVfcmV2aWV3JykgIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLiRyZXZpZXdMaW5rLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBidWxrUHJpY2luZ0hhbmRsZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnVybC5pbmRleE9mKCcjYnVsa19wcmljaW5nJykgIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLiRidWxrUHJpY2luZ0xpbmsudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBWaWRlb0dhbGxlcnkge1xuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuJHBsYXllciA9ICRlbGVtZW50LmZpbmQoJ1tkYXRhLXZpZGVvLXBsYXllcl0nKTtcbiAgICAgICAgdGhpcy4kdmlkZW9zID0gJGVsZW1lbnQuZmluZCgnW2RhdGEtdmlkZW8taXRlbV0nKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8gPSB7fTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgc2VsZWN0TmV3VmlkZW8oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlbyA9IHtcbiAgICAgICAgICAgIGlkOiAkdGFyZ2V0LmRhdGEoJ3ZpZGVvSWQnKSxcbiAgICAgICAgICAgICRzZWxlY3RlZFRodW1iOiAkdGFyZ2V0LFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2V0TWFpblZpZGVvKCk7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlVGh1bWIoKTtcbiAgICB9XG5cbiAgICBzZXRNYWluVmlkZW8oKSB7XG4gICAgICAgIHRoaXMuJHBsYXllci5hdHRyKCdzcmMnLCBgLy93d3cueW91dHViZS5jb20vZW1iZWQvJHt0aGlzLmN1cnJlbnRWaWRlby5pZH1gKTtcbiAgICB9XG5cbiAgICBzZXRBY3RpdmVUaHVtYigpIHtcbiAgICAgICAgdGhpcy4kdmlkZW9zLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8uJHNlbGVjdGVkVGh1bWIuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJHZpZGVvcy5vbignY2xpY2snLCB0aGlzLnNlbGVjdE5ld1ZpZGVvLmJpbmQodGhpcykpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmlkZW9HYWxsZXJ5KCkge1xuICAgIGNvbnN0IHBsdWdpbktleSA9ICd2aWRlby1nYWxsZXJ5JztcbiAgICBjb25zdCAkdmlkZW9HYWxsZXJ5ID0gJChgW2RhdGEtJHtwbHVnaW5LZXl9XWApO1xuXG4gICAgJHZpZGVvR2FsbGVyeS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCAkZWwgPSAkKGVsZW1lbnQpO1xuICAgICAgICBjb25zdCBpc0luaXRpYWxpemVkID0gJGVsLmRhdGEocGx1Z2luS2V5KSBpbnN0YW5jZW9mIFZpZGVvR2FsbGVyeTtcblxuICAgICAgICBpZiAoaXNJbml0aWFsaXplZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgJGVsLmRhdGEocGx1Z2luS2V5LCBuZXcgVmlkZW9HYWxsZXJ5KCRlbCkpO1xuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbImRlZmF1bHRNb2RhbCIsIiQiLCJkYXRhIiwiYnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5wdXRzIiwicXVlcnlTZWxlY3RvckFsbCIsImlucHV0c1N0cmluZyIsImZvckVhY2giLCJkaXYiLCJvdXRlckhUTUwiLCJyZXBsYWNlIiwibW9kZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb2RhbCIsIm9wZW4iLCJpbWdVcmwiLCJlbGVtZW50IiwiZmluZCIsImFwcGVuZCIsInNldFRpbWVvdXQiLCJoaWRlIiwiaW5wdXRFbGVtZW50IiwidmFsdWUiLCJpbm5lclRleHQiLCJldmVudCIsInRhcmdldCIsInJhZGlvQnV0dG9ucyIsImFjdGl2ZVJhZGlvQnV0dG9uIiwiX2xvb3AiLCJyYWRpb0J1dHRvbiIsIl9zdGVwIiwicGFyZW50RWxlbWVudCIsImNoZWNrZWQiLCJzdHlsZSIsImNvbG9yIiwidGl0bGUiLCJnZXRBdHRyaWJ1dGUiLCJjbGljayIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UiLCJkb25lIiwiUGFnZU1hbmFnZXIiLCJSZXZpZXciLCJjb2xsYXBzaWJsZUZhY3RvcnkiLCJQcm9kdWN0RGV0YWlscyIsInZpZGVvR2FsbGVyeSIsImNsYXNzaWZ5Rm9ybSIsIm1vZGFsRmFjdG9yeSIsIlByb2R1Y3QiLCJfUGFnZU1hbmFnZXIiLCJfaW5oZXJpdHNMb29zZSIsImNvbnRleHQiLCJfdGhpcyIsImNhbGwiLCJ1cmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCIkcmV2aWV3TGluayIsIiRidWxrUHJpY2luZ0xpbmsiLCJyZXZpZXdNb2RhbCIsIl9wcm90byIsInByb3RvdHlwZSIsIm9uUmVhZHkiLCJfdGhpczIiLCJvbiIsImluZGV4T2YiLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwicGF0aG5hbWUiLCJ2YWxpZGF0b3IiLCJwcm9kdWN0RGV0YWlscyIsIkJDRGF0YSIsInByb2R1Y3RfYXR0cmlidXRlcyIsInNldFByb2R1Y3RWYXJpYW50IiwiYnVsa1ByaWNpbmdIYW5kbGVyIiwiJHJldmlld0Zvcm0iLCJsZW5ndGgiLCJyZXZpZXciLCJyZWdpc3RlclZhbGlkYXRpb24iLCJhcmlhRGVzY3JpYmVSZXZpZXdJbnB1dHMiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJwcm9kdWN0UmV2aWV3SGFuZGxlciIsIiRmb3JtIiwiZWFjaCIsIl8iLCJpbnB1dCIsIiRpbnB1dCIsIm1zZ1NwYW5JZCIsImF0dHIiLCJzaWJsaW5ncyIsInRyaWdnZXIiLCJkZWZhdWx0IiwiVmlkZW9HYWxsZXJ5IiwiJGVsZW1lbnQiLCIkcGxheWVyIiwiJHZpZGVvcyIsImN1cnJlbnRWaWRlbyIsImJpbmRFdmVudHMiLCJzZWxlY3ROZXdWaWRlbyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIiR0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCIkc2VsZWN0ZWRUaHVtYiIsInNldE1haW5WaWRlbyIsInNldEFjdGl2ZVRodW1iIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImJpbmQiLCJwbHVnaW5LZXkiLCIkdmlkZW9HYWxsZXJ5IiwiaW5kZXgiLCIkZWwiLCJpc0luaXRpYWxpemVkIl0sInNvdXJjZVJvb3QiOiIifQ==