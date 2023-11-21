document.addEventListener('DOMContentLoaded', () => {
  getAthletesInfos()
  getSwimmingStylesInfos()
})

async function getAthletesInfos() {
  const response = await fetch('http://localhost:3000/athletes')
  const athletes = response.json();
}

async function getSwimmingStylesInfos() {
  await fetch('http://localhost:3000/swimmingStyles') // URL from json-server end point
  .then(data => data.json())
  .then(result => {
    createHeaderLine(result);
  })
}

function createHeaderLine(swimmingStyles) {
  const tableHeaderRow = document.querySelector('.table-header-row');
  swimmingStyles.forEach(swimmingStyle => {
    const th = document.createElement('th')
    th.innerHTML = `${swimmingStyle.name} - ${swimmingStyle.distance}m`
    tableHeaderRow.appendChild(th)
  });
}