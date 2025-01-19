export default {
    name: "toolTwo",
    type: "document",
    title: "Tool Two",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Tool Title",
        },
        {
            name: "description",
            type: "text",
            title: "Tool Description",
        },
        {
            name: "versions",
            type: "array",
            title: "Versions",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "versionNumber",
                            type: "string",
                            title: "Version Number",
                        },
                        {
                            name: "releaseDate",
                            type: "date",
                            title: "Release Date",
                        },
                        {
                            name: "file",
                            type: "file",
                            title: "Download File (.zip)",
                        },
                    ],
                },
            ],
        },
        {
            name: "releaseNotes",
            type: "array",
            title: "Release Notes",
            of: [{ type: "string" }],
        },
    ],
};
