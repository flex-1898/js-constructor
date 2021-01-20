// p.scrollTop;
// p.scrollLeft;
//
// p.scrollWidth;
// p.scrollHeight;

// setTimeout(() => {
//     window.scrollTo({
//         top: 600,
//         behavior: 'smooth'
//     });
// }, 2000);


// setInterval(() => {
//     window.scrollBy({
//         top: 150,
//         behavior: 'smooth'
//     });
// }, 2000);

const strong = document.querySelector('strong');

// setTimeout(() => {
//     strong.scrollIntoView({
//         behavior: 'smooth',
//         block: "center"
//     });
// }, 2000);

// setTimeout(() => {
//     document.body.style.overflowY = 'hidden';
//
//     setTimeout(() => {
//         document.body.removeAttribute('style');
//     }, 2000);
// }, 2000);

const coords = strong.getBoundingClientRect();

console.log(document.elementFromPoint(0, 345));