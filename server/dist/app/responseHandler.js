export const responseSuccess = (res, data, message = 'Success') => {
    res.status(200).json({
        type: 'Success',
        status: true,
        message: message,
        data: data,
    });
};
export const responseError = (res, err, message = 'Error') => {
    console.log(err);
    res.status(500).json({
        type: 'Error',
        status: false,
        error: err,
        message: message,
    });
};
export const responseBadRequest = (res, err, message = 'Bad Request') => {
    console.log(err);
    res.status(400).json({
        type: 'Bad Request',
        status: false,
        error: err,
        message: message
    });
};
