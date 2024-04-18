const path = require("path");
var utils = require(path.join(__dirname, '..', 'utils'));

module.exports = function (defaultFuncs, api, ctx) {
    return function deleteThread(threadOrThreads, callback) {
        var resolveFunc = function () {};
        var rejectFunc = function () {};
        var returnPromise = new Promise(function (resolve, reject) {
            resolveFunc = resolve;
            rejectFunc = reject;
        });
        if (!callback) {
            callback = function (err) {
                if (err) {
                    return rejectFunc(err);
                }
                resolveFunc();
            };
        }

        var form = {
            client: "mercury",
        };

        if (utils.getType(threadOrThreads) !== "Array") {
            threadOrThreads = [threadOrThreads];
        }

        for (var i = 0; i < threadOrThreads.length; i++) {
            form["ids[" + i + "]"] = threadOrThreads[i];
        }

        defaultFuncs
            .post("https://www.facebook.com/ajax/mercury/delete_thread.php", ctx.jar, form)
            .then(utils.parseAndCheckLogin(ctx, defaultFuncs))
            .then(function (resData) {
                if (resData.error) {
                    throw resData;
                }

                return callback();
            })
            .catch(function (err) {
                return callback(err);
            });

        return returnPromise;
    };
};
