import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Mission =  async () => {

    const id = getHash();
    const mission = await getData(id);
    console.log(mission)
    const view = `
        <div class="Characters-inner">
            <article class="Character-card">
                <img src="${mission.links.patch.small}" alt="${mission.name}">
                <h2>${mission.name}</h2>
            </article>

            <article class="Characters-card">
                <h3>Nombre de la Mision:<span>${mission.name}</span></ </h3>
                <h3>Fecha y hora de despegue (UTC): <span>${mission.date_utc}</span></</h3>
                <h3>Numero de Vuelos: <span>${mission.flight_number}</span></h3>
                <h3>¿Falló?: <span>${mission.success}</span></</h3>
                <h3>¿Qué falló?: <span>${mission.failures.reason}</span></</h3>
                <h3>Detalle del fallo: <span>${mission.details}</span></</h3>
            </article>
        </div> 
    `
    return view
};
export default Mission;