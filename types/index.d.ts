declare global {
    interface IBaseData <Data> {
        page_type: string,
        meta: IMetaData
        body: Array<IBodyData<Data>>
    }

    interface IMetaData extends ITitle {
        description: string,
        slug: string
    }

    interface IBodyData <Data> {
        type: string,
        id: string,
        data: Data | string | Array
    }

    interface IData extends ITitle, IImage {
        reading_time?: number,
        views_count?: number,
        short_description?: string,
        src?: string,
        caption?: string,
        articles?: Array<IArticle>
    }

    interface IArticle extends IImage {
        title: string,
        link: string
    }

    interface ITitle {
        title?: string
    }

    interface IImage {
        image: string
    }
}
  
export {};