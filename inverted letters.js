const getInverted = str =>{
  // Получаем нижний регистр
  str = str.toLowerCase();

  // Переворачиваем строку и возвращаем результат

  return str === str.split('').reverse().join('');
} 

 console.log(getInverted('annk'));