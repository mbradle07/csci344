
const makeRed = () => {
    // your code here...
    console.log('Change background to red');
    document.querySelector('#section1').style.backgroundColor = 'red';
};

const makeBlue = () => {
    // your code here...
    console.log('Change background to blue');
    document.querySelector('#section2').style.backgroundColor = 'blue';
};

const makePink = () => {
    // your code here...
    console.log('Change background to pink');
    document.querySelector('#section3').style.backgroundColor = 'pink';
};

const makeOrange = () => {
    // your code here...
    console.log('Change background to orange');
    document.querySelector('#section4').style.backgroundColor = 'orange';
};

/*const makeRainbow = () => {
    // your code here...
    console.log('Change background to rainbow');
    document.querySelector('#section1').style.backgroundColor = 'red';
    document.querySelector('#section2').style.backgroundColor = 'blue';
    document.querySelector('#section3').style.backgroundColor = 'pink';
    document.querySelector('#section4').style.backgroundColor = 'orange';
};*/

const makeRainbow = () => {
    const colors = ['red', 'orange', 'green', 'blue'];
    const sections = document.querySelectorAll('.my-section')
    for(let i = 0; i < colors.length; i++) {
        //const num = i % colors.length;
        sections[i].style.backgroundColor = colors[i];
    }
}
