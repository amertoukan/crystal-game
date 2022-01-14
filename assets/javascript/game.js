let random_number = Math.floor(Math.random() * 100)
let red = Math.floor(Math.random() * 10)
let blue = Math.floor(Math.random() * 10)
let yellow = Math.floor(Math.random() * 10)
let green = Math.floor(Math.random() * 10) 
let score = 0;
let wins = 0;
let losses = 0;


let rn = $(".random-number").html(random_number)
function checkScore () {
    if (score > random_number) {
        losses ++ 
        alert('You lost!')
        score = 0
        console.log(score)
        $(".score").html(score)
        $(".random-number").html(Math.floor(Math.random() * 100))
        $(".losses").html(losses)
    } else if (score === random_number){
        wins ++ 
        alert ("You won!")
        score = 0
        $(".score").html(score)
        $(".random-number").html(Math.floor(Math.random() * 100))
        $('.wins').html(wins)
    } else {
        $(".score").html(score)
    }
}
$("#red").on('click', () => {
    console.log(red)
    score += red
    checkScore()
})

$("#blue").on('click', () => {
    score += blue
    checkScore()
})

$("#yellow").on('click', () => {
    score += yellow
    checkScore()
  
})

$("#green").on('click', () => {
    score += green
    checkScore()

})


