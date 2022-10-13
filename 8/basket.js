'use strict';

let basket = document.querySelector('.basket');
document.querySelector('.cartIcon').addEventListener('click', event => {
	basket.classList.toggle('hidden');
});
let bodyBas = {};
let sum;
let total;
//итоговое кол-во
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
	let basketRows = document.querySelector('.basketRow').children;
	if ( key in bodyBas){
		bodyBas[id].count += 1;
		basketRows[1].querySelector('span#1.basketRow').innerText = bodyBas[id].count;

	}else {
		bodyBas[id] = a;
		let bodySum = bodyBas[id].count * bodyBas[id].price;
		basketRows[0].insertAdjacentHTML('beforeEnd', `<br><span class="basketRow" id=${bodyBas[id].id}>${bodyBas[id].name} </span>`);
		basketRows[1].insertAdjacentHTML('beforeEnd', `<br><span class="basketRow" id=${bodyBas[id].id}>${bodyBas[id].count}</span>`);
		basketRows[2].insertAdjacentHTML('beforeEnd', `<br><span class="basketRow" id=${bodyBas[id].id}>${bodyBas[id].price}</span>`);
		basketRows[3].insertAdjacentHTML('beforeEnd', `<br><span class="basketRow" id=${bodyBas[id].ids}>${bodySum}</span>`);

	};
	for (let key1 in bodyBas){
		total += bodyBas[key1].count;
		let bodySum1 = bodyBas[key1].count * bodyBas[key1].price;
		sum += bodySum1;
	};
	document.querySelector('.basketTotalValue').innerHTML = sum;
	return bodyBas, total, sum;
};
