const API = [
    {
        massage1: 'Comece seu diário de bordo desta jornada',
        massage2: 'Registre como está se sentindo.'
    },
    {
        massage1: 'Comece seu diário de bordo desta jornada',
        massage2: 'Registre como está se sentindo.'
    },
    {
        massage1: 'Comece seu diário de bordo desta jornada',
        massage2: 'Registre como está se sentindo.'
    },
    {
        massage1: 'Comece seu diário de bordo desta jornada',
        massage2: 'Registre como está se sentindo.'
    },
    {
        massage1: 'Comece seu diário de bordo desta jornada',
        massage2: 'Registre como está se sentindo.'
    },
    {
        massage1: 'Comece seu diário de bordo desta jornada',
        massage2: 'Registre como está se sentindo.'
    }
]

const createBlock = ``

const $sectionMetas = document.querySelector('.sectionMetas')

for (let c = 0; c <= API.length - 1; c++) {
    $sectionMetas.innerHTML += `
        <div class="metas meats1">
            <h2 class="massage1">${API[c].massage1}</h2>
            <p class="massage2">${API[c].massage2}</p>
        </div>`;
}
