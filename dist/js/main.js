
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.id = themeName;

}
// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'dark-mode') {
        setTheme('light-mode');
        $("link#dark-mode").removeAttr('href');
    } else {
        setTheme('dark-mode');
        $("link#dark-mode").removeAttr('disabled');
        $("link#dark-mode").attr('href', 'dist/css/dark.css');
    }
}
// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'dark-mode') {
        setTheme('dark-mode');
        document.getElementById('slider').checked = true;
        $("link#dark-mode").removeAttr('disabled');

    } else {
        setTheme('light-mode');
        document.getElementById('slider').checked = false;
        $("link#dark-mode").attr('disabled', true);

    }
})();