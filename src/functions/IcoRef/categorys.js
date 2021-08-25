import { faDatabase, faFileCode, faLaptopCode, faGlobe, faDotCircle,faUserTie } from "@fortawesome/free-solid-svg-icons";


export default function getIconCategory(list) {

    if (list) {
        let icoList = list.map(e => ({...e, icon: getIcon(e.categoryId)}))
        return icoList
    }
    else {
        return []
    }
}


function getIcon(id) {

    const categoryIcon = categoryIcons.filter(e => e.id === id)
    if (categoryIcon.length === 0) return { id: id, name: id, icon: faDotCircle }
    return categoryIcon[0].icon
}


const categoryIcons = [
    {
        id: 0,
        name: 'Bd',
        icon: faDatabase
    },

    {
        id: 1,
        name: 'BackEnd',
        icon: faFileCode
    },
    {
        id: 2,
        name: "FrontEnd",
        icon: faLaptopCode
    },
    {
        id: 3,
        name: '"Deployment"',
        icon: faGlobe
    },
    {
        id: 4,
        name: "Others",
        icon: faDotCircle
    }
    ,
    {
        id: 5,
        name: "Profile",
        icon: faUserTie
    }
]


