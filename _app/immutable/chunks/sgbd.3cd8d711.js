const e=[{questionNumber:"1.",question:`Un SGBD distribuit este:
`,answers:[`O mulţime de SGBD-uri locale, independente, ce se execută în acelaşi timp
`,`Un software ce permite gestiunea unei BD distribuite şi face distribuţia trans- parentă utilizatorilor
`,`O mulţime de aplicaţii locale şi globale
`,`O mulţime de aplicaţii globale
`,`O mulţime de aplicaţii locale
`],correct_answers:[2]},{questionNumber:"2.",question:`O tranzacţie este:
`,answers:[`O unitate de program ce realizează citiri şi scrieri
`,`O mulţime finită şi ordonată de operaţii de citire, scriere şi terminare
`,`O mulţime finită de operaţii coerente, executate de un SGBD, care manipulează datele unei baze de date
`,`O mulţime de instrucţiuni executabile dintr-un limbaj gazdă
`,`O serie finită de operaţii de modificare a datelor dintr-o bază de date ORACLE
`],correct_answers:[3]},{questionNumber:"3.",question:`Proprietatea de consistenţă a tranzacţiei constă din:
`,answers:[`Eliminarea redundanţelor
`,`Izolarea tranzacţiilor în execuţie
`,`Transformarea unei stări consistente într-o stare consistentă
`,`Transparenţa
`,`Durabilitatea
`],correct_answers:[3]},{questionNumber:"4.",question:`O bază de date distribuită se găseşte implementată numai:
`,answers:[`Pe un calculator performant
`,`Pe mai multe calculatoare izolate, conectate la Internet
`,`Pe un calculator client
`,`Într-o reţea de calculatoare
`,`Pe un laptop
`],correct_answers:[4]},{questionNumber:"5.",question:`Un SGBD paralel este:
`,answers:[`O mulţime de SGBD locale independente în execuţie
`,`Un SGBD ce execută in paralel operaţii de intrare /ieşire dintr-o bază de date
`,`Un program ce operează pe baza algoritmilor paraleli
`,`Un SGBD ce se execută pe calculatoare cu mai multe procesoare şi medii de stocare, proiectate să execute o mulţime de operaţii în paralel, pentru o mare performanţă
`,`Niciuna dintre acestea
`],correct_answers:[4]},{questionNumber:"6.",question:`Se dă tabelul
STUDENT(CNP, Nume, Grupa, Adresa)
şi următoarea secvenţă ce reprezintă o tranzacţie:
CREATE table STUDENT_NOU ( CNP NUMBER, Nume VARCHAR(30)) 
INSERT INTO STUDENT_NOU SELECT CNP, Nume from STUDENT
Savepoint s1
UPDATE STUDENT_NOU SET Nume = UPPER(Nume)
Savepoint s2
DELETE FROM STUDENT_NOU
Rollback to s2
DELETE FROM STUDENT_NOU WHERE CNP=100 UPDATE STUDENT_NOU SET Nume = 'Ionescu'
Rollback to s2
UPDATE STUDENT_NOU SET Nume = 'Ionescu' WHERE CNP=100
Rollback
Care este rezultatul acestei tranzacţii pentru tabela STUDENT_NOU?
`,answers:[`Avem un student cu numele ‘Ionescu’
`,`Nu avem linii în tabelă
`,`Nu putem să facem Rollback mai mult de o dată pe un punct de reluare
`,`Ultimul UPDATE eşuează deoarece studentul cu CNP-ul 100 a fost şters
`,`Tranzacţia eşuează deoarece avem mai multe puncte de reluare
`],correct_answers:[2]},{questionNumber:"7.",question:`Când creaţi o bază de date Microsoft Sql Server, care sunt fişierele care trebuie create obligatoriu?
`,answers:[`Un fişier de date primar
`,`Un fişier de date primar şi un fişier de log
`,`Un fişier de date primar, un fişier de date secundar şi un fişier de log
`,`Un fişier de log primar
`],correct_answers:[2]},{questionNumber:"8.",question:`Când se determină accesul utilizator la obiecte particulare ale unei baze de date, cum se aplică permisiunile?
`,answers:[`User, fixed role, group role, fixed server
`,`User, group role, fixed role, fixed server
`,`Permisiunile sunt cumulative exceptând DENY
`,`Permisiunile se scad exceptând permisiunile user specificate
`],correct_answers:[3]},{questionNumber:"9.",question:`Care dintre următoarele afirmaţii nu este adevărată despre bazele de date Microsoft SQL Server?
`,answers:[`Bazele de date sunt grupate în “filegroups”
`,`Bazele de date trebuie să fie în acelaşi “filegroup”
`,`Bazele de date pot creşte automat cu un procent
`,`Bazele de date pot avea dimensiuni restricţionate
`],correct_answers:[2]},{questionNumber:"10.",question:`Care grup de instrucţiuni se poate utiliza prin acordarea permisiunilor obiect?
`,answers:[`SELECT, UPDATE, INSERT, CREATE
`,`SELECT, EXECUTE, DELETE, INDEX
`,`SELECT, UPDATE, INSERT, DELETE
`,`SELECT, EXECUTE, DELETE,CREATE
`],correct_answers:[3]},{questionNumber:"11.",question:`Aţi planificat ca Microsoft SQL Server 2000 să facă backups ale unei baze de date astfel:
full backup la ora 2:00 a.m.; differential backups din 4 în 4 ore; transaction log backups la fiecare 30’. Sistemul cade la 11:24 a.m. După ce se face un full backup restore, câte backups transaction logs şi diferenţiale (numărul minim) trebuie restaurate pentru a avea pierderi minime în baza de date?
`,answers:[`1 differential, 2 log
`,`1 differetial, 10 log
`,`2 differential, 2 log
`,`2 differential, 1 log
`],correct_answers:[1]},{questionNumber:"12.",question:`Pentru a preveni problemele ţinând de proprietarul obiectelor unei baze de date Microsoft SQL Server, ce rol ar trebui să fie asignat unui developer?
`,answers:[`Db-owner
`,`Db-creator
`,`DBA
`,`Db-manager
`],correct_answers:[1]},{questionNumber:"13.",question:`Rolul Public este un rol special fixat la nivelul unei baze de date Sql Server. Care dintre următoarele afirmaţii sunt adevărate despre el ?
`,answers:[`Nu poate fi şters
`,`Poate fi şters
`,`E conţinut în orice bază de date utilizator, inclusiv master, msdb, tempdb, model
`,`E conţinut numai în bazele de date utilizator
`,`Nu poate avea utilizatori, grupuri sau roluri asignate
`,`Păstrează toate permisiunile implicite pentru utilizatorii unei baze de date
`],correct_answers:[1,3,5,6]},{questionNumber:"14.",question:`Care dintre afirmaţiile următoare sunt adevărate?
`,answers:[`Numai un index cluster poate fi creat pentru un tabel
`,`Întotdeauna creaţi indecşii non-cluster înaintea creării oricărui index cluster
`,`Indecşii cluster sunt mai mari decât cei non-cluster
`,`Paginile frunză ale indexului cluster sunt paginile de date ale tabelului
`],correct_answers:[1,4]},{questionNumber:"15.",question:`Trebuie să modificaţi un tabel din baza de date pe care aţi creat-o; mai mulţi utilizatori au primit permisiunile obiect SELECT, INSERT pentru acel tabel. Ce variantă ar trebui să executaţi pentru a modifica tabelul, fără a afecta permisiunile acordate?
`,answers:[`DROP TABLE urmat de CREATE TABLE
`,`CREATE TABLE, cu noua configuraţie
`,`ALTER TABLE
`,`MOD TABLE
`,`EXEC sp_help nume_tabela
`],correct_answers:[3]},{questionNumber:"16.",question:`Când ştergeţi un tabel, ce obiecte din baza de date se şterg de asemenea?
`,answers:[`Vederile care-l au ca tabel de bază
`,`Procedurile stocate care-l utilizează
`,`Declanşatorii creaţi pentru el
`,`Funcţiile care-l utilizează
`],correct_answers:[3]},{questionNumber:"17.",question:`Care sunt caracteristicile unei chei primare?
`,answers:[`Forţează integritatea referenţială pentru o tabelă
`,`Se crează cu coloanele existente în tabel sau cu o coloană creată special în acest scop
`,`Permite valori de tip null
`,`Server-ul de baze de date permite numai o cheie primară pentru un tabel
`,`La crearea ei, serverul construieşte automat o constrângere de domeniu
`],correct_answers:[1,2,4]},{questionNumber:"18.",question:`Care dintre următoarele afirmaţii sunt adevărate despre constrângeri?
`,answers:[`Constrângerile la nivel de coloană se aplică pe anumite coloane sau combinaţii de coloane
`,`Dacă nu se specifică un nume pentru constrângere, server-ul de baze de date oferă unul
`,`Indecşii creaţi de constrângerile PRIMARY KEY şi UNIQUE KEY pot fi şterşi folosind instrucţiunea DROP INDEX
`,`Constrângerile pot fi adăugate sau şterse dintr-o tabelă fără a afecta structura tabelei
`],correct_answers:[2,4]},{questionNumber:"19.",question:`Puteţi folosi o procedură stocată pentru a extrage informaţii din tabele de bază la care nu aveţi permisiuni de acces?
`,answers:[`Nu, pentru că nu aveţi permisiunile cerute pe tabele
`,`Nu, dacă nu sunteţi membri sysadmin sau db-owner
`,`Da, dacă aveţi permisiunea EXECUTE pentru procedura stocată
`,`Da, dacă aţi creat declanşatori pentru fiecare tabel
`],correct_answers:[3]},{questionNumber:"20.",question:`Dacă utilizatorul student crează o tabelă, cine poate interoga tabela?
`,answers:[`Numai utilizatorul student
`,`Numai administratorul bazei de date
`,`Utilizatorii care au drept de SELECT pe tabelă
`,`Toţi utilizatorii
`,`Utilizatorul student
`],correct_answers:[3,5]},{questionNumber:"21.",question:`Să se aleagă răspunsurile corecte:
`,answers:[`Când o tabelă e ştearsă, toţi indecşii asociaţi sunt şterşi
`,`Întotdeauna se construieşte un index pe coloanele care se actualizează frecvent
`,`Se poate crea un index ce conţine câmpuri din mai multe tabele
`,`Pentru a obţine date ordonate dintr-o tabelă se pot folosi indecşi
`,"Se recomandă crearea unui index pe coloanele folosite în joncţiuni"],correct_answers:[1,4,5]},{questionNumber:"22.",question:`Comanda DROP VIEW vedere are ca efect:
`,answers:[`Şterge înregistrările din tabela virtuală
`,`Şterge înregistrările din tabela de bază
`,`Şterge tabela virtuală
`,`Şterge tabela de bază
`,`Şterge tabela virtuală şi tabela de bază corespunzătoare
`],correct_answers:[3]},{questionNumber:"23.",question:`Serverul Oracle/Microsoft de baze de date crează automat un index când:
`,answers:[`Se defineşte o constrângere de tip PRIMARY KEY
`,`Se defineşte o constrângere de tip NOT NULL
`,`Se defineşte o constrângere de tip UNIQUE
`,`Se defineşte o constrângere de tip FOREIGN KEY
`,`Se defineşte o constrângere de tip CHECK
`],correct_answers:[1,3]},{questionNumber:"24.",question:`Se va crea un index pe o coloană când:
`,answers:[`Coloana se utilizează frecvent în clauza WHERE sau într-un JOIN
`,`Tabela este de dimensiuni mari
`,`Tabela este de dimensiuni mici
`,`Coloana conţine un număr mare de valori nule
`,`Tabela este actualizată frecvent
`],correct_answers:[1,2,4]},{questionNumber:"25.",question:`Secvenţa de comenzi:
    SET AUTOCOMMIT OFF 
    DELETE FROM stoc 
    ROLLBACK
are ca efect:
`,answers:[`Nu execută nici o ştergere
`,`Şterge toate înregistrările din tabela stoc
`,`Şterge doar înregistrarea curentă din tabela stoc
`,`Şterge fizic toate înregistrările din tabela stoc
`,`Şterge logic toate înregistrările din tabela stoc
`],correct_answers:[1]},{questionNumber:"26.",question:`Care dintre următoarele instrucţiuni sunt necesare pentru a defini începutul şi sfârşitul unei tranzacţii explicite în Microsoft Transact-SQL ?
`,answers:[`OPEN TRANSACTION
`,`BEGIN TRANSACTION
`,`INSERT TRANSACTION
`,`END TRANSACTION
`,`ROLLOVER TRANSACTION
`,`COMMIT TRANSACTION
`],correct_answers:[2,6]},{questionNumber:"27.",question:`Ce problemă de concurenţă apare când o tranzacţie citeşte datele necomise de o altă tranzacţie aflată în derulare?
`,answers:[`Lost update
`,`Dirty Read
`,`Nonrepeatable Read
`,`Phantom Read
`],correct_answers:[2]},{questionNumber:"28.",question:`Care dintre următoarele constrângeri pot fi făcute disable?
`,answers:[`DEFAULT
`,`CHECK
`,`PRIMARY KEY
`,`UNIQUE
`,`FOREIGN KEY
`],correct_answers:[2,5]},{questionNumber:"29.",question:`Trebuie să modificaţi o procedură stocată şi mai mulţi utilizatori au primit permisiunea de execuţie a ei. Ce instrucţiune ar trebui să utilizaţi pentru a o modifica, fără a afecta permisiunile existente?
`,answers:[`DROP PROC
`,`CREATE PROC
`,`ALTER PROC
`,`MOD PROC
`,`EXEC PROC
`],correct_answers:[3]},{questionNumber:"30.",question:`Care sunt tipurile principale de integritate a datelor implementate de constrângerile din serverele relaţionale de baze de date ?
`,answers:[`Integritatea de domeniu
`,`Integritatea de atribut
`,`Integritatea entităţii
`,`Integritatea referenţială
`,`Integritatea tipurilor de date
`],correct_answers:[1,3,4]},{questionNumber:"31.",question:`Ce caracteristică este utilizată pentru a preveni conflictele de actualizare, astfel incât utilizatorii să nu poată citi sau modifica datele când alţi utilizatori le modifică?
`,answers:[`Tranzacţiile
`,`Blocările
`,`Interogările de tip SQL
`,`Permisiunile de tip UPDATE
`,`Permisiunile de tip SELECT
`],correct_answers:[2]},{questionNumber:"32.",question:`Aţi creat o vedere folosind comanda: 
    CREATE VIEW dbo.Employee
        WITH ENCRYPTION
        AS SELECT Name FROM dbo.HumanResources 
            WHERE isEmployee = 1
            WITH CHECK OPTION
    Trebuie să împiedicaţi alţi utilizatori să copieze vederea. Ce instrucţiune ar trebui să folosiţi?
`,answers:[`ALTER VIEW dbo.Employee 
    WITH ENCRYPTION
    AS SELECT Name FROM dbo.HumanResources 
    WHERE isEmployee = 1
`,`DENY ALL ON dbo.Employee TO public
`,`ALTER VIEW dbo.Employee
    AS SELECT Name FROM dbo.HumanResources 
        WHERE isEmployee = 1
        WITH CHECK OPTION
`,`ALTER VIEW dbo.Employee 
    WITH SCHEMABINDING
        AS SELECT Name FROM dbo.HumanResources 
            WHERE isEmployee = 1
`,`Nu exista o asemenea instrucţiune
`],correct_answers:[1]},{questionNumber:"33.",question:`Aţi executat trei proceduri stocate folosind următoarele instrucţiuni SQL: 
BEGIN TRANSACTION
EXEC employeeStats
SAVE TRANSACTION SV_employee 
EXEC productStats
SAVE TRANSACTION SV_product 
EXEC webStats
A apărut o eroare în procedura stocată productStats şi este nevoie să se anuleze modificările făcute de acea procedură.
Ce instrucţiune ar trebui să executaţi?
`,answers:[`ROLLBACK TRANSACTION
`,`ROLLBACK TRANSACTION SV_employee
`,`ROLLBACK WORK
`,`ROLLBACK ROLLBACK
`,`ROLLBACK TRANSACTION SV_product
`],correct_answers:[2]},{questionNumber:"34.",question:`Folosiţi tabela Products pentru a stoca informaţii despre produse. Printre alte informaţii, tabela conţine numele şi preţul produselor. Creşteţi preţul produselor astfel:
    -preţul produselor mai mic de 100$ va fi crescut cu 10% ;.
    -preţul produselor cuprins în intervalul 100$ şi 1000$ va fi crescut cu 5%;
    -preţul produselor mai mare de 1000$ va fi crescut cu 1%.
Trebuie să faceţi aceste modificări pentru toate produsele din tabela Products şi să afişaţi lista cu numele produselor, preţul original şi preţul crescut. Ce instrucţiune ar trebui folosită ?
`,answers:[`DECLARE @t1 table
        (name varchar(30),
        oldprice decimal(7,2),
    newprice decimal(7,2));
        UPDATE Products
        SET price =
        CASE
    WHEN price < 100.00 THEN price*1.10
    WHEN price BETWEEN 100.00 AND 1000.00 THEN price*1.05
    ELSE price*1.01
    END
    OUTPUT DELETED.name, DELETED.price, INSERTED.price INTO @t1
OUTPUT DELETED.name, DELETED.price, INSERTED.price INTO @t1
`,`UPDATE Products
        SET price =
        CASE
    WHEN price < 100.00 THEN price*1.10
    WHEN price BETWEEN 100.00 AND 1000.00 THEN price*1.05
    ELSE price*1.01
    END
OUTPUT DELETED.name, DELETED.price
`,`UPDATE Products
        SET price =
        CASE
    WHEN price < 100.00 THEN price*1.10
    WHEN price BETWEEN 100.00 AND 1000.00 THEN price*1.05
    ELSE price*1.01
    END
OUTPUT DELETED.name, DELETED.price, INSERTED.price
`,`UPDATE Products
        SET price =
        CASE
    WHEN price < 100.00 THEN price*1.10
    WHEN price BETWEEN 100.00 AND 1000.00 THEN price*1.05
    ELSE price*1.01
    END
OUTPUT DELETED.*, INSERTED.*
`,`UPDATE Products
        SET price =
        CASE
    WHEN price < 100.00 THEN price*1.10
    WHEN price BETWEEN 100.00 AND 1000.00 THEN price*1.05
    ELSE price*1.01
    END
OUTPUT DELETED.name, DELETED.price, INSERTED.*
`],correct_answers:[3]},{questionNumber:"35.",question:`O tabelă virtuală:
`,answers:[`Poate fi construită dintr-o tabelă de bază
`,`Nu poate fi construită din mai multe tabele de bază legate între ele (cu UNION)
`,`Poate conţine funcţii de grup
`,`Nu poate fi read only
`,`Poate conţine o restricţie de validare
`],correct_answers:[1,3,5]},{questionNumber:"36.",question:`Să se aleagă afirmaţiile corecte:
`,answers:[`Când se şterge o tabelă, indecşii asociaţi rămân până se şterge şi baza de date
`,`Pentru a obţine date ordonate dintr-o tabelă se pot folosi indecşi
`,`Întotdeauna se construieşte un index pe atributele care se actualizează în mod curent
`,`Se poate construi un index care conţine câmpuri din mai multe tabele
`,`Se recomandă crearea unui index pe atributele folosite în joncţiuni
`],correct_answers:[2,5]},{questionNumber:"37.",question:`Să se aleagă informaţile corecte:
`,answers:[`O vedere poate fi creată numai în baza de date curentă
`,`În comanda CREATE VIEW se poate folosi operatorul UNION
`,`În comanda CREATE VIEW nu se poate folosi clauza ORDER BY
`,`În comanda CREATE VIEW se poate folosi SELECT
`,`În comanda CREATE VIEW se poate folosi clauza SET
`],correct_answers:[1,3,4]},{questionNumber:"38.",question:`Se poate folosi acelaşi nume pentru mai multe tabele dintr-un server de baze de date Microsoft SQL Server ?
`,answers:[`Nu
`,`Da, dacă nu aparţin aceleeaşi baze de date
`,`Da, dacă aparţin aceleeaşi scheme
`,`Da, dacă nu aparţin aceleeaşi scheme
`,`Da, dacă nu aparţin aceleeaşi instanţe
`],correct_answers:[2,4,5]},{questionNumber:"39.",question:`Dacă utilizatorul “stud” crează o vedere, cine poate face interogări pe acea vedere?
`,answers:[`Administratorul bazei de date
`,`Utilizatorii care au permisiunea SELECT pe tabela din care extrage vederea datele
`,`Utilizatorul “stud”
`,`Numai utilizatorul “stud”
`,`Toţi utilizatorii care au permisiunea SELECT pe vedere
`],correct_answers:[1,3,5]},{questionNumber:"40.",question:`Un index Microsoft SQL/Oracle Server poate fi şters de:
`,answers:[`Proprietarul tabelei
`,`De orice utilizator care are dreptul DROP ANY INDEX
`,`Numai de proprietarul tabelei
`,`De administratorul bazei de date
`,`Numai de administratorul bazei de date
`],correct_answers:[1,2,4]},{questionNumber:"41.",question:`Un administrator de bază de date poate:
`,answers:[`Crea un utilizator
`,`Şterge un utilizator
`,`Şterge orice tabelă sistem
`,`Șterge orice index creat pe o tabelă sistem
`,`Să salveze orice bază de date utilizator
`],correct_answers:[1,2,5]},{questionNumber:"42.",question:`Secvenţa de comenzi Microsoft SQL Server: 
    SET IMPLICIT_TRANSACTIONS OFF
    BEGIN TRANSACTION
    DELETE FROM Tabel_sursa
    ROLLBACK
are ca efect:
`,answers:[`Şterge toate înregistrările din tabela “Tabel_sursa”
`,`Şterge doar înregistrarea curentă din “Tabel_sursa”
`,`Nu efectuează nici o ştergere
`,`Şterge toţi indecşii asociaţi tabelei “Tabel_sursa”
`,`Şterge logic toate înregistrările din tabela “Tabel_sursa”
`],correct_answers:[3]},{questionNumber:"43.",question:`Compania dumneavoastră utilizează o procedură stocată numită webAnalysis pentru a analiza informația de pe un Web site. Procedura întoarce 1 dacă analiza a avut loc cu succes și 0 dacă a existat o problemă. Dumneavoastră creați o interogare care
execută un grup de operații de întreținere zilnice, incluzând procedura webAnalysis. Trebuie să comiteți modificările făcute de procedură, dacă analiza a înregistrat succes, fără să afectați execuția altor task-uri executate de interogare. Care set de instrucțiuni ar trebui să folosiți?
`,answers:[`BEGIN TRANSACTION;
DECLARE @success int;
EXEC @success = webAnalysis;
IF @success = 0
        ROLLBACK;
    ELSE
    COMMIT;
`,`BEGIN TRANSACTION;
DECLARE @success int;
EXEC @success = webAnalysis;
    IF @success = 0
        ROLLBACK;
`,`BEGIN TRANSACTION;
    DECLARE @success int;
    EXEC @success = webAnalysis;
    COMMIT;
    IF @success = 0
        ROLLBACK;
`,`DECLARE @success int;
    EXEC @success = webAnalysis;
    IF @success = 0
        ROLLBACK;
    ELSE
        COMMIT;
`],correct_answers:[1]},{questionNumber:"44.",question:`Inserați date într-o tabelă care folosește un trigger INSTEAD OF pentru a le valida, înainte de a le adăuga; dacă datele nu sunt corecte, ele nu sunt inserate în tabelă. Trebuie să scrieți o instrucțiune INSERT și să returnați o listă a liniilor care au fost validate și adăugate în tabelă. Ce ar trebui să faceți?
`,answers:[`Creați o variabilă de tip tabelă pentru a stoca datele inserate. Folosiți clauza OUTPUT INTO în instrucțiunea INSERT pentru a popula variabila tabelă cu liniile inserate. Executați instrucțiunea SELECT pe variabila tabelă pentru a returna liniile inserate.
`,`Creați o variabilă de tip tabelă pentru a stoca datele inserate. Folosiți clauza OUTPUT INTO în instrucțiunea INSERT pentru a popula variabila tabelă cu liniile inserate. Executați instrucțiunea SELECT care întoarce toate liniile din tabelă și variabila tabelă.
`,`Folosiți clauza OUTPUT în instrucțiunea INSERT pentru a returna liniile inserate.
`,`Creați o variabilă de tip tabelă și o populați cu conținutul inițial al tabelei. Inserați datele în tabelă . Executați o instrucțiune SELECT care extrage toate liniile din tabelă, dar care nu sunt în variabila tabelă.
`],correct_answers:[2,4]},{questionNumber:"45.",question:`Tabela Employees include următoarele coloane:
-id int UNIQUE;
-name nvarchar(50).
Trebuie să creați o procedură stocată care să permită utilizatorilor să transmită ID-ul unui angajat și să extragă numele angajatului pe care sa-l memoreze într-o variabilă nvarchar(50). Ce instrucțiune ar trebui să utilizați?
`,answers:[`CREATE PROCEDURE getName
@ID int
    AS
DECLARE @outputName nvarchar(50);
SELECT @outputName = name FROM Employees WHERE id = @ID;
RETURN @outputName;
`,`CREATE PROCEDURE getName
@ID int,
@Name nvarchar(50) OUTPUT
    AS
SELECT @Name = name FROM Employees WHERE id = @ID;
`,`CREATE PROCEDURE getName
@ID int,
@Name nvarchar(50)
    AS
SELECT @Name = name FROM Employees WHERE id = @ID;
`,`CREATE PROCEDURE getName
@ID int
    AS
SELECT name FROM Employees WHERE id = @ID;
`],correct_answers:[2]},{questionNumber:"46.",question:`Baza de date folosită de dumneavoastră conține o tabelă numită Employees, care are o coloană de tip nvarchar(MAX) numită lastName.Aveți deja un index clustered numit id_index pe coloana id a tabelei. Unul dintre utilizatorii dumneavoastră reclamă timpii de interogare lungi obținuți când folosește coloana lastName în clauza WHERE a instrucțiunii SELECT. Ce instrucțiune ar trebui să folosiți?
`,answers:[`ALTER INDEX id_index 
ON Employees (id, lastName);
`,`CREATE INDEX id_name_index 
ON Employees (id)
INCLUDE (lastName);
`,`CREATE CLUSTERED INDEX name_index 
ON Employees (lastName);
`,`CREATE INDEX name_index 
ON Employees (lastName);
`],correct_answers:[4]},{questionNumber:"47.",question:`O bază de date folosită de dumneavoastră include o tabelă numită Contractors. Aplicațiile folosesc frecvent următoarea instrucțiune pentru a accesa înregistrările actualizate după 1 ianuarie 2014:
SELECT id, name FROM Contractors 
    WHERE expertise = @searchWord
        AND lastUpdated > '20140101';
Trebuie să reduceți timpul necesar execuției acestei instrucțiuni. Care este soluția optimă pentru a obține acest deziderat?
`,answers:[`CREATE INDEX expertise_index
ON Contractors (lastUpdated, expertise);
`,`CREATE INDEX expertise_index ON 
Contractors(lastUpdated) 
INCLUDE (expertise);
`,`CREATE INDEX expertise_index 
ON Contractors (expertise) 
WHERE lastUpdated > '20140101';
`,`CREATE INDEX expertise_index
ON Constractors (expertise, lastUpdated);
`],correct_answers:[3]},{questionNumber:"48.",question:`In baza de date folosită de dumneavoastră aveți o tabelă numită Personal, al cărei proprietar este student. S-a creat o vedere numită Angajati, pentru a limita accesul la tabela Personal, care are ca proprietar pe Ana. Unuia dintre utilizatorii bazei de date i-a fost acordată permisiunea INSERT pe vederea Angajati și i-a fost interzisă permisiunea INSERT pe tabela Personal; când încearcă să insereze o linie în vederea Angajati, instrucțiunea INSERT eșuează. Trebuie să rezolvați această problemă. Ce ar trebui să faceți?
`,answers:[`Acordați proprietarului tabelei Personal permisiunea SELECT pe vederea Angajati.
`,`Acordați proprietarului vederii Angajati permisiunea INSERT pe tabela Personal.
`,`Schimbați proprietarul vederii Angajati în student.
`,`Acordați permisiunea INSERT pe tabela Personal utilizatorului.
`],correct_answers:[3]},{questionNumber:"49.",question:`Ați creat o vedere folosind comanda:
CREATE VIEW dbo.AngajatiNoi
    AS SELECT
        Nume,
        SalariuLunar,
        (SalariuLunar * 12) AS SalariuAnual,
        Data_Ang
        FROM dbo.ResurseUmane
        WHERE Nume IS NOT NULL
            AND Data_Ang > '1/1/2014'
    WITH CHECK OPTION;
Trebuie să inserați o linie folosind această vedere. Ce instrucțiune ar trebui să folosiți?
`,answers:[`INSERT INTO dbo. AngajatiNoi (Nume, SalariuAnual, Data_Ang) VALUES ('Popa Ion', 50000, '3/12/2014');
`,`INSERT INTO dbo. AngajatiNoi (Nume, SalariuLunar, Data_Ang) VALUES ('Mihnea George', 4000, '5/13/2014');
`,`INSERT INTO dbo. AngajatiNoi (Nume, SalariuLunar, Data_Ang) VALUES ('Stan Remus’, 2500, '11/5/2010');
`,`INSERT INTO dbo. AngajatiNoi (Nume) VALUES ('Tonoiu Petre');
`],correct_answers:[2]},{questionNumber:"50.",question:`Ați creat o tabelă folosind instrucțiunea:
CREATE TABLE dbo.Products (ID int IDENTITY(1,1) NOT NULL,
    Name nvarchar(60) NOT NULL, Cost decimal(10,2),
    SalePrice decimal(10,2), CurrentStock bigint, NumberSold bigint)
Un utilizator necesită următoarele tipuri de acces:
-SELECT pe coloanele Name și SalePrice;
-SELECT pe stocul disponibil(diferența dintre CurrentStock și NumberSold );
-ALTER pe coloanele Name și SalePrice.
Trebuie să acordați permisiuni pentru a satisface aceste cerințe, fără a da permisiuni suplimentare sau a restricționa accesul. Ce ar trebui să faceți?
`,answers:[`Acordați utilizatorului permisiunile SELECT și ALTER pe vederea definită de instrucțiunea: CREATE VIEW dbo.CustomerProduct AS SELECT Name, SalePrice, (CurrentStock - NumberSold) AS AvailableStock FROM dbo.Products.
`,`Acordați utilizatorului permisiunea SELECT pe coloanele Name, SalePrice, CurrentStock și NumberSold și permisiunea ALTER pe coloanele Name și SalePrice din tabela Products.
`,`Acordați utilizatorului permisiunea ALTER pe vederea definită de instrucțiunea: CREATE VIEW dbo.CustomerProductSelect AS SELECT Name, SalePrice, (CurrentStock - NumberSold) AS AvailableStock FROM dbo.Products.
`,"Creați două proceduri stocate, una care să execute instrucțiunea SELECT din tabelă și alta care să permită ALTER pe coloanele Name și SalePrice, apoi acordați permisiunea EXECUTE pe proceduri."],correct_answers:[1,4]}];export{e as default};
