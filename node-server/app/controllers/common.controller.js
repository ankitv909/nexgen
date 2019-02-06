exports.succesResponse = (req, res) => {

    const response ={
        "status": "success",
        "code": 200,
        "messages": null,
        "data": null
    };

    return res.status(200).send(response);
};