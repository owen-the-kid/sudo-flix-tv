(function() {
    'use strict';

    const script = document.createElement('script');
    script.src = 'https://luke-chang.github.io/js-spatial-navigation/spatial_navigation.js';
    script.onload = function() {
        initSpatialNavigation();
    };
    document.head.appendChild(script);

    function initSpatialNavigation() {
        const focusableElements = document.querySelectorAll('a, .focusable, div.flex, input[type=text], div.flare-light');

        focusableElements.forEach(element => {
            element.addEventListener('focus', () => {
                element.style.outline = '2px solid red';
                element.style.border = '2px solid red';
            });

            element.addEventListener('blur', () => {
                element.style.outline = '';
                element.style.border = '';
            });
        });

        window.SpatialNavigation.init();
        focusableElements.forEach(element => {
            window.SpatialNavigation.add(element);
        });

        if (focusableElements.length > 0) {
            focusableElements[0].focus();
        }
    }
})();



