import $ from '../core';

$.prototype.modal = function() {
    for (let i = 0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target');
        $(this[i]).click((e) => {
            e.preventDefault();
            $(target).fadeIn(500);
            toggleBodyOverflow(true);
        });
    }

    const closeElements = document.querySelectorAll('[data-close]');
    closeElements.forEach(el => {
        $(el).click(() => {
            closeModal();
        });
    });

    $('.modal__overlay').click(e => {
        if(e.target.classList.contains('modal__overlay')) {
            closeModal();
        }
    })

    function closeModal() {
        $('.modal__overlay')[0].style.display = 'none';
        toggleBodyOverflow();
    }

    function toggleBodyOverflow(createMargin) {
        if (!createMargin) {
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
            return;
        }

        const box = document.createElement('div');
        document.body.appendChild(box);

        box.style.visibility = "hidden";
        box.style.width = '50px';
        box.style.height = '50px';
        box.style.overflowY = 'scroll';

        const scrollWidth = box.offsetWidth - box.clientWidth;
        box.remove();

        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scrollWidth}px`;
    }
};


$('[data-toggle="modal"]').modal();