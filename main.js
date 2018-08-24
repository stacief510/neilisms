
const neilIsms = [
    "Am I Wrong?",
    "Is a hot dog a sandwhich?",
    "I don't care what Caleb says, you're a good guy.",
    "Bryan McGovern fan club, this is Neil",
    "Schreiber's the name, real estate is the game.",
    "How's my favorite real estate analyst in NY?",
    "Is everyone being nice to you today?",
    "Neil speaking, what's your favorite color?",
    "I'm just a nice little Jewish boy from Boca Raton.",
    "Can we go to Austin?",
    "How's my little Prince?",
    "You should come.",
    "Team work makes the dream work.",
    "Causing trouble?",
    "A lot of these guys look their best immediately after a haircut, but I look best about a week after a haircut. I'm not a fresh haircut kinda of guy.",
    "There he is.",
    "He's not allowed 50 feet of that place."
];

const backgroundColors = [
    '#0080ff',
    '#ffbf00',
    '#01df3a',
    '#ff0080',
    '#9966ff',
    '#ff0033'
];


const showNewNeilism = function() {
    setRandomBackground();
    var i = Math.floor(Math.random()*neilIsms.length);
    var newNeilIsm = neilIsms[i];
    $('.NSComment').text(newNeilIsm);
    // Set link path here
    console.log("you've been Neiled.");
}


const setRandomBackground = function() {
    var bgcolor = backgroundColors[Math.floor(Math.random()*backgroundColors.length)];
    $('body').css('background-color', bgcolor);
    $('li').css('background-color', bgcolor);
}


const refreshIsms = function() {
            sayings = []
            for(var i = 0; i < neilIsms.length; i++) {
                sayings.push(neilIsms[i]);
            }
            console.log('compliments list was refreshed successfully');
        }

      
$(document).ready(function() {
    console.log('ready!');
    setRandomBackground();
    refreshIsms();
});

$(".btn").click(function() {
    showNewNeilism();
    });