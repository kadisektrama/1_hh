export class Auth {
    constructor(data) {
        this.models = {

        }
    }

    async login() {
        const data = this.models.roles.get()

        return data
    }

    async authenticate() {
        const data = this.models.roles.getById()

        return data
    }
}