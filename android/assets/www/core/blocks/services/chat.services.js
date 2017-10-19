;(function () {
    'use strict';

    angular
        .module('services.chat', [])
        .service('chat', [
            'http',
            'url',
            function (http, url) {
                return {
                    getRoom: getRoom
                    // GetChats: GetChats,
                    // GetChatsMessages: GetChatsMessages,
                    // CreateNewChat: CreateNewChat,
                    // DeleteChat: DeleteChat,
                };

                function getRoom(data) {
                    return http.get(url.user.GetOneChatCourier, data)
                        .then(function (res) {
                            console.log(res);
                           return res;
                        });
                }
            }
    ])
})();

//     function GetChats(data) {
//         return http.get(url.user.GetChats, data)
//             .then(function (res) {
//                 return res;
//             });
//     }
//     function GetChatsMessages(data) {
//         return http.get(url.user.GetChatsMessages, data)
//             .then(function (res) {
//                 return res;
//             });
//     }
//     function CreateNewChat(data) {
//         return http.post(url.user.CreateNewChat, data)
//             .then(function (res) {
//                 return res;
//             });
//     }
//
//     function DeleteChat(data) {
//         return http.delete(url.user.DeleteChat, data)
//             .then(function (res) {
//                 return res;
//             });
//     }
// }


