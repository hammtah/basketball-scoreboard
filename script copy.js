/////randomizing the background color
let colors = ["#1B244A", "#0C4A6E", "#78350F", "#7DD3FC", "#047857", "#7C3AED", "#A7F3D0", "#FBBF24", "#FDE68A"];
let random_back = Math.floor(Math.random() * colors.length);
let random_butt = Math.floor(Math.random() * colors.length);
let container = document.querySelector('.container');
container.style.backgroundColor = colors[random_back];

///this lines below are just to randomize the buttons color
// let buttons = document.querySelectorAll(".button");
// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].style.backgroundColor = colors[random_butt];
// }

///defining the home & guest module that contain alll information relative to them
///ps: the score refere to the score < score_to_win and the points refer to the score after each lap

let home = {
    score: document.getElementById("home-score"),
    leader: document.querySelector(".leader-home"),
    point: 00,
    score_counter: 00,
    score_function: function(i) {
        home.score_counter += i;
        renderscore();
    }
}
let guest = {
    score: document.getElementById("guest-score"),
    leader: document.querySelector(".leader-guest"),
    point: 00,
    score_counter: 00,
    score_function: function(i) {
        guest.score_counter += i;
        renderscore();
    }
}

///scaning the score and laps
let score_to_win = window.prompt("Set the score to winn : ");
let laps = window.prompt("Set the number of laps: ");

///initializing scores function  
function set_to_zero() {
    home.score_counter = 00;
    guest.score_counter = 00;
    home.score.innerHTML = "00";
    guest.score.innerHTML = "00";
    ///seting the points
    home.leader.textContent = home.point + "/" + laps;
    guest.leader.textContent = guest.point + "/" + laps;
    /// compare the home_point  and  guest_point with laps number to know if we completed a lap or not
    if (home.point >= laps || guest.point >= laps) show_emoji();
}


/////rendering scores 

function renderscore() {
    ///to make the number composed with 2 digit
    if (home.score_counter < score_to_win) home.score.innerHTML = "0" + home.score_counter;
    if (guest.score_counter < score_to_win) guest.score.innerHTML = "0" + guest.score_counter;
    ///the same thing (rendering the score)
    if (home.score_counter >= score_to_win) home.score.innerHTML = home.score_counter;
    if (guest.score_counter >= score_to_win) guest.score.innerHTML = guest.score_counter;
    ////check if there is any winner (if the user achieved the score_to_win)
    if (home.score_counter >= score_to_win || guest.score_counter >= score_to_win) {
        winner();
        set_to_zero();
    }
}

/////it increase the point after each lap

function winner() {
    if (home.score_counter > guest.score_counter) {
        home.point++;
    }
    if (home.score_counter < guest.score_counter) {
        guest.point++;
    }

}

/////after the laps finished the emoji shows to congratulate the winner 

function show_emoji() {
    if (home.point > guest.point) {
        home.leader.textContent = "(⚆👅⚆)";
        guest.leader.textContent = "(◒╭╮◒)";
    }
    if (home.point < guest.point) {
        guest.leader.textContent = "(⚆👅⚆)";
        home.leader.textContent = "(◒╭╮◒)";
    }
}