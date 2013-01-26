
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

        //remove typescript npmignore
        if (fs.existsSync('src/typescript/.npmignore')) {
            console.log("Removing typescript's .npmignore");
            fs.removeSync('src/typescript/.npmignore');
        }
    
        //copy over typescript and php runtime support
        console.log('Copying over runtime support');
        copyAll([
            {src: 'node_modules/typescript/bin/lib.d.ts', dest: 'bin/lib.d.ts'},
            {src: 'src/php.d.ts', dest: 'bin/php.d.ts'}
        ], complete);
    }, {printStdout: true, printStderr: true});
});

desc('Test');
task('test', {async: true}, function () {
    //compile tests
    console.log('Compiling and running tests');
    var cmds = [
        'node ./node_modules/typescript/bin/tsc.js --out ./test/main.js ./test/main.ts',
        'node ./test/main.js'
    ];
    jake.exec(cmds, complete, {printStdout: true, printStderr: true});
});

desc('PHPDoc Build');
task('phpdocbuild', {async: true}, function(path) {
    //make dir
    if (!fs.existsSync('bin')) {
        console.log('Making phpdocbuild/');
        fs.mkdirSync('phpdocbuild');
    }
    console.log('Compiling doc extractor php and running');
    var cmds = [
        'node ./bin/ppc.js --no-php-lib --all-caps-const --no-composer --single -o ./phpdocbuild/phpDocExtractor.php ./src/utils/phpDocExtractor.ts',
        'php phpdocbuild/phpDocExtractor.php ' + path + ' ./phpdocbuild/phpdoc.json',
        'node ./node_modules/typescript/bin/tsc.js --out ./phpdocbuild/phpDefinitionBuilder.js ./src/utils/phpDefinitionBuilder.ts',
        'node ./phpdocbuild/phpDefinitionBuilder.js ./src/php.d.ts'
    ];
    jake.exec(cmds, complete, {printStdout: true, printStderr: true});
});