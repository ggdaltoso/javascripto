import { WebContainer } from '@webcontainer/api';

// Singleton: WebContainer can only be booted once per page
let wcInstance: WebContainer | null = null;
let wcBootPromise: Promise<WebContainer> | null = null;

export function getWebContainer(): Promise<WebContainer> {
  if (wcInstance) return Promise.resolve(wcInstance);
  if (!wcBootPromise) {
    wcBootPromise = WebContainer.boot().then(wc => {
      wcInstance = wc;
      return wc;
    });
  }
  return wcBootPromise;
}
