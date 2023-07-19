declare namespace APIv1 {
    type APIv1Response<T> = {
        status: number
        statusText: string
        data: T
    }

    type Image = {
        aspectRatio: number
        url: string
    }

    type Product = {
        id: string
        name: string
        description: string
        image: Image
        price: number
        quantity: number
        disabled: boolean
    }
}

export default APIv1;
