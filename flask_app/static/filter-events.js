// filter-events.js

const eventNameFilter = document.querySelector('#event-name-filter');

eventNameFilter.addEventListener('input', function() {
const filterValue = this.value.toLowerCase();
filterEvents(filterValue);
});

function filterEvents(filterValue) {
const events = document.querySelectorAll('.results table tr');
events.forEach(function(event) {
    const eventName = event.querySelector('td:nth-child(2)').textContent.toLowerCase();
    if (eventName.indexOf(filterValue) > -1) {
    event.style.display = '';
    } else {
    event.style.display = 'none';
    }
});
}
