function getState() {
    const savedState =
        localStorage.getItem(
            "medievalArenaState"
        );

    let state;

    if (savedState) {
        try {
            state =
                JSON.parse(savedState);
        } catch (error) {
            console.error(
                "Nie udało się wczytać zapisu gry:",
                error
            );
        }
    }

    if (
        !state ||
        typeof state !== "object"
    ) {
        state = {
            tickets: 12,
            coins: 150,
            selected: "farmer",
            unlocked: ["farmer"],
            wins: 0,
            heroTrophies: {},
            lastReward: null
        };
    }

    state.tickets =
        Number(state.tickets) || 0;

    state.coins =
        Number(state.coins) || 0;

    state.selected =
        state.selected || "farmer";

    if (
        !Array.isArray(
            state.unlocked
        )
    ) {
        state.unlocked =
            ["farmer"];
    }

    if (
        !state.unlocked.includes(
            "farmer"
        )
    ) {
        state.unlocked.unshift(
            "farmer"
        );
    }

    state.unlocked =
        [...new Set(state.unlocked)];

    state.wins =
        Number(state.wins) || 0;

    if (
        !state.heroTrophies ||
        typeof state.heroTrophies !==
            "object" ||
        Array.isArray(
            state.heroTrophies
        )
    ) {
        state.heroTrophies = {};
    }

    BOHATEROWIE.forEach(
        function(hero) {
            const current =
                Number(
                    state.heroTrophies[
                        hero.id
                    ]
                );

            state.heroTrophies[
                hero.id
            ] =
                Number.isFinite(current)
                    ? Math.max(
                        0,
                        Math.floor(current)
                    )
                    : 0;
        }
    );

    state.lastReward =
        state.lastReward || null;

    localStorage.setItem(
        "medievalArenaState",
        JSON.stringify(state)
    );

    return state;
}

function saveState(state) {
    if (
        !state.heroTrophies ||
        typeof state.heroTrophies !==
            "object"
    ) {
        state.heroTrophies = {};
    }

    Object.keys(
        state.heroTrophies
    ).forEach(
        function(heroId) {
            state.heroTrophies[
                heroId
            ] =
                Math.max(
                    0,
                    Math.floor(
                        Number(
                            state
                                .heroTrophies[
                                heroId
                            ]
                        ) || 0
                    )
                );
        }
    );

    localStorage.setItem(
        "medievalArenaState",
        JSON.stringify(state)
    );
}

function getHero(heroId) {
    const hero =
        BOHATEROWIE.find(
            function(character) {
                return (
                    character.id ===
                    heroId
                );
            }
        );

    if (hero) {
        return hero;
    }

    return BOHATEROWIE[0];
}

function getHeroTrophies(heroId) {
    const state =
        getState();

    return Math.max(
        0,
        Number(
            state.heroTrophies[
                heroId
            ]
        ) || 0
    );
}

function setHeroTrophies(
    heroId,
    amount
) {
    const state =
        getState();

    state.heroTrophies[
        heroId
    ] =
        Math.max(
            0,
            Math.floor(
                Number(amount) || 0
            )
        );

    saveState(state);

    return state.heroTrophies[
        heroId
    ];
}

function addHeroTrophies(
    heroId,
    amount
) {
    const state =
        getState();

    const current =
        Number(
            state.heroTrophies[
                heroId
            ]
        ) || 0;

    const next =
        Math.max(
            0,
            current +
            Number(amount || 0)
        );

    state.heroTrophies[
        heroId
    ] =
        Math.floor(next);

    saveState(state);

    return {
        before: current,
        after:
            state.heroTrophies[
                heroId
            ],
        change:
            state.heroTrophies[
                heroId
            ] -
            current
    };
}

function updateTopbar() {
    const state =
        getState();

    document
        .querySelectorAll(
            "[data-tickets]"
        )
        .forEach(
            function(element) {
                element.textContent =
                    state.tickets;
            }
        );

    document
        .querySelectorAll(
            "[data-coins]"
        )
        .forEach(
            function(element) {
                element.textContent =
                    state.coins;
            }
        );

    document
        .querySelectorAll(
            "[data-wins]"
        )
        .forEach(
            function(element) {
                element.textContent =
                    state.wins;
            }
        );

    document
        .querySelectorAll(
            "[data-hero-trophies]"
        )
        .forEach(
            function(element) {
                const heroId =
                    element.dataset
                        .heroTrophies ||
                    state.selected;

                element.textContent =
                    getHeroTrophies(
                        heroId
                    );
            }
        );
}

document.addEventListener(
    "DOMContentLoaded",
    function() {
        updateTopbar();
    }
);
