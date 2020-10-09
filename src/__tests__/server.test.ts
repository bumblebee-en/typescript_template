import {Server} from '../server'
import axios from 'axios';

describe('Server', () => {

    let server:Server;

    beforeEach(async () => {
        server = new Server();
        await server.start();
    });

    afterEach(() => {
        server.stop();
    });

    it('responses /cal with {answer:0}', async () => {

        const response = await axios.get('http://127.0.0.1:8080/cal');
        expect(response.data.answer).toBe(0);
    });
});



