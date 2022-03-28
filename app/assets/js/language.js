function togglestyle() {
    var styles = document.getElementsByTagName('link')[0];
    var paragraphEN = document.getElementById('en');
    var paragraphAR = document.getElementById('ar');

    if (styles.getAttribute('href') == '../css/style.css') {
        styles.setAttribute('href', '../css/styleEN.css');
        paragraphEN.style.display = 'none';
        paragraphAR.style.display = 'block';

    }
    else {
        styles.setAttribute('href', '../css/style.css');
        paragraphAR.style.display = 'none';
        paragraphEN.style.display = 'block';
    }
}