;(function () {
        'use strict';

        angular
            .module('app')
            .controller('Chat_user', ChatUser);

        ChatUser.$inject = ['$ionicScrollDelegate', '$stateParams', '$localStorage', 'chatFirebase', '$rootScope', '$scope', 'chat', '$timeout'
            // 'getMessages'
        ];

        function ChatUser($ionicScrollDelegate, $stateParams, $localStorage, chatFirebase, $rootScope, $scope, chat, $timeout
                          // getMessages
        ) {
            var vm = this;
            //
            // vm.Test1 = Test1;
            // var room_id;
            // // console.log(vm.room_id);
            // // chatFirebase.Test1({id: $stateParams.user_id}).then(function (res) {
            // //     //     vm.room_id = res[0].room_id;
            // //     });
            // Test1();
            // function Test1() {
            //     chat.getRoom($stateParams.user_id)
            //         .then(function (res) {
            //             room_id = res[0].room_id;
            //             console.log(room_id);
            //         });
            // }
            vm.room_id = $stateParams.roomId;
            vm.numberPhone = $stateParams.numberPhone;
            chatFirebase.updateComment(vm.room_id);

            moment.locale('ru');
            // vm.time = vm.messageRes.time.fromNow();
            // console.log(vm.time);
            vm.message = {
                message: null,
                text: null,
                user_id: null,
                avatar: null
            };


             $rootScope.$on('comments_load', function (event, data) {
                // if ($scope.$$phase != '$apply' && $scope.$$phase != '$digest') {
                //     $scope.$apply();
                // }
                $timeout(function () {
                    vm.messageRes = data.comments;
                    // chatFirebase.updateComment(vm.room_id);
                    scrollBottom();
                });
            });

            chatFirebase.updateComment(vm.room_id);

            $scope.$on('$destroy', function () {
                listener();
                chatFirebase.removeListener(vm.room_id);
            });


            vm.my_id = $localStorage.id;
            vm.senderName = $stateParams.senderName;
            // vm.message.date = parseInt((new Date(vm.selectedDate).getTime() / 1000).toFixed(0));
            // vm.my_id =
            // $rootScope.$on('comments_load', function (event, data) {
            //     debugger
            //     vm.messageRes = data.comments;
            //     console.log(vm.messageRes);
            //
            //     scrollBottom();
            // });

            vm.sendMessage = sendMessage;
            vm.scrollBottom = scrollBottom;

            scrollBottom();

            /**
             * отправка vm.message.text
             * и promise от firebase
             */

            function sendMessage() {
                chatFirebase.newComment(vm.message, vm.room_id);
                vm.message.text = null;
            }

            function scrollBottom() {
                $ionicScrollDelegate.scrollBottom();
            }
        }
    })();