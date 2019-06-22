

exports.Ping = (req, res) => {
    res.status(200).json({
        "resposta" : "Ping"
    })
}