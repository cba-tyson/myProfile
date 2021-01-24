// $('#dark-mode').attr('disabled', true);

// $(".themes").click(function(e) {
//     e.preventDefault();
//     $('#dark-mode').attr('disabled', false);
//     // $('#light-mode').attr('disabled', true);

//     console.log("aaaa");
// });

// function to set a given theme/color-scheme
// $("#dark-mode").attr('disabled', true);
// $("#light-mode").attr('disabled', true);

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.id = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'dark-mode') {
        setTheme('light-mode');
        $("#dark-mode").attr('disabled', true);
        $("#light-mode").attr('disabled', false);
    } else if (localStorage.getItem('theme') === 'light-mode') {
        setTheme('dark-mode');
        $("#dark-mode").attr('disabled', false);
        $("#light-mode").attr('disabled', true);
    }
}
// Immediately invoked function to set the theme on initial load
(function() {
    if (localStorage.getItem('theme') === 'dark-mode') {
        setTheme('dark-mode');
        document.getElementById('slider').checked = true;
    } else {
        setTheme('light-mode');
        document.getElementById('slider').checked = false;
    }
})();