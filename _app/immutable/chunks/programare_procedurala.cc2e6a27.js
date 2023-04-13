const n=[{questionNumber:"1.",question:"În care dintre variantele de mai jos se declară un tablou unidimensional (vector) 𝑥 în care se pot memora cel mult 100 de numere reale?",answers:["x=float[100];","double x[100];","float x[100];","real x(100);"],correct_answers:[2,3]},{questionNumber:"2.",question:"Care dintre următoarele expresii logice este adevărată (are o valoare nenulă) dacă şi numai dacă numărul real memorat în variabila 𝑥 nu aparţine intervalului (0,5]?",answers:["(x&lt;=0)||(x>5)","(x&lt;=0)&&(x>5)","(x&lt;0)||(x>=5)","(x&lt;=0)&&(x>5)"],correct_answers:[1]},{questionNumber:"3.",question:"Care dintre următoarele expresii este adevărată (are o valoare nenulă) dacă şi numai dacă numărul întreg memorat în variabila 𝑥 aparţine intervalului (1,6]?",answers:["(x>=1)||(x&lt;6)","(x>1)||(x&lt;=6)","(x>1)&&(x&lt;6)","(x>1)&&(x&lt;=6)"],correct_answers:[4]},{questionNumber:"4.",question:"După executarea instrucțiunii float x = 27/5*2/3*7; ce valoare va fi memorată în variabila 𝑥?",answers:["25.2","21","6.3","7"],correct_answers:[2]},{questionNumber:"5.",question:"După executarea instrucțiunii float x = 55/17*5/8+48/5/8*15; ce valoare va fi memorată în variabila 𝑥?",answers:["17.022058","17","16","21.219914"],correct_answers:[3]},{questionNumber:"6.",question:`Se consideră următoarea secvenţă de instrucțiuni:

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
𝑎, format din 𝑛 numere întregi?`,answers:["(a[i]>0)&&(a[i]%2!=0)","(a[i]>0)&&(a[i]%2==0)","(a[i]>0)||(a[i]%2!=0)","(a[i]>=0)||(a[i]%2==0)"],correct_answers:[2]},{questionNumber:"17.",question:'Care este valoarea expresiei strlen("programare")+strcmp("test","test")?',answers:["10","14","18","programaretesttest"],correct_answers:[1]},{questionNumber:"18.",question:`Considerăm următoarea secvenţă de instrucțiuni:

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

Ce valori vor fi afișate pe ecran după executarea programului de mai sus?`,answers:["–1 -3 -4","2 5","–1 2 -3 -4","2 -3 -4 5"],correct_answers:[2]}];export{n as default};
