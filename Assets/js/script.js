/* CALENDÁRIO */

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

/* BOTÃO PREV/NEXT CALENDÁRIO */

prevMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
});

nextMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
});

updateCalendar();

/* CHECKBOK */

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

/* SELEÇÃO DO HORÁRIO */

const horas = document.querySelectorAll("#hora");
const resultado_hora = document.querySelector("#resultado_hora");

horas.forEach(hora => {
    hora.addEventListener("click", () => {
        resultado_hora.textContent = hora.textContent;
        horas.forEach(h => h.classList.remove("ativa")); // Remove a classe "ativa" de todas as horas
        hora.classList.add("ativa"); // Adiciona a classe "ativa" à hora clicada
    });
});

/* ATIVAÇÃO DO LINK */

const listaLinks = document.querySelectorAll(".lista-link");
const sections = document.querySelectorAll("section");

listaLinks.forEach((link, index) => {
    link.addEventListener("click", () => {
        sections[index].scrollIntoView({ behavior: "smooth" });
    });
});

window.addEventListener("scroll", () => {
    let fromTop = window.scrollY;

    listaLinks.forEach((link, index) => {
        const section = sections[index];
        if (
            section.offsetTop <= fromTop + 10 &&
            section.offsetTop + section.offsetHeight > fromTop + 10
        ) {
            listaLinks.forEach((link) => link.classList.remove("active-link"));
            listaLinks[index].classList.add("active-link");
        } else {
            listaLinks[index].classList.remove("active-link");
        }
    });
});

/* JANELA MODAL */

const openModalButton = document.getElementById("open-modal");
const modal = document.getElementById("myModal");
const closeModal = document.getElementById("close-modal");

openModalButton.addEventListener("click", () => {
    modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

 /* MENU RESPONSIVO */
