/*
     ECMAScript 6, desarrollado por Anexsoft
*/

// class User {
//     constructor (id, name, enabled) {
//         this.id = id;
//         this.name = name;
//         this.enabled = enabled;
//     }

//     goToRun() {
//         return 'He is running now ..';
//     }

//     isEnabled() {
//         return this.enabled ? 'Yes' : 'False';
//     }

//     static _getCredit() {
//         return 'Es clase usuario, usada para el módulo de usuarios.';
//     }
// }

// var user = new User(1, 'Eduardo', true);

class Combat {
    constructor(pj1, pj2) {
        this.pj1 = pj1;
        this.pj2 = pj2;
    }

    fight() {
        while(this.pj1.hp > 0 && this.pj2.hp > 0)  {
            // Si sale 1 ataca pj1 del caso contrario pj2
            var whoAttack = Math.floor(Math.random() * 2) + 1;

            if(whoAttack === 1) {
                this.pj1.attack();

                this.pj2.hp -= this.pj1.dmg;
                this.pj2.getHP();
            } else {
                this.pj2.attack();

                this.pj1.hp -= this.pj2.dmg;
                this.pj1.getHP();
            }
        }

        if(this.pj1.hp > 0) {
            console.log(`${this.pj1.name} winner`);
        } else {
            console.log(`${this.pj2.name} winner`);
        }
    }
}

class BaseCharacter {
    constructor (name, hp, dmg) {
        this.name = name;
        this.hp = hp;
        this.dmg = dmg;
    }

    attack() {
        console.log(`${this.name} is attacking with ${this.dmg} damage points;`);
    }

    getHP() {
        console.log(`${this.name} has ${this.hp} health points`);
    }
}

class Soldier extends BaseCharacter {
    constructor () {
        super('Soldier', 100, 25);
    }
}

class Orc extends BaseCharacter {
    constructor () {
        super('Orc', 200, 35);
    }
}

var combat = new Combat(
    new Soldier(),
    new Orc()
);

combat.fight();