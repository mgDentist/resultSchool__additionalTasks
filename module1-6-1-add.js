const clientName = 'Игорь';
let clientSpentForAllTime = 110;
let clientSpentToday = 25;
clientSpentForAllTime += clientSpentToday;
let discount;

if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
    discount = 10;
    alert(`Вам предоставляется скидка в ${discount} %!`);
} else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
    discount = 20;
    alert(`Вам предоставляется скидка в ${discount} %!`);
} else if (clientSpentForAllTime >= 500) {
    discount = 30;
    alert(`Вам предоставляется скидка в ${discount} %!`);
} else {
    alert(`Нам жаль, но у вас еще нет скидки`);
}

let clientBillDiscount = clientSpentToday - (clientSpentToday * (discount / 100));

alert(`Спасибо, ${clientName}! К оплате без скидки: ${clientSpentToday}$, 
    с учетом скидки к оплате: ${clientBillDiscount}.
    За все время в нашем ресторане вы потратили: ${clientSpentForAllTime}$.`);
