export class SourcesResponseProperties {
  constructor(
    public status: string,
    public sources: object[],
  ) {}
}

export class NewsResponseProperties {
  constructor(
    public status: string,
    public totalResults: string,
    public articles: object[],
  ) {}
}