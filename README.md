# K8 Example Application

A modern microservices application with a React + TypeScript frontend and FastAPI backend, deployed using Kubernetes, Helm, and Skaffold.

## Project Structure

```
k8-react-fastapi/
├── apps/                    # Applications directory
│   ├── example/            # React TypeScript frontend application
│   └── api/               # FastAPI backend application
├── deploy/                # Deployment configurations
│   ├── root/             # Root application configuration
│   ├── argocd/           # ArgoCD configurations
│   └── traefik/          # Traefik configurations
└── skaffold.yaml         # Skaffold configuration
```

## Prerequisites

- Docker Desktop with Kubernetes enabled
- kubectl
- helm
- skaffold
- node.js (v18 or later)
- python (v3.11 or later)

## Local Development

1. Start the Kubernetes cluster:
```bash
kubectl config use-context docker-desktop
```

2. Install ArgoCD:
```bash
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

3. Install Traefik:
```bash
helm repo add traefik https://traefik.github.io/charts
helm repo update
helm install traefik traefik/traefik -f deploy/traefik/values.yaml
```

4. Add local DNS entries to /etc/hosts:
```
127.0.0.1 example.localhost
127.0.0.1 api.example.localhost
```

5. Start development environment:
```bash
skaffold dev
```

## Accessing the Applications

- Frontend: http://example.localhost
- Backend API: http://api.example.localhost/api/hello
- ArgoCD UI: http://localhost:8080 (when port-forwarded)
- Traefik Dashboard: http://localhost:9000/dashboard/

## Production Deployment

1. Deploy to production:
```bash
skaffold run --profile=prod
```

## Features

- React + TypeScript frontend with Tailwind CSS
- FastAPI backend with hot reloading
- Kubernetes deployment with Helm charts
- ArgoCD for GitOps-based continuous delivery
- Traefik for ingress control
- Local development with hot reloading
- Production-ready configuration
