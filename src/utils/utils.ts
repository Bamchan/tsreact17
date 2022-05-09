export let  aaa = 123;
// export  function throttle(func: any, interval: number) {
//     let isThrottling = false;
//     return function () {
//         const context = this;
//         if (!isThrottling) {
//             func.apply(context, arguments);
//             isThrottling = true;
//             setTimeout(() => {
//                 isThrottling = false;
//             }, interval);
//         }
//     };
// }
// /**
//  * Creates a debounced function that delays invoking `func` until after `wait`
//  * milliseconds have elapsed since the last time the debounced function was
//  * invoked.
//  *
//  * @param {Function} func The function to debounce.
//  * @param {number} wait The number of milliseconds to delay.
//  */
// export function debounce(func: any, wait: number) {
//     let timeout: any;
//     return function () {
//         const context = this;
//         const args = arguments;
//         timeout && clearTimeout(timeout);
//         timeout = setTimeout(() => {
//             func.apply(context, args);
//         }, wait);
//     };
// }