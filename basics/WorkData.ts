export default class WorkData {
    id: number;  // Year + Month + Day of start/end of work (20220101, 20230318, etc.)
    visible: boolean;
    imageFirst: boolean;
    title: string;
    linkName: string;
    description: string;
    descriptionBold: string;
    category: string;
    urlImage: string;
    skills: string[];
    descriptionLong1: string;
    descriptionLongBold1: string;
    descriptionLong2: string;
    descriptionLongBold2: string;
    urlAllImages: string[];
    link: string;

    constructor(
        id: number,
        visible: boolean,
        imageFirst: boolean,
        title: string,
        linkName: string,
        description: string,
        descriptionBold: string,
        category: string,
        urlImage: string,
        skills: string[],
        descriptionLong1: string,
        descriptionLongBold1: string,
        descriptionLong2: string,
        descriptionLongBold2: string,
        urlAllImages: string[],
        link: string
    ) {
        this.id = id;
        this.visible = visible;
        this.imageFirst = imageFirst;
        this.title = title;
        this.linkName = linkName;
        this.description = description;
        this.descriptionBold = descriptionBold;
        this.category = category;
        this.urlImage = urlImage;
        this.skills = skills;
        this.descriptionLong1 = descriptionLong1;
        this.descriptionLongBold1 = descriptionLongBold1;
        this.descriptionLong2 = descriptionLong2;
        this.descriptionLongBold2 = descriptionLongBold2;
        this.urlAllImages = urlAllImages;
        this.link = link;
    }
}
