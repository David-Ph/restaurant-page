const loadHome = (function () {
    const homeElement = document.createElement("div");
  
    homeElement.innerHTML = `
    <div class="home">
        <h1 class="home-title">Come and get woke!</h1>
        <h2 class="home-subtitle">Relief your caffeine addiction!</h2>
        <button class="see-menu">See Menu</button>
    </div>
    <div class="content-container">
        <div class="location">
        <h2 class="title orange">Where we are</h2>
        <p class="logo"><i class="fas fa-map-marker-alt orange"></i></p>
        <p class="details">3012  Cimmaron Road, Garden Grove, California</p>
        </div>
        <div class="opening-hours">
        <h2 class="title orange">We're open:</h2>
        <p class="logo"><i class="far fa-clock orange"></i></i></p>
        <p class="details"><span class="orange">Everyday:</span> 08.00 - 23.00</p>
        </div>
    </div>
      `;
  
    return homeElement;
  })();
  
  export { loadHome };

        