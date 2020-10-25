const express = require('express');

const app = express();

app.use(express.static('./dist/board-games-app'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/board-games-app/'}),
);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});