# Streamers

It's a word like stream?

---

# Notes

- [Node streams - a fractal of weird design](https://gist.github.com/spion/ecdc92bc5de5b381da30#file-01-fractal-weird-design-md)
- [Async Iteration](https://github.com/tc39/proposal-async-iteration)
- [A General Theory of Reactivity](https://kriskowal.gitbooks.io/gtor/content/)
- Streams Spec https://streams.spec.whatwg.org/ https://github.com/whatwg/streams

---

async iterators
dominc tars strea
node stream
bluestream
node serialport



We have an api server Gradius

You can play with it, it's great

Redis
NodeJS
GraphQL
Lambda

and a lot of stuff in the middle
() -> {} -> []
() ->/

Sometimes we have to deal with lists of data

Sometimes it's a node in our GraphQL

Sometimes it's 100 edges pointing to other NodeJS

Sometimes it's 10000 nodes in a set

(We're also going through some platform migrations while we work, that means we read and write *everthing* a lot)

So what are the interfaces for this? How do we keep it fast, and easy to work with?


getOne()
getMany() // 10
getALot() // 10,000

Who cares?

```js
const allMyThings = Promise.map(tenThousandIds, getOne)
```

1 thing === 10k
10,000 things === 100MB

---

Also 10,000 trips to your database

---

1 trip to the database is 10ms

---

10,000 trips === 100 seconds

---

(gone to sleep)

---
https://kriskowal.gitbooks.io/gtor/ (written years ago, turned into a cool book and will eventually one day be spec)

---
Errors

---

I can't even
