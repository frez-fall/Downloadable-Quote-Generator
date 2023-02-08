import { toJpeg } from 'html-to-image';

function downloadQuote(e){
    toJpeg(document.querySelector('.notif-wrapper'), { quality: 0.95 })
        .then((dataUrl) => {
            const link = document.createElement('a');
            link.download = 'quote.jpeg';
            link.href = dataUrl;
            link.click();
            link.remove();
        });
}

document.querySelector('#download').addEventListener('click', downloadQuote);
