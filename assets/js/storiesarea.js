/* video modal functionality */
(() => {
    const videoModalContainer = document.querySelector('.video-modal-container');
    const videoModal = document.querySelector('.video-modal');
    const videoButton = document.querySelector('.open-video-button');
    videoButton.addEventListener('click', () => {
        videoModalContainer.classList.remove('fadeOut');
        videoModal.classList.remove('zoomOut');

        videoModalContainer.classList.add('active');
        videoModalContainer.classList.add('fadeIn');
        videoModal.classList.add('zoomIn');

        setTimeout(() => videoModalContainer.classList.add('animated-in'), 350);
        if (!videoModal.querySelector('iframe').getAttribute('src')) {
            videoModal.querySelector('iframe').setAttribute('src', 'https://www.youtube.com/embed/LhLz6KNjMmk?&autoplay=1');
        }
    });

    /* close create a trade modal */
    const closeModal = () => {
        videoModal.querySelector('iframe').removeAttribute('src');
        videoModalContainer.classList.remove('animated-in');
        videoModalContainer.classList.remove('fadeIn');
        videoModal.classList.remove('zoomIn');

        videoModalContainer.classList.add('fadeOut');
        videoModal.classList.add('zoomOut');

        setTimeout(() => videoModalContainer.classList.remove('active'), 350);
    };

    const closeModalBtn = document.querySelector('.video-modal .close-button');
    closeModalBtn.addEventListener('click', closeModal);
    document.addEventListener('click', (e) => {
        if (e.target == videoModalContainer && videoModalContainer.classList.contains('animated-in')) {
            closeModal();
        }
    });
})();

/* display code for stories area */
(() => {
    const storiesSectionInnerElm = document.querySelector('section.storiesarea .inner');

    let finalHTML = '';

    storiesData.forEach((row) => {
        finalHTML += `<div class="row double-box">`;
        row.forEach((item) => {
            if (item.type == 'stories') {
                finalHTML += `
                <div class="box link-box">
                    <h1 class="title">${item.title}</h1>
                    <ul class="link-list">
                `;

                Object.keys(item.content).forEach((key) => {
                    finalHTML += `
                    
                    <a
                        class="styled-link"
                        target="_blank"
                        href="${item.content[key]}"
                    >
                        <span>
                            ${key}
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
                        </svg>
                    </a>

                    `;
                });

                finalHTML += '<ul></div>';
            } else if (item.type == 'image') {
                finalHTML += `
                <div class="box image-box">
                    <img src="${item.url}" alt="${item.title}" />
                </div>
                `;
            }
        });

        finalHTML += '</div>';
    });
    storiesSectionInnerElm.innerHTML += finalHTML;
})();
