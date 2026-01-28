"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let hero1 = [
    {
        id: 1,
        name: 'Arthas',
        class: 'Warrior',
        armor: 'Plate',
        weapon: 'Mace'
    },
    {
        id: 2,
        name: 'Jaina',
        class: 'Mage',
        armor: 'Cloth',
        weapon: 'Staff'
    },
    {
        id: 3,
        name: 'Sylvanas',
        class: 'Ranger',
        armor: 'Leather',
        weapon: 'Bow'
    },
    {
        id: 4,
        name: 'Valeera',
        class: 'Thief',
        armor: 'Leather',
        weapon: 'Dagger'
    }
];
function announceHero(h) {
    if (h.name === '') {
        throw new Error('Hero must have a name');
    }
    console.log(`${h.name} the ${h.class} wears ${h.armor} and wields a ${h.weapon}.`);
    return h;
}
function levelUpHero(h) {
    if (!h.level) {
        h.level = 1;
    }
    h.level += 1;
    console.log(`${h.name} the ${h.class} (lvl ${h.level}) wears ${h.armor} and wields a ${h.weapon}.`);
    return h;
}
hero1.forEach(announceHero);
// Level up each hero multiple times in a loop
for (let i = 0; i < 5; i++) {
    hero1.forEach(levelUpHero);
}
//# sourceMappingURL=app.js.map