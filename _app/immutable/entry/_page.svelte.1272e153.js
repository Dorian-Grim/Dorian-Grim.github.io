import{S as oe,i as ce,s as le,k as C,q as x,a as O,l as S,m as h,r as D,h as N,c as I,n as E,b as R,G as f,J as U,K,u as Y,H as V,L as me,I as Q,M as re,N as Ye,O as ir,P as nr,Q as Oe,R as Xe,T as tr,o as sr,e as X,d as k,f as de,g as j,v as pe,U as Qe,y as ne,z as te,p as L,A as se,B as ue,V as Ie,W as ve,w as Ze,X as $e,Y as Ne,Z as qe,_ as er}from"../chunks/index.be198b1e.js";import{w as be,r as ur}from"../chunks/index.bed23f6d.js";const or=[{questionNumber:"1.",question:`Se dă următorul algoritm:

            for i = 1, n
                                  poz[i] = 1
            endfor
            for i = 1, n-1
                        for j = i+1, n
                                  if x[j] &lt; x[i] then poz[i] = poz[i] + 1
                                                               else poz[j] = poz[j] + 1
                                  endif
                        endfor
            endfor
Știind că datele de intrare sunt n = 7 și vectorul x = (9, 15, 23, 2, 5, 4, 8) care vor fi valorile vectorului poz la sfârșitul algoritmului?`,answers:["(5, 6, 7, 1, 2, 3, 4)","(5, 6, 7, 1, 3, 2, 4)","(6, 5, 7, 1, 2, 3, 4)","(1, 2, 3, 4, 5, 6, 7)"],correct_answers:[2]},{questionNumber:"2.",question:`Se dă următoarea funcție recursivă
    1)   int inaltime(NodArb *rad)
    2)   // returneaza inaltimea unui arbore binar
    3)   {
    4)           if(rad == NULL) return 0;
    5)           ...............................................................................................
    6)           return 1 + max(inaltime(rad->stang), inaltime(rad->drept));
    7)
    8)   }
Ce instrucțiuni trebuie scrise în linia de cod 5) pentru ca funcția să returneze înălțimea unui arbore binar?`,answers:["instrucțiunea vidă","int inaltime =0;","else if(rad->stang == NULL && rad->drept == NULL) return 0;","else"],correct_answers:[3]},{questionNumber:"3.",question:`Se dă următoarea funcție
                        int cautare(int x[], int first, int last, int value)
                        {   int mid;
                            if(first > last) return -1;
                            mid = (first + last) / 2;
                            if (x[mid] == value) return mid;
                            if(x[mid] &lt; value) return cautare(x, mid + 1, last, value);
                            else return cautare(x, first, mid - 1, value);
                        }
Dacă vectorul x = (2, 4, 5, 8, 9, 15, 23), care va fi rezultatul apelării funcției cautare (x, 2, 6, 8) ?`,answers:["-1","2","3","1"],correct_answers:[3]},{questionNumber:"4.",question:`Parcurgerea în preordine a arborelui binar din Fig. 1 va afișa
<img style="margin: 10px 0; width: 100%;" src="images/algoritmi_fig1.png" alt="Poza a fost incarcata gresit" />
<span style="text-align: center; display: block">Fig. 1</span>`,answers:["10, 4, 1, 9, 21, 15, 28, 23","10, 4, 1, 9, 23, 21, 28, 15","1, 4, 9, 10, 15, 21, 23, 28","10, 4, 1, 9, 21, 15, 23, 28"],correct_answers:[4]},{questionNumber:"5.",question:`Parcurgerea în inordine a arborelui binar din Fig. 1 va afișa
<img style="margin: 10px 0; width: 100%;" src="images/algoritmi_fig1.png" alt="Poza a fost incarcata gresit" />
<span style="text-align: center; display: block">Fig. 1</span>`,answers:["10, 4, 1, 9, 21, 15, 23, 28","1, 4, 9, 10, 15, 21, 23, 28","1, 4, 9, 10, 15, 21, 28, 23","1, 4, 9, 10, 21, 23, 28, 15"],correct_answers:[2]},{questionNumber:"6.",question:`Parcurgerea în postordine a arborelui binar din Fig. 1 va afișa
<img style="margin: 10px 0; width: 100%;" src="images/algoritmi_fig1.png" alt="Poza a fost incarcata gresit" />
<span style="text-align: center; display: block">Fig. 1</span>`,answers:["1, 4, 9, 10, 15, 21, 23, 28","1, 4, 9, 10, 15, 21, 28, 23","1, 9, 4, 15, 28, 23, 21, 10","1, 9, 4, 15, 23, 28, 21, 10"],correct_answers:[3]},{questionNumber:"7.",question:`Ce returnează următoarea funcție dacă rad este pointer la rădăcina unui arbore binar nenul?
    int fct(NodArb *rad)
    {
              if(rad == NULL) return 0;
              return 1 + fct(rad->stang) + fct(rad->drept);
    }`,answers:["0","1","numărul de noduri terminale ale arborelui","numărul de noduri ale arborelui."],correct_answers:[4]},{questionNumber:"8.",question:"Ordinul de complexitate a algoritmului Bubblesort (metoda bulelor) este",answers:["O (n)","O(n<sup>2</sup>)","O(n log n)","O(n<sup>3</sup>)"],correct_answers:[2]},{questionNumber:"9.",question:"Cel mai rău caz pentru algoritmul de sortare rapidă este cazul în care",answers:["vectorul este deja sortat","vectorul nu este creat aleator","toate elementele vectorului sunt pare","vectorul conține și elemente negative"],correct_answers:[1]},{questionNumber:"10.",question:"Câte comparații se fac dacă se folosește algoritmul de căutare secvențială pentru căutarea elementului 12 în vectorul (2, 3, 6, 9, 10, 25)?",answers:["6","5","3","1"],correct_answers:[1]},{questionNumber:"11.",question:"Câte comparații se fac dacă se folosește algoritmul de căutare binară pentru căutarea elementului 12 în vectorul (2, 3, 6, 9, 10, 25)?",answers:["6","5","3","1"],correct_answers:[3]},{questionNumber:"12.",question:"O listă liniară în care inserările în lista se fac pe la un capăt, iar ștergerile pe la celălalt capăt se numește",answers:["stivă","vector","coadă","arbore"],correct_answers:[3]},{questionNumber:"13.",question:"Care din următorii algoritmi au ordinul de complexitate O(n log n)?",answers:["Bubblesort (sortarea cu metoda bulelor)","Mergesort (sortarea prin interclasare)","sortarea prin inserare","Quicksort(sortarea rapidă)."],correct_answers:[2,4]},{questionNumber:"14.",question:"Cel mai rău caz pentru algoritmul de căutare secvențială este cazul în care",answers:["elementul căutat este la mijlocul listei","elementul căutat nu se află în listă","elementul căutat este pe ultima poziție în listă","vectorul este ordonat crescator"],correct_answers:[2,3]},{questionNumber:"15.",question:"Timpul de execuție al unui algoritm se măsoară în",answers:["numărul de kilocteți necesari","numărul de instrucțiuni ale algoritmului","numărul de operații cheie","numărul de milisecunde necesar executării."],correct_answers:[3]},{questionNumber:"16.",question:"Ordinul de complexitate a algoritmului de căutare binară este",answers:["O(n)","O(n<sup>2</sup>)","O(n log n)","O(log n)"],correct_answers:[4]},{questionNumber:"17.",question:"O problemă se poate rezolva prin trei algoritmi, unul cu ordinul de complexitate O(n), altul cu ordinul O(log n) și al treilea cu ordinul O(n log n). Care este cel mai bun?",answers:["cel cu ordinul O(n)","cel cu ordinul O(log n)","cel cu ordinul O(n log n)","Toate sunt la fel."],correct_answers:[2]},{questionNumber:"18.",question:`Se dă următorul algoritm:

            for i = 1, n -1
                  index_min = i
                  for j = i + 1, n
                        if x[index_min] > x[j] then index_min = j
                        endif
                  endfor
                  if i  index_min then
                                    temp=x[i]
                                    x[i]=x[index_min]
                                    x[index_min]=temp
                  endif
            endfor
  
Care vor fi valorile vectorului x după terminarea pasului i = 3 știind că la intrare avem valorile n = 7 și vectorul x = (9, 15, 23, 2, 5, 4, 8)?`,answers:["(2, 4, 5, 9, 15, 23, 8)","(2, 5, 9, 15, 23, 4, 8)","(2, 5, 9, 15, 4, 23, 8)","(2, 4, 5, 9, 23, 15, 8)"],correct_answers:[4]},{questionNumber:"19.",question:`Se dă următorul algoritm. Care vor fi valorile vectorului x după terminarea pasului i = 5, știind că la intrare avem valorile n = 7 și x = (9, 15, 23, 2, 5, 4, 8)?

        for i = 2, n
                  elem = x[i]
                  j = i -1
                  while j >= 1 and x[j] > x[i]
                            j = j –1
                   endwhile
                  pozitie = j +1
                  for j= i, pozitie+1, -1
                            x[j] = x[j -1]
                  endfor
                  x[pozitie] = elem
        endfor`,answers:["(2, 4, 5, 9, 15, 23, 8)","(2, 5, 9, 15, 23, 4, 8)","(2, 5, 9, 15, 4, 23, 8)","(2, 4, 5, 8, 9, 15, 23)"],correct_answers:[2]},{questionNumber:"20.",question:"Se consideră următoarea secvență de operații într-o stivă: push(2), push(10), push(8), pop(), push(9), push(6), pop(), pop(), push(7), push(3), pop(), pop(), pop(), pop(). În ce ordine vor fi scoase din stivă elementele? (push = inserare, pop = ștergere)",answers:["(2, 10, 8, 9, 6, 7, 3)","(3, 7, 6, 9, 8, 10, 2)","(8, 6, 9, 3, 7, 10, 2)","(6, 9, 3, 7, 8, 10, 2)"],correct_answers:[3]},{questionNumber:"21.",question:"Se consideră următoarea secvență de operații într-o coadă: enqueue(2), enqueue(10), enqueue(8), dequeue(), enqueue(9), enqueue(6), dequeue(), dequeue(), enqueue(7), enqueue(3), dequeue(), dequeue(),dequeue(), dequeue(). În ce ordine vor fi scoase din coadă elementele? (enqueue = inserare, dequeue = ștergere)",answers:["(2, 10, 8, 9, 6, 7, 3)","(3, 7, 6, 9, 8, 10, 2)","(8, 6, 9, 3, 7, 10, 2)","(6, 9, 3, 7, 8, 10, 2)"],correct_answers:[1]},{questionNumber:"22.",question:`Se consideră următoarea funcție care caută o valoare dată într-o listă înlănțuită. val este variabila a cărei valoare este căutată, iar head este un pointer la capul listei în care se face căutarea.
    1)   NOD *cauta(NOD *head, int val)
    2)   {
    3)         NOD *iter = head; int gasit=0;
    4)         while (.......................)
    5)         {
    6)           if (iter -> info == val) gasit = 1;
    7)           else iter = iter -> link;
    8)         }
    9)         if(gasit) return iter;
    10)        else return NULL;
    11)  }

Cum trebuie completată linia de cod 4 astfel încât funcția să ruleze corect și să returneze un pointer la nodul cu valoarea căutată sau NULL dacă valoarea nu a fost găsită în listă?`,answers:["!gasit && iter != NULL","!gasit","iter!=NULL && !gasit","gasit ==0"],correct_answers:[1,3]},{questionNumber:"23.",question:`Se consideră următoarea funcție care are drept variabilă de intrare un pointer la capul unei liste înlănțuite. Ce face această funcție?
    1)   NOD *fct(NOD *head)
    2)   {
    3)         if (head == NULL) return NULL;
    4)         head = head -> link;
    5)         return head;
    6)   }`,answers:["returnează NULL","returnează un pointer la capul listei","elimină primul nod al listei și returnează un pointer la noul cap al listei","returnează NULL dacă lista este vidă"],correct_answers:[3,4]},{questionNumber:"24.",question:"Cel mai rău caz pentru algoritmul de sortare prin selecție este cazul în care",answers:["vectorul este ordonat descrescător","cel mai mare element al vectorului se află în prima poziție în vector","nu există un cel mai rău caz","vectorul este ordonat crescător"],correct_answers:[3]},{questionNumber:"25.",question:"Cel mai bun caz pentru algoritmul de sortare prin metoda bulelor (Bubblesort) este cazul în care",answers:["cel mai mic element al vectorului se află pe prima poziție în vector","cel mai mare element al vectorului se află în ultima poziție în vector","nu există un cel mai bun caz","vectorul este ordonat crescător"],correct_answers:[4]},{questionNumber:"26.",question:`Se consideră lista înlănțuită cu elemente numere întregi din Fig. 2:
<img style="margin: 10px 0; width: 100%;" src="images/algoritmi_fig2.png" alt="Poza a fost incarcata gresit" />
<span style="text-align: center; display: block">Fig. 2</span>
Dată următoarea definiție a tipului de date ce corespunde unui nod al listei,

      struct NOD
      {
                             int info;
                             NOD *link;
      };
ce va afișa următoarea funcție, dacă este apelată prin print(HEAD)?
      void print(NOD *head)
      {
           NOD *iter=head;
           while(iter!=NULL)
           {
           cout &lt;&lt; iter->info&lt;&lt;", ";
           iter=iter->link;
           }
      }`,answers:["10, 2, 8, 5, 7, 3","3, 7, 5, 8, 2, 10","2, 8, 5, 7, 3","2, 8, 5, 7"],correct_answers:[1]},{questionNumber:"27.",question:`Se consideră lista înlănțuită cu elemente numere întregi din Fig. 2. Dată următoarea definiție a tipului de date ce corespunde unui nod al listei,
     struct NOD
      {
                             int info;
                             NOD *link;
      };
ce va afișa următoarea funcție, dacă este apelată prin print(HEAD)?
      void print(NOD *head)
      {
           NOD *iter=head;
           while(iter->link !=NULL)
           {
           cout &lt;&lt; iter->info&lt;&lt;", ";
           iter=iter->link;
           }
      }`,answers:["10, 2, 8, 5, 7, 3","10, 2, 8, 5, 7","2, 8, 5, 7, 3, 10","2, 8, 5, 7"],correct_answers:[2]},{questionNumber:"28.",question:`Se consideră lista înlănțuită cu elemente numere întregi din Fig. 2. Dată următoarea definiție a tipului
de date ce corespunde unui nod al listei,
     struct NOD
      {
                           int info;
                           NOD *link;
      };
ce va afișa următoarea funcție, dacă este apelată prin print(HEAD)?
      void print(NOD *head)
      {
           NOD *iter=head;
           while(iter->link !=NULL)
           {
           iter=iter->link;
           if ((iter-> info)%2) cout &lt;&lt; iter->info&lt;&lt;", ";
           }
      }`,answers:["10, 2, 8, 5, 7, 3","10, 3, 7, 5, 8, 2","2, 8, 5, 7, 3","5, 7, 3"],correct_answers:[4]},{questionNumber:"29.",question:`Se dă următoarea funcție
      void interclasare(int x[], int prim, int mijloc, int ultim, int C[])
      {
                // lista A: x[prim ..mijloc]
                // lista B: x[mijloc+1 ..ultim]
                // lista C: C[0.. ultim - prim]
                int iterA = prim, iterB = mijloc+1, iterC = 0;
                while (iterA &lt;= mijloc && iterB &lt;=ultim)
                    if (x[iterA] &lt; x[iterB])
                                    C[iterC ++]= x[iterA ++];
                    else C[iterC ++]= x[iterB ++];
                while (iterA &lt;= mijloc)
                          C[iterC ++]= x[iterA ++];
                while (iterB &lt;= ultim)
                          C[iterC ++]= x[iterB ++];
      }
Dacă vectorul x = (9, 15, 23, 25, 4, 5, 8), care va fi vectorul C la apelarea funcției interclasare (x, 0, 3, 6, C)?`,answers:["4, 5, 8, 9, 15, 23, 25","0, 0, 0, 0, 0, 0, 0","9, 4, 15, 5, 23, 8, 25","9, 15, 23, 25, 4, 5, 8"],correct_answers:[1]},{questionNumber:"30.",question:`Se dă următoarea funcție, care apelează funcția interclasare descrisă la exercițiul 29.
      void mergesort(int x[], int prim, int ultim)
      {
             if (prim &lt; ultim)
             {
                     int mijloc = (prim + ultim)/2;
                     mergesort(x, prim, mijloc);
                     mergesort(x, mijloc + 1, ultim);
                     int C[ultim - prim +1];
                     interclasare(x, prim, mijloc, ultim, C);
                     for (int i = prim; i &lt;= ultim; i++)
                     x[i]=C[i-prim];
             }
      }
La apelul funcției mergesort(x, 0, 6) unde vectorul x = (9, 15, 23, 2, 4, 5, 8), de câte ori va fi apelată funcția mergesort (incluzând apelul inițial)?`,answers:["1","3","13","7"],correct_answers:[3]},{questionNumber:"31.",question:"Ordinul de complexitate a algoritmului de sortare prin inserare este",answers:["O (n)","O(n<sup>2</sup>)","O(n log n)","O(n<sup>3</sup>)"],correct_answers:[2]},{questionNumber:"32.",question:"Ordinul de complexitate a algoritmului de căutare secvențială este",answers:["O (n)","O(n<sup>2</sup>)","O(n log n)","O(log n)"],correct_answers:[1]},{questionNumber:"33.",question:"O listă liniară în care inserările și ștergerile în lista se fac pe la un singur capăt se numește",answers:["stivă","vector","coadă","arbore"],correct_answers:[1]},{questionNumber:"34.",question:"Ordinul de complexitate a algoritmului de sortare prin selecție este",answers:["O (n)","O(n<sup>2</sup>)","O(n log n)","O(n<sup>3</sup>)"],correct_answers:[2]},{questionNumber:"35.",question:`Se dă următoarea funcție în care front și rear sunt variabile globale și reprezintă pointeri la nodurile unei liste liniare reprezentate simplu înlănțuit, front la primul nod al listei, iar rear pointer la ultimul nod.

        void fct(int a)
        {
                  nod *p = new nod;
                  if (p != NULL)
                  {
                            p ->info = a;
                            p ->link = NULL;
                            if(rear!=NULL) rear->link=p;
                            else front=p;
                            rear = p;
                  }
                  else cout &lt;&lt; "OVERFLOW"&lt;&lt;endl;
        }

Ce face această funcție?`,answers:["Inserează un nod la începutul listei.","Inserează un nod la sfârșitul listei.","Șterge nodul de la începutul listei.","Șterge nodul de la sfârșitul listei."],correct_answers:[2]},{questionNumber:"36.",question:"Cel mai rău caz pentru algoritmul de sortare prin inserare este cazul în care",answers:["vectorul este deja sortat","vectorul este crescător și se dorește sortarea lui în ordine descrescătoare","vectorul este descrescător și se dorește sortarea lui în ordine crescătoare","vectorul conține și elemente negative"],correct_answers:[2,3]},{questionNumber:"37.",question:"Cel mai bun caz pentru algoritmul de sortare prin inserare este cazul în care",answers:["vectorul este deja sortat în ordinea dorită","vectorul nu este creat aleator","vectorul este descrescător și se dorește sortarea lui în ordine crescătoare","vectorul conține și elemente negative"],correct_answers:[1]},{questionNumber:"38.",question:"Numărul minim de comparații între elementele unui vector cu n elemente care este sortat cu algoritmul de sortare prin inserare este",answers:["n","n+1","n-1","log n."],correct_answers:[3]},{questionNumber:"39.",question:"Numărul minim de comparații între elementele unui vector cu n elemente care este sortat cu algoritmul de sortare prin metoda bulelor (Bubblesort) este",answers:["n-1","n+1","n","n log n"],correct_answers:[1]},{questionNumber:"40.",question:"Numărul maxim de comparații între elementele unui vector cu n elemente care este sortat cu algoritmul de sortare prin metoda bulelor (Bubblesort) este",answers:["n!","n(n+1)/2","n(n-1)/2","n log n."],correct_answers:[3]},{questionNumber:"41.",question:"Câte comparații se fac dacă se folosește algoritmul de căutare secvențială pentru căutarea elementului 9 în vectorul (8, 3, 5, 9, 11, 2)?",answers:["6","5","3","4"],correct_answers:[4]},{questionNumber:"42.",question:"Câte comparații se fac dacă se folosește algoritmul de căutare binară pentru căutarea elementului 19 în vectorul (1, 2, 3, 5, 8, 9, 19)?",answers:["6","5","3","O(log 7)"],correct_answers:[3]},{questionNumber:"43.",question:"Dacă se aplicăm metoda bulelor (bubblesort) pentru sortarea vectorului x = (9, 15, 23, 25, 4, 8, 5), cum se va modifica vectorul x după prima parcurgere a sa?",answers:["4, 5, 8, 9, 15, 23, 25","9, 15, 23, 4, 8, 5, 25","9, 4, 15, 5, 23, 8, 25","9, 15, 23, 25, 4, 5, 8"],correct_answers:[2]},{questionNumber:"44.",question:"Dacă se aplicăm metoda bulelor (bubblesort) pentru sortarea vectorului x = (9, 15, 23, 25, 4, 8, 5), cum se va modifica vectorul x după două parcurgeri ale sale?",answers:["4, 5, 8, 9, 15, 23, 25","9, 15, 4, 8, 5, 23, 25","9, 4, 15, 5, 23, 8, 25","9, 15, 23, 25, 4, 5, 8"],correct_answers:[2]},{questionNumber:"45.",question:"Dacă se aplicăm sortarea prin inserare pentru sortarea vectorului x = (9, 15, 23, 25, 4, 8, 5), care este primul element al vectorului a cărui analiză va implica efectuarea de modificări asupra vectorului?",answers:["15","23","25","4"],correct_answers:[4]},{questionNumber:"46.",question:"Care din următoarele afirmații sunt adevărate?",answers:["La aplicarea algoritmului de sortare rapidă elementul din mijloc este mutat pe prima poziție.","La aplicarea algoritmului de sortare rapidă elementul de pe prima poziție este mutat pe poziția din mijloc.","La aplicarea algoritmului de sortare rapidă se alege un element din listă, numit pivot și se rearanjează lista, prin interschimbări, inclusiv prin mutarea pivotului pe o altă poziție, astfel încât toate elementele mai mici decât pivotul să fie poziționate inaintea lui, iar toate elementele mai mari să fie poziționate după acesta.","La aplicarea algoritmului de sortare rapidă nu se alege niciun element pivot"],correct_answers:[3]},{questionNumber:"47.",question:`Care din următoarele afirmații sunt adevărate?
<img style="margin: 10px 0; width: 100%;" src="images/algoritmi_fig1.png" alt="Poza a fost incarcata gresit" />`,answers:["Arborele din figura Fig. 1 este un arbore binar.","Arborele din figura Fig. 1 nu este un arbore binar.","Arborele din figura Fig. 1 este un arbore binar de căutare.","Arborele din figura Fig. 1 nu este un arbore binar de căutare."],correct_answers:[1,3]},{questionNumber:"48.",question:`Parcurgerea in preordine a arborelui din Fig. 2 va afișa
<img style="margin: 10px 0; width: 100%;" src="images/algoritmi_fig2_1.png" alt="Poza a fost incarcata gresit" />
<span style="text-align: center; display: block">Fig. 2</span>`,answers:["/, +, 50, *, 25, 3, 8, -, 3","/, 50, +, *, 3, 25, 8, -, 3","50, +, 25, *, 3, 8, -, 3, /","/, +, 50, *, 25, 3, -, 8, 3"],correct_answers:[4]},{questionNumber:"49.",question:`Parcurgerea in inordine a arborelui din Fig. 2 va afișa
<img style="margin: 10px 0; width: 100%;" src="images/algoritmi_fig2_1.png" alt="Poza a fost incarcata gresit" />
<span style="text-align: center; display: block">Fig. 2</span>`,answers:["/, +, 50, *, 25, 3, 8, -, 3","50, +, 25, *, 3, /, 8, -, 3","50, +, 25, *, 3, 8, -, 3, /","50, /, +, *, 25, 3, -, 8, 3"],correct_answers:[2]},{questionNumber:"50.",question:`Parcurgerea in postordine a arborelui din Fig. 2 va afișa
<img style="margin: 10px 0; width: 100%;" src="images/algoritmi_fig2_1.png" alt="Poza a fost incarcata gresit" />
<span style="text-align: center; display: block">Fig. 2</span>`,answers:["50, 25, 3, *, +, 8, 3, -, /","/, 50, +, *, 3, 25, 8, -, 3","50, +, 25, *, 3, 8, -, 3, /","/, +, 50, *, 25, 3, -, 8, 3"],correct_answers:[1]}],cr=[{questionNumber:"1.",question:"O bază de date reprezintă:",answers:["Un ansamblu de posturi de lucru, fişiere şi unităţi de prelucrare","Un ansamblu de articole secvenţiale accesate direct","Un ansamblu de înregistrări accesate în paralel","Un ansamblu integrat de înregistrări sau de fişiere interconectate în mod logic","Suportul pentru înregistrarea datelor"],correct_answers:[4]},{questionNumber:"2.",question:"Depozitul de date reprezintă:",answers:["O colecţie de informaţii privind un sector dintr-o întreprindere sau o firmă","O bază de date împreună cu SGBD-ul asociat","O colecţie de date organizate secvenţial","O bază de date special concepută prin agregarea tuturor datelor dintr-o organizaţie sau întreprindere, în vederea sprijinirii procesului de luare a deciziilor","O bibliotecă de informaţii privind un anumit sector economic"],correct_answers:[4]},{questionNumber:"3.",question:"Nivelul fizic de abstractizare a datelor permite:",answers:["Utilizarea concretă a posibilităţilor SGBD-ului","Proiectarea dicţionarului de date","Asigurarea securităţii datelor","Automatizarea operaţiilor de întreţinere şi dezvoltare a programelor","Descrierea structurii sub care datele se regăsesc pe suportul de memorare"],correct_answers:[5]},{questionNumber:"4.",question:"Când se recomandă să se introducă datele într-o baza de date?",answers:["După crearea fiecărei tabele în parte","După crearea tuturor tabelelor şi definirea restricţiilor","După crearea tuturor tabelelor","Oricând","Datele sunt introduse de către administrator. Utilizatorii doar interogează baza de date"],correct_answers:[2]},{questionNumber:"5.",question:"Care dintre următoarele enunţuri caracterizează modelul relaţional?",answers:["Este singurul model în care structura datelor este definită prin normalizare","Asigură independenţa dintre date şi prelucrari","Este fundamentat pe teoria matematică a relaţiilor","Respectă restricţiile referenţiale","Trebuie să existe cel puţin o cheie secundară"],correct_answers:[3]},{questionNumber:"6.",question:"Intersecţia a două relaţii:",answers:["Are ca rezultat o relaţie cu un număr dublu de linii","Are ca rezultat o relaţie cu un număr de două ori mai mic de linii","Este o operaţie unară","Cere ca acestea sa aibă aceeaşi schemă","Va avea ca rezultat o relaţie cu gradul egal cu suma gradelor relaţiilor iniţiale"],correct_answers:[4]},{questionNumber:"7.",question:`Se dă tabelul:
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
(DATA_COMPRESSION = ROW);`,"ALTER TABLE dbo.Products ALTER COLUMN Name ADD SPARSE;","ALTER TABLE dbo.Products ALTER COLUMN Volume int;","ALTER TABLE dbo.Products ALTER COLUMN Cost decimal(10,2);"],correct_answers:[2,4]}],lr=[{questionNumber:"1.",question:"Testarea site-urilor de comert electronic se poate face cu aplicatia software:",answers:["eValid","Rational SiteCheck","SilkPerformer","LoadRunner","toate"],correct_answers:[5]},{questionNumber:"2.",question:"Cardurile bancare nu contin:",answers:["Numele emitentului, numarul cardului, perioada de valabilitate, numele posesorului inscriptionate pe avers prin tiparire, gofrare sau gravare cu laser","Sigla emitentului, holograma de securitate, logo-ul organizatiei, pe avers","Suma de bani aflata in contul posesorului","Banda magnetica si/sau smart card"],correct_answers:[3]},{questionNumber:"3.",question:"Mecanismele de baza ale comertului electronic sunt:",answers:["C2C","B2C","B2B","toate"],correct_answers:[4]},{questionNumber:"4.",question:"Conform Legii comertului electronic din Romania, falsificarea instrumentelor de plata electronica se pedepseste cu:",answers:["in lege nu sunt prevazute sanctiuni","cu inchisoare de la 3 la 12 ani si interzicerea unor drepturi","cu amenda contraventionala sau inchisoare de la 1 la 2 ani","tentativa se pedepseste"],correct_answers:[2]},{questionNumber:"5.",question:"Proiectarea, implementarea si dezvoltarea unui site de comert electronic se poate face folosind aplicatia software:",answers:["Pay Pal","IBM BMP Suite","MOODLE","OsCommerce"],correct_answers:[4]},{questionNumber:"6.",question:"Care din urmatoarele enunturi referitoare la comertul electronic este fals:",answers:["eBay.com este cel mai mare magazin de comert electronic la nivel mondial","Skimming-ul si phishing-ul utilizate in fraude cu carduri bancare si furt de identitate reprezinta infractiuni criminale informatice","Protocolul SET (Secure Electronic Transaction) reprezinta un pachet de specificatii de securitate si de formate, dezvoltat de Visa si MasterCard, care permit utilizatorilor sa efectueze plati electronice cu cardurile bancare in Internet","E-commerce (comertul electronic) reprezinta o strategie moderna in ceea ce priveste modul de a face afaceri, cea mai importanta componenta a sa fiind E-business (alaceri electronice)"],correct_answers:[4]},{questionNumber:"7.",question:"Conform legislatiei nationale in vigoare, consumatorul are dreptul de a denunta unilateral contractul la distanta, fara penalitati si fara invocarea vreunui motiv in timp de:",answers:["30 de zile calendaristice de la semnare","15 zile lucratoare de la semnare","10 zile lucratoare de la semnare, daca comerciantul a specificat conditiile de denuntare unilaterala a contractului incheiat la distanta","90 de zile de la semnarea contractului incheiat la distanta"],correct_answers:[3]},{questionNumber:"8.",question:"Arhitectura Java Card nu contine nivelul:",answers:["Cardlet-uri (applet-uri), aplicatii care sunt incarcate in card printr-un incarcator standard (de exemplu, EZ Formatter);","Masina Virtuala Java, inclusa in card, care este un interpretor care translateaza codul Java in instructiuni ale microprocesorului","Sesiune de prezentare, nivel intermediar intre Cardlet-uri si Masina Virtuala Java","Sistemul de operare GPOS- General Purpose Operating System"],correct_answers:[3]},{questionNumber:"9.",question:"Sistemul electronic de transfer de fonduri (EFT-Electronic Found Transfer) reprezinta:",answers:["ansamblul dispozitivelor si procedeelor speciale care asigura deplasarea fluxurilor monetare de la platitor la beneficiar intr-un mediu exclusiv electronic","un protocol de comunicatie intre POS (Point Of Sales) si ATM (Automatic Teller Machine)","o instructiune comuna la nivel mondial pentru sistemele bancare","nici unul"],correct_answers:[1]},{questionNumber:"10.",question:"Operatiunile cu carduri bancare cuprind urmatoarele etape:",answers:["emiterea cardurilor","acceptarea cardurilor","distrugerea cardurilor","toate"],correct_answers:[4]},{questionNumber:"11.",question:"Dupa modul de stocare a caracteristicilor de securitate cardurile se impart in:",answers:["carduri cu banda magnetica - care contin pe 3 piste ce memoreaza informatii criptate despre utilizator, emitent, algoritmul de codare etc;","carduri cu microprocesor – smart-carduri- avand stocate in chip datele de securitate si permitand functionarea ca portofel electronic","carduri de debit - care asigura utilizatorului achizitionarea de bunuri si servicii sau retrageri de numerar, cu conditia prezervarii unor fonduri intr-un cont de card, si efectuarea de cheltuieli in limita soldului disponibil","numai a) si b)"],correct_answers:[4]},{questionNumber:"12.",question:"Protocolul SET (Secure Electronic Transaction) asigură urmatoarele:",answers:["un canal securizat între toate părtile implicate într-o tranzactie","imbunătătirea secretului tranzactiilor; informatia este accesibilă părtilor unei tranzactii numai în măsura în care este necesar.","autentificarea participantilor la tranzactii prin folosirea certificatelor digitale","toate"],correct_answers:[4]},{questionNumber:"13.",question:"In domeniul educatiei de tip e-learning, parte componenta a e-business, se poate implementa si utiliza platforma opensource:",answers:["Zen Cart","OSCommerce","MOODLE","IBM WebSphere"],correct_answers:[3]},{questionNumber:"14.",question:"Care din urmatoarele enunturi este fals referitor la dezavantajele utilizarii e-commerce:",answers:["aspectele privind securitatea comertului electronic – cea mai complexa problema","acceptarea noilor modalitati de plata (bani electronici/digitali)","intermediarii pot fi eliminati din lantul de aprovizionare","existenta unui cadrul legal si normativ unitar la nivel global: cadrul fiscal, drepturile asupra proprietatii, protectia datelor consumatorului"],correct_answers:[3]},{questionNumber:"15.",question:"Care dintre urmatoarele enunturi reprezinta componente ale e-business:",answers:["CRM – Customer Relationship Management","SCM – Supply Chain Management","ERP – Enterprise Resource Planning","toate"],correct_answers:[4]},{questionNumber:"16.",question:"Un sistem electronic cu microplati permite efectuare de plati electronice cu valori de pana la:",answers:["1 euro","10 euro","100 euro","1000 euro"],correct_answers:[2]},{questionNumber:"17.",question:"Care din urmatoarele modele nu este specific pentru e-commerce:",answers:["Modelul Paul Timmers","Modelul David Kosiur","Modelul Willian Stallings","Modelul Michael Rappa"],correct_answers:[3]},{questionNumber:"18.",question:"Modelul David Kosiur prezinta cinci procese de baza care au loc in cadrul comertului electronic. Aceste procese sunt:",answers:["distribuirea informatiilor, lansarea comenzilor, plata, onorarea comenzilor, service-ul si asistenta","ofertarea, plata, onorarea comenzilor, service-ul si asistenta, postgarantie","stabilirea pretului, lansarea produselor, plata, distribuitia, receptia","distribuirea informatiilor, stabilirea pretului, livrarea, receptia, service-ul si asistenta"],correct_answers:[1]},{questionNumber:"19.",question:"Care din elementele enumerate nu este specific unui sistem de comert electronic:",answers:["serverele organizatiei care ofera servicii on-line accesibile prin Internet","clientii (persoane fizice sau juridice) care se conecteaza la server folosind diverse tipuri de dispozitive","conturile bancare ale participantilor la care sunt asociate carduri bancare (credit, debit)","tranzactiile - raportate la bunurile si serviciile cumparate"],correct_answers:[3]},{questionNumber:"20.",question:"In cadrul unui sistem de comert electronic o protectie adecvata trebuie acordata consumatorului, protectie care se refera la mai multe aspecte. Care dintre aspectele enumerate este fals?",answers:["interzicerea publicitatii inselatoare","interzicerea promovarii produselor","reglementarea serviciilor financiare","reguli privind raspunderea referitoare la produsele necorespunzatoare"],correct_answers:[2]},{questionNumber:"21.",question:"Care din urmatoarele enunturi nu este un sistem de microplata electronica:",answers:["Cybercoin (proiect CyberCash)","Euro-MicroPayment (proiect UE)","Millicent (proiect Digital)","Micro-Payment (proiect Consortiul W3)"],correct_answers:[2]},{questionNumber:"22.",question:"Care din urmatoarele protocoale este specific este specific pentru tranzactiile electronice:",answers:["FTP","ARP","STP","iKP"],correct_answers:[4]},{questionNumber:"23.",question:"Conform protocolului 3KP toti participantii la o tranzactie electronica trebuie sa posede:",answers:["bani in cont pentru a face tranzactia","certificat digital cu cheia sa publica, precum si cheia privata","doar un certificat digital","canale de comunicatie securizate peste Internet"],correct_answers:[2]},{questionNumber:"24.",question:"Atacurile informatice de tip pharming vizeaza compromiterea:",answers:["serverelor de email","serverelor de DHCP","serverelor de Active Directory/Controler de domeniu","serverelor de DNS"],correct_answers:[4]},{questionNumber:"25.",question:"Un sistem electronic de plati poate fi definit ca un ansamblu de tranzactii generate de:",answers:["conversia banilor numerar in bani electronici si invers","verificarea conturilor bancare asociate cumparatorului sau vanzatorului","schimbul de mesaje criptate si semnate electronic intre participanti (vanzator, cumparator, banci)","operatiile bancare rezultate pe durata efectuarii tranzactiilor electronice"],correct_answers:[1]},{questionNumber:"26.",question:"Care dintre enunturile de mai jos nu constituie o infractiune cu carti de credit:",answers:["SKIMMING","PIMMING","PHARMING","PHISING"],correct_answers:[3]},{questionNumber:"27.",question:"Infrastructura de comunicatii a unei organizatii care realizeaza comert electronic trebuie sa contina urmatoarele doua elemente de baza:",answers:["e-commerce front-end","e-commerce back-end","componente middleware","toate"],correct_answers:[4]},{questionNumber:"28.",question:"Ce etape implica realizarea unui site Web de comert electronic:",answers:["analiza si planificarea site-ului","proiectarea si testarea site-ului","implementarea si promovarea","toate"],correct_answers:[4]},{questionNumber:"29.",question:"Care dintre enunturile de mai jos nu este un participant in tranzactiile de plata din protocoalele iKP:",answers:["verificator","cumparator","achizitor","vanzator"],correct_answers:[1]},{questionNumber:"30.",question:"Protocolul SET defineste o diversitate de tranzactii care folosesc concepte criptografice. Care dintre conceptele enumerate mai jos nu se foloseste in protocolul SET:",answers:["certificate digitale","SSL / TLS","semnatura duala","semnatura digitala"],correct_answers:[2]},{questionNumber:"31.",question:"Modelul unui sistem electronic de plati (Electronic Payment System-EPS) implica, in general, urmatoarele cel putin urmatoarele entitati care interactioneaza:",answers:["o banca B, un cumparator C si un vanzator V","o banca B, un procesator de carduri P, un cumparator C si un vanzator V","un procesator de carduri P, un cumparator C si un vanzator V","un cumparator C, o banca a lui C, un vanzator V si o banca a lui V"],correct_answers:[1]},{questionNumber:"32.",question:"Tranzactiile electronice reprezinta schimburile de mesaje, sub forma unor protocoale, care se desfasoara intre entitatile ce joaca diverse roluri implicate intr-un EPS. Care dintre enunturile de mai jos nu este o tranzactie tipica intr-un:",answers:["tranzactia de identificare a utilizatorilor","tranzactia de retragere","tranzactia de actualizare a platilor","tranzactia de clearing"],correct_answers:[3]},{questionNumber:"33.",question:"Un &lt;scrip> din cadrul protocolului MilliCent are urmatoarele proprietati principalele:",answers:["are valoare doar pentru anumiti vanzatori","se poate cheltui o singura data","este rezistent la falsicare si greu de contrafacut","toate"],correct_answers:[4]},{questionNumber:"34.",question:"In domeniul platilor prin card, transferul electronic de fonduri poate fi realizat cu ajutorul:",answers:["ghiseul automat de banca (ATM - Automatic Teller Machine)","puncte electronice de vanzare la comercianti (EFT POS-Point of Sale)","carduri bancare (cu banda magnetica sau smartcard)","toate"],correct_answers:[4]},{questionNumber:"35.",question:"La fiecare noua tranzactie, portofelul electronic vWALLET implementat de firma VeriFone recunoaste urmatoarele tipuri de instrumente:",answers:["VISA, MasterCard","VISA, MasterCard, American Express, JCB","JCB","American Express"],correct_answers:[2]},{questionNumber:"36.",question:"Care dintre enunturile de mai jos nu reprezinta o norma in domeniul comertului electronic:",answers:["UNCITRAL","Directiva 31/2000/CE","Legea nr.1/2011","Legea 365/2002"],correct_answers:[3]},{questionNumber:"37.",question:"Una dintre afirmatiile de mai jos referitoare la aspectele critice si dezavantajele comertului electronic este falsa. Care este aceea?",answers:["aspectele privind securitatea comertului electronic – cea mai complexa problema","acceptarea noilor modalitati de plata (bani electronici/digitali)","stocurile pot fi minimizate sau chiar eliminate prin procese de productie „Just-In-Time”","cadrul legal si normativ: cadrul fiscal, drepturile asupra proprietatii, protectia datelor consumatorului"],correct_answers:[3]},{questionNumber:"38.",question:"In raport cu sursa de acoperire a cheltuielilor cardurile se impart in:",answers:["carduri cu banda magnetica - care contin pe 3 piste ce memoreaza informatii criptate despre utilizator, emitent, algoritmul de codare etc.","carduri de credit - care asigura utilizatorului achizitionarea de bunuri si servicii sau retrageri de numerar, pe baza unei linii de credit acordate posesorului de card","carduri de debit - care asigura utilizatorului achizitionarea de bunuri si servicii sau retrageri de numerar, cu conditia prezervarii unor fonduri intr-un cont de card, si efectuarea de cheltuieli in limita soldului disponibil","numai b) si c)"],correct_answers:[4]},{questionNumber:"39.",question:"Cardurile cu microprocesor se impart in urmatoarele categorii:",answers:["carduri cu contact (contact-card)","carduri cu memorie (memory-card)","carduri fara contact (contactless-card)","numai a) si c)"],correct_answers:[4]},{questionNumber:"40.",question:"Marcati cu A-adevărat sau F-fals următoarele enunturi referitoare la securitatea e-commerce:",answers:["atacurile de tip DoS (Denial of Service – Refuzul serviciului) afectează functia de disponibilitate a informatiei; ADEVARAT","un craker este un utilizator Internet care nu cauzează pierderi sau pagube prin actiunile sale;  FALS","printre cei mai cunoscuti algoritmi de cifrare asimetrică sunt AES, DES, CAST, IDEA;  FALS","elementele de bază ale PKI (Infrastructuri de Chei Publice) sunt certificatele digitale, autoritătile de certificare si serviciile de management al certificatelor; ADEVARAT"],correct_answers:[1,4]},{questionNumber:"41.",question:"Care din următoarele enunturi nu reprezintă un tip de organizatie de comert electronic:",answers:["organizatii de tip brick-and-mortar","organizatii de tip click-and-brick sau click-and-mortar","organizatii de tip click-and-click","organizatii de tip virtual business"],correct_answers:[3]},{questionNumber:"42.",question:"Conform OG 34/2006, achizitiile publice în România se derulează pe platforma online:",answers:["SEAP","SETI","ANISP","ORDA"],correct_answers:[1]},{questionNumber:"43.",question:"Tranzactiile electronice din punctul de vedere al comertului electronic prezintă următoarele cerinte:",answers:["cerinte privind legislatia aplicabilă","cerinte privind standardele acceptate","cerinte privind securitatea tranzactiilor","toate"],correct_answers:[4]},{questionNumber:"44.",question:"Utilizarea cardurilor bancare la retragerea de numerar dintr-un ATM presupune autentificarea cu:",answers:["un factor sau A (ce am? sau ce stiu?)","doi factori sau AA (ce am ? si ce stiu?)","trei factori sau AAA (ce am ? si ce stiu? si cine sunt?)","patru factori sau AAAA (ce am ? si ce stiu? si cine sunt? si unde sunt?)"],correct_answers:[2]},{questionNumber:"45.",question:"Principalele amenintari asupra tranzactiilor din comertul electronic sunt:",answers:["Interceptarea informatiilor referitoare la plata (de exemplu numarul cardului de credit si a numărului CVV)","Interceptarea parolelor sau a altor informatii de acces ale sistemului (de exemplu, PIN)","Modificarea datelor unei tranzactii inaintea livrarii","toate"],correct_answers:[4]},{questionNumber:"46.",question:"Un sistem electronic de plati (Electronic Payment System-EPS) poate fi definit ca un ansamblu de tranzactii generate de:",answers:["conversia banilor numerar (cash sau din cont) in bani electronici si invers","transferul banilor electronici intre utilizatorii care folosesc sistemul EPS","extragerea de bani din cont, efectuarea unei plati sau depunerea banilor electronici într-o banca","toate"],correct_answers:[4]},{questionNumber:"47.",question:"Care din urmatoarele roluri de mai jos nu este asociat unei Autorităti de Certificare (AC):",answers:["să emită si să revoce certificate digitale X.509 v3","să efectueze tranzactii de bani electronici","să autentifice cererile de chei publice ale utilizatorilor","să înlocuiască certificate digitale X.509 v3"],correct_answers:[2]},{questionNumber:"48.",question:"Un portofel electronic poate opera in următoarele moduri:",answers:["Inchis / Deschis - cand acelasi operator emite carduri si acceptă tranzactii sau când se face compensarea tranzactiilor între diferiti emitenti","Pre-platit/Pre-autorizat. Un portofel electronic pre-platit inglobeaza (sub forma electronica) bani reali, transferati dintr-un cont bancar sau dintr-un depozit de numerar. Un portofel electronic pre-autorizat inglobeaza valoarea (costul) unei cumparaturi, pe care operatorul portofelului o garanteaza (se bazeaza pe o linie de credit)","De unica folosinta / Reincarcabil","toate"],correct_answers:[4]},{questionNumber:"49.",question:"Indicatorul Major de Industrie – MII (Major Industry Identifier) pentru VISA si MasterCard au valorile:",answers:["2 si 3","3 si 4","4 si 5","5 si 6"],correct_answers:[3]},{questionNumber:"50.",question:"Un certificat digital emis de o Autoritate de Certificare nu contine:",answers:["cheia secreta a detinatorului","cheia publica a detinatorului","Autoritatea de Certificare care a emis certiificatul digital","algoritmii folositi (RSA cu MD5)"],correct_answers:[1]}],mr=[{questionNumber:"1.",question:"Care este rolul coderului de sursa?",answers:["Criptarea textului generat de sursa informationala;","Compresia informatiei generate de sursa informationala;","Schimbarea formei de reprezentare a informatiei generate de sursa;","Protejarea informatiei generate de sursa impotriva perturbatiilor."],correct_answers:[2,3]},{questionNumber:"2.",question:"Care este rolul coderului de canal?",answers:["Compresia informatiei generate de sursa informationala;","Schimbarea formei de reprezentare a informatiei generate de sursa;","Protejarea informatiei impotriva perturbatiilor din canalul de transmitere;","Criptarea textului generat de sursa informationala."],correct_answers:[3]},{questionNumber:"3.",question:"Care este rolul blocului de criptare informationala?",answers:["Schimbarea formei de reprezentare a informatiei generate de sursa;","Criptarea textului generat de sursa informationala;","Prelucrarea informatiei in scopul pastrarii confidentialitatii transmisiei;","Compresia informatiei generate de sursa informationala."],correct_answers:[2,3]},{questionNumber:"4.",question:"Cheia criptografica este :",answers:["Subansamblu hardware utilizat pentru protectia software;","Expresie matematica care reprezinta modul de functionare al blocului de criptare si de decriptare;","Parametrizare a functiei criptografice implementate in blocurile de criptare/decriptare;","Sir parametric de valori statice sau dinamice care particularizeaza comportamentul functiei criptografice."],correct_answers:[3,4]},{questionNumber:"5.",question:"Un sistem criptografic pentru transmiterea/receptia informatiei se compune din:",answers:["Bloc de criptare si bloc de decriptare cu chei criptografice diferite;","Bloc de criptare si bloc de decriptare fara chei criptografice;","Bloc de criptare si bloc de decriptare cu chei criptografice identice;","Bloc de criptare cu doua chei criptografice diferite."],correct_answers:[1,3]},{questionNumber:"6.",question:"Decriptarea reprezinta:",answers:["Operatia efectuata de catre un intrus pentru a descoperi mesajul clar dintr-un text criptat;","Operatia efectuata de catre destinatar pentru a extrage mesajul clar dintr-un text criptat receptionat;","Operatia efectuata de catre un intrus si/sau destinatar pentru a descoperi mesajul clar dintr-un text criptat;"],correct_answers:[2]},{questionNumber:"7.",question:"Domeniul de stiinta al criptologiei are urmatoarele laturi:",answers:["Criptografia;","Steganografia;","Criptanaliza;","Steganaliza."],correct_answers:[1,3]},{questionNumber:"8.",question:"Criptanaliza reprezinta:",answers:["Prelucrarea informatiei efectuata de catre destinatar pentru a extrage mesajul clar dintr-un text criptat receptionat;","Ansamblul de prelucrari matematice si statistice efectuate de catre un interceptor neautorizat pentru a descoperi mesajul clar dintr-un text criptat","Interpretari bazate pe analize empirice si/sau stiintice efectuate de catre un interceptor neautorizat pentru a descoperi mesajul clar dintr-un text criptat."],correct_answers:[2,3]},{questionNumber:"9.",question:"Tehnici criptografice recomandate de Claude Shannon pentru optimizarea algoritmilor moderni:",answers:["Tehnica compresiei;","Tehnica confuziei;","Tehnica difuziei;","Tehnica propagarii erorii criptografice."],correct_answers:[2,3]},{questionNumber:"10.",question:"In functie de complexitatea masinilor criptografice acestea pot fi clasificate in:",answers:["Monoalfabetice;","Polialfabetice simple;","Polialfabetice cu autocifrare;","Polialfabetice complexe."],correct_answers:[2,3,4]},{questionNumber:"11.",question:"Cel mai important parametru caracteristic pentru complexitatea masinilor criptografice este:",answers:["Viteza de transfer a informatiei;","Timpul de acoperire;","Numarul de alfabete utilizate;","Marimea cheii criptografice."],correct_answers:[2]},{questionNumber:"12.",question:"Dimensiunea cheii criptografice determina:",answers:["Multimea cheilor utilizabile posibile;","Viteza de decriptare;","Complexitatea sistemului criptografic;","Timpul de acoperire al sistemului criptografic."],correct_answers:[1,2,3,4]},{questionNumber:"13.",question:"Reușita unui atac criptanalitic este influentata de:",answers:["Experienta criptanalistului;","Lungimea canalului de transmitere a informatiei;","Mijloacele tehnice de care dispune;","Volumul de text cifrat aflat la dispozitia criptanalistului."],correct_answers:[1,3,4]},{questionNumber:"14.",question:"Cel mai vechi dispozitiv criptografic, datand din timpul razboaielor spartane a fost:",answers:["Trifidul lui Delastelle;","Skytala;","Alfabetul lui Collon;","Cilindrul Bazaries."],correct_answers:[2]},{questionNumber:"15.",question:"Masina Enigma a fost o masina criptografica:",answers:["Polialfabetica simpla;","Polialfabetica cu autocifrare;","Polialfabetica complexa;","Polialfabetica cu autocheie."],correct_answers:[3]},{questionNumber:"16.",question:"Metoda de cifrare Vernam se bazează pe:",answers:["Funcții neliniare;","Aplicarea principiilor de difuzie și confuzie ;","Sumarea modulo 2, bit cu bit, a textului în clar cu cheia de cifrare;","Operații polialfabetice complexe."],correct_answers:[3]},{questionNumber:"17.",question:"Un adversar a obținut, în urma unei interceptări radio, următorul text cifrat “WULPLWH DUPDWD”. În urma unui atac de criptanaliză prin forță brută, adversarul va obține următorul text clar:",answers:["ATACATI IN FLANC;","FOLOSITI REZERVA;","TRIMITE ARMATA;","RETRAGE ARMATA."],correct_answers:[3]},{questionNumber:"18.",question:"Presupunem că Alice dorește să transmită lui Bob mesajul “TRIMIT AJUTOR”, folosind un canal de comunicație nesigur. Atât ea cât și Bob au obținut printr-o metodă neconoscută o cheie de cifrare generată aleator și anume: “AFVKGHOPERTS”. Pentru a cifra mesajul Alice va utiliza cifrul VERNAM cu operații mod 26. În urma operației de cifrare mesajul primit de Bob va fi:",answers:["KFDDSJSKLCBNDA;","AWEDKFODOESOE;","TWDWOAOYOKHJ;","JCVSKFEOJNFEEFK."],correct_answers:[3]},{questionNumber:"19.",question:"Sistemul Jammet realizat de Jammet Onde Electrique în anul 1926, este:",answers:["Analog sistemului Vernam bazându-se însă pe alfabetul MORSE;","Derivat din mașina de cifrat ENIGMA;","Inspirat din sistemul Belin de cifrare a imaginilor;","este un sistem de codare."],correct_answers:[1]},{questionNumber:"20.",question:"Managementul cheilor de cifrare este un proces complex care constă în:",answers:["Generarea, distribuția, utilizarea și distrugerea cheilor de cifrare;","Folosirea canalului nesigur pentru transmiterea cheilor de cifrare;","Transmiterea pe INTERNET a cheilor de cifrare;","Instalarea echipamentelor de cifrare."],correct_answers:[1]},{questionNumber:"21.",question:"Distribuția manuală a cheilor de cifrare presupune:",answers:["Transmiterea electronică în clar a acestora ;","Distribuția cheilor, sub formă tipărită, pe canale publice (dacă sunt cifrate) sau pe canale private (cu grad maxim de siguranță);","Folosirea serviciilor de e-mail publice;","Compresarea acestora"],correct_answers:[2]},{questionNumber:"22.",question:"Într-un sistem de cifrare se poate utiliza, în principiu, o combinație complexă de chei de cifrare, astfel:",answers:[`Cheie de cifrare elementară(de structură), cheie secundară (care particularizează algoritmul de cifrare) și cheie de lucru toate generate de un generator aleator de
zgomot;`,"Nu se folosesc chei de cifrare;","Cheile de cifrare sunt generate prin însumarea unor factori constanți cunoscuți ;","Cheile de cifrare sunt generate de algoritmul de cifrare."],correct_answers:[1]},{questionNumber:"23.",question:"Definiţia dată de Shannon pentru un sistem de cifrare este:",answers:["Un sistem de cifrare realizează o compresie a sursei de date:","Un sistem de cifrare folosește chei de cifrare pentru compresia sursei de date;","Un sistem de cifrare este o familie T de transformări ireversibile dintr-o mulţime de mesaje M într-o mulţime de criptograme C;","Un sistem de cifrare folosește algoritmul Shannon-Fano pentru realizarea operațiunii de cifrare;"],correct_answers:[3]},{questionNumber:"24.",question:"În scopul evaluării securităţii unui sistem de cifrare care din următoarele enunțuri este o condiţie fundamentală:",answers:["Criptanalistul are cunoştinţe complete despre sistemul de cifrare, a acumulat un volum considerabil de text cifrat și are la dispoziţie un anumit volum de text clar şi echivalentul său cifrat;","Criptanalistul cunoaște o parte din cheile de cifrare ale sistemului;","Criptanalistul cunoaște modul de funcționare a mașinii de cifrat analizate;","Criptanalistul cunoaște sistemul de cifrare și cheile utilizate."],correct_answers:[1]},{questionNumber:"25.",question:"Un sistemul secret cu acoperire unică (cifru cu cheie unică sau cifru Vernam) se bazează:",answers:["pe tehnica „confuziei”;","pe tehnica „difuziei”;","pe tehnica „confuziei” și pe tehnica „difuziei”;","pe utilizarea de funcții neliniare."],correct_answers:[1]},{questionNumber:"26.",question:"Care din următoarele enunțuri nu este principiu care să stea la baza construcției unui sistem de cifrare:",answers:["Mărimea cheii de cifrare;","Simplitatea operațiunilor de cifrare și descifrare;","Minimizarea cheii de cifrare;","Cantitatea de secretizare oferită."],correct_answers:[3]},{questionNumber:"27.",question:"Un sistem de cifrare este strict ideal dacă:",answers:["H(X/C)>H(K);","H(X/C)&lt;H(K);","H(X/C)&lt;=H(K);","H(X/C)=H(K)."],correct_answers:[4]},{questionNumber:"28.",question:"Testul spectral se bazează pe:",answers:["testele de bit seriale;","probabilităţile de apariţie a unor secvenţe constante;","tehnica transformărilor Fourier aplicate funcţiilor de variabile întregi, transformări care permit scoaterea în evidenţă a caracterului aleator al unei secvenţe de numere întregi;","Analiza factorilor constanţi din succesiunile pseudoaleatoare."],correct_answers:[3]},{questionNumber:"29.",question:"Dacă notăm cu n<sub>0</sub> numărul de biți de „0” şi cu n<sub>1</sub> numărul de biți de „1” dintr-o succesiune de biţi, atunci pentru a avea o succesiune aleatoare conform testului de frecvenţă biţi este necesar ca:",answers:["n<sub>0</sub> &#8773;n<sub>1</sub>;","n<sub>0</sub> &lt;n<sub>1</sub>;","n<sub>0</sub> >n<sub>1</sub>;","n<sub>0</sub> &lt;&lt;n<sub>1</sub>;"],correct_answers:[1]},{questionNumber:"30.",question:"În teoria criptanalizei prin descifrarea unui sistem de cifrare S se înţelege:",answers:["evidenţierea textelor clare pe baza analizelor criptogramelor realizate prin intermediul lui S, fără a avea cunoştinţe despre cheia folosită dar cunoscând sistemul utilizat;","evidenţierea textelor clare pe baza analizelor criptogramelor realizate prin intermediul lui S, fără a avea cunoştinţe despre sistemul utilizat şi cheia folosită;",`evidenţierea textelor clare pe baza analizelor criptogramelor realizate prin intermediul lui S, fără a avea cunoştinţe despre sistemul utilizat dar cunoscând
cheia folosită;`,"evidenţierea textelor clare pe baza analizelor criptogramelor realizate prin intermediul lui S, având cunoştinţe despre sistemul utilizat şi cheia folosită"],correct_answers:[2]},{questionNumber:"31.",question:"Într-un sistem secret, informația este complet ascunsă atunci când:",answers:["𝐻(𝐶) > 𝑙𝑜𝑔 𝑛","𝐻(𝐶) &lt; 𝑙𝑜𝑔 𝑛","𝐻(𝐶) = 𝑙𝑜𝑔 𝑛."],correct_answers:[3]},{questionNumber:"32.",question:"Prin tehnica “confuziei” , utilizată la proiectarea algoritmilor de cifrare, se urmărește:",answers:["Corelarea cât mai complexă între criptogramă și cheie;","Corelarea cât mai complexă între mesajul în clar și cheie;","Corelarea cât mai complexă între mesajul în clar și criptogramă."],correct_answers:[1]},{questionNumber:"33.",question:"Care dintre afirmatiile de mai jos nu reprezinta un criteriu de aleatorism propus de Golomb:",answers:["Dacă p este par atunci secvenţa de lungime p va avea p/2 biţi de valoare 0 şi p/2 biţi de valoarea 1. Dacă p este impar, atunci numărul de zerouri si numărul de cifre unu diferă printr-o unitate;","Într-o secvenţă de lungime p, jumătate din numărul seriilor va avea lungimea 1, 1/4 va avea lungimea 2,...,1/ 2k din numărul seriilor va avea lungimea k;","Autocorelaţia defazată nu este constantă."],correct_answers:[3]},{questionNumber:"34.",question:"Pentru evaluarea caracterisiticilor aleatoare a unui șir de numere, testul spectral se bazează pe:",answers:["Tehnica transformărilor Fourier:","Tehnica evaluării numărului de apariții a biților de 0 și de 1;","Tehnica transformărilor complexe."],correct_answers:[1]},{questionNumber:"35.",question:"În criptanaliză, cuvintele probabile sunt:",answers:["Cuvinte sau expresii care pot fi întâlnite într-un mesaj ca urmare a faptului că sunt caracteristice pentru sursa respectivă;","Litere și cifre care apar în mod pseudoaleator;","Mesaje informaționale care au probabilitate de apariție de 0.5."],correct_answers:[1]},{questionNumber:"36.",question:"Testul SERIAL este utilizat pentru:",answers:["Probabilitatile de tranziţie dintre două cifre binare succesive sunt aceleaşi sau foarte apropiate;","Fiecare simbol este independent de predecesorul său;","Seriile de cate doua simboluri din cadrul sirului sunt independente de predecesoarele acestora."],correct_answers:[1,2]},{questionNumber:"37.",question:"In cadrul sistemului Vernam codificarea cheilor si ale textului clar se realizează cu codul:",answers:["Baudot;","Morse;","Baudot şi Morse."],correct_answers:[1]},{questionNumber:"38.",question:"Metodele de generare ale cheilor criptografice sunt:",answers:["Metode algebrice;","Metode aritmetice;","Metode bazate pe teoria haosului;","Metode empirice;","Metode bazate pe experimente fizice."],correct_answers:[1,2,3,5]},{questionNumber:"39.",question:"Care dintre urmatoarele sisteme criptografice sunt sisteme tomogramice:",answers:["Jammet","Belin","Bazaries","Vernam"],correct_answers:[1,2,4]},{questionNumber:"40.",question:"Sistemele hardware de generare a șirurilor pseudoaleatoare pot fi bazate pe:",answers:["Scheme secvenţiale liniare;","Registre de deplasare;","Generatoare haotice;","Scheme secvenţiale neliniare."],correct_answers:[1,2,4]},{questionNumber:"41.",question:"Cifrurile tomogramice au la bază tehnici care urmăresc:",answers:["Fracționarea cuvintelor din textul clar;","Fracționarea literelor din textul clar;","Fracționarea literelor din textul criptat;","Fracționarea textului clar în propoziții simple cu sens."],correct_answers:[2]},{questionNumber:"42.",question:"Care din următoarele tehnici de prelucrare informaţională nu sunt cifruri tomogramice:",answers:["Alfabetul Baudot;","Sistemul Vernam;","Cifrul lui Cezar;","Codul Morse."],correct_answers:[1,3,4]},{questionNumber:"43.",question:"Semnătura digitală are la bază următoarele tehnici:",answers:["Criptarea asimetrică;","Criptarea simetrică;","Digitizarea semnăturii olografe;","Reproducerea semnăturii olografe pe documentele electronice."],correct_answers:[1]},{questionNumber:"44.",question:"Care dintre următoarele enunturi fac parte din setul de condiții (principii) enunțate de Claude Shannon cu privire la realizarea sistemelor criptografice:",answers:["Cantitatea de secret conferită mesajului criptat;","Nerepudierea mesajelor;","Optimizarea mărimii cheilor criptografice;","Evitarea propagării erorilor in textul criptat."],correct_answers:[1,3,4]},{questionNumber:"45.",question:"Metodele de criptare aplicate mesajelor pot fi:",answers:["Metode criptografice simetrice;","Metode criptografice asimetrice;","Metode criptografice bazate pe chei aleatoare;","Metode criptografice bazate pe funcții de permutare ."],correct_answers:[1,2,4]},{questionNumber:"46.",question:"Un sistem informațional binar echiprobabil are entropia egală cu :",answers:["1 bit / eveniment;","0 bit / eveniment;","2 bit / eveniment;","1/2 bit / eveniment"],correct_answers:[1]},{questionNumber:"47.",question:"Entropia unui sistem informațional poate fi:",answers:["Nulă;","Pozitivă;","Strict pozitivă;","Negativă."],correct_answers:[1,2]},{questionNumber:"48.",question:"Timpul de acoperire al unui sistem criptografic este:",answers:["Timpul de valabilitate al sistemului de chei;","Timpul in care un sistem criptografic poate fi considerat sigur;","Timpul necesar pentru a fi decriptat un mesaj;","Timpul in care se realizează criptarea mesajelor"],correct_answers:[2]},{questionNumber:"49.",question:"Tehnica codificării redundante este:",answers:["Tehnică criptografică;","Tehnică de compresie a surselor informaţionale;","Tehnică de protecție la erori a canalelor cu perturbaţii;","Tehnică de protecție la erori a canalelor fără perturbaţii."],correct_answers:[3]},{questionNumber:"50.",question:"Codificarea neuniformă este utilizată ca:",answers:["Tehnică criptografică;","Tehnică de compresie a surselor informaţionale;","Tehnică de protecție la erori a canalelor cu perturbaţii;","Tehnică de protecție la erori a canalelor fără perturbaţii."],correct_answers:[2]}],dr=[{questionNumber:"1.",question:"Produsul NoSQL oferit de AWS este:",answers:["DynamoDB","MongoDB","RDS","CloudWatch"],correct_answers:[1]},{questionNumber:"2.",question:"Serviciul DNS oferit de AWS este denumit:",answers:["Cloud DNS","Cloud Front","Cloud Trial","Route53"],correct_answers:[4]},{questionNumber:"3.",question:"In mod implicit, intr-un AWS VPC nou creat, toate instantele EC2 au asignate 2 adrese IP.Care sunt aceste adrese IP?",answers:["O adresa de tip Elastic IP si o adresa IP publica","O adresa IP privata si o adresa IP publica","O adresa publica IP si o adresa secreta IP pentru a asigura securitatea","O adresa IP v4 si o adresa IP v6 pentru a asigura interconectivitatea","AWS VPC nu asigneaza adrese IP la creare"],correct_answers:[2]},{questionNumber:"4.",question:"Care sunt modelele de servicii funizate “cloud computing”:",answers:["IaaS","HaaS","PaaS","SaaS"],correct_answers:[1,3,4]},{questionNumber:"5.",question:"Care sunt modelele de arhitectura “cloud computing”:",answers:["Public cloud","Community cloud","Hybrid cloud","Private cloud"],correct_answers:[1,2,3,4]},{questionNumber:"6.",question:"Care sunt pricipalele servicii furnizate de AWS:",answers:["Cosmos DB","Amazon VPC","Amazon EC2","AWS IAM","Amazon S3"],correct_answers:[2,3,4,5]},{questionNumber:"7.",question:"Autentificarea multifactor se poate face in AWS folosind:",answers:["RDS","IAM","DynamoDB","Accout Settings"],correct_answers:[2]},{questionNumber:"8.",question:"AWS S3 reprezinta:",answers:["Object Base Storage","Block Base Storage","A Data Warehouse Solution","Suitable for Data Archival"],correct_answers:[1,4]},{questionNumber:"9.",question:"Fiecare utilizator creat in AWS IAM are implicit:",answers:["Full Permission","Partial Permissions","No Permissions","Dedicated Permissions"],correct_answers:[3]},{questionNumber:"10.",question:"In AWS S3 durabilitatea fisierelor este de:",answers:["99,99 %","99,999999999 %","100 %","99 %"],correct_answers:[2]},{questionNumber:"11.",question:"Serviciul de CloudFormation permite:",answers:["Stop, Terminate, Reboot sau Recover a unei instante EC2","Lansa, configura si conecta resurse AWS cu template JavaScript Object Notation (JSON)","Monitoriza si comanda o instanta EC2","Trimite mesaje de tip AWS Simple Notification Services (SNS)"],correct_answers:[2]},{questionNumber:"12.",question:"Instantele AWS EC2 sunt provizionate:",answers:["Global","In Regiuni","In Zonele de Disponibilitate","In Centrele de Date"],correct_answers:[3]},{questionNumber:"13.",question:"Produsul NoSQL oferit de platforma AWS este:",answers:["RDS","MangoDB","MySQL","DynamoDB"],correct_answers:[4]},{questionNumber:"14.",question:"AWS Simple Notification Service (SNS) permite sa:",answers:["Ofere subscriptii de tipul: email, HTTP/HTTPS, SMS text, SQS Queries, functii Lamba","Seta, opera si transmite notificari catre serviciile utilizate in diferite aplicatii","Monitoriza si comanda o instanta EC2","Functioneaza impreuna cu serviciul ColudWatch"],correct_answers:[1]},{questionNumber:"15.",question:"Produsul DNS oferit de platforma AWS este:",answers:["CloudDNS","CloudFront","CloudTrial","Route 53"],correct_answers:[4]},{questionNumber:"16.",question:"Ce baze de date RDS sunt disponibile in AWS:",answers:["Aurora, MySQL, SQL, Cassandra","PostGres, Cassandra, MangoDB, Aurora","Oracle, SQL, MySQL, Cassandra","Oracle, SQL, MySQL, PostGres"],correct_answers:[4]},{questionNumber:"17.",question:"Care sunt modalitatile de plata pentru instantele AWS EC2:",answers:["On-Demand","Savings Plans","Reserved Instances","Spot Instances"],correct_answers:[1,2,3,4]},{questionNumber:"18.",question:"Alarmele din serviciul CloudWatch indeplinesc urmatoarele actiuni:",answers:["Stop, Terminate, Reboot sau Recover a unei instante EC2","Scala un AutoScaling grup In sau Out","Monitoriza si comanda o instanta EC2","Trimite mesaje de tip AWS Simple Notification Services (SNS)"],correct_answers:[1,2,4]},{questionNumber:"19.",question:"Cum se monitorizeaza resursele oferite AWS:",answers:["AWS CloudWatch","Unelte furnizate de Terte-Parti","Dashboard EC2","Configurarea de notificari cand orice eveniment semnificant se intampla"],correct_answers:[1,2]},{questionNumber:"20.",question:'Ce reprezinta icon-ul in AWS <img style="margin: 10px 0; width: 50px; position: absolute; top: -28px;" src="images/cloud_computing_route53.png" alt="Poza a fost incarcata gresit" />            :',answers:["DynamoDB","Route 53","S3","EC2"],correct_answers:[2]}],pr=[{questionNumber:"1.",question:`Fie secvența:

class cls{
        public:
              cls(){ cout&lt;&lt;"constructor";}
              cls(cls &c){cout&lt;&lt;"constructor de copiere";}
};
int f(cls c){ return 1;}
int main(){
    cls c;
    f(c);
    return 0;
}

În momentul executării programului de mai sus:`,answers:["constructorul de clasă se apelează o dată, iar cel de copiere nu se apelează;","constructorul de clasă şi cel de copiere se apelează fiecare câte o dată;","constructorul de copiere se apelează o dată, iar cel de clasă nu se apelează;","constructorul de clasă se apelează de două ori, iar cel de copiere nicio dată;","constructorul de clasă și cel de copiere se apelează fiecare de câte două ori."],correct_answers:[2]},{questionNumber:"2.",question:`Fie secvența:

class cls{
          public:
                cls(){ cout&lt;&lt;"constructor";}
                cls(cls &c){cout&lt;&lt;"constructor de copiere";}
};
int f(cls &c){ return 1;}
int main(){
    cls c;
    f(c);
    return 0;
}

În momentul executării programului de mai sus:`,answers:["constructorul clasei se apelează o dată, iar cel de copiere nu se apelează nicio dată;","constructorul de clasă şi cel de copiere se apelează fiecare câte o dată;","constructorul de copiere se apelează o dată, iar cel de clasă nu se apelează;","constructorul clasei se apelează de două ori, iar cel de copiere nicio dată;","constructorul de clasă și cel de copiere se apelează fiecare de câte două ori."],correct_answers:[1]},{questionNumber:"3.",question:`Fie secvența:
class C{
          int a;
          public:
                  virtual void metoda1()=0;
                  virtual void metoda2()=0;
};
int main(){
    C *pob;            //declarația 1
    C ob;                //declarația 2
    C *vpob[5];      //declarația 3
    C vob[5];          //declarația 4
    return 0;
}

Declarațiile admise în acest caz sunt:`,answers:["Declarațiile 1 și 2;","Declarația 1;","Declarațiile 2 și 4;","Declarația 3;","Declarațiile 1, 2 și 3."],correct_answers:[2,4]},{questionNumber:"4.",question:`Fie clasa :

class c {
    int a, b ;
    public :
            c (int , int ) ;
              int det_a ( ) {return a ;}
            ~c () ;
};

Semnul ~ are rolul :`,answers:["de a nega pe biți rezultatul returnat de metoda c( );","de a preciza existența destructorului;","de a nega logic rezultatul returnat de metoda c( );","de a supraîncarca constructorul clasei;","de a supraîncarca operatorul ~"],correct_answers:[2]},{questionNumber:"5.",question:`Secvenţa următoare:

class c1{
          public:
              int a;
              c1(int y){ a=y;cout&lt;&lt;"constructor 1";}
              ~c1(){cout&lt;&lt;"destructor 2";}
};
class c2:public c1{
          public:
              int b;
              c2(int y, int x):c1(y) { b=x; cout&lt;&lt;"constructor 2";}
              ~c2(){cout&lt;&lt;"destructor 2";}
};
int main(){
    c1 ob1(2);
    c2 ob2(2,3);
    return 0;
}

afișează:`,answers:["constructor 1 constructor 2 destructor 2 destructor 1","constructor 1 constructor 1 constructor 2 destructor 2 destructor 1 destructor 1","constructor 1 constructor 2 constructor 1 destructor 1 destructor 2 destructor 1","constructor 1 constructor 1 constructor 2 destructor 2 destructor 1"],correct_answers:[2]},{questionNumber:"6.",question:`Fie următorul program C++:

#include &lt;iostream.h>
class B{
          public:
                B(){cout&lt;&lt;"B()"&lt;&lt;endl;}
                ~B(){cout&lt;&lt;"~B()"&lt;&lt;endl;}
};
class D: public B{
          public:
                D(){cout&lt;&lt;"D()"&lt;&lt;endl;}
                ~D(){cout&lt;&lt;"~D()"&lt;&lt;endl;}
};
int main(){
    B *b=new B();
    delete b;
    b=new D();
    delete b;
return 0;
}

Programul afișează:`,answers:["B() ~B() B() D() ~D()","B() ~B() B() D() ~B()","B() ~B() B() ~B()","B() ~B() D() ~B()"],correct_answers:[2]},{questionNumber:"7.",question:`Fie programul:

#include &lt;iostream.h>
class B{
          public:
              B(){cout&lt;&lt;"B()"&lt;&lt;endl;}
              B(B &b){cout&lt;&lt;"B(B &b)"&lt;&lt;endl;}
};
class D: public B{
          public:
              D(){cout&lt;&lt;"D()"&lt;&lt;endl;}
              D(D &d){cout&lt;&lt;"D(D &d)"&lt;&lt;endl;}
};
int main(){
    B b;
    B b1(b);
    D d;
    D d1(d);
    return 0;
}

Programul afișează:`,answers:["B() B(B&b) B() D() B(B &b) D(D &d)","B() B() B(B&b) B() D() B(B &b) D() B(B &b)","B() B(B&b) D() B(B &b) D() B(B &b)","B() B(B&b) B() D() B() D(D &d)"],correct_answers:[4]},{questionNumber:"8.",question:`Fie clasa :

class c {
    int a,b;
    public:
            float c (int, int)
            int get_a {return a;}
            c ();
            };

Declaraţia float c(int, int) ar putea corespunde unui constructor al clasei?`,answers:["da, fiind o supraîncarcare a celui existent;","nu, deoarece crează ambiguitate;","nu, deoarece constructorul nu are tip returnat;","nu, deoarece nu este de tip friend."],correct_answers:[3]},{questionNumber:"9.",question:`Fie secvenţa următoare:

class persoana{
          int varsta;
          public:
                persoana(int v=18){varsta=v;}
                persoana& operator++(int){varsta++; return *this;}
                int get_varsta(){return varsta;}
};
int main(){
    persoana p(20);
    cout&lt;&lt;p++.get_varsta();
    return 0;
}

Secvența afișează:`,answers:["21","20","18","19"],correct_answers:[1]},{questionNumber:"10.",question:"O funcție declarată friend în clasa de bază:",answers:["rămâne friend în clasa derivată, pentru partea moștenită;","are acces pe toată clasa derivată;","nu are acces pe zonele private și protected ale clasei derivate;","nu are acces pe zona private a clasei derivate;","are acces pe zonele public și protected ale clasei derivate"],correct_answers:[3,4]},{questionNumber:"11.",question:`Se consideră următoarea secvență de program:

class B{
          private:
                  int x,y;
          public:
                  B(int a,int b){ x=a;y=b; }
                  B(const B &a){ x=a.x; y=a.y;}
};

În care dintre următoarele situații se realizează copierea unui obiect într-altul:`,answers:["B c1(4,5);","B c2(0.0, 0,0);","B c1, c3=c1;","B c4(1);","B c1, c5(c1)."],correct_answers:[3,5]},{questionNumber:"12.",question:`Fie următorul program:

      #include&lt;iostream.h>
        class cls {
                  static int i;
                  int j;
                  public:
                            cls(int x=7) { j=x; }
                            static int imp(int k){ cls a; return i+k+a.j; } };
        int cls::i;
        int main()
        { int k=5;
        cout&lt;&lt;cls::imp(k);
        return 0;
        }

Indicați ce se va afișa pe ecran în urma executării programului:`,answers:["11","13","12","14"],correct_answers:[3]},{questionNumber:"13.",question:`Fie următorul program:

#include &lt;iostream.h>
class B{
          public:
                virtual void f() { cout&lt;&lt;"B::f() ";}
                void g() { cout&lt;&lt;"B::g() ";}
};

class D: public B{
          public:
                void f() { cout&lt;&lt;"D::f() ";}
                void g() { cout&lt;&lt;"D::g() ";}
};
int main(){
    int i;
    B *a=new B();
    B *b=new D();
    a->f(); b->f();
    a->g(); b->g();
    return 0;
}

Indicați ce se va afișa pe ecran în urma executării programului:`,answers:["D::f() B::f() B::g() B::g() B::g()","B::f() D::f() B::g() B::g()","B::f() D::f() B::g() D::g()","B::f() B::g() D::f() D::g()"],correct_answers:[2]},{questionNumber:"14.",question:`Fie următorul program:

#include &lt;iostream.h>
class B{
          public:
                virtual void f() { cout&lt;&lt;"B::f() ";}
                void g() { cout&lt;&lt;"B::g() ";}
};

class D1: public B{
          public:
                void f() { cout&lt;&lt;"D1::f() ";}
                void g() { cout&lt;&lt;"D1::g() ";}
};
class D2: public B{
          public:
                void g() { cout&lt;&lt;"D2::g() ";}
};
int main(){
    int i;
    B *a=new B();
    B *b=new D1();
    B *c=new D2();
    a->f(); b->f(); c->f();
    a->g(); b->g(); c->g();
    return 0;
}

Indicați ce se va afișa pe ecran în urma executării programului:`,answers:["B::f() D1::f() B::f() B::g() B::g() B::g()","D2::f() D1::f() B::f() B::g() B::g() B::g()","B::f() D1::f() D::f() B::g() D1::g() D2::g()","B::f() D1::f() B::f() B::g() D1::g() D2::g()","B::f() B::f() D2::f() B::g() B::g() D2::g()"],correct_answers:[1]},{questionNumber:"15.",question:`Fie următorul program:

#include&lt;iostream.h>
class salariat{
          int varsta;
          public:
                salariat (int v=20) {varsta =v;}
                operator int() { return varsta;}
                salariat& operator++(){varsta++; return *this;}
                salariat operator++ (int) { varsta++; return *this;}
};
int main(){
     salariat s(21);
     int a=s++, b=++s;
     cout&lt;&lt;a&lt;&lt;" "&lt;&lt;b&lt;&lt;endl;
     return 0;
}

Programul afișează:`,answers:["20 21","21 22","22 23","20 22","21 23"],correct_answers:[3]},{questionNumber:"16.",question:`Fie următorul program:

#include &lt;iostream.h>
class Cerc{
          public:
                float raza;
                Cerc(float r){raza=r;}
                float get_raza(){return raza;}
                Cerc operator++(){raza++; return *this;}
                Cerc operator--(){raza--; return *this;}
};
int main(){
    Cerc c(3.5);
    cout&lt;&lt;(++(++c)).get_raza()&lt;&lt;" ";
    cout&lt;&lt;c.get_raza()&lt;&lt;" ";
    cout&lt;&lt;(--(--c)).get_raza()&lt;&lt;" ";
    cout&lt;&lt;c.get_raza()&lt;&lt;" ";
    return 0;
}

Programul afișează:`,answers:["3.5 4.5 2.5 3.5","5.5 4.5 2.5 2.5","2.5 5.5 4.5 3.5","5.5 4.5 2.5 3.5","4.5 2.5 3.5 5.5"],correct_answers:[4]},{questionNumber:"17.",question:"O metodă statică a unui obiect se caracterizează prin faptul că:",answers:["nu primește pointerul la obiect this;","folosește numai datele publice;","se poate apela prin numele clasei;","nu poate fi definita decât inline;","daca prelucrează obiecte, primește obiectele ca parametrii expliciți."],correct_answers:[1,3,5]},{questionNumber:"18.",question:`Fie secvența de program:

#include &lt;iostream.h>
class C{
          public:
                static int s;
};
int C::s=0;
int main(){
    int a=7; C::s=a;
    cout&lt;&lt;C::s;
    return 0;
}

În secvența de mai sus, inițializarea lui s este:`,answers:["ilegală, deoarece nu există niciun obiect creat;","ilegală, deoarece s este inițializat în afara clasei;","ilegală, deoarece s este dublu definit, în clasă și în afara ei;","ilegală, deoarece datele statice pot fi doar private;","corectă, deoarece membri statici există înainte de a se crea obiecte din clasă."],correct_answers:[5]},{questionNumber:"19.",question:`Fie secvența:

class complex{
          double re;
          double im;
          public:
                complex(double x=1.0,double y=6.80){re=x; im=y;}
                complex( const complex &u){re=u.re;im=u.im;}
};

Precizaţi în ce situaţie se utilizează constructorul de copiere:`,answers:["complex z1(5.2, 3.6);","complex z1(5.2, 3.6), z2=z1;","complex z3(0.1,1.0);","complex z1(5.2, 3.6), z4(z1);","complex z5(-0.1,28.7)."],correct_answers:[2,4]},{questionNumber:"20.",question:`Fie secvența :

class A1{
         public:
              A1(){cout &lt;&lt; "A1 ";}
};
class A2{
         public:
              A2(){cout &lt;&lt; "A2 ";}
};
class AA1 : public A1, virtual public A2{
         public:
              AA1(){cout &lt;&lt; "AA1 ";}
};
class AA2 : public A1, virtual A2{
         public:
              AA2(){cout &lt;&lt; "AA2 ";}
};
class B : public AA1, virtual public AA2{
         public:
              B(){cout &lt;&lt; "B ";}
};
int main(){
    B ob1;
    return 0;
}

Secvența afișează:`,answers:["A1 A2 AA2 A1 AA1 B","A2 A2 AA2 AA1 A1 B","A1 A2 AA2 A1 B AA1","A2 A1 AA2 A1 AA1 B","A2 A1 A2 AA1 A1 B"],correct_answers:[4]},{questionNumber:"21.",question:"Care dintre afirmațiile următoare sunt adevărate?",answers:["precedența unui operator poate fi modificată prin redefinire;","aritatea unui operator nu poate fi modificată prin redefinire;","asociativitatea unui operator poate fi modificată prin redefinire;",`semnificația modului în care lucrează un operator asupra obiectelor de tipuri predefinite nu
poate fi schimbată prin redefinire.`],correct_answers:[2,4]},{questionNumber:"22.",question:"Care dintre afirmațiile următoare sunt adevărate?",answers:["funcțiile inline nu pot fi funcții virtuale;","constructorii pot fi funcții virtuale;","orice funcție membru statică este funcție virtuală;","destructorul poate fi funcție virtuală."],correct_answers:[1,4]},{questionNumber:"23.",question:`Fie programul:

#include &lt;iostream.h>
class Cerc{
          float raza;
          public:
                Cerc(float r){raza=r;}
                float get_raza(){return raza;}
                void operator++(){raza++;}
};
class Cilindru : public Cerc{
          float inaltime;
          public:
                Cilindru(float raza, float i):Cerc(raza){inaltime=i;}
                void operator++(){inaltime++;}
                float get_inaltime(){return inaltime;}
};
int main(){
          Cerc *pc;
          Cilindru c(2,6);
          pc=&c;
          ++ *pc;
          cout&lt;&lt;pc->get_raza()&lt;&lt;" "&lt;&lt;c.get_inaltime()&lt;&lt;endl;
          return 0;
}

Programul afișează:`,answers:["2 5","2 6","3 6","2 5"],correct_answers:[3]},{questionNumber:"24.",question:"Care dintre afirmațiile următoare sunt false?",answers:["obiectele unei clase derivate au acces la membrii privați ai clasei sale de bază;","relația de moștenire este tranzitivă;","funcțiile friend ale clasei de bază se moștenesc de către clasa derivată;","constructorul și destructorul clasei de bază se moștenesc în clasa derivată"],correct_answers:[1,3,4]},{questionNumber:"25.",question:`Fie următorul program:

#include&lt;ostream.h>
class persoana{
          int varsta, salariul;
          friend ostream & operator&lt;&lt;(ostream &out,persoana p){
                  out&lt;&lt;p.varsta&lt;&lt;" "&lt;&lt;p.salariul; return out;
          }
          public:
                persoana(int v){varsta=v;salariul=0;}
                persoana(){varsta=0;salariul=0;}
};
int main(){
    persoana p(1);cout&lt;&lt;p;
    return 0;
}

Programul afișează:`,answers:["1 0","0 0","1 1","0 1"],correct_answers:[1]},{questionNumber:"26.",question:`Supraîncărcarea unor operatori se poate realiza prin funcţii operator sau prin funcţii friend.
Diferența dintre aceste două posibilități constă în:`,answers:["lista de parametri;","obiectul returnat;","precedența operatorilor;","aritatea operatorului."],correct_answers:[1,3]},{questionNumber:"27.",question:`Fie programul:

class c{
          int a;
          public:
                c(){};
                c(const c&){};
                void operator=(c&){};
};
int main(){
          c a;
          c b=a;
}

Linia de cod c b=a; determină:`,answers:["executarea constructorului de copiere;","executarea metodei prin care se supraîncărcă operatorul =;","executarea atât a constructorului de copiere, cât și a metodei operator =;","o eroare, deoarece nu este permisă combinarea atribuirii cu o declarație;","executarea constructorului implicit."],correct_answers:[1]},{questionNumber:"28.",question:`Fie următorul program:

#include&lt;iostream.h>
class cls{
          public:
                ~cls(){cout&lt;&lt;"\\n Destructor";}
};
int main(){
    cls *po=new cls[3];
    delete []po;
}

Destructorul clasei:`,answers:["nu se apelează nicio dată;","se apelează o dată;","se apelează de trei ori;","se apelează de patru ori."],correct_answers:[3]},{questionNumber:"29.",question:"O funcție independentă declarată friend în domeniul public dintr-o clasă și care primește ca parametru o referință la un obiect al clasei respective are acces:",answers:["doar la membrii declarați public;","la toți membrii;","la membrii public și la cei protected;","la membrii protected."],correct_answers:[2]},{questionNumber:"30.",question:`Fie următorul program:

#include&lt;iostream.h>
class A{
          int a[3];
          public:
                A(int i, int j, int k){a[0]=i; a[1]=j; a[2]=k;}
                int& operator[](int i){return a[i];}
};
int main(){
    A ob(1,2,3); cout&lt;&lt;ob[1];
    ob[1]=25; cout&lt;&lt;ob[1];
    return 0;
}

Ce se poate afirma despre operator[]()?`,answers:["produce supraîncărcarea unei funcţii;","produce supraîncărcarea unui operator unar;","supraîncarcă operatorul [];","este o funcţie membru oarecare a clasei A, care nu produce supraîncărcarea unui operator;","reprezintă un operator ternar."],correct_answers:[3]},{questionNumber:"31.",question:`Considerăm următorul program:

#include&lt;iostream.h>
class C{
          public:
                int x;
                C(int v) { x=v;}
                double operator+(C &c, double d){return c.x+d;}
                double operator+(double d, C &c){return c.x+d;}
};
int main() {
    C c(5);
    cout&lt;&lt;2+c+3;
    return 0;
}

Stabiliți care dintre următoarele afirmații sunt adevărate:`,answers:["supraîncărcările operator + () trebuie să fie friend;","supraîncărcările operator+() nu se justifică deoarece au același cod;","programul afișează 10;","supraîncărcările operator+() trebuie să returneze referințe."],correct_answers:[1]},{questionNumber:"32.",question:`Fie programul:

#include&lt;iostream.h>
class c1{ int a;};
class c2:public c1{
          public:
                int b;
                void scrie_a( ) { cout&lt;&lt;a; }
};
int main(){
    c2 ob; ob.scrie_a();
    return 0;
}

Selectaţi afirmaţia corectă:`,answers:["funcția scrie_a( ) nu are acces asupra unui membru privat;","programul afișează valoarea lui a;","derivarea publică este incorect realizată;","prin derivare publică, accesul la membrii moşteniţi devine public."],correct_answers:[1]},{questionNumber:"33.",question:`Fie programul următor:

#include&lt;iostream.h>
class B{
          int x;
          public:
                B(int i=10) { x=i;}
                int get_x() { return x; }
};
class D: public B{
          public:
                D(int i):B(i){}
                D operator+(const D& a) {return x+a.x; }
};
int main(){
    D ob1(7), ob2(-12);
    cout&lt;&lt;(ob1+ob2).get_x();
    return 0;
}

Programul afișează:`,answers:["eroare, clasa B nu poate fi moștenită de clasa D;","eroare, metoda operator nu are acces la un membru privat al clasei de bază;","programul afișează valoarea -5;","eroare, operatorul + nu se poate aplica pentru tipuri abstracte de date."],correct_answers:[2]},{questionNumber:"34.",question:`Fie următorul program:

#include&lt;iostream.h>
class B1{int x;};
class B2{int y;};
class B3{int z;};
class B4{int t;};
class D: public B1, private B2, protected B3,B4 {public : int m;};
int main(){
    D d;
    cout&lt;&lt;d.m;         //varianta 1
    cout&lt;&lt;d.x;          //varianta 2
    cout&lt;&lt;d.y;          //varianta 3
    return 0;
}

Variantele care permit accesul la variabile pentru afișare sunt:`,answers:["1+3;","1+2;","1+2+3;","1"],correct_answers:[4]},{questionNumber:"35.",question:`Considerăm următorul program:

class vector{
          int * pe, nr_c;
          public:
                operator int (){return nr_c;}
                vector(int);
};
vector::vector(int n){
    pe=new int[n]; nr_c=n;
    while(n--) pe[n]=n;
}
void f(int i){cout&lt;&lt;i&lt;&lt;endl;}
    int main(){
    vector x(10);
    f(x);
    return 0;
}

Programul afişează:`,answers:["9","10","numerele de la 1 la 10","numerele de la 0 la 9"],correct_answers:[2]},{questionNumber:"36.",question:`Considerăm următorul program:

class c{
          int a;
          public:
                virtual void metoda1()=0;
                virtual void metoda2(int)=0;
};
int main{
    c *pob;               //declaraţia 1
    c ob;                   //declaraţia 2
    c *vpob[3];         //declaraţia 3
    c vob[3];             //declaraţia 4
    return 0;
}

Declaraţiile admise:`,answers:["1+2;","1+2+3+4","nici una","1+3;"],correct_answers:[4]},{questionNumber:"37.",question:`Fie data urmatoarea ierarhie:

class B {… }
class D1:B{…}
class D2:B{…}
class M1:D1, public D2{…}
class M2:virtual D1, virtual D2 {…}

Considerăm următoarele afirmaţii:
      1. clasa M1 va moşteni un obiect de tip B;
      2. clasa M1 va moşteni două obiecte de tip B;
      3. clasa M2 va va moşteni un obiect de tip B;
      4. clasa M2 va moşteni două obiecte de tip B.

Precizaţi care dintre afirmaţiile de mai sus sunt corecte:`,answers:["2+3","1+2","1+3","2+4"],correct_answers:[1]},{questionNumber:"38.",question:`Fie următorul program:

#include&lt;iostream.h>
class B{
          public:
                int x;
                B(int i=16) { x=i; }
                B f(B ob) { return x+ob.x; }
};
class D: public B{
          public:
                D(int i=25) { x=i; }
                B f(B ob) { return x+ob.x+1; }
                void afisare(){ cout&lt;&lt;x; }
};
int main(){
     B *p1=new D, *p2=new B, *p3=new B(p1->f(*p2));
     cout&lt;&lt;p3->x;
     return 0;
}

Programul afişează:`,answers:["41","eroare, nu se poate instanţia un obiect al unei clase derivate printr-un pointer la un obiect de tip clasa de bază;","44","45"],correct_answers:[1]},{questionNumber:"39.",question:`Fie următorul program:

#include&lt;iostream.h>
class B{
          int i;
          public:
                static int x;
                B() { x++; i=1; }
                ~B() { x--; }
                static int get_x() { return x; }
                int get_i() { return i; }
};
int B::x;
class D: public B{
          public:
                D() { x++; }
                ~D() { x--; }
};
int f(B *q){ return (q->get_i())+1;}
int main(){
    B *p=new B;
    cout&lt;&lt;f(p);
    delete p;
    p=new D;
    cout&lt;&lt;f(p);
    delete p;
    cout&lt;&lt;D::get_x();
    return 0;
}

Programul afişează:`,answers:["eroare, data membră statică x nu este iniţializată;","eroare, metoda get_x() nu poate fi declarată static;","programul afişează valoarea 221;","programul afişează valoarea 220."],correct_answers:[3]},{questionNumber:"40.",question:`Fie următorul program:

#include &lt;iostream.h>
template&lt;class T, class E>
float f(T x, E y){ return x+y;}
float g(int x, float y){ return x-y;}
int main(){
          int a=5;
          float b=8.6;
          cout&lt;&lt;g(a,b);
          return 0;
}

Programul afişează:`,answers:["3","eroare, parametrizarea clasei T este incorrect realizată","13.6","-3.6"],correct_answers:[4]},{questionNumber:"41.",question:`Fie următorul program:

#include &lt;iostream.h>
template&lt;class T>
int f(T x, T y){ return x+y;}
int f(int x, int y){ return x-y;}
int main(){
    int a=5;
    float b=8.6;
    cout&lt;&lt;f(a,b);
    return 0;
}

Programul afişează:`,answers:["-3","eroare, parametrizarea clasei T este incorrect realizată","13.6","3.6"],correct_answers:[1]},{questionNumber:"42.",question:`Fie următorul program:

#include&lt;iostream.h>
class B{
    int x;
    public:
              B(int i=10) { x=i; }
              int get_x() { return x; }};
class D: public B{
    public:
              D(int i):B(i) {}
              D operator+(const D& a) {return x+a.x; }};
int main()
{ D ob1(7), ob2(-12);
    cout&lt;&lt;(ob1+ob2).get_x();
    return 0;
}

Indicați ce se va afișa pe ecran în urma executării programului:`,answers:["-5","-4","eroare, în clasa derivată D nu se poate accesa data membră privată x a clasei B","-3"],correct_answers:[3]},{questionNumber:"43.",question:`Fie următorul program:

#include&lt;iostream.h>
class B{
public:
      int x;
      B(int i=16) { x=i; }
      B f(B ob) { return x+ob.x; } };
class D: public B{
public:
      D(int i=25) { x=i; }
      B f(B ob) { return x+ob.x+1; }
      void afisare(){ cout&lt;&lt;x; } };
int main()
{
      B *p1=new D, *p2=new B, *p3=new B(p1->f(*p2));
      cout&lt;&lt;p3->x;
      return 0;
}

Programul afişează:`,answers:["41","eroare, în clasa derivată D nu se poate accesa data membră x a clasei B","16","25"],correct_answers:[1]},{questionNumber:"44.",question:`Fie următorul program:

#include&lt;iostream.h>
class cls1{
          public:
                int a;
                cls1() { a=7; }
};
class cls2{
          public:
                int b;
                cls2(int i) { b=i; }
                cls2(cls1& x) { b=x.a; }
};
int main(){
    cls1 x;
    cout&lt;&lt;x.a;
    cls2 y(x);
    cout&lt;&lt;y.b;
    return 0;
}

Programul afişează:`,answers:["7 7","eroare, constructorul de copiere nu este corect definit","eroare, constructorul de copiere nu poate accesa o dată publică a clasei cls1","78"],correct_answers:[1]},{questionNumber:"45.",question:"O funcţie friend diferă de o metodă obişnuită a unei clase prin faptul că:",answers:["nu se poate defini inline;","nu primeşte pointerul implicit la obiect this;","nu poate accesa decât partea publică a obiectului;","se foloseşte doar pentru supraîncărcarea operatorilor;","nu poate returna valori."],correct_answers:[2]},{questionNumber:"46.",question:"O funcţie independentă declarată friend în domeniul private dintr-o clasă şi care primeşte ca parametru o referinţă la un obiect al clasei respective are acces:",answers:["doar la membrii publici;","la toti membrii;","la membrii public şi protected;","la membrii private;","la toti membrii, dar îl poate doar consulta, nu şi modifica."],correct_answers:[2]},{questionNumber:"47.",question:"O funcţie independentă declarată friend în domeniul public dintr-o clasă şi care primeşte ca parametru o referinţă la un obiect al clasei respective are acces:",answers:["doar la membrii publici;","la toti membrii;","la membrii public şi protected;","la membrii private;","la toti membrii, dar îl poate doar consulta, nu şi modifica."],correct_answers:[2]},{questionNumber:"48.",question:`Fie următorul program:

#include &lt;iostream>
using namespace std;
class c{
  int a;
  public :
          c() {}
          c(const c&);
          c& operator =(c&);};
c& c::operator=(c &c){ cout &lt;&lt; endl &lt;&lt; "copiere cu egal"; return c;}
c::c(const c &c) { cout &lt;&lt; endl &lt;&lt; "Constructor de copiere"; }
int main()
{
  c x,y=x;
  c b=x; x=y;
};

Programul:`,answers:[`apeleaza de doua ori operator=(), o data constructorul de copiere si o data constructorul
implicit;`,"apeleaza de trei ori constructorul de copiere, o data constructorul implicit;","apeleaza de trei ori supraincarcarea operatorului =;","apeleaza de doua ori constructorul de copiere si de trei ori operator=();",`apeleaza de doua ori constructorul de copiere, o data operator=() si o data constructorul
implicit;`],correct_answers:[5]},{questionNumber:"49.",question:`De câte ori este apelat destructorul clasei Persoana în programul urmãtor?

#include &lt;iostream>
using namespace std;
class Persoana{
public:
          Persoana() {cout&lt;&lt;"Constructor"&lt;&lt;endl;}
          ~Persoana() {cout&lt;&lt;"Destructor"&lt;&lt;endl;}};
int main(){
          Persoana** ppp;
          ppp = new Persoana*[5];
          for(int i=0; i&lt;5; i++)
          ppp[i] = new Persoana();
          for(int i=0; i&lt;5; i++)
          delete ppp[i];
}

Răspuns:`,answers:["10;","6;","7;","5;","niciunul din răspunsurile anterioare."],correct_answers:[4]},{questionNumber:"50.",question:`În programul urmãtor:

#include &lt;iostream>
using namespace std;
class Persoana{
          int varsta;
          char* nume;
          public:
                    Persoana(int v=0, char* n="Oarecare"):varsta(v){
                                this->nume = new char[strlen(n)+1];
                                strcpy(this->nume,n);
                                cout&lt;&lt;"Constructor"&lt;&lt;endl;}
                    Persoana(Persoana& p){
                                this->varsta = p.varsta;
                                this->nume = new char[strlen(p.nume)+1];
                                strcpy(this->nume, p.nume);
                                cout&lt;&lt;"Constructor de copiere"&lt;&lt;endl;}
                    void operator=(Persoana& p){
                                this->varsta = p.varsta;
                                delete[] this->nume;
                                this->nume = new char[strlen(p.nume)+1];
                                strcpy(this->nume, p.nume);
                                cout&lt;&lt;"Operator="&lt;&lt;endl;}
                    ~Persoana(){ cout&lt;&lt;"Destructor"&lt;&lt;endl;}};

int main()
{
          Persoana p1, p2(20, "Gigel");
          Persoana p3 = p1;
          p3 = p2;
          Persoana p4 = p1;
}

Sunt apelate urmãtoarele:`,answers:["constructor – de patru ori, constructor de copiere – o datã, destructor – de patru ori;","constructor – de trei ori, constructor de copiere - de douã ori, destructor de cinci ori;","constructor – de douã ori, constructor de copiere – de douã ori, operator= - o datã, destructor – de patru ori;","constructor – de douã ori, constructor de copiere – o datã, operator= - de douã ori, destructor – de douã ori;","constructor – de douã ori, constructor de copiere – o datã, operator= - de douã ori, destructor – de patru ori."],correct_answers:[3]}],br=[{questionNumber:"1.",question:`Fie următoarea clasă Java:

class C 
{
    int a;
    float x;
    boolean b;
}

Stabiliţi care dintre următoarele linii de cod este corectă:`,answers:["C ob = new C(1);","C ob = new C(1,1.0);","C ob = new C();","C ob = new C(1,1.0,true);"],correct_answers:[3]},{questionNumber:"2.",question:`Fie următorul program Java:

class C
{
    public static int a=1;
}

public class test 
{
  public static void main(String[] args) 
   {
    C ob=new C();
    C.a++;
    ob.a++;
    System.out.println(C.a);
    }
}

După executarea programului, va fi afişată valoarea:`,answers:["3","2","1","nicio valoare, se obține o eroare la executare."],correct_answers:[1]},{questionNumber:"3.",question:`Fie următorul program Java:

class C{public static int a=1;}

public class teste_grila 
{
  public static void main(String[] args) 
  {
    C ob1=new C();
    C ob2=new C();
    ob1.a++;
    System.out.println(ob2.a);
   }
}

După executarea programului, va fi afişată valoarea:`,answers:["0;","2;","1;","nicio valoare, se obține o eroare la executare."],correct_answers:[2]},{questionNumber:"4.",question:"Un program Test scris în limbajul Java poate fi compilat folosind comanda:",answers:["javac Test","java Test.java","javac Test.class","javac Test.java"],correct_answers:[4]},{questionNumber:"5.",question:"Un program Test scris în limbajul Java şi compilat, poate fi rulat folosind comanda:",answers:["javac Test.java","java Test","java Test.class","java Test.java"],correct_answers:[2]},{questionNumber:"6.",question:"În Java o clasă poate extinde:",answers:["cel mult o interfaţă","oricâte clase","cel mult o clasă","oricâte interfeţe"],correct_answers:[3]},{questionNumber:"7.",question:"În Java o interfaţă poate extinde:",answers:["cel mult o interfată","oricâte interfeţe","cel mult o clasă","oricâte clase"],correct_answers:[2]},{questionNumber:"8.",question:"În Java o clasă poate implementa:",answers:["o clasă","oricâte clase","o interfaţă","oricâte interfeţe"],correct_answers:[4]},{questionNumber:"9.",question:`Fie următorul program Java:

class A
{
  public A() { System.out.print("A"); }
}

class B extends A
{
  public B() { System.out.print("B"); }
}

class C extends B
{
  public C() { System.out.println("C"); }
}

public class test 
{
   public static void main(String[] args) 
   {
  C ob=new C();
   }
}

După executarea programului, se va afişa:`,answers:["A B C","A","C B A","C"],correct_answers:[1]},{questionNumber:"10.",question:`Fie următorul program Java:

class A
{
  public int x=1;
  public A() { x++; }
}

class B extends A
{
  public B() { x++; }
}

class C extends B
{
  public int x=1;
  public C() { x++; }
}

public class test 
{
   public static void main(String[] args) 
   {
  B b=new B();
  C c=new C();
  System.out.println(b.x+" "+c.x);
   }
}

După executarea programului, se va afişa:`,answers:["3 4","3 2","2 2","3 3"],correct_answers:[2]},{questionNumber:"11.",question:`Fie următorul program Java:

class A
{
  int x=0;
  public A(int n) { x=n; }
}

class B extends A
{
  int x=1;
  public B(int n) { super(n); }
}

public class test 
{
   public static void main(String[] args) 
   {
    A a=new A(5);
    B b=new B(7);
    System.out.println(a.x+" "+b.x);
   }
}

După executarea programului, se va afişa:`,answers:["05","51","57","01"],correct_answers:[2]},{questionNumber:"12.",question:`Fie următorul program Java:

class A{
    static void staticMethod() { 
        System.out.println("Metoda statica");
    }
  }
  public class Test{
    public static void main(String[] args){
    A a = null;
    a.staticMethod();
    }
  }

După executarea programului, se va afişa:`,answers:["programul afișează mesajul Metoda statica","se obține o eroare la compliare cauzată de faptul ca o metodă statică nu poate fi invocată folosind o referintă","se obține la executare excepția java.lang.NullPointerException"],correct_answers:[3]},{questionNumber:"13.",question:`Program următor:
class A
{
   int x=10;
   static int y=20;
}
class B extends A
{
   int x=30;
   static int y=40;
}
public class Test
{
   public static void main(String[] args) {
       A ob = new B();
       System.out.println(ob.x+" "+ob.y);
   }
}

Afișează:`,answers:["10 20","30 40","30 20","eroare la executare"],correct_answers:[1]},{questionNumber:"14.",question:"Care dintre următoarele afirmații este adevărată pentru o metodă de tip final?",answers:["poate fi și suprascrisă și supraîncărcată","poate fi suprascrisă, dar nu poate fi supraîncărcată","nu poate fi nici suprascrisă și nici supraîncărcată","nu poate fi suprascrisă, dar poate fi supraîncărcată"],correct_answers:[3]},{questionNumber:"15.",question:`Programul următor:

public class Test {
    static void test(int a[]){
  a[0] = 100;
  a = new int[]{10,20,30,40,50};
  a[1] = 200;
         System.out.println(Arrays.toString(a));
   }

   public static void main(String[] args){
       int []v = {1,2,3,4,5,6,7};
       test(v);
       System.out.println(Arrays.toString(v));
   }
}
Afișează:`,answers:[`[10, 200, 30, 40, 50]
[1 2, 3, 4, 5, 6, 7]`,`[10, 200, 30, 40, 50]
[100, 2, 3, 4, 5, 6, 7]`,`[10, 20, 30, 40, 50]
[100, 2, 3, 4, 5, 6, 7]`,`[10, 20, 30, 40, 50]
[100, 2, 3, 4, 5, 6, 7]`],correct_answers:[2]},{questionNumber:"16.",question:`Considerăm următorul program Java:

class C
{
    int a,b;

    public C(int x, int y){a=x; b=y;}

    void f()
    {
        if(a&lt;b) { a++; b--; g(); }
    }

    void g() 
    {
        if(b>=a) { a++; b--; f(); } 
    }

    void afisare() { System.out.println(a+" "+b);}
}

public class teste_grila
{
   public static void main(String[] args)
   {
        C ob = new C(2,10);
        ob.f(); ob.g();
        ob.afisare();
   }
}

După executarea programului, pe ecran se va afişa:`,answers:["57","6 6","2 10","7 5"],correct_answers:[4]},{questionNumber:"17.",question:`Considerăm următorul program Java:

class C
{
    static int x = 0;
    static int f() { return (++x)*(x--); }
}

public class teste_grila
{
   public static void main(String[] args)
   {
        System.out.println(C.f()+" "+C.f()+" "+C.f());
   }
}

După executarea programului, pe ecran se va afişa:`,answers:["1 1 1","1 2 3","1 2 6","0 0 0"],correct_answers:[1]},{questionNumber:"18.",question:`Considerăm următorul program Java:

class C
{
      static int x=0;
      static void f()
      {
          x = (++x)*(x--);
          System.out.print(x+" ");
      }
}

public class teste_grila
{
   public static void main(String[] args)
   {
        C.f();C.f();C.f();
   }
}

După executarea programului, pe ecran se va afişa:`,answers:["0 0 0","1 4 25","1 -1 1","2 4 16"],correct_answers:[2]},{questionNumber:"19.",question:'Un fir de execuţie poate intra în starea "blocat" (blocked) astfel:',answers:["prin apelul metodei sleep();","automat de către sistemul de operare;","prin apelul metodei block();","prin apelul metodei wait()."],correct_answers:[1,4]},{questionNumber:"20.",question:`Fie următorul program Java:

  class Fir implements Runnable{
      int x;
      public Fir(int x){
           this.x = x;
      }
      public void run(){
          for (int i = 0; i &lt; 10; i++) System.out.print(x);
      }
      public static void main(String args[]) throws 
InterruptedException{
         Fir obj1 = new Fir(1);
         Fir obj2 = new Fir(2);
         Thread t1 = new Thread(obj1);
         Thread t2 = new Thread(obj2);
         t1.start();
         t2.start();
         t2.join();
         System.out.print(3);
     }
}

După executarea programului, poate fi afişat un număr format din:`,answers:["10 cifre egale cu 1, 10 cifre egale cu 2 și o cifră egală cu 3, cifrele fiind în orice ordine posibilă","10 cifre egale cu 1, 10 cifre egale cu 2 și o cifră egală cu 3, dar toate cifrele egale cu 2 se vor afla înaintea cifrei 3","10 cifre egale cu 1, 10 cifre egale cu 2 și o cifră egală cu 3, dar toate cifrele egale cu 1 sau 2 se vor afla înaintea cifrei 3","10 cifre egale cu 1, urmate de 10 cifre egale cu 2 și la sfârșit o cifră egală cu 3"],correct_answers:[3]},{questionNumber:"21.",question:`Considerăm următorul program Java:

class Sir{
   private String sir;

   public Sir(String sir){
       this.sir = sir;
   }
   public void modificaSir(String sir){
       this.sir = sir;
   }
   public void modificaSir(Sir sir){
       sir = new Sir("Mihai");
   }
   public String getSir(){
       return sir;
   }
}

public class Test {
   public static void main(String[] args){
       Sir s = new Sir("Ion");
       Sir t = new Sir("Alex");
       s.modificaSir("Matei");
       t.modificaSir(new Sir("Dan"));
       s.modificaSir(t);
       System.out.println(s.getSir() + " " + t.getSir());
   }
}

După executarea programului, va fi afişată valoarea:`,answers:["Matei Dan","Dan Dan","Matei Alex","Alex Dan"],correct_answers:[3]},{questionNumber:"22.",question:"Prin modalitatea sa de tratare a excepţiilor, Java oferă următoarele avantaje faţă de mecanismul tradiţional de tratare a erorilor:",answers:["există o metodă care se ocupă de acest lucru;","separarea codului pentru tratarea unei erori de codul în care ea poate sa apară;","propagarea unei erori pâna la un analizor de excepţii corespunzător;","gruparea erorilor dupa tipul lor."],correct_answers:[2,3,4]},{questionNumber:"23.",question:"O subclasă a unei clase abstracte poate fi instanţiată numai dacă:",answers:["se foloseşte cuvantul cheie abstract;","suprascrie fiecare metodă declarată abstractă în superclasa sa şi furnizeaza implementări pentru toate acestea;","se foloseşte moştenirea multiplă;","subclasă abstractă nu poate fi instanţiată."],correct_answers:[2]},{questionNumber:"24.",question:"Care este rolul declaraţiilor import?",answers:["Permite referireaclaselorfărăutilizareade prefixe;","Permite importul imaginilor folosite;","Elimină necesitatea declarării variabilelor;","Elimină apelurile directe ale funcţiilor fără clase."],correct_answers:[1]},{questionNumber:"25.",question:`Considerăm următorul program Java:

  class Calcul_1{
     void calcul(int a, int b){
         System.out.print(a + b + " ");
     }
  }

  class Calcul_2 extends Calcul_1{
     void calcul(int a, int b){
         System.out.print(a - b + " ");
     }
  }

  class Calcul_3 extends Calcul_2{
     void calcul(int a, int b){
         System.out.print(a * b + " ");
     }
  }

  public class Test{ 
     public static void main(String[] args){
         Calcul_1 x = new Calcul_3();
         x.calcul(1, 2);

         Calcul_2 y = (Calcul_2) x;
         y.calcul(3, 4); 

         Calcul_3 z = (Calcul_3) y;
         z.calcul(5, 6);
     }
  }

După executarea programului, va fi afişată valoarea:`,answers:["2 12 30","3 -1 30","3 7 11","2 7 11"],correct_answers:[1]},{questionNumber:"26.",question:"Care dintre liniile de mai jos realizează atribuirea şirului „Hello Java” variabilei s?",answers:['String s = "Hello Java";','String s[] = "Hello Java";','new String s = "Hello Java";','String s = new String("Hello Java");'],correct_answers:[1,4]},{questionNumber:"27.",question:`Ce se afisează dacă se execută următorul cod Java:

String s = new String( "Computer" );
if( s == "Computer" )
               System.out.println( "Equal A" );
if( s.equals( "Computer" ) )
               System.out.println( "Equal B" );`,answers:["Eroare la complilare, deoarece operatorul == nu se poate aplica pentru tipul String","Se afisează mesajul “Equal A”","Se afisează mesajul “Equal B”","Se afişează ambele mesaje, “Equal A” , repsectiv “Equal B”"],correct_answers:[3]},{questionNumber:"28.",question:"În Java, metodaclone() a clasei Object:",answers:["Creeaza un obiect nou al clasei folosind constructorul implicit","Creeaza şi returnează o copie a obiectului curent","Returneaza codul asociat constructorului implicit","Testează dacă obiectul specificat este o clonă a obiectului current"],correct_answers:[2]},{questionNumber:"29.",question:"Un fir de executare Java este:",answers:["O instanţă a unei clase derivate din clasa Thread","O instanţă a unei clase care implementează interfaţa Runnable","Fie un obiect al unei clase a carei superclasă este clasa Thread, fie un obiect al unei clase care implementează interfata Runnable"],correct_answers:[1,2,3]},{questionNumber:"30.",question:`Fie următorul program Java: 

public class Asignare { 
public static void main(String args[]){
      int a = 3;int b = (a = 2) * a;int c = b * (b = 5) ;
System.out.println("a = " + a + ", b = " + b + ", c = " + c);}}

Ce va afişa acesta la execuţie?`,answers:["a = 2, b = 4, c = 20","a = 2, b = 5, c = 20","a = 2, b = 5, c = 25","a = 3, b = 6, c = 30"],correct_answers:[2]},{questionNumber:"31.",question:`Urmatorul subprogram Java:

int as=3, bs=2, cs=4;
System.out.print(((as &lt; bs++) & (cs++ &lt; bs)) + " ");
System.out.println(as + " " + bs + " " + cs);
System.out.print(((as &lt; bs++) && (os++ &lt; bs++)) + " ");
System.out.println(as + " " + bs + " " + cs);

Afişează :`,answers:["Eroare la compilare: nu se poate aduna o valoare booleana cu un String;","Subprogramul se compilează şi la execuţie afisează :false 3 3 5 false 3 4 4","Subprogramul se compileaza şi la execuţie afisează:false 3 3 5 false 3 4 5","Subprogramul se compileaza şi la execuţie afisează false 3 3 5 false 3 5 6"],correct_answers:[3]},{questionNumber:"32.",question:`Considerăm următorul program Java: 

public class test 
{ 
    public static void main(String args[]) 
    { 
              int v[ ]={-2,4,-5,-6,0,2},suma=0,i; 
              for(i=0;i&lt;5;i++) 
                    if(v[i]&lt;-2) suma+=v[i]; 
                    System.out.println(suma); 
    } 
} 

După executarea programului, pe ecran se va afişa:`,answers:["-7","0","-11","-13"],correct_answers:[3]},{questionNumber:"33.",question:`Secvenţa uramatoare:

public class test {
public static void main(String args[]){
   String sir = "Programare in Java, C++ este usoara" ;
   String atom[]= sir.split(" ") ;
   System.out.println(atom.length) ; 
}}

Afisează:`,answers:["Eroare la compliare pentru ca nu se specifica numarul de elemente ale tabloului atom","6","7","8"],correct_answers:[2]},{questionNumber:"34.",question:`Secvenţa uramatoare:

public class test{
public static void main(String args[]){
   String sir = "Programare in Java, C++ este usoara" ;
   String atom[]= sir.split(" ") ;
   System.out.println(atom[0].length()) ; 
}}

Afisează:`,answers:["Eroare la compliare pentru ca nu se specifica numarul de elemente ale tabloului atom","6","10","9"],correct_answers:[3]},{questionNumber:"35.",question:`Ce se va afişa la execuţia urmatorului program Java?

      interface I1{
      float x=2.3f;
      }
      public class Test implements I1{
          public static void main(String [] args){
          System.out.print(x+" ");
          x=6.7f;
          System.out.print(x);
      }
      }`,answers:["Va aparea eroare la compilare deoarece valoarea variabilei x nu se mai poate modifica;","La execuţie se va afişa: 2.3f 6.7f;","La execuţie se va afişa: 2.3f 2.3f;","La execuţie se va afişa: 2.3 6.7;"],correct_answers:[1]},{questionNumber:"36.",question:`Urmatorul program Java:

class C1{
  int x=1;
  void f(int x){
      this.x=x;}
  int getX_C1(){
      return x;}}
class C2 extends C1{
  float x=5.0f;
  int f(int x){
      super.f((int)x);}
  float getX_C2(){
      return x;}}
public class Test{
  public static void main(String []args){
      C2 obiect = new C2();
      obiect.f(4);
      System.out.print(obiect.getX_C2() + " ");
      System.out.println(obiect.getX_C1());}}

Afişează:`,answers:["Programul este corect şi va afişa la execuţie 5 4;","Programul este correct şi va afişa la execuţie 4.0 4;","Va aparea eroare la compilare deoarece în clasa C2 s-a suprascris gresit atributul x din clasa C1;","Va aparea eroare la compilare deoarece metoda suprascrisă f() din clasa C2 intoarce un tip diferit de void;"],correct_answers:[4]},{questionNumber:"37.",question:"O subclasă a unei clase abstracte poate fi instanţiată numai dacă:",answers:["Se foloseşte cuvantul cheie abstract;","Suprascrie fiecare metodă declarată abstractă în superclasa sa, şi furnizeaza implementari pentru toate acestea;","Se foloseşte moştenirea multiplă;","O subclasă abstractă nu poate fi instanţiată;"],correct_answers:[2]},{questionNumber:"38.",question:`Urmatorul program Java:

class C1{
  int x=1;
  void f(int x){
      this.x=x;}
  int getX_C1(){
      return x;}}
class C2 extends C1{
  float x=5.0f;
  void f(int x){
      super.f((int)x);}
  float getX_C2(){
      return x;}}
public class Test{
  public static void main(String []args){
      C2 obiect = new C2();
      obiect.f(4);
      System.out.print(obiect.getX_C2() + " ");
      System.out.println(obiect.getX_C1());}}

Afişează:`,answers:["Programul este corect şi va afişa la execuţie 5.0  4;","Programul este correct şi va afişa la execuţie 4.0  4;","Va aparea eroare la compilare deoarece în clasa C2 s-a suprascris gresit atributul x din clasa C1;","Programul este correct şi va afişa la execuţie 5.0  5;"],correct_answers:[1]},{questionNumber:"39.",question:"Tipurile referința în Java sunt:",answers:["tabloul, clasa, interfața","clasa, interfata","int, flout, double, char, String","String si null"],correct_answers:[1]},{questionNumber:"40.",question:`Secvența următoare: 

public class numar_43_nou {
   public static void main(String args[])
   {
         String sir="Examen";
         sir.toUpperCase();
         System.out.println(sir);
   }
}

Afișează:`,answers:["EXAMEN","Examen","eXamen","Examen"],correct_answers:[4]},{questionNumber:"41.",question:`Secvența urătoare:

public class numar_44_nou {
   public static void main(String args[])
   {
       String sir1="Programare in Java";
       String sir2 =sir1.substring(4,8);
System.out.println(sir2.toUpperCase()); }
}

Afișează:`,answers:["ogramare","rama","RAMA","Java"],correct_answers:[3]},{questionNumber:"42.",question:`Secvența urătoare:

public class Test {
    public static void main(String args[])
    {
  int numar = 1; 
      for (int x = 0; x &lt; 4; x++) 
  numar = numar &lt;&lt; 1; 
  System.out.println(numar);}
  }

Afișează:`,answers:["16","32","8","3"],correct_answers:[1]},{questionNumber:"43.",question:"O clasă abstractă în Java :",answers:["conține doar metode abstracte","conține metode abstarcte, dar poate conține și metode definite","poate fi instanțiată","nu poate fi instanțiată, dar se pot definii referințe către acesta"],correct_answers:[2,4]},{questionNumber:"44.",question:`Secveţa uramatoare:

public class test {
public static void main(String args[]){
  String sir = "Programare in Java, C++ este usoara" ;
   String atom[]= sir.split("[ ,]") ;
   System.out.println(atom.length) ; 
}}

Afisează:`,answers:["Eroare la compliare pentru ca nu se specifica numarul de elemente ale tabloului atom","2","6","5"],correct_answers:[2]},{questionNumber:"45.",question:"O clasă declarată final",answers:["clasa nu poate fi instanțiată","orice cod exterior are acces la codul clasei","implementează o interfață","nu poate avea subclase"],correct_answers:[4]},{questionNumber:"46.",question:"Compoziția reprezintă",answers:["O relație de tip IS-A","O relație de tip Can Do","O relație de tip HAS-A","Nici o relație"],correct_answers:[3]},{questionNumber:"47.",question:`Se consideră următorul fragment de cod: 

for(int i=0;i&lt;2;i++) { 
  for(int j=0;j&lt;3;j++) { 
  if(i==j) { 
  continue; 
  } 
  System.out.println(“i=”+i+” j=”+j); 
  } 
} 

Care linii vor face parte din output?`,answers:["i=0 j=0","i=0 j=1","i=0 j=2","i=1 j=0","i=1 j=1"],correct_answers:[2,3,4]},{questionNumber:"48.",question:`Fie următorul program Java:

class Tablou{
   int[] met(int []a){
       a[0] = -a[0];
       a = new int[a.length];
       a[0] = 1;
       return a;
   }
}
public class Test{
   public static void main(String[] args){
       int a[] = {1,2,3,4,5};
       int b[] = new Tablou().met(a);
       int s = 0;
       for(int i = 0; i &lt; a.length; i++) s = s + a[i] + b[i];
       System.out.println(s);
   }
}

După executarea programului, va fi afişată valoarea:`,answers:["30","14","28","15"],correct_answers:[2]},{questionNumber:"49.",question:`Considerăm următorul program Java:

class A{
    public int x = 1;
    public A() { x++; }
}
class B extends A{
    public B() { x++; }
}
class C extends B{
    public int x = 1;
    public C() { x++; }
}
public class Test{
    public static void main(String[] args){
         B b = new B();
         C c = new C();
         System.out.println(b.x + " " + c.x);
    }
}

După executarea programului, va fi afişată valoarea:`,answers:["3 3","3 4","2 2","3 2"],correct_answers:[4]},{questionNumber:"50.",question:`Considerăm următorul program Java:

class C1{
     int x = 1;
     int f(int x) { return this.x + x; }
     int f(int x, int y) { return this.x + y; }
}
class C2 extends C1{
     int f(int x) { return this.x; }
}
public class Test{
     public static void main(String[] args){
         C1 ob = new C2();
         System.out.println(ob.f(1) + ob.f(2,2));
     }
}

După executarea programului, va fi afişată valoarea:`,answers:["3","6","5","4"],correct_answers:[4]},{questionNumber:"51.",question:`După executarea secvenței de cod 

String s = "Examen", t = "Examen";
if (s == t) System.out.print("A");
else System.out.print("B");
if (s.equals(t)) System.out.print("C");
else System.out.print("D");

se va afişa:`,answers:["AD","BC","AC","BD"],correct_answers:[3]},{questionNumber:"52.",question:`Fie următorul program Java:

class A { public int x = 0; }
public class Test{
   public static A metoda() {
       A a = new A();
       try{
           a.x += 1;
           throw new NullPointerException();
       } catch(Exception e) { a.x += 2; }
       finally { a.x += 3; }
       return a;
   }
       public static void main(String[] args){
       A ob = metoda();
       System.out.println(ob.x);
   }
}

După executarea programului, se va afişa:`,answers:["6","3","4","Eroare la rulare (excepție NullPointerException netratată)"],correct_answers:[1]},{questionNumber:"53.",question:`Precizați care dintre urmaătoarele afirmații sunt adevărate:
  I. o interfață poate să conțină câmpuri publice, statice și finale, respectiv metode statice si metode implicite cu implementare
  II. o înterfață poate fi instanțiată
  III. o clasă poate implementa mai multe interfețe
  IV. mai multe clase pot implementa aceeași interfață`,answers:["I, II, IV","I, III, IV","II, III, IV","I, II, III, IV"],correct_answers:[2]},{questionNumber:"54.",question:`Fie următorul program Java:

class A {
   public static String f(String x) { return x+”A”; }
   public String g(String x) { return x+”B”; }
}

class B extends A {
   public static String f(String x) { return x+”C”; }
   public String g(String x) { return x+”D”; }
}

public class Test {
   public static void main(String[] args) {
       A a = new B();
       System.out.println(a.f(”A”) + a.g(”C”));
   }
}

După executarea programului, se va afişa:`,answers:["AACD","ACCD","AACB","ACDC"],correct_answers:[1]},{questionNumber:"55.",question:"Un fir de executare în Java se poate defini:",answers:["printr-o instanță a clasei Runnable","printr-o instanță a clasei Object","printr-o instanță a clasei Thread","printr-o instanță a clasei Clone"],correct_answers:[1]}],fr=[{questionNumber:"1.",question:"În care dintre variantele de mai jos se declară un tablou unidimensional (vector) 𝑥 în care se pot memora cel mult 100 de numere reale?",answers:["x=float[100];","double x[100];","float x[100];","real x(100);"],correct_answers:[2,3]},{questionNumber:"2.",question:"Care dintre următoarele expresii logice este adevărată (are o valoare nenulă) dacă şi numai dacă numărul real memorat în variabila 𝑥 nu aparţine intervalului (0,5]?",answers:["(x&lt;=0)||(x>5)","(x&lt;=0)&&(x>5)","(x&lt;0)||(x>=5)","(x&lt;=0)&&(x>5)"],correct_answers:[1]},{questionNumber:"3.",question:"Care dintre următoarele expresii este adevărată (are o valoare nenulă) dacă şi numai dacă numărul întreg memorat în variabila 𝑥 aparţine intervalului (1,6]?",answers:["(x>=1)||(x&lt;6)","(x>1)||(x&lt;=6)","(x>1)&&(x&lt;6)","(x>1)&&(x&lt;=6)"],correct_answers:[4]},{questionNumber:"4.",question:"După executarea instrucțiunii float x = 27/5*2/3*7; ce valoare va fi memorată în variabila 𝑥?",answers:["25.2","21","6.3","7"],correct_answers:[2]},{questionNumber:"5.",question:"După executarea instrucțiunii float x = 55/17*5/8+48/5/8*15; ce valoare va fi memorată în variabila 𝑥?",answers:["17.022058","17","16","21.219914"],correct_answers:[3]},{questionNumber:"6.",question:`Se consideră următoarea secvenţă de instrucțiuni:

int t=0,a=1234,b=10;
while(a>=b)
{
    a=a-b;
    t++; 
}
printf("%d %d",t,a);

Ce valori vor fi afișate pe ecran după executarea secvenței de mai sus?`,answers:["124 4","123 4","123 5","124 3"],correct_answers:[2]},{questionNumber:"7.",question:"Care dintre următoarele secvenţe de instrucţiuni afişează valoarea 654, ştiind că 𝑠 şi 𝑖 sunt două variabile de tip întreg?",answers:[`s=0;
for(i=0;i&lt;=654;i++) s++;
printf("%d",s);`,`s=651;
while(s&lt;=654) s++;
printf("%d",s);`,'for(i=1;i&lt;=3;i++) printf("%d",7-i);',`s=7;
while(s>=1) printf("%d",s-1);`],correct_answers:[3]},{questionNumber:"8.",question:"Care dintre următoarele secvenţe de instrucţiuni afişează valoarea 5432, ştiind că 𝑠 şi 𝑖 sunt două variabile de tip întreg?",answers:[`s=0;
for(i=0;i&lt;=5432;i++) s++;
printf("%d",s);`,`s=5421;
while(s&lt;=5432) s++;
printf("%d",s);`,'for(i=1;i&lt;4;i++) printf("%d",6-i);',`s=6;
while(s>=3) printf("%d",--s);`],correct_answers:[4]},{questionNumber:"9.",question:`Considerăm următoarea secvenţă de instrucțiuni:

while(n>0)
{
    if(n%10>s) s=n%10;
    else s=10;
    n=n/10;
}
printf("%d",s);

Ştiind că variabilele 𝑠 şi 𝑛 sunt de tip întreg, ce valoare se va afişa după executarea secvenţei de mai sus pentru 𝑛 = 9321?`,answers:["9","10","15","1"],correct_answers:[2]},{questionNumber:"10.",question:"Care dintre următoarele secvenţe de instrucțiuni afişează câtul şi restul împărţirii numărului natural 𝑎 la numărul natural nenul 𝑏?",answers:[`int t=0;
while(a>=b)
{
    a=a-b;
    t++;
}
printf("%d %d",t,a);`,`int t=0;
do
{
    a=a-b;
    t++;
}while(a>=b);
printf("%d %d",t,a);`,`int t=0;
while(a!=b)
{
    a=a-b;
    t++;
}
printf("%d %d",t,b);`,`int t=0;
while(a%b==0)
{
    a=a-b;
    t++;
}
printf("%d %d",t,a);`],correct_answers:[1]},{questionNumber:"11.",question:`Considerăm următorul program:

#include &lt;stdio.h>
void sch(int a, int *b)
{
    int aux;
    aux = a;
    a = *b;
    *b = aux;
}

int main()
{
    int x = 1,y = 2;
    sch(x,&y);
    printf("%d",x+y);
    return 0;
}

Ce valoare se va afişa pe ecran după executarea programului de mai sus?`,answers:["2","1","4","3"],correct_answers:[1]},{questionNumber:"12.",question:`Considerăm următorul program:

#include &lt;stdio.h>
void sch(char a, char *b)
{
    char aux;
    aux = a;
    a = *b;
    *b = aux;
}

int main()
{
    char x = '1',y = '2';
    sch(x,&y);
    printf("%c,%c",x,y);
    return 0;
}

Ce valori se vor afişa pe ecran după executarea programului de mai sus?`,answers:["1,2","2,1","1,1","2,2"],correct_answers:[3]},{questionNumber:"13.",question:`Considerăm următorul program:

#include &lt;stdio.h>
void sch(int *a, int b)
{
    int aux;
    aux = *a;
    *a = b;
    b = aux;
}

int main()
{
    int x = 1,y = 2;
    sch(&x,y);
    printf("%d",x*y);
    return 0;
}

Ce valoare se va afişa pe ecran după executarea programului de mai sus?`,answers:["3","2","4","1"],correct_answers:[3]},{questionNumber:"14.",question:`Considerăm următorul program:

#include&lt;stdio.h>
void f(int a,int *b)
{
    a++;
    *b=a;
    (*b)++;
}

void g(int *a,int b)
{
    b++;
    *a=b;
    (*a)++;
}

int main()
{
    int x=4, y=-2;
    f(x,&y);
    g(&x,y);
    printf("%d %d",x,y);
    return 0;
}

Ce valori se vor afişa pe ecran după executarea programului de mai sus?`,answers:["4 8","8 8","8 6","6 6"],correct_answers:[3]},{questionNumber:"15.",question:"Care dintre următoarele secvenţe de instrucţiuni atribuie variabilei de tip întreg 𝑚𝑎𝑥 cea mai mare valoare din tabloul 𝑎, format din 𝑛 numere întregi?",answers:[`max=0;
for(i=0;i&lt;n;i++)
    if(a[i]>max) max=a[i];`,`max=a[0];
for(i=0;i&lt;n;i++)
    if(a[i]>a[i+1]) max=a[i];`,`max=a[0];
for(i=0;i&lt;n;i++)
    if(a[i]>max) max=a[i];`,`max=0;
for(i=0;i&lt;n;i++)
    if(a[i]&lt;a[i+1]) max=a[i+1];`],correct_answers:[3]},{questionNumber:"16.",question:`Considerăm următoarea secvenţă de instrucțiuni:

np=0;
for(i=0;i&lt;n;i++)
    if(…) np++;
printf("%d",np);

Cu ce expresie dintre cele de mai jos trebuie înlocuite spaţiile punctate din secvenţă de instrucțiuni dată astfel încât aceasta să afişeze câte valori strict pozitive şi pare sunt în tabloul
𝑎, format din 𝑛 numere întregi?`,answers:["(a[i]>0)&&(a[i]%2!=0)","(a[i]>0)&&(a[i]%2==0)","(a[i]>0)||(a[i]%2!=0)","(a[i]>=0)||(a[i]%2==0)"],correct_answers:[2]},{questionNumber:"17.",question:'Care este valoarea expresiei strlen("programare")+strcmp("test","test")?',answers:["10","14","18",'"programaretesttest"'],correct_answers:[1]},{questionNumber:"18.",question:`Considerăm următoarea secvenţă de instrucțiuni:

char s[100];
strcpy(s,"");
strcat(s,"abcdefgh");
strcpy(s+2,s+4);
printf("%s %d" ,s,strlen(s));

Ce se va afişa pe ecran după executarea secvenţei date?`,answers:["adefgh 6","abefgh 6","abfgh 5","abefgh 8"],correct_answers:[2]},{questionNumber:"19.",question:"Care din următoarele expresii de tip logic este adevărată (are o valoare nenulă) dacă şi numai dacă şirul de caractere 𝑠, de lungime 10, este obţinut prin concatenarea a două şiruri identice?",answers:["strcmp(s,s+5)==0","s==strstr(s,s+5)","s==s+5","strcmp(s,strcat(s,s+5))==0"],correct_answers:[2]},{questionNumber:"20.",question:`Considerăm următoarea secvenţă de instrucțiuni:

char s[]="abcdabcd",c = 'c';
char *p = strchr(s,c);
printf("%d",p - s);

Ce se va afişa pe ecran după executarea secvenţei date?`,answers:["cdabcd","6","cd","2"],correct_answers:[4]},{questionNumber:"21.",question:`Considerăm următoarea secvenţă de instrucțiuni:

char s[20];
strcpy(s,"abcdabcd");
strncat(s,s+2,3);
strcpy(s,s+4);
printf("%d",strlen(s));

Ce se va afişa pe ecran după executarea secvenţei date?`,answers:["6","10","9","7"],correct_answers:[4]},{questionNumber:"22.",question:`Considerăm următoarea secvenţă de instrucțiuni:

char s[20];
strncpy(s,"abcdabcd",6);
s[6]='\\0';
strcat(s,s+4);
strcpy(s+3,s+6);
printf("%s",s);

Ce se va afişa pe ecran după executarea secvenţei date?`,answers:["abcabab","abcdab","abcab","abcdabd"],correct_answers:[3]},{questionNumber:"23.",question:`Considerăm următoarele structuri:

typedef struct
{
    int zi,luna,an;
}Data;

typedef struct
{
    char nume[30];
    Data data_nasterii;
    float media;
}Student;

Știind că variabila st este de tip Student, indicați instrucţiunea de mai jos prin care luna naşterii studentului respectiv primește valoarea 12:`,answers:["st->data_nasterii->luna=12;","st.data_nasterii.luna=12;","data_nasterii.luna=12;","st.luna=12;"],correct_answers:[2]},{questionNumber:"24.",question:`Considerăm următoarele structuri:

typedef struct
{
    int zi,luna,an;
}Data;

typedef struct
{
    char nume[30];
    Data data_nasterii;
    float media;
}Student;

Știind că variabila st este de tip Student, indicați instrucţiunea de mai jos prin care anul naşterii studentului respectiv primește valoarea 1990:`,answers:["st->data_nasterii->an=1990;","st.data_nasterii.an=1990;","data_nasterii.an=1990;","st.an=1990;"],correct_answers:[1]},{questionNumber:"25.",question:`Considerăm următoarele structuri:
typedef struct

{
    int x,y;
}Punct_2D;

typedef struct
{
    Punct_2D p;
    int z;
}Punct_3D;

Știind că variabila a este de tip Punct_3D, fiind folosită pentru a stoca coordonatele unui punct în spațiu, indicați instrucţiunea de mai jos prin care toate cele 3 coordonate ale punctului a se
iniţializează cu valoarea 0:`,answers:["a.p.x = a.p.y = a.p.z = 0;","a.p.x = a.p.y = a.z = 0;","a.x = a.y = a.z = 0;","a.p = a.z = 0;"],correct_answers:[2]},{questionNumber:"26.",question:`Considerăm tipul de date Punct, capabil să memoreze abscisa şi ordonata unui punct din plan, şi tipul de date Segment, capabil să memoreze două puncte reprezentând extremităţile unui segment din plan, definite astfel:

typedef struct
{
    float x,y;
  }Punct;

typedef struct
{
    Punct A,B;
}Segment;

Care dintre următoarele expresii are o valoare nenulă dacă şi numai dacă variabila 𝑠 de tip Segment memorează informații despre un segment vertical (aflat pe axa Oy sau paralel cu axa Oy)?`,answers:["s.A == s.B","s.x == s.y","A.x == B.x","s.A.x == s.B.x"],correct_answers:[4]},{questionNumber:"27.",question:`Considerăm tipul de date Punct, capabil să memoreze abscisa şi ordonata unui punct din plan, şi tipul de date Segment, capabil să memoreze două puncte reprezentând extremităţile unui segment din plan, definite astfel:

typedef struct
{
    float x,y;
  }Punct;

typedef struct
{
    Punct A,B;
}Segment;

Care dintre următoarele funcții returnează lungimea segmentului transmis prin intermediul parametrului s de tip Segment?`,answers:[`double f(Segment s)
{
    return pow(s.A.x–s.B.x,2)+pow(s.A.y–s.B.y,2);
}`,`double f(Segment s)
{
    return sqrt((s.A.x–s.B.x)+(s.A.y–s.B.y));
}`,`double f(Segment s)
{
    return s.B-s.A;
}`,`double f(Segment s)
{
    return sqrt(pow(s.A.x–s.B.x,2)+pow(s.A.y–s.B.y,2));
}`],correct_answers:[4]},{questionNumber:"28.",question:"Considerăm funcția int suma(int x,int y) care returnează suma numerelor întregi x și y, precum și funcția int prod(int x,int y) care returnează produsul numerelor întregi x și y. Știind că a, b și c sunt 3 variabile de tip întreg, care dintre expresiile de mai jos atribuie variabilei t de tip întreg valoarea expresiei (a+b)*(a+c)+b*c?",answers:["t = prod(suma(a,b),suma(a,c),prod(b,c));","t = suma(prod(suma(a,b),suma(a,c)),suma(b,c));","t = prod(suma(a,b),suma(a,c)+suma(b,c));","t = suma(prod(suma(a,b),suma(a,c)),prod(b,c));"],correct_answers:[4]},{questionNumber:"29.",question:"Considerăm funcția int suma(int x,int y) care returnează suma numerelor întregi x și y, precum și funcția int prod(int x,int y) care returnează produsul numerelor întregi x și y. Știind că a, b și c sunt 3 variabile de tip întreg, care dintre expresiile de mai jos atribuie variabilei t de tip întreg valoarea expresiei a*b+a*b*c?",answers:["t = suma(prod(a,b),prod(a,b+c));","t = suma(prod(a,b),prod(a,b,c));","t = suma(prod(a,b),prod(prod(a,b),c));","t = prod(prod(a,b),suma(1,c));"],correct_answers:[3,4]},{questionNumber:"30.",question:"Care dintre următoarele funcții returnează suma cifrelor numărului natural n?",answers:[`int f(int n)
{
    int s=0;
    while(n!=0)
    {
      s=s+n%10;
      n=n/10;
    }
    return s;
}`,`int f(int n)
{
    int s=0;
    while(n!=0)
    {
      s=s+n/10;
      n=n%10;
    }
    return s;
}`,`int f(int n)
{
    int s=0;
    while(n!=0)
    {
      s=s + n%10;
      n=n/10;
    }
}`,`int f(int n)
{
    int s=0;
    while(n!=0)
    {
      s=n%10;
      n=n/10;
    }
    return s;
}`],correct_answers:[1]},{questionNumber:"31.",question:"Care dintre următoarele funcții poate fi folosită într-un program pentru a citi de la tastatură un tablou unidimensional format din numere întregi?",answers:[`void citire(int v[],int n)
{
    scanf("%d",&n);
    for(int i=0;i&lt;n;i++) scanf("%d",&v[i]);
}`,`void citire(int v[],int *n)
{
    scanf("%d",n);
    for(int i=0;i&lt;*n;i++) scanf("%d",&v[i]);
}`,`void citire(int *v[],int *n)
{
    scanf("%d",&n);
    for(int i=0;i&lt;n;i++) scanf("%d",&v[i]);
}`,`void citire(int *v,int *n)
{
    scanf("%d",n);
    for(int i=0;i&lt;*n;i++) scanf("%d",v+i);
}`],correct_answers:[2,4]},{questionNumber:"32.",question:"Care dintre următoarele funcții returnează suma elementelor tabloului unidimensional de numere întregi transmis ca parametru?",answers:[`int suma(int v[],int n)
{
    int s=0,k=0;
    while(k&lt;n) s+=v[k++];
    return s;
}`,`int suma(int v[],int n)
{
    int s=0,k=0;
    while(k++&lt;n) s+=v[k];
    return s;
}`,`int suma(int v[],int n)
{
    int s,k;
    for(k=s=0;k&lt;n;s+=v[k++]);
    return s;
}`,`int suma(int v[],int n)
{
    int s=0;
    for(int k=n-1;k>=0;k--) s+=v[n-k-1];
    return s;
}`],correct_answers:[1,3,4]},{questionNumber:"33.",question:`Funcția minmax primește prin parametrul de intrare v un tablou unidimensional format din numere întregi, iar prin parametrul de intrare n primește numărul de elemente ale tabloului v.
Funcția trebuie să întoarcă prin doi parametri de ieșire, min și max, valoarea minimă și, respectiv, valoarea maximă din tabloul v. Care dintre următoarele variante reprezintă un antet corect al funcției minmax?`,answers:["void minmax(int v[],int n,int min,int max)","int minmax(int v[],int n,int min,int max)","void minmax(int v[],int n,int *min,int *max)","void minmax(int *v[],int *n,int *min,int *max)"],correct_answers:[3]},{questionNumber:"34.",question:"Fie v un tablou unidimensional format din 100 de numere reale de tip double și numărul natural k cuprins între 0 și 99. Care dintre următoarele expresii afișează adresa elementului v[k]?",answers:['printf("%p",v+k);','printf("%p",*(v+k));','printf("%p",v+k*sizeof(double));','printf("%p",&v[k]);'],correct_answers:[1,4]},{questionNumber:"35.",question:"Fie 𝑣 un tablou unidimensional format din 100 de numere reale de tip double și 𝑝 o variabilă de tip pointer către double în care este memorată adresa ultimului element al tabloului 𝑣(double *p=&v[99];). Care dintre următoarele expresii afișează numărul de octeți pe care îi ocupă tabloul 𝑣 în memorie?",answers:['printf("%d",(p-v)*sizeof(double));','printf("%d",100*sizeof(double));','printf("%d",p-v);','printf("%d",sizeof(v));'],correct_answers:[1,2,4]},{questionNumber:"36.",question:"Care dintre următoarele secvențe de cod poate fi utilizată pentru a aloca dinamic un tablou unidimensional 𝑎 format din 100 de numere întregi?",answers:["int *a = (int *)malloc(100*sizeof(int *));","int *a = (int *)malloc(100*sizeof(int));","int *a = (int *)malloc(100);","int *a = (int *)calloc(100,sizeof(int));"],correct_answers:[2,4]},{questionNumber:"37.",question:"Care dintre următoarele secvențe de cod poate fi utilizată pentru a aloca dinamic un tablou bidimensional 𝑎 format din 10 de linii și 20 de coloane de numere întregi?",answers:[`int **a = (int **)malloc(10*sizeof(int *));
for(int i=0;i&lt;10;i++)
    a[i]=(int *)malloc(20*sizeof(int));`,"int **a = (int **)calloc(10*sizeof(int *),20*sizeof(int));",`int *a = (int *)malloc(20*sizeof(int *));
for(int i=0;i&lt;20;i++)
    a[i]=(int *)malloc(10*sizeof(int));`,`int **a = (int **)calloc(10,sizeof(int*));
for(int i=0;i&lt;10;i++)
    a[i]=(int *)calloc(20,sizeof(int));`],correct_answers:[1,4]},{questionNumber:"38.",question:"Fie 𝑎 un tabloul bidimensional pătratic de dimensiune 𝑛. Care dintre următoarele secvențe de cod afișează elementele aflate pe diagonala principală a matricei 𝑎?",answers:[`for(int i=0;i&lt;n;i++)
    for(int j=0;j&lt;n;j++)
        if(i==j) printf("%d ",a[i][j]);`,'for(int i=0;i&lt;n;i++) printf("%d ",a[i][i]);',`for(int i=0;i&lt;n;i++)
    for(int j=0;j&lt;n;j++)
        if(i+j==n-1) printf("%d ",a[i][j]);`,'for(int i=0;i&lt;n;i++) printf("%d ",a[i][n-i-1]);'],correct_answers:[1,2]},{questionNumber:"39.",question:"Fie 𝑎 un tabloul bidimensional pătratic de dimensiune 𝑛. Care dintre următoarele secvențe de cod afișează elementele aflate pe diagonala secundară a matricei 𝑎?",answers:[`for(int i=0;i&lt;n;i++)
    for(int j=0;j&lt;n;j++)
        if(i==j) printf("%d ",a[i][j]);`,'for(int i=0;i&lt;n;i++) printf("%d ",a[i][i]);',`for(int i=0;i&lt;n;i++)
    for(int j=0;j&lt;n;j++)
        if(i+j==n-1) printf("%d ",a[i][j]);`,'for(int i=0;i&lt;n;i++) printf("%d ",a[i][n-i-1]);'],correct_answers:[3,4]},{questionNumber:"40.",question:"Fie 𝑎 un tabloul bidimensional pătratic de dimensiune 𝑛. Care dintre următoarele secvențe de cod afișează elementele triunghiului delimitat de prima coloană, diagonala principală și ultima linie din matricea 𝑎?",answers:[`for(int i=0;i&lt;n;i++)
    for(int j=0;j&lt;n;j++)
        if(i>=j) printf("%d ",a[i][j]);`,`for(int i=0;i&lt;n;i++)
    for(int j=0;j&lt;n;j++)
        if(i&lt;=j) printf("%d ",a[i][j]);`,`for(int i=0;i&lt;n;i++)
    for(int j=0;j&lt;=i;j++) printf("%d ",a[i][j]);`,`for(int i=0;i&lt;n;i++)
    for(int j=i;j&lt;n;j++) printf("%d ",a[i][j]);`],correct_answers:[1,3]},{questionNumber:"41.",question:`Fie 𝑎 un tabloul bidimensional pătratic de dimensiune 𝑛. Care dintre următoarele secvențe de cod afișează elementele triunghiului delimitat de diagonala principală, ultima coloană și ultima
linie din matricea 𝑎?`,answers:[`for(int i=0;i&lt;n;i++)
    for(int j=0;j&lt;n;j++)
        if(i>=j) printf("%d ",a[i][j]);`,`for(int i=0;i&lt;n;i++)
    for(int j=0;j&lt;n;j++)
        if(i&lt;=j) printf("%d ",a[i][j]);`,`for(int i=0;i&lt;n;i++)
    for(int j=0;j&lt;=i;j++) printf("%d ",a[i][j]);`,`for(int i=0;i&lt;n;i++)
    for(int j=i;j&lt;n;j++) printf("%d ",a[i][j]);`],correct_answers:[2,4]},{questionNumber:"42.",question:"Fie 𝑎 un tabloul bidimensional pătratic de dimensiune 𝑛. Care dintre următoarele secvențe de cod afișează suma elementelor de pe fiecare linie a matricei 𝑎?",answers:[`for(int i=0;i&lt;n;i++)
{
    int s=0;
    for(int j=0;j&lt;n;j++)
    {
        s=s+a[i][j];
        printf("%d ",s);
    }
}`,`int s=0;
for(int i=0;i&lt;n;i++)
    {
    for(int j=0;j&lt;n;j++)
    {
        s=s+a[i][j];
        printf("%d ",s);
    }
}`,`int s=0;
for(int i=0;i&lt;n;i++)
{
    for(int j=0;j&lt;n;j++) s=s+a[i][j];
    printf("%d ",s);
}`,`for(int i=0;i&lt;n;i++)
{
    int s=0;
    for(int j=0;j&lt;n;j++) s=s+a[i][j];
    printf("%d ",s);
}`],correct_answers:[4]},{questionNumber:"43.",question:"Care dintre următoarele funcții returnează dimensiunea în octeți a unui fișier text a cărui cale este transmisă prin parametrul de intrare 𝑛𝑓?",answers:[`int nb(char *nf)
{
    FILE *f=fopen(nf,"r");
    fseek(f,0,SEEK_END);
    int n=ftell(f);
    fclose(f);
    return n;
}`,`int nb(char *nf)
{
    char c;
    FILE *f=fopen(nf,"r");
    int n=0;
    while(!feof(f))
    {
        fscanf(f,"%c",&c);
        n++;
    }
    fclose(f);
    return n+1;
}`,`int nb(char *nf)
{
    FILE *f=fopen(nf,"r");
    int n=sizeof(f);
    fclose(f);
    return n;
}`,`int nb(char *nf)
{
    char s[1001];
    FILE *f=fopen(nf,"r");
    int n=0;
    while(fgets(s,1000,f))
        n++;
    fclose(f);
    return n;
}`],correct_answers:[1,2]},{questionNumber:"44.",question:"Care dintre următoarele funcții returnează numărul de linii dintr-un fișier text a cărui cale este transmisă prin parametrul de intrare 𝑛𝑓 (se presupune că fișierul nu conține linii vide)?",answers:[`int nb(char *nf)
{
    char s[1001];
    FILE *f=fopen(nf,"r");
    int n=0;
    while(fscanf(f,"%s",s)==1)
        n++;
    fclose(f);
    return n;
}`,`int nb(char *nf)
{
    char c;
    FILE *f=fopen(nf,"r");
    int n=0;
    while(fscanf(f,"%c",&c)==1)
        if(c=='\\n') n++;
    fclose(f);
    return n;
}`,`int nb(char *nf)
{
    FILE *f=fopen(nf,"r");
    int n=sizeof(f);
    fclose (f);
    return n/sizeof(char *);
}`,`int nb(char *nf)
{
    char s[1001];
    FILE *f=fopen(nf,"r");
    int n=0;
    while(fgets(s,1000,f))
        n++;
    fclose (f);
    return n;
}`],correct_answers:[2,4]},{questionNumber:"45.",question:`Considerăm următorul program:

#include&lt;stdio.h>
#include&lt;string.h>

int main()
{
    FILE *f=fopen("test.txt","r");
    char s[101],t[101];
    while(fgets(s,100,f))
        strcpy(t,s);
    printf("%s",t);
    fclose(f);
    return 0;
}

Știind ca lungimea maximă a unei linii din fișierul text test.txt este de 100 de caractere, ce se va afișa după executarea programului de mai sus?`,answers:["fiecare linie din fișier;","penultima linie din fișier;","ultimul caracter din fișier;","ultima linie din fișier."],correct_answers:[4]},{questionNumber:"46.",question:`Considerăm următorul program:

#include&lt;stdio.h>
#include&lt;string.h>

int main()
{
    char s[21],aux[11];
    strcpy(s,"");
    for(int i=1;i&lt;=5;i++)
    {
        printf("Sirul %d: ",i);
        gets(aux);
        …………………………………………………………
    }
    printf("%s",s);
    return 0;
}

Presupunând că fiecare dintre cele 5 șiruri care vor fi citite de la tastatură vor fi formate din minim două caractere și maxim 10, stabiliți cu care dintre instrucțiunile de mai jos trebuie înlocuite spațiile punctate din program astfel încât acesta să afișeze șirul format din ultimele două caractere din fiecare dintre cele 5 șiruri citite:`,answers:["strcat(s,aux+9);","strcat(s,aux[strlen(aux)-1]);","strncat(s,aux,strlen(aux)-1);","strcat(s,aux+strlen(aux)-2);"],correct_answers:[4]},{questionNumber:"47.",question:"Care dintre următoarele secvențe de cod afișează pe ecran șirul de numere 1 2 2 3 3 3 4 4 4 4 5 5 5 5 5?",answers:[`for(int i=1;i&lt;=5;i++)
    for(int j=1;j&lt;=5;j++)
        printf("%d",i);`,`for(int i=1;i&lt;=5;i++)
    for(int j=1;j&lt;=i;j++)
        printf("%d",i);`,`for(int i=1;i&lt;=5;i++)
    for(int j=1;j&lt;=i;j++)
        printf("%d",j);`,`for(int i=1;i&lt;=4;i++)
    for(int j=i+1;j&lt;=5;j++)
        printf("%d",i);`],correct_answers:[2]},{questionNumber:"48.",question:"Stabiliți care dintre următoarele funcții întorc poziția primei valori strict pozitive din tabloul 𝑣 format din 𝑛 numere întregi sau -1 dacă tabloul nu conține nici un număr pozitiv:",answers:[`int p(int v[],int n)
{
    int i,x=-1;
    for(i=0;i&lt;n;i++)
        if(v[i]>0) x=i;
   return x;
}`,`int p(int v[],int n)
{
    int x=0;
    while(v[x]&lt;=0) x++;
    return x-1;
}`,`int p(int v[],int n)
{
    int i,x=-1;
    for(i=0;i&lt;n;i++)
        if((v[i]>0)&&(x&lt;0)) x=i;
    return x;
}`,`int p(int v[],int n)
{
    int i;
    for(int i=0;i&lt;n;i++)
        if (v[i]>0) return i;
    return -1;
}`],correct_answers:[3,4]},{questionNumber:"49.",question:`Considerăm următoarea secvență de cod:

int a, b, p=1;

scanf("%d %d", &a, &b);
while(p &lt; a)
    p = p*2;
while(p &lt;= b)
{
    printf("%d\\n", p);
    p = p*2;
}

Dacă valorile introduse pentru variabilele a și b vor fi două numere naturale nenule cu proprietatea că a &lt; b, atunci pe ecran se vor afișa:`,answers:["toate puterile lui 2 din intervalul [a,b];","toate puterile lui 2 din intervalul (a,b];","toate numerele pare din intervalul [a,b];","toate numerele pare din intervalul (a,b];"],correct_answers:[1]},{questionNumber:"50.",question:`Considerăm următorul program:

#include&lt;stdio.h>

void p(int v[],int *n)
{
    int i,j,g;
    do
    {
        g=0;
        for(i=0;i&lt;*n;i++)
        if(v[i]&lt;0)
        {
            for(j=i;j&lt;*n-1;j++) v[j]=v[j+1];
            (*n)--;
            g=1;
        }
    }
    while(g);
}

int main()
{
    int i,v[]={-1,2,-3,-4,5},n=5;
    p(v,&n);
    for(i=0;i&lt;n;i++)
        printf("%d ",v[i]);
    return 0;
}

Ce valori vor fi afișate pe ecran după executarea programului de mai sus?`,answers:["–1 -3 -4","2 5","–1 2 -3 -4","2 -3 -4 5"],correct_answers:[2]}],gr=[{questionNumber:"1.",question:"Ce algoritmi matematici se pot folosi pentru a calcula distanța minimă dintre noduri într-o rețea?",answers:["algoritmul inundării","despicarea orizontului","algoritmul lui Dijkstra","algoritmi pe bază de flux"],correct_answers:[3]},{questionNumber:"2.",question:"Rutarea este:",answers:[`Procesul prin care un router trimite pachetele la destinatie fie în reteaua proprie, fie în altă rețea
pe baza adresei IP destinație și a tabelei de rutare.`,"procesul de transfer al datelor într-un segment de rețea de la o sursă la o destinație","procesul de actualizare a tabelei de rutare","procesul de configurare a unui protocol de rutare pe un ruter"],correct_answers:[1]},{questionNumber:"3.",question:"Care dintre următoarele entități nu poate fi un câmp în tabela de rutare:",answers:["adresa destinație","masca de rețea","interfața următorului salt","protocolul de rutare"],correct_answers:[4]},{questionNumber:"4.",question:"Un ruter dirijează pachetele IP pe baza:",answers:["adresei sursă si adresei destinație","adresei de rețea destinație si tabelei de rutare","adresei fizice","adresei destinație si protocolului DNS"],correct_answers:[2]},{questionNumber:"7.",question:"Ce port este folosit pentru configurarea inițială a unui ruter direct de la un calculator?",answers:["auxiliar","consolă","serial","Ethernet"],correct_answers:[2]},{questionNumber:"8.",question:"Ce comandă data pe un ruter CISCO afisează tabela de rutare?",answers:["ping","show ip route","show interface","show running config"],correct_answers:[2]},{questionNumber:"9.",question:"Care este un dejavantaj al rutării dinamice?",answers:["administrare greoaie","necesită reconfigurare la fiecare schimbare de topologie de rețea","nu poate ocoli defecțiunile apărute în rețea","încarcă suplimentar traficul din rețea"],correct_answers:[4]},{questionNumber:"10.",question:"Prin ce identifică un ruter rețeaua de destinație a unui pachet?",answers:["prin adresa MAC","prin adresa portului de destinație","prin adresa IP destinație si masca de rețea","prin adresa de nivel transport (port TCP sau UDP)"],correct_answers:[3]},{questionNumber:"11.",question:"Care este rolul unei adrese de broadcast?",answers:["de a transmite un pachet către o singură rețea destinație","de a trimite un pachet către o listă de destinație","de a trimite un mesaj către toate ruterele dintr-o rețea","de a trimite un mesaj către toate gazdele dintr-o rețea/subrețea"],correct_answers:[4]},{questionNumber:"12.",question:"Ce protocol (serviciu) face conversia unei adrese fizice (MAC) într-o adresă IP în cadrul unui LAN Ethernet?",answers:["ARP","RARP","ICMP","DNS"],correct_answers:[2]},{questionNumber:"13.",question:"Care dintre următoarele este o adresă multicast în IPv4?",answers:["111.111.111.111","255.255.255.255","225.1.1.1","224.0.0.2"],correct_answers:[4]},{questionNumber:"14.",question:"Următoarea adresă IPv6 2023:0000:34FA:0000:0000:09C1:4322:AA43 se mai poate scrie corect astfel:",answers:["2023::0:34FA::09C1:4322:AA43","2023:0000:34FA::9C1:4322:AA43","2023::34FA::9C1:4322:AA43","2023::34FA::09C1:4322:AA43"],correct_answers:[2]},{questionNumber:"15.",question:"Interoperabilitatea IPv4 cu IPv6 se poate face astfel:",answers:["Stiva duală","Translație de adresă (NAT)","Folosirea unor tabele de rutare duală","Protocoalele nu sunt interoperabile"],correct_answers:[1]},{questionNumber:"17.",question:"Ce câmpuri obligatorii are antetul unui cadru Ethernet?",answers:["Adresele IP sursă si destinație","Controlul erorilor (CRC)","Durata de viață a cadrului","Numărul de secvență"],correct_answers:[2]},{questionNumber:"18.",question:"Rolul unui server DNS într-o rețea de calculatoare este:",answers:["Să stabilească nume de domenii și să le administreze","Să facă rezoluția adresă fizică <-> adresă IP","Să facă rezoluția nume de domeniu <-> adresa IP","Să atribuie adrese IP echipamentelor din rețea"],correct_answers:[3]},{questionNumber:"19.",question:"Protocolul HTTP are rezervat portul de nivel transport:",answers:["80","8080","25","Nu are un port rezervat"],correct_answers:[1]},{questionNumber:"20.",question:"Care dintre următoarele variante nu este un nume de domeniu DNS de prim nivel în Internet?",answers:[".arp",".com",".edu",".ro"],correct_answers:[1]},{questionNumber:"21.",question:"Ce comandă este mai des folosită pentru a afla informații despre configurarea IP în sistemele de operare Windows 10?",answers:["PING","WINCONFIG","IPCONFIG","IP CONF"],correct_answers:[3]},{questionNumber:"22.",question:"Pentru a vizualiza conexiunile active de pe un calculator conectat în rețea se poate folosi comanda cmd:",answers:["SHOW CONFIG","NETSTAT","IPCONFIG/ALL","SHOW RUNNING CONFIG"],correct_answers:[2]},{questionNumber:"23.",question:"Ce aplicație din sistemul de operare Windows Server 2019 administrează conturile utilizatorilor?",answers:["Domain Controller-ul","DHCP","DNS","IIS (Internet Information Server)"],correct_answers:[1]},{questionNumber:"24.",question:"Cum este numit procesul prin care mai multe controlere de domeniu partajează copii complete ale bazei de date cu directoare de rețea și se actualizează constant între ele?",answers:["Duplicare","Replicare","Incărcare","Partajare"],correct_answers:[2]},{questionNumber:"25.",question:"Ce model de rețea este acela în care serviciile asigurate utilizatorilor la cererea acestora sunt găzduite de aplicații dedicate care rulează pe masini fizice sau virtuale?",answers:["Model bazat pe organizație","Model bazat pe resurse","Model client-server","Model bazat pe calcul distribuit"],correct_answers:[3]},{questionNumber:"27.",question:"Ce comandă se poate folosi pentru a afla numele și adresa serverului DNS dintr-o rețea?",answers:["Winword","NSLOOKUP","PING","NETSTAT"],correct_answers:[2]},{questionNumber:"28.",question:"Câte adrese IP trebuie să aibă configurate un ruter pentru a face serviciul de rutare?",answers:["Cel puțin una","Una sau mai multe indifferent de rețea","Două în aceeași rețea","Cel puțin două in rețele diferite"],correct_answers:[4]},{questionNumber:"29.",question:"Care este rolul unui ruter într-o rețea?",answers:["Să găzduiască tabelele de rutare și să forwardeze spre destinație pachetele IP sosite","Să facă rezoluția adresă IP adresă MAC","Să descopere topologia rețelei","Să calculeze calea optimă între orice pereche de echipamente sursă-destinație"],correct_answers:[1]},{questionNumber:"30.",question:"Care dintre protocoalele de mai jos permite monitorizarea stării funcționale a resurselor de rețea?",answers:["HTTP","IMAP","SNMP","SMTP"],correct_answers:[3]},{questionNumber:"33.",question:"Standardul IEEE 802.11 se referă la:",answers:["Rețele locale de calculatoare necablate","Rețele de arie largă de calculatoare necablate","Rețele de transport de date","Rețele care folosesc mediul de comunicație optic"],correct_answers:[1]},{questionNumber:"35.",question:"O rețea din Internet are masca de subrețea 255.255.225.224. Care este numărul maxim de gazde din subrețea?",answers:["16","30","64","32"],correct_answers:[2]},{questionNumber:"36.",question:"Care dintre următoarele variante este o mască validă de subrețea fără clasă?",answers:["255.0.0.0","255.255.255.0","255.255.255.230","255.255.255.240"],correct_answers:[4]},{questionNumber:"38.",question:"Comanda Router(config)#hostname permite:",answers:["aflarea numelui ruterului","stabilirea numelui ruterului din modul configurare globală","accesul la configurarea ruterului","stabilirea numelui si a parolei ruterului"],correct_answers:[2]},{questionNumber:"39.",question:"Ce afirmații referitoare la tehnologia MPLS sunt adevărate:",answers:["Este un mecanism de incapsulare suplimentar între nivelurile 3 si 4","Inlocuieste complet adresele IP dintr-o rețea","Foloseste comutarea fluxurilor de date pe bază de etichete","Eticheta este un înlocuitor de adrese MAC din LAN-uri Ethernet"],correct_answers:[3]},{questionNumber:"40.",question:"Tehnicile de transmisie cu spectru împrăștiat se folosesc cu preponderență:",answers:["In rețelele Ethernet","In rețelele de transport","In rețelele FDDI","In rețelele wireless"],correct_answers:[4]},{questionNumber:"41.",question:"Se dă adresa IP 140.20.37.133 si masca de subrețea 255.255.255.192. Să se precizeze adresa de subrețea din care face parte această adresă IP si adresa de difuzare în subrețea.",answers:["140.20.37.120 si 140.20.37.255","140.20.37.128 si 140.20.37.191","140.20.37.0 si 140.20.37.255","140.20.37.128 si 140.20.37.120"],correct_answers:[2]},{questionNumber:"42.",question:"Metrica (costul) unei rute poate fi:",answers:["Un număr intre 0 si 255 asociat unui protocol de rutare pentru ierarhizarea acestuia","Un criteriu sau un set de criterii de apreciere a calității acesteia","Un număr care exprimă gradul de încredere al unei rute stabilită prin rularea unor protocoare de rutare","Sistem de priorități de transmitere a pachetelor de către un ruter"],correct_answers:[2]},{questionNumber:"43.",question:"O rută direct conectată are distanța administrativă:",answers:["1","250","0","Distanta administativă este un atribut al unui ruter, nu al unei rute"],correct_answers:[3]},{questionNumber:"44.",question:"RIP este un protocol de rutare care:",answers:["Foloseste ca metrică întârzierea minimă în rețea","Se bazează pe starea legăturilor","Este folosit pentru rutare interdomeniu","Are numărul maxim de salturi egal cu 15"],correct_answers:[4]},{questionNumber:"45.",question:"Care este metrica folosită de RIP pentru determinarea căii optime?",answers:["Numărul minim de salturi pană la destinație","Lățimea de bandă maximă pană la destinație","Timpul minim pană la destinație","Rata de eroare minimă până la destinație"],correct_answers:[1]},{questionNumber:"46.",question:"Timpul de convergență al unui protocol reprezintă:",answers:["Timpul dus-întors maxim în care un pachet poate parcurge oricare pereche sursă-destinație din rețea","Timpul în care toate ruterele din rețea și-au configurat tabela de rutare","Timpul mediu de prelucrare a pachetelor de către un protocol de rețea","Timpul de viață al unui pachet în rețea"],correct_answers:[2]},{questionNumber:"47.",question:"Serviciul de postă electronică funcționează pe baza următoarelor protocoale mai cunoscute:",answers:["SNMP, RTP, DNS","POP3, IMAP, SMTP","IMAP, HTTP, SNMP","UDP, SNMP, SMTP"],correct_answers:[2]},{questionNumber:"48.",question:"Citirea postei electronice se poarte face cu ajutorul următoarelor protocoale:",answers:["SMTP, POP3","IMAP, SMNP","POP3, IMAP","SMTP, SNMP"],correct_answers:[3]},{questionNumber:"49.",question:"DHCP (Dynamic Host Configuration Protocol) este o aplicație client-server prin care:",answers:["Serverul furnizează stației client numele de domeniu si adresa IP necesare funcționării în rețea","Se determină adresa IP corespunzătoare unui unei stații cu nume de domeniu cunoscut","Se atribuie adrese fizice stațiilor dintr-o rețea","Se face configurare IP dinamică stațiilor dintr-o rețea"],correct_answers:[4]},{questionNumber:"50.",question:"Comanda următoare: Router(config)#router ospf 10 dată pe un ruter Cisco are ca efect:",answers:["Validarea procesului OSPF pe acel ruter","Definirea ID-ului de ruter necesar rulării OSPF","Definirea ariei 10 pe ruter","Validarea procesului OSPF si definirea arie"],correct_answers:[1]},{questionNumber:"51.",question:"Următoarea comandă de configurare a unui ruter Router(config-router)#network 192.168.0.0 0.0 255.255 area 10 are ca effect:",answers:["Activarea procesului OSPF pe acel ruter","Defineste o rețea conectată la ruter pe care rulează procesul OSPF precum și aria în care se află acea rețea","Defineste aria procesului OSPF","Defineste aria și numărul procesului OSPF"],correct_answers:[2]},{questionNumber:"52.",question:"Care dintre următoarele protocoale suportă rutarea ierarhică?",answers:["RIPv1 si OSPF","RIPv1 si RIPv2","OSPF si RIPv2","RIPv1 si IGRP"],correct_answers:[3]},{questionNumber:"53.",question:"Un obiect administrat prin SNMP este:",answers:["Un echipament fizic de rețea care rulează SMTP și permite monitorizarea stării sale de funcționare","O entitate logică sau fizică de rețea definită în MIB, a cărei stare de funcționare este monitorizată prin SNMP","partea server a aplicației SMTP","partea client a aplicației SNMP"],correct_answers:[2]},{questionNumber:"54.",question:"Următoarea adresă IPv6 FE80::200:CFF:FE3A:8B18 este:",answers:["Adresă multicast","Adresă link local","Adresă site local","Adresa broadcast"],correct_answers:[2]},{questionNumber:"56.",question:"Adresele IPv6 unicast agregabile globale:",answers:["Au formatul de prefix 001/3","Au structură plată","Au lungimea totală de 64 biți","Nu sunt rutabile in Internet"],correct_answers:[1]},{questionNumber:"57.",question:"Protocolul ICMP este folosit de rețelele IPv4 pentru:",answers:["Rutare în Internet","Descoperirea gazdelor conectate în rețea","Configurarea tabelelor de rutare","Raporta problemelor legate de livrarea pachetelor IP în rețea"],correct_answers:[4]},{questionNumber:"58.",question:"Protocolul BGP este folosit pentru rutarea datelor:",answers:["În rețelele de bandă largă","În rețele locale de calculatoare","Între sisteme autonome","În rețelele de organizație"],correct_answers:[3]},{questionNumber:"59.",question:"Care dintre afirmațiile următoare despre un agent SNMP sunt adevărate :",answers:["Solicită informații de management de la statia de management","Răspunde interogărilor de management primite de la sistemul de management","Este un protocol de nivel rețea","Comunică cu toți agenții de management din rețea pentru a actualiza starea de funcționare curentă"],correct_answers:[2]},{questionNumber:"60.",question:"O comunitate SNMP este:",answers:["Totalitatea elementelor de rețea administrate prin SNMP","Un mecanism de securitate pentru comunicația dintre sistemul de management si agentul de management","O rețea în care este instalată aplicația SNMP","Totalitatea obiectelor administrate prin SNMP"],correct_answers:[2]},{questionNumber:"61.",question:"Algoritmul Spanning Tree este folosit pentru:",answers:["crearea de topologii logice de rețea fără bucle","calcularea distanței optime între oricare două noduri de rețea","calcularea fluxului minim de date în rețea","calcularea întîrzierii minime a pachetelor în rețea"],correct_answers:[1]},{questionNumber:"62.",question:"Comanda Ping este parte din protocolul:",answers:["UDP","TCP","ICMP","DNS"],correct_answers:[3]},{questionNumber:"63.",question:"Ce reprezinta o topologie a unei retele de calculatoare?",answers:["Topologia reprezinta modul în care comunica un grup de servere.","Topologia reprezinta structura de vecinătăți folosita pentru a interconecta dispozitivele din retea.","Topologia reprezinta un set de reguli stabilit prin care utilizatorii pot schimba informatii.","Topologia reprezinta setul de protocoale folosit în retea."],correct_answers:[2]},{questionNumber:"64.",question:"Protocoalele de VPN comune sunt:",answers:["LDAP, BGP, ECMP","L2TP, Dijkstra, IPsec","IPsec, OpenVPN, SSH","HTTPS, DHCP, OpenVPN"],correct_answers:[3]},{questionNumber:"65.",question:"VLAN-ul reprezintă:",answers:["O metoda de a subnetiza reteaua.","Este subreteaua de broadcast.","Un concept de clasificare a conexiunilor UDP.","O metoda de a face retele virtuale peste cele fizice locale"],correct_answers:[4]},{questionNumber:"66.",question:"Ce tipuri de protectie trebuie sa ofere un VPN?",answers:["Confidentialitate, integritate, autentificarea clientilor, protectia la replicare si controlul accesului","Controlul accesului, identificare biometrica, monitorizarea traficului, acord parental","Confidentialitate, integirtate, accesul la internet si accesul pe deep web","Protectia la replicare, scanarea retelei, criptarea cu OpenVAS, pritectie anti spam"],correct_answers:[1]},{questionNumber:"67.",question:"VLAN-ul folosește două tipuri de porturi pentru a transporta traficul:",answers:["Porturi ethernet si porturi locale.","Porturi ethernet si porturi seriale.","Porturi trunk si porturi de acces.","Poturi de access si porturi de consolă."],correct_answers:[3]},{questionNumber:"68.",question:"OpenVPN foloseste doua canale virtuale pentru a comunica intre client si server:",answers:["Un canal de control TLS pentru schimbul de informatii si un canal de date.","Authentication Header (AH) si Encapsulating Security Payload (ESP).","Un canal de control TLS pentru schimbul de informatii si Internet Key Exchange (IKE) protocol.","Encapsulating Security Payload (ESP) si Internet Key Exchange (IKE) protocol."],correct_answers:[1]},{questionNumber:"69.",question:"Serverul DHCP are rolul:",answers:["De a oferi configuratii valide clientilor din retelele de calulatoare.","Are rolul de a ruta traficul intre sisteme autonome.","De a asigura un anumit nivel de calitate a serviciului (QoS) de transport al datelor.","De a oferi o alternativa la DNS-ul dinamic."],correct_answers:[1]},{questionNumber:"70.",question:"Antetul unei datagrame UDP conține:",answers:["Adresa IP sursă, adresa IP destinație, portul sursă, portul desinație","Portul sursă, portul destinație, lungime totală, sumă de control","Portul sursă, portul destinație, lungimea datagramei, numărul de secvență","Portul sursă, portul destinație, control erori, număr de secvență"],correct_answers:[2]},{questionNumber:"71.",question:"Subnetizarea este procesul prin care:",answers:["Se unesc mai multe retele publice cu cele private prin o adresa de tipul 255.255.255.0.","Se sparge o retea in doua sau mai multe retele (sau subretele). Un subnet este o sub-divizare logica a unui IP.","Se folosesc clasele prviate în cadrul internetului public prin adaugarea unor numere aleatorii la adresa sau adresele existente.","O rețea cu adresă IP publică este divizată în mai multe subrețele prin folosirea unor adrese IP private"],correct_answers:[2]},{questionNumber:"72.",question:"Fereastra glisanta a protocolului TCP are urmatoarele proprietati:",answers:["Imparte fluxul de date pe pachete cu dimesiuni fixe si seteaza antentul.","Reseteaza conexiunile în cazul apariției congestiei în rețea.","Se redimensioneaza pentru a încerca să limiteze numărul de erori de retransmisie dar încercand să păstreze cel mai mare flux de date.","Nici un raspuns nu este valid."],correct_answers:[3]}],wr=[{questionNumber:"1.",question:`Un SGBD distribuit este:
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
`,"Creați două proceduri stocate, una care să execute instrucțiunea SELECT din tabelă și alta care să permită ALTER pe coloanele Name și SalePrice, apoi acordați permisiunea EXECUTE pe proceduri."],correct_answers:[1,4]}],vr=[{questionNumber:"1",question:"Planificarea Round-Robin:",answers:["determină atribuirea unei cuante de timp în care procesului îi este permis să ruleze;","determină suspendarea unui proces într-un moment arbitrar;","determină atribuirea unei priorităţi fixe pentru execuţia unui proces;","determină lansarea în execuţie a unui proces dacă nu există altul mai prioritar în execuţie."],correct_answers:[1]},{questionNumber:"2",question:"La declanşarea unei întreruperi prima acţiune desfăşurată în sistemul de calcul este:",answers:["salvarea registrelor procesului întrerupt în tabela de procese;","încărcarea registrului program counter cu conţinutul vectorului de întrerupere;","salvarea stării programului întrerupt în stivă;","modificarea stării procesului interrupt."],correct_answers:[3]},{questionNumber:"3",question:"Un proces este:",answers:["activitatea unităţii de prelucrare;","un program compilat;","un program în execuţie;","un program link-editat."],correct_answers:[3]},{questionNumber:"4",question:'Registrul "contor program" conţine:',answers:["adresele operanzilor operaţiei ce trebuie executată;","adresa următoarei instrucţiuni ce trebuie executată;","chiar operanzii operaţiei ce trebuie executată;","numărul instrucţiunii ce trebuie executată."],correct_answers:[2]},{questionNumber:"5",question:"Secţiunile critice sunt:",answers:["secvenţe de program care trebuie tratate cu mare atenţie;","secvenţe de tratare a întreruperilor importante;","secvenţe din activitatea sistemului de calcul când resursele sunt insuficiente;","secvenţe de program unde se accesează date partajate."],correct_answers:[4]},{questionNumber:"6",question:"Planificatorul este componenta sistemului de operare care decide:",answers:["care proces trece în starea de execuţie şi pentru cât timp;","care proces trebuie terminat şi care proces trebuie început;","care dispozitiv periferic va fi folosit de către program;","care dintre fişierele deschise trebuie închis la un moment dat."],correct_answers:[1]},{questionNumber:"7",question:"Un sistem de operare asigură îndeplinirea următoarelor funcţii:",answers:["creşterea performanţelor unităţii de prelucrare;","un management eficient al resurselor fizice şi logice;","asistarea utilizatorului printr-un sistem dezvoltat de comunicaţie;","protecţia informaţiei."],correct_answers:[2,3,4]},{questionNumber:"8",question:'Tranziţia unui proces din starea “în execuţie" în starea “blocat" are loc atunci când:',answers:["planificatorul decide suspendarea procesului pentru a lansa un altul mai prioritar;","planificatorul decide blocarea procesului din cauza unei erori;","procesul aşteaptă apariţia unor date de care depinde continuarea execuţiei;","procesul nu mai poate continua execuţia din cauza unei erori."],correct_answers:[3]},{questionNumber:"9",question:"În sistemele de operare de tip client-server nucleul acestuia realizează:",answers:["servirea proceselor server;","servirea proceselor client;","transportul mesajelor de la procesele client către procesele server;","accesul la resursele proceselor client şi ale proceselor server."],correct_answers:[3]},{questionNumber:"10",question:"Evacuarea-reîncărcarea proceselor (swapping) este procesul de:",answers:["terminare, respectiv începere a proceselor;","transfer al datelor în fişiere pe disc;","lansare în execuţie a programelor;","transfer al proceselor între memorie şi disc."],correct_answers:[4]},{questionNumber:"11",question:'Tranziţia unui proces din starea “în execuţie" în starea “gata" are loc atunci când:',answers:["planificatorul decide suspendarea procesului pentru că i-a expirat cuanta de timp alocată;","planificatorul, în urma analizei proceselor active stabileşte că un proces nu poate continua execuţia;","procesul nu mai are date de prelucrat şi trebuie să-şi termine execuţia;","procesul nu mai are date de transferat şi poate sa-şi continue execuţia."],correct_answers:[1]},{questionNumber:"12",question:"Într-un sistem de operare de tip client-server procesele server lucrează în modul de lucru:",answers:["supervisor;","kernel;","utilizator;","privilegiat."],correct_answers:[3]},{questionNumber:"13",question:"Care din următoarele tipuri nu reprezintă un sistem de fișiere:",answers:["Swap;","ext1;","NTFS;","FAT32."],correct_answers:[1]},{questionNumber:"14",question:"În cadrul partiționării unui sistem Linux, reprezintă un tip de partiție?",answers:["Partiția logică;","Partiția primară;","Partiția virtuală;","Partiția extinsă."],correct_answers:[1,2,4]},{questionNumber:"15",question:"RUID reprezintă:",answers:["Userul logat iniţial în sistem;","Userul devenit prin rularea comenzii su;","RUID nu există. Doar EUID si UID;","UID secundar."],correct_answers:[1]},{questionNumber:"16",question:"EUID reprezintă:",answers:["Userul care s-a logat iniţial în sistem;","Userul devenit prin rularea comenzii su;","UID secundar al userului;","EUID nu exista, doar UID."],correct_answers:[2]},{questionNumber:"17",question:"Ce comandă se foloseşte pentru afişarea userilor logaţi în sistem?",answers:["login;","whosin;","who;","Whoami."],correct_answers:[3]},{questionNumber:"18",question:"Cum se află procesul programului care deschide portul 10000 pentru a asculta conexiuni ce folosesc protocolul tcp?",answers:["fuser -n tcp 10000;","grep 10000;","kill 10000;","fuser -n tcp."],correct_answers:[1]},{questionNumber:"19",question:"Comanda su are drept scop:",answers:["Substituirea userului curent cu root şi încărcarea environmentului lui root;","Substituirea userului curent fără root şi încărcarea environmentului lui root;","O eroare fiindcă s-a specificat semnul minus dar nu şi opţiunea;","Modificarea informaţiilor despre un user."],correct_answers:[1]},{questionNumber:"20",question:"Afişarea tuturor grupurilor din care face parte un utilizator numit user1 se realizează prin comanda:",answers:["groups;","show groups;","id;","show users."],correct_answers:[1,3]},{questionNumber:"21",question:"Ce comandă crează un user numit user1?",answers:["useradd user1;","useradd user1 -c 'user normal' -d /home/user1 -s /bin/bash;","useradd -c 'user normal' -d /home/user1 -m -s /bin/bash user1;","adduser -group root user1."],correct_answers:[1,3]},{questionNumber:"22",question:"Pentru fiecare user se pastrează în fisierul /etc/passwd următoarele informaţii:",answers:["username;","uid;","grupurile din care acesta face parte;","home directory."],correct_answers:[1,2,4]},{questionNumber:"23",question:"Cum ajungem în directorul home al utilizatorului logat?",answers:["cd ~;","cd /;","cd home;","cd."],correct_answers:[2]},{questionNumber:"24",question:"În Linux în mod standard userii se găsesc în fişierul:",answers:["/etc/users;","/etc/shadow;","/etc/system-users;","/etc/passwd."],correct_answers:[4]},{questionNumber:"25",question:"Ce comandă folosim în linux pentru a afla adresa ip a placii de reţea?",answers:["ifconfig;","ipconfig;","route;","traceroute."],correct_answers:[1]},{questionNumber:"26",question:"Afirmaţiile corecte sunt care se referă la echivalenţa dintre modul simbolic şi absolut:",answers:["775=rwxrwxrwx;","775=rwxrwxr-x;","1001=--------t;","664=rw-rw-r—."],correct_answers:[2,3,4]},{questionNumber:"27",question:"Umask are rolul de a:",answers:["Stabili cu ce permisiuni “default” se crează noile fişiere şi directoare;","Stabili cu ce permisiuni default se crează fişierele daca ne referim la files umsk;","Stabili masca sistemului;","Stabili masca userului."],correct_answers:[1]},{questionNumber:"28",question:"Daca se foloseste umask 0002 care dintre urmatoarele afirmaţii sunt corecte:",answers:["Fişierele se crează “default” cu permisiunile 664;","Fişierele se crează “default” cu permisiunile 440;","Directoarele se crează “default” cu permisiunile rwxrwxr-x;","Directoarele se crează “default” cu permisiunile 755."],correct_answers:[1,3]},{questionNumber:"29",question:"Cum se închide procesul 2543?",answers:["kill -9 2543;","ps – aux | 2543;","grep 2543;","exit 2543."],correct_answers:[1]},{questionNumber:"30",question:"În ce fişier se scriu comenzile ce se vor executate la pornirea calculatorului după pornirea tuturor proceselor?",answers:["/etc/rc.d/rc.local;","crontab;","/bin/sh;","/bin."],correct_answers:[1]},{questionNumber:"31",question:"Ce se scrie în prima linie a unui script bash?",answers:["#!/bin/sh;","#!/usr/local/perl;","#!/sbin/perl;","#!/bin."],correct_answers:[1]},{questionNumber:"32",question:"Ce defineşte directiva DirectoryIndex din fişierul de configurare a serverului Apache?",answers:["directorul în care trebuie pus fişierul index.html;","fişierele pe care le caută în Document Root pentru a le iniţializa ca primă pagină a site-ului;","indexul cuvintelor de căutare a paginii web folosind un motor ca www.google.com;","directorul în care intră doar root dacă furnizează parola."],correct_answers:[2]},{questionNumber:"33",question:"Cu ce comandă aflăm direct procesul folosit de un utilizator conectat prin ssh la server?",answers:["ps -aux | grep pts;","ps -aux | who;","ps -aux | grep last;","ps -aux | whoami."],correct_answers:[1]},{questionNumber:"34",question:"Cum facem pentru a avea anumite servicii pornite automat la pornirea calculatorului?",answers:["folosim comanda setup, apoi din meniu alegem system services şi bifăm acele servicii;","edităm fişierul /etc/xinetd;","edităm fişierul /etc/inet.d/inetd;","edităm un fişier nou în care enumerăm serviciile."],correct_answers:[1]},{questionNumber:"35",question:`Folosind interpretorul bash se creează următorul script denumit scr1:
# !/bin/bash
echo $#
Care va fi rezultatul afisat, dacă scriptul se va executa cu comanda: # bash scr1 arg1 arg2 4:`,answers:["3;","arg1;","arg2;","4."],correct_answers:[1]},{questionNumber:"36",question:`Ce rezultat va produce execuția urmatorului script:
#!/bin/bash
s=0
for i înls -l | awk '{print $5}'
do
s=expr $s + $i
done
echo expr $s / 1024`,answers:["scriptul afisează valoarea însumata, exprimată în Kb, a fișierelor din directorul current;","scriptul afisează o lista cu dimensiunea fișierelor, în octeti din directorul curent;","scriptul afisează valoarea insumata, exprimată înbiti, a fișierelor din directorul curent;","scriptul afisează o listă cu dimensiunea fișierelor din directorul curent exprimată în biți."],correct_answers:[1]},{questionNumber:"37",question:"Se presupune că ați editat un script cu numele /root/scr1. Care este comanda ce trebuie introdusă pentru a face scriptul executabil?",answers:["chmod u+x /root/scr1;","chmod 744 /root/scr1;","chmod 666 /root/scr1;","chmod u-wx /root/scr1."],correct_answers:[1,2]},{questionNumber:"38",question:`Care este rezultatul afișat în urma execuției comenzii:
ifconfig | grep "inet addr" | grep - v "127.0 .0 .1" | awk '{print $2;}' | awk - F ':' '{print $2;}'`,answers:["toate adresele ip mai puțin adresa interfeței loopback;","adresa ip a interfeței eth0;","adresa ip a interfeței loopback;","toate adresele ipv6."],correct_answers:[1]},{questionNumber:"39",question:`Care este rezultatul afișat în urma execuției:
init 3`,answers:["intrarea în nivelul 3, respectiv modul text, cu acces network;","intrarea înnivelul 3, respectiv modul grafic cu acces network;","crearea a 3 procese în memorie, subordonate procesului parinte init."],correct_answers:[1]},{questionNumber:"40",question:"Care dintre urmatoarele comenzi are ca rezultat crearea unui fișier file2 care este identic cu fișierul file1, ignorând liniile goale?",answers:['grep -v "^$" file1 > file2;',"sed -e '/^$/d' file1 > file2;",'grep -v "#^" file1 > file2;','grep "^$" file1 > file2.'],correct_answers:[1,2]},{questionNumber:"41",question:"Cu ce comandă se poate obține lista rutelor cunoscute de sistem?",answers:["route;","netstat –r;","netstat –n;","ifconfig;"],correct_answers:[1,2]},{questionNumber:"42",question:`Care este rezultatul afișat în urma execuției următoarei comenzi:
ps -ef --no-heading | awk '{print $1}' | sort | uniq`,answers:["numele tuturor userilor, fara valori duplicate, sub care sunt rulate procesele curente;","lista id-urilor aparținând proceselor curente, fară valori duplicate;","numarul de useri, fară valori duplicate, sub care sunt rulate procesele curente;","lista numelor proceselor curente, fară valori duplicate, sortate alfabetic."],correct_answers:[1]},{questionNumber:"43",question:"Care este semnificația urmatoarei comenzi echo $?",answers:["se afișează codul de eroare al ultimei comenzi;","se afișează numarul de parametri ai scriptului curent;","se afișează numele scriptului curent;","se afișează variabila de sistem $HOME."],correct_answers:[1]},{questionNumber:"44",question:"Care este comanda folosită pentru a porni serviciul network în sistemul de operare Linux?",answers:["service network start;","/etc/init.d/network start;","chkconfig network start;","sc start network."],correct_answers:[1,2]},{questionNumber:"45",question:"Ce nu se poate obține folosind comanda uname?",answers:["numarul de procesoare;","totalul de memorie disponibilă;","versiunea kernel-ului;","numele sistem;","denumirea kernel-ului."],correct_answers:[1,2]},{questionNumber:"46",question:"Pentru a funcționa rezoluția de nume, ce fisier trebuie să existe și să conțină una sau mai multe adrese ale serverelor DNS?",answers:["/etc/resolv.conf;","/etc/sysconfig/network;","/etc/sysconfig/network-scripts/network-functions;","/etc/hosts;"],correct_answers:[1]},{questionNumber:"47",question:"Care sunt informațiile care nu se regăsesc în fișierul /etc/passwd?",answers:["Hash-urile parolelor utilizatorilor;","Directorul home al utilizatorului curent;","Interpretorul de comenzi (shell-ul);","Grupurile secundare ale utilizatorului curent."],correct_answers:[1,4]},{questionNumber:"48",question:"Ce fișier este folosit pentru montarea automată a unui sistem de fișiere în sistemul de operare Linux?",answers:["/etc/fstab;","/dev/sda1;","/mnt/hda6;","/etc/fsck;"],correct_answers:[1]},{questionNumber:"49",question:`Care este rezultatul afișat în urma execuției următoarei comenzii:
cat /etc/passwd | grep nologin | cut –d: -f1`,answers:["numele utilizatorilor care nu se pot loga în sistem;","numele utilizatorilor al căror cont a fost dezactivat;","numele grupului utilizatorilor al căror cont a fost dezactivat;","numele grupului utilizatorilor care nu se pot loga însistem."],correct_answers:[1]},{questionNumber:"50",question:`Care este rezultatul afișat în urma execuției următoarei comenzii:
find -type f -atime -7`,answers:["căutarea în directorul curent a fișierelor accesate în ultimele 7 zile;","căutarea în directorul radacină a fișierelor accesate în ultimele 7 ore;","căutarea în directorul radacină a fișierelor create în ultimele 7 ore;","căutarea în directorul curent a fișierelor create în ultimele 7 zile."],correct_answers:[1]}],Nr=[{questionNumber:"1.",question:"Complexitatea minimă a unui algoritm care calculează numărul tuturor submulțimilor unei mulțimi cu 𝑛 elemente este:",answers:["𝒪(𝑛<sup>2</sup>)","𝒪(2<sup>𝑛</sup>)","𝒪(𝑛)","𝒪(𝑛!)"],correct_answers:[3]},{questionNumber:"2.",question:"Complexitatea minimă a unui algoritm care afişează toate submulțimile unei mulțimi cu 𝑛 elemente este:",answers:["𝒪(𝑛<sup>2</sup>)","𝒪(2<sup>𝑛</sup>)","𝒪(𝑛)","𝒪(𝑛!)"],correct_answers:[2]},{questionNumber:"3.",question:"Complexitatea minimă a unui algoritm care calculează numărul modurilor în care pot fi aşezate n cărți pe un raft suficient de lung este:",answers:["𝒪(𝑛<sup>2</sup>)","𝒪(2<sup>𝑛</sup>)","𝒪(𝑛)","𝒪(𝑛!)"],correct_answers:[3]},{questionNumber:"4.",question:"Complexitatea minimă a unui algoritm care afişează toate modurile în care pot fi aşezate n cărți pe un raft suficient de lung este:",answers:["𝒪(𝑛<sup>2</sup>)","𝒪(2<sup>𝑛</sup>)","𝒪(𝑛)","𝒪(𝑛!)"],correct_answers:[2]},{questionNumber:"5.",question:`Considerăm următorul program în limbajul C:
#include&lt;stdio.h>
int main()
{
    int i,j,n,a[101];
    scanf("%d",&n);
    for(i=0;i&lt;n;i++) scanf("%d",&a[i]);
    i=0;
    while((i&lt;n)&&(a[i]&lt;0)) i++;
    j=n-1;
    while((j>=0)&&(a[j]>=0)) j--;
    if(i>=j) printf("1");
    else printf("0");
    return 0;
}

Complexitatea algoritmului implementat în acest program este:`,answers:["𝒪(𝑛<sup>2</sup>)","𝒪(log<sub>2</sub>𝑛)","𝒪(𝑛<sup>3</sup>)","𝑂(𝑛)"],correct_answers:[4]},{questionNumber:"6.",question:"Se consideră un șir format din maxim 100 de numere naturale distincte cuprinse între 1 și 1000. Complexitatea minimă a unui algoritm care să afișeze numerele din șir în ordine crescătoare este:",answers:["𝒪(𝑛<sup>2</sup>)","𝒪(𝑛<sup>3</sup>)","𝒪(𝑛log<sub>2</sub>𝑛)","𝒪(𝑛)"],correct_answers:[4]},{questionNumber:"7.",question:`Considerăm următorul program în limbajul C:
#include&lt;stdio.h>
int main()
{
    int a[100],i,j,n,s;
    scanf("%d",&n);
    for(i=0;i&lt;n;i++) scanf("%d",&a[i]);
    i = s = 0;
    while(i&lt;n)
    {
    j=i+1;
    while((j&lt;=n) && (a[i]==a[j])) j++;
    s++;
    i=j;
    }
    printf("\\n\\n%d\\n" , s);
    return 0;
}

Complexitatea algoritmului implementat în acest program este:`,answers:["𝒪(𝑛<sup>2</sup>)","𝒪(log<sub>2</sub>𝑛)","𝒪(𝑛<sup>3</sup>)","𝑂(𝑛)"],correct_answers:[4]},{questionNumber:"8.",question:`Considerăm următorul program în limbajul C:
#include&lt;stdio.h>
int main()
{
    int i,j,n,a[101];
    scanf("%d",&n);
    for(i=0;i&lt;n;i++) scanf("%d",&a[i]);
    i=0;
    while((i&lt;n)&&(a[i]&lt;0)) i++;
    j=n-1;
    while((j>=0)&&(a[j]>=0)) j--;
    if(i>=j) printf("1");
    else printf("0");
    return 0;
}
Programul afişează:`,answers:["1 dacă şi numai dacă tabloul a este sortat crescător şi 0 altfel;","1 dacă şi numai dacă toate valorile din tabloul a sunt pozitive şi 0 altfel;","1 dacă şi numai dacă în tabloul a valorile negative se află înaintea celor pozitive şi 0 altfel;","1 dacă şi numai dacă toate valorile din tabloul a sunt strict negative şi 0 altfel."],correct_answers:[3]},{questionNumber:"9.",question:`Considerăm următorul program în limbajul C:
#include&lt;stdio.h>
int main()
{
    int a[100],i,j,n,s;
    scanf("%d",&n);
    for(i=0;i&lt;n;i++) scanf("%d",&a[i]);
    i = s = 0;
    while(i&lt;n)
    {
        j=i+1;
        while((j&lt;=n) && (a[i]==a[j])) j++;
        s++;
        i=j;
    }
    printf("\\n\\n%d\\n" , s);
    return 0;
}
Presupunând că tabloul 𝑎 este ordonat crescător, precizați ce afişează programul dat:`,answers:["numărul valorilor distincte din tabloul 𝑎;","lungimea maximă a unei secvenţe din tabloul 𝑎 formată din valori egale;","numărul secvenţelor strict crescătoare din tabloul 𝑎;","lungimea maximă a unui subşir din tabloul 𝑎 format din valori egale."],correct_answers:[1]},{questionNumber:"10.",question:`Se consideră următoarea funcţie recursivă, scrisă în limbajul C:
int F(int n)
{
    if (n==0) return 0;
    else
      if ((n%10)>F(n/10)) return n%10;
      else return F(n/10);
}
Ce valoare va returna funcția după apelul 𝐹(38423)?`,answers:["3","2","8","4"],correct_answers:[3]},{questionNumber:"11.",question:`Se consideră următorul program în limbajul C:
#include&lt;stdio.h>
int F(int v[],int n)
{
    if(n==0) return v[0];
    else
      if(v[n]&lt;0) return F(v,n-1);
      else return v[n]+F(v,n-1);
}
int main()
{
    int i,v[10];
    for(i=0;i&lt;10;i++)
      if(i%2==0) v[i]=i;
      else v[i]=-i;
    printf("%d",F(v,9));
    return 0;
}
Ce afişează programul de mai sus?`,answers:["-20","0","20","-5"],correct_answers:[3]},{questionNumber:"12.",question:`Se consideră următoarea funcţie recursivă, scrisă în limbajul C:
int f(int n)
{
    if (n==0) return 1;
    else return(((n%10)%2 == 0) && (f(n/10)!=0));
}
Ce valoare va returna funcția după apelul 𝑓(6904)?`,answers:["4","6","9","0"],correct_answers:[4]},{questionNumber:"13.",question:`Se consideră următoarea funcţie recursivă, scrisă în limbajul C:
int f(int x)
{
    if(x==0) return 0;
    else return (f(x-1)+3*x-1);
}
Pentru ce valoare a parametrului 𝑥 funcția 𝑓 va întoarce valoarea 57?`,answers:["5","6","8","10"],correct_answers:[2]},{questionNumber:"14.",question:`Se consideră următoarea funcţie recursivă, scrisă în limbajul C:
int p(int n,int x)
{
    if(x==n) return 1;
    else
      if(n%x==0) return 0;
      else return p(n,x+1);
}

În urma apelului 𝑝(𝑛,2) funcția va întoarce valoarea 1 dacă și numai dacă:`,answers:["numărul natural 𝑛 este par;","numărul natural 𝑛 este prim;","numărul natural 𝑛 nu este prim;","numărul natural 𝑛 este impar."],correct_answers:[2]},{questionNumber:"15.",question:"Indicaţi care dintre următoarele metode de sortare se bazează pe tehnica de programare Divide et Impera:",answers:["sortarea rapidă;","sortarea prin interschimbare;","sortarea prin interclasare;","sortarea prin numărare."],correct_answers:[1,3]},{questionNumber:"16.",question:"Stabiliți care dintre următoarele metode de sortare nu se bazează pe tehnica de programare Divide et Impera:",answers:["sortarea rapidă;","sortarea prin interschimbare;","sortarea prin interclasare;","sortarea prin numărare."],correct_answers:[2,4]},{questionNumber:"17.",question:"Indicaţi care dintre următoarele metode de sortare au complexitatea 𝒪(𝑛log<sub>2</sub>𝑛):",answers:["sortarea rapidă;","sortarea cu ansamble;","sortarea prin interclasare;","sortarea prin numărare."],correct_answers:[1,2,3]},{questionNumber:"18.",question:`Considerăm următoarele două funcții scrise în limbajul C:

int a[100];
int max(int x,int y)
{
    if(x>y) return x;
    else return y;
}
int F(int p, int u)
{
    if(p==u) return a[p];
    else
    {
        int m=(p+u)/2;
        return max(F(p,m),F(m+1,u));
    }
}

Ştiind că tabloul a este format din n numere naturale nenule, iar apelul subprogramului va fi 𝐹(0,𝑛−1), precizați tehnica de programare utilizată în cadrul funcției 𝐹:`,answers:["Greedy;","backtracking;","programarea dinamică;","Divide et Impera."],correct_answers:[4]},{questionNumber:"19.",question:"Fie 𝑣 un tablou unidimensional format din 1000000 de numere reale ordonate descrescător şi 𝑥 un număr real. Pentru a verifica dacă valoarea 𝑥 se găseşte sau nu în tabloul 𝑣, algoritmul de căutare binară va efectua:",answers:["exact 1000000 de comparaţii;","cel puţin 24 de comparaţii;","cel mult 24 de comparaţii;","nu se poate folosi algoritmul de căutare binară în acest caz."],correct_answers:[3]},{questionNumber:"20.",question:`Considerăm următoarea funcție scrisă în limbajul C:

int S(int a[], int p, int u)
{
    if(p>u) return 0;
    else
    {
        int m=(p+u)/2;
        return a[m] + S(a,p,m-1) + S(a,m+1,u);
    }
}

Ştiind că tabloul a este format din n numere întregi, iar apelul subprogramului va fi 𝑆(𝑎,0,𝑛−1), precizați ce va calcula funcția 𝑆:`,answers:["valoarea elementului din mijlocul tabloului 𝑎;","dublul sumei valorilor din tabloul 𝑎;","numărul valorilor pozitive din tabloul 𝑎;","suma valorilor din tabloul 𝑎."],correct_answers:[4]},{questionNumber:"21.",question:"Dacă ultima soluție afişată de algoritmul backtracking pentru generarea tuturor permutărilor mulțimii {1,2,…,7} este 7,6,3,5,4,2,1, atunci următoarea soluție care va fi afişată este:",answers:["7,6,4,1,2,5,3","7,1,2,3,4,5,6","7,6,4,1,2,3,5","7,6,5,3,4,2,1"],correct_answers:[3]},{questionNumber:"22.",question:"Dacă ultima soluție afişată de algoritmul backtracking pentru generarea tuturor permutărilor mulțimii {1,2,…,7} este 6,5,7,4,3,2,1, atunci următoarea soluție care va fi afişată este:",answers:["7,1,2,3,4,5,6","6,7,1,2,3,4,5","7,6,1,2,3,4,5","6,7,5,4,3,2,1"],correct_answers:[2]},{questionNumber:"23.",question:"Dacă ultima soluție afişată de algoritmul backtracking pentru generarea tuturor permutărilor mulțimii {1,2,…,7} este 6,7,4,5,3,2,1, atunci următoarea soluție care va fi afişată este:",answers:["7,1,2,3,4,5,6","6,5,7,1,2,3,4","6,7,5,1,2,3,4","6,1,2,3,4,5,7"],correct_answers:[3]},{questionNumber:"24.",question:"Folosind tehnica de programare backtracking pentru a genera toate permutările mulțimii {1,2,...,𝑛}, o soluție se memorează sub forma unui tablou unidimensional 𝑥<sub>1</sub>,𝑥<sub>2</sub>,...,𝑥<sub>𝑛</sub>. Dacă au fost deja generate valori pentru componentele 𝑥<sub>1</sub>,𝑥<sub>2</sub>,...,𝑥<sub>𝑘−1</sub>, iar pentru componenta 𝑥<sub>𝑘</sub> (1&lt;𝑘&lt;𝑛) au fost deja testate toate valorile posibile şi nu a fost găsită niciuna convenabilă, atunci:",answers:["se încearcă alegerea unei noi valori pentru 𝑥<sub>𝑘−1</sub>;","se încearcă alegerea unei noi valori pentru 𝑥<sub>1</sub>, oricare ar fi valoarea lui 𝑘;","se încheie algoritmul;","se încearcă alegerea unei valori pentru componenta 𝑥<sub>𝑘+1</sub>."],correct_answers:[1]},{questionNumber:"25.",question:"Considerăm ecuația 𝑎<sub>1</sub>𝑥<sub>1</sub>+𝑎<sub>2</sub>𝑥<sub>2</sub>+⋯+𝑎<sub>𝑛</sub>𝑥<sub>𝑛</sub>=𝑦, unde 𝑎<sub>1</sub>,𝑎<sub>2</sub>,…,𝑎<sub>𝑛</sub>,𝑦 sunt numere naturale nenule. Pentru a determina toate soluțiile ecuației de forma (𝑥<sub>1</sub>,𝑥<sub>2</sub>,…,𝑥<sub>𝑛</sub>), cu 𝑥<sub>1</sub>,𝑥<sub>2</sub>,…,𝑥<sub>𝑛</sub> numere naturale, se poate folosi direct algoritmul backtracking pentru:",answers:["generarea permutărilor;","descompunerea unui număr natural ca sumă de numere naturale nenule;","plata unei sume folosind 𝑛 tipuri de monede;","generarea combinărilor."],correct_answers:[3]},{questionNumber:"26.",question:"Un algoritm optim care să afişeze toate subşirurile crescătoare de lungime maximă ale unui şir format din 𝑛 numere foloseşte:",answers:["doar metoda programării dinamice;","doar metoda backtracking (se generează toate subşirurile şirului respectiv, iar pentru fiecare subşir se verifică dacă este crescător şi, respectiv, maximal);","mai întâi metoda programării dinamice pentru a determina lungimea maximă 𝑙𝑚𝑎𝑥 a unui subşir crescător al şirului dat şi apoi metoda backtracking pentru a genera toate subşirurile crescătoare de lungime 𝑙𝑚𝑎𝑥 ale şirului considerat;","doar metoda Greedy."],correct_answers:[3]},{questionNumber:"27.",question:"Considerăm că în Facultatea de Informatică sunt înscrişi 𝑛 studenți în anul III. Pentru a afişa toate grupele ce pot fi formate din câte 𝑝 studenți (𝑝≤𝑛) putem folosi algoritmul backtracking pentru:",answers:["generarea aranjamentelor formate din p elemente ale unei mulțimi cu n elemente;","generarea permutărilor unei mulțimi cu p elemente;","generarea combinărilor formate din p elemente ale unei mulțimi cu n elemente;","generarea aranjamentelor formate din n elemente ale unei mulțimi cu p elemente."],correct_answers:[3]},{questionNumber:"28.",question:"Utilizând metoda backtracking, se generează toate descompunerile distincte ale numărului natural 𝑛=10 ca sumă a cel puțin două numere naturale nenule. Care este ultima descompunere generată?",answers:["4+3+2+1","9+1","4+6","5+5"],correct_answers:[4]},{questionNumber:"29.",question:"Utilizând metoda backtracking, se generează toate descompunerile distincte ale numărului natural 𝑛=16 ca sumă a cel puțin două numere naturale nenule. Care este ultima descompunere generată?",answers:["4+4+4+4","15+1","7+9","8+8"],correct_answers:[4]},{questionNumber:"30.",question:"Fie 𝑆 o sumă de bani şi 𝑣<sub>1</sub>,𝑣<sub>2</sub>,…,𝑣<sub>𝑛</sub> valorile a n tipuri de monede. Presupunând că din fiecare tip avem la dispoziţie un număr nelimitat de monede, pentru afişarea tuturor modalităţilor în care poate fi plătită suma 𝑆 folosind monede disponibile trebuie să utilizăm un algoritm bazat pe metoda:",answers:["Greedy;","backtracking;","programării dinamice;","Divide et Impera."],correct_answers:[2]},{questionNumber:"31.",question:"Considerăm un rucsac cu ajutorul căruia putem transporta 66 kg şi 7 obiecte având greutățile 23, 10, 10, 25, 38, 7 şi 5 kg, iar câştigurile obținute prin transportul integral al fiecărui obiect la destinație sunt 69, 10, 30, 100, 19, 14 şi 50 RON. Ştiind că din orice obiect putem încărca şi numai o parte a sa, câştigul maxim pe care îl putem obține este:",answers:["250.5 RON","217 RON","265 RON","255 RON"],correct_answers:[4]},{questionNumber:"32.",question:"Considerăm un rucsac cu ajutorul căruia putem transporta 67 kg şi 7 obiecte având greutățile 10, 5, 20, 10, 20, 25 şi 21 kg, iar câştigurile obținute prin transportul integral al fiecărui obiect la destinație sunt 30, 40, 40, 10, 4, 50 şi 30 RON. Ştiind că din oricare obiect putem încărca şi numai o parte a sa, câştigul maxim pe care îl putem obține este:",answers:["114 RON","170 RON","280 RON","163.7 RON"],correct_answers:[2]},{questionNumber:"33.",question:"Considerăm un rucsac cu ajutorul căruia putem transporta 53 kg şi 7 obiecte având greutățile 10, 5, 18, 10, 8, 20 şi 40 kg, iar câştigurile obținute prin transportul integral al fiecărui obiect la destinație sunt 30, 40, 36, 10, 16, 10 şi 30 RON. Ştiind că din oricare obiect putem încărca şi numai o parte a sa, câştigul maxim pe care îl putem obține este:",answers:["133 RON","121 RON","133.5 RON","136.5 RON"],correct_answers:[3]},{questionNumber:"34.",question:"Stabiliți care dintre următoarele propoziții referitoare la tehnica de programare Greedy sunt adevărate:",answers:["conduce întotdeauna la o soluție optimă;","construieşte o soluție element cu element şi în cazul în care valoarea elementului curent nu verifică anumite condiții se renunță la acesta şi se revine la elementul anterior;","găseşte întotdeauna o singură soluție a unei probleme;","conduce la o soluție optimă doar în cazul în care s-a demonstrat matematic corectitudinea criteriului de selecție pe baza căruia un element din mulțimea inițială este adăugat în mulțimea ce reprezintă soluția problemei."],correct_answers:[3,4]},{questionNumber:"35.",question:"La un ghişeu stau la coadă 𝑛 persoane, numerotate cu 1,2,...,𝑛. Cunoscând timpii de servire 𝑡<sub>1</sub>,𝑡<sub>2</sub>,…,𝑡<sub>𝑛</sub> ai celor 𝑛 persoane şi ştiind că pentru a servi o persoană 𝑘 trebuie servite persoanele 1,2,...,𝑘−1 aflate înaintea sa, trebuie să determinăm un mod de rearanjare al persoanelor la coadă, astfel încât timpul de aşteptare al fiecărei persoane să fie minim. Stabiliți care dintre următoarele variante de rezolvare a acestei probleme este corectă şi are o complexitate minimă:",answers:["se generează toate modurile în care pot fi rearanjate cele 𝑛 persoane la coadă şi pentru fiecare mod de rearanjare se calculează într-un tablou timpii de servire, iar soluția este dată de tabloul minim în sens lexicografic;","se rearanjează persoanele în ordinea descrescătoare a timpilor de servire;","se generează toate modurile în care pot fi rearanjate cele 𝑛 persoane la coadă şi pentru fiecare mod de rearanjare se calculează timpul total 𝑇 de servire al celor 𝑛 persoane, iar soluția este tabloul pentru care valoarea lui 𝑇 este minimă;","se rearanjează persoanele în ordinea crescătoare a timpilor de servire."],correct_answers:[4]},{questionNumber:"36.",question:"La un ghişeu stau la coadă 7 persoane 𝑝<sub>1</sub>,𝑝<sub>2</sub>,…,𝑝<sub>7</sub>. Cunoscând timpii lor de servire 𝑡<sub>1</sub>=10,𝑡<sub>2</sub>=6,𝑡<sub>3</sub>=5,𝑡<sub>4</sub>=6,𝑡<sub>5</sub>=2,𝑡<sub>6</sub>=8,𝑡<sub>7</sub>=4 şi ştiind că pentru a servi o persoană trebuie servite, mai întâi, toate persoanele aflate înaintea sa, precizați care dintre următoarele modalități de rearanjare a persoanelor la coadă minimizează timpul mediu de așteptare:",answers:["𝑝<sub>5</sub>,𝑝<sub>7</sub>,𝑝<sub>3</sub>,𝑝<sub>2</sub>,𝑝<sub>4</sub>,𝑝<sub>6</sub>,𝑝<sub>1</sub>","𝑝<sub>1</sub>,𝑝<sub>6</sub>,𝑝<sub>4</sub>,𝑝<sub>2</sub>,𝑝<sub>3</sub>,𝑝<sub>5</sub>,𝑝<sub>7</sub>","𝑝<sub>5</sub>,𝑝<sub>7</sub>,𝑝<sub>3</sub>,𝑝<sub>4</sub>,𝑝<sub>2</sub>,𝑝<sub>6</sub>,𝑝<sub>1</sub>","𝑝<sub>3</sub>,𝑝<sub>7</sub>,𝑝<sub>2</sub>,𝑝<sub>1</sub>,𝑝<sub>6</sub>,𝑝<sub>4</sub>,𝑝<sub>5</sub>"],correct_answers:[1,3]},{questionNumber:"37.",question:"La un ghişeu stau la coadă 7 persoane 𝑝<sub>1</sub>,𝑝<sub>2</sub>,…,𝑝<sub>7</sub>. Cunoscând timpii lor de servire 𝑡<sub>1</sub>=12, 𝑡<sub>2</sub>=6, 𝑡<sub>3</sub>=15, 𝑡<sub>4</sub>=16, 𝑡<sub>5</sub>=12, 𝑡<sub>6</sub>=8,𝑡<sub>7</sub>=2 şi ştiind că pentru a servi o persoană trebuie servite, mai întâi, toate persoanele aflate înaintea sa, precizați care dintre următoarele modalități de rearanjare a persoanelor la coadă minimizează timpul mediu de așteptare:",answers:["𝑝<sub>7</sub>,𝑝<sub>2</sub>,𝑝<sub>6</sub>,𝑝<sub>5</sub>,𝑝<sub>1</sub>,𝑝<sub>3</sub>,𝑝<sub>4</sub>","𝑝<sub>3</sub>,𝑝<sub>7</sub>,𝑝<sub>2</sub>,𝑝<sub>1</sub>,𝑝<sub>6</sub>,𝑝<sub>4</sub>,𝑝<sub>5</sub>","𝑝<sub>4</sub>,𝑝<sub>3</sub>,𝑝<sub>1</sub>,𝑝<sub>5</sub>,𝑝<sub>6</sub>,𝑝<sub>2</sub>,𝑝<sub>7</sub>","𝑝<sub>7</sub>,𝑝<sub>2</sub>,𝑝<sub>6</sub>,𝑝<sub>1</sub>,𝑝<sub>5</sub>,𝑝<sub>3</sub>,𝑝<sub>4</sub>"],correct_answers:[1,4]},{questionNumber:"38.",question:"În Aula Magna a Universității Titu Maiorescu din București se va organiza un festival de teatru care va dura o singură zi. Fiecare regizor a transmis organizatorului festivalului intervalul de timp în care se poate desfășura spectacolul său. Organizatorul festivalului dorește să programeze un număr maxim de spectacole. Știind că spectacolele nu se pot suprapune și că între oricare două spectacole consecutive nu există nicio pauză, stabiliți care dintre strategiile de planificare de tip Greedy de mai jos pot fi folosite de către organizatorul festivalului pentru a planifica un număr maxim de spectacole în Aula Magna în ziua respectivă:",answers:["se sortează spectacolele în ordinea crescătoare a orelor la care se termină, se programează primul spectacol și apoi se consideră, pe rând, restul spectacolelor, un spectacol fiind programat doar dacă începe după ce se termină spectacolul programat anterior;","se sortează spectacolele în ordinea crescătoare a duratei lor, se programează primul spectacol și apoi se consideră, pe rând, restul spectacolelor, un spectacol fiind programat doar dacă începe după ce se termină spectacolul programat anterior;","se sortează spectacolele în ordinea crescătoare a orelor la care încep, se programează primul spectacol și apoi se consideră, pe rând, restul spectacolelor, un spectacol fiind programat doar dacă începe după ce se termină spectacolul programat anterior;","se sortează spectacolele în ordinea descrescătoare a orelor la care se termină, se programează primul spectacol și apoi se consideră, pe rând, restul spectacolelor, un spectacol fiind programat doar dacă începe după ce se termină spectacolul programat anterior."],correct_answers:[1]},{questionNumber:"39.",question:"În Aula Magna a Universității Titu Maiorescu din București se va organiza un festival de teatru care va dura o singură zi. Fiecare regizor a transmis organizatorului festivalului intervalul de timp [ℎℎ1:𝑚𝑚1,ℎℎ2:𝑚𝑚2] în care se poate desfășura spectacolul său. Știind că spectacolele nu se pot suprapune și între oricare două spectacole consecutive nu există nicio pauză, organizatorul festivalului s-a gândit să folosească o strategie de planificare de tip Greedy pentru a planifica un număr maxim de spectacole în cadrul festivalului. Considerând că 7 regizori au trimis intervalele de desfăşurare ale spectacolelor lor 𝑠<sub>1</sub>=[08:00,10:30],𝑠<sub>2</sub>=[08:30,09:00],𝑠<sub>3</sub>=[16:30,18:00],𝑠<sub>4</sub>=[10:30,10:45],𝑠<sub>5</sub>=[11:00,17:00],𝑠<sub>6</sub>=[11:30,13:00],𝑠<sub>7</sub>=[15:15,16:45], precizați care dintre variantele de mai jos reprezintă o planificare corectă, cu un număr maxim de spectacole:",answers:["S1, S2, S4, S5, S6","S2, S4, S6, S7","S2, S4, S6, S3","S1, S5"],correct_answers:[2,3]},{questionNumber:"40.",question:"În Aula Magna a Universității Titu Maiorescu din București se va organiza un festival de teatru care va dura o singură zi. Fiecare regizor a transmis organizatorului festivalului intervalul de timp [ℎℎ<sub>1</sub>:𝑚𝑚<sub>1</sub>,ℎℎ<sub>2</sub>:𝑚𝑚<sub>2</sub>] în care se poate desfășura spectacolul său. Știind că spectacolele nu se pot suprapune și între oricare două spectacole consecutive nu există nicio pauză, organizatorul festivalului s-a gândit să folosească o strategie de planificare de tip Greedy pentru a planifica un număr maxim de spectacole în cadrul festivalului. Considerând că 7 regizori au trimis intervalele de desfăşurare ale spectacolelor lor 𝑠<sub>1</sub>=[08:00,10:30],𝑠<sub>2</sub>=[08:30,11:00],𝑠<sub>3</sub>=[16:30,18:00],𝑠<sub>4</sub>=[10:30,10:45],𝑠<sub>5</sub>=[11:00,12:00],𝑠<sub>6</sub>=[12:30,16:00],𝑠<sub>7</sub>=[17:15,18:45], precizați care dintre variantele de mai jos reprezintă o planificare corectă, cu un număr maxim de spectacole:",answers:["S1, S5, S6, S3","S2, S4, S5, S6, S7","S1, S4, S5, S6, S3","S1, S4, S5, S6, S7"],correct_answers:[3,4]},{questionNumber:"41.",question:`Se consideră un triunghi de numere întregi format din 𝑛 linii, astfel: prima linie conține un număr, a doua linie conține două numere,. . ., ultima linie conține 𝑛 numere. În acest triunghi se pot forma sume de numere întregi în felul următor:
➢ se selectează numărul aflat pe prima linie;
➢ la fiecare pas se selectează fie numărul aflat pe următoarea linie sub ultimul număr selectat, fie numărul aflat pe următoarea linie și o coloană la dreapta față de ultimul număr selectat, până când se ajunge pe ultima linie a triunghiului de numere.

Un algoritm cu complexitate minimă care determină cea mai mare sumă ce se poate obține respectând regulile de mai sus folosește metoda:`,answers:["Greedy;","backtracking;","programării dinamice;","Divide et Impera."],correct_answers:[3]},{questionNumber:"42.",question:`Se consideră următorul triunghi de numere întregi format din 𝑛=4 linii:
10
12  −20
30   50 180
21   14  20  16
În acest triunghi se pot forma sume de numere întregi în felul următor:
➢ se selectează numărul aflat pe prima linie;
➢ la fiecare pas se selectează fie numărul aflat pe următoarea linie sub ultimul număr selectat, fie numărul aflat pe următoarea linie și o coloană la dreapta față de ultimul număr selectat, până când se ajunge pe ultima linie a triunghiului de numere.
Care este suma maximă ce poate fi obținută în triunghiul dat, respectând condițiile precizate mai sus?`,answers:["190","73","92","302"],correct_answers:[1]},{questionNumber:"43.",question:`Se consideră următorul triunghi de numere întregi format din 𝑛=4 linii:

100
−12  −20
130   200   118
210   114   320   160
În acest triunghi se pot forma sume de numere întregi în felul următor:

➢ se selectează numărul aflat pe prima linie;
➢ la fiecare pas se selectează fie numărul aflat pe următoarea linie sub ultimul număr selectat, fie numărul aflat pe următoarea linie și o coloană la dreapta față de ultimul număr selectat, până când se ajunge pe ultima linie a triunghiului de numere.

Care este suma maximă ce poate fi obținută în triunghiul dat, respectând condițiile precizate mai sus?`,answers:["518","402","428","608"],correct_answers:[4]},{questionNumber:"44.",question:"Fie 𝑆 o sumă de bani şi 𝑣<sub>1</sub>,𝑣<sub>2</sub>,…,𝑣<sub>𝑛</sub> valorile a n tipuri de monede (se presupune că din fiecare tip de monedă avem la dispoziţie un număr nelimitat de monede). Un algoritm optim care să determine numărul minim de monede cu care poate fi plătită suma 𝑆, folosind monede de tipurile date, folosește metoda:",answers:["Greedy;","backtracking;","programării dinamice;","Divide et Impera."],correct_answers:[3]},{questionNumber:"45.",question:"Precizați câte subșiruri strict crescătoare de lungime maximă conține tabloul 𝑣=(12,18,17,11,10,16,17,26):",answers:["1","2","3","4"],correct_answers:[3]},{questionNumber:"46.",question:"Precizați câte subșiruri strict crescătoare de lungime maximă conține tabloul 𝑣=(21,18,13,19,21,16,16,17,26):",answers:["1","2","3","4"],correct_answers:[2]},{questionNumber:"47.",question:"Indicați lungimea maximă a unui subșir strict crescător din tabloul 𝑣=(12,18,17,11,10,26,17,26,19,28):",answers:["2","4","3","5"],correct_answers:[2]},{questionNumber:"48.",question:"Indicați lungimea maximă a unui subșir strict crescător din tabloul 𝑣=(18,14,17,4,8,15,12,19,16,22):",answers:["2","4","3","5"],correct_answers:[4]},{questionNumber:"49.",question:"Având la dispoziție un număr nelimitat de monede cu valorile 5 RON, 4 RON, 3 RON și 1 RON, precizați numărul minim de monede cu care poate fi plătită suma de 17 RON:",answers:["4","5","3","6"],correct_answers:[1]},{questionNumber:"50.",question:"Având la dispoziție un număr nelimitat de monede cu valorile 7 RON, 6 RON, 3 RON și 2 RON, precizați numărul minim de monede cu care poate fi plătită suma de 19 RON:",answers:["6","3","4","5"],correct_answers:[3]}],qr=[{questionNumber:"1.",question:"Primul fişier imagine încărcat într-o pagină html poate fi schimbat cu un alt fişier daca se utilizează:",answers:["window.images[1].src=”image.jpg”;","document.status.images[1].src=”image.jpg”;","document.images[1].src=”poza.jpg”;","document.images[0].src=”poza.jpg”;"],correct_answers:[4]},{questionNumber:"2.",question:"Imaginea de fundal a unei pagini Web nu se stabileşte folosind:",answers:["&lt;img background=”p.gif”>;","&lt;body background-img=”image/imagine.gif”>;","&lt;body bgcolor=”p.gif”>;","&lt;body background-image=”image/imagine.gif”>;"],correct_answers:[1,2,3,4]},{questionNumber:"3.",question:"Dimensionarea unei imagini se realizează folosind urmatoarele atribute ale tag-ului &lt;img>?",answers:["width si align;","align si height;","width si height;","width si size;"],correct_answers:[3]},{questionNumber:"4.",question:"Care din următoarele afirmaţii sunt adevărate?",answers:["Atributul href se poate asocia etichetelor a şi img;","Atributul cellpadding aparţine marcajului &lt;table> si setează distanţa dintre celule;","&amp;nbsp; - introduce un spaţiu;","Atributul ACTION al marcajului FORM stabileşte adresa fişierului la care sunt trimise datele dintr-un formular;"],correct_answers:[2,3,4]},{questionNumber:"5.",question:"Care este rolul tagului &lt;keygen> din HTML 5?",answers:["marchează text evidenţiat;","marchează un grup de elemente care au legatura unul cu celălalt;","marchează un cod generat automat într-un formular;","marchează diferite tipuri de rezultate ale unui script oarecare ;"],correct_answers:[3]},{questionNumber:"6.",question:"Care sunt atribute pentru tagul input din HTML 5?",answers:["accept;","autocomplete;","day_time ;","form_action;"],correct_answers:[1,2]},{questionNumber:"7.",question:"Atributul name este utilizat pentru tagurile?",answers:["link, textarea, select;","form, input, map, a, img;","input, area, a, iframe;","radio, checkbox, frame;"],correct_answers:[2,4]},{questionNumber:"8.",question:"Care din următoarele taguri sunt definite correct?",answers:["&lt;link rel=”stylesheet” type=”text/css” href=”exemplu.css” /> ;","&lt;?xml-stylesheet href=”exemplu.css” type=”text/css”?>;","&lt;area shape=”polygon” coords=‘‘50,350,150,350,100,250,300” ”href=test.html” >;","&lt;area shape=”circle” coords=”100,100,30” href=”cv.html” target=”_blank”>;"],correct_answers:[1,2,4]},{questionNumber:"9.",question:"Transmiterea datelor dintr-un formular către un fişier de pe server, se realizează?",answers:["&lt;input type=”reset” value=”trimite”>;","&lt;input type=”button” value=”trimite”> ;","&lt;input type=”submit” value=”apasa”> ;","&lt;input name=”submit” value=”transmite”>;"],correct_answers:[3]},{questionNumber:"10.",question:"Pentru a trimite valoarea „html” cu ajutorul unei casete de validare checkbox se foloseşte:",answers:["&lt;input type=”checkbox” name=”c” />html ;","&lt;input type=”checkbox” value=”html” name=”c” checked />trimite ;","&lt;input value=”html”/>html ;","&lt;input type=”checkbox” value=”html” name=”value_html” checked />html;"],correct_answers:[2,4]},{questionNumber:"11.",question:"Care din următoarele afirmaţii sunt adevărate?",answers:["indexOf() returnează pozitia primei aparitii a unui subsir intr-un sir sau valoarea -1 dacă şirul căutat nu există;","strike() returnează un şir taiat cu două linii orizontale;","fromCharCode() este metoda care transformă valoarea unicode în caracter;","toCaselower() – converteşte un şir în litere mici;"],correct_answers:[1,3]},{questionNumber:"12.",question:"În JavaScript obiectul Date se creează?",answers:["data = new Array();","data = new Object();","data = new Date();","Date= new data();"],correct_answers:[3]},{questionNumber:"13.",question:"În Javascript numărul zilei din lună se extrage apelând metoda?",answers:["getDate()","getDay()","getMonth()","setDay()"],correct_answers:[1]},{questionNumber:"14.",question:"Metodele şi proprietăţile obiectului String sunt:",answers:["substr()","replace()","length","charCodeAt()"],correct_answers:[1,2,3,4]},{questionNumber:"15.",question:"Alegeţi evenimentele Javascript?",answers:["OnKeyDown","OnErrorFocus","onLoad","onUnload"],correct_answers:[1,3,4]},{questionNumber:"16.",question:"Care sunt metodele şi proprietăţile pentru obiectul window din Javascript?",answers:["open()","status","alert()","write()"],correct_answers:[1,2,3]},{questionNumber:"17.",question:"O clasă de stiluri se apelează prin?",answers:["&lt;div id=”nume_clasa”>","&lt;div class=”nume_clasa”>","&lt;DIV STYLE=”nume-clasa”>","clasa_stil {........}"],correct_answers:[2]},{questionNumber:"18.",question:"Cum se defineşte un stil care afişează textul de mărime 10pt şi culoare albă?",answers:[".stil {font-size:10pt; color: white;}","# stil {text-size:10px; color: green;}","# stil {font-size:10pt; color: #FFFFFF;}",". stil {font-size:10px; color: #000000;}"],correct_answers:[1,3]},{questionNumber:"19.",question:"Care afirmaţii sunt adevărate?",answers:["Un script JavaScript poate fi introdus în interiorul marcajelor &lt;script>&lt;/script>","Functiile JavaScript definite de utilizator pot fi si într-un fişier cu extensia .js",`O clasa de stiluri este definita corect astfel:
 #clasa { color:#ab1121;background-image:url(”poza.gif”);text-decoration:overline;}`,"&lt;link rel=”stylesheet” type=”text/css” href=”exemplu.css” />"],correct_answers:[1,2,4]},{questionNumber:"20.",question:'Care este rezultatul urmatoarei secvenţe din JavaScript "1" + 2 + 4 ?',answers:["124",'"124"','"1" si 24','"1" si 6'],correct_answers:[2]},{questionNumber:"21.",question:"Tipurile de date utilizate în PHP sunt?",answers:["String","Array","Null","Data"],correct_answers:[1,2,3]},{questionNumber:"22.",question:"Un document XML:",answers:["este o colecţie de entităţi;","trebuie să fie construit corect;","nu este colecţie de date;","nu este sensibil la tipul literelor;"],correct_answers:[1,2]},{questionNumber:"23.",question:"DTD-ul conţine:",answers:["numele efectiv al elementelor;","regulile utilizate pentru a determina care elemente se pot imbrica în alte elemente;","alte informaţii importante pentru prelucrarea şi redarea documentului;","codificările de limbă utilizate în document;"],correct_answers:[1,2,3,4]},{questionNumber:"24.",question:"O schema XML se generează dintr-o schemă relaţională astfel:",answers:["pentru fiecare tabelă se generează un tip de element;","pentru fiecare coloană se adaugă la model un atribut la tipul elementului sau un element descendent ce conţine numai PCDATA;","pentru fiecare element se ataseaza o baza de date;","Nu se pot defini scheme XML decat dacă se utilizează şi PHP-ul;"],correct_answers:[1,2]},{questionNumber:"25.",question:"Ce rol are argumnetul secure (sigur) pentru funcţia setcookie() din PHP?",answers:["indică dacă o variabilă cookie trebuie trimisă prin intermediul unei conexiuni HTTP;","indică dacă o variabilă cookie trebuie trimisă prin intermediul unei conexiuni sigure (HTTPS);","permite identificarea numelui de domeniu asociat, daca conexiunea nu este sigura;","variabila cookie este disponibilă indiferent de tipul de conexiune utilizată;"],correct_answers:[2]},{questionNumber:"26.",question:"Care din următoarele afirmaţii sunt adevărate?",answers:["$GLOBALS cuprinde referinţe spre orice variabilă globală care este accesibilă scriptului PHP curent;","$_SERVER conţine o serie de variabile ale căror valori sunt setate de server-ul web.","$_COOKIE conţine valorile variabilelor care cuprind informaţii referitoare la cookie-urile păstrate pe calculatorul utilizatorului care accesează pagina web.","$_SESSION cuprinde variabile disponibile prin intermediul oricărui tip de mecanism cu ajutorul căruia utilizatorul poate introduce date."],correct_answers:[1,2,3]},{questionNumber:"27.",question:`Ca va afisa scriptul PHP?
      &lt;?php
      $i = 5.7; echo $i.”&lt;br />”;
      $i = sprintf("%05.2f", $i);
      echo '&lt;br />'. $i;
      ?>`,answers:["5.7;05.70",`5.7
05.70`,`5.70
05.7`,"5.7 05.7"],correct_answers:[2]},{questionNumber:"28.",question:"Care funcţii PHP acţionează asupra fişierelor?",answers:["fgetc ;","is_file ;","filesize;","is_close;"],correct_answers:[1,2,3]},{questionNumber:"29.",question:"Menţionaţi metodele care nu fac parte din obiectul String pentru JavaScript?",answers:["toLowerCase();","setTimeout();","focus();","strike();"],correct_answers:[2,3]},{questionNumber:"30.",question:"Cum se defineşte o constanta în PHP?",answers:["prin directiva define();","cu ajutorul cuvantului cheie const;","cu ajutorul cuvintelor cheie var const;","cu ajutorul cuvantului static;"],correct_answers:[1]},{questionNumber:"31.",question:"Ce rol are functia include() în PHP?",answers:["include în scriptul curent conţinutul unui fişier html o singura data;","include în scriptul curent conţinutul unui fişier html cu verificarea faptului ca acesta a fost introdus o singura dată ;","permite includerea fişierului html specificat, de mai multe ori;","este echivalenta cu functia require();"],correct_answers:[3]},{questionNumber:"32.",question:"Care este sintaxa unei reguli CSS?",answers:["selector {proprietate : valoare;}","selector(proprietate, valoare)","selector.proprietate = valoare;","selector(proprietate) = valoare;"],correct_answers:[1]},{questionNumber:"33.",question:`Ce se afiseaza intr-un browser care suporta SVG, dupa incarcarea codului?
    &lt;!DOCTYPE html>
    &lt;html>
    &lt;body>
    &lt;svg width="400" height="180">
       &lt;rect x="50" y="50" width="100" height="100" rx="10" ry="10"
       style="fill:red;opacity:1" />
    Sorry, your browser does not support inline SVG.
    &lt;/svg>
    &lt;/body>&lt;/html>`,answers:["un dreptunghi cu dimensiunea laturilor 50 px si colturi rotunjite;","un dreptunghi cu laturile 100 px si colturi nerotunjite;","un patrat de culoare rosie cu latura 100 px si colturi rotunjite;","un dreptunghi cu dimensiunea laturilor 100 px, cu laturile de culoare rosie"],correct_answers:[3]},{questionNumber:"34.",question:"Care este secventa corecta pentru a ne conecta la o bază de date MySQL cu functiile PHP?",answers:["$mysqli = mysqli_connect($host, $user, $pass, $database_stud);",`$mysqli = new mysqli($host, $user, $pass, $database_stud);
if ($mysqli->connect_errno)
{echo "Failed to connect to MySQL: " . $mysqli->connect_error;}`,"mysqli-connect($host, $user, $pass, $database_stud);",'connect-mysqli ("localhost");'],correct_answers:[1,2]},{questionNumber:"35.",question:'Care este sintaxa corectă Javascript pentru a scrie "Hello World"?',answers:['document.write("Hello World ");','alert.write("Hello World");','window.write("hello world");','document.write(a=” Hello World ");'],correct_answers:[1,4]},{questionNumber:"36.",question:'Cum se scrie "Hello World" într-o fereastra alert?',answers:['alertBox="Hello World";','alert=("Hello World");','msgBox("Hello World");','alert("Hello World");'],correct_answers:[4]},{questionNumber:"37.",question:'Cum se scrie "Hello World" în PHP?',answers:['Document.Write("Hello World");','document.write("Hello World");','echo "Hello World";','$mes="Hello World";echo $mes;'],correct_answers:[3,4]},{questionNumber:"38.",question:"Variabilele în PHP încep cu:",answers:["$","&","!","?php"],correct_answers:[1]},{questionNumber:"39.",question:"Care este modul corect de a adăuga 1 la varibila $numara?",answers:["$numara =+1;","++numara;","$numara++;","numara++;"],correct_answers:[3]},{questionNumber:"40.",question:"Alegeţi varianta corectă pentru definirea unei funcţii Javascript:",answers:["function suma nr() {….}","function suma_nr(){….}","suma_nr();","function suma_nr { ... };"],correct_answers:[2]},{questionNumber:"41.",question:"Care din urmatoarele afirmaţii este adevarată pentru sintaxa marcajului XML?",answers:["Pentru delimitatoarele sectiune CDATA se foloseste &lt;![CDATA[ informatii cdata]]>","Declaraţia XML se realizează cu &lt;?Idprocesor date?>","Eticheta pentru definirea unui element vid este...&lt;/numeElement>","Referinţa unui caracter se realizează &lt;!—referinta - ->"],correct_answers:[1]},{questionNumber:"42.",question:"Care afirmatii sunt adevarate?",answers:["XML-ul nu este un limbaj de programare;","Sunt compilatoare XML care sa citeasca un document XML","XML nu este un protocol pentru transmiterea datelor in retea;","Un document XML poate fi citit de orice parser."],correct_answers:[1,3,4]},{questionNumber:"43.",question:"Conţinutul unui câmp de text dintr-un formular poate fi accesat?",answers:["nume_formular.nume_camp.value","nume_camp.nume_forumar.value","value.nume_formular.nume_camp","value.nume_camp.nume_forumar"],correct_answers:[1]},{questionNumber:"44.",question:"Pentru a introduce un fişier RSS în paginile unui site trebuie specificat în partea de HEAD a documentului web o linie de forma:",answers:['&lt;link rel="alternate" type="application/rss+xml" title="RSS" href=http://cale...>',"&lt;link rel=”” type=”text/rss” href=”exemplu.css” />","&lt;?xml-stylesheet href=”exemplu.css” type=”text/css”? />",'&lt;link rel=" stylesheet " type="application/rss+xml" title="RSS" href=http://cale.. .>'],correct_answers:[1]},{questionNumber:"45.",question:"Un fişier “script.js” este folosit într-un document html astfel:",answers:["&lt;script type=”text/javascript” src=”script.js”>&lt;/script>","&lt;script href=”text/javascript” src=”script.js”>&lt;/script>","&lt;script type=”text/javascript” link=”script.js”>&lt;/script>","&lt; script rel=”text/javascript” src=”script.js”>&lt;/script>"],correct_answers:[1]},{questionNumber:"46.",question:"Care sunt atribute etichetei &lt;textarea>?",answers:["cols - specifica numărul de caractere afişate într-o linie;","rows - specifica numărul de linii afişate simultan;","name- permite ataşarea unui nume câmpului de editare multilinie;","text-wrap - determină comportamentul câmpului de editare faţă de sfârşitul de linie."],correct_answers:[1,2,3]},{questionNumber:"47.",question:"Care afirmaţii sunt adevarate cu privire la urmatoarele handlerele de evenimente?",answers:["OnAbort – permite oprirea încarcării unei imagini","OnFocus - elementul primeşte focus","OnLoad – realizează încărcarea paginii în navigator","OnBlur - elementul primeşte focus"],correct_answers:[1,2,3]},{questionNumber:"48.",question:"Ce rol are functia explode($separator, $şir) în PHP?",answers:["preia valorile din variabila $sir în care aceatea sunt delimitate prin variabila $separator şi le plasează într-un tablou/vector;","preia valorile dintr-un vector şi le reuneşte într-un şir;","afiseaza de cate ori apare variabila $separator in variabila $sir;","Concateneaza variabilele $separator si $şir;"],correct_answers:[1]},{questionNumber:"49.",question:`Care este rolul butonului “submit” pentru codul de mai jos?
&lt;form action="test.php" method="POST">
Introduceti numele : &lt;input type="text" name="n">&lt;br>
&lt;input type="submit" value="Trimite">
&lt;/form>`,answers:["Transmite la server variabila n din formular;","Transmite la fisierul test.php de pe server continutul variabilei n;",`Transmite cu metoda POST, la fisierul test.php de pe server conţinutul variabilei
n şi readuce formularul la starea initiala;`,`Transmite cu metoda implicita POST, la fisierul test.php de pe server conţinutul
variabilei n şi readuce formularul la starea initiala;`],correct_answers:[3]},{questionNumber:"50.",question:"Proprietatea checked ataşat unui element radio dintr-un formular are ca efect?",answers:["Bifarea implicită a respectivului element radio;","Nu există acest atribut;","Trebuie ataşat obligatoriu la toate elementele radio din acelaşi grup;","Se foloseşte doar pentru elemente de tip checkbox;"],correct_answers:[1]}],Ce={algoritmi_structuri_date:or,baze_de_date:cr,comert_electronic:lr,cloud_computing:dr,criptografie:mr,programare_in_c:pr,programare_in_java:br,programare_procedurala:fr,retele_de_calculatoare:gr,sgbd:wr,sisteme_de_operare:vr,tehnici_avansate_programare:Nr,tehnologii_web:qr},ae=[];Object.entries(Ce).map(([,n])=>{n.forEach(e=>ae.push(e))});const we=n=>n==="random"?ae:Ce[n]?Ce[n]:null,Se=be(ae.length),_r=be(1),he=be("random");ur(ae);const ee=be([]),ie=be(0);function Re(n,e,r){const a=n.slice();return a[14]=e[r],a[16]=r,a}function Pe(n){let e,r,a,t,s,i=!1,c,u,l,d=n[14]+"",p,m,v,w,z;return v=Ye(n[12][0]),{c(){e=C("div"),r=C("label"),a=C("input"),c=O(),u=C("span"),l=C("pre"),p=O(),this.h()},l(q){e=S(q,"DIV",{class:!0});var o=h(e);r=S(o,"LABEL",{class:!0});var b=h(r);a=S(b,"INPUT",{type:!0,name:!0,class:!0}),c=I(b),u=S(b,"SPAN",{class:!0});var _=h(u);l=S(_,"PRE",{class:!0});var g=h(l);g.forEach(N),_.forEach(N),b.forEach(N),p=I(o),o.forEach(N),this.h()},h(){E(a,"type","checkbox"),E(a,"name",t="answers"+n[2]),a.__value=s=n[14],a.value=a.__value,a.disabled=n[1],E(a,"class","svelte-15l098o"),E(l,"class","svelte-15l098o"),E(u,"class","svelte-15l098o"),E(r,"class","svelte-15l098o"),E(e,"class",m="checkbox "+n[5][n[16]]+" svelte-15l098o"),v.p(a)},m(q,o){R(q,e,o),f(e,r),f(r,a),a.checked=~(n[4]||[]).indexOf(a.__value),f(r,c),f(r,u),f(u,l),l.innerHTML=d,f(e,p),w||(z=U(a,"change",n[11]),w=!0)},p(q,o){o&4&&t!==(t="answers"+q[2])&&E(a,"name",t),o&8&&s!==(s=q[14])&&(a.__value=s,a.value=a.__value,i=!0),o&2&&(a.disabled=q[1]),(i||o&24)&&(a.checked=~(q[4]||[]).indexOf(a.__value)),o&8&&d!==(d=q[14]+"")&&(l.innerHTML=d),o&32&&m!==(m="checkbox "+q[5][q[16]]+" svelte-15l098o")&&E(e,"class",m)},d(q){q&&N(e),v.r(),w=!1,z()}}}function Er(n){let e,r,a,t,s,i,c=n[2]+1+"",u,l,d,p,m,v,w,z,q=n[3],o=[];for(let b=0;b<q.length;b+=1)o[b]=Pe(Re(n,q,b));return{c(){e=C("div"),r=C("button"),a=x("Check answers"),t=O(),s=C("div"),i=C("p"),u=x(c),l=x("."),d=O(),p=C("pre"),m=O(),v=C("div");for(let b=0;b<o.length;b+=1)o[b].c();this.h()},l(b){e=S(b,"DIV",{class:!0});var _=h(e);r=S(_,"BUTTON",{});var g=h(r);a=D(g,"Check answers"),g.forEach(N),t=I(_),s=S(_,"DIV",{class:!0});var P=h(s);i=S(P,"P",{class:!0});var B=h(i);u=D(B,c),l=D(B,"."),B.forEach(N),d=I(P),p=S(P,"PRE",{class:!0});var G=h(p);G.forEach(N),P.forEach(N),m=I(_),v=S(_,"DIV",{class:!0});var J=h(v);for(let T=0;T<o.length;T+=1)o[T].l(J);J.forEach(N),_.forEach(N),this.h()},h(){E(i,"class","q-index svelte-15l098o"),E(p,"class","svelte-15l098o"),E(s,"class","question-title svelte-15l098o"),E(v,"class","answer-wrapper svelte-15l098o"),E(e,"class","question-wrapper svelte-15l098o")},m(b,_){R(b,e,_),f(e,r),f(r,a),f(e,t),f(e,s),f(s,i),f(i,u),f(i,l),f(s,d),f(s,p),p.innerHTML=n[7],f(e,m),f(e,v);for(let g=0;g<o.length;g+=1)o[g]&&o[g].m(v,null);w||(z=U(r,"click",K(n[10])),w=!0)},p(b,[_]){if(_&4&&c!==(c=b[2]+1+"")&&Y(u,c),_&62){q=b[3];let g;for(g=0;g<q.length;g+=1){const P=Re(b,q,g);o[g]?o[g].p(P,_):(o[g]=Pe(P),o[g].c(),o[g].m(v,null))}for(;g<o.length;g+=1)o[g].d(1);o.length=q.length}},i:V,o:V,d(b){b&&N(e),me(o,b),w=!1,z()}}}function zr(n,e,r){let a;Q(n,ee,o=>r(13,a=o));let{correct_answers:t=[]}=e,{showAnswers:s=!1}=e,{generateAnswered:i=!1}=e,{index:c=0}=e,{question:u="Ai uitat sa pui titlul intrebarii"}=e,{answers:l=["lipsa rasp 1","lipsa rasp 2","lipsa rasp 3","lipsa rasp 4"]}=e;const d=u;let p=[],m=[];re(ee,a[c]={userSelectedAnswers:p},a),i&&(l.forEach((o,b)=>{t.includes(o)&&(p.push(b.toString()),r(5,m[b]="correct",m))}),m=[...m]);let v=!1;const w=[[]],z=()=>{console.log(t,p,l),l.forEach((o,b)=>{const _=p.includes(o),g=t.includes(o);(g&&!_||!g&&_)&&r(6,v=!0),g&&r(5,m[b]="correct",m),_&&!g&&r(5,m[b]="wrong",m)}),r(5,m=[...m]),v&&ie.update(o=>o+1)};function q(){p=ir(w[0],this.__value,this.checked),r(4,p)}return n.$$set=o=>{"correct_answers"in o&&r(0,t=o.correct_answers),"showAnswers"in o&&r(1,s=o.showAnswers),"generateAnswered"in o&&r(8,i=o.generateAnswered),"index"in o&&r(2,c=o.index),"question"in o&&r(9,u=o.question),"answers"in o&&r(3,l=o.answers)},n.$$.update=()=>{n.$$.dirty&127&&s&&(re(ee,a[c]={userSelectedAnswers:p},a),l.forEach((o,b)=>{const _=p.includes(o),g=t.includes(o);(g&&!_||!g&&_)&&r(6,v=!0),g&&r(5,m[b]="correct",m),_&&!g&&r(5,m[b]="wrong",m)}),r(5,m=[...m]),v&&ie.update(o=>o+1))},[t,s,c,l,p,m,v,d,i,u,z,q,w]}class rr extends oe{constructor(e){super(),ce(this,e,zr,Er,le,{correct_answers:0,showAnswers:1,generateAnswered:8,index:2,question:9,answers:3})}}function Le(n,e,r){const a=n.slice();return a[14]=e[r],a[16]=r,a}function je(n){let e,r,a,t,s,i=!1,c,u,l,d=n[14]+"",p,m,v,w,z;return v=Ye(n[12][0]),{c(){e=C("div"),r=C("label"),a=C("input"),c=O(),u=C("span"),l=C("pre"),p=O(),this.h()},l(q){e=S(q,"DIV",{class:!0});var o=h(e);r=S(o,"LABEL",{class:!0});var b=h(r);a=S(b,"INPUT",{type:!0,name:!0,class:!0}),c=I(b),u=S(b,"SPAN",{class:!0});var _=h(u);l=S(_,"PRE",{class:!0});var g=h(l);g.forEach(N),_.forEach(N),b.forEach(N),p=I(o),o.forEach(N),this.h()},h(){E(a,"type","radio"),E(a,"name",t="answers"+n[2]),a.__value=s=n[14],a.value=a.__value,a.disabled=n[1],E(a,"class","svelte-10vqvex"),E(l,"class","svelte-10vqvex"),E(u,"class","svelte-10vqvex"),E(r,"class","svelte-10vqvex"),E(e,"class",m="radio "+n[5][n[16]]+" svelte-10vqvex"),v.p(a)},m(q,o){R(q,e,o),f(e,r),f(r,a),a.checked=a.__value===n[4],f(r,c),f(r,u),f(u,l),l.innerHTML=d,f(e,p),w||(z=U(a,"change",n[11]),w=!0)},p(q,o){o&4&&t!==(t="answers"+q[2])&&E(a,"name",t),o&8&&s!==(s=q[14])&&(a.__value=s,a.value=a.__value,i=!0),o&2&&(a.disabled=q[1]),(i||o&24)&&(a.checked=a.__value===q[4]),o&8&&d!==(d=q[14]+"")&&(l.innerHTML=d),o&32&&m!==(m="radio "+q[5][q[16]]+" svelte-10vqvex")&&E(e,"class",m)},d(q){q&&N(e),v.r(),w=!1,z()}}}function Cr(n){let e,r,a,t,s,i,c=n[2]+1+"",u,l,d,p,m,v,w,z,q=n[3],o=[];for(let b=0;b<q.length;b+=1)o[b]=je(Le(n,q,b));return{c(){e=C("div"),r=C("button"),a=x("Check answers"),t=O(),s=C("div"),i=C("p"),u=x(c),l=x("."),d=O(),p=C("pre"),m=O(),v=C("div");for(let b=0;b<o.length;b+=1)o[b].c();this.h()},l(b){e=S(b,"DIV",{class:!0});var _=h(e);r=S(_,"BUTTON",{});var g=h(r);a=D(g,"Check answers"),g.forEach(N),t=I(_),s=S(_,"DIV",{class:!0});var P=h(s);i=S(P,"P",{class:!0});var B=h(i);u=D(B,c),l=D(B,"."),B.forEach(N),d=I(P),p=S(P,"PRE",{class:!0});var G=h(p);G.forEach(N),P.forEach(N),m=I(_),v=S(_,"DIV",{class:!0});var J=h(v);for(let T=0;T<o.length;T+=1)o[T].l(J);J.forEach(N),_.forEach(N),this.h()},h(){E(i,"class","q-index svelte-10vqvex"),E(p,"class","svelte-10vqvex"),E(s,"class","question-title svelte-10vqvex"),E(v,"class","answer-wrapper svelte-10vqvex"),E(e,"class","question-wrapper svelte-10vqvex")},m(b,_){R(b,e,_),f(e,r),f(r,a),f(e,t),f(e,s),f(s,i),f(i,u),f(i,l),f(s,d),f(s,p),p.innerHTML=n[7],f(e,m),f(e,v);for(let g=0;g<o.length;g+=1)o[g]&&o[g].m(v,null);w||(z=U(r,"click",K(n[10])),w=!0)},p(b,[_]){if(_&4&&c!==(c=b[2]+1+"")&&Y(u,c),_&62){q=b[3];let g;for(g=0;g<q.length;g+=1){const P=Le(b,q,g);o[g]?o[g].p(P,_):(o[g]=je(P),o[g].c(),o[g].m(v,null))}for(;g<o.length;g+=1)o[g].d(1);o.length=q.length}},i:V,o:V,d(b){b&&N(e),me(o,b),w=!1,z()}}}function Sr(n,e,r){let a;Q(n,ee,o=>r(13,a=o));let{correct_answers:t=[]}=e,{showAnswers:s=!1}=e,{generateAnswered:i=!1}=e,{index:c=0}=e,{question:u="Ai uitat sa pui titlul intrebarii"}=e,{answers:l=["lipsa rasp 1","lipsa rasp 2","lipsa rasp 3","lipsa rasp 4"]}=e;const d=u;let p="",m=[];re(ee,a[c]={userSelectedAnswers:p},a),i&&(l.forEach((o,b)=>{t.includes(o)&&(r(4,p=o),r(5,m[b]="correct",m))}),m=[...m]);let v=!1;const w=[[]],z=()=>{console.log(t,p),l.forEach((o,b)=>{const _=p===o,g=t.includes(o);(g&&!_||!g&&_)&&r(6,v=!0),g&&r(5,m[b]="correct",m),_&&!g&&r(5,m[b]="wrong",m)}),r(5,m=[...m]),v&&ie.update(o=>o+1)};function q(){p=this.__value,r(4,p)}return n.$$set=o=>{"correct_answers"in o&&r(0,t=o.correct_answers),"showAnswers"in o&&r(1,s=o.showAnswers),"generateAnswered"in o&&r(8,i=o.generateAnswered),"index"in o&&r(2,c=o.index),"question"in o&&r(9,u=o.question),"answers"in o&&r(3,l=o.answers)},n.$$.update=()=>{n.$$.dirty&127&&s&&(re(ee,a[c]={userSelectedAnswers:p},a),l.forEach((o,b)=>{const _=p===o,g=t.includes(o);(g&&!_||!g&&_)&&r(6,v=!0),g&&r(5,m[b]="correct",m),_&&!g&&r(5,m[b]="wrong",m)}),r(5,m=[...m]),v&&ie.update(o=>o+1))},[t,s,c,l,p,m,v,d,i,u,z,q,w]}class ar extends oe{constructor(e){super(),ce(this,e,Sr,Cr,le,{correct_answers:0,showAnswers:1,generateAnswered:8,index:2,question:9,answers:3})}}function Be(n,e,r){const a=n.slice();return a[6]=e[r],a}function Me(n){let e,r=n[6]+"",a,t,s;return{c(){e=C("option"),a=x(r),t=O(),this.h()},l(i){e=S(i,"OPTION",{});var c=h(e);a=D(c,r),t=I(c),c.forEach(N),this.h()},h(){e.__value=s=n[6],e.value=e.__value},m(i,c){R(i,e,c),f(e,a),f(e,t)},p(i,c){c&1&&r!==(r=i[6]+"")&&Y(a,r),c&1&&s!==(s=i[6])&&(e.__value=s,e.value=e.__value)},d(i){i&&N(e)}}}function hr(n){let e,r,a,t=n[0],s=[];for(let i=0;i<t.length;i+=1)s[i]=Me(Be(n,t,i));return{c(){e=C("select");for(let i=0;i<s.length;i+=1)s[i].c();this.h()},l(i){e=S(i,"SELECT",{class:!0});var c=h(e);for(let u=0;u<s.length;u+=1)s[u].l(c);c.forEach(N),this.h()},h(){E(e,"class","svelte-1vgry9p"),n[1]===void 0&&nr(()=>n[3].call(e))},m(i,c){R(i,e,c);for(let u=0;u<s.length;u+=1)s[u]&&s[u].m(e,null);Oe(e,n[1]),r||(a=[U(e,"change",n[3]),U(e,"change",n[2])],r=!0)},p(i,[c]){if(c&1){t=i[0];let u;for(u=0;u<t.length;u+=1){const l=Be(i,t,u);s[u]?s[u].p(l,c):(s[u]=Me(l),s[u].c(),s[u].m(e,null))}for(;u<s.length;u+=1)s[u].d(1);s.length=t.length}c&3&&Oe(e,i[1])},i:V,o:V,d(i){i&&N(e),me(s,i),r=!1,Xe(a)}}}function Ar(n,e,r){let a,t;Q(n,he,l=>r(4,a=l)),Q(n,Se,l=>r(5,t=l));let s,{courses:i=[]}=e;function c(){re(he,a=s,a),re(Se,t=we(a)?we(a).length:0,t)}function u(){s=tr(this),r(1,s),r(0,i)}return n.$$set=l=>{"courses"in l&&r(0,i=l.courses)},[i,s,c,u]}class Tr extends oe{constructor(e){super(),ce(this,e,Ar,hr,le,{courses:0})}}const xr=n=>Math.floor(Math.random()*n),Dr=(n,e)=>{let r=[];for(;r.length<n;){let a=xr(e);r.includes(a)||r.push(a)}return r},Or=n=>{for(let e=n.length-1;e>0;e--){let r=Math.floor(Math.random()*(e+1));[n[e],n[r]]=[n[r],n[e]]}return n},ze=(n,e,r=!0,a=!1)=>{let t;r?t=Dr(e,n.length):t=Array.from(Array(e).keys());let s=[];return t.forEach(i=>{let c={};c.question=n[i].question;let u=[...n[i].answers];c.correct_answers=[],n[i].correct_answers.forEach(l=>{c.correct_answers.push(n[i].answers[l-1])}),c.answers=a?Or(u):u,s.push(c)}),s};function ye(n){let e,r;return{c(){e=C("div"),r=x("Nu mai poti da submit, a expirat timpul! 🙃"),this.h()},l(a){e=S(a,"DIV",{class:!0});var t=h(e);r=D(t,"Nu mai poti da submit, a expirat timpul! 🙃"),t.forEach(N),this.h()},h(){E(e,"class","game-over-wrapper svelte-12773fi")},m(a,t){R(a,e,t),f(e,r)},d(a){a&&N(e)}}}function Ir(n){let e,r,a=Math.floor(n[1]/60)+"",t,s,i=(n[1]%60).toString().padStart(2,"0")+"",c,u,l=n[2]&&ye();return{c(){l&&l.c(),e=O(),r=C("div"),t=x(a),s=x(":"),c=x(i),this.h()},l(d){l&&l.l(d),e=I(d),r=S(d,"DIV",{class:!0,style:!0});var p=h(r);t=D(p,a),s=D(p,":"),c=D(p,i),p.forEach(N),this.h()},h(){E(r,"class","timer-wrapper svelte-12773fi"),E(r,"style",u=n[0]?"background-color: grey":"")},m(d,p){l&&l.m(d,p),R(d,e,p),R(d,r,p),f(r,t),f(r,s),f(r,c)},p(d,[p]){d[2]?l||(l=ye(),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null),p&2&&a!==(a=Math.floor(d[1]/60)+"")&&Y(t,a),p&2&&i!==(i=(d[1]%60).toString().padStart(2,"0")+"")&&Y(c,i),p&1&&u!==(u=d[0]?"background-color: grey":"")&&E(r,"style",u)},i:V,o:V,d(d){l&&l.d(d),d&&N(e),d&&N(r)}}}function Rr(n,e,r){let a=null,t=60*60,s=!1,{formSubmitted:i=!1}=e;return sr(()=>{r(3,a=setInterval(()=>{r(1,t-=1)},1e3))}),n.$$set=c=>{"formSubmitted"in c&&r(0,i=c.formSubmitted)},n.$$.update=()=>{n.$$.dirty&11&&(t===0||i)&&(clearInterval(a),r(3,a=null),i||r(2,s=!0))},[i,t,s,a]}class Pr extends oe{constructor(e){super(),ce(this,e,Rr,Ir,le,{formSubmitted:0})}}function Fe(n,e,r){const a=n.slice();return a[22]=e[r],a[24]=r,a}function Ue(n,e,r){const a=n.slice();return a[22]=e[r],a[24]=r,a}function Lr(n){let e,r,a,t,s,i,c,u;e=new Pr({props:{formSubmitted:n[2]}});let l=n[0],d=[];for(let w=0;w<l.length;w+=1)d[w]=ke(Fe(n,l,w));const p=w=>k(d[w],1,1,()=>{d[w]=null});let m=!n[2]&&He(),v=n[2]&&We(n);return{c(){ne(e.$$.fragment),r=O(),a=C("form");for(let w=0;w<d.length;w+=1)d[w].c();t=O(),m&&m.c(),s=O(),v&&v.c(),this.h()},l(w){te(e.$$.fragment,w),r=I(w),a=S(w,"FORM",{style:!0});var z=h(a);for(let q=0;q<d.length;q+=1)d[q].l(z);t=I(z),m&&m.l(z),s=I(z),v&&v.l(z),z.forEach(N),this.h()},h(){L(a,"position","relative")},m(w,z){se(e,w,z),R(w,r,z),R(w,a,z);for(let q=0;q<d.length;q+=1)d[q]&&d[q].m(a,null);f(a,t),m&&m.m(a,null),f(a,s),v&&v.m(a,null),i=!0,c||(u=U(a,"submit",K(n[10])),c=!0)},p(w,z){const q={};if(z&4&&(q.formSubmitted=w[2]),e.$set(q),z&5){l=w[0];let o;for(o=0;o<l.length;o+=1){const b=Fe(w,l,o);d[o]?(d[o].p(b,z),j(d[o],1)):(d[o]=ke(b),d[o].c(),j(d[o],1),d[o].m(a,t))}for(pe(),o=l.length;o<d.length;o+=1)p(o);de()}w[2]?m&&(m.d(1),m=null):m||(m=He(),m.c(),m.m(a,s)),w[2]?v?v.p(w,z):(v=We(w),v.c(),v.m(a,null)):v&&(v.d(1),v=null)},i(w){if(!i){j(e.$$.fragment,w);for(let z=0;z<l.length;z+=1)j(d[z]);i=!0}},o(w){k(e.$$.fragment,w),d=d.filter(Boolean);for(let z=0;z<d.length;z+=1)k(d[z]);i=!1},d(w){ue(e,w),w&&N(r),w&&N(a),me(d,w),m&&m.d(),v&&v.d(),c=!1,u()}}}function jr(n){let e,r,a,t,s,i,c,u,l,d,p,m,v,w,z,q,o,b,_,g,P,B,G,J,T,_e,Z,Ee,Ae;l=new Tr({props:{courses:n[8]}});let M=n[6]>=10&&Ve(n),y=n[6]>=20&&Je(n),F=n[6]>=40&&Ge(n);return{c(){e=C("button"),r=x("vezi totul"),a=O(),t=C("form"),s=C("div"),i=C("p"),c=x("Alege un curs anume sau random din toate:"),u=O(),ne(l.$$.fragment),d=O(),p=C("div"),m=C("p"),v=x("Alege cate intrebari vrei sa primesti, nr max pt materie "),w=x(n[6]),z=x(":"),q=O(),o=C("input"),b=O(),M&&M.c(),_=O(),y&&y.c(),g=O(),F&&F.c(),P=O(),B=C("button"),G=x("MAX"),J=O(),T=C("button"),_e=x("Start"),this.h()},l(A){e=S(A,"BUTTON",{style:!0});var H=h(e);r=D(H,"vezi totul"),H.forEach(N),a=I(A),t=S(A,"FORM",{});var $=h(t);s=S($,"DIV",{style:!0});var fe=h(s);i=S(fe,"P",{});var Te=h(i);c=D(Te,"Alege un curs anume sau random din toate:"),Te.forEach(N),u=I(fe),te(l.$$.fragment,fe),fe.forEach(N),d=I($),p=S($,"DIV",{});var W=h(p);m=S(W,"P",{});var ge=h(m);v=D(ge,"Alege cate intrebari vrei sa primesti, nr max pt materie "),w=D(ge,n[6]),z=D(ge,":"),ge.forEach(N),q=I(W),o=S(W,"INPUT",{style:!0,type:!0,min:!0,max:!0,class:!0}),b=I(W),M&&M.l(W),_=I(W),y&&y.l(W),g=I(W),F&&F.l(W),P=I(W),B=S(W,"BUTTON",{class:!0});var xe=h(B);G=D(xe,"MAX"),xe.forEach(N),W.forEach(N),J=I($),T=S($,"BUTTON",{type:!0,class:!0,style:!0});var De=h(T);_e=D(De,"Start"),De.forEach(N),$.forEach(N),this.h()},h(){L(e,"margin-bottom","20px"),L(s,"margin-bottom","20px"),L(o,"min-width","50px"),L(o,"padding","7px 20px"),L(o,"font-size","16px"),L(o,"margin-top","10px"),E(o,"type","number"),E(o,"min","1"),E(o,"max",n[6]),E(o,"class","svelte-n1kvot"),E(B,"class","input-btn svelte-n1kvot"),E(T,"type","submit"),E(T,"class","submit-btn svelte-n1kvot"),L(T,"margin-left","0")},m(A,H){R(A,e,H),f(e,r),R(A,a,H),R(A,t,H),f(t,s),f(s,i),f(i,c),f(s,u),se(l,s,null),f(t,d),f(t,p),f(p,m),f(m,v),f(m,w),f(m,z),f(p,q),f(p,o),Ie(o,n[3]),f(p,b),M&&M.m(p,null),f(p,_),y&&y.m(p,null),f(p,g),F&&F.m(p,null),f(p,P),f(p,B),f(B,G),f(t,J),f(t,T),f(T,_e),Z=!0,Ee||(Ae=[U(e,"click",n[11]),U(o,"input",n[12]),U(o,"change",n[13]),U(B,"click",K(n[17])),U(t,"submit",K(n[9]))],Ee=!0)},p(A,H){(!Z||H&64)&&Y(w,A[6]),(!Z||H&64)&&E(o,"max",A[6]),H&8&&Qe(o.value)!==A[3]&&Ie(o,A[3]),A[6]>=10?M?M.p(A,H):(M=Ve(A),M.c(),M.m(p,_)):M&&(M.d(1),M=null),A[6]>=20?y?y.p(A,H):(y=Je(A),y.c(),y.m(p,g)):y&&(y.d(1),y=null),A[6]>=40?F?F.p(A,H):(F=Ge(A),F.c(),F.m(p,P)):F&&(F.d(1),F=null)},i(A){Z||(j(l.$$.fragment,A),Z=!0)},o(A){k(l.$$.fragment,A),Z=!1},d(A){A&&N(e),A&&N(a),A&&N(t),ue(l),M&&M.d(),y&&y.d(),F&&F.d(),Ee=!1,Xe(Ae)}}}function Br(n){let e,r,a=n[5],t=[];for(let i=0;i<a.length;i+=1)t[i]=Ke(Ue(n,a,i));const s=i=>k(t[i],1,1,()=>{t[i]=null});return{c(){for(let i=0;i<t.length;i+=1)t[i].c();e=X()},l(i){for(let c=0;c<t.length;c+=1)t[c].l(i);e=X()},m(i,c){for(let u=0;u<t.length;u+=1)t[u]&&t[u].m(i,c);R(i,e,c),r=!0},p(i,c){if(c&52){a=i[5];let u;for(u=0;u<a.length;u+=1){const l=Ue(i,a,u);t[u]?(t[u].p(l,c),j(t[u],1)):(t[u]=Ke(l),t[u].c(),j(t[u],1),t[u].m(e.parentNode,e))}for(pe(),u=a.length;u<t.length;u+=1)s(u);de()}},i(i){if(!r){for(let c=0;c<a.length;c+=1)j(t[c]);r=!0}},o(i){t=t.filter(Boolean);for(let c=0;c<t.length;c+=1)k(t[c]);r=!1},d(i){me(t,i),i&&N(e)}}}function Mr(n){let e,r,a;const t=[n[22],{index:n[24]}];function s(c){n[19](c)}let i={};for(let c=0;c<t.length;c+=1)i=ve(i,t[c]);return n[2]!==void 0&&(i.showAnswers=n[2]),e=new ar({props:i}),Ze.push(()=>$e(e,"showAnswers",s)),{c(){ne(e.$$.fragment)},l(c){te(e.$$.fragment,c)},m(c,u){se(e,c,u),a=!0},p(c,u){const l=u&1?Ne(t,[qe(c[22]),t[1]]):{};!r&&u&4&&(r=!0,l.showAnswers=c[2],er(()=>r=!1)),e.$set(l)},i(c){a||(j(e.$$.fragment,c),a=!0)},o(c){k(e.$$.fragment,c),a=!1},d(c){ue(e,c)}}}function yr(n){let e,r,a;const t=[n[22],{index:n[24]}];function s(c){n[18](c)}let i={};for(let c=0;c<t.length;c+=1)i=ve(i,t[c]);return n[2]!==void 0&&(i.showAnswers=n[2]),e=new rr({props:i}),Ze.push(()=>$e(e,"showAnswers",s)),{c(){ne(e.$$.fragment)},l(c){te(e.$$.fragment,c)},m(c,u){se(e,c,u),a=!0},p(c,u){const l=u&1?Ne(t,[qe(c[22]),t[1]]):{};!r&&u&4&&(r=!0,l.showAnswers=c[2],er(()=>r=!1)),e.$set(l)},i(c){a||(j(e.$$.fragment,c),a=!0)},o(c){k(e.$$.fragment,c),a=!1},d(c){ue(e,c)}}}function ke(n){let e,r,a,t;const s=[yr,Mr],i=[];function c(u,l){return u[22].correct_answers.length>1?0:1}return e=c(n),r=i[e]=s[e](n),{c(){r.c(),a=X()},l(u){r.l(u),a=X()},m(u,l){i[e].m(u,l),R(u,a,l),t=!0},p(u,l){let d=e;e=c(u),e===d?i[e].p(u,l):(pe(),k(i[d],1,1,()=>{i[d]=null}),de(),r=i[e],r?r.p(u,l):(r=i[e]=s[e](u),r.c()),j(r,1),r.m(a.parentNode,a))},i(u){t||(j(r),t=!0)},o(u){k(r),t=!1},d(u){i[e].d(u),u&&N(a)}}}function He(n){let e,r;return{c(){e=C("button"),r=x("Submit form"),this.h()},l(a){e=S(a,"BUTTON",{type:!0,class:!0});var t=h(e);r=D(t,"Submit form"),t.forEach(N),this.h()},h(){E(e,"type","submit"),E(e,"class","submit-btn svelte-n1kvot")},m(a,t){R(a,e,t),f(e,r)},d(a){a&&N(e)}}}function We(n){let e,r,a,t,s,i=n[3]-n[7]+"",c,u,l,d,p;return{c(){e=C("button"),r=x("Genereaza inca un quizz"),a=O(),t=C("h4"),s=x("Ai nimerit "),c=x(i),u=x(" din "),l=x(n[3]),this.h()},l(m){e=S(m,"BUTTON",{type:!0,class:!0,style:!0});var v=h(e);r=D(v,"Genereaza inca un quizz"),v.forEach(N),a=I(m),t=S(m,"H4",{style:!0});var w=h(t);s=D(w,"Ai nimerit "),c=D(w,i),u=D(w," din "),l=D(w,n[3]),w.forEach(N),this.h()},h(){E(e,"type","button"),E(e,"class","submit-btn svelte-n1kvot"),L(e,"position","sticky"),L(e,"bottom","20px"),L(t,"position","absolute"),L(t,"bottom","0"),L(t,"right","0"),L(t,"background-color","grey"),L(t,"padding","10px 20px"),L(t,"color","white"),L(t,"font-weight","600"),L(t,"font-size","20px")},m(m,v){R(m,e,v),f(e,r),R(m,a,v),R(m,t,v),f(t,s),f(t,c),f(t,u),f(t,l),d||(p=U(e,"click",n[20]),d=!0)},p(m,v){v&136&&i!==(i=m[3]-m[7]+"")&&Y(c,i),v&8&&Y(l,m[3])},d(m){m&&N(e),m&&N(a),m&&N(t),d=!1,p()}}}function Ve(n){let e,r,a,t;return{c(){e=C("button"),r=x("select 10"),this.h()},l(s){e=S(s,"BUTTON",{class:!0});var i=h(e);r=D(i,"select 10"),i.forEach(N),this.h()},h(){E(e,"class","input-btn svelte-n1kvot")},m(s,i){R(s,e,i),f(e,r),a||(t=U(e,"click",K(n[14])),a=!0)},p:V,d(s){s&&N(e),a=!1,t()}}}function Je(n){let e,r,a,t;return{c(){e=C("button"),r=x("select 20"),this.h()},l(s){e=S(s,"BUTTON",{class:!0});var i=h(e);r=D(i,"select 20"),i.forEach(N),this.h()},h(){E(e,"class","input-btn svelte-n1kvot")},m(s,i){R(s,e,i),f(e,r),a||(t=U(e,"click",K(n[15])),a=!0)},p:V,d(s){s&&N(e),a=!1,t()}}}function Ge(n){let e,r,a,t;return{c(){e=C("button"),r=x("select 40"),this.h()},l(s){e=S(s,"BUTTON",{class:!0});var i=h(e);r=D(i,"select 40"),i.forEach(N),this.h()},h(){E(e,"class","input-btn svelte-n1kvot")},m(s,i){R(s,e,i),f(e,r),a||(t=U(e,"click",K(n[16])),a=!0)},p:V,d(s){s&&N(e),a=!1,t()}}}function Fr(n){let e,r;const a=[n[22],{index:n[24]},{showAnswers:n[2]},{generateAnswered:n[4]}];let t={};for(let s=0;s<a.length;s+=1)t=ve(t,a[s]);return e=new ar({props:t}),{c(){ne(e.$$.fragment)},l(s){te(e.$$.fragment,s)},m(s,i){se(e,s,i),r=!0},p(s,i){const c=i&52?Ne(a,[i&32&&qe(s[22]),a[1],i&4&&{showAnswers:s[2]},i&16&&{generateAnswered:s[4]}]):{};e.$set(c)},i(s){r||(j(e.$$.fragment,s),r=!0)},o(s){k(e.$$.fragment,s),r=!1},d(s){ue(e,s)}}}function Ur(n){let e,r;const a=[n[22],{index:n[24]},{showAnswers:n[2]},{generateAnswered:n[4]}];let t={};for(let s=0;s<a.length;s+=1)t=ve(t,a[s]);return e=new rr({props:t}),{c(){ne(e.$$.fragment)},l(s){te(e.$$.fragment,s)},m(s,i){se(e,s,i),r=!0},p(s,i){const c=i&52?Ne(a,[i&32&&qe(s[22]),a[1],i&4&&{showAnswers:s[2]},i&16&&{generateAnswered:s[4]}]):{};e.$set(c)},i(s){r||(j(e.$$.fragment,s),r=!0)},o(s){k(e.$$.fragment,s),r=!1},d(s){ue(e,s)}}}function Ke(n){let e,r,a,t;const s=[Ur,Fr],i=[];function c(u,l){return u[22].correct_answers.length>1?0:1}return e=c(n),r=i[e]=s[e](n),{c(){r.c(),a=X()},l(u){r.l(u),a=X()},m(u,l){i[e].m(u,l),R(u,a,l),t=!0},p(u,l){let d=e;e=c(u),e===d?i[e].p(u,l):(pe(),k(i[d],1,1,()=>{i[d]=null}),de(),r=i[e],r?r.p(u,l):(r=i[e]=s[e](u),r.c()),j(r,1),r.m(a.parentNode,a))},i(u){t||(j(r),t=!0)},o(u){k(r),t=!1},d(u){i[e].d(u),u&&N(a)}}}function kr(n){let e,r,a,t;const s=[Br,jr,Lr],i=[];function c(u,l){return u[4]?0:u[1]?2:1}return e=c(n),r=i[e]=s[e](n),{c(){r.c(),a=X()},l(u){r.l(u),a=X()},m(u,l){i[e].m(u,l),R(u,a,l),t=!0},p(u,[l]){let d=e;e=c(u),e===d?i[e].p(u,l):(pe(),k(i[d],1,1,()=>{i[d]=null}),de(),r=i[e],r?r.p(u,l):(r=i[e]=s[e](u),r.c()),j(r,1),r.m(a.parentNode,a))},i(u){t||(j(r),t=!0)},o(u){k(r),t=!1},d(u){i[e].d(u),u&&N(a)}}}function Hr(n,e,r){let a,t,s;Q(n,he,T=>r(21,a=T)),Q(n,Se,T=>r(6,t=T)),Q(n,ie,T=>r(7,s=T));let i=ae;const c=["random","algoritmi_structuri_date","baze_de_date","cloud_computing","comert_electronic","criptografie","programare_in_c","programare_in_java","programare_procedurala","retele_de_calculatoare","sgbd","sisteme_de_operare","tehnici_avansate_programare","tehnologii_web"];let u=!1,l=!1,d=1;function p(){if(a==="random"){r(0,i=ze(ae,d)),r(1,u=!0);return}r(0,i=we(a)),r(0,i=ze(i,d)),r(1,u=!0)}function m(T){r(2,l=!0)}let v=!1,w;function z(){r(0,i=we(a)),r(5,w=ze(i,i.length,!1)),r(4,v=!0),r(2,l=!0)}function q(){d=Qe(this.value),r(3,d)}const o=()=>_r.set(d),b=()=>r(3,d=10),_=()=>r(3,d=20),g=()=>r(3,d=40),P=()=>r(3,d=t);function B(T){l=T,r(2,l)}function G(T){l=T,r(2,l)}return[i,u,l,d,v,w,t,s,c,p,m,z,q,o,b,_,g,P,B,G,()=>{r(2,l=!1),r(1,u=!1),ie.update(T=>0)}]}class Jr extends oe{constructor(e){super(),ce(this,e,Hr,kr,le,{})}}export{Jr as default};
