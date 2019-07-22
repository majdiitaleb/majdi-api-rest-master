
const playersRoutes = (app, fs) => {

    // variables
    const dataPath = './data/headtohead.json';

    const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                throw err;
            }

            callback(returnJson ? JSON.parse(data) : data);
        });
    };

    const writeFile = (fileData, callback, filePath = dataPath, encoding = 'utf8') => {

        fs.writeFile(filePath, fileData, encoding, (err) => {
            if (err) {
                throw err;
            }

            callback();
        });
    };

    // READ
    app.get('/players', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });



    app.get('/players/:id', (req, res)=>{

        readFile(data =>{
            const playerId = req.params["id"];
          var playerSearch = data.players.filter(function(player) {
                return player.id == playerId;
            });
          if(playerSearch.length>0)
            res.send(playerSearch);
          else{
              res.status(200).send(`no players has the id :${playerId}`);
          }
        }, true)
    })
    // DELETE
    app.delete('/players/:id', (req, res) => {

        readFile(data => {


            const playerId = req.params["id"];
                var playerSearch = data.players.filter(function(player) {
                    return player.id != playerId;
                });


            writeFile(JSON.stringify(playerSearch, null, 2), () => {
                res.status(200).send(`player id:${playerId} removed`);
            });
        },
            true);
    });
};

module.exports = playersRoutes;