"use strict";
let currentYear = new Date();
currentYear = currentYear.getFullYear();

let champions = {
    'теннис': 'Андре Агасси',
    'футбол': 'Лионель Месси',
    'плаванье': 'Майкл Фелпс',
}

let userAge = prompt ( 'Введите год вашего рождения.' );
if( userAge === null ){
    alert ( 'Вы отменили ввод вашей даты!' );
    userAge = 'Нужно было ввести год вашего рождения';
}else if( userAge.trim() === '' || isNaN( +userAge ) || currentYear - userAge < 0 ) {
    userAge = 'Нужно было ввести год вашего рождения';
}else{
    userAge = currentYear - userAge;
}

let userTown = prompt ( 'В каком городе Вы проживаете?' );
if( userTown === null || userTown.trim() === '' ){
    alert ( 'Вы отменили ввод местажительства.' );
    userTown = 'Жаль что вы не ввели город вашего проживания!';
}
let userSportsInterest = prompt ( 'Какой ваш любимый вид спорта?' );
if( userSportsInterest === null ){
    alert ( 'Жаль, что Вы не захотели ввести свой любимый вид спорта.' );
    userSportsInterest = 'не занимаетесь спортом.';
}else if ( champions[userSportsInterest.toLowerCase()] != undefined ){
    userSportsInterest = ', как ' + champions[userSportsInterest.toLowerCase()];
}else{
    userSportsInterest = ' спортсмен.';
}

switch(userTown.toLowerCase()){
    case 'киев':
        alert( `Вам ${userAge}. Вы живешь в столице Украины. Вы ${userSportsInterest}` );
        break;
    case 'москва':
        alert( `Вам ${userAge}. Вы живешь в столице России. Вы ${userSportsInterest}` );
        break;
    case 'минск':
        alert( `Вам ${userAge}. Вы живешь в столице Белоруссии. Вы ${userSportsInterest}` );
        break;
    default:
        alert( `Вам ${userAge}. Ваш город: ${userTown}. Вы ${userSportsInterest}` );
}