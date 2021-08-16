import db from './dynamodb';
import {uuid} from 'uuidv4';
import { Request, Response} from 'express';
import { PutItemOutput, } from 'aws-sdk/clients/dynamodb';
import { AWSError } from 'aws-sdk';

interface CV{
	id:string;
	name:string;
	role:string;
	experience:Array<string>;
	education:Array<string>;
	oskills:string;
	tskills:Array<string>;
}
export const createCv = async (req: Request, res: Response): Promise<any> => {
	try {
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
		},
		ReturnValues:""
	}
	const data = await db.put(params);
	return data;
	} catch (error) {
		return(error);
		
	}
	
}

export const header = async ( req: Request, res: Response) => {
	const body = req.body;
	const params = {
		TableName: 'employee_dev',
		Item: {
			'id': body.id,
			'name':body.name,
			'role': body.last_name
		},
	};

    const data: {} = await db.put(params, (err) => {
		if (err) {
			return {error: err};
		}
		else {
			return res.status(200).json({data});
		}
	});
};

export const sumary = async ( req: Request, res: Response) => {
	const body = req.body;
	const params = {
		TableName: 'employee_dev',
		Item: {
			'id': body.id,
			'sumary':body.sumary
		},
	};

    const data: {} = await db.put(params, (err) => {
		if (err) {
			return {error: err};
		}
		else {
			return res.status(200).json({data});
		}
	});
};

export const experience = async ( req: Request, res: Response) => {
	const body = req.body;
	const params = {
		TableName: 'employee_dev',
		Item: {
			'id': body.id,
			'experience':body.experience
		},
	};

    const data: {} = await db.put(params, (err) => {
		if (err) {
			return {error: err};
		}
		else {
			return res.status(200).json({data});
		}
	});
};