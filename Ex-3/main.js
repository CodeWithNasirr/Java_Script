const jokes = [
    "Why couldn't the bicycle stand up by itself? It was two-tired.",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "What do you call fake spaghetti? An impasta!",
    "Why don't scientists trust atoms? Because they make up everything!",
    "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I'm on a whiskey diet. I've lost three days already!",
    "What's orange and sounds like a parrot? A carrot!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What did one ocean say to the other ocean? Nothing, they just waved.",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "How does a penguin build its house? Igloos it together!",
    "Why don't seagulls fly over the bay? Because then they'd be bay-gulls!",
    "I used to be a baker, but I couldn't make enough dough.",
    "What did the janitor say when he jumped out of the closet? Supplies!",
    "I'm reading a book about anti-gravity. It's impossible to put down!",
    "Why don't scientists trust atoms? Because they make up everything!",
    "Did you hear about the claustrophobic astronaut? He needed a little space.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised."
];

function displayRandomJoke() {
    const randomJokeIndex = Math.floor(Math.random() * jokes.length);
    const jokeDisplayElement = document.getElementById("jokeDisplay");
    jokeDisplayElement.innerHTML = jokes[randomJokeIndex];
}
 