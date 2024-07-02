/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
    images: {
        remotePatterns: [
            {
                protocol: &apos;https&apos;,
                hostname: &apos;**&apos;,
                port: &apos;&apos;,
                pathname: &apos;**&apos;,
            },
        ],
    },
};

export default config;
