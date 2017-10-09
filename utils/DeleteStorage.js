const request = require('request');
var argv = require('minimist')(process.argv.slice(2));
// console.log(argv);

// Do some explaining
var theHelp = argv['h'];
if (theHelp != undefined) {
	console.log('Arguments to use : ');
	console.log('  -d domain : for example gse00002323');
	console.log('  -u username : cloud user name, for example user01');
	console.log('  -p password : password of the cloud user');
	console.log('  -o container_name : name of the container to delete, for example MyContainer');
	console.log('  -e execute flag: when "0" just list the container objects, when "1" delete them');
	console.log('  -v verbose : print more info on the console');
	process.exit(1);
}

var instance = argv['d'];
if (instance === undefined) {
	console.log('domain is mandatory.  Exiting command');
	process.exit(1);
}

var myUser = argv['u'];
var myPass = argv['p'];
var delObject = argv['o'];
var doIt = argv['e'];
var verbose = argv['v'];

var deleteCount = 0;

console.log('----------------------------------------');
console.log('Identity domain : ',instance);
console.log('User            : ',myUser);
console.log('Password        : ',myPass);
console.log('Container       : ',delObject);
console.log('Execute flag    : ', doIt);
console.log('Verbose flag    : ', verbose);
console.log('----------------------------------------');

const options = {  
    url: 'https://' + instance + '.storage.oraclecloud.com/auth/v1.0',
    method: 'GET',
    headers: {
        'X-Storage-User' : 'Storage-' + instance + ':' + myUser,
        'X-Storage-Pass' : myPass
    }
};

request(options, function(err, res, body) {  
	console.log('Status Auth : ', res.statusCode);
	
	if (verbose) console.log('Full headers : ',res.headers);

	var xtoken = res.headers['x-auth-token'];
	var xpath = res.headers['x-storage-url'];
	console.log('----------------------------------------');
	
	const options2 = {  
		url: xpath + '/?format=json',
		method: 'GET',
		headers: {
			'X-Auth-Token': xtoken
		}
	};

	request(options2, function(err2, res2, body2) {  
		console.log("Status List containers : ", res2.statusCode);
    
		//console.log(body2.data);
		var json = JSON.parse(body2);
        //console.log(json);

		console.log('----------------------------------------');
		console.log('Available list of Storage Containers in the domain :');
		
		for(var myKey in json) {
			console.log("Container " + myKey + ": "+json[myKey]['name']);
		}			
		console.log('----------------------------------------');

		// Check if an object has been provided
		if (delObject === undefined) {
			console.log('No container name provided, it ends here');
			process.exit(0);
		}
				
		const options3 = {  
			url: xpath + '/' + delObject + '/?format=json',
			method: 'GET',
			headers: {
				'X-Auth-Token': xtoken
			}
		};

	
		request(options3, function(err3, res3, body3) {  
			console.log("Status List objects : ", res3.statusCode);

			if (res3.statusCode === 200) {
		
				var json = JSON.parse(body3);
				//console.log(json);
					
				for(var myKey in json) {
					if (verbose) console.log("Object " + myKey + ": "+json[myKey]['name']);
				
				
					var options4 = {  
						url: xpath + '/' + delObject + '/' + json[myKey]['name'],
						method: 'DELETE',
						headers: {
							'X-Auth-Token': xtoken
						}
					};
					
					
					if (doIt === 1) {
						request(options4, function(err4, res4, body4) {  
							console.log("Status Delete ",deleteCount, ": ", res4.statusCode);
							deleteCount ++;
							if (res4.statusCode != '204') if (verbose) console.log (body4);
					
						});
					}	
				
				}
				console.log('Nb of objects found : ',myKey);
				
			}			
			else {
				console.log('Error: Object "', delObject , '" does not exist.');
			}
		});
		
	});
});