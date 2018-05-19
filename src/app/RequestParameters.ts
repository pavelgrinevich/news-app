export class SourcesRequestProperties {
  constructor(
    public category: string,
    public language: string,
    public country: string
  ) {}
}

export class NewsRequestProperties {
  constructor(
    public q: string,
    public sources: string,
    public language: string,
    public from: string,
    public to: string
  ) {}
}