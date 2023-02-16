export type TBook = {
    _id: string,
    title: string,
    description: string,
    price: number,
    currency: number,
    reviews_count: number,
    rating: number,
}

export type TBookData = {
    data: TBook[]
}

export type TUser = {
    _id: string,
    first_name: string,
    last_name: string,
}

export type TUserData = {
    data: TUser[]
}