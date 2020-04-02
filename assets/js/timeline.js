/* general and display code for various articles in the timeline based on timeline data in the timeline data variable defined in timeline_data.js */
(() => {
    const timelineSectionElm = document.querySelector('section.timeline');

    let finalHTML = '';

    timelineData.forEach((part, index) => {
        if (part.type == 'text') {
            finalHTML += `<div class="timeline-part">
                <div class="timeline"></div>
                <div class="date">
                <h1 class="month">${part.date.split(' ')[0]}</h1>
                <h2 class="day">${part.date.split(' ')[1]}</h2>
                </div>
                <div class="content">
                    <div class="box">
                        <p>
                            ${part.content.split('\n\n').join('</p><p>')}
                        </p>
                    </div>
                </div>
            </div>`;
        } else if (part.type == 'articles') {
            // function to generate HTML for box of article
            const generateArticleHTML = (article, isDoubleBox) => {
                // customize word limit based on image and whether is single box or not
                let wordLimit = 30;

                if (isDoubleBox && !article.image) {
                    wordLimit = 45;
                }
                if (!isDoubleBox && article.image) {
                    wordLimit = 80;
                }
                if (!isDoubleBox && !article.image) {
                    wordLimit = 70;
                }

                let previewText = article.previewText.replace(/\s\s+/g, ' ').split(' ');

                if (previewText.length > wordLimit) {
                    previewText = previewText.slice(0, wordLimit);
                    previewText = previewText.join(' ') + '...';
                } else {
                    previewText = previewText.join(' ');
                }

                return `
                <a
                    class="box article-box styled-link"
                    target="_blank"
                    href="${article.url}"
                >
                    ${
                        article.image
                            ? `<div class="image">
                        <img
                            src="${article.image}"
                            alt="${article.title}"
                        />
                    </div>`
                            : ''
                    }
                    <div class="inner">
                        <h1 class="title">${article.title}</h1>
                        <p class="preview-text">
                            ${previewText}
                        </p>
                    </div>
                </a>`;
            };

            // convert articles list into 2D array of 2
            // code taken from user Banciur from https://stackoverflow.com/questions/4492385/how-to-convert-simple-array-into-two-dimensional-array-matrix-with-javascript/39838921
            let articles = part.content;
            articles = articles.reduce((rows, key, index) => (index % 2 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []);
            articles = articles.reverse();

            // loop through articles and add code to final HTML
            articles.forEach((row, index) => {
                if (row.length == 1) {
                    finalHTML += `<div class="timeline-part">
                        <div class="timeline"></div>
                        ${
                            index == 0
                                ? `<div class="date">
                            <h2 class="month">${part.date.split(' ')[0]}</h2>
                            <h2 class="day">${part.date.split(' ')[1]}</h2>
                        </div>`
                                : ''
                        }
                        <div class="content single-box">
                            ${generateArticleHTML(row[0], false)}
                        </div>
                    </div>`;
                } else if (row.length == 2) {
                    finalHTML += `<div class="timeline-part">
                        <div class="timeline"></div>
                        ${
                            index == 0
                                ? `<div class="date">
                            <h2 class="month">${part.date.split(' ')[0]}</h2>
                            <h2 class="day">${part.date.split(' ')[1]}</h2>
                        </div>`
                                : ''
                        }
                        <div class="content">
                            ${generateArticleHTML(row[0], true)}
                            ${generateArticleHTML(row[1], true)}
                        </div>
                    </div>`;
                }
            });
        }

        // add separator if not end
        if (index < timelineData.length - 1) {
            finalHTML += `
            <div class="timeline-part separator"><div class="timeline"></div></div>
            `;
        }
    });

    finalHTML += `
    <div class="timeline-part timeline-end separator"><div class="timeline"></div></div>
    `;

    timelineSectionElm.innerHTML += finalHTML;
})();
