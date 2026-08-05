const TROPHY_REWARDS = {
    1: 10,
    2: 8,
    3: 6,
    4: 4,
    5: 2,
    6: 0,
    7: -2,
    8: -4,
    9: -5,
    10: -6
};

let matchTrophyAwarded = false;

function getTrophyReward(place) {
    return (
        TROPHY_REWARDS[place] ??
        0
    );
}

function ensureMatchResultBox() {
    const deathScreen =
        document.getElementById(
            "deathScreen"
        );

    if (!deathScreen) {
        return null;
    }

    let resultBox =
        document.getElementById(
            "matchResult"
        );

    if (resultBox) {
        return resultBox;
    }

    resultBox =
        document.createElement(
            "div"
        );

    resultBox.id =
        "matchResult";

    resultBox.style.padding =
        "12px 22px";

    resultBox.style.fontSize =
        "22px";

    resultBox.style.fontWeight =
        "900";

    resultBox.style.lineHeight =
        "1.5";

    resultBox.style.background =
        "#111827dd";

    resultBox.style.border =
        "4px solid #050912";

    resultBox.style.borderRadius =
        "12px";

    const returnButton =
        deathScreen.querySelector(
            ".return-button"
        );

    if (returnButton) {
        deathScreen.insertBefore(
            resultBox,
            returnButton
        );
    } else {
        deathScreen.appendChild(
            resultBox
        );
    }

    return resultBox;
}

function awardTrophiesForPlace(
    place
) {
    if (
        matchTrophyAwarded ||
        !player
    ) {
        return;
    }

    matchTrophyAwarded = true;

    const safePlace =
        Math.max(
            1,
            Math.min(
                10,
                Number(place) || 10
            )
        );

    const reward =
        getTrophyReward(
            safePlace
        );

    const result =
        addHeroTrophies(
            player.heroId,
            reward
        );

    const box =
        ensureMatchResultBox();

    if (!box) {
        return;
    }

    const sign =
        result.change > 0
            ? "+"
            : "";

    box.innerHTML =
        "Zajęte miejsce: <b>" +
        safePlace +
        "</b><br>" +
        "Pucharki: <b>" +
        sign +
        result.change +
        "</b><br>" +
        player.heroName +
        " ma teraz: <b>🏆 " +
        result.after +
        "</b>";
}

function resetMatchTrophies() {
    matchTrophyAwarded = false;

    const box =
        document.getElementById(
            "matchResult"
        );

    if (box) {
        box.innerHTML = "";
    }
}
