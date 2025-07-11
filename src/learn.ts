//1 Khai báo kiểu cho biến
const nextYear: number = 2025;
const porcoQuote: string = " I'd rather be a pig than a fascist"
const printQuote = (quotes: string) => {
    return quotes
}
// console.log(printQuote(porcoQuote))

//2. Khai báo kiểu mảng - string[], number[], todo[]
const years: number[] = [2019, 2018]

interface Card {
    id: number;
    title: string;
    created: string;
    delete: boolean
}

const listCard: Card[] = [
    { id: 1, title: 'nothing', created: 'day23', delete: true },
    { id: 2, title: 'hello', created: 'day3', delete: false }
]
// console.log(listCard)

//3. Khai báo kiểu trả về của hàm – (): number, (): Todo[], (): void
const backArr = (list: Card[]): Card[] => {

    let newList: Card[] = list.filter(c => c.id === 4 && c)
    return newList


}
console.log(backArr([{ id: 4, title: 'nothing', created: 'day23', delete: true }, { id: 2, title: 'nothing', created: 'day23', delete: true }]))

// ✅ 4. Union type – string | number, boolean | null -> cho pheps nhieu kieu du lieu
const setQuo = (val: string | number): string | number => {
    return val
}
// console.log(setQuo('hôm nay là thứ '), setQuo(7))

// ✅ 5. Interface / Type alias ->TypeScript cho phép bạn định nghĩa kiểu tùy chỉnh cho object.
interface Cmnd {
    name: string;
    id: number;
}

const user: Cmnd = {
    name: 'nguyen',
    id: 911
}
// console.log(user)

// ✅ 6. Optional(?) và Non - null assertion(!)




// Lọc phần tử có id bằng targetId
const filterIdTarget = <T extends { id: number }>(list: T[], targetId: number): T[] => {
    return list.filter(e => e.id === targetId)
}
// Generic: Tìm phần tử đầu tiên có id = targetId
const findById = <T extends { id: number }>(list: T[], targetId: number): T | undefined => {
    return list.find(item => item.id === targetId)
}

// Generic: Nhóm phần tử theo khóa
const fruits: string[] = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];

const count = fruits.reduce((acc: Record<string, number>, fruit: string) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc
}, {})
// console.log(count)
interface Character {
    id: number;
    name: string;
    selected: boolean;
    age: string
}

let listChar: Character[] = [
    { id: 1, name: 'nausicaa', selected: false, age: '9x' },
    { id: 2, name: 'porco', selected: true, age: '9x' },
    { id: 3, name: 'jiro', selected: false, age: '2k' },
    { id: 4, name: 'chihiro', selected: false, age: '2k' }
]


// console.log(group)


function groupByKey<T, K extends keyof T>(list: T[], key: K): Record<string, T[]> {
    return list.reduce((acc: Record<string, T[]>, item: T) => {
        const groupKey = String(item[key]);
        if (!acc[groupKey]) acc[groupKey] = [];
        acc[groupKey].push(item);
        return acc;
    }, {});
}
let abbcc = groupByKey(listChar, 'age')
console.log(abbcc)


//Nâng cao
interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
}

const products: Product[] = [
    { id: 1, name: 'Apple', category: 'Fruit', price: 100 },
    { id: 2, name: 'Banana', category: 'Fruit', price: 100 },
    { id: 3, name: 'Carrot', category: 'Vegetable', price: 50 },
    { id: 4, name: 'Broccoli', category: 'Vegetable', price: 70 },
    { id: 5, name: 'Pear', category: 'Fruit', price: 80 },
];

// Generic: Nhóm phần tử theo khóa [category,price]



interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
}

const products2: Product[] = [
    { id: 1, name: 'Apple', category: 'Fruit', price: 100 },
    { id: 2, name: 'Banana', category: 'Fruit', price: 100 },
    { id: 3, name: 'Carrot', category: 'Vegetable', price: 50 },
    { id: 4, name: 'Broccoli', category: 'Vegetable', price: 70 },
    { id: 5, name: 'Pear', category: 'Fruit', price: 80 },
];

function groupByKeys<T>(list: T[], keys: (keyof T)[]): Record<string, T[]> {
    return list.reduce((acc, item) => {
        //create keys colapse
        const groupKey = keys.map(key => String(item[key])).join('&');
        acc[groupKey] = acc[groupKey] || [];
        acc[groupKey].push(item);
        return acc
    }, {} as Record<string, T[]>)
}
const grouped = groupByKeys(products2, ['category', 'price']);
// console.log(grouped);