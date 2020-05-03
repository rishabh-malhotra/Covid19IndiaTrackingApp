export class NewsDataModel {
    title: string;
    description: string;
    summary: string;
    addedOn: string;

    constructor(title: string, description: string, summary: string) {
        this.title = title;
        this.description = description;
        this.summary = summary;
        this.addedOn = new Date().toString();
    }
}
