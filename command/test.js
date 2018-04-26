var co = require('co')

module.exports = ()=>{
	co(function	*(){
  		var res = yield [
    		Promise.resolve(1),
    		Promise.resolve(2),
    		Promise.resolve(3),
  		];
  		console.log(res); // => [1, 2, 3] 
	})
}

