;(function () {
    'use strict';

    angular
        .module('services.chat_firebase', [])
        .service('chatFirebase', [
            'factoryChat',
            '$stateParams',
            '$q',
            '$localStorage',
            '$rootScope',
            'chat',
            // 'getMessages',
            // 'SetMyProfile',
            function (factoryChat,
                      $stateParams,
                      $q, $localStorage, $rootScope, chat
            //           ?          getMessage
            ) {
                var dbComents = firebase.database();
                var room_id;

                return {
                    newComment: newComment,
                    updateComment: updateComment,
                    removeListener: removeListener,
                    Test1: Test1

                };





                function Test1(id) {
                    chat.getRoom(id)
                        .then(function (res) {
                            room_id = res[0].room_id;

                        });
                }

                console.log(room_id);

                function newComment(message, room_id) {
                    // vm.room_id = getMessages[0].room_id;
                    var commentDb = factoryChat.firebaseApp.database();
                    var comment = commentDb.ref('dialogs/' + room_id + '/').push();
                    comment.set({
                        message: message.text,
                        user_id: $localStorage.id,
                        user_name: $localStorage.username,
                        time: moment().format('MMM DD YYYY, HH:mm:ss')
                        // avatar: SetMyProfile.data.avatar,
                    });
                    console.log('wdada', message.text);
                }

                /**
                 * получение messages от firebase
                 */

                function updateComment(room_id) {
                    dbComents.ref('dialogs/'+  room_id + '/').on('value', function (snapshot) {
                        $rootScope.$broadcast('comments_load', {
                            comments: snapshot.val()
                        });
                        console.log(room_id);
                    });
                }
                function removeListener(room_id) {
                    dbComents.ref("dialogs/" + room_id + '/').off();
                }
            }
        ]);
})();