angular.module("starter.configs", [])

.constant("BaseConfiguration", {
	"url": "https://www.example.com",
	"debug": false
})

.constant("APP", {
	"devMode": false
})

.constant("ServerConfiguration", {
	"baseApiUrl": "http://staging.com/api/v1/",
	"domain": "http://staging.com"
})

;