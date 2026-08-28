let cart=JSON.parse(localStorage.getItem('voraCart')||'[]');
function addToCart(name,price){cart.push({name,price});save();render();openCart()}
function save(){localStorage.setItem('voraCart',JSON.stringify(cart))}
function render(){document.getElementById('cart-count').textContent=cart.length;let box=document.getElementById('cart-items');if(!cart.length){box.innerHTML='<p class="empty">Tu carrito está vacío.</p>'}else{box.innerHTML=cart.map((x,i)=>`<div class="cart-item"><span>${x.name}</span><strong>${x.price.toFixed(2).replace('.',',')} € <button onclick="removeItem(${i})" style="border:0;background:none;cursor:pointer">×</button></strong></div>`).join('')}document.getElementById('cart-total').textContent=cart.reduce((a,x)=>a+x.price,0).toFixed(2).replace('.',',')+' €'}
function removeItem(i){cart.splice(i,1);save();render()}
function openCart(){document.getElementById('cart').classList.add('open');document.getElementById('overlay').classList.add('open')}
function closeCart(){document.getElementById('cart').classList.remove('open');document.getElementById('overlay').classList.remove('open')}
render();