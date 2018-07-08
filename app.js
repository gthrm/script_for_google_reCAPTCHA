const request = require('request');
const url = 'https://www.google.com/recaptcha/api/siteverify'; // туда отправляем запрос
var answer = ''; //пусть будет пусто
var gRecaptchaResponse = '03ACgFB9tF26yE-KsK-4W59Rhwfzo9Mdmzi565QPh89E8fGfS69f7r9-DLr7_mrPNfgZKEijdSCnE2ASpAeU_NhJ8g_eAlE9g4ujFU0GNfO40YI0hwY7W7tbyfh7PVp165w20iYKabkLjj-V56xSLR0UciGN8o-43hQpOje7RZfsuDuqVIdV_ACZm0XIBg_nK_rHxe8FtDn4JNlZJwBQn0GFWsH__uFfvLdBMSD7HDNuB8ucpUbZ_zY5hJlyFwDW4ySMmbnZmyi1CMlypMQoOSCqLB3esfLrSnjVROpA9Se9OrB1xDX5TFdVGWvMLm290cohNuwcXIon2hEUWEHhhaQzpC_4e8ilhUwQ'; //сюда ключь, который генерирует капча. Значение "g-recaptcha-response".
request({
   method: 'POST', // методом POST
   url: url,
   // параметры GET-запроса
   // index.php?param=edit&value=10
   qs: {
        secret: '', //сюда секретный ключ
        response: gRecaptchaResponse 
   }
  }, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
    console.log(typeof body);
    answer = JSON.parse(body);
    console.log('*******************');
    console.log(typeof answer);
    console.log(answer.success);
    console.log('*******************');
    // валидация и 
    // обработка полученного ответа, заголовков
  }
});