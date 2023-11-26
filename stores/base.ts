export const useBaseStore = defineStore('page', () => {
    const config = useRuntimeConfig()
    const homeData = ref<IBaseData<IData>>()
    const articleData = ref<IBaseData<IData>>()
    const fetchHomeData = async () => {
        const isEnvApiUrl = config.public?.apiUrl === undefined
        const apiUrl = isEnvApiUrl ? config.public.apiUrl : "http://127.0.0.1:8000/"
        const { data } =
            await useFetch<IBaseData<IData>>(`${apiUrl}`)
        if (data.value) homeData.value = data.value
    }
    const fetchArticleData = async (articleId: string) => {
        const isEnvApiUrl = config.public?.apiUrl === undefined
        const apiUrl = isEnvApiUrl ? config.public.apiUrl : "http://127.0.0.1:8000/"
        const { data } =
            await useFetch<IBaseData<IData>>(`${apiUrl}articles/${articleId}`)
        if (data.value) articleData.value = data.value
    }
    return { homeData,
             articleData,
             fetchHomeData,
             fetchArticleData }
  })