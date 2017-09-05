function asyncArray (arr) {
  const iArr =  arr[Symbol.iterator]()
  return {
    async next() {
      return iArr.next()
    }
  }
}

async function count () {
  for await (const line of asyncArray([1, 2, 3, 4, 5])) {
    console.log(number);
  }
}

count()
