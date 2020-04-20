var links = ["https://media.giphy.com/media/h5cY0X4NcHP2JiFXNG/giphy.gif","https://media.giphy.com/media/SSinJFA7xCih5g9F1c/giphy.gif","https://media.giphy.com/media/kBHH2rfm1VHIYgodQx/giphy.gif","https://media.giphy.com/media/UpDKR8EYG5zFtYhWNz/giphy.gif","https://media.giphy.com/media/h8mwX2Tt1R2oIOhszC/giphy.gif","https://media.giphy.com/media/iGeW8L2Pvzzbtf6jII/giphy.gif"];
var gif = [];
var index = [];
for ( var i = 0 ; i < 2 ; i++ ){
    index[i] =  Math.floor ( Math.random () * 6) ;
    console.log(index[i]);
    var final = String(links [index[i]]) ;
    document.querySelectorAll("img")[i].setAttribute("src",final);
    gif[i] = document.querySelectorAll("img")[i].getAttribute("src");
    console.log(gif[i]);
}
if ( index[0] > index [1]){
    document.querySelector("h1").innerHTML = "<i class='fas fa-flag'></i> Player One Wins !"
}

else if ( index[1] > index [0]){
    document.querySelector("h1").innerHTML = "<i class='fas fa-flag'></i> Player Two Wins !"
}

else {
    document.querySelector("h1").innerHTML = "Its a draw.."
}
