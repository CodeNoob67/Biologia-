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
            "Rycerz walczy wręcz. Gdy ma mało życia, jego tarcza pochłania 30% obrażeń.",
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
            "Łucznik strzela z dużego dystansu. Co trzecia strzała porusza się znacznie szybciej.",
        hp: 145,
        damage: 30,
        speed: 3.4,
        range: 720,
        cooldown: 750,
        ticketCost: 12
    },

    {
        id: "ksiadz",
        nazwa: "Ksiądz",
        ikona: "⛪",
        rzadkosc: "bardzo-rzadki",
        moc: "Przywołanie ducha",
        opis:
            "Co 3 sekundy przywołuje słabszego Ducha, który ściga przeciwników.",
        hp: 185,
        damage: 25,
        speed: 3.4,
        range: 300,
        cooldown: 700,
        ticketCost: 16
    },

    {
        id: "muzyk",
        nazwa: "Muzyk",
        ikona: "🎵",
        rzadkosc: "bardzo-rzadki",
        moc: "Fala dźwiękowa",
        opis:
            "Muzyk strzela rozszerzającymi się falami dźwiękowymi. Co piąta fala jest żółtym Ultra i zatrzymuje trafionego przeciwnika na 1 sekundę.",
        hp: 150,
        damage: 27,
        speed: 3.4,
        range: 620,
        cooldown: 720,
        ticketCost: 20
    },

    {
        id: "alchemik",
        nazwa: "Alchemik",
        ikona: "🧪",
        rzadkosc: "bardzo-rzadki",
        moc: "Losowa mikstura",
        opis:
            "Rzuca losowymi miksturami: leczącą, wybuchową, zatrzymującą albo przyspieszającą.",
        hp: 150,
        damage: 28,
        speed: 3.3,
        range: 600,
        cooldown: 850,
        ticketCost: 24
    },

    {
        id: "szermierz",
        nazwa: "Szermierz",
        ikona: "⚔️",
        rzadkosc: "bardzo-rzadki",
        moc: "Wirujące ostrze",
        opis:
            "Nie ma zwykłego ataku. Podczas ruchu obraca się z mieczem i automatycznie zadaje obrażenia pobliskim przeciwnikom.",
        hp: 155,
        damage: 24,
        speed: 4.2,
        range: 105,
        cooldown: 450,
        ticketCost: 28
    },

    {
        id: "goblin",
        nazwa: "Goblin",
        ikona: "👺",
        rzadkosc: "epicki",
        moc: "Desperacki atak",
        opis:
            "Goblin walczy wręcz. Poniżej 50% życia zadaje 25% więcej obrażeń.",
        hp: 105,
        damage: 28,
        speed: 4.4,
        range: 76,
        cooldown: 480,
        ticketCost: 30
    },

    {
        id: "golem",
        nazwa: "Golem",
        ikona: "🗿",
        rzadkosc: "epicki",
        moc: "Kamienna fala",
        opis:
            "Co piąty atak Golema tworzy falę uderzeniową zadającą obrażenia pobliskim wrogom.",
        hp: 330,
        damage: 38,
        speed: 2.1,
        range: 350,
        cooldown: 950,
        ticketCost: 34
    },

    {
        id: "duch",
        nazwa: "Duch",
        ikona: "👻",
        rzadkosc: "epicki",
        moc: "Przenikanie",
        opis:
            "Duch walczy wręcz i może przechodzić przez ściany oraz wodę.",
        hp: 90,
        damage: 40,
        speed: 4.5,
        range: 78,
        cooldown: 520,
        ticketCost: 38
    },

    {
        id: "czarodziej",
        nazwa: "Czarodziej",
        ikona: "🧙‍♂️",
        rzadkosc: "mityczny",
        moc: "Magiczna klątwa",
        opis:
            "Co czwarty atak nakłada klątwę. Przeklęty przeciwnik otrzymuje więcej obrażeń.",
        hp: 145,
        damage: 39,
        speed: 3.4,
        range: 690,
        cooldown: 820,
        ticketCost: 42
    },

    {
        id: "wampir",
        nazwa: "Wampir",
        ikona: "🧛",
        rzadkosc: "mityczny",
        moc: "Nocny rój",
        opis:
            "Co 4 sekundy może zmienić się w szybki rój nietoperzy, przenikać przez ściany i leczyć się za zadane obrażenia.",
        hp: 135,
        damage: 32,
        speed: 3.3,
        range: 75,
        cooldown: 4000,
        ticketCost: 46
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
        ticketCost: 52
    },

    {
        id: "wiedzma",
        nazwa: "Wiedźma",
        ikona: "🧙",
        rzadkosc: "legendarny",
        moc: "Magiczny strumień",
        opis:
            "Wiedźma bardzo szybko strzela małymi złotymi kulami energii.",
        hp: 105,
        damage: 7,
        speed: 4,
        range: 750,
        cooldown: 50,
        ticketCost: 58
    }
];
