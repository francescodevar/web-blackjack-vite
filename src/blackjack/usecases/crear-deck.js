import _ from 'underscore';

/**
 * 
 * @param {Array<string>} tiposDeCarta Example: ['C', 'D', 'H', 'S']
 * @param {Array<string>} TiposEspeciales Example: ['A', 'J', 'Q', 'K']
 * @returns {Array} return new deck
 */

export const crearDeck = (tiposDeCarta, TiposEspeciales) => {

    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposDeCarta) {
        for (let esp of TiposEspeciales) {
            deck.push(esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}