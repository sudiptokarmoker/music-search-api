module.exports = {
    responseFormat: function (message = '', isSuccess = null, data = [], count = 0) {
        return { message, isSuccess, data, count };
    }
};