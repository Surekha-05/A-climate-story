const areas = document.querySelectorAll('area');

areas.forEach((area) => {
  area.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(`Clicked on ${area.alt}`);
    // Add your custom logic here
  });
});
const area = document.querySelector('area');
const tooltip = document.querySelector('.tooltip');

area.addEventListener('mouseover', () => {
  const placeName = area.getAttribute('alt');
  tooltip.textContent = placeName;
  tooltip.style.display = 'block';
});

area.addEventListener('mouseout', () => {
  tooltip.style.display = 'none';
});