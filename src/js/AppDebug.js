class AppDebug {

    constructor() {
        this.pattern = "[LOG]:"
        this.mode = process.env.NODE_ENV.toString()
        this.log = [
            `${this.pattern} New Instance of AppDebug`
        ]
    }

    store(string) {
        if (this.mode === "development")
            this.log.push(`${this.pattern} ${string}`)
    }

    get() {
        return this.log
    }

    print() {
        console.log(JSON.stringify(this.log, null, 2))
    }

}

window.debug = new AppDebug()

window.debug.store("AppDebug loaded")