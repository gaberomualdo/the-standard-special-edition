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
