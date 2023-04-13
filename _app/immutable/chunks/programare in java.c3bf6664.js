const n=[{questionNumber:"1.",question:`Fie următoarea clasă Java:

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

După executarea programului, se va afişa:`,answers:["AACD","ACCD","AACB","ACDC"],correct_answers:[1]},{questionNumber:"55.",question:"Un fir de executare în Java se poate defini:",answers:["printr-o instanță a clasei Runnable","printr-o instanță a clasei Object","printr-o instanță a clasei Thread","printr-o instanță a clasei Clone"],correct_answers:[1]}];export{n as default};
