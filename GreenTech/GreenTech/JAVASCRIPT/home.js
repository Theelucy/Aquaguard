<script>
document.addEventListener('DOMContentLoaded', function() {
    const fetchNewsData = async () => {
        try {
            const response = await fetch('../mock-data1.json');
            if (!response.ok) {
                throw new Error('Failed to fetch the data');
            }
            const data = await response.json();
            displayUpdates(data);
        } catch (error) {
            console.error('Error fetching the data:', error);
        }
    };

    const displayUpdates = (data) => {
        const updatesContainer = document.querySelector('.slideshow-container');
        updatesContainer.innerHTML = `<h2>Water Outage Updates for ${data.region}</h2>`;

        const updateCards = data.updates.map(update => `
            <div class="update-card" data-description="${update.description}">
                <img src="${update.image || '../images/download.jpeg'}" alt="${update.title}" class="update-image">
                <h3>${update.title}</h3>
                <p>${update.description}</p>
                <p><strong>Status:</strong> ${update.status}</p>
                ${update.affected_areas ? `<p><strong>Affected Areas:</strong> ${update.affected_areas.join(', ')}</p>` : ''}
                ${update.estimated_repair_time ? `<p><strong>Estimated Repair Time:</strong> ${update.estimated_repair_time}</p>` : ''}
                <p><small><strong>Updated on:</strong> ${new Date(update.date).toLocaleString()}</small></p>
            </div>
        `).join('');

        updatesContainer.innerHTML += `
            <div class="update-grid">
                ${updateCards}
            </div>
        `;

        startSlideshow();
    };

    let slideshowInterval;

    const startSlideshow = () => {
        const cards = document.querySelectorAll('.update-card');
        let index = 0;

        const updateDisplay = () => {
            cards.forEach(card => card.style.display = 'none'); // Hide all cards
            for (let i = 0; i < 2; i++) { // Show two cards
                const cardToShow = cards[index + i];
                if (cardToShow) cardToShow.style.display = 'block';
            }
            index = (index + 2) % cards.length; // Increment index by 2
        };

        updateDisplay();
        slideshowInterval = setInterval(updateDisplay, 5000); // Change every 5 seconds

        cards.forEach(card => {
            card.addEventListener('click', () => {
                clearInterval(slideshowInterval);
                cards.forEach(c => c.style.display = 'none'); // Hide all
                card.style.display = 'block'; // Show clicked card
                showDetails(card);
            });
        });
    };

    const showDetails = (card) => {
        alert(card.dataset.description); // Show the description in an alert
    };

    fetchNewsData(); // Call the function to load and display the news updates
});
</script>