
export type userSchema={
	name:string,
	email:string,
	country:string,
	age:string,
	gender:string
}

export type questionsSchema={
    id:number,
    question:string,
    options:Array<string>,
    selected:string
}