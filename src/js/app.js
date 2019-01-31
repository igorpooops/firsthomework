export function getZodiac(month,day) {
    if (month === 1) {
        if (day <= 20) {
            return 'козерог';
        }
        return 'водолей';
    }if (month === 12) {
        if (day >= 22) {
            return 'козерог';
        }
        return 'стрелец';
    }if (month === 11) {
        if (day >= 23) {
            return 'стрелец';
        }
        return 'скропион';
    }if (month === 10) {
        if (day >= 24) {
            return 'скропион';
        }
        return 'весы';
    }if (month === 9) {
        if (day >= 24) {
            return 'весы';
        }
        return 'дева';
    }if (month === 8) {
        if (day >= 24) {
            return 'дева';
        }
        return 'лев';
    }if (month === 7) {
        if (day >= 23) {
            return 'лев';
        }
        return 'рак';
    }if (month === 6) {
        if (day >= 22) {
            return 'рак';
        }
        return 'близнецы';
    }if (month === 5) {
        if (day >= 21) {
            return 'близнецы';
        }
        return 'телец';
    }if (month === 4) {
        if (day >= 21) {
            return 'телец';
        }
        return 'овен';
    }if (month === 3) {
        if (day >= 21) {
            return 'овен';
        }
        return 'рыбы';
    }if (month === 2) {
        if (day >= 21) {
            return 'рыбы';
        }
        return 'водолей';
    }
}

export function delivery(drink,money) {
    let result = 0;
    let price = 0;
    switch (drink) {
        case 1:
            price =30;
            break;
        case 2:
            price =35;
            break;
        case 3:
            price =40;
            break;
        case 4:
            price =45;
            break;
    }
    return result = money-price;
}


export function howCanIgo(expense,volume) {
    let result = volume/expense;
    return Math.round(result);
}

export function calculateOboi(width,length,height,widthrulon,lengthrulon) {
    let result = 0;
    let x;
    let y;
    x = (2*(width+length)*widthrulon);
    y = Math.round(lengthrulon/height);
    result = x/y;
    return Math.ceil(result);
}

const result = calculateOboi(4,6,3,0.5,10);
console.log(result);