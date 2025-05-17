# NX • SST • Next.js

This is a template for deploying a Next.js to AWS via SST within an NX workspace.

## Setup Route 53 Hosted Zone
Follow the instructions in the follwoing link to setup a hosted zone in Route 53
https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-configuring.html

## Setting Up Credentials

```sh
ENVIRONMENT_NAME=staging sst secret load .env.secret --stage=staging
ENVIRONMENT_NAME=production sst secret load .env.secret --stage=production
```

## Deployment
```sh
ENVIRONMENT_NAME=staging sst deploy --stage=staging
ENVIRONMENT_NAME=production sst deploy --stage=production
```

Or simply using NX
```sh
npx nx run admin:deploy:staging
npx nx run admin:deploy:production
```

## GitHub Secrets

The GitHub Actions workflow requires several secrets to deploy preview
environments.  Create these secrets in your repository under
`Settings` → `Secrets and variables` → `Actions`.

| Secret | Description |
| ------ | ----------- |
| `STAGING_AWS_ACCESS_KEY_ID` | AWS access key for deploying previews |
| `STAGING_AWS_SECRET_ACCESS_KEY` | AWS secret key for deploying previews |
| `STAGING_AWS_REGION` | AWS region where the preview stack will be created |
| `DOMAIN_NAME` | Root domain used for preview URLs |
| `AUTH_JWT_SECRET` | JWT secret for the SST app |

These secrets allow the `.github/workflows/preview.yml` workflow to deploy a
preview stack for each pull request and comment the URL on the PR. When the pull
request is closed the stack is automatically removed.
