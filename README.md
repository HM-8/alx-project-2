# Udagram Image Filtering Microservice

Elastic Beanstalk Deployment (EB_URL): http://udagram-filter-images-dev.us-east-1.elasticbeanstalk.com/



**I suggest you use this image url when testing the edpoint as there is an internal error cased by JIMP.
`image_url = https://images.unsplash.com/photo-1656312184740-b16820c0a4b2?ixlib=rb-1.2.1%26ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto=format%26fit=crop%26w=387%26q=80`



**I have used versioning for my api, therefore my api is found at:

`http://{{EB_URL}}/api/v0/filteredimage?image_url={{image_url}}`
