﻿var app = angular.module('ERP').controller('BoardController', BoardController);

function BoardController($scope, Service) {

    var form = $(".student-admission-wrapper");
    $scope.ViewGetStudentInfoes = {};
    $scope.UserCredentialModel = {};
    $scope.btnactive = 1;


    $scope.Initialize = function () {
        debugger;
        $scope.UserCredentialModel.Status = $scope.btnactive;
        Service.Post("Board/GetBoardInfo", $scope.UserCredentialModel).then(function (result) {
            debugger;
            $scope.ViewGetStudentInfoes = result.data;
            $scope.Board = result.data;
            //console.log(result.data);

        })
    }

    $scope.ShowHide = function (BoardID) {
        debugger;
        $scope.btnUpdate = true;
        $scope.btnSave = false;
        $scope.IsVisible = true;
        var data = {

            BoardID: BoardID

        };

        Service.Post("Board/GetSingleBoardInfo", JSON.stringify(data)).then(function (result) {

            debugger;

            $scope.ViewGetStudentInfoes = result.data;

            $scope.BoardName = result.data.ResultData.BoardName;
            $scope.BoardID = result.data.ResultData.BoardID;
            // $scope.Students = result.data.ResultData;

            $scope.Initialize();
        })
    }


    $scope.ShowHideSave = function () {
        debugger;
        $scope.btnUpdate = false;
        $scope.btnSave = true;
        $scope.IsVisible = true;
    }


    $scope.Clear = function () {

        $scope.BoardName = null;
        $scope.ModuleId = null;
        $scope.IsVisible = false;
        // $scope.Initialize();
    }
    $scope.Add = function (BoardID, BoardName) {
        var data = {
            BoardID: BoardID,
            BoardName: BoardName

        };
        if ($scope.form.$valid) {
            Service.Post("Board/AddBoard", JSON.stringify(data)).then(function (response) {

                if (response.data.IsSucess) {
                    debugger;



                    //CustomizeApp.UpdateMessage();
                    $scope.Clear();
                    $scope.IsVisible = false;
                    $scope.Initialize();
                    alert(response.data.ResultData);
                    // window.location = "./ParentGrievance"

                    //alert(result.data);

                }
                else {
                    debugger;
                    //ShowMessage(0, response.data.Message);
                    alert(response.data.Message);
                    //$scope.clear();
                    //window.location = "./PostGrievance"
                }

            });
        }
    }

    $scope.AddUpdate = function (BoardID, BoardName) {
        var data = {
            BoardID: BoardID,
            BoardName: BoardName
           
        };
        if ($scope.form.$valid) {
            Service.Post("Board/UpdateBoard", JSON.stringify(data)).then(function (response) {

                if (response.data.IsSucess) {
                    debugger;



                    //CustomizeApp.UpdateMessage();
                    $scope.Clear();
                    $scope.IsVisible = false;
                    $scope.Initialize();
                    alert(response.data.ResultData);
                    // window.location = "./ParentGrievance"

                    //alert(result.data);

                }
                else {
                    debugger;
                    //ShowMessage(0, response.data.Message);
                    alert(response.data.Message);
                    //$scope.clear();
                    //window.location = "./PostGrievance"
                }

            });
        }
    }


    $scope.Delete = function (BoardID) {
        debugger;
        var data = {

            BoardID: BoardID
        };

        if (event.target.checked == false) {
            var confirm = window.confirm("Do you want to deactive the board?");

        }
        else {
            var confirm = window.confirm("Do you want to active the board?");
        }
        if (confirm == true) {
            Service.Post("Board/DeleteBoard", JSON.stringify(data)).then(function (response) {

                debugger;
                if (response.data)
                    $scope.Initialize();
                alert(response.data.ResultData);
            });
        }
        $scope.Clear();
        $scope.IsVisible = false;
        $scope.Initialize();

    }

}
