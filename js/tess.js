// let diff = 44510757;
let diff = 5000000;

let days = Math.floor(diff / 86400000);
let hours = Math.floor((diff % 86400000) / 3600000);
let minutes = Math.floor((diff % 3600000) / 60000);
let seconds = Math.floor((diff % 60000) / 1000);

console.log(days, hours, minutes, seconds);

//trbukti sm dgn tes.js dan tesss.js