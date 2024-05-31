export interface ResourceBrief {
  uid: string;
  name: string;
  url: string;
}

export interface ResourceBriefFetchCollectionResponse {
  results: ResourceBrief[];
}

export interface Resource<Properties> {
  properties: Properties;
  description: string;
  uid: string;
}

export interface ResourceFullFetchOneResponse<Resource> {
  result: Resource;
}
