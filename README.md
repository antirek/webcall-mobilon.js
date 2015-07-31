# webcall-mobilon.js


## Usage

`````javascript

<script src="dist/webcall.js"></script>

<script>

var webcall = new Webcall({key: 'YOUR_WEBCALL_KEY'});

webcall.makeOrder({number: '89135292926'})
.then(function (response) {
	console.log(response);

	//any do
});
	
</script>


`````


## Development


### Prepare

> git clone https://github.com/antirek/webcall-mobilon.js.git 

> cd webcall-mobilon.js

> npm install

> bower install


### Build 

> gulp

