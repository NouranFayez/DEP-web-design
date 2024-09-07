var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var x = "text";
console.log(x);
/// string , number , boolean , array , object , tuble
var isGraduated = true;
// console.log(isGraduated)
//   let arr:string[] = []
var arr = [];
arr.push(10);
var user = {
    address: "bjg"
};
//   console.log(user.address)
var tupArr = ['str', 10];
var student = {
    age: 10,
    address: "gdd",
};
// student.isGraduated = true
var r = "jghfg";
function getName(firstName, LastNAme, txt) {
    return "".concat(firstName, " ").concat(LastNAme);
}
// console.log(getName('ahmed' , 'mohamed'))
function getNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    console.log(nums);
}
getNumbers(3, 10, 1000);
var User = /** @class */ (function () {
    function User(fistName, age, lastName) {
        this.firstName = fistName;
        this.age = age;
        this.lastName = lastName;
    }
    User.prototype.getFullName = function () {
        return "my name is ".concat(this.firstName, " ").concat(this.lastName);
    };
    return User;
}());
var userInfo = /** @class */ (function (_super) {
    __extends(userInfo, _super);
    function userInfo(id, firstName, age, lastName, date, ssn) {
        var _this = _super.call(this, firstName, age, lastName) || this;
        _this.Id = id;
        _this.date = date;
        _this.SSN = ssn;
        return _this;
    }
    userInfo.prototype.getFullName = function () {
        return _super.prototype.getFullName.call(this) + " inside child class";
    };
    return userInfo;
}(User));
var u = new User("ahmed", 10, 'mohamed');
var h = new User("mohamed", 20, 'zain');
// console.log(u)
// console.log(h)
// console.log(u.getFullName())
var user2 = new userInfo(102, 'nouran', 30, 'fayez', new Date(), "ggf");
var user3 = new userInfo(102, 'nouran', 30, 'fayez', new Date(), "hgyhg");
console.log(user2);
console.log(user3);
// console.log(user2.date)
// console.log(user2.SSN)
// console.log(user2.getFullName())
