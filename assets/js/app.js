document.addEventListener('DOMContentLoaded', () => {
    const copyButtons = document.querySelectorAll('.copy-code-button');
  
    copyButtons.forEach(copyButton => {
      copyButton.addEventListener('click', () => {
        const codeBlock = copyButton.parentElement.nextElementSibling.querySelector('code');
        const codeToCopy = codeBlock.innerText;
  
        navigator.clipboard.writeText(codeToCopy)
          .then(() => {
            // Code copied successfully
            console.log('Code copied successfully');
            copyButton.classList.add('is-success');
            copyButton.querySelector('.icon').innerHTML = '<i class="fas fa-check"></i>';
            copyButton.querySelector('.text').textContent = 'Copied';
            showCopiedToast(); // Show success toast
            setTimeout(hideCopiedToast, 3000); // Hide toast after 3 seconds
          })
          .catch(err => {
            console.error('Failed to copy code: ', err);
          });
      });
    });
  });
  
  function showCopiedToast() {
    const toast = document.getElementById('copied-toast');
    toast.style.display = 'block';
  }
  
  function hideCopiedToast() {
    const toast = document.getElementById('copied-toast');
    toast.style.display = 'none';
  }
  