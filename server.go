package main

import (
	// "sorting/algos"
	// "math/rand"
	"log"
	"net/http"
)

func main() {
    // http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
    //     w.Write([]byte("Hello, World!"))
    // })

    http.Handle("/", http.FileServer(http.Dir("./public"))) 
    log.Fatal(http.ListenAndServe(":4000", nil))
}
