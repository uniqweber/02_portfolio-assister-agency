// Initialize dark mode based on localStorage or system preference
const isDarkMode =
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches);

document.documentElement.classList.toggle("dark", isDarkMode);

// Initialize toggle button position
const toggleBg = document.getElementById("toggleBg");
if (isDarkMode) {
  toggleBg.classList.remove("translate-x-full");
} else {
  toggleBg.classList.add("translate-x-full");
}

const toggleMe = document.getElementById("toggleMe");

toggleMe.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");

  if (isDark) {
    localStorage.theme = "dark";
    toggleBg.classList.remove("translate-x-full");
  } else {
    localStorage.theme = "light";
    toggleBg.classList.add("translate-x-full");
  }
});
