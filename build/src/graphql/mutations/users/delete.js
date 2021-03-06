'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _users = require('../../../schemas/users');

var _users2 = _interopRequireDefault(_users);

var _users3 = require('../../types/users');

var _graphql = require('graphql');

var GRAPHQL = _interopRequireWildcard(_graphql);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

    type: _users3.UserType,
    args: {
        id: {
            name: 'userID',
            type: new GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var deletedUser = _users2.default.findByIdAndDelete(params.id).exec();
        if (!deletedUser) throw Error("Error on Delete");
        return deletedUser;
    }
};