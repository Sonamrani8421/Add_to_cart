let offers = document.querySelectorAll('.offer');
  let radios = document.querySelectorAll('input[name="unit"]');
  let total = document.getElementById('total-price');
  let  addtocart = document.getElementById('add_to_cart');//add-to-cart
  var price;
  radios.forEach((radio, index) => {
    radio.addEventListener('change', () => {
      offers.forEach((offer, i) => {
        offer.classList.remove('active');
        offer.querySelector('.selectors').style.display = 'none';
      });

      offers[index].classList.add('active');
      offers[index].querySelector('.selectors').style.display = 'flex';

      price = offers[index].getAttribute('data-price');
      console.log(price);
      total.textContent = `$${parseFloat(price).toFixed(2)}`;
    });
  });
  addtocart.addEventListener('click',()=>{
    if(price !==undefined){
    alert('Successfully Added to Cart. Current Price is :'+price);
    }
  });