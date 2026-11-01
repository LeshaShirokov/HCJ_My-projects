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
        plugins:{
            legend:{
                position:'bottom'
            }
        }
    }
});

const longProject = document.getElementById('long_project');

new Chart(longProject, {
    type: 'bar',
    data: {
        labels: ['До месяца', 'До 2-х месяцев', 'До 3-х месяцев', 'До 6-х месяцев', 'До года'],
        datasets: [{
            data: [12, 19, 8, 5, 14],
            backgroundColor: '#2980b9',
        }]
    },
    options:{
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