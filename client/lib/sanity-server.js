import { createClient } from "next-sanity";
import { config } from "./config";

export const sanityClient = createClient(config);

export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: "skLR8HLbd36HLtWdPpR930sKSIYY6OUZt3X0dT5W0rvyTi66tumP1z5xHiEvuTZbn5E13wB0AKmxaOzNZoTgFxVmM2F6VvzlBSt7daPGZ6BDcK8LCYZbSVkoptOzg3OlsES1nY2fD1VMP5ZkrZITfCuvWpNv2flBz7fO7TRqyZaSCVWQn0eP",
});

export const getClient = (usePreview) =>
  usePreview ? previewClient : sanityClient;
