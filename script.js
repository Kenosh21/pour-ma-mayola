
document.querySelectorAll('.stars').forEach(starBlock => {
    starBlock.addEventListener('click', function(e) {
        const target = e.target;
        if (!target.innerText.includes('☆') && !target.innerText.includes('★')) return;
        const index = Array.from(this.innerText).indexOf(target.innerText);
        const rating = index + 1;
        let result = '';
        for (let i = 0; i < 5; i++) {
            result += i < rating ? '★' : '☆';
        }
        this.innerText = result;
    });
});
