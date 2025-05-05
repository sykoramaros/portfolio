/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
    locales: ["cs", "en", "mn"],
    sourceLocale: "cs",
    catalogs: [
        {
            path: "<rootDir>/src/locales/{locale}",
            include: ["<rootDir>/src"],
            exclude: ["**/node_modules/**"],
        },
    ],
    format: "po",
};