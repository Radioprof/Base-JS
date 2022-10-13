'use strict';

let basket = document.querySelector('.basket');
document.querySelector('.cartIcon').addEventListener('click', event => {
	basket.classList.toggle('hidden');
});
let bodyBas = {};
let sum;
let total;
document.querySelector('.featuredItems').addEventListener('click', event => {
	if (event.target.parentNode.tagName == 'BUTTON' ||  event.target.tagName == 'BUTTON'){
		const c = document.querySelector('.cartIconWrap').querySelector('span');
		const evId = event.target.closest('.featuredItem').getAttribute('data-id');
		const evName = event.target.closest('.featuredItem').getAttribute('data-name');
		const evPr = event.target.closest('.featuredItem').getAttribute('data-price');
		addToCart(evId, evName, evPr);
		c.innerHTML = total;
	}
});
function addToCart(id, name, price) {
	const a = {id: +id, name: name, price: +price, count: 1};
	total = 0;
	sum = 0;
	let key = id;
	let basketRows = document.querySelector('.basket');
	if ( key in bodyBas){
		bodyBas[id].count += 1;
		document.getElementById(`${key}`).childNodes[1].innerHTML = bodyBas[id].count;
		document.getElementById(`${key}`).childNodes[3].innerHTML = bodyBas[id].count * price;
	}else {
		bodyBas[id] = a;
		let bodySum = bodyBas[id].count * bodyBas[id].price;
		let basStr = document.createElement('div');
		basStr.className = 'basketRow';
		basStr.id = key;
		document.querySelector('.basketTotal').before(basStr);
		let nameStr = document.createElement('div');
		nameStr.innerHTML = name;
		let countStr = document.createElement('div');
		countStr.innerHTML = 1;
		let priceStr = document.createElement('div');
		priceStr.innerHTML = price;
		let sumStr = document.createElement('div');
		sumStr.innerHTML = price;
		basStr.append(nameStr);
		basStr.append(countStr);
		basStr.append(priceStr);
		basStr.append(sumStr);
	};
	for (let key1 in bodyBas){
		total += bodyBas[key1].count;
		let bodySum1 = bodyBas[key1].count * bodyBas[key1].price;
		sum += bodySum1;
	};
	document.querySelector('.basketTotalValue').innerHTML = sum;
	return bodyBas, total, sum;
};
