const loadNav = (function () {
  const navElement = document.createElement("div");
  navElement.classList.add("page-container");

  navElement.innerHTML = `
    <div class="page-logo">
        <img src="./images/page-logo.png" alt="" />
    </div>
    <ul class="main-nav">
        <li class="nav-item active">Home</li>
        <li class="nav-item">Menu</li>
        <li class="nav-item">Contact</li>
    </ul>
    `;

  return navElement;
})();

export { loadNav };