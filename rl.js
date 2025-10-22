function search() {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    const cards = document.querySelectorAll('.resource-item');
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].innerText.toLowerCase().includes(searchInput)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}
document.getElementById('searchInput').addEventListener('input', function() {
    search();
});

// Filter button functionality
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const value = this.dataset.value;
        if (value === 'all') {
            document.getElementById('searchInput').value = '';
            const items = document.querySelectorAll('.resource-item');
            items.forEach(item => item.style.display = 'block');
        } else {
            document.getElementById('searchInput').value = value;
            search();
        }
    });
            
    // Hover effect
    button.addEventListener('mouseenter', function() {
        filterButtons.forEach(btn => {
            if (btn !== this) {
                btn.classList.add('shrink');
            }
        });
    });
    button.addEventListener('mouseleave', function() {
        filterButtons.forEach(btn => {
            btn.classList.remove('shrink');
        });
    });
});