/**
 * DAO for stock table
 */
const database = require("../Database")
class InnovationDAO {
	constructor() {
		this.DB = new database()
	}

	async getAllCards() {
		let query = `
		SELECT 
		*
		FROM
			Innovation
		ORDER BY age , color ASC;
		`;
		let result = await this.DB.query(query)
		return result;
	}

	async getCard(cardName) {
		let query = `SELECT * FROM Innovation WHERE name="${cardName}"`;
		let result = await this.DB.query(query)
		return result;
	}

	cleanup() {
		this.DB.disconnect();
	}
}
module.exports = new InnovationDAO()