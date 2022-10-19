function person<T>(data: T) {
    return data;
}

const p = person<string>(38)

console.log(p);
