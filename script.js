// document.addEventListener('DOMContentLoaded', function () {
//     const navToggle = document.getElementById('nav-toggle');
//     const navbar = document.getElementById('navbar');

//     navToggle.addEventListener('click', function () {
//         if (navbar.style.display === "flex") {
//             navbar.style.maxHeight = null;
//             setTimeout(() => {
//                 navbar.style.display = "none";
//             }, 300); 
//         } else {
//             navbar.style.display = "flex";
//             setTimeout(() => {
//                 navbar.style.maxHeight = navbar.scrollHeight + "px";
//             }, 0);
//         }
//     });
// });
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const navbar = document.getElementById('navbar');

    navToggle.addEventListener('click', function () {
        if (navbar.style.maxHeight) {
            navbar.style.maxHeight = null;
            setTimeout(() => {
                navbar.style.display = "none";
            }, 300); // Match the duration of the transition
        } else {
            navbar.style.display = "flex";
            setTimeout(() => {
                navbar.style.maxHeight = navbar.scrollHeight + "px";
            }, 0);
        }
    });
});
