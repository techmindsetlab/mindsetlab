export interface Works {
    data: WorksList[]
    meta: Meta
}

export interface WorksList {
    id: number
    documentId: string
    title: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    slug: string
    projectURL: string
    name: string
    tagline: string
    category: string
    date: string
    explanationTitle: string
    explanationDescription: string
    campaignTitle: string
    campaignText: string
    campaignDescription: string
    banner: Banner
}

export interface Banner {
    id: number
    width: number
    height: number
    image: Image
}

export interface Image {
    id: number
    documentId: string
    name: string
    alternativeText: unknown
    caption: unknown
    width: number
    height: number
    formats: Formats
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: unknown
    provider: string
    provider_metadata: ProviderMetadata5
    createdAt: string
    updatedAt: string
    publishedAt: string
}

export interface Formats {
    thumbnail: Thumbnail
    large?: Large
    small?: Small
    medium?: Medium
}

export interface Thumbnail {
    ext: string
    url: string
    hash: string
    mime: string
    name: string
    path: unknown
    size: number
    width: number
    height: number
    sizeInBytes: number
    provider_metadata: ProviderMetadata
}

export interface ProviderMetadata {
    public_id: string
    resource_type: string
}

export interface Large {
    ext: string
    url: string
    hash: string
    mime: string
    name: string
    path: unknown
    size: number
    width: number
    height: number
    sizeInBytes: number
    provider_metadata: ProviderMetadata2
}

export interface ProviderMetadata2 {
    public_id: string
    resource_type: string
}

export interface Small {
    ext: string
    url: string
    hash: string
    mime: string
    name: string
    path: unknown
    size: number
    width: number
    height: number
    sizeInBytes: number
    provider_metadata: ProviderMetadata3
}

export interface ProviderMetadata3 {
    public_id: string
    resource_type: string
}

export interface Medium {
    ext: string
    url: string
    hash: string
    mime: string
    name: string
    path: unknown
    size: number
    width: number
    height: number
    sizeInBytes: number
    provider_metadata: ProviderMetadata4
}

export interface ProviderMetadata4 {
    public_id: string
    resource_type: string
}

export interface ProviderMetadata5 {
    public_id: string
    resource_type: string
}

export interface Meta {
    pagination: Pagination
}

export interface Pagination {
    page: number
    pageSize: number
    pageCount: number
    total: number
}
