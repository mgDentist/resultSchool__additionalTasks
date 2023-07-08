const clientName = prompt('Введите имя клиента');
let clientSpentToday = Number(prompt('Сколько клиент потратил сегодня?'));
let clientSpentForAllTime = Number(prompt('Сколько клиент потратил за все время?'));
let discount;

clientSpentForAllTime += clientSpentToday;

if (isNaN(clientSpentToday) || isNaN(clientSpentForAllTime)) {
    alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузи страницу, чтобы повторить попытку.');
}
else if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
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
