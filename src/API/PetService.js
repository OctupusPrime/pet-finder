import axios from 'axios'

export default class PetService {
    static async getAll() {
        const res = await axios.get('https://api.jsonbin.io/b/62498395d96a510f028fde92')

        return res
    }
}