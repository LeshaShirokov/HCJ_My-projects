// Кнопка гамбургера для меню
const menuToggle = document.querySelector('.menu-toggle');
const navMenu =  document.querySelector('.nav-menu');

// Функия показа/скрытия меню при нажатии на кнопку
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Функция скрытия меню при переходе по ссылке
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
    })
});

// Диаграмма распределения проектов по типу
const typeProject = document.getElementById('type_project');

new Chart(typeProject,{
    type: 'doughnut',
    data:{
        labels: ['Одностраничники','Квизы','VK-боты','Блоги'],
        datasets: [{
            data:[20,15,18,5],
            borderWidth: 0
        }]
    },
    options:{
        cutout: '75%',
        maintainAspectRatio: false,
        responsive: true,
        plugins:{
            legend:{
                position:'bottom'
            }
        }
    }
});

// Диаграмма распределения проектов по продолжительности
const longProject = document.getElementById('long_project');

const longChart = new Chart(longProject, {
    type: 'bar',
    data: {
        labels: ['До месяца', 'До 2-х месяцев', 'До 3-х месяцев', 'До 6-х месяцев', 'До года'],
        datasets: [{
            data: [12, 19, 8, 5, 14],
            backgroundColor: '#2980b9',
        }]
    },
    options:{
        responsive: true,
        maintainAspectRatio: false,
        plugins:{
            legend:{
                display: false
            }  
        },
        scales:{
            x:{
                display: true,          
                grid: {
                    display: false     
                },
                border: {
                    display: false
                }
            },
            y:{
                display: false,
            },
        }
    }
});

// Обновление цвета диаграммы при переключение темы

function chartLongUpdate(theme)
{
    let chartColor = theme === 'dark' ? '#4a9eff' : '#2980b9';
    longChart.data.datasets[0].backgroundColor = chartColor;
    longChart.update();
}

// Переключение темы

const themeToggle = document.getElementById('themeToggle');
let currentTheme = localStorage.getItem('theme') || 'light';

// Функция смены иконки при переключении темы

function applyTheme(theme){
    document.documentElement.setAttribute('data-theme', theme);
    currentTheme = theme;
    themeToggle.innerHTML = theme === 'dark'
    ? `
        <svg class="theme-icon" viewBox="0 0 24 24"
        fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round">
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2"/>
            <path d="M12 20v2"/>
            <path d="m4.93 4.93 1.42 1.42"/>
            <path d="m17.65 17.65 1.42 1.42"/>
            <path d="M2 12h2"/>
            <path d="M20 12h2"/>
            <path d="m6.35 17.65-1.42 1.42"/>
            <path d="m19.07 4.93-1.42 1.42"/>
        </svg>
    `
    :`
        <svg class="theme-icon" viewBox="0 0 24 24"
        fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round">
            <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z"/>
        </svg>
    `;
    chartLongUpdate(theme);
}
applyTheme(currentTheme)

// Переключение темы
themeToggle.addEventListener('click', () => {
    const newTheme = currentTheme === 'light' ? 'dark' :'light';
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
});
