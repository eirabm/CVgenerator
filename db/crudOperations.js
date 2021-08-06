const db = require('./dynamodb');

let createParams = {
	Employee: {},
	ReturnValues: "ALL_OLD"
};

let updateParams = {
	Key: {},
	ReturnValues: "ALL_NEW"
};

let getParams = {
	ExpressionAttributeNames: {},
	ProjectionExpression: "",
	ExpressionAttributeValues: {},
	FilterExpression: ""
};

let deleteParams = {
	Key: {}
};

let findParams = {
	Key: {},
	//ProjectionExpression: 'id, password',
};

const ifExists = ( object, key, index, prefix = "") => {
	const k = prefix + key.slice(0, index);

	if ( !(k in object) ) {
		if ( prefix === "" ) return k;
		return k.slice(1, key.length);
	}
	else {	
		return ifExists(object, key, index + 1, prefix);
	}
};

const cleanGet = () => {
	delete getParams['ExpressionAttributeNames'];
	delete getParams['ProjectionExpression'];
	delete getParams['ExpressionAttributeValues'];
	delete getParams['FilterExpression'];
};

const upsert = async (req, res) => {
	// createParams.TableName = tablename;
	// for (let [key, value] of Object.entries(employee)) 
	// 	createParams.employee[key] = value;
	const body = req.body;
	const createParams = {
		TableName: 'employee_dev',
		Item :{
			id: body.id,
			name: body.name,
			last_name: body.last_name
		}
	}

	const data = await db.put(createParams, (err) => {
		if (err) {
			console.error("Unable to create the employee. Error JSON:", JSON.stringify(err, null, 2));
			return {error: err};
		}
		else {
			console.log(data);
			return data;
		}
	});
};

const Get = async ( tablename = 'employee_dev', cols = null, filter = null ) => {
	cleanGet();
	const Tb = {TableName: 'employee_dev'};
	const {data} = await db.scan(Tb, (err, data) => {
		if (err) {
			console.error("Unable to get the employee. Error JSON:", JSON.stringify(err, null, 2));
			return {error: err};
		}
		else {
			console.log(data);
			return data;
		}
	});
	return data;
};

const update = async ( req, res) => {
	// updateParams.TableName = tablename;
	// updateParams.UpdateExpression = 'SET';
	// updateParams.ExpressionAttributeNames = {};
	// updateParams.ExpressionAttributeValues = {};

	// keys.forEach( key => updateParams.Key[key] = employee[key] );

	// for (let [key, value] of Object.entries(employee)) {
	// 	if( !(keys.includes(key)) ){
	// 		const k = ifExists(updateParams.ExpressionAttributeNames, key.toUpperCase(), 1, "#");
	// 		const keyUp = "#" + k;
	// 		const keyLow = ":" + k.toLowerCase();
	
	// 		updateParams.ExpressionAttributeNames[keyUp] = key;
	// 		updateParams.ExpressionAttributeValues[keyLow] = value;
	// 		updateParams.UpdateExpression += " " + keyUp + " = " + keyLow + ",";
	// 	}
	// }
	// updateParams.UpdateExpression = updateParams.UpdateExpression.slice(0, -1);

	const body = req.body;
	console.log(req.params)
	let params = {
		TableName: 'employee_dev',
		Item: {
			'id': body.id,
			'name':body.name,
			'last_name': body.last_name,
			'is_new':'yes'
		},
	};

	const data = await db.put(params, (err, data) => {
		if (err) {
			console.error("Unable to update the employee. Error JSON:", JSON.stringify(err, null, 2));
			return {error: err};
		}
		else {
			console.log("Update employee succeeded.", data);
			return data;
		}
	});
	return data;
};

const eliminate = async ( req, res ) => {
	// console.log('KEY: ',key);
	// deleteParams.TableName = tablename;
	// deleteParams.Key = key;

	// if ( conditions !== null ) {
	// 	deleteParams.ExpressionAttributeValues = {};
	// 	deleteParams.ConditionExpression = "";
	// 	let i = 0;
	// 	conditions.forEach( condition => {
	// 		i++;
	// 		deleteParams.ExpressionAttributeValues[':val' + i] = condition.value;
	// 		deleteParams.ConditionExpression += `${condition.col} ${conditions.operation} :val${i}, `;
	// 	});
	// 	deleteParams.ConditionExpression = deleteParams.ConditionExpression.slice(0, -2);
	// }

	const deleteParams = {
		TableName:'employee_dev',
		Key:{
			id:req.params.id,
			last_name:req.params.last_name
		}
	}

	const data = await db.delete(deleteParams, (err, data) => {
		if (err) {
			console.error("Unable to delete the item. Error JSON:", JSON.stringify(err, null, 2));
			return {error: err};
		}
		else {
			console.log("Delete Item succeeded."+data);
			return data;
		}
	});
	return data;
};

const find = async (req, res) => {
	// findParams.Key = keys;
	// findParams.TableName = tablename;

	const findParams = {
		TableName:'employee_dev',
		Key:{
			id:req.params.id,
			last_name:'Martinez'
		}
	}

	const data = await db.get(findParams, (err, data) => {
		if (err) {
			console.error("Unable to find the item. Error JSON:", JSON.stringify(err, null, 2));
			return {error: err};
		}
		else {
			console.log(data);
			return data;
		}
	});
	return data;
};

module.exports = {
	upsert,
	update,
	Get,
	eliminate,
	find
};