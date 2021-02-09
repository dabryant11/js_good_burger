//Implement Your Code Here

const helper = burger => {
  let burgerMenu = document.querySelector('#burger-menu')
  let card = document.createElement('div')
  card.innerHTML = `<div class="burger">
<h3 class="burger_title">${burger.name}</h3>
<img src=${burger.image}>
<p class="burger_description">
  ${burger.description}
</p>
<button class="button">Add to Order</button>
</div>`
  burgerMenu.append(card)
  let button = document.querySelector('.button')

  card.children[0].children[3].addEventListener('click', addBurger)

  function addBurger() {
    let list = document.querySelector('#order-list')
    let order = document.createElement('li')
    list.append(order)
    order.innerText = burger.name
  }

}


window.onload = function () {
  const url = 'http://localhost:3000/burgers'
  fetch(url)
    .then(res => res.json().then(body => {


      body.forEach(helper)

      let customBurger = document.querySelector('#custom-burger')
      
      async function newBurger(e) {
        e.preventDefault()

          let customBurgerName = document.querySelector('#burger-name')
          let customBurgerImage = document.querySelector('#burger-image')
          let customBurgerDesc = document.querySelector('#burger-description')
          let newBurgerName = customBurgerName.value 
          let newBurgerImage = customBurgerImage.value 
          let newBurgerDescription = customBurgerDesc.value 
        
          let list = document.querySelector('#order-list')
          let order = document.createElement('li')
          list.append(order)
          order.innerText = newBurgerName
        
          let data = {
              name: newBurgerName,
              description: newBurgerDescription,
              image: newBurgerImage
            }
          
          helper(data)
          
          fetch(url,{
            method: 'POST',
            headers:{
              // 'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            
            body: JSON.stringify(data),
            mode: 'cors'
          })
          .then(res => res.json())


          // fetch(url,{
          //   method: 'POST',
          //   headers:{
          //     'Accept': 'application/json',
              
          //     'Content-Type': 'application/json'
          //   },
            
          //   body: JSON.stringify(data)
            
          // }).then(()=>{})
          
          e.preventDefault()
        }
        customBurger.addEventListener('submit', newBurger)
    }))
}















