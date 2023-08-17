import { defineMiddleware } from 'astro/middleware';

// https://wicg.github.io/user-preference-media-features-headers/
const SEC_CH_HEADER_MAP = {
  "Sec-CH-Prefers-Reduced-Motion": "prefersReducedMotion",
  "Sec-CH-Prefers-Reduced-Transparency": "prefersReducedTransparency",
  "Sec-CH-Prefers-Contrast": "prefersContrast",
  "Sec-CH-Forced-Colors": "forcedColors",
  "Sec-CH-Prefers-Color-Scheme": "prefersColorScheme",
  "Sec-CH-Prefers-Reduced-Data": "prefersReducedData"
}
const SEC_CH_HEADERS = Object.keys(SEC_CH_HEADER_MAP);

export const clientHints = defineMiddleware(async ({ request, locals }, next) => {
  locals.clientHints = locals.clientHints ?? {};
  for (const name of SEC_CH_HEADERS) {
    request.headers.append('Accept-CH', name);
    request.headers.append('Vary', name);
    const value = request.headers.get(name);
    if (value) {
      locals.clientHints[SEC_CH_HEADER_MAP[name]] = value;
    }
  }
  return next();
});
