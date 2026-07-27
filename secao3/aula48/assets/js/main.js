function ShowCurrentDate(){
    let date = new Date();
    let p = document.querySelector('#resultado');
    let textDayWeek = weekDay(date.getDay());
    let dayMonth = zeroLeft(date.getDate());
    let month = currentMonth(date.getMonth());
    let year = date.getFullYear();
    let hour = zeroLeft(date.getHours());
    let minutes = zeroLeft(date.getMinutes());

    p.innerHTML = `${textDayWeek}, ${dayMonth} de ${month} de ${year} <br> ${hour}:${minutes}`
}

function weekDay(day){
    let textDay;
    switch(day){
        case 0:
            textDay = 'Domingo';
            return textDay;
        case 1:
            textDay = 'Segunda-feira';
            return textDay;
        case 2:
            textDay = 'Terça-feira';
            return textDay;
        case 3:
            textDay = 'Quarta-feira';
            return textDay;
        case 4:
            textDay = 'Quinta-feira';
            return textDay;
        case 5:
            textDay = 'Sexta-feira';
            return textDay;
        case 6:
            textDay = 'Sábado';
            return textDay;
        default:
            textDay = '';
    }
}

function currentMonth(month){
    let textMonth;
    switch(month){
        case 0:
            textMonth = 'Janeiro';
            return textMonth;
        case 1:
            textMonth = 'Fevereiro';
            return textMonth;
        case 2:
            textMonth = 'Março';
            return textMonth;
        case 3:
            textMonth = 'Abril';
            return textMonth;
        case 4:
            textMonth = 'Maio';
            return textMonth;
        case 5:
            textMonth = 'Junho';
            return textMonth;
        case 6:
            textMonth = 'Julho';
            return textMonth;
        case 7:
            textMonth = 'Agosto';
            return textMonth;
        case 8:
            textMonth = 'Setembro';
            return textMonth;
        case 9:
            textMonth = 'Outubro';
            return textMonth;
        case 10:
            textMonth = 'Novembro';
            return textMonth;
        case 11:
            textMonth = 'Dezembro';
            return textMonth;
        default:
            textDay = '';
    }
}

function zeroLeft(num){
    return num >= 10 ? num : `0${num}`;
}

ShowCurrentDate();