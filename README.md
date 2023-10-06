# Stencil Theme with Monogram Functionality

## Description
This Stencil theme enhances your online store's product view page with a dynamic monogram feature. Customers can click the "Customize" button to open a popup window with two sections:

1. **Image Section:** This displays the product image, serving as a canvas for custom text and color swatches.

2. **Text Customization Section:** Here, customers can:
   - Enter text in an input box.
   - Select color swatches from checkboxes.
   - Apply the selected color to the entered text, instantly changing its appearance on the product image.

This monogram feature empowers customers to personalize products and provides a more engaging shopping experience.

## Benefits
- **Enhanced User Experience:** Real-time customization increases engagement and satisfaction.
- **Personalization:** Customers can add their touch, boosting the likelihood of a purchase.
- **Color Swatch Integration:** Easy color selection ensures a seamless blend with product design.
- **Instant Preview:** Product image updates in real-time, offering immediate feedback.

## Installation and Running

### Prerequisites
- Access to your online store's Stencil theme files.
- Basic knowledge of HTML, CSS, and JavaScript may help with customization.

### Installation Steps

###Clone the Repository:**
   ```bash
   git clone https://github.com/Rahulkumarbrj/monogram.git
```
###Move to the dir:**
   ```bash
   cd monogram
```
###Add stencil requirements:**
   ```bash
   Stencil init
      ? What is the URL of your store's home page? <store url>
      ? What is your Stencil OAuth Access Token? <access token>
      ? What port would you like to run the server on? (5000) <port>


```

### Modifications to the following files.
- assets/js/theme/custom/monogram.js
- templates/components/products/product-view.html
- templates/components/products/options/swatch.html
- templates/components/products/options/input-text.html
- assets/js/theme/product.js


### product configuration.
- Add an image for the product with the alt tag "monogram"
- Create two Modifier Options with one
   1. LABEL "Enter your initials or name to be monogrammed" AND TYPE "TEXT"
   2. LABEL "Choose your colour" AND TYPE "Swatch"
