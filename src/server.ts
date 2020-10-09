import * as express from 'express';
import * as http from 'http';

export class Server{

    private app: express.Express;
    private server: http.Server|null = null;

    constructor(){
        this.app = express();
        this.app.get('/cal', (request, response) => {
            response.setHeader('Content-Type', 'application/json');
            response.send(JSON.stringify({ answer: 0 }, null, 3));
        });
    }

    async start():Promise<void>{
        return new Promise((resolve)=>{
            this.server = this.app.listen(8080, () => {
                console.log('Server running on 8080.');
                resolve();
            });
        });
    }

    stop():void{
        this.server?.close();
    }


}
