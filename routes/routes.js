const playersRoutes = require('./players');

const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('Majdi ettaleb application api');
    });

    playersRoutes(app, fs);

};

module.exports = appRouter;