const loadContact = (function () {
    const contactElement = document.createElement("div");
  
    contactElement.innerHTML = `
    <div class="home">
        <h1 class="home-title">Contact</h1>
        <h2 class="home-subtitle">
        If you want to consult us about your addiction!
        </h2>
    </div>
    <div class="content-container contact-box">
        <div class="contact-info">
        <div class="location">
            <p class="logo"><i class="fas fa-map-marker-alt orange"></i></p>
            <p class="details">
            3012 Cimmaron Road, Garden Grove, California
            </p>
            <p class="logo"><i class="fas fa-phone-volume orange"></i></p>
            <p class="details">334 992 0091</p>
        </div>
        </div>
        <div class="contact-map">
        <div class="mapouter">
            <div class="gmap_canvas">
            <iframe
                width="100%"
                height="300"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=kepri%20mall&t=&z=19&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
            ></iframe>
            </div>
        </div>
        </div>
    </div>
      `;
  
    return contactElement;
  })();
  
  export { loadContact };


       