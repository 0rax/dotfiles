# Docker Credentials Storage

See [the Official Docker documentation about credentials store](https://docs.docker.com/engine/reference/commandline/login/#credentials-store) for a better understanding of why this is needed.

## Required Software

- Docker Credential Helpers: https://github.com/docker/docker-credential-helpers
- AWS ECR Credential Helper: https://github.com/awslabs/amazon-ecr-credential-helper

## Linux

The following configuration will use the [`ecr-login` credential backend](https://github.com/awslabs/amazon-ecr-credential-helper) by default (without requiring you to ever fetch ECR login data manually) allow you to access all images your current AWS Profile has access too. It also sets up the authentication backend for the Docker hub and `quay.io` to [`secretservice`](https://github.com/docker/docker-credential-helpers) which will store credentials to the system keychain when you login.

```txt
$ vi ~/.docker/config.json
```
```json
{
	"credsStore": "ecr-login",
	"credHelpers": {
		"https://index.docker.io/v1/": "secretservice",
		"https://quay.io/v1/": "secretservice"
	}
}
```

If you need another registry to use the normal `secretservice` backend, just add another line to the `credHelpers` block with its URL to overwrite the default `ecr-login` backend.

## macOS

The following configuration will use the [`ecr-login` credential backend](https://github.com/awslabs/amazon-ecr-credential-helper) by default (without requiring you to ever fetch ECR login data manually) allow you to access all images your current AWS Profile has access too. It also sets up the authentication backend for the Docker hub and `quay.io` to [`osxkeychain`](https://github.com/docker/docker-credential-helpers) which will store credentials to the system keychain when you login.

```txt
$ vi ~/.docker/config.json
```
```json
{
	"credsStore": "ecr-login",
	"credHelpers": {
		"https://index.docker.io/v1/": "osxkeychain",
		"https://quay.io/v1/": "osxkeychain"
	}
}
```

If you need another registry to use the normal `osxkeychain` backend, just add another line to the `credHelpers` block with its URL to overwrite the default `ecr-login` backend.
