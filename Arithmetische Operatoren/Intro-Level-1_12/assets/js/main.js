// : arithmetische Operatoren (Multiplikation, Inkrementierung, Dekrementierung) und die Reihenfolge der Berechnungen durch Verwendung von Klammern ()

let score = 5 + 5 *10;
console.log('Ergebnis '+ score);

let score1 = (5+5)* 10;
console.log('Ergebnis ' + score1);

let score2 = 0;
score2 = score2 +10;
console.log('Ergebnis ' + score2);
score2 += 10;
console.log('Ergebnis ' + score2);

let zahl = 1;
zahl = zahl +1;
zahl += 1;

zahl++;
console.log('increment ' + zahl);

zahl--;
console.log('decrement ' + zahl);
