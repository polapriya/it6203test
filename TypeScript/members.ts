function displayMemberInformation (MemberObjectObj: MemberObject) {
    console.log(`<h1> ${ MemberObjectObj.First_Name} ${MemberObjectObj.Last_Name} ${MemberObjectObj.phone}</h1>`);
}

export interface MemberObject {
    First_Name: string;
    Last_Name: string;
    phone: string;
}
let myMember : MemberObject = { First_Name: "Priyanka", Last_Name: "Pola", phone: "5713759301"};

displayMemberInformation (myMember);
