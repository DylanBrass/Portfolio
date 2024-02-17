const dictionaries = {
    en: () => import("./en.json").then(r => r.default),
    fr: () => import("./fr.json").then(r => r.default)
}

export const getDictionary = (lang) => {
    return dictionaries[lang]();
}