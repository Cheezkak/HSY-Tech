function showCategory(categoryId, button) {
  // Hide all category content
  const categories = document.querySelectorAll(".category-content");

  categories.forEach(function (category) {
    category.classList.remove("active");
  });

  // Remove active state from all buttons
  const buttons = document.querySelectorAll(".tab-button");

  buttons.forEach(function (btn) {
    btn.classList.remove("active");
  });

  // Show the selected category
  document.getElementById(categoryId).classList.add("active");

  // Highlight the selected button
  button.classList.add("active");
}
