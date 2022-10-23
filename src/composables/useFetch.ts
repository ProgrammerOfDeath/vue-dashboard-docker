import { ref } from 'vue'

export default async function useFetch(url: string, method = 'GET') {
  const fetchHeader = {
    method: method,
    headers: {
      Authorization: 'Bearer ' + process.env.AUTH_TOKEN,
    },
  }

  const data = ref()
  const error = ref()

  fetch(url, fetchHeader)
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err))

  return { data, error }
}
