import * as path from 'path';
import * as express from 'express';

import { lowfreqChannel, highfreqChannel } from './channels';

const PORT = process.env.PORT || 8005;
const app = express();

// Serve static files for simple plain-JS demo
app.use(express.static(path.join(__dirname, '../www')));

app.get('/lowfreq', function (req, res) {
  lowfreqChannel.addClient(req, res);
});

app.get('/highfreq', function (req, res) {
  highfreqChannel.addClient(req, res);
});

app.listen(PORT, function () {
  console.log('Listening on http://localhost:%s/', PORT);
});
