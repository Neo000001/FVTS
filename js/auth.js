const user = JSON.parse(localStorage.getItem("user"));

function requireLogin() {
  if (!user) {
    window.location.href = "login.html";
  }
}

function requireRole(allowedRoles) {
  if (!allowedRoles.includes(user.role)) {
    alert("Access denied");
    window.location.href = "loading.html";
  }
}

function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}
