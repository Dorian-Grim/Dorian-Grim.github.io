const e=[{questionNumber:"1.",question:"O bază de date reprezintă:",answers:["Un ansamblu de posturi de lucru, fişiere şi unităţi de prelucrare","Un ansamblu de articole secvenţiale accesate direct","Un ansamblu de înregistrări accesate în paralel","Un ansamblu integrat de înregistrări sau de fişiere interconectate în mod logic","Suportul pentru înregistrarea datelor"],correct_answers:[4]},{questionNumber:"2.",question:"Depozitul de date reprezintă:",answers:["O colecţie de informaţii privind un sector dintr-o întreprindere sau o firmă","O bază de date împreună cu SGBD-ul asociat","O colecţie de date organizate secvenţial","O bază de date special concepută prin agregarea tuturor datelor dintr-o organizaţie sau întreprindere, în vederea sprijinirii procesului de luare a deciziilor","O bibliotecă de informaţii privind un anumit sector economic"],correct_answers:[4]},{questionNumber:"3.",question:"Nivelul fizic de abstractizare a datelor permite:",answers:["Utilizarea concretă a posibilităţilor SGBD-ului","Proiectarea dicţionarului de date","Asigurarea securităţii datelor","Automatizarea operaţiilor de întreţinere şi dezvoltare a programelor","Descrierea structurii sub care datele se regăsesc pe suportul de memorare"],correct_answers:[5]},{questionNumber:"4.",question:"Când se recomandă să se introducă datele într-o baza de date?",answers:["După crearea fiecărei tabele în parte","După crearea tuturor tabelelor şi definirea restricţiilor","După crearea tuturor tabelelor","Oricând","Datele sunt introduse de către administrator. Utilizatorii doar interogează baza de date"],correct_answers:[2]},{questionNumber:"5.",question:"Care dintre următoarele enunţuri caracterizează modelul relaţional?",answers:["Este singurul model în care structura datelor este definită prin normalizare","Asigură independenţa dintre date şi prelucrari","Este fundamentat pe teoria matematică a relaţiilor","Respectă restricţiile referenţiale","Trebuie să existe cel puţin o cheie secundară"],correct_answers:[3]},{questionNumber:"6.",question:"Intersecţia a două relaţii:",answers:["Are ca rezultat o relaţie cu un număr dublu de linii","Are ca rezultat o relaţie cu un număr de două ori mai mic de linii","Este o operaţie unară","Cere ca acestea sa aibă aceeaşi schemă","Va avea ca rezultat o relaţie cu gradul egal cu suma gradelor relaţiilor iniţiale"],correct_answers:[4]},{questionNumber:"7.",question:`Se dă tabelul:
ANGAJATI (CodAngaj, Nume, DataAngajare, Compartiment, Profesia, Salariu)
Care dintre următoarele instrucţiuni (Transact) SQL permite afişarea numărului de salariaţi pentru fiecare compartiment care incepe cu litera "J"?`,answers:[`SELECT COUNT(CodAngajat) AS Numar, Compartiment FROM ANGAJATI
WHERE Compartiment LIKE ‘J%’ GROUP BY Compartiment`,`SELECT CodAngajat, Nume, Compartiment FROM ANGAJATI WHERE Nume
LIKE ‘J%’`,`SELECT COUNT(CodAngajat) AS Numar, Nume, Compartiment
FROM ANGAJATI WHERE Compartiment LIKE ‘J%’ GROUP BY Compartiment`,`SELECT CodAngajat, Nume, Compartiment FROM ANGAJATI
WHERE Compartiment LIKE ‘J%’`,"Niciuna dintre cele de mai sus"],correct_answers:[1]},{questionNumber:"8.",question:`Ce se va obţine prin următoarea interogare (Transact) SQL:
SELECT Nume FROM STUDENTI INNER JOIN LOCALIT
ON STUDENTI.CodLoc=LOCALIT.CodLoc
WHERE CodLoc IN
(SELECT CodLoc FROM STUDENTI WHERE Nume = ‘Ionescu M Petre’) ?`,answers:["Numele studenţilor asemănătoare cu Ionescu M Petre","Codul localităţii din care este studentul Ionescu M Petre","Numărul studenţilor care sunt din aceeaşi localitate cu Ionescu M Petre","Fraza SELECT este scrisă greşit","Numele studenţilor care sunt din aceeaşi localitate cu Ionescu M Petre"],correct_answers:[5]},{questionNumber:"9.",question:`Se dă următoarea instrucțiune (Transact) SQL:
SELECT NrFactura
FROM CLIENTI INNER JOIN FACTURIEMISE ON
CLIENTI.CodClient=FACTURIEMISE.Codclient
WHERE ValTot IN (100, 200)
În urma execuţiei acestei interogări se obţin:`,answers:["Numai facturile emise cu valoare intre 100 şi 200, exclusiv capetele","Numai facturile emise cu valoare între 100 şi 200, inclusiv aceste valori","Numai facturile emise cu valoarea de 100 sau 200","Numai facturile emise cu valoare fie mai mică de 100, fie mai mare de 200","Nimic, interogarea este greşită"],correct_answers:[3]},{questionNumber:"10.",question:`Se dă tabelul:
CHITANTE (NrChitanta, Suma, Data, NrGhiseu )
Care dintre următoarele instrucţiuni (Transact) SQL are ca efect afişarea zilelor in care
s-au emis cel puţin 3 chitanţe?`,answers:["SELECT Nrchitanta, Suma, Data FROM CHITANTE WHERE COUNT(NrChitanta)>=3","SELECT Nrchitanta, Suma, Data FROM CHITANTE HAVING COUNT(NrChitanta)>=3","SELECT COUNT(Data), COUNT(NrChitanta) FROM CHITANTE WHERE Data IS NULL","SELECT Data FROM CHITANTE WHERE COUNT(NrChitanta) >=3","SELECT CHITANTE.Data FROM CHITANTE GROUP BY CHITANTE.Data HAVING COUNT(NrChitanta) >= 3"],correct_answers:[5]},{questionNumber:"11.",question:`Se dă tabelul:
ANGAJATI (CodAngaj, Nume, DataAngajare, Compartiment, Profesia, Salariu)
Care dintre următoarele instrucţiuni (Transact) SQL permite majorarea salariului cu 3% pentru salariaţii angajaţi în anul 2010?`,answers:["UPDATE Angajati SET Salariu = Salariu + 3% WHERE DataAngajare IN 2010",`UPDATE Salariu FROM Angajati SET Salariu=Salariu + 3%* Salariu
WHERE DataAngajare IN (‘1/1/2010’ , ‘31/12/2010’)`,"UPDATE Angajati SET Salariu = Salariu*1.03 WHERE YEAR(DataAngajare)= 2010",`UPDATE Salariu FROM Angajati SET Salariu = Salariu * 1.03
WHERE DataAngajare BETWEEN ‘1/1/2010’ AND ‘31/12/2010’`,"Niciuna"],correct_answers:[3]},{questionNumber:"12.",question:`Se dă entitatea ANGAJATI, cu următoarele atribute:
ANGAJATI (CodAngaj, Nume, DataAngajare, Compartiment, Profesia, Salariu)
Care dintre următoarele instrucţiuni (Transact) SQL permite ştergerea salariaţilor angajati înainte de începutul anului 2010, cu profesia "informatician"?`,answers:[`DELETE FROM Angajati WHERE DataAngajare &lt; ‘1/12/2009’ AND
Profesia LIKE ‘%informatician%’`,`DELETE * FROM Angajati WHERE Profesia LIKE ‘informatician’ HAVING
YEAR(DataAngajare) &lt; 2010`,`UPDATE Angajati SET CodAngaj = Null WHERE DataAngajare &lt;’1/1/2010’ AND
Profesia LIKE ‘%informatician%’`,"Niciuna",`DELETE FROM Angajati WHERE DataAngajare &lt; ’1/1/2010’ AND Profesia
LIKE ‘%informatician%’`],correct_answers:[5]},{questionNumber:"13.",question:"Care dintre urmatoarele comenzi SQL sunt destinate manipulării datelor?",answers:["INSERT","CREATE TABLE","UPDATE","ROLLBACK","DELETE","COMMIT"],correct_answers:[1,3,5]},{questionNumber:"14.",question:"Pentru o baza de date relaţională algebra relaţională este:",answers:["Completa (permite să extrag orice informaţii din bază)","Procedurală (Arată şi modul cum se obţin informaţiile din baza de date)","Complexă (permite să extrag informaţii obiectuale)","Limbaj formal","Limbaj de definire a rapoartelor","Limbaj de interogare"],correct_answers:[1,2,4,6]},{questionNumber:"15.",question:"Când creaţi o bază de date, care sunt fişierele care trebuie create obligatoriu?",answers:["Un fişier de date primar","Un fişier de date primar şi un fişier de log","Un fişier de date primar, un fişier de date secundar şi un fişier de log","Un fişier de log primar"],correct_answers:[2]},{questionNumber:"16.",question:`Folosind tabela cadru_did(cod, nume, graddid, data_ang, sal_neg, sal_merit), creată şi populată cu date, se consideră următoarele exemple:
1. SELECT graddid, max(sal_neg)
   FROM cadru_did
   WHERE max(sal_neg) > 1600
   GROUP BY graddid
2. SELECT graddid, max(sal_neg)
   FROM cadru_did
   GROUP BY graddid
   HAVING max(sal_neg) > 1600
Să se aleagă răspunsul corect:`,answers:["Exemplul (1) este corect","Exemplul (2) este corect","Exemplul (2) nu este corect","Exemplele (1) şi (2) sunt corecte","Exemplul (1) nu este corect","Nici un exemplu nu este corect"],correct_answers:[2,5]},{questionNumber:"17.",question:"Cu ajutorul comenzii SELECT :",answers:["Se poate realiza joncţiunea externă(outer-join) între tabele","Se poate realiza joncţiunea de egalitate(equi-join) între tabele","Nu se pot realiza joncţiuni între tabele","Se poate realiza joncţiunea de neegalitate(non-equi-join) între tabele","Se poate modifica structura unei tabele","Se poate lega o tabelă cu ea însăşi"],correct_answers:[1,2,4,6]},{questionNumber:"18.",question:`Următoarele interogări:
1. SELECT * FROM comenzi c
   WHERE ‘penar’=(SELECT den_prod FROM produs p WHERE p.codp=c.codp)
2. SELECT c.nr_cda, c.codp, c.cant, c.data, c.codfisc
   FROM comenzi c, produs p
   WHERE p.codp=c.codp AND p.den_prod=’penar’`,answers:["Sunt identice ca efect","Sunt diferite ca efect","Ar fi identice ca efect dacă în cererea 2 s-ar folosi operatorul OR în loc de AND","Afişează rezultate complet diferite"],correct_answers:[1]},{questionNumber:"19.",question:"Folosind relaţia cadru_did(cod, nume, graddid, data_ang, sal_neg, sal_merit), să se specifice care dintre următoarele exemple sunt corecte:",answers:["SELECT avg(sal_neg) FROM cadru_did","SELECT graddid, sum(sal_neg) FROM cadru_did","SELECT graddid, avg(sal_neg) FROM cadru_did GROUP BY graddid","SELECT graddid, sum(sal_neg), count(cod) FROM cadru_did GROUP BY data_ang","SELECT graddid, avg(sal_neg) FROM cadru_did WHERE avg(sal_neg) > 1800"],correct_answers:[1,3]},{questionNumber:"20.",question:`Interogarea:
SELECT min(nume), sum(nume), count(*)
 FROM tabela
 WHERE salariu = max(salariu)`,answers:["Este greşită deoarece funcţia min() nu se foloseşte cu şiruri de caractere","Este greşită deoarece funcţia sum() nu se foloseşte cu şiruri de caractere","Este corectă","Este greşită deoarece funcţia max() nu se foloseşte în clauza WHERE","Este greşită deoarece nu se foloseşte * în funcţia count()"],correct_answers:[2,4]},{questionNumber:"21.",question:"Se poate folosi acelaşi nume pentru mai multe tabele?",answers:["Da, dar să nu aparţină aceleeaşi baze de date","Da, dacă nu aparţin aceleeaşi scheme","Nu","Da, dacă nu aparţin aceluiaşi proprietar","Da, dacă aparţin aceleeaşi scheme","Da, dar să nu aparţină aceleeaşi instanţe"],correct_answers:[2,4]},{questionNumber:"22.",question:"Interogările din SQL sunt la fel de expresive cu:",answers:["Algebra relationala","Calculul relational al domeniilor","Calculul procedural","Calculul relational al tuplurilor","Calculul bazat pe tablouri"],correct_answers:[1,2,4]},{questionNumber:"23.",question:"Avem apriori o multitudine de restricţii, dată de o mulţime de dependenţe funcţionale F. Aceasta este folosită la:",answers:["Normalizarea bazei de date","Crearea bazei de date","Crearea procedurilor de interogare","La validarea stării bazei de date","Construcţia algebrei relaţionale"],correct_answers:[1,4]},{questionNumber:"24.",question:`Fie tabelul METEO(localit varchar(30), tempmin numeric(3), tempmax numeric(4)).
Să se stabilească în care dintre exemplele următoare se folosesc incorect operatorii aritmetici:`,answers:["SELECT localit, -tempmin minim, +tempmax maxim FROM meteo","SELECT localit, (tempmax-tempmin) diferenta FROM meteo","SELECT -localit, -tempmin FROM meteo","SELECT localit, (tempmax-tempmin)-1 FROM meteo","SELECT localit*2, tempmax*2 FROM meteo"],correct_answers:[3,5]},{questionNumber:"25.",question:"Operatorul NOT se poate folosi cu:",answers:["Operatorul LIKE","Operatorul IS NULL","Operatorul >","Operatorul IN (lista)","Operatorul &lt;>"],correct_answers:[1,2,4]},{questionNumber:"26.",question:"Fragmentarea verticală se obţine dintr-o relaţie prin:",answers:["Selecţii şi replicări","Selecţii şi proiecţii","Proiecţie","Unire (Join)","Introducerea de chei externe"],correct_answers:[3]},{questionNumber:"27.",question:`Se dau tabelele:
PERSONAL(Marca, Numepren, Compart, Datasv, Salorar, Salorarco, Compart)
PONTAJE(Marca, Data, Orelucrate, Oreco, Orenoapte, Oreabsnem)
Ce afişează următoarea interogare?
SELECT ZILE1.Data AS Ziua
FROM (SELECT Data FROM PONTAJE po INNER JOIN PERSONAL pe ON 
po.Marca=pe.Marca WHERE Numepren = 'Popescu') ZILE1
INNER JOIN (SELECT Data FROM PONTAJE po INNER JOIN PERSONAL pe ON
po.Marca =pe.Marca WHERE Numepren='Georgescu') ZILE2
ON ZILE1.Data=ZILE2.Data`,answers:["Angajatul care a lucrat mai multe zile","Numărul total de zile în care au lucrat cei doi angajaţi","Numărul de zile lucrate de fiecare angajat","Zilele în care au lucrat simultan cei doi angajaţi","Numărul de zile în care nu au lucrat cei doi angajaţi"],correct_answers:[4]},{questionNumber:"28.",question:`Se dau tabelele:
ANGAJATI(ID_Angajat, Nume, ID_Compart, Salariu)
COMPARTIMENT (ID_Compart, Nume_Compart)
şi următoarea interogare:
SELECT a.ID_Angajat, a.Nume, c.ID_Compart, c. Nume_Compart
FROM ANGAJATI a, COMPARTIMENT c
WHERE a. ID_Compart = c. ID_Compart
Ce operaţii implementează această interogare?`,answers:["Diferenţa, proiecţia şi join","Selecţia, intersecţia şi join","Intersecţia, proiecţia şi join","Selecţia, proiecţia şi join","Diferenţa, intersecţia şi join"],correct_answers:[4]},{questionNumber:"29.",question:`Se dau tabelele:
PERSONAL(Marca, Numepren, Compart, Datasv, Salorar, Salorarco, Compart)
PONTAJE(Marca, Data, Orelucrate, Oreco, Orenoapte, Oreabsnem)
Ce afişează următoarea interogare?
SELECT po1.Marca, pe1.Numepren,
COUNT(DISTINCT po1.Data) AS Zile_Lucrate,
COUNT(DISTINCT po2.Data) AS Zile_Lucrate_Pan
FROM (PONTAJE po1 INNER JOIN PERSONAL pe1 ON po1.Marca=pe1.Marca),
(PONTAJE po2 INNER JOIN PERSONAL pe2 ON po2.Marca=pe2.Marca)
WHERE po1.Orelucrate > 0 AND po2.Orelucrate > 0 AND pe2.Numepren='Ionescu'
GROUP BY po1.Marca, pe1.Numepren, po2.Marca
HAVING COUNT (DISTINCT po1.Data)> COUNT(DISTINCT po2.Data)`,answers:["Numărul de ore lucrate pentru toţi angajaţii, mai puţin pentru ‘Ionescu’","Numărul angajaţilor care au aceleaşi zile lucrate cu ‘Ionescu’","Angajaţii care lucrează în acelaşi timp cu Ionescu","Angajaţii cu un număr de zile lucrate mai mare decât ale lui ‘Ionescu’","Angajaţii care au lucrat mai puţin decât ‘Ionescu’"],correct_answers:[4]},{questionNumber:"30.",question:"O bază de date distribuită este:",answers:["O colecţie de date împărţită în mai multe fragmente","O colecţie de date împărţită în mai multe replici",`O colecţie de date şi de scheme partajate şi interconectate logic, distribuite
fizic pe calculatoarele unei reţele`,"O colecţie de fragmente mixte","Niciuna"],correct_answers:[3]},{questionNumber:"31.",question:`Baza de date curentă include o tabelă numită Employees cu următoarele coloane:
- firstName, care păstrează prenumele unui angajat;
- lastName, care păstrează numele unui angajat;
- depID, care păsrează ID –ul departamentului în care lucrează angajaţii.
Aţi cerut să se afişeze o listă cu angajaţii sortată descrescător după ID departament, apoi după numele angajaţilor (prenume urmat de nume) în ordinea alfabetică.
Ce instrucţiune SELECT trebuie să folosiţi?`,answers:[`SELECT depID, (firstName + ' ' + lastName) AS 'Full Name'
     FROM Employees
     ORDER BY depID, lastName ASC`,`SELECT (firstName + ' ' + lastName) AS 'Full Name'
     FROM Employees
     ORDER BY depID DESC, 'Full Name'`,`SELECT lastName, (firstName + ' ' + lastName) AS 'Full Name'
     FROM Employees
     ORDER BY lastName, depID`,`SELECT (firstName + ' ' + lastName) AS 'Full Name'
     FROM Employees
     ORDER BY depID DESC, lastName`,`SELECT (firstName + ' ' + lastName) AS 'Full Name'
     FROM Employees
     ORDER BY depID DESC, lastName DESC`],correct_answers:[2]},{questionNumber:"32.",question:"Datorită mutării activităţii comerciale din Germania în SUA, trebuie să schimbăm collation data pentru baza de date Adventure Works. După modificarea collation pentru această bază de date, ce ar mai trebui să faceţi?",answers:["Nimic.","Ştergeţi indecşii şi constrângerile tabelelor existente pentru care collation cere să fie modificat. Modificaţi collation pentru coloanele acelor tabele.Recreaţi indecşii şi constrângerile.","Ştergeţi indecşii şi constrângerile pentru toate tabele existente din baza de date. Modificaţi collation pentru coloanele acelor tabele.Recreaţi indecşii şi constrângerile.","Modificaţi database collation şi selectaţi opţiunea auto-indexing.","Recreaţi toţi indecşii în această bază de date."],correct_answers:[2]},{questionNumber:"33.",question:`Firma la care lucraţi foloseşte o tabelă numită Products pentru a stoca informaţii despre produsele pe care le vinde. Tabela include coloanele:
  - price, care conţine preţul produsului vândut;
  - volume, care păstrează volumul vânzărilor lunare medii pentru produsul respectiv;
  - stock, care stochează numărul de bucăţi aflate în stoc pentru un produs.
La începutul fiecărei luni, firma dvs. reface stocul unui produs dacă una dintre condiţiile următoare este adevărată:
        - Produsul costă 100$ sau mai mult şi numărul de bucăţi din stoc este mai mic decât volumul lunar mediu sau mai mic de 500.
        - Produsul costă mai puţin de 100 $ şi sunt mai puţin de 1500 de bucăţi în stoc.
Dvs. trebuie să obţineţi informaţii despre toate produsele care trebuie să fie realimentate. Ce instrucţiune ar trebui folosită?`,answers:[`SELECT * FROM Products
     WHERE
     price >= 100.00
          AND stock &lt; 500
          OR stock &lt; volume
          OR (price &lt; 100.00
            AND stock &lt; 1500)`,`SELECT * FROM Products
       WHERE
           price >= 100.00
           AND (stock &lt; 500
           OR stock &lt; volume)
           OR price &lt; 100
           AND stock &lt; 1500`,`SELECT * FROM Products
                WHERE
                (price >= 100.00
                AND stock &lt; 500
                OR stock &lt; volume)
                OR (price &lt; 100.00
                AND stock &lt; 1500)`,`SELECT * FROM Products
        WHERE
            price >= 100.00
            AND stock &lt; 500
            OR stock &lt; volume
            OR price &lt; 100.00
            AND stock &lt; 1500`,`SELECT * FROM Products
        WHERE
            price >= 100.00
            AND stock &lt; 500
            OR stock &lt; volume
            AND price &lt; 100.00`],correct_answers:[2]},{questionNumber:"34.",question:`Pentru a afişa numele angajaţilor care au un salariu mai mare decât al cel puţin unui manager existent, ar trebui să folosiţi instrucţiunea:
SELECT name FROM Employees
WHERE salary > ANY (SELECT salary FROM Management).
Trebuie să creaţi o instrucţiune alternativă care să dea acelaşi rezultat şi care să se execute cel puţin la fel de rapid.
Ce instrucţiune ar trebui să folosiţi ?`,answers:[`SELECT name FROM Employees
    WHERE NOT salary &lt; ALL (SELECT salary FROM Management)`,`SELECT name FROM Employees
    WHERE NOT EXISTS
    (SELECT * FROM Management WHERE salary >= Employees.salary)`,`SELECT name FROM Employees
    WHERE EXISTS
    (SELECT * FROM Management WHERE salary &lt; Employees.salary)`,`SELECT name FROM Employees
    JOIN Management ON Employees.salary > Management.salary`,"Nici una."],correct_answers:[3]},{questionNumber:"35.",question:`Aveţi o tabelă numită Employees, care include următoarele coloane:
   - empName, care conţine numele angajatului;
   - department, care conţine numele departmentului în care lucrează angajatul.
Pentru fiecare angajat care lucrează într-un departament cu mai mult de 10 angajaţi, trebuie să afişaţi numele angajatului, numele departamentului şi nr. de angajaţi din acel departament.Trebuie să scrieţi o interogare care să extragă această informaţie în cel mai scurt timp. Ce instrucţiune ar trebui folosită ?`,answers:[`SELECT empName, department,
(SELECT COUNT(*) FROM Employees WHERE department = e.department)
FROM Employees AS e`,`SELECT department, COUNT(*) AS employees
INTO DepCounts
FROM Employees
GROUP BY department
SELECT e.empName, e.department, d.employees
FROM Employees AS e
JOIN DepCounts AS d ON e.department = d.department
WHERE d.employees > 10`,`SELECT empName, department,
(SELECT COUNT(*) FROM Employees WHERE department = e.department)
FROM Employees AS e WHERE 10 &lt; (SELECT COUNT(*) FROM Employees
      WHERE department = e.department);`,`SELECT empName, department,
(SELECT COUNT(*) FROM Employees WHERE (department = e.department) And
count(*) >10) FROM Employees AS e`,"Nici una."],correct_answers:[2]},{questionNumber:"36.",question:`Aţi scris o instrucţiune SELECT complexă care afişează date din mai multe tabele.
Trebuie să creaţi o tabelă nouă şi să o populaţi cu aceste date folosind cel mai mic număr de instrucţiuni posibil.Ce ar trebui să faceţi ?`,answers:["Creaţi tabela şi apoi folosiţi instrucţiunea INSERT INTO ... SELECT FROM pentru a o popula.","Folosiţi o instrucţiune SELECT INTO pentru a crea şi popula tabela.","Folosiţi o instrucţiune SELECT INTO pentru a crea şi popula o tabelă temporară, apoi creaţi tabela permanentă din tabela temporară.","Creaţi tabela, apoi folosiţi o instrucţiune SELECT INTO pentru a o popula.","Folosiţi două proceduri stocate: una pentru crearea tabelei şi alta pentru populare."],correct_answers:[2]},{questionNumber:"37.",question:"Firma la care lucraţi vinde echipamente de la fabricanţi multipli care folosesc ID-uri de produse similare şi este nevoie să se urmărească ID produs, ID fabricant, nume produs, preţ produs pentru fiecare piesă de echipament din tabela Products. Trebuie să vă asiguraţi că nu sunt permise intrări multiple pentru acelaţi produs. Ce instrucţiune ar trebui folosită ?",answers:[`CREATE TABLE Products (
productID int PRIMARY KEY,
manufacturerID int,
productName varchar(50),
price decimal(7,2))`,`CREATE TABLE Products (
productID int UNIQUE,
manufacturerID int PRIMARY KEY,
productName varchar(50),
price decimal(7,2))`,`CREATE TABLE Products (
productID int,
manufacturerID int,
productName varchar(50) PRIMARY KEY,
price decimal(7,2))`,`CREATE TABLE Products (
productID int,
manufacturerID int,
productName varchar(50),
price decimal(7,2),
CONSTRAINT product_key PRIMARY KEY (productID, manufacturerID))`,"Nu este posibil de realizat această cerinţă."],correct_answers:[4]},{questionNumber:"38.",question:`Comanda:
    SELECT DISTINCT codp, denp FROM Produse
    WHERE codp > 200
    ORDER BY cantp
    simulează implementarea operatorilor relaţionali de:`,answers:["Proiecţie şi joncţiune","Selecţie şi intersecţie","Selecţie şi reuniune","Proiecţie şi selecţie","Reuniune şi joncţiune"],correct_answers:[4]},{questionNumber:"39.",question:"Din categoria funcţiilor de grup fac parte:",answers:["Funcţia COUNT( )","Funcţia SUM( )","Funcţia ROUND( )","Funcţia RTRIM( )","Funcţia STDEV( )"],correct_answers:[1,2,5]},{questionNumber:"40.",question:`Dându-se tabelele Produse(codp, denp, pret ) şi Comenzi(nr_cda, codp, cant, data), instrucţiunile SELECT:
    SELECT *
    FROM comenzi c
    WHERE ‘Stilou’=(SELECT denp FROM produse p WHERE p.codp=c.codp)
      şi
    SELECT c.nr_cda, c.codp, c.cant, c.data
    FROM comenzi c, produse p
    WHERE p.codp=c.codp
    AND p.denp = ‘Stilou’`,answers:["Sunt diferite","Sunt identice","Ar fi identice dacă în al doilea SELECT s-ar folosi operatorul OR şi nu AND","Ar fi identice dacă în primul SELECT s-ar folosi operatorul IN şi nu =","Ar fi identice dacă în al doilea SELECT în clauza WHERE s-ar scrie condiţia de filtrare şi apoi cea de join."],correct_answers:[2]},{questionNumber:"41.",question:"Comanda DROP nume_tabela este echivalentă cu comanda:",answers:["DELETE FROM nume_tabela","TRUNCATE","ALTER TABLE","ALTER DATABASE","Cu nici una"],correct_answers:[5]},{questionNumber:"42.",question:"Folosind tabela cadru_did(cod, nume, graddid, data_ang, sal_neg, sal_merit), creată şi populată cu date, să se specifice care dintre exemplele următoare sunt corecte:",answers:["SELECT SUM(sal_neg) FROM cadru_did","SELECT graddid, SUM(sal_neg) FROM cadru_did","SELECT graddid, SUM(sal_neg) FROM cadru_did GROUP BY graddid",`SELECT graddid, SUM(sal_neg), COUNT(graddid) FROM cadru_did
     GROUP BY data_ang`,`SELECT graddid, SUM(sal_neg) FROM cadru_did
     WHERE SUM(sal_neg) > 10000`],correct_answers:[1,3]},{questionNumber:"43.",question:"Un utilizator a șters accidental o linie din tabela Produse, care conține o coloană IDENTITY numită id. Când încercați să reinserați aceleași date care au fost în linia ștearsă, primiți un mesaj de eroare. Ce ar trebui să faceți?",answers:["Puneți pe on proprietatea IDENTITY_INSERT folosind SQL Server Management Studio (SSMS) și apoi inserați linia.","Executați instrucțiunea SET IDENTITY_INSERT Produse ON și apoi inserați linia.","Ștergeți proprietatea IDENTITY pentru coloana id folosind SQL Server Management Studio (SSMS) și apoi inserați linia.","Reinițializați valoarea id cu cea a liniei șterse și apoi inserați linia."],correct_answers:[2]},{questionNumber:"44.",question:"Scrieți o instrucțiune SELECT care extrage date din două tabele. Trebuie să returnați toate liniile din prima tabelă și numai liniile care îndeplinesc condiția din JOIN din a doua tabelă. Ce tip de JOIN ar trebui să folosiți?",answers:["LEFT","RIGHT","INNER","FULL"],correct_answers:[1]},{questionNumber:"45.",question:"Compania dumneavoastră are un număr de mașini care sunt folosite de angajați pentru o perioadă scurtă de timp. În acest scop aveți o tabelă numită Cars, care păstrează informații despre mașini și o tabelă numită CarAssignments, care stochează mașinile asignate fiecărui angajat. Trebuie să creați o constrângere care să vă asigure că toate valorile atribuite coloanei car_id din tabela CarAssignments corespund unei valori a coloanei id din tabela Cars. De asemenea, trebuie să vă asigurați că, dacă se șterge o linie din tabela Cars, se vor șterge și liniile din tabela CarAssignments care o referențiază. Ce instrucțiune ar trebui folosită?",answers:[`ALTER TABLE CarAssignments
ADD CONSTRAINT FK_car_id FOREIGN KEY (car_id)
REFERENCES Cars (id) ON DELETE CASCADE;`,`ALTER TABLE CarAssignments
ADD CONSTRAINT FK_car_id FOREIGN KEY (car_id)
REFERENCES Cars (id) ON DELETE SET NULL;`,`ALTER TABLE CarAssignments
ADD CONSTRAINT FK_car_id FOREIGN KEY (car_id)
REFERENCES Cars (id);`,`ALTER TABLE CarAssignments
ADD CONSTRAINT FK_car_id FOREIGN KEY (car_id)
REFERENCES Cars (id) ON DELETE NO ACTION;`],correct_answers:[1]},{questionNumber:"46.",question:`Compania dumneavoastră folosește tabela WebSites pentru a urmări informația despre traficul zilnic al mai multor Web sites. Tabela include și următoarele coloane:
- id, care stochează ID Web site;
- hits, care păstrează numărul de accesări ale site-ului din acea zi.
Trebuie să afișați numărul mediu de accesări zilnice pentru fiecare Web site.
Ce instrucțiune ar trebui să folosiți?`,answers:[`SELECT SUM(hits)/COUNT(id)
FROM WebStats
GROUP BY id;`,`SELECT COUNT(*), AVG(hits)
FROM WebStats
GROUP BY hits;`,`SELECT id, AVG(hits)
FROM WebStats
GROUP BY id;`,`SELECT AVG(hits)
FROM WebStats;`],correct_answers:[3]},{questionNumber:"47.",question:`Ați creat tabela Angajati cu instrucțiunea:
CREATE TABLE Angajati (nume varchar(20), departament varchar(20));
Se vor adăuga, apoi, patru persoane:
- ”Angajat unu” în departamentul Sales;
- “Angajat doi” în departamentul Sales;
- “Angajat trei” în departamentul Marketing;
- “Angajat patru” în departamentul HR.
Trebuie să adăugați acești angajați tabelei Angajati folosind cea mai mică secvență de cod. Care interogare ar trebui executată în acest scop?`,answers:[`INSERT INTO Angajati (nume, departament)
VALUES (' Angajat unu’, 'Sales');
INSERT INTO Angajati (nume, departament)
VALUES (' Angajat doi', 'Sales');
INSERT INTO Angajati (nume, departament)
VALUES (' Angajat trei', 'Marketing');
INSERT INTO Angajati (nume, departament)
VALUES (' Angajat patru', 'HR');`,`INSERT INTO Angajati (nume, departament)
VALUES (' Angajat unu', 'Sales'), (' Angajat doi', 'Sales'),
            (' Angajat trei', 'Marketing'), (' Angajat patru', 'HR');`,`INSERT INTO Angajati
VALUES (' Angajat unu', 'Sales');
INSERT INTO Angajati
VALUES (' Angajat doi', 'Sales');
INSERT INTO Angajati
VALUES (' Angajat trei', 'Marketing');
INSERT INTO Angajati
VALUES (' Angajat patru', 'HR');`,`INSERT INTO Angajati
VALUES (' Angajat unu', 'Sales'), (' Angajat doi', 'Sales'),
            (' Angajat trei', 'Marketing'), (' Angajat patru', 'HR');`],correct_answers:[4]},{questionNumber:"48.",question:"Aveți o tabelă Employees, cu angajații unei firme, care include o coloană de tip nchar(30) numită NumeAng. Coloana NumeAng conține prenumele și numele unui angajat, separate de caracterul underscore (_). Trebuie să căutați în tabelă toți angajații al căror nume de familie este Popa. Ce expresie ar trebui să folosiți în clauza WHERE a instrucțiunii SELECT?",answers:["RTRIM(NumeAng) LIKE '%_Popa'","NumeAng LIKE '%!_Popa' ESCAPE '!'","RTRIM(NumeAng) LIKE '%!_Popa' ESCAPE '!'","NumeAng LIKE '%Popa%'"],correct_answers:[3]},{questionNumber:"49.",question:`Ați creat tabela Angajati, în care păstrați informațiile despre angajații firmei unde lucrați, cu instrucțiunea:
CREATE TABLE Angajati ( nume varchar(50), telefon char(10), email varchar(20)).
Trebuie să vă asigurați că angajații vor putea fi introduși în tabelă cu valoarea NULL în coloana nume, dar fără valori de tip NULL în coloanele telefon și email(simultan). Cum ar trebui să modificați coloanele tabelei?`,answers:["Adăugați o constrângere CHECK (telefon IS NOT NULL OR email IS NOT NULL) pe coloana telefon.","Adăugați NOT NULL la coloanele telefon și email.","Adăugați NULL la coloana nume.","Add constrângerea CHECK(telefon IS NOT NULL OR email IS NOT NULL) pe tabelă."],correct_answers:[4]},{questionNumber:"50.",question:`Ați creat următoarea tabelă cu instrucțiunea:
CREATE TABLE dbo.Products (ID bigint IDENTITY(1,1) NOT NULL,
           Name nvarchar(100) NOT NULL, FirstProduction timestamp NOT NULL,
           Cost decimal(12, 4) NOT NULL, SalePrice decimal(12,4) NOT NULL,
           Volume bigint NOT NULL, Margin AS (SalePrice - Cost) / Cost);
Trebuie să modificați structura tabelei pentru a utiliza cel mai mic spațiu de stocare.
Ce instrucțiuni ar trebui să folosiți?`,answers:["ALTER TABLE dbo.Products ALTER COLUMN Margin AS (SalePrice - Cost);",`ALTER TABLE dbo.Products REBUILD WITH
(DATA_COMPRESSION = ROW);`,"ALTER TABLE dbo.Products ALTER COLUMN Name ADD SPARSE;","ALTER TABLE dbo.Products ALTER COLUMN Volume int;","ALTER TABLE dbo.Products ALTER COLUMN Cost decimal(10,2);"],correct_answers:[2,4]}];export{e as default};
