interface IUser {
    email: string
    name: string
    password: string
}

interface IAuthenticatedUser {
    email: string
    name: string
}

interface ICategory {
    _id: string
    name: string
    user: IUser | string
    isEditable: boolean
    color: IColor
    icon: IIcon
}

export interface IColor {
    name: string
    id: string
    code: string
}

export interface IIcon {
    name: string
    id: string
    symbol: string
}

interface ICategoryRequest {
    name: string
    color: IColor
    icon: IIcon
}