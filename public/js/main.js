// EXO 1

class Lieu {
    constructor (nom, personnes) {
        this.nom = nom
        this.personnes = [personnes]
    }
}

let molengeek = new Lieu ('molengeek')
let snack = new Lieu ('snack')
let maison = new Lieu ('maison')

class Personne {
    constructor (nom, prenom, argent) {
        this.nom = nom
        this.prenom = prenom
        this.argent = argent
        seDeplacer = () => {

        }
    }
}

let maxence = new Personne ('lemaire', 'maxence', 20)