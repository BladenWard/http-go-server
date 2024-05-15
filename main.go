package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/a-h/templ"
    "http-go-server/pages"
)

func main() {

    component := pages.Index()

    http.Handle("/", templ.Handler(component)) 

    fmt.Println("Server started at http://localhost:4000")
    log.Fatal(http.ListenAndServe(":4000", nil))
}
