export type Allposts = {
    posts: [
        {
            slug: string,
            title: string,
            date: string,
            image: string,
            isFeatured: boolean,
            excerpt: string,
            content: string
        }
    ]
}

export type Post = {
    post: {
        slug: string,
        title: string,
        date: string,
        image: string,
        isFeatured: boolean,
        excerpt: string,
        content: string
    }
}

export type HeaderProps = {
    title: string,
    image: string
}