const connection = require ('../metodos/connection');
const metodos = require ('../metodos/metodos.js');

exports.Ping = (req, res) => {
    res.status(200).json({
        "resposta" : "Ping"
    })
}
exports.user_getAll = async (req, res) =>{
    let sql;
    try {
      sql = await connection.getConnection();
      let result = await metodos.get(connection);
      res.status(200).json(result);
      sql.release();
    } catch (error) {
        res.status(500).json({"error": error.message});
        if(sql){
            sql.release();
        }
    }
}

exports.user_add = async (req, res) =>{
    let sql;
    try {
        sql = await connection.getConnection();
        let result = await metodos.post(connection,req.body);
        res.status(200).json(result);
        sql.release();
    } catch (error) {
        res.status(500).json({"error": error.message});
        if(sql){
            sql.release();
        }
    }
}

exports.GetById =  (req, res) =>{

}


exports.user_update = async (req, res) =>{
    try {
      sql = await connection.getConnection();
      let result = await metodos.put(connection,req.body);
      res.status(200).json(result);
      sql.release();
    } catch (error) {
        res.status(500).json({"error": error.message});
        if(sql){
            sql.release();
        }
    }
}