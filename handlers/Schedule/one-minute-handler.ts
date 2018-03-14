import { Http2ServerResponse, Http2ServerRequest } from 'http2';
import { IncomingMessage, ServerResponse } from 'http';
// function minute() {
//     console.log(new Date().getTime());
// }

module.exports = {
    minute(req: IncomingMessage, res: ServerResponse) {
        const now = new Date().toTimeString();
        req.on('data', (data: string | Buffer) => {
            console.log(data);
        });
        console.log(res);
        res.end(now);
    }
};

// exports.minute = (req: any, res: ServerResponse) => {
//         const now = new Date().toTimeString();
//         req.on('data', (data: string | Buffer) => {
//             console.log(data);
//         });
//         console.log(res);
//         console.log(req.body);
//         res.end(now);
//     }