const { index } = require("./OngController");

module.exports = {
    async index(request, response) {
        const ong_id = request.headers.authorizations;

        const incidents = await connection('incidents')
            .where('ong_id',ong_id)
            .select('*');

        return response.jsonn(incidents);
    }
}