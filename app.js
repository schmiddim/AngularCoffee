"use strict";
(function() {
	var app = angular.module('coffee', []);


	app.controller('CoffeeController',['$scope', '$log', function($scope, $log){

		this.timeRanges = [
						{name:'pro Woche', dayValue:7} 
						,{ name:'pro Tag', dayValue:1}
						];

		this.currentTimeRange = this.timeRanges[0];
		this.numberOfCapsulesPerWeek;

		this.showStats=false;


		this.pricePerCapsule= 0.249;
		this.weightPerCapsule =5;

		this.numberOfDaysInYear=364;



		this.calculatePricePerKg= function(){
			return (1000/ this.weightPerCapsule) * this.pricePerCapsule ;
		};

		this.calculatePricePerYear= function(){

			return (this.pricePerCapsule * (this.numberOfCapsulesPerWeek/ this.currentTimeRange.dayValue   ) * this.numberOfDaysInYear);
		}


		this.pricePerYear = this.calculatePricePerYear();
		this.pricePerKg=this.calculatePricePerKg();

		this.calculate = function(){
console.log(this.currentTimeRange.dayValue);
			if(isNaN(this.numberOfCapsulesPerWeek))
				this.numberOfCapsulesPerWeek=10;
			this.pricePerYear= this.calculatePricePerYear();
			this.showStats=true;
		}



	}]);
})();

