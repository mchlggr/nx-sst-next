import type { OpenNextConfig } from 'open-next/types/open-next';
const buildEnv = process.env.BUILD_ENV ?? process.env.ENVIRONMENT_NAME ?? 'production';
const config = {
        default: { minify: true },
        buildCommand: `rm -rf apps/admin/.next apps/admin/package.json apps/admin/node_modules && npx nx run admin:build:${buildEnv} --outputPath=apps/admin`,
        packageJsonPath: '../../package.json',
} satisfies OpenNextConfig;

export default config;
export type Config = typeof config;
