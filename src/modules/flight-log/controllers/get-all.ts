import '@core/declarations'
import { Request, Response } from 'express'
import _ from 'lodash'
import RegexQueryGeneratorHelper from '@helpers/regex-query-generator.helper'
import PaginationHelper from '@helpers/pagination.helper'
import requestValidator from '@helpers/request-validator.helper'
import { GetAllDTO } from '../dto'

export default async function GetLogs(req: Request, res: Response) {
	const {
		startIndex,
		itemsPerPage,
		traceId,
		name,
		companyId,
		source,
		sourceFrom,
		cartId,
		type,
	} = req.query

    const error = requestValidator(GetAllDTO, req.query)

    if(error) {
        return res.unprocessableEntity({ error })
    }

	const [_startIndex, _itemsPerPage] = [+startIndex, +itemsPerPage]

	const searchFields: {
		name?: string
		source?: string
		sourceFrom?: string
		type?: string
	} = _.pickBy(
		{
			name,
			source,
			sourceFrom,
			traceId,
			companyId,
			cartId,
			type,
		},
		_.identity
	)
	const query = await RegexQueryGeneratorHelper.Generate({
		inputs: {
			searchFields,
			excludeRegex: ['traceId', 'companyId', 'cartId', 'type'],
		},
	})
	const result = await new PaginationHelper(App.Models.FlightLog).paginate({
		query,
		projection: {
			name: 1,
			source: 1,
			sourceFrom: 1,
			traceId: 1,
			companyId: 1,
			cartId: 1,
			type: 1,
			response: 1,
			request: 1,
			createdAt: 1,
		},
		startIndex: _startIndex,
		itemsPerPage: _itemsPerPage,
	})
	return res.success({
		message: App.Message.Success.FlightLogFetched(),
		...result,
	})
}
