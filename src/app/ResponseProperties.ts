export class SourcesResponseProperties {
  constructor(
    public category: string,
    public language: string,
    public country: string
  ) {}
}

export class NewsResponseProperties {
  constructor(
    public status: string,
    public totalResults: string,
    public articles: object[],
  ) {}
}