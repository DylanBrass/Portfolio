export default class Repo {
    id: number;
    name: string;
    html_url: string;
    url: String

    constructor(id: number, name: string, html_url: string, url: String) {
        this.id = id;
        this.name = name;
        this.html_url = html_url;
        this.url = url
    }
}