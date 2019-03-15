﻿angular.module('ERP').controller('SubjectMasterController', SubjectMasterController);
function SubjectMasterController($scope, Service) {

    $scope.UserCredentialModel = {};
    $scope.ViewGetStandardInfoes = {};
    $scope.btnactive = 1;
    //Hide Show Div
    $scope.ShowHideSave = function () {
        $scope.MainDiv = true;
        $scope.btnUpdate = false;
        $scope.btnSave = true;
    }
    //code for Display all data
    $scope.Initialize = function () {
        debugger;
        $scope.UserCredentialModel.Status = $scope.btnactive;
        Service.Post("SubjectMaster/DisplayAllSubject", $scope.UserCredentialModel).then(function (result) {
            debugger;
            $scope.ViewGetStandardInfoes = result.data.ResultData;
            $scope.SubjectData = result.data.ResultData;


        })
    }

    //code for Add Section
    $scope.Add = function (SubjectName, SubjectCode) {
        debugger;
        var data = {

            SubjectName: SubjectName,
            SubjectCode: SubjectCode

        };
        if ($scope.form.$valid) {
            Service.Post("SubjectMaster/AddSubject", JSON.stringify(data)).then(function (response) {
                $scope.MainDiv = false;
                $scope.btnUpdate = false;
                $scope.btnSave = true;
                if (response.data.IsSucess) {
                    $scope.Initialize();
                    alert(response.data.ResultData);
                }
                else {


                    alert(response.data.ResultData);
                }

            });
        }
    }
    //code for Get Single Value
    $scope.SingleValue = function (SubjectId,SubjectCode, SubjectName) {
        debugger;
        $scope.btnUpdate = true;
        $scope.btnSave = false;
        $scope.MainDiv = true;
        var data = {
            SubjectId: SubjectId,
            SubjectCode: SubjectCode,
            SubjectName: SubjectName

        };

        Service.Post("SubjectMaster/GetSingleSubject", JSON.stringify(data)).then(function (result) {

            debugger;

            $scope.ViewGetStudentInfoes = result.data;

            $scope.SubjectCode = result.data.ResultData.SubjectCode;
            $scope.SubjectId = result.data.ResultData.SubjectID;
            $scope.SubjectName = result.data.ResultData.SubjectName;


            $scope.Initialize();
        })
    }

    //code for Update Section

    $scope.Update = function (SubjectId, SubjectCode, SubjectName) {
        debugger;
        var data = {
            SubjectId: SubjectId,
            SubjectCode: SubjectCode,
            SubjectName: SubjectName


        };
        if ($scope.form.$valid) {
            Service.Post("SubjectMaster/UpdateSingleSubject", JSON.stringify(data)).then(function (response) {
                $scope.btnUpdate = true;
                $scope.btnSave = false;
                $scope.MainDiv = false;
                if (response.data.IsSucess) {
                    debugger;


                    $scope.Initialize();

                    alert(response.data.ResultData);


                }
                else {
                    debugger;

                    alert(response.data.Message);
                }

            });
        }
    }



    $scope.Delete = function (SubjectId) {
        debugger;
        var data = {
            Status: $scope.btnactive,
            SubjectId: SubjectId
        };

        if (event.target.checked == false) {
            var confirm = window.confirm("Do you want to deactive the Section?");

        }
        else {
            var confirm = window.confirm("Do you want to active the Section?");
        }
        if (confirm == true) {
            Service.Post("SubjectMaster/DeleteSingleSubject", JSON.stringify(data)).then(function (response) {

                debugger;
                if (response.data)
                    $scope.Initialize();
                alert(response.data.ResultData);
            });
        }

        $scope.IsVisible = false;
        $scope.Initialize();

    }
    //Code For Clear
    $scope.Clear = function () {


        $scope.AddDiv = false;
        $scope.StandardName = null;
        $scope.IsVisible = false;

    }
}