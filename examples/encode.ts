import { encode, decode, Int, Float } from "../src"

const buffer = encode("root tag name", {
    int: new Int(123456),
    long: 1040120600380n,
    float: new Float(0.75),
    double: 0.1 + 0.2,
    text: "Hello world",
    longList: [1n, 2n, 3n],
    nested: {
        byteArray: Buffer.from([0x80, 0x40, 0x20])
    },
    intArray: new Int32Array([1, 2, 3, 4]),
    longArray: new BigInt64Array([1n, 2n, 3n, 4n]),
})

console.log(decode(buffer))