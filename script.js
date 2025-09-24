// Массив с городами и датами туров
const tourDates = [
    { city: "Москва", date: "1 ноября 2025" },
    { city: "Санкт-Петербург", date: "3 ноября 2025" },
    { city: "Екатеринбург", date: "5 ноября 2025" },
    { city: "Новосибирск", date: "7 ноября 2025" },
    { city: "Краснодар", date: "10 ноября 2025" },
    { city: "Казань", date: "12 ноября 2025" },
    { city: "Волгоград", date: "14 ноября 2025" },
    { city: "Сочи", date: "16 ноября 2025" },
    { city: "Ростов-на-Дону", date: "18 ноября 2025" },
    { city: "Самара", date: "20 ноября 2025" },
    { city: "Воронеж", date: "22 ноября 2025" },
    { city: "Белгород", date: "24 ноября 2025" }
];

// Функция для отображения городов и дат тура на странице
function displayTourDates() {
    const citiesList = document.getElementById('cities-list');
    tourDates.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${item.city}</span>
            <span class="date">${item.date}</span>
        `;
        citiesList.appendChild(listItem);
    });
}

// Запуск отображения туров
displayTourDates();
