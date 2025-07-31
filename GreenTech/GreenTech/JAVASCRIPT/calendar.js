document.addEventListener('DOMContentLoaded', () => {
    const calendarElement = document.getElementById('calendar');
    const eventForm = document.getElementById('eventForm');
    const closeEventForm = document.getElementById('closeEventForm');
    const eventDateElement = document.getElementById('eventDate');
    const eventListElement = document.getElementById('eventList');
    const addEventForm = document.getElementById('addEventForm');
    const eventNameInput = document.getElementById('eventName');
    let currentDate = new Date();

    // Store events in a simple object
    const events = {};

    function renderCalendar() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);

        let html = '<div class="calendar-header">';
        html += '<button id="prevMonth"><i class="fas fa-chevron-left"></i></button>';
        html += `<span>${firstDay.toLocaleString('default', { month: 'long' })} ${year}</span>`;
        html += '<button id="nextMonth"><i class="fas fa-chevron-right"></i></button>';
        html += '</div>';

        html += '<div class="calendar-grid">';
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        daysOfWeek.forEach(day => {
            html += `<div class="calendar-day-label">${day}</div>`;
        });

        const startingDay = firstDay.getDay();
        for (let i = 0; i < startingDay; i++) {
            html += '<div class="calendar-day inactive"></div>';
        }

        for (let i = 1; i <= lastDay.getDate(); i++) {
            const day = new Date(year, month, i);
            const dateString = day.toISOString().split('T')[0];
            const hasEvent = events[dateString] && events[dateString].length > 0;
            html += `<div class="calendar-day${hasEvent ? ' with-event' : ''}" data-date="${dateString}">${i}</div>`;
        }

        html += '</div>';
        calendarElement.innerHTML = html;

        // Event listeners
        document.getElementById('prevMonth').addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar();
        });

        document.getElementById('nextMonth').addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar();
        });

        document.querySelectorAll('.calendar-day').forEach(dayElement => {
            dayElement.addEventListener('click', () => {
                const selectedDate = dayElement.dataset.date;
                eventDateElement.textContent = `Events for ${new Date(selectedDate).toLocaleDateString()}`;
                eventForm.classList.add('visible');
                loadEvents(selectedDate);
            });
        });
    }

    function loadEvents(date) {
        eventListElement.innerHTML = '';
        const eventList = events[date] || [];
        eventList.forEach(event => {
            const eventItem = document.createElement('li');
            eventItem.textContent = event;
            eventListElement.appendChild(eventItem);
        });
    }

    addEventForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const eventName = eventNameInput.value.trim();
        const selectedDate = document.querySelector('.calendar-day.selected')?.dataset.date;
        if (eventName && selectedDate) {
            if (!events[selectedDate]) {
                events[selectedDate] = [];
            }
            events[selectedDate].push(eventName);
            loadEvents(selectedDate);
            eventNameInput.value = '';
        }
    });

    closeEventForm.addEventListener('click', () => {
        eventForm.classList.remove('visible');
    });

    renderCalendar();
});
