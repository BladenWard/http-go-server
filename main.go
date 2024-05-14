package main

import (
	// "sorting/algos"
	// "math/rand"
	"fmt"
	"log"
	"net/http"

	"github.com/a-h/templ"
    "github.com/BladenWard/http-go-server/pages"
)

func main() {
    // http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
    //     w.Write([]byte("Hello, World!"))
    // })

    component := pages.hello("World")

    http.Handle("/", templ.Handler(component)) 

    fmt.Println("Server started at http://localhost:4000")
    log.Fatal(http.ListenAndServe(":4000", nil))
}
