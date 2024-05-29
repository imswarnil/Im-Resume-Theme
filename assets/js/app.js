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
  

document.addEventListener("DOMContentLoaded", () => {
  const blockquotes = document.querySelectorAll("blockquote");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        typewriterEffect(entry.target.querySelector("p"));
        observer.unobserve(entry.target);
      }
    });
  });

  blockquotes.forEach((blockquote) => {
    observer.observe(blockquote);
  });
});

function typewriterEffect(element) {
  const text = element.innerText;
  element.innerHTML = "";
  let i = 0;
  const typing = setInterval(() => {
    element.innerHTML += text[i];
    playTypingSound(); // Play typing sound effect
    i++;
    if (i === text.length) {
      clearInterval(typing);
      stopTypingSound(); // Stop typing sound effect when typing completes
    }
  }, 100); // Adjust typing speed as needed
}

function playTypingSound() {
  const audio = new Audio("../../../keyboard.mp3"); // Path to the typing sound effect
  audio.play();
}

function stopTypingSound() {
  const audio = document.querySelector("audio");
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
}
