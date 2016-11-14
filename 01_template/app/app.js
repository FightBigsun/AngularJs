//1.创建一个模块
//创建模块的函数
//参数1：是模块的名称
//参数2：是模块所要依赖的模块

angular.module('hello',[]);

//定义controller的方法:
//1.取得controller所属的module，
//  用angular.module(moduleName)==>angular.module
//  传一个参数取得模块，传俩个参数是定义模块
//2. 用module的方法controller来定义一个controller
angular
    .module('hello')
    .controller('NameController',function ($scope) {//参数名字固定
      $scope.phones = [{
        name:'iphone7',
        desc:'不会轻易爆炸'
      },{
        name:'Samsung note7',
        desc:'不让拿上飞机'
      }]
    });
