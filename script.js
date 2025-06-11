document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Efek Cahaya Mengikuti Kursor ---
  const body = document.body;
  body.addEventListener("mousemove", (e) => {
    // Menggunakan CSS Custom Properties untuk performa yang lebih baik
    document.documentElement.style.setProperty("--mouse-x", e.clientX + "px");
    document.documentElement.style.setProperty("--mouse-y", e.clientY + "px");
  });

  // --- 2. Fungsionalitas Modal (Popup) ---
  const openModalButtons = document.querySelectorAll("[data-modal-target]");
  const closeModalButtons = document.querySelectorAll(".close-btn");
  const modals = document.querySelectorAll(".modal");

  // Fungsi untuk membuka modal
  const openModal = (modal) => {
    if (modal == null) return;
    modal.classList.add("active");
  };

  // Fungsi untuk menutup modal
  const closeModal = (modal) => {
    if (modal == null) return;
    modal.classList.remove("active");
  };

  // Tambahkan event listener untuk setiap tombol pembuka modal
  openModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.getElementById(button.dataset.modalTarget);
      openModal(modal);
    });
  });

  // Tambahkan event listener untuk setiap tombol penutup modal
  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");
      closeModal(modal);
    });
  });

  // Tutup modal jika user mengklik di luar area konten modal
  modals.forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  // --- 3. Navigasi Smooth Scrolling ---
  document
    .querySelectorAll("nav ul li a, .content-button, .button")
    .forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        // Pastikan itu adalah link internal (dimulai dengan #)
        if (href && href.startsWith("#")) {
          e.preventDefault();
          const targetId = href;
          const targetSection = document.querySelector(targetId);

          if (targetSection) {
            targetSection.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }
      });
    });
});
