const observer = new IntersectionObserver(entries => {
    console.log(entries)
    entries.forEach(entry => {
        const left = entry.target.querySelector('.animator-class');
        console.log(left)
        if (entry.isIntersecting) {
            left.classList.add('first');
            return;
        }

        left.classList.remove('first');
    });
});

observer.observe(document.querySelector('.row1'));
observer.observe(document.querySelector('.row2'));
observer.observe(document.querySelector('.row3'));