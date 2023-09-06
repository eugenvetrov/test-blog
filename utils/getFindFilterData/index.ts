export const getFindData = (data: IBaseData<IData> | undefined, type: string) => {
    return data?.body.find((item: IBodyData<IData>) => item.type == type)
}
export const getFilterData = (data: IBaseData<IData> | undefined, type: string) => {
    const resultData = data?.body.filter((item: IBodyData<IData>) => item.type == type)
    if (resultData) return resultData
    return []
}