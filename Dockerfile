FROM golang:1-bookworm as builder

WORKDIR /app

COPY go.mod .
COPY . .

RUN go mod download
RUN go build -o bin .

EXPOSE 4000

ENTRYPOINT ["/app/bin"]
