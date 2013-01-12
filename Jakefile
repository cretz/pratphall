
var fs = require('fs-extra');

function copyAll(pairs, onComplete) {
    var index = -1;
    function next() {
        if (++index >= pairs.length) onComplete();
        else {
            console.log('Copying ' + pairs[index].src + ' to ' + pairs[index].dest);
            fs.copy(pairs[index].src, pairs[index].dest, function (err) {
                if (err) throw err;
                else next();
            });
        }
    }
    next();
}

desc('Build');
task('build', {async: true}, function () {
    //make bin
    if (!fs.existsSync('bin')) {
        console.log('Making bin/');
        fs.mkdirSync('bin');
    }

    //build ppc and the pratphall lib
    console.log('Compiling ppc and pratphall');
    var cmds = [
        'node ./node_modules/typescript/bin/tsc.js --out ./bin/ppc.js ./src/ppc.ts',
        'node ./node_modules/typescript/bin/tsc.js --out ./bin/pratphall.js ./src/pratphall.ts'
    ];
    jake.exec(cmds, function() {
        //now make the ppc shell script
        console.log('Making ppc shell script');
        fs.writeFileSync('bin/ppc', "#!/usr/bin/env node\nrequire('./tsc.js');");
    
        //copy over typescript and php runtime support
        console.log('Copying over runtime support');
        copyAll([
            {src: 'node_modules/typescript/bin/lib.d.ts', dest: 'bin/lib.d.ts'},
            {src: 'src/php.d.ts', dest: 'bin/php.d.ts'},
            {src: 'src/runtime', dest: 'bin/runtime'}
        ], complete);
    }, {printStdout: true, printStderr: true});
});

desc('Package');
task('package', ['build'], {async: true}, function () {
    //remove existing build
    console.log('Removing existing build directory');
    fs.removeSync('build');

    //make build
    console.log('Making build directory');
    fs.mkdirSync('build');

    //basically just copy bin, src, license, package, and readme
    console.log('Copying everything over to build directory');
    copyAll([
        {src: 'bin', dest: 'build/bin'},
        {src: 'src', dest: 'build/src'},
        {src: 'LICENSE', dest: 'build/LICENSE'},
        {src: 'package.json', dest: 'build/package.json'},
        {src: 'README.md', dest: 'build/README.md'}
    ], complete);
});