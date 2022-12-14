const projectsData = [
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Project #1",
        link: "View",
        path: "/projects",
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Project #2",
        link: "View",
        path: "/projects",
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Project #3",
        link: "View",
        path: "/projects",
    },
    {
        id: 4,
        img: "https://images.unsplash.com/photo-1573496774426-fe3db3dd1731?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
        title: "Project #4",
        link: "View",
        path: "/projects",
    },
    {
        id: 5,
        img: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Project #5",
        link: "View",
        path: "/projects",
    },
    {
        id: 6,
        img: "https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Project #6",
        link: "View",
        path: "/projects",
    },
    {
        id: 7,
        img: "https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
        title: "Project #7",
        link: "View",
        path: "/projects",
    },
    {
        id: 8,
        img: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        title: "Project #8",
        link: "View",
        path: "/projects",
    },
    {
        id: 9,
        img: "https://images.unsplash.com/photo-1533749871411-5e21e14bcc7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        title: "Project #9",
        link: "View",
        path: "/projects",
    },
    {
        id: 10,
        img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Project #10",
        link: "View",
        path: "/projects",
    },
    {
        id: 11,
        img: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Project #11",
        link: "View",
        path: "/projects",
    },
    {
        id: 12,
        img: "https://images.unsplash.com/photo-1630672790237-38eeb57cb60b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        title: "Project #12",
        link: "View",
        path: "/projects",
    },
    {
        id: 13,
        img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Project #13",
        link: "View",
        path: "/projects",
    },
    {
        id: 14,
        img: "https://images.unsplash.com/photo-1627634771121-fa3db5779f60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Project #14",
        link: "View",
        path: "/projects",
    },
    {
        id: 15,
        img: "https://images.unsplash.com/photo-1590402494587-44b71d7772f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Project #15",
        link: "View",
        path: "/projects",
    },
];

export default projectsData;