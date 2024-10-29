// Get all the clickable divs
const clickableDivs = document.querySelectorAll('.clickable');

// Function to remove 'active' class from all divs
function resetActive() {
    clickableDivs.forEach(div => div.classList.remove('active'));
}

// Add click event listener to each div
clickableDivs.forEach(div => {
    div.addEventListener('click', () => {
        resetActive(); // Remove active class from all divs
        div.classList.add('active'); // Add active class to the clicked div
    });
});



const clickableSvgs = document.querySelectorAll('a');

function resetAwake() {
    clickableSvgs.forEach(a => a.tagName.remove('mogbe'));
}
clickableSvgs.forEach(div => {
    a.addEventListener('click', () => {
        resetAwake();
        a.tagName.add('mogbe');
    
    })

})  


// Select all sidebar links
// const sidebarLinks = document.querySelectorAll('.sidebar a');

// Function to remove 'active' class from all links
// function clearActiveLinks() {
//     sidebarLinks.forEach(link => link.classList.remove('active'));
// }

// Add event listener to each link
// sidebarLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         clearActiveLinks(); // Remove 'active' class from all links
//         link.classList.add('active'); // Add 'active' class to the clicked link
//     });
// });


// Select all clickable divs
// const clickableDivs = document.querySelectorAll('.clickable');

// // Function to reset the active class for all divs
// function resetActive() {
//     clickableDivs.forEach(div => div.classList.remove('active'));
// }

// // Add click event listeners to all clickable divs
// clickableDivs.forEach(div => {
//     div.addEventListener('click', () => {
//         resetActive();  // Remove active class from all divs
//         div.classList.add('active');  // Add active class to the clicked div
//     });
// });
