declare namespace APIv1 {
    type APIv1Response<T> = {
        status: number
        statusText: string
        data: T
    }

    type Product = {
        id: string
        name: string
        description: string
        imageURL: string
        price: number
        quantity: number
        disabled: boolean
    }
}

export default APIv1;
