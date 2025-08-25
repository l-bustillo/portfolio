fetch("menu.html")
  .then(response => {
    if (!response.ok) throw new Error("Menu not found");
    return response.text();
  })
  .then(data => {
    document.getElementById("menu-placeholder").innerHTML = data;

    // Highlight active page
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll(".nav-item a").forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      }
    });
  })
  .catch(error => console.error("Error loading menu:", error));
