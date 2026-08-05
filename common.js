function getState() {
    const savedState = localStorage.getItem("medievalArenaState");

    if (savedState) {
        return JSON.parse(savedState);
    }

    const newState = {
        tickets: 12,
        coins: 150,
        selected: "rycerz",
        unlocked: ["rycerz"],
        wins: 0,
        lastReward: null
    };

    localStorage.setItem(
        "medievalArenaState",
        JSON.stringify(newState)
    );

    return newState;
}

function saveState(state) {
    localStorage.setItem(
        "medievalArenaState",
        JSON.stringify(state)
    );
}

function getHero(heroId) {
    const hero = BOHATEROWIE.find(function(character) {
        return character.id === heroId;
    });

    if (hero) {
        return hero;
    }

    return BOHATEROWIE[0];
}

function updateTopbar() {
    const state = getState();

    document.querySelectorAll("[data-tickets]").forEach(function(element) {
        element.textContent = state.tickets;
    });

    document.querySelectorAll("[data-coins]").forEach(function(element) {
        element.textContent = state.coins;
    });

    document.querySelectorAll("[data-wins]").forEach(function(element) {
        element.textContent = state.wins;
    });
}

document.addEventListener("DOMContentLoaded", function() {
    updateTopbar();
});
