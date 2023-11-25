class user{
    constructor(fName,lName,email,token,address=''){
        this.firstName = fName;
        this.lastName = lName;
        this.email=email;
        this.address =address;
        this.token=token;
    }

}

export default user;