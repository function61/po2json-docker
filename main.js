var po2json = require('po2json');
var minimist = require('minimist');

var argv = require('minimist')(process.argv.slice(2));

if (!argv.format) {
	console.error('Usage: --format=raw|jed|mf [--fuzzy]');
	return;
}

var buffer = '';

process.stdin.on('data', function (chunk){
	buffer += chunk;
});

process.stdin.on('end', function (){
	var converted = po2json.parse(buffer, {
		pretty: true,
		fuzzy: 'fuzzy' in argv,
		stringify: true,

		format: argv.format
	});

	console.log(converted);
});
