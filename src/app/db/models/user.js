var User = require(__dirname + '/../../db/schemas/users').User;


exports.addUser = function (obj) {
    try {
        var user = new User({
                username: obj.username,
                firstName: obj.firstName,
                lastName: obj.lastName,
                email: obj.email,
                password: obj.password,
                phone: obj.phone
            }
        );

        return user.save(function (err, user) {
            if (err) {
                console.error(err);
                return 0
            }
            return user;
        })
    } catch (err) {
        console.log(err)
    }

};

exports.updateUser = function (params, userId) {
    try {
        return User.findByIdAndUpdate(userId, {
            $set: {
                username: obj.username,
                firstName: obj.firstName,
                lastName: obj.lastName,
                email: obj.email,
                password: obj.password,
                phone: obj.phone
            }
        }).exec(function (err, res) {
            if (err) {
                console.log(err);
                return err;
            }
            // console.log(res);
            return res;
        })
    } catch (err) {
        console.log(err)
    }

};