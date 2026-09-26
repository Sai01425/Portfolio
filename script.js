// Minimalist Light SDE Portfolio JavaScript Engine

document.addEventListener('DOMContentLoaded', () => {
  // 1. Screenshot Modal Gallery Logic
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalClose = document.getElementById('modalClose');

  window.openImageModal = function(src, title) {
    if (!modal || !modalImg) return;
    modalImg.src = src;
    if (modalTitle) modalTitle.textContent = title;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  modalClose?.addEventListener('click', closeModal);
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // 2. Print 100% B/W ATS Resume
  const printBtn = document.getElementById('printResumeBtn');
  printBtn?.addEventListener('click', () => {
    window.print();
  });

  // 3. Copy Email to Clipboard
  const copyBtn = document.getElementById('copyEmailBtn');
  copyBtn?.addEventListener('click', () => {
    const email = 'bmsaikota@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      const origText = copyBtn.innerHTML;
      copyBtn.innerHTML = `<span>✓ Copied to Clipboard!</span>`;
      setTimeout(() => {
        copyBtn.innerHTML = origText;
      }, 2000);
    });
  });
});
