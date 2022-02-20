// #!/usr/bin/env node

// // const sumNumbers=(a,b)=> a+b

// // console.log(sumNumbers(1,2))

// const express = require('express')

// const app = express()

// app.get('/', (req, res) => {
//   res.send('Hi!')
// })

// const server = app.listen(3000, () =>{ 
//     console.log('Server ready')
//     process.kill(process.pid, 'SIGTERM')

// })

// process.on('SIGTERM', () => {
//   server.close(() => {
//     console.log('Process terminated')
//   })
// })

require('dotenv').config();

console.log(process.env.USER_ID) // "239482"
console.log(process.env.USER_KEY) // "foobar"
console.log(process.env.NODE_ENV) // "development"
