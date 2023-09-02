export const useHomePageStore = defineStore('home-page', () => {
    const config = useRuntimeConfig()
    const homeData = ref()
    const fetchHomeData = async () => {
        const apiUrl = config.public.apiUrl
        const { data } =
            await useFetch<IBaseData<IData>>(`${apiUrl}page?path=/`)
        if (data.value) homeData.value = data.value
    }
    return { homeData, fetchHomeData }
  })