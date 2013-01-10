///<reference path="all-definitions.d.ts" />

var app = new Silex.Application();

app.get('/hello/{name}', (name: string) => {
    return 'Hello ' + app.escape(name);
});

app.run();