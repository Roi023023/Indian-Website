document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");

  if (!logoutBtn) return;

  logoutBtn.addEventListener("click", async () => {
    try {
      const response = await fetch("/logout", {
        method: "POST"
      });

      if (response.ok) {
        window.location.href = "/"; // redirect to home/login
      } else {
        alert("Logout failed");
      }
    } catch (err) {
      console.error(err);
      alert("Error logging out");
    }
  });
});