import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App/App"
import TimeAgo from "javascript-time-ago"

import es from "javascript-time-ago/locale/es.json"

TimeAgo.addDefaultLocale(es)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
