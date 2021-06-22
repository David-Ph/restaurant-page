const loadMenu = (function () {
    const menuElement = document.createElement("div");
  
    menuElement.innerHTML = `
    <div class="home">
          <h1 class="home-title">Menu</h1>
          <h2 class="home-subtitle">All kinds of coffee for your fix!</h2>
        </div>
        <div class="content-container">
          <div class="menu-item">
            <div class="info">
              <p class="title">Latte</p>
              <p class="price">Rp. 20.000</p>
            </div>
            <div class="menu-picture">
              <img src="./images/latte.jpg" alt="">
            </div>
          </div>
          <div class="menu-item">
            <div class="info">
              <p class="title">Americano</p>
              <p class="price">Rp. 15.000</p>
            </div>
            <div class="menu-picture">
              <img src="./images/americano.jpg" alt="">
            </div>
          </div>
          <div class="menu-item">
            <div class="info">
              <p class="title">Espresso</p>
              <p class="price">Rp. 12.000</p>
            </div>
            <div class="menu-picture">
              <img src="./images/espresso.jpg" alt="">
            </div>
          </div> 
        </div>
      `;
  
    return menuElement;
  })();
  
  export { loadMenu };


        