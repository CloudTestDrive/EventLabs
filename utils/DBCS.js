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
	console.log('  -o JCS_instance_name : name of the JCS instance to delete, for example MyApp');
	console.log('  -a delete ALL applications on this ACCS instance');
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
var doAll = argv['a'];
var verbose = argv['v'];

var deleteCount = 0;

console.log('----------------------------------------');
console.log('Identity domain : ',instance);
console.log('User            : ',myUser);
console.log('Password        : ',myPass);
console.log('Application     : ',delObject);
console.log('Delete All flag : ', doAll);
console.log('Verbose flag    : ', verbose);
console.log('----------------------------------------');

const baseUrl = 'https://dbcs.emea.oraclecloud.com/paas/service/dbcs/api/v1.1/instances/';
var auth = 'Basic ' + new Buffer(myUser + ':' + myPass).toString('base64');

const options = {  
    url: baseUrl + instance,
    method: 'GET',
    headers: {
        'Authorization' : auth,
		'X-ID-TENANT-NAME' : instance
    }
};

request(options, function(err, res, body) {  
	console.log('Status Auth : ', res.statusCode);
	
	if (verbose) console.log('Full headers : ',res.headers);

	console.log('----------------------------------------');

	if (res.statusCode === 200) {
		var json = JSON.parse(body);
		if (verbose) console.log('Json body: ',json);
		var apps = json['services'];
		
		for(var myKey in apps) {
			console.log("Instance " + myKey);
			console.log("     Name          : " + apps[myKey]['service_name']);
			console.log("     Created by    : " + apps[myKey]['created_by']);
			console.log("     Creation date : " + apps[myKey]['creation_time']);
			console.log("     Status        : " + apps[myKey]['status']);
		
		}
		
		// Check if any applications running
		if (myKey === undefined) {
			console.log('No Applications on this instance');
			process.exit(0);
		}
	
		process.exit(0);
	
		// If doAll specified, delete all objects
		if (doAll) {
			console.log('Delete all Applications in the "Running" state');
			
			for(var myKey in apps) {
				if (apps[myKey]['status'] === 'RUNNING') {
					console.log(" Deleting App ", apps[myKey]['name']);
					
					var options2 = {
						url: baseUrl + instance + '/' + apps[myKey]['name'] + '/',
						method: 'DELETE',
						headers: {
							'Authorization' : auth,
							'X-ID-TENANT-NAME' : instance
						}
					};
					console.log(options2);

					request(options2, function(err2, res2, body2) {  
						console.log("Status Delete : ", res2.statusCode);
					});
					
				}
			}
		}
		
		// Check if an object has been provided
		else if (delObject != undefined) {

			var options2 = {  
			url: baseUrl + instance + '/' + delObject + '/',
			method: 'DELETE',
			headers: {
				'Authorization' : auth,
				'X-ID-TENANT-NAME' : instance
				}
			};
			
			request(options2, function(err2, res2, body2) {  
				console.log("Status Delete : ", res2.statusCode);
		
		
				var json2 = JSON.parse(body2);
				if (res2.statusCode != 202) console.log(json2);
			});
		}
	}
	else {
		console.log('Error returned, exiting.');
		if (verbose) console.log(body);
		process.exit(1);
	}

	
});