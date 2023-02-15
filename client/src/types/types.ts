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