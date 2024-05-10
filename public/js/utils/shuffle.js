export function shuffle(array) {
    let current = array.length;

    // While there remain elements to shuffle...
    while (current != 0) {

        // Pick a remaining element...
        let random = Math.floor(Math.random() * current);
        current--;

        // And swap it with the current element.
        [array[current], array[random]] = [array[random], array[current]];
    }
}
