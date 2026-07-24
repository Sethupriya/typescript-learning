let appname = 'calculator'

function add(a: number, b: number): number {
    return a + b
}

class Formatter {
    static toUpper(str: string): string {
        return str.toUpperCase();
    }
}

export { add, appname, Formatter };