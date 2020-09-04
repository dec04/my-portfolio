import _ from "lodash"
import "bootstrap/dist/css/bootstrap.min.css"

import("bootstrap").then(() => {
    debug.store(`Bootstrap loaded, ${_.random(0, 100, true)}`)
})