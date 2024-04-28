// const giftBoxContainer = document.querySelector('.gift-box-container');
// const gifBoxBody = document.querySelector('.gift-box-body');
// const giftBoxTextTypingAnimation = document.getElementById('giftBoxTextTypingAnimation');
// const giftBoxCapId = document.getElementById('giftBoxCap');






const giftBoxHeadingClass = document.querySelector('.gift-box-heading');
const giftBoxCapClass = document.querySelector('.gift-box-cap');
const giftBoxText = "আমরা আনন্দে সঙ্গে জানাচ্ছি যে, 14.05.2024 [৩১ বৈশাখ ১৪৩১] তারিখে আমাদের গ্রামের শ্রী শ্রী গঙ্গা এবং কালী পূজা উৎসবে আপনার এবং আপনার পরিবারের অংশগ্রহণের জন্য আমন্ত্রিত করছি। গ্রামের পূজা উৎসবে আপনাদের উপস্থিতি আরও আনন্দময় ও সমৃদ্ধ হবে।  আপনাদের উপস্থিতি আমাদের গ্রামের উৎসবকে আরো উজ্জ্বল ও স্পেশাল করবে |\nস্থান:\n ফুলেশ্বর (বাবুপাড়া ), উলুবেড়িয়া, হাওড়া ।।";
const lidOne = document.querySelector('.lid-one');
const lidTwo = document.querySelector('.lid-two');
const giftBoxTextBody = document.querySelector('.gift-box-text-body');
const giftBoxShadow = document.querySelector('.gift-box-shadow');
const wrapper = document.querySelector('.wrapper');





giftBoxCapClass.addEventListener('click', () => {
    // alert('hello')

    lidOne.classList.add('active');
    lidTwo.classList.add('active');
    giftBoxTextBody.classList.add('active');
    giftBoxShadow.classList.add('active');
    giftBoxHeadingClass.classList.add('active');
    wrapper.classList.add('active');

    typingTimeout = setTimeout(typeWriter,2000);

    if (giftBoxCapClass.className === "gift-box-cap") {
        alert('hello')

        // giftBoxHeadingClass.classList.add('active');
        // giftBoxCapClass.classList.add('active');
        // giftBoxContainer.classList.add('active');
        // gifBoxBody.classList.add('active');
        // giftBoxShadow.classList.add('active');
        // giftBoxTextBody.classList.add('active');
        // giftBoxTextBody.classList.remove('active2');
        // giftBtn.classList.add('active');

        // typingTimeout = setTimeout(typeWriter, 2000);
    }
    else {
        // giftBoxHeadingClass.classList.remove('active');
        // giftBoxCapClass.classList.remove('active');
        // giftBoxContainer.classList.remove('active');
        // gifBoxBody.classList.remove('active');
        // giftBoxShadow.classList.remove('active');
        // giftBoxTextBody.classList.remove('active');
        // giftBoxTextBody.classList.add('active2');

        // resetText();
    }
});

let index = 0;
let typingTimeout;

function typeWriter() {
    if (index < giftBoxText.length) {
        giftBoxTextTypingAnimation.textContent += giftBoxText.charAt(index);
        index++;
        typingTimeout = setTimeout(typeWriter, 120); // Adjust the typing speed here (milliseconds)
    } else {
        // giftBtn.classList.remove('active');
    }
}
function resetText() {
    clearTimeout(typingTimeout);
    giftBoxTextTypingAnimation.textContent = '';
    index = 0;
}
