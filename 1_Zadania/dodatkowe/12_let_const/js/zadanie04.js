// spróbuj zmienić zmienną name nadpisująć ją niżej innym imieniem.
const name = "Agata";
// name = "Agatka";    TypeError: Assignment to constant variable.    Nie można zmienić wartości zmiennej const



//a) spróbuj zmienić zmienną simpleArray nadpisująć ją niżej inną tablicą.
//b) spróbuj dodać nową wartość do tablicy
//c) spróbuj zmienić którąkolwiek wartość z tablicy simpleArray
const simpleArray = [1, 2, 3, 4];
// simpleArray = [1,2];    TypeError: Assignment to constant variable.    Nie można zmienić wartości zmiennej const
simpleArray.push(5);    //Można dodawać kolejne elementy do tablicy
simpleArray[0] = -1;    //Można edytować elementy tablicy


//a) spróbuj zmienić zmienną dog nadpisująć ją niżej innym obiektem.
//b) spróbuj zmienić właśność skill obiektu dog
//c) spróbuj dodać nową własność do obiektu dog np. age
const dog = {
    name: "Puszek",
    skill: "killing"
};
//dog = []    TypeError: Assignment to constant variable. Nie można zmienić wartości zmiennej const
dog.skill = "howling";  //Można zmienić wartości zmiennych wewnątrz obiektu
dog.age = 1;    //Można dodać kolejne wartości do obiektu
