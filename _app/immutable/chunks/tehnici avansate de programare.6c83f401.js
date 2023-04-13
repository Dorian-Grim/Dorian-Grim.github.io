const e=[{questionNumber:"1.",question:"Complexitatea minimă a unui algoritm care calculează numărul tuturor submulțimilor unei mulțimi cu 𝑛 elemente este:",answers:["𝒪(𝑛<sup>2</sup>)","𝒪(2<sup>𝑛</sup>)","𝒪(𝑛)","𝒪(𝑛!)"],correct_answers:[3]},{questionNumber:"2.",question:"Complexitatea minimă a unui algoritm care afişează toate submulțimile unei mulțimi cu 𝑛 elemente este:",answers:["𝒪(𝑛<sup>2</sup>)","𝒪(2<sup>𝑛</sup>)","𝒪(𝑛)","𝒪(𝑛!)"],correct_answers:[2]},{questionNumber:"3.",question:"Complexitatea minimă a unui algoritm care calculează numărul modurilor în care pot fi aşezate n cărți pe un raft suficient de lung este:",answers:["𝒪(𝑛<sup>2</sup>)","𝒪(2<sup>𝑛</sup>)","𝒪(𝑛)","𝒪(𝑛!)"],correct_answers:[3]},{questionNumber:"4.",question:"Complexitatea minimă a unui algoritm care afişează toate modurile în care pot fi aşezate n cărți pe un raft suficient de lung este:",answers:["𝒪(𝑛<sup>2</sup>)","𝒪(2<sup>𝑛</sup>)","𝒪(𝑛)","𝒪(𝑛!)"],correct_answers:[2]},{questionNumber:"5.",question:`Considerăm următorul program în limbajul C:
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

Care este suma maximă ce poate fi obținută în triunghiul dat, respectând condițiile precizate mai sus?`,answers:["518","402","428","608"],correct_answers:[4]},{questionNumber:"44.",question:"Fie 𝑆 o sumă de bani şi 𝑣<sub>1</sub>,𝑣<sub>2</sub>,…,𝑣<sub>𝑛</sub> valorile a n tipuri de monede (se presupune că din fiecare tip de monedă avem la dispoziţie un număr nelimitat de monede). Un algoritm optim care să determine numărul minim de monede cu care poate fi plătită suma 𝑆, folosind monede de tipurile date, folosește metoda:",answers:["Greedy;","backtracking;","programării dinamice;","Divide et Impera."],correct_answers:[3]},{questionNumber:"45.",question:"Precizați câte subșiruri strict crescătoare de lungime maximă conține tabloul 𝑣=(12,18,17,11,10,16,17,26):",answers:["1","2","3","4"],correct_answers:[3]},{questionNumber:"46.",question:"Precizați câte subșiruri strict crescătoare de lungime maximă conține tabloul 𝑣=(21,18,13,19,21,16,16,17,26):",answers:["1","2","3","4"],correct_answers:[2]},{questionNumber:"47.",question:"Indicați lungimea maximă a unui subșir strict crescător din tabloul 𝑣=(12,18,17,11,10,26,17,26,19,28):",answers:["2","4","3","5"],correct_answers:[2]},{questionNumber:"48.",question:"Indicați lungimea maximă a unui subșir strict crescător din tabloul 𝑣=(18,14,17,4,8,15,12,19,16,22):",answers:["2","4","3","5"],correct_answers:[4]},{questionNumber:"49.",question:"Având la dispoziție un număr nelimitat de monede cu valorile 5 RON, 4 RON, 3 RON și 1 RON, precizați numărul minim de monede cu care poate fi plătită suma de 17 RON:",answers:["4","5","3","6"],correct_answers:[1]},{questionNumber:"50.",question:"Având la dispoziție un număr nelimitat de monede cu valorile 7 RON, 6 RON, 3 RON și 2 RON, precizați numărul minim de monede cu care poate fi plătită suma de 19 RON:",answers:["6","3","4","5"],correct_answers:[3]}];export{e as default};
