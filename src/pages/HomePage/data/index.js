export const recommendations = [
    { title: "rec-1"},
    { title: "rec-2"},
    { title: "rec-3"},
    { title: "rec-4"},
    { title: "rec-5"},
    { title: "rec-6"},
    { title: "rec-7"},
    { title: "rec-8"},
]

export const headerInfo = [
    { title: "ReactWebsite" },
    { text: "random test text" },
]

export const videoInfo = [
    { title: "VideoTitle" },
    { text: "random test text" },
]


export default function getData() {
    return {
        recommendations,
        headerInfo,
        videoInfo,
    };
}