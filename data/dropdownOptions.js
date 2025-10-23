export const options = [
    {
        'value':"Lessons",
        'label':"Lessons",
    },
    {
        'value':"Recording/Mixing Services",
        'label':"Recording/Mixing Services",
    },
    {
        'value':"Guitar Services",
        'label':"Guitar Services",
    },
    {
        'value':"Drum Services",
        'label':"Drum Services",
    },
]

export function handleOptionSelect(option) {
    console.log(`Selectd: ${option.value}`);
}