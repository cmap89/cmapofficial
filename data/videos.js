export const videos = [
    {
        id: 1,
        title: "Down Day Official Audio",
        youtubeId: "mzmf3YeukF0",
        description: "This song is about those days where you're just stuck in a cycle. When you just wanna stay in bed and scroll, but you would rather jump out of bed and run, but you can't so you stay in bed and scroll, but you would rather... "
    },
    {
        id: 2,
        title: "Whole Again Official Audio",
        youtubeId: "FXA-mqVnAV4",
        description: "This is an introduction to what cmap is all about. It's my way of saying hello and showing you the range of vibes, styles, and genres that you can expect on a cmap song."
    },
    {
        id: 3,
        title: "For The Love Of God [Guitar Cover]",
        youtubeId: "dv8xs5fnl-U",
        description: "With over a quarter of a decade of experience, I love playing music from the greats. This is a cover of one of the greats. "
    },
    {
        id: 4,
        title: "Altitudes 'Melting Point' Official Music Video",
        youtubeId: "4Ux-3Eo975Y",
        description: "From the band Altitudes comes the official video for 'Melting Point.' This song is a powerhouse amplified by this creative music video."
    },
    {
        id: 5,
        title: "Summertime - Easy Target Lyric Video",
        youtubeId: "V59PVJLq0-Y",
        description: "From the band Easy Target, 'Summertime' encapsulates pop punk. The official lyric video instantly takes you away to your favorite place."
    },
]

export const displayVids = [];
for (let i = 1; i < 4; i++) {
    displayVids.push(videos[i].youtubeId);
}
