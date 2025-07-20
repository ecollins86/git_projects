const generateRandomNumber = num => {
    return Math.floor(Math.random() * num);
}

const potentialValues = {
    plot: ['Over Coming the Monster', 'Rags to Riches', 'The Quest', 'Voyage and Return', 'Comedy', 'Tragedy', 'Rebirth'],
    characters: ['Humans', 'Woodland Creatures', 'Fantasy Races', 'Alies', 'Anthropomorphic Animals', 'Monsters'],
    genre: ['Battle Royale', 'Coming-of-age', 'Encyclopedic', 'Epic', 'Fabulation', 'Folklore', 'Historical', 'Metafiction', 'Metafiction', 'Nonsense', 'Paranoid', 'Pastoral', 'Philosophical', 'Pop Culture', 'Postmodern', 'Realist', 'Religious or Insperational', 'Satire', 'Social', 'Theatre-fiction', 'Thriller', 'Urban', 'Western']
};

let propIdea = '';
let characterIdea = '';
let genreIdea = '';

for (prop in potentialValues){
    let indx = generateRandomNumber(potentialValues[prop].length);

    switch (prop){
        case 'plot':
            plotIdea = potentialValues[prop][indx];
            break;
        case 'characters':
            characterIdea = potentialValues[prop][indx];
            break;
        case 'genre':
            genreIdea = potentialValues[prop][indx];
            break;
        default:
            console.log('Sorry, all out of ideas :(');
    }
}

console.log(`You should make a story with a ${plotIdea} styled plot, in a world filled with ${characterIdea}, within the ${genreIdea} genre!`);