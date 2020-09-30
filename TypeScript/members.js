"use strict";
exports.__esModule = true;
function displayMemberInformation(MemberObjectObj) {
    console.log("<h1> " + MemberObjectObj.First_Name + " " + MemberObjectObj.Last_Name + " " + MemberObjectObj.phone + "</h1>");
}
var myMember = { First_Name: "Priyanka", Last_Name: "Pola", phone: "5713759301" };
displayMemberInformation(myMember);
