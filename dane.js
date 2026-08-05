const BOHATEROWIE = [
    {
        id: "farmer",
        nazwa: "Farmer",
        ikona: "🧑‍🌾",
        rzadkosc: "startowy",
        moc: "Wzmocnione widły",
        opis:
            "Farmer walczy na krótkim dystansie. Co trzeci atak zadaje 50% więcej obrażeń.",

        hp: 115,
        damage: 18,
        speed: 3.4,
        range: 330,
        cooldown: 650,

        ticketCost: 0
    },

    {
        id: "rycerz",
        nazwa: "Rycerz",
        ikona: "🛡️",
        rzadkosc: "rzadki",
        moc: "Ostatnia tarcza",
        opis:
            "Rycerz walczy wręcz. Gdy ma mało życia, jego tarcza pochłania 30% otrzymywanych obrażeń.",

        hp: 205,
        damage: 31,
        speed: 2.8,
        range: 88,
        cooldown: 650,

        ticketCost: 8
    },

    {
        id: "lucznik",
        nazwa: "Łucznik",
        ikona: "🏹",
        rzadkosc: "rzadki",
        moc: "Błyskawiczna strzała",
        opis:
            "Łucznik atakuje z dużego dystansu. Co trzecia strzała porusza się znacznie szybciej.",

        hp: 145,
        damage: 30,
        speed: 3.4,
        range: 720,
        cooldown: 750,

        ticketCost: 12
    },

    {
        id: "goblin",
        nazwa: "Goblin",
        ikona: "👺",
        rzadkosc: "epicki",
        moc: "Desperacki atak",
        opis:
            "Goblin jest szybkim wojownikiem walczącym wręcz. Poniżej 50% życia zadaje 25% więcej obrażeń.",

        hp: 105,
        damage: 28,
        speed: 4.4,
        range: 76,
        cooldown: 480,

        ticketCost: 18
    },

    {
        id: "golem",
        nazwa: "Golem",
        ikona: "🗿",
        rzadkosc: "epicki",
        moc: "Kamienna fala",
        opis:
            "Golem jest bardzo wytrzymały, ale powolny. Co piąty atak tworzy falę uderzeniową.",

        hp: 330,
        damage: 38,
        speed: 2.1,
        range: 350,
        cooldown: 950,

        ticketCost: 26
    },

    {
        id: "czarodziej",
        nazwa: "Czarodziej",
        ikona: "🧙‍♂️",
        rzadkosc: "mityczny",
        moc: "Magiczna klątwa",
        opis:
            "Co czwarty atak Czarodzieja nakłada klątwę. Przeklęty przeciwnik przez 3 sekundy otrzymuje 20% więcej obrażeń.",

        hp: 145,
        damage: 39,
        speed: 3.4,
        range: 690,
        cooldown: 820,

        ticketCost: 34
    },

    {
        id: "krol",
        nazwa: "Król",
        ikona: "🤴",
        rzadkosc: "legendarny",
        moc: "Potrójny królewski atak",
        opis:
            "Król przy każdym ataku wystrzeliwuje trzy pociski jednocześnie.",

        hp: 155,
        damage: 32,
        speed: 3,
        range: 580,
        cooldown: 850,

        ticketCost: 42
    },

    {
        id: "wiedzma",
        nazwa: "Wiedźma",
        ikona: "🧙‍♀️",
        rzadkosc: "legendarny",
        moc: "Magiczny strumień",
        opis:
            "Wiedźma strzela bez przerwy małymi kulami energii. Pociski poruszają się ekstremalnie szybko.",

        hp: 105,
        damage: 7,
        speed: 4,
        range: 750,
        cooldown: 0,

        ticketCost: 50
    }
];
