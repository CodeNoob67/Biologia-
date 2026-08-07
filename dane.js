const BOHATEROWIE = [
    {
        id: "farmer", nazwa: "Farmer", ikona: "🧑‍🌾", rzadkosc: "startowy",
        moc: "Rzut widłami",
        opis: "Farmer rzuca widłami na krótki dystans. Co trzeci atak zadaje o 50% więcej obrażeń.",
        hp: 115, damage: 18, speed: 1.7, range: 330, cooldown: 650, ticketCost: 0
    },

    /* ALEJA PUCHARÓW — celowo zaraz po startowym */
    {
        id: "szaman", nazwa: "Szaman", ikona: "🧿", rzadkosc: "aleja", wymaganePuchary: 10,
        moc: "Duchowa fala", opis: "Tworzy małe niebieskie fale uderzeniowe jako swój podstawowy atak.",
        hp: 135, damage: 20, speed: 1.75, range: 520, cooldown: 620, ticketCost: 0
    },
    {
        id: "wiking", nazwa: "Wiking", ikona: "🪓", rzadkosc: "aleja", wymaganePuchary: 25,
        moc: "Ciężki topór", opis: "Ma mnóstwo życia i zadaje ogromne obrażenia. Atakuje na krótki dystans.",
        hp: 285, damage: 52, speed: 1.1, range: 175, cooldown: 980, ticketCost: 0
    },
    {
        id: "mag_ognia", nazwa: "Mag Ognia", ikona: "🔥", rzadkosc: "aleja", wymaganePuchary: 100,
        moc: "Strumień płomieni", opis: "Wysyła ogień na krótki dystans i szybko rani przeciwników.",
        hp: 125, damage: 24, speed: 1.65, range: 270, cooldown: 380, ticketCost: 0
    },
    {
        id: "mnich", nazwa: "Mnich", ikona: "🧘", rzadkosc: "aleja", wymaganePuchary: 250,
        moc: "Podwójna energia", opis: "Każdy atak Mnicha wysyła dwie fale energii jednocześnie.",
        hp: 165, damage: 22, speed: 1.75, range: 580, cooldown: 650, ticketCost: 0
    },
    {
        id: "mag_lodu", nazwa: "Mag Lodu", ikona: "❄️", rzadkosc: "aleja", wymaganePuchary: 500,
        moc: "Lodowa przemiana", opis: "Atakuje lodem i potrafi zamrażać przeciwników.",
        hp: 135, damage: 31, speed: 1.6, range: 610, cooldown: 720, ticketCost: 0
    },
    {
        id: "samuraj", nazwa: "Samuraj", ikona: "🥷", rzadkosc: "aleja", wymaganePuchary: 750,
        moc: "Podwójne cięcie", opis: "Jest bardzo szybki i wykonuje dwa krótkie cięcia mieczami.",
        hp: 180, damage: 36, speed: 2.35, range: 65, cooldown: 410, ticketCost: 0
    },
    {
        id: "centaur", nazwa: "Centaur", ikona: "🐎", rzadkosc: "aleja", wymaganePuchary: 1000,
        moc: "Eksplodująca strzała", opis: "Jest niezwykle szybki. Jego szerokie strzały wybuchają po trafieniu.",
        hp: 170, damage: 29, speed: 2.55, range: 780, cooldown: 460, ticketCost: 0
    },
    {
        id: "rycerz_na_koniu", nazwa: "Rycerz na koniu", ikona: "🏇", rzadkosc: "aleja", wymaganePuchary: 2000,
        moc: "Szarża",
        opis: "Bardzo szybki wojownik melee. Zadaje wysokie obrażenia, ale ma mało życia.",
        gadzetOpis: "Staje się o 25% szybszy na 5 sekund.",
        starPowerOpis: "Każdy atak ma 50% szans na zadanie o 25% większych obrażeń.",
        hp: 120, damage: 46, speed: 2.8, range: 78, cooldown: 520, ticketCost: 0
    },
    {
        id: "mag_ziemi", nazwa: "Mag Ziemi", ikona: "🪨", rzadkosc: "aleja", wymaganePuchary: 3500,
        moc: "Potrójny głaz",
        opis: "Rzuca trzema szerokimi głazami równolegle. Poza krzakami porusza się szybciej.",
        gadzetOpis: "Zamienia się w kulę ziemi i jest bardzo szybki przez 3 sekundy.",
        starPowerOpis: "Głazy z podstawowego ataku zatrzymują trafionego wroga na 0,2 sekundy.",
        hp: 175, damage: 32, speed: 1.75, range: 650, cooldown: 850, ticketCost: 0
    },
    {
        id: "paladyn", nazwa: "Paladyn", ikona: "⚜️", rzadkosc: "aleja", wymaganePuchary: 5000,
        moc: "Święte uderzenie",
        opis: "Działa podobnie do Rycerza, ale ma więcej życia i zadaje większe obrażenia.",
        gadzetOpis: "Tworzy szeroki ciemnoszaro-jasnoniebieski shockwave wokół siebie.",
        starPowerOpis: "Gdy życie spadnie poniżej 50%, otrzymuje tarczę redukującą obrażenia o 50%.",
        hp: 285, damage: 48, speed: 1.45, range: 90, cooldown: 680, ticketCost: 0
    },

    /* RZADKIE */
    {
        id: "rycerz", nazwa: "Rycerz", ikona: "🛡️", rzadkosc: "rzadki",
        moc: "Tarcza ostatniej szansy",
        opis: "Rycerz walczy z bliska. Gdy ma mało życia, jego tarcza pochłania 30% obrażeń.",
        hp: 205, damage: 31, speed: 1.4, range: 82, cooldown: 650, ticketCost: 8
    },
    {
        id: "lucznik", nazwa: "Łucznik", ikona: "🏹", rzadkosc: "rzadki",
        moc: "Błyskawiczna strzała",
        opis: "Łucznik atakuje z dużego dystansu. Co trzecia strzała porusza się znacznie szybciej.",
        hp: 145, damage: 30, speed: 1.7, range: 720, cooldown: 750, ticketCost: 12
    },

    /* BARDZO RZADKIE */
    {
        id: "ksiadz", nazwa: "Ksiądz", ikona: "⛪", rzadkosc: "bardzo_rzadki",
        moc: "Przywołanie ducha", opis: "Co trzy sekundy przywołuje słabszego ducha, który ściga przeciwników.",
        hp: 185, damage: 25, speed: 1.7, range: 300, cooldown: 700, ticketCost: 18
    },
    {
        id: "muzyk", nazwa: "Muzyk", ikona: "🎵", rzadkosc: "bardzo_rzadki",
        moc: "Fala dźwiękowa", opis: "Wysyła rozszerzające się fale dźwiękowe.",
        hp: 150, damage: 27, speed: 1.7, range: 620, cooldown: 720, ticketCost: 22
    },
    {
        id: "alchemik", nazwa: "Alchemik", ikona: "🧪", rzadkosc: "bardzo_rzadki",
        moc: "Losowa mikstura", opis: "Rzuca losowe mikstury o różnych efektach.",
        hp: 150, damage: 28, speed: 1.65, range: 600, cooldown: 850, ticketCost: 24
    },
    {
        id: "szermierz", nazwa: "Szermierz", ikona: "🤺", rzadkosc: "bardzo_rzadki",
        moc: "Wirujące ostrze", opis: "Podczas ruchu obraca mieczem i zadaje obrażenia pobliskim wrogom.",
        hp: 155, damage: 24, speed: 2.1, range: 100, cooldown: 450, ticketCost: 26
    },

    /* EPICKIE */
    {
        id: "goblin", nazwa: "Goblin", ikona: "👺", rzadkosc: "epicki",
        moc: "Desperacki atak", opis: "Szybki wojownik walczący z bliska.",
        hp: 105, damage: 28, speed: 2.2, range: 76, cooldown: 480, ticketCost: 30
    },
    {
        id: "golem", nazwa: "Golem", ikona: "🗿", rzadkosc: "epicki",
        moc: "Kamienna fala", opis: "Ma bardzo dużo życia i mocne ataki.",
        hp: 330, damage: 38, speed: 1.05, range: 350, cooldown: 950, ticketCost: 34
    },
    {
        id: "duch", nazwa: "Duch", ikona: "👻", rzadkosc: "epicki",
        moc: "Przenikanie", opis: "Może przechodzić przez ściany i szybko walczy w zwarciu.",
        hp: 90, damage: 40, speed: 2.25, range: 78, cooldown: 520, ticketCost: 36
    },

    /* MITYCZNE */
    {
        id: "czarodziej", nazwa: "Czarodziej", ikona: "🧙‍♂️", rzadkosc: "mityczny",
        moc: "Magiczna klątwa", opis: "Strzela potężnymi kulami magii.",
        hp: 145, damage: 39, speed: 1.7, range: 690, cooldown: 820, ticketCost: 42
    },
    {
        id: "wampir", nazwa: "Wampir", ikona: "🧛", rzadkosc: "mityczny",
        moc: "Rój nietoperzy", opis: "Szybki wojownik wysysający życie przeciwników.",
        hp: 135, damage: 32, speed: 1.65, range: 75, cooldown: 4000, ticketCost: 48
    },
    {
        id: "nekromanta", nazwa: "Nekromanta", ikona: "☠️", rzadkosc: "mityczny",
        moc: "Mroczna kula",
        opis: "Strzela mrocznymi kulami. Jest średnio szybki, ma przeciętne życie i dobry zasięg.",
        gadzetOpis: "Natychmiast przywołuje 3 szkielety, które ścigają przeciwników.",
        starPowerOpis: "Nekromanta leczy się o 15% obrażeń zadanych swoim podstawowym atakiem.",
        hp: 165, damage: 34, speed: 1.7, range: 650, cooldown: 780, ticketCost: 52
    },

    /* LEGENDARNE */
    {
        id: "krol", nazwa: "Król", ikona: "🤴", rzadkosc: "legendarny",
        moc: "Królewska salwa", opis: "Każdy atak Króla wystrzeliwuje trzy pociski jednocześnie.",
        hp: 155, damage: 32, speed: 1.5, range: 580, cooldown: 850, ticketCost: 55
    },
    {
        id: "wiedzma", nazwa: "Wiedźma", ikona: "🧙‍♀️", rzadkosc: "legendarny",
        moc: "Grad energii", opis: "Wystrzeliwuje bardzo małe i niezwykle szybkie kule energii.",
        hp: 105, damage: 7, speed: 2, range: 750, cooldown: 50, ticketCost: 60
    }
];

function getHero(id) {
    return BOHATEROWIE.find(function(hero) {
        return hero.id === id;
    }) || BOHATEROWIE[0];
}

