export class SourcesRequestParameters {
  constructor(
    public category: string,
    public language: string,
    public country: string
  ) {}
}

export class NewsRequestParameters {
  constructor(
    public q: string,
    public sources: string,
    public language: string,
    public from: string,
    public to: string
  ) {}
}