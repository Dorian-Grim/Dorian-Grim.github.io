const e=[{questionNumber:"1.",question:`Fie secvența:

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

Sunt apelate urmãtoarele:`,answers:["constructor – de patru ori, constructor de copiere – o datã, destructor – de patru ori;","constructor – de trei ori, constructor de copiere - de douã ori, destructor de cinci ori;","constructor – de douã ori, constructor de copiere – de douã ori, operator= - o datã, destructor – de patru ori;","constructor – de douã ori, constructor de copiere – o datã, operator= - de douã ori, destructor – de douã ori;","constructor – de douã ori, constructor de copiere – o datã, operator= - de douã ori, destructor – de patru ori."],correct_answers:[3]}];export{e as default};
