var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');

var products = [
	new Product({
		imagePath: "http://gothic-game.kz/wallpapers/g1/002.jpg",
		title: "Gothic Video Game",
		description: "Awesome Game!",
		price: 10
	}),
	new Product({
		imagePath: "http://demonsufonline.com/wp-content/uploads/2014/10/league_of_legends_wallpaper.jpg",
		title: "League of Legend",
		description: "Online Best Game",
		price: 5
	}),
	new Product({
		imagePath: "http://i.ytimg.com/vi/TDGn1Xk6LQs/maxresdefault.jpg",
		title: "Pack of Video Games!!!",
		description: "Best price, buy now!!!",
		price: 20
	}),
	new Product({
		imagePath: "http://zolotaya-antilopa.ru/wp-content/uploads/2012/02/07c203c429a3.jpg",
		title: "About tree game",
		description: "Try this wonderful game",
		price: 7
	}),
	new Product({
		imagePath: "http://fotocop.ru/img/picture/Sep/17/a6b94a4f6509e27696a2f13ec1e0f1d1/5.jpg",
		title: "Zuma",
		description: "Funny game",
		price: 3
	})
];
var done = 0;
for (var i = 0; i < products.length; i++) {
	products[i].save((err, res)=> {
		done++;
		if (done === products.length) {
			exit();
		}
	})
}
function exit() {
	mongoose.disconnect();
}