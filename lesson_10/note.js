let money = 0;

function goWork(isWorkingDay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isWorkingDay) {
                // money += 1000
                money = money + 500;

                resolve(money);

                console.log('TEST');
            } else {
                console.log('I am relaxing');
                reject('Its not working day');
            }
        }, 800);
    })
}

function goToCroatia(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money < 800) {
                console.log('No money no honey');
                reject('Ну поїду до батьків в село (');
            } else {
                console.log('Hoooray. Swimming all day!');
                // money -= 600
                money = money - 600
                resolve(money);
            }
        }, 400);
    })
}

function buySouvenirs(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money < 300) {
                console.log('Ну просто пофоткаюсь норм');
                reject('Нe було грошей на магнітики')
            } else {
                console.log('Купив магнітика');
                money -= 250;
                resolve(money)
            }
        }, 1000);
    });
}

goWork(true)
    .then(payment => {
        console.log('I got', payment, 'after working day');

        return goToCroatia(payment);
    })
    .then(moneyAfterTrip => {
        console.log('After trip I got', moneyAfterTrip);

        return buySouvenirs(moneyAfterTrip);
    })
    .then(moneyAgterShoping => {
        console.log('I got', moneyAgterShoping, 'after arelax day');
    })
    .catch(reason => {
        console.warn('OOOOOPS!!!', reason)
    })
    .finally(() => {
        console.log('FINNALY');
    })

async function vacation(isWordkingDAy) {
    try {
        const payment = await goWork(isWordkingDAy);
        console.log(payment, 'payment')

        const moneyAfterTrip = await goToCroatia(payment);
        console.log(moneyAfterTrip, 'moneyAfterTrip');

        const moneyAgterShoping = await buySouvenirs(moneyAfterTrip);
        console.log(moneyAgterShoping, 'moneyAgterShoping')
    } catch (e) {
        console.warn('OOOOOPS!!!', e)
    }
}


vacation(false);
vacation(true);
