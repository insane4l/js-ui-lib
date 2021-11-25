import $ from '../core';

$.prototype.modal = function(alreadyExists) {
    for (let i = 0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target');
        $(this[i]).click((e) => {
            e.preventDefault();
            $(target).fadeIn(500);
            toggleBodyOverflow(true);
        });

        const closeElements = document.querySelectorAll(`${target} [data-close]`);
        
        closeElements.forEach(el => {
            $(el).click(() => {
                closeModals($(target));
            });
        });
    
        $('.modal__overlay').click(e => {
            if(e.target.classList.contains('modal__overlay')) {
                closeModals($(target));
            }
        });
    }

    function closeModals(modals) {
        for (let i = 0; i < modals.length; i++) {
            modals[i].style.display = 'none';

            if (alreadyExists) {
                modals[i].remove();
            }
        }
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


$.prototype.createModal = function({text, btns} = {}) {
    for (let i = 0; i < this.length; i++) {
        let modal = document.createElement('div');
        modal.classList.add('modal__overlay');
        modal.setAttribute('id', this[i].getAttribute('data-target').slice(1));

        const buttons = [];
        for (let j = 0; j < btns.count; j++) {

            let settings = btns.settings[j];
            let btn = document.createElement('button');
            btn.classList.add('btn', ...settings[1]);
            btn.textContent = settings[0];
            if(settings[2]) {
                btn.setAttribute('data-close', 'true');
            }
            if (settings[3] && typeof(settings[3] === 'function') ) {
                btn.addEventListener('click', settings[3]);
            }

            buttons.push(btn);
        }


        modal.innerHTML = `
            <div class="modal">
                <button class="close" data-close>
                    <span>&times;</span>
                </button>
                <div class="modal__header">
                    <div class="modal__title">
                        ${text.title}
                    </div>
                </div>
                <div class="modal__body">
                    ${text.body}
                </div>
                <div class="modal__footer">

                </div>
            </div>
        `;

        modal.querySelector('.modal__footer').append(...buttons);
        document.body.appendChild(modal);
        $(this[i]).modal(true);
        $(this[i].getAttribute('data-target')).fadeIn(500);
    }
}