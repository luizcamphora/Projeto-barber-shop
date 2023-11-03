const calendar = document.getElementById('calendar');
const result = document.getElementById('result');
const prevMonthButton = document.getElementById('prevMonth');
const nextMonthButton = document.getElementById('nextMonth');
const currentMonthYear = document.getElementById('currentMonthYear');

let currentDate = new Date();
let selectedDay = null;

function updateCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    calendar.innerHTML = '';
    const monthYearString = currentDate.toLocaleString('pt-BR', { year: 'numeric', month: 'long' });
    currentMonthYear.textContent = monthYearString;

    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyDay = document.createElement('div');
        calendar.appendChild(emptyDay);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const dayElement = document.createElement('div');
        dayElement.textContent = day;
        dayElement.classList.add('day');

        dayElement.addEventListener('click', () => {
            // Remove a classe 'selected' do dia anteriormente selecionado
            if (selectedDay) {
                selectedDay.classList.remove('selected');
            }

            // Adiciona a classe 'selected' ao dia clicado
            dayElement.classList.add('selected');
            selectedDay = dayElement;

            // Quando um dia é clicado, exibe a data na div 'result' em português
            const selectedDate = date.toLocaleString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
            result.textContent = selectedDate;
        });

        calendar.appendChild(dayElement);
    }
}

prevMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
});

nextMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
});

updateCalendar();


const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const resultado = document.getElementById('resultado');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        resultado.innerHTML = ''; // Limpa o conteúdo anterior

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const texto = checkbox.getAttribute('data-text');
                const paragrafo = document.createElement('p');
                paragrafo.textContent = texto;
                resultado.appendChild(paragrafo);
            }
        });
    });
});
