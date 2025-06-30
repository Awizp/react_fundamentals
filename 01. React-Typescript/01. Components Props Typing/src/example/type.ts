type userType ={
    id:number;
    name:string;
    email:string;
    city:string;
}

type adminType= userType & {
    role:string;
    lastSeen: Date;
}

export {type userType, type adminType}