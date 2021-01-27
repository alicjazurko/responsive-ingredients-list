const values = [
    {
        name: 'Ananas',
        calories: 33,
        fat: 0,
        carbs: 11.8
    },
    {
        name: 'Kiwi',
        calories: 23,
        fat: 0.7,
        carbs: 11.8
    },
    {
        name: 'Jabłko',
        calories: 13,
        fat: 0.2,
        carbs: 8
    },
    {
        name: 'Pomarańcza',
        calories: 37,
        fat: 0,
        carbs: 11
    },
];

const valuesContainer = document.querySelector('.app--values');

const desktopViewport = window.matchMedia("screen and (min-width: 500px)") ;

const drawValues = (isDesktop) => {
    if(isDesktop) {
        drawDesktopValues();
    } else {
        drawMobileValues();
    }
}

const drawMobileValues = () => {
    valuesContainer.innerHTML = '';

    let list = document.createElement('ul');

    values.forEach(value => {
        let element = document.createElement('li');
        let name = document.createElement('div');
        name.innerHTML = `<strong>Nazwa: </strong> ${value.name}`;
        let calories = document.createElement('div');
        calories.innerHTML = `<strong>Kalorie: </strong> ${value.calories}`;
        let fat = document.createElement('div');
        fat.innerHTML = `<strong>Tłuszcze: </strong> ${value.fat}`;
        let carbs = document.createElement('div');
        carbs.innerHTML = `<strong>Węglowodany: </strong> ${value.carbs}`;

        element.appendChild(name);
        element.appendChild(calories);
        element.appendChild(fat);
        element.appendChild(carbs);

        list.appendChild(element);
    })

    valuesContainer.appendChild(list);
}

const drawDesktopValues = () => {
    valuesContainer.innerHTML = "";
    
    let table = document.createElement('table');
    
    let thead = document.createElement('thead');
    thead.innerHTML = '<tr><th>Nazwa składnika</th><th>kalorie</th><th>Tłuszcze</th><th>Węglowodany</th></tr>';
    
    let tbody = document.createElement('tbody');

    values.forEach(value => {
        let row = document.createElement('tr');
        row.innerHTML = `<td>${value.name}</td><td>${value.calories}</td><td>${value.fat}</td><td>${value.carbs}</td>`;
        tbody.appendChild(row);
    })

    table.appendChild(thead);
    table.appendChild(tbody);


    valuesContainer.appendChild(table);

}


drawValues(desktopViewport.matches);

// desktopViewport.addListener(isDesktop =>{
//     drawValues(isDesktop.ma)
// });

window.addEventListener('resize', (isDesktop) => {
    if(window.innerWidth < 500) {
        drawMobileValues()
    } else {
        drawDesktopValues();
    }
})