$(document).ready(function () {
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        var scrollPos = $(window).scrollTop();

        var regions = [
            { id: 'sumatera', box: '.daerah-box-sm', color: 'rgba(48, 133, 195, 1)' },
            { id: 'jawa', box: '.daerah-box-j', color: 'rgba(48, 133, 195, 1)' },
            { id: 'kalimantan', box: '.daerah-box-k', color: 'rgba(48, 133, 195, 1)' },
            { id: 'sulawesi', box: '.daerah-box-sl', color: 'rgba(48, 133, 195, 1)' },
            { id: 'bnn', box: '.daerah-box-b', color: 'rgba(48, 133, 195, 1)' },
            { id: 'maluku', box: '.daerah-box-m', color: 'rgba(48, 133, 195, 1)' },
            { id: 'papua', box: '.daerah-box-p', color: 'rgba(48, 133, 195, 1)' }
        ];

        regions.forEach(function (region) {
            var daerahBox = $(region.box);
            var regionElement = $('#' + region.id);

            if (
                regionElement.offset().top <= scrollPos + window.innerHeight &&
                scrollPos < regionElement.offset().top + regionElement.outerHeight()
            ) {
                // Change only the background color, not the text color
                daerahBox.css('background-color', region.color);
            } else {
                // Only change the background color if not in the viewport
                daerahBox.css('background-color', 'rgba(204, 204, 204, 1)');
            }
        });
    }

    $(window).scroll(handleScroll);
    handleScroll();

    // Hover styles
    const daerahBoxes = document.querySelectorAll('.daerah-box-j, .daerah-box-b, .daerah-box-sm, .daerah-box-k, .daerah-box-m, .daerah-box-sl, .daerah-box-p');

    daerahBoxes.forEach(box => {
        box.addEventListener('mouseenter', function () {
            this.style.backgroundColor = 'rgba(48, 133, 195, 1)';
            this.style.color = 'white';
        });

        box.addEventListener('mouseleave', function () {
            this.style.backgroundColor = 'rgba(204, 204, 204, 1)';
            handleScroll();
        });
    });
});
