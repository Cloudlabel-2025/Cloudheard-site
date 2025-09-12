const {createServer} = require('http');
const next = require('next');

const port = process.env.PORT || 3000;
const dev = false;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() =>{
    const server = createServer(handle);
    server.listen(port,()=>{
        console.log(`Next.js is running successfully`);
    })
})