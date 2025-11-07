(function() {
  // Load saved preference (if any)
  const stored = localStorage.getItem("color-scheme");
  if (stored) {
    document.documentElement.dataset.scheme = stored;
  }

  // Toggle function used by button
  window.toggleColorScheme = function () {
    const current = document.documentElement.dataset.scheme === "dark" ? "dark" : "light";
    const next = current === "dark" ? "light" : "dark";

    document.documentElement.dataset.scheme = next;
    localStorage.setItem("color-scheme", next);
  };
})();
