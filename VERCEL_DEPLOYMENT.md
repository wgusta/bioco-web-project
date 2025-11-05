# Vercel Deployment Guide

## Configuration

The Next.js application is located in the `frontend/` subdirectory.

### Option 1: Vercel Dashboard (Recommended)

1. Go to your Vercel project settings
2. Navigate to **Settings** → **General**
3. Set **Root Directory** to `frontend`
4. Vercel will automatically detect Next.js and use the correct build settings

### Option 2: Using vercel.json (Alternative)

If you prefer to configure via file, create a `vercel.json` in the project root:

```json
{
  "buildCommand": "cd frontend && npm install && npm run build",
  "outputDirectory": "frontend/.next",
  "installCommand": "cd frontend && npm install",
  "framework": "nextjs",
  "rootDirectory": "frontend"
}
```

## Environment Variables

Set these in Vercel Dashboard → Settings → Environment Variables:

- `PROCESSWIRE_API_URL` - API URL for ProcessWire backend
- `MATOMO_URL` - Matomo analytics URL (optional)
- `MATOMO_SITE_ID` - Matomo site ID (optional)

## Build Verification

The project should build successfully with:
- Next.js 14.0.0
- React 18.2.0
- TypeScript 5.0.0

All dependencies are correctly listed in `frontend/package.json`.
