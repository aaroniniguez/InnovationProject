/**
 * DAO for stock table
 */
const database = require("../Database")
class InnovationDAO {
	constructor() {
		this.DB = new database()
	}

	async getAllCards(icon, color, age, description) {
		//only allow valid icons
		let validIcons = ["leaf", "castle", "factory", "crown", "clock", "lightbulb", undefined]
		if(!validIcons.includes(icon))
			return [] 
		let search = ` WHERE 1 `;
		if(icon)
			search += ` AND ${icon} > 0 `;
		if(color)
			search += ` AND color="${color}" `;
		if(age)
			search += ` AND age="${age}" `;
		if(description)
			search += ` AND description LIKE "%${description}%"`;
		let query = `
			SELECT 
			*
			FROM
				Innovation
			${search}
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