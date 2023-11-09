type TypeField = string | number | IObject;

type TypeSubObject = {
    cvalue: undefined | TypeField
}
interface IObject {
    [key: string]: undefined | TypeSubObject
}

function summ(a: IObject): number {
    const x: number[] = Object.keys(a).map((k: string) : number => {
        const elem: TypeSubObject | undefined = a[k];
        if (typeof elem === undefined) {  // -> num
            return 2021;
        }
        if (elem && typeof elem.cvalue === 'string') return +elem.cvalue || 2021;  // -> num
        if (
            elem &&
            typeof elem.cvalue !== 'string' &&
            typeof elem.cvalue !== 'number' &&
            elem.cvalue !== undefined
        ) {
            return summ(elem.cvalue);  // -> num
        }
        return elem!.cvalue as number;  // -> num
    });
    let sum: number = 0;
    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum;
}

const test = { hello: {cvalue: 1}, world: { cvalue: { yay: { cvalue: "2" } } } }

console.log(summ(test))
