const db = require('./dynamodb');

const header = async ( req, res) => {
	const body = req.body;
	console.log(req.params)
	let params = {
		TableName: 'employee_dev',
		Item: {
			'id': body.id,
			'name':body.name,
			'role': body.last_name,
		},
	};

    const {data} = await db.put(params, (err, data) => {
		if (err) {
			console.error("Unable to update the employee. Error JSON:", JSON.stringify(err, null, 2));
			return {error: err};
		}
		else {
			console.log("Update employee succeeded.", data);
			return data;
		}
	});
    console.log(data);
	return data;
};

const sumary = async ( req, res) => {
	const body = req.body;
	console.log(req.params)
	let params = {
		TableName: 'employee_dev',
		Item: {
			'id': body.id,
			'sumary':body.name
		},
	};

    const {data} = await db.put(params, (err, data) => {
		if (err) {
			console.error("Unable to update the employee. Error JSON:", JSON.stringify(err, null, 2));
			return {error: err};
		}
		else {
			console.log("Update employee succeeded.", data);
			return data;
		}
	});
    console.log(data);
	return data;
};

const experience = async ( req, res) => {
	const body = req.body;
	console.log(req.params)
	let params = {
		TableName: 'employee_dev',
		Item: {
			'id': body.id,
			'sumary':body.name
		},
	};

    const {data} = await db.put(params, (err, data) => {
		if (err) {
			console.error("Unable to update the employee. Error JSON:", JSON.stringify(err, null, 2));
			return {error: err};
		}
		else {
			console.log("Update employee succeeded.", data);
			return data;
		}
	});
    console.log(data);
	return data;
};

module.exports = {
	header,
    sumary,
    experience
};