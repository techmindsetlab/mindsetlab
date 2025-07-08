export interface WorkDetailTypes {
    data: Data
}

export interface Data {
    id: number
    attributes: Attributes
}

export interface Attributes {
    documentId: string
    title: string
    createdAt: string
    updatedAt: string
    publishedAt: unknown
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
    scopeOfWorks: ScopeOfWork[]
    banner: Banner
    highlightVideo: HighlightVideo
    highlightPhoto: HighlightPhoto
    campaignHighlight: CampaignHighlight
    campaignLandscapeMedia: CampaignLandscapeMedia
    campaignPortraitMedia: CampaignPortraitMedia
    engagement: Engagement
}

export interface ScopeOfWork {
    id: number
    scopeOfWork: string
}

export interface Banner {
    id: number
    width: number
    height: number
    image: Image
}

export interface Image {
    data: Data2
}

export interface Data2 {
    id: number
    attributes: Attributes2
}

export interface Attributes2 {
    documentId: string
    name: string
    alternativeText: unknown
    caption: string | undefined
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
    large: Large
    small: Small
    medium: Medium
    thumbnail: Thumbnail
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
    provider_metadata: ProviderMetadata
}

export interface ProviderMetadata {
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
    provider_metadata: ProviderMetadata2
}

export interface ProviderMetadata2 {
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
    provider_metadata: ProviderMetadata3
}

export interface ProviderMetadata3 {
    public_id: string
    resource_type: string
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

export interface HighlightVideo {
    data: Daum
}

export interface Daum {
    id: number
    attributes: Attributes3
}

export interface Attributes3 {
    documentId: string
    name: string
    alternativeText: unknown
    caption: string | undefined
    width: unknown
    height: unknown
    formats: unknown
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: string
    provider: string
    provider_metadata: ProviderMetadata6
    createdAt: string
    updatedAt: string
    publishedAt: string
}

export interface ProviderMetadata6 {
    public_id: string
    resource_type: string
}

export interface HighlightPhoto {
    data: Daum2[]
}

export interface Daum2 {
    id: number
    attributes: Attributes4
}

export interface Attributes4 {
    documentId: string
    name: string
    alternativeText: unknown
    caption: string | undefined
    width: number
    height: number
    formats: Formats2
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: unknown
    provider: string
    provider_metadata: ProviderMetadata11
    createdAt: string
    updatedAt: string
    publishedAt: string
}

export interface Formats2 {
    large: Large2
    small: Small2
    medium: Medium2
    thumbnail: Thumbnail2
}

export interface Large2 {
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
    provider_metadata: ProviderMetadata7
}

export interface ProviderMetadata7 {
    public_id: string
    resource_type: string
}

export interface Small2 {
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
    provider_metadata: ProviderMetadata8
}

export interface ProviderMetadata8 {
    public_id: string
    resource_type: string
}

export interface Medium2 {
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
    provider_metadata: ProviderMetadata9
}

export interface ProviderMetadata9 {
    public_id: string
    resource_type: string
}

export interface Thumbnail2 {
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
    provider_metadata: ProviderMetadata10
}

export interface ProviderMetadata10 {
    public_id: string
    resource_type: string
}

export interface ProviderMetadata11 {
    public_id: string
    resource_type: string
}

export interface CampaignHighlight {
    data: Daum3[]
}

export interface Daum3 {
    id: number
    attributes: Attributes5
}

export interface Attributes5 {
    documentId: string
    name: string
    alternativeText: unknown
    caption: string | undefined
    width: number
    height: number
    formats: Formats3
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: unknown
    provider: string
    provider_metadata: ProviderMetadata16
    createdAt: string
    updatedAt: string
    publishedAt: string
}

export interface Formats3 {
    large: Large3
    small: Small3
    medium: Medium3
    thumbnail: Thumbnail3
}

export interface Large3 {
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
    provider_metadata: ProviderMetadata12
}

export interface ProviderMetadata12 {
    public_id: string
    resource_type: string
}

export interface Small3 {
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
    provider_metadata: ProviderMetadata13
}

export interface ProviderMetadata13 {
    public_id: string
    resource_type: string
}

export interface Medium3 {
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
    provider_metadata: ProviderMetadata14
}

export interface ProviderMetadata14 {
    public_id: string
    resource_type: string
}

export interface Thumbnail3 {
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
    provider_metadata: ProviderMetadata15
}

export interface ProviderMetadata15 {
    public_id: string
    resource_type: string
}

export interface ProviderMetadata16 {
    public_id: string
    resource_type: string
}

export interface CampaignLandscapeMedia {
    data: Data3
}

export interface Data3 {
    id: number
    attributes: Attributes6
}

export interface Attributes6 {
    documentId: string
    name: string
    alternativeText: unknown
    caption: string | undefined
    width: number
    height: number
    formats: Formats4
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: unknown
    provider: string
    provider_metadata: ProviderMetadata21
    createdAt: string
    updatedAt: string
    publishedAt: string
}

export interface Formats4 {
    large: Large4
    small: Small4
    medium: Medium4
    thumbnail: Thumbnail4
}

export interface Large4 {
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
    provider_metadata: ProviderMetadata17
}

export interface ProviderMetadata17 {
    public_id: string
    resource_type: string
}

export interface Small4 {
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
    provider_metadata: ProviderMetadata18
}

export interface ProviderMetadata18 {
    public_id: string
    resource_type: string
}

export interface Medium4 {
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
    provider_metadata: ProviderMetadata19
}

export interface ProviderMetadata19 {
    public_id: string
    resource_type: string
}

export interface Thumbnail4 {
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
    provider_metadata: ProviderMetadata20
}

export interface ProviderMetadata20 {
    public_id: string
    resource_type: string
}

export interface ProviderMetadata21 {
    public_id: string
    resource_type: string
}

export interface CampaignPortraitMedia {
    data: Data4
}

export interface Engagement {
    title: string;
    description: string;
    data: {
        id: number;
        value: number;
        text: string;
        type: "Percentage" | "Number"
    }[]
}

export interface Data4 {
    id: number
    attributes: Attributes7
}

export interface Attributes7 {
    documentId: string
    name: string
    alternativeText: unknown
    caption: string | undefined
    width: number
    height: number
    formats: Formats5
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: unknown
    provider: string
    provider_metadata: ProviderMetadata26
    createdAt: string
    updatedAt: string
    publishedAt: string
}

export interface Formats5 {
    large: Large5
    small: Small5
    medium: Medium5
    thumbnail: Thumbnail5
}

export interface Large5 {
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
    provider_metadata: ProviderMetadata22
}

export interface ProviderMetadata22 {
    public_id: string
    resource_type: string
}

export interface Small5 {
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
    provider_metadata: ProviderMetadata23
}

export interface ProviderMetadata23 {
    public_id: string
    resource_type: string
}

export interface Medium5 {
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
    provider_metadata: ProviderMetadata24
}

export interface ProviderMetadata24 {
    public_id: string
    resource_type: string
}

export interface Thumbnail5 {
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
    provider_metadata: ProviderMetadata25
}

export interface ProviderMetadata25 {
    public_id: string
    resource_type: string
}

export interface ProviderMetadata26 {
    public_id: string
    resource_type: string
}
