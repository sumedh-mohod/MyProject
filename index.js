const readbtn = document.querySelector('.read-more-btn');

const readmore = document.querySelector('.read-more');

readbtn.addEventListener('click',function (e) {
    readmore.classList.toggle('show');
    if (readbtn.innerText=='Load More') {
        readbtn.innerText='Load Less';
    } else {
        readbtn.innerText='Load More';
    }
})