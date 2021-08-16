import db from './dynamodb';
import {uuid} from 'uuidv4';
import { Request, Response} from 'express';

// interface CV{
// 	id:string;
// 	name:string;
// 	last_name:string;
// 	role:string;
// 	experience:Array<string>;
// 	education:Array<string>;
// 	oskills:string;
// 	tskills:Array<string>;
// }

export const createCv = async (req: Request, res: Response): Promise<void> => {
		const body = req.body;
		const params = {
			TableName: 'employee_dev',
			Item: {
				'id':uuid(),
				'name': body.name,
				'last_name':body.last_name,
				'role': body.role,
				'sumary':body.sumary,
				'experience':body.experience,
				'education': body.education,
				'oskills': body.oskills,
				'tskills': body.tskills
			}
		}

		await db.put(params, (err) => {
			if (err){
				res.status(400).json(err);
			}
			else {
				res.status(200).json({Message:"Objeto Creado"});
			}
		});
}

export const CvAll = async (res: Response): Promise<void> => {
	const Tb = {TableName: 'employee_dev'};
	await db.scan(Tb, (err, data) => {
		if (err) {
			res.status(400).json(err);
		}
		else {
			res.status(200).json(data.Items);
		}
	});
}

// export const header = async ( req: Request, res: Response) => {
// 	const body = req.body;
// 	const params = {
// 		TableName: 'employee_dev',
// 		Item: {
// 			'id': body.id,
// 			'name':body.name,
// 			'role': body.last_name
// 		},
// 	};

//     const data: {} = await db.put(params, (err) => {
// 		if (err) {
// 			return {error: err};
// 		}
// 		else {
// 			return res.status(200).json({data});
// 		}
// 	});
// };

// export const sumary = async ( req: Request, res: Response) => {
// 	const body = req.body;
// 	const params = {
// 		TableName: 'employee_dev',
// 		Item: {
// 			'id': body.id,
// 			'sumary':body.sumary
// 		},
// 	};

//     const data: {} = await db.put(params, (err) => {
// 		if (err) {
// 			return {error: err};
// 		}
// 		else {
// 			return res.status(200).json({data});
// 		}
// 	});
// };

// export const experience = async ( req: Request, res: Response) => {
// 	const body = req.body;
// 	const params = {
// 		TableName: 'employee_dev',
// 		Item: {
// 			'id': body.id,
// 			'experience':body.experience
// 		},
// 	};

//     const data: {} = await db.put(params, (err) => {
// 		if (err) {
// 			return {error: err};
// 		}
// 		else {
// 			return res.status(200).json({data});
// 		}
// 	});
// };