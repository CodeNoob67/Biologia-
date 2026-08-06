function createDefaultState() {
    return {
        tickets: 12,
        coins: 150,

        selected: "farmer",
        unlocked: ["farmer"],

        wins: 0,
        lastReward: null,

        heroTrophies: {},
        heroGadgets: {},
        heroStarPowers: {}
    };
}

function migrateTeslaToMusician(state) {
    if (state.selected === "tesla") {
        state.selected = "muzyk";
    }

    if (!Array.isArray(state.unlocked)) {
        state.unlocked = ["farmer"];
    }

    state.unlocked = state.unlocked.map(function(heroId) {
        return heroId === "tesla"
            ? "muzyk"
            : heroId;
    });

    state.unlocked = [...new Set(state.unlocked)];

    if (
        state.heroTrophies &&
        state.heroTrophies.tesla !== undefined
    ) {
        if (state.heroTrophies.muzyk === undefined) {
            state.heroTrophies.muzyk =
                state.heroTrophies.tesla;
        }

        delete state.heroTrophies.tesla;
    }

    if (
        state.heroGadgets &&
        state.heroGadgets.tesla !== undefined
    ) {
        if (state.heroGadgets.muzyk === undefined) {
            state.heroGadgets.muzyk =
                state.heroGadgets.tesla;
        }

        delete state.heroGadgets.tesla;
    }

    if (
        state.heroStarPowers &&
        state.heroStarPowers.tesla !== undefined
    ) {
        if (state.heroStarPowers.muzyk === undefined) {
            state.heroStarPowers.muzyk =
                state.heroStarPowers.tesla;
        }

        delete state.heroStarPowers.tesla;
    }
}

function repairState(state) {
    const defaultState = createDefaultState();

    if (!state || typeof state !== "object") {
        state = defaultState;
    }

    if (!Number.isFinite(Number(state.tickets))) {
        state.tickets = defaultState.tickets;
    }

    if (!Number.isFinite(Number(state.coins))) {
        state.coins = defaultState.coins;
    }

    state.tickets = Math.max(0, Number(state.tickets));
    state.coins = Math.max(0, Number(state.coins));

    if (!Number.isFinite(Number(state.wins))) {
        state.wins = 0;
    }

    state.wins = Math.max(0, Number(state.wins));

    if (!Array.isArray(state.unlocked)) {
        state.unlocked = ["farmer"];
    }

    if (!state.heroTrophies) {
        state.heroTrophies = {};
    }

    if (!state.heroGadgets) {
        state.heroGadgets = {};
    }

    if (!state.heroStarPowers) {
        state.heroStarPowers = {};
    }

    migrateTeslaToMusician(state);

    const existingHeroIds = BOHATEROWIE.map(function(hero) {
        return hero.id;
    });

    state.unlocked = state.unlocked.filter(function(heroId) {
        return existingHeroIds.includes(heroId);
    });

    if (!state.unlocked.includes("farmer")) {
        state.unlocked.unshift("farmer");
    }

    if (!existingHeroIds.includes(state.selected)) {
        state.selected = "farmer";
    }

    if (!state.unlocked.includes(state.selected)) {
        state.selected = "farmer";
    }

    BOHATEROWIE.forEach(function(hero) {
        const trophies =
            Number(state.heroTrophies[hero.id]);

        state.heroTrophies[hero.id] =
            Number.isFinite(trophies)
                ? Math.max(0, Math.floor(trophies))
                : 0;
    });

    return state;
}

function getState() {
    const savedState =
        localStorage.getItem("medievalArenaState");

    let state;

    if (savedState) {
        try {
            state = JSON.parse(savedState);
        } catch (error) {
            console.error(
                "Nie udało się odczytać zapisu gry:",
                error
            );

            state = createDefaultState();
        }
    } else {
        state = createDefaultState();
    }

    state = repairState(state);

    saveState(state);

    return state;
}

function saveState(state) {
    const repairedState = repairState(state);

    localStorage.setItem(
        "medievalArenaState",
        JSON.stringify(repairedState)
    );
}

function getHero(heroId) {
    const convertedId =
        heroId === "tesla"
            ? "muzyk"
            : heroId;

    const hero = BOHATEROWIE.find(function(character) {
        return character.id === convertedId;
    });

    if (hero) {
        return hero;
    }

    return BOHATEROWIE[0];
}

function getTotalTrophies(state = getState()) {
    return BOHATEROWIE.reduce(function(total, hero) {
        return (
            total +
            Math.max(
                0,
                Number(state.heroTrophies[hero.id]) || 0
            )
        );
    }, 0);
}

function updateTopbar() {
    const state = getState();
    const totalTrophies = getTotalTrophies(state);

    document
        .querySelectorAll("[data-tickets]")
        .forEach(function(element) {
            element.textContent = state.tickets;
        });

    document
        .querySelectorAll("[data-coins]")
        .forEach(function(element) {
            element.textContent = state.coins;
        });

    document
        .querySelectorAll("[data-wins]")
        .forEach(function(element) {
            element.textContent = totalTrophies;
        });

    document
        .querySelectorAll("[data-total-trophies]")
        .forEach(function(element) {
            element.textContent = totalTrophies;
        });
}

document.addEventListener(
    "DOMContentLoaded",
    function() {
        updateTopbar();
    }
);
