// select the painting class.
const painting = document.querySelector('.painting');

// track when the painting is clicked.
    // painting.addEventListener('click', function() {
    //     console.log('testing, testing, 123');
    // });

// reference the clicked pixel.
painting.addEventListener('click', function(e) { // element that was clicked will be the target of the click event, so we access e in our function.
//     console.log('testing, testing, 123');
// });

// referencing the target property of the e object.
    // console.log(e.target);
    // });

// change the backgroundColor of the clicked pixel.
    e.target.style.backgroundColor = 'blue'
});