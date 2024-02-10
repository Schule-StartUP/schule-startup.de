const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");


//Toggle the navbar menu on click Open/Close
menuBtn.addEventListener("click", () => {
    menu.classList.toggle('nav-toggle');
});

//Get the current year and add it into the HTML 
document.querySelector(".year").innerHTML = new Date().getFullYear();

document.querySelector(".inputbtn").addEventListener("click", () => {

    var input = document.querySelector(".inputBox-input").value

    Email.send({
        SecureToken : "97ffdc8c-230a-4ccf-b4a6-364fa2a6cf12",
        To : input,
        From : "schule.startup@outlook.de",
        Subject : "Informationen für die Teilnahme",
        Body : "Sehr geehrte Teilnehmende, <br>\
        auf unser Website findet ihr eine Vorlage für euren Businessplan. Beachtet bei der Bearbeitung bitte folgende Dinge: <br><br>\
        • Formalia:  <br>\
        Arial, 11pt, Zeilenabstand 1,5    <br><br>\
        • Mehr ist nicht immer besser:    <br>\
        Achtet darauf, Informationen präzise darzustellen und darauf, euch nicht in Nebensächlichkeiten zu verlieren. Dennoch sollten alle wichtigen Punkte beschrieben werden.    <br><br>\
        • Struktur:     <br>\
        Die Übersichtlichkeit ist beim Businessplan sehr wichtig. Achtet darauf, dass ihr Absätze       \
        o.ä. sinnvoll einsetzt, sodass die Jurory eure Gedankengänge gut nachvollziehen kann.       <br><br>\
        • Quellen:            <br>\
        Nutzt nach Möglichkeit Quellen, um eure Aussagen zu stützen. Hierdurch gewinnt euer         \
        Businessplan an Überzeugungskraft.        <br><br>\
        • Ausdruck:          <br><br>\
        Mit eurer Sprache steigt und fällt die Qualität eures Business-Plans. Achtet darauf, euch fachlich korrekt auszudrücken, um einen möglichst angenehmen Lesefluss zu erzeugen.  <br><br>\
        • Fachkenntnis:         <br>\
        Die Jury sollte den Eindruck vermittelt bekommen, dass ihr Ahnung von dem Thema habt. Eure Expertise könnt ihr \
        sowohl durch die korrekte Anwendung von Fachsprache als auch durch passende Quellen unter Beweis stellen.     <br><br>\
        • Befragt Dritte:      <br>\
        Nachdem ihr euer Konzept erstmals aufgeschrieben habt, hilft es immer, auch andere nach Feedback zu fragen. \
        Dafür wendet euch je nach Möglichkeit an Lehrkräfte, Freunde oder Eltern. <br><br>\
        Wir wünschen viel Erfolg bei der Planung eurer Idee.",
    })
    document.querySelector(".inputBox-input").value = "";
    
});