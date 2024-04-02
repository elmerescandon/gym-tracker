import rss, {pagesGlobToRssItems} from "@astrojs/rss";

export async function GET(context) {
    return rss({
        title: "Astro Learner - Raul",
        description: "My journey learning Astro with Raul Escandon",
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
        customData: `<language>en-us</language>`,
    });
}
