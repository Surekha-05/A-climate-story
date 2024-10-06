
// script.js
// script.js
const verticalButtons = document.querySelectorAll('.vertical-button');

verticalButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.background = '#3e8e41';
    });

    button.addEventListener('mouseout', () => {
        button.style.background = '#4CAF50';
    });
});

function redirectToNewPage1() {
    window.location.href = 'https://www.example.com/page1';
}

function redirectToNewPage2() {
    window.location.href = 'https://www.example.com/page2';
}

function redirectToNewPage3() {
    window.location.href = 'https://www.example.com/page3';
}
