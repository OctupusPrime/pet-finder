import { ref } from 'vue'

export const useFetching = (callback) => {
    const isLoading = ref(false)
    const isError   = ref('')

    const fetching = async () => {
        try {
            isLoading.value = true
            await callback()
        } catch (e) {
            isError.value = e.message
        } finally {
            isLoading.value = false
        }
    }

    return [fetching, isLoading, isError]
}
 