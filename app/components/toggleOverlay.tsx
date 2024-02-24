const ToggleNav = () => {
    const navElement = document.getElementById('myNav');
    const htmlElement = document.querySelector('.parent');
  
    if (navElement.style.width === '100%') {
      navElement.style.width = '0%';
      htmlElement.style.overflow = 'auto'; // Enable overflow when closing nav
    } else {
      navElement.style.width = '100%';
      htmlElement.style.overflow = 'hidden'; // Disable overflow when opening nav
    }
  };
  
  export default ToggleNav