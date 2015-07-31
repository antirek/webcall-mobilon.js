# webcall-mobilon.js



## Usage

`````

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