let firstCard = getRandomCard()
let secondCard = 2
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

console.log(sum)
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function getRandomCard() {
    return Math.floor(math.random())
}


function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " | "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        console.log("Do you want to draw a new card?")
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        console.log("BlackJack!")    
        message = "BlackJack!"
        hasBlackJack = true
    } else if (sum > 21) {
        console.log("You lost!")
        message = "You lost!"
        isAlive = false
    }
    messageEl.textContent = message
} 

function newCard() {
    console.log("Drawing a new card")
    let card = 6
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
}

for (let i = 0; i < cards.length; i++) {
    
}

console.log(hasBlackJack)