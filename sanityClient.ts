import { createClient } from "next-sanity";

const sanityClient = createClient({
    projectId: "2y82gi9j",
    dataset: "production",
    apiVersion: "2023-01-01",
    useCdn: true,
});

export default sanityClient;
