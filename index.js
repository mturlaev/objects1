const soldier = {
    name: "maga",
    health: 10,
    weapon: {
        weeaponName: "ak-47",
        numberOfRounds: 30,
    },
    supplies: 3,
    shoot: function () {
        if (this.weapon.numberOfRounds !== 0){
            this.weapon.numberOfRounds -= 1;
            console.log('ба-бах');
        } else if (this.weapon.numberOfRounds === 0){
            console.log('обойма пуста. Перезаредитесь') 
        }
    },
    recharge: function () {
        if (this.weapon.numberOfRounds === 0) {
            this.weapon.numberOfRounds += 30;
        } else if (this.weapon.numberOfRounds === 30) {
                this.supplies--;
                console.log('Перезарядка...')
            } else if (this.supplies === 0) {
                console.log('Ни осталось припасов')
            } return
        },
    hurt: function () {
        if (this.health === 0){
            console.log('Ты проиграл')
        } else if (this.health--) {
            console.log('Ты ранен')
        }
    },
}
// проверено успешно

