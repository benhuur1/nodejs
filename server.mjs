import { createServer } from 'node:http'
import { Router } from './router.mjs';
import { customRequest } from './custom-request.mjs';

const router = new Router();

router.get('/', (req, res) => {
    res.end('Home');
})

router.get('/contato', (req, res) => {
    res.end('Contato');
})

router.get('/produto/notebook', (req, res) => {
    res.end('Produtos - Notebook')
})

function postProduto(req, res) {
    const cor = req.query.get('cor')
    res.end(`Notebook Post ${cor}`);
}

router.post('/produto', postProduto)

const server = createServer( async (request, res) => {
    const req =  await customRequest(request)

    const handler = router.find(req.method, req.pathname);
    console.log(handler)
    if(handler){
        handler(req, res);
    } else{
    res.statusCode = 404;
    res.end('Não encontrada')
    }

});

server.listen(3000, () => {
    console.log('Server: http://localhost:3000');
})