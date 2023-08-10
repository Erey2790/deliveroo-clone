import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
    projectId: "ds521fjh", // find this at manage.sanity.io or in your sanity.json
    dataset: "production", // this is from those question during 'sanity init'
    useCdn: true,
    apiVersion: "2021-10-21"
  });

  const builer = imageUrlBuilder(client);
  export const urlFor = (source) => urlBuilder.image(source)