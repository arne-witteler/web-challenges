/*

Change the appearance of the box according to the values of the sliders (color, border radius, rotation)

– [x] Add an event listener for each input element.
– [x] When the slider control of inputColor is moved, change the background color of the box. Hint: You need to work with the hsl() functional notation for colors.
– [x] When the slider control of inputRadius is moved, change the border radius of the box. If the control reaches the right end, make the box look like a circle.
– [x] When the slider control of inputRotation is moved, rotate the box. Hint: You may need to work with the CSS property "transform" and a value that contains "rotate" and "deg".

Hint: You can work with the property "style", just like you worked with the property "classList".

For further information check MDN:
- about inputs of type="range": https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range
- about hsl(): https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl
- about CSS declarations with "style": https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style

*/

const boxElement = document.querySelector('[data-js="box"]');
const colorSlider = document.querySelector('[data-js="input-color"]');
const borderRadiusSlider = document.querySelector('[data-js="input-radius"]');
const rotationSlider = document.querySelector('[data-js="input-rotation"]');

colorSlider.addEventListener("input", () => {
  boxElement.style.backgroundColor = `hsl(${colorSlider.value}, 100%, 50%)`;
});

borderRadiusSlider.addEventListener("input", () => {
  boxElement.style.borderRadius = borderRadiusSlider.value + "px";
});

rotationSlider.addEventListener("input", () => {
  boxElement.style.transform = `rotate(${rotationSlider.value}deg)`;
});
