let bestillinger = [];

// Inputvalidering av alle feltene
function validering() {
    let finnesFeil = false;
    let film = document.getElementById("filmer");
    let antall = document.getElementById("antall");
    let fnavn = document.getElementById("fornavn");
    let enavn = document.getElementById("etternavn");
    let tlfnr = document.getElementById("telefonnr");
    let epost = document.getElementById("epost");

    if (!film.checkValidity()) {
        document.getElementById("filmFeil").innerHTML = film.validationMessage;
        finnesFeil = true;
    } else if (!antall.checkValidity()) {
        document.getElementById("antallFeil").innerHTML = antall.validationMessage;
        finnesFeil = true;
    } else if (!fnavn.checkValidity()) {
        document.getElementById("fornavnFeil").innerHTML = fnavn.validationMessage;
        finnesFeil = true;
    } else if (!enavn.checkValidity()) {
        document.getElementById("etternavnFeil").innerHTML = enavn.validationMessage;
        finnesFeil = true;
    } else if (!tlfnr.checkValidity()) {
        document.getElementById("telefonnrFeil").innerHTML = tlfnr.validationMessage + " (8 siffer)";
        finnesFeil = true;
    } else if (!epost.checkValidity()) {
        document.getElementById("epostFeil").innerHTML = epost.validationMessage;
        finnesFeil = true;
    }

    return finnesFeil;
}

// Skriver ut arrayet med bestillingsobjekter på en leselig måte
function skrivUt() {
    let ut = "";
    for (let bestilling of bestillinger) {
        ut += "Film: " + bestilling.valgtFilm + "<br>" +
            "Antall billetter: " + bestilling.antallBilletter + "<br>" +
            "Kunde: " + bestilling.kundeFnavn + " " + bestilling.kundeEnavn + "<br>" +
            "Telefonnr: " + bestilling.kundeTlf + "<br>" +
            "Epost: " + bestilling.kundeEpost + "<br><br>";
    }
    document.getElementById("alleBilletter").innerHTML = ut;
}

// Legger inn bestilling, ligger som onClick på "Kjøp billetter"-knappen
function leggInnBestilling() {
    // Fjerner eventuelle feilmeldinger
    let span = document.getElementsByTagName("span");
    for (let element of span) {
        element.innerHTML = "";
    }

    let feil = validering();
    // Hvis valideringen lykkes legges bestillingen inn i arrayet
    if (!feil) {
        let film = document.getElementById("filmer").value;
        let antall = document.getElementById("antall").value;
        let fnavn = document.getElementById("fornavn").value;
        let enavn = document.getElementById("etternavn").value;
        let tlfnr = document.getElementById("telefonnr").value;
        let epost = document.getElementById("epost").value;

        const bestilling = {
            valgtFilm: film,
            antallBilletter: antall,
            kundeFnavn: fnavn,
            kundeEnavn: enavn,
            kundeTlf: tlfnr,
            kundeEpost: epost
        };

        bestillinger.push(bestilling);
        // Skriver ut bestillingene
        skrivUt();
        // Nullstiller inputfeltene
        document.getElementById("bestillingForm").reset();
    }
}

// Tømmer arrayet og kaller skriv ut for å reflektere dette på skjermen
function slettBilletter() {
    bestillinger = [];
    skrivUt();
}