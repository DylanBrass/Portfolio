export default class Repo {
    id: number;
    name: string;
    html_url: string;
    url: string

    constructor(id: number, name: string, html_url: string, url: string) {
        this.id = id;
        this.name = name;
        this.html_url = html_url;
        this.url = url
    }
}