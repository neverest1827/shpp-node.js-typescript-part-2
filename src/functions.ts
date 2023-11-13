function mapObject<Input, Output>(obj: Record<string, Input>, fn: (arg: Input) => Output): Record<string, Output>{
    const keys: string[] = Object.keys(obj);
    const newObj: Record<string, Output> = {};
    keys.map( (key: string): void => {
        newObj[key] = fn(obj[key]);
    } )
    return newObj;
}

const testObj: Record<string, number> = { "roma" : 5, "vasya": 2 }
const transformer = (x: number): boolean => x > 2

const result : Record<string, boolean> = mapObject(testObj, transformer)

console.log(result)


// Напишите функцию, которая принимает:
// 1) некие данные предполагаемо типа Т, но возможно не со всеми полями
// 2) функцию-дополнятор, которая принимает такие штуки как из п.1,
//    а возвращает полноценный объект типа Т
// ... как вы поняли, саму функцию писать не надо :)
// нас интересует только ее сигнатура.
function someFunc<T>(param: Partial<T>, fn: (param: Partial<T>) => T): T {
    return fn(param);
}


// Более сложный вариант:
// Напишите функцию, которая принимает:
// 1) некие данные предполагаемо типа Т (у которого поле id: string),
//    но возможно без поля id
// 2) функцию-дополнятор, которая принимает такие штуки как из п.1,
//    а возвращает полноценный объект типа Т
// ... как вы поняли, саму функцию писать не надо :)
// нас интересует только ее сигнатура.

type T = {
    id: string;
}

type TypeFunc<Type> = (param: Partial<Type>) => Type;

function someFunc2(param: Partial<T>, fn: TypeFunc<T>): T{
    return fn(param);
}


// Последняя задача:
// Напишите сигнатуру функции, которая принимает
// - некий класс
// - количество
// ...а возвращает массив экземпляров этого класса

class Rectangle {
    w!: number;
    h!: number;
}
class Circle {
    radius!: number;
}

// сделайте норм сигнатуру тут.
// НЕТ, Rectangle|Circle это не вариант, надо сделать универсальную функцию
function stamp<TypeClass>(SOMECLASS: new () => TypeClass, count: number): TypeClass[]  {
    let a: TypeClass[] = []
    for (let i: number = 0; i < count; i++)
        a.push(new SOMECLASS());

    return a;
}

let a: Rectangle[] = stamp(Rectangle, 10);
let b: Circle[] = stamp(Circle, 20)