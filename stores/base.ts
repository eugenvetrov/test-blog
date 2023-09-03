export const useBaseStore = defineStore('page', () => {
    const config = useRuntimeConfig()
    const homeData = ref<IBaseData<IData>>()
    const articleData = ref<IBaseData<IData>>()
    const fetchHomeData = async () => {
        const apiUrl = config.public.apiUrl
        const { data } =
            await useFetch<IBaseData<IData>>(`${apiUrl}page/?path=/`)
        if (data.value) homeData.value = data.value
    }
    const fetchArticleData = async (articleId: string) => {
        const apiUrl = config.public.apiUrl
        const { data } =
            await useFetch<IBaseData<IData>>(`${apiUrl}page?path=/article-${articleId}`)
        if (data.value) articleData.value = data.value
    }
    return { homeData,
             articleData,
             fetchHomeData,
             fetchArticleData }
  })