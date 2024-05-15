package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {

    http.Handle("/", http.FileServer(http.Dir("./public"))) 

    fmt.Println("Server started at http://localhost:4000")
    log.Fatal(http.ListenAndServe(":4000", nil))
}
