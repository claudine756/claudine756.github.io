function changeColor(theme) {
    document.body.classList.remove('lavender2-theme', 'lavender3-theme', 'lavender1-theme');
    
    if (theme === 'lavender2') {
        document.body.classList.add('lavender2-theme');
    } else if (theme === 'lavender3') {
        document.body.classList.add('lavender3-theme');
    } else {
        document.body.classList.add('lavender1-theme');
    }
}
