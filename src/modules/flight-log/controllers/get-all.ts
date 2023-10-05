import '@core/declarations'
import { Request, Response } from 'express'
import _ from 'lodash'
import RegexQueryGeneratorHelper from '@helpers/regex-query-generator.helper'
import PaginationHelper from '@helpers/pagination.helper'
import requestValidator from '@helpers/request-validator.helper'
import { GetAllDTO } from '../dto'
import constant from '@core/constants'

export default async function GetLogs(req: Request, res: Response) {
	const {
		startIndex,
		itemsPerPage,
		trace_id,
		name,
		company_id,
		source,
		source_from,
		cart_id,
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
		source_from?: string
		type?: string
	} = _.pickBy(
		{
			name,
			source,
			source_from,
			trace_id,
			company_id,
			cart_id,
			type,
		},
		_.identity
	)
	const query = await RegexQueryGeneratorHelper.Generate({
		inputs: {
			searchFields,
			excludeRegex: constant.FLIGHT.EXCLUDE_FIELDS,
		},
	})
	const result = await new PaginationHelper(App.Models.FlightLog).paginate({
		query,
		projection: {
			name: 1,
			source: 1,
			source_from: 1,
			trace_id: 1,
			company_id: 1,
			cart_id: 1,
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
