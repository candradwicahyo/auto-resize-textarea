window.onload = () => {
  
  function autoResizeTextarea() {
    const input = document.querySelector('.input');
    input.addEventListener('keyup', function() {
      this.style.height = '40px';
      const height = this.scrollHeight;
      this.style.height = `${height}px`;
    });
  }
  
  autoResizeTextarea();
  
}