# ItemsService
* This application is part of the [FargateExample](https://github.com/JoeNonExotic/FargateExample). Please refer to the readme of the `FargateExample` to get an overview of application architecture and other instructions. Later on, you will be redirected to this readme to build docker images to be pushed to AWS ECR repository. 
* See [DockerFile](DockerFile) for more details on how the container is initialized.

## Docker Build

### Build Docker Images
* If using intel cpu: Run `docker build -t items-service .` 
* If using apple silicon cpu: Run `docker buildx build --platform=linux/amd64 -t items-service .`

### Tag Docker Images
```bash
docker tag items-service:latest <aws_acc_id>.dkr.ecr.us-west-2.amazonaws.com/items-service:latest
```

### Testing Images Locally

* Run the following: 
```bash
docker run -p8080:80 items-service
```

OR 

```bash
docker run --platform linux/amd64 -p8080:80 items-service
```

* Service should be accessible via: `localhost:8080/api/items`
