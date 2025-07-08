document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".toggle-action");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault(); // Предотвращаем переход по ссылке
      const targetId = button.getAttribute("data-target");
      const dropdown = document.getElementById(targetId);

      // Переключаем видимость
      if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
      } else {
        // Скрываем все другие выпадающие блоки
        document
          .querySelectorAll(".dropdown-content")
          .forEach((d) => (d.style.display = "none"));
        dropdown.style.display = "block";
      }
    });
  });

  // Закрытие выпадающего блока при клике вне его
  document.addEventListener("click", (e) => {
    const dropdowns = document.querySelectorAll(".dropdown-content");
    const toggles = document.querySelectorAll(".toggle-action");

    let isClickInside = false;
    toggles.forEach((toggle) => {
      if (toggle.contains(e.target)) isClickInside = true;
    });
    dropdowns.forEach((dropdown) => {
      if (dropdown.contains(e.target)) isClickInside = true;
    });

    if (!isClickInside) {
      dropdowns.forEach((dropdown) => (dropdown.style.display = "none"));
    }
  });
});
