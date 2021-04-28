// l'enum è un set di costanti, non riassegnabili quindi
// per poter accedere al singolo valore
// usiamo la dot notation
var Provincie;
(function (Provincie) {
    Provincie["ROMA"] = "rm";
    Provincie["MILANO"] = "mi";
    Provincie["NAPOLI"] = "na";
    Provincie["TORINO"] = "to";
})(Provincie || (Provincie = {}));
console.log(Provincie.ROMA);
