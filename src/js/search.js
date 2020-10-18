
const input = document.querySelector(".input");
const optionsContainer = document.querySelector(".options-container");
const reposContainer = document.querySelector(".repos");
const search = document.querySelector(".search");

document.addEventListener("DOMContentLoaded", checkStorage);
window.addEventListener("storage", checkStorage);

input.addEventListener('input', debounce(searchRepos, 1000));
optionsContainer.addEventListener('click', addToFavorite);
reposContainer.addEventListener('click', removeRepo);

let reposFounded = [];

function searchRepos(ev) {
    const value = ev.target.value;
    if (value === "") {
        clearNode(optionsContainer);
        return;
    }

    const url = new URL("https://api.github.com/search/repositories");
    url.searchParams.set('q', value);
    search.classList.toggle("search--loader");
    fetch(url)
    .then(data => data.json())
    .then(dataObj => {
        clearNode(optionsContainer);
        const repos = dataObj.items
        .filter((el, i) => i < 5)
        .map(el => ({id: el.id, name: el.full_name, owner: el.owner.login, stars: el.stargazers_count}));

        reposFounded = [...repos];
        renderOptions(repos);
        search.classList.toggle("search--loader");
    })
    .catch(e => { 
        search.classList.toggle("search--loader");
        alert("Сервис недоступен по причине: " + e.message)
    });
}

function renderOptions(data) {
    data.forEach(el => {
        const option = createOption(el);
        optionsContainer.prepend(option);
    });
}

function createOption(el) {
    const option = document.createElement("div");
    option.classList.add("option");
    option.textContent = el.name;
    option.dataset.id = el.id;
    return option;
}

function addToFavorite(ev) {
    if(ev.target.dataset.id === undefined) return;
    input.value = '';
    clearNode(optionsContainer);
    const repoData = reposFounded.find(x => x.id === +ev.target.dataset.id);
    addFavo(repoData);
}

function createRepo(repoData) {

    const repo = document.createElement("div");
    repo.classList.add("repo");
    repo.dataset.id = repoData.id;

    const repoInfo = document.createElement("div");
    repoInfo.classList.add("repo__info");
    repo.append(repoInfo);

    const repoDeleteBnt = document.createElement("div");
    repoDeleteBnt.className = "repo__btn-close btn btn--theme_delete";
    repo.append(repoDeleteBnt);

    const parName = document.createElement("p");
    parName.classList.add("repo__name");
    parName.textContent = `Name: ${repoData.name}`;
    repoInfo.append(parName);

    const parOwner = document.createElement("p");
    parOwner.classList.add("repo__owner");
    parOwner.textContent = `Owner: ${repoData.owner}`;
    repoInfo.append(parOwner);

    const parStars = document.createElement("p");
    parStars.classList.add("repo__stars");
    parStars.textContent = `Stars: ${repoData.stars}`;
    repoInfo.append(parStars);

    return repo;
}

function removeRepo(ev) {
    if (!ev.target.classList.contains("btn--theme_delete")) return;
    const repo = ev.target.closest(".repo");
    if (!repo) return;
    deleteFavo(+repo.dataset.id);
    repo.remove();
}

function clearNode(node) {
    const options = [...node.childNodes];
    options.forEach(el => node.lastChild.remove());
}

function debounce(fn, debounceTime) {
    let idTimeout = 0;
    return function(...args) {
        clearTimeout(idTimeout);
        idTimeout = setTimeout(() => fn.apply(this, args), debounceTime);
    }
};

function checkStorage() {
    const repos = localStorage.getItem("favoritesRepos");
    if (!repos) return;
    clearNode(reposContainer);
    JSON.parse(repos).forEach(el => {
        const repo = createRepo(el);
        reposContainer.append(repo);
    })
}

function addFavo(repo) {
    let storageRepos = JSON.parse(localStorage.getItem("favoritesRepos"));
    if(!storageRepos) storageRepos = [];
    const allRepos = [...storageRepos, repo];
    localStorage.setItem("favoritesRepos", JSON.stringify(allRepos));
    checkStorage();
}

function deleteFavo(id) {
    let storageRepos = JSON.parse(localStorage.getItem("favoritesRepos"));
    const allRepos = storageRepos.filter(el => el.id !== id);
    localStorage.setItem("favoritesRepos", JSON.stringify(allRepos));
    checkStorage();
}