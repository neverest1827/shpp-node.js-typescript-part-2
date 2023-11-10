function mapObject<Input, Output>(obj: Record<string, Input>, fn: (arg: Input) => Output): Record<string,Output>{
    const keys: string[] = Object.keys(obj);
    const newObj: Record<string,Output> = {};
    for( let key of keys){
        newObj[key] = fn(obj[key])
    }
    return newObj;
}

const testObj: Record<string, number> = { "roma" : 5, "vasya": 2 }
const transformer = (x: number): boolean => x > 2

const result : Record<string, boolean> = mapObject(testObj, transformer)

console.log(result)