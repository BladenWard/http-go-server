package main

import (
	// "sorting/algos"
	// "math/rand"
    "fmt"
	"log"
	"net/http"
)

func main() {
    // http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
    //     w.Write([]byte("Hello, World!"))
    // })

    fmt.Println("Server started at http://localhost:4000")
    http.Handle("/", http.FileServer(http.Dir("./public"))) 
    log.Fatal(http.ListenAndServe(":4000", nil))
}
