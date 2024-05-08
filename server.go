package main

import (
    // "sorting/algos"
	// "math/rand"
	"net/http"
)

func main() {
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        w.Write([]byte("Hello, World!"))
    })

    http.HandleFunc("/hello", func(w http.ResponseWriter, r *http.Request) {
    })


    http.ListenAndServe(":4000", nil)
}
