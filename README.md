# webcall-mobilon.js


## Usage

`````javascript

<script src="http://developer.mobilon.ru/webcall-mobilon.js/0.0.1/webcall.js"></script>

<script>

var webcall = new Webcall({key: 'YOUR_WEBCALL_KEY'});

webcall.makeOrder({number: '89135292926'})
.then(function (response) {
	console.log(response);

	//any do
});
	
</script>


`````


## API

### makeOrder 

сделать заказ обратного звонка

`````javascript

webcall.makeOrder({
	number: '89135292926'
	name: 'Василий',
	message: 'Привет, круто, да?!'
});

`````


### getConfig

получить настройки ключа

`````javascript

webcall.getConfig()
.then(function (config) {
	console.log(config);
});

`````

#### Config

`````json

{
  "backgroundColor": "Цвет фона",
  "image": "Ссылка на изображение",
  "helloLettering": "Надпись приветсвия",
  "thankYouLettering": "Надпись благодарности",
  "buttonsColor": "Цвет кнопок",
  "callTargets": {//список целей
    "enable": "true or false обозначает что включен",
    "targets": [{
        "index": "Индекс цели",
        "title": "Названи цели" 
    }],
    "type": "вид вывода целей select or buttons" 
  },
  "name": "Дополнительное поле имя может быть пустым",
  "panelCall": {//Настройки выбор вызова
    "tag": {//ярлык
      "enable": "true or false обозначает что включен",
      "top": "Отступ сверху",
      "color": "Цвет",
      "title":"Текст ярлыка",
      "titleColor":"Цвет текста ярлыка" 
    },
    "button": {
      "enable": "true or false обозначает что включен",
      "top": "Отступ сверху",
      "color": "Цвет",
      "right": "Отступ справа" 
    }
  }
}

`````


### getStatus 

получить статус звонка

`````javascript

webcall.getStatus({
	callid: '12121212'
})
.then(function (status) {
	console.log(status);
});

`````




## Development


### Prepare

> git clone https://github.com/antirek/webcall-mobilon.js.git 

> cd webcall-mobilon.js

> npm install

> bower install


### Build 

> gulp