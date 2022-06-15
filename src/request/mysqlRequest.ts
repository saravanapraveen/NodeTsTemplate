import connection from '../config/db.config'

const mysqlRequest = (query: string) => {
	return new Promise((resolve, reject) => {
		connection.query(query, (error, rows) => {
			if(error) reject(error)

			resolve(rows)
		})
	})
}

export default mysqlRequest