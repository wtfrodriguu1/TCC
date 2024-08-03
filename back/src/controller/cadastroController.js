async function storeTask(request, response) {
    const params = Array(
        request.body.nome_empresa,
        request.body.descricao
    );

    const query = "INSERT INTO vagas(nome_empresa, descricao) VALUES(?,?)";

    connection.query(query, params, (err, results) => {
        if(results) {
            response
                .status(201)
                .json({
                    sucess: true, 
                    message: "Sucesso!",
                    data: results
                })
        } else{
            response
                .status(400)
                .json({
                    sucess: false,
                    message: "ops, deu problema!",
                    data: err
                })
        }
    })

}