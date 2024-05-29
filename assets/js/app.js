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
            setTimeout(hideCopiedToast, 2000); // Hide toast after 2 seconds
            setTimeout(() => {
              // Reset button state
              copyButton.classList.remove('is-success');
              copyButton.querySelector('.icon').innerHTML = '<i class="fas fa-copy"></i>';
              copyButton.querySelector('.text').textContent = 'Copy';
            }, 2000); // Reset button state after 3 seconds
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
  

