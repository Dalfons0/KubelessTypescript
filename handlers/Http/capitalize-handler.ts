import * as _ from 'lodash';
import { Http2ServerResponse, Http2ServerRequest } from 'http2';

export function capitalize(req: Http2ServerRequest, res: Http2ServerResponse) {
    let bodyArray: Buffer[] = [];
    
    req.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        bodyArray.push(chunk);
    }).on('end', () => {
        let bodyString = Buffer.concat(bodyArray).toString();
        res.end(_.capitalize(bodyString));
    });
}