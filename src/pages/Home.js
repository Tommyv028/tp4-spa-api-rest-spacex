import getData from '../utils/getData';

const Home =  async () => {

    const missions = await getData();

    const view =  `
        <div class="Characters">
        ${missions.map(mission => `
        <article class="Characters-item">
            <a href="#/${mission.id}/">
            <img src="${mission.links.patch.small}" alt="${mission.name}">
            <h2>${mission.name}</h2>
            </a>
        </article>
                `).join('') }
        </div  
            `
    return view;
}

export default Home;