declare function require(name:string);
const db = require('./dynamodb');
const uuid = require('uuid/v4');

export const Cv = async (req, res) => {
	const body = req.body;
	const params = {
		TableName: 'employee_dev',
		Item: {
			'id':uuid(),
			'name': body.name,
			'role': body.role,
			'sumary':body.sumary,
			'experience':body.experience,
			'education': body.education,
			'oskills': body.oskills,
			'tskills': body.tskills
		}
	}

	const data = await db.put(params, (err) => {
		if (err) {
			console.error("Unable to create the CV. Error JSON:", JSON.stringify(err, null, 2));
			return {error: err};
		}
		else {
			console.log(data);
			return data;
		}
	});
}

export const header = async ( req, res) => {
	const body = req.body;
	const params = {
		TableName: 'employee_dev',
		Item: {
			'id': body.id,
			'name':body.name,
			'role': body.last_name
		},
	};

    const {data} = await db.put(params, (err) => {
		if (err) {
			console.error("Unable to update the employee. Error JSON:", JSON.stringify(err, null, 2));
			return {error: err};
		}
		else {
			console.log("Update employee succeeded.", data);
			return data;
		}
	});
	};

export const sumary = async ( req, res) => {
	const body = req.body;
	const params = {
		TableName: 'employee_dev',
		Item: {
			'id': body.id,
			'sumary':body.sumary
		},
	};

    const {data} = await db.put(params, (err) => {
		if (err) {
			console.error("Unable to update the employee. Error JSON:", JSON.stringify(err, null, 2));
			return {error: err};
		}
		else {
			console.log("Update employee succeeded.", data);
			return data;
		}
	});
};

export const experience = async ( req, res) => {
	const body = req.body;
	const params = {
		TableName: 'employee_dev',
		Item: {
			'id': body.id,
			'experience':body.experience
		},
	};

    const {data} = await db.put(params, (err) => {
		if (err) {
			console.error("Unable to update the employee. Error JSON:", JSON.stringify(err, null, 2));
			return {error: err};
		}
		else {
			console.log("Update employee succeeded.", data);
			return data;
		}
	});
};