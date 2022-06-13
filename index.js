// 1. Select the painting class.
// 5. Use a variable to represent the selected color.
let selectedColor = 'blue';                         // use a variable instead of hard-coding the pixel's backgroundColor to blue.
const painting = document.querySelector('.painting');

// 2. Track when the painting is clicked.
// 3. Reference the clicked pixel.
painting.addEventListener('click', function(e) {    // accepting e in our event listener to change the color of our pixel, which is our target of the click event.
    // console.log('testing, testing, 123');
    console.log(e.target);                          // referencing the target property of the e object.


// 4. Change the backgroundColor of the clicked pixel.
// e.target references a DOM element, just like the ones we create or query.
    e.target.style.backgroundColor = selectedColor;
});

// 7. Implement the color pallete.

/* psuedocode:
1. user clicks on red square.
2. the color is changed to red. --> event listener with e target.
3. user clicks on painting.
4. red square appears.

1. user clicks on yellow square.
2. the color is changed to yellow. --> event listener with e target.
3. user clicks on painting.
4. yellow square appears.

1. user clicks on green square.
2. the color is changed to green. --> event listener with e target.
3. user clicks on painting.
4. green square appears.
*/